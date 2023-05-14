import { ReactNode } from "react";
import "./AlvaBtn.scss";

interface AlvaBtnProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export function AlvaBtn({ disabled, children, onClick }: AlvaBtnProps) {
  return (
    <button onClick={onClick} disabled={disabled} className="alva-btn-wrapper">
      {children}
    </button>
  );
}
