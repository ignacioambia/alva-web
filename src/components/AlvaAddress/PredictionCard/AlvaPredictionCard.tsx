import { Icon } from "@iconify/react/dist/iconify.js";
import { AlvaBtn } from "../../AlvaBtn/AlvaBtn";
import "./AlvaPredictionCard.scss";

enum TitleSection {
  title,
  subtitle,
}

export interface AlvaPredictionCardProps {
  prediction: any;
  onClick?: () => any;
  selected?: boolean;
}

const getDescriptionSubstr = (
  description: string,
  section: TitleSection
): string => {
  const subs = description.split(",");
  const title = subs.shift();
  return section == TitleSection.title ? title || "" : subs.join(",") || "";
};

export function AlvaPredictionCard({
  onClick,
  prediction,
  selected,
}: AlvaPredictionCardProps) {
  const classes: string = [
    "prediction-card",
    selected ? 'selected': null
  ].filter(e=>e).join(' ')
  return (
    <div className={classes} onClick={onClick}>
      <div className="description">
        <div className="title">
          {getDescriptionSubstr(prediction.description, TitleSection.title)}
        </div>
        <div className="subtitle">
          {getDescriptionSubstr(prediction.description, TitleSection.subtitle)}
        </div>
      </div>
      <div>

      <AlvaBtn variant="icon">
        <Icon icon="material-symbols:edit-location-alt-outline-sharp" />
      </AlvaBtn>
      
      </div>
    </div>
  );
}
