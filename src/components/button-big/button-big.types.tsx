import { ButtonBigWrapperProps } from ".";

export interface IButtonBig extends ButtonBigWrapperProps {
  onClick?: () => void;
  title: string;
  icon?: () => JSX.Element;
  isIconColor?: boolean;
}
