import { HTMLInputTypeAttribute } from "react";

export interface UseInputStringProps {
  initialValue?: string;
  placeholder?: string;
  required?: boolean;
  noSpaces?: boolean;
  type?: HTMLInputTypeAttribute;
  icon?: {
    value: () => JSX.Element;
    onCLick: () => void;
  };
}
