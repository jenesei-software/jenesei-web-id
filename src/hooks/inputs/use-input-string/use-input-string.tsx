import { useState, useMemo } from "react";
import { StyledInputIcon, StyledInputString, StyledInputWrapper, UseInputStringProps } from ".";

export const useInputString = (
  props: UseInputStringProps = {
    initialValue: "",
    placeholder: "",
    required: false,
    noSpaces: false,
    type: "text",
  }
) => {
  const [value, setValue] = useState<string>(props.initialValue || "");

  const changeValue = (e: React.FormEvent<HTMLInputElement>) => {
    let newValue = (e.target as HTMLInputElement).value;

    if (props.noSpaces) {
      newValue = newValue.replace(/\s/g, ""); // Remove spaces
    }

    setValue(newValue);
  };

  const InputString = useMemo(
    () => (
      <StyledInputWrapper>
        <StyledInputString
          placeholder={props.placeholder}
          onChange={changeValue}
          maxLength={40}
          value={value}
          type={props.type}
          required={props.required}
        />
        <StyledInputIcon icon={props.icon} onClick={props.icon?.onCLick}>
          {props.icon && props.icon.value()}
        </StyledInputIcon>
      </StyledInputWrapper>
    ),
    [value, props.placeholder, props.type, props.required]
  );

  return { value, InputString };
};
