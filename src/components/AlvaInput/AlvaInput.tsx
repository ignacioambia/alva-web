import { BaseSyntheticEvent, ReactElement, useState, useEffect, useRef } from "react";

import "./AlvaInput.scss";

export interface ErrorHandler {
  inputIsValid: (validation: any) => boolean;
  msg: string;
}

export interface AlvaInputProps {
  icon: ReactElement;
  label: string;
  value?: string;
  errorHandler?: ErrorHandler;
  onChange?: (value: string) => any;
}

export function AlvaInput({
  icon,
  label,
  value: originalValue,
  errorHandler,
  onChange,
}: AlvaInputProps) {
  const [value, setValue] = useState<string>("");
  const [withErrors, setWithErrors] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const classList = ["input-wrapper", value.length && "filled"].join(" ");

  const handleInputChange = ({ target }: BaseSyntheticEvent) => {
    setValue(target.value);
    onChange && onChange(target.value);
  };

  const focusElement = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const checkErrors = (input: string) => {
    setWithErrors(() => {
      if (!errorHandler?.inputIsValid) {
        return false;
      }
      return !errorHandler.inputIsValid(input);
    });
  };

  useEffect(() => {
    if(originalValue != null){
      setValue(() => originalValue);
      checkErrors(originalValue);
    }
  }, [originalValue]);

  return (
    <div className={"input-container " + (withErrors ? "with-errors" : "")}>
      <div
        tabIndex={0}
        className={classList}
        onClick={focusElement}
        onBlur={() => checkErrors(value)}
      >
        <div className="icon-wrapper">{icon}</div>
        <div className="input">
          <div className="label">{label}</div>
          <div>
            <input
              value={value}
              ref={inputRef}
              onChange={handleInputChange}
              type="string"
            />
          </div>
        </div>
      </div>
      <div className="error-msg">{errorHandler?.msg}</div>
    </div>
  );
}
