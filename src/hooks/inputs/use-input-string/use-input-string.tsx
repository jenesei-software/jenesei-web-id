import { useState, useMemo } from "react";
import { StyledInputString, UseInputStringProps } from ".";

export const useInputString = (
  props: UseInputStringProps = {
    initialValue: "",
    placeholder: "",
    required: false,
    type: "text",
  }
) => {
  const [value, setValue] = useState<string>(props.initialValue || "");

  const changeValue = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = (e.target as HTMLInputElement).value;
    newValue !== undefined && setValue(newValue);
  };

  const InputString = useMemo(
    () => (
      <StyledInputString
        placeholder={props.placeholder}
        onChange={changeValue}
        maxLength={40}
        value={value}
        type={props.type}
        required={props.required}
      />
    ),
    [value, props.placeholder, props.type, props.required]
  );

  return { value, InputString };
};
