import { useRef, useState } from "react";
import { AlvaInput } from "../AlvaInput/AlvaInput";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./AlvaAddress.scss";
import magnifyingGlass from "./magnifying-glass.svg";

declare var google: any;

const googleService = new google.maps.places.AutocompleteService();

enum TitleSection {
  title,
  subtitle,
}

export function AlvaAddress() {
  const [predictions, setPredictions] = useState<any[]>([]);
  const [value, setValue] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);
  const containerRef = useRef<any>(null);

  const handleInputChange = (value: string) => {
    setValue(() => value);
    if (!value.length) {
      setPredictions(() => []);
      return;
    }
    googleService
      .getPlacePredictions({
        input: value,
      })
      .then(({ predictions }: any) => {
        setPredictions(predictions);
      });
  };

  const getDescriptionSubstr = (
    description: string,
    section: TitleSection
  ): string => {
    const subs = description.split(",");
    const title = subs.shift();
    return section == TitleSection.title ? title || "" : subs.join(",") || "";
  };

  const focusElement = () => {
    setFocused(true)
    const eventHandler = (event: any) => {
      const clickedInside = containerRef.current.contains(event.target);
      setFocused(clickedInside);
    };
    document.addEventListener("click", eventHandler, {
      capture: true,
      once: true,
    });
  };

  const chooseAddress = (address: any) => {
  }

  return (
    <div
      ref={containerRef}
      className={`address-container ${predictions.length ? "searching" : ""}`}
      onClick={focusElement}
    >
      <AlvaInput
        label="Busca dirección..."
        icon={<Icon icon="material-symbols:location-on-outline" />}
        onChange={handleInputChange}
      />
      <div className="predictions-wrapper">
        {focused ? predictions.map((e: any, i: number) => (
          <div key={i} className="prediction-card" onClick={() => chooseAddress(e)}>
            <div className="title">
              {getDescriptionSubstr(e.description, TitleSection.title)}
            </div>
            <div className="subtitle">
              {getDescriptionSubstr(e.description, TitleSection.subtitle)}
            </div>
          </div>
        )): null}
        {!predictions.length && value.length ? (
          <div className="prediction-card not-found">
            <img src={magnifyingGlass} />
            <div>No se encontró la ubicación...</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
