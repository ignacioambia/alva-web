import { ReactNode, useState } from "react";
import "./AlvaBtn.scss";

interface AlvaBtnProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'transparent' | 'icon'
}

export function AlvaBtn({ disabled, children, onClick, variant = "default" }: AlvaBtnProps) {
  const [clicked, setClicked] = useState<boolean>(false);
  const classes: string = [
    "alva-btn-wrapper",
    variant,
    clicked ? 'clicked': ''
  ].filter(e=>e).join(' ');

  const handleClickEvent = () => {
    onClick && onClick();
    setClicked(true)
    setTimeout(() => setClicked(false), 300);
  }
  return (
    <button onClick={handleClickEvent} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
