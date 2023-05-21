import { forwardRef, useEffect, useRef, useState } from "react";
import { AlvaInput } from "../AlvaInput/AlvaInput";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./AlvaAddress.scss";
import magnifyingGlass from "./magnifying-glass.svg";
import { AlvaPredictionCard } from "./PredictionCard/AlvaPredictionCard";

declare var google: any;

const googleService = new google.maps.places.AutocompleteService();


export function AlvaAddress() {
  const [predictions, setPredictions] = useState<any[]>([]);
  const [value, setValue] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);
  const [searching, setSearching] = useState<boolean>(false);
  const containerRef = useRef<any>(null);

  const handleInputChange = (value: string) => {
    setValue(() => value);
    if (!value.length) {
      setPredictions(() => []);
      return;
    }
    setSearching(true);
    googleService
      .getPlacePredictions({
        input: value,
      })
      .then(({ predictions }: any) => {
        setPredictions(predictions);
        setSearching(false);
      });
  };


  const focusElement = () => {
    setFocused(true)
    const eventHandler = (event: any) => {
      const clickedInside = containerRef.current.contains(event.target);
      if(!clickedInside){
        setFocused(false);
        setValue('');
      }
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
      className={`address-container ${predictions ? "searching" : ""}`}
      onClick={focusElement}
    >
      <AlvaInput
        label="Busca dirección..."
        icon={<Icon icon="material-symbols:location-on-outline" />}
        onChange={handleInputChange}
        value={value}
      />
      <div className="predictions-wrapper">
        {focused && predictions ? predictions.map((e: any, i: number) => (
          <AlvaPredictionCard key={i} prediction={e} onClick={() => chooseAddress(e)}/>
        )): null}
        {!predictions.length && value.length  && !searching ? (
          <div className="prediction-card not-found">
            <img src={magnifyingGlass} />
            <div>No se encontró la ubicación...</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
