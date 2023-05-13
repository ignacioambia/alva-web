import { BaseSyntheticEvent, ReactElement, useState, useEffect, useRef } from "react";

import "./AlvaInput.scss";

interface AlvaInputProps {
  icon: ReactElement;
  label: string;
  value?: string;
}

export function AlvaInput({ icon, label, value: originalValue }: AlvaInputProps) {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("Component was just mounted");
    if(originalValue){
      setValue(originalValue);
    }
  }, [])

  console.log('Calling renderFunction');

  const classList =  [
    'input-wrapper',
    value.length && 'filled'
  ].join(' ');

  const handleInputChange = ({target}: BaseSyntheticEvent) => {
    setValue(target.value);
  };

  const focusElement = () => {
    if(inputRef.current){
      inputRef.current.focus();
    }
  };

  return (
    <div tabIndex={0} className={classList} onClick={focusElement}>
      <div className="icon-wrapper">{icon}</div>
      <div className="input">
        <div className="label">{label}</div>
        <div>
          <input value={value} ref={inputRef} onChange={handleInputChange} type="string" />
        </div>
      </div>
    </div>
  );
}
