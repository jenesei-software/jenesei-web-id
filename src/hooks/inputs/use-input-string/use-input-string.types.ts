import { HTMLInputTypeAttribute } from "react";

export interface UseInputStringProps {
  initialValue?: string;
  placeholder?: string;
  required?:boolean;
  type?: HTMLInputTypeAttribute
}
