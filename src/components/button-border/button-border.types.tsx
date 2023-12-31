import { ButtonBorderWrapperProps } from ".";

export interface IButtonBorder extends ButtonBorderWrapperProps {
  onClick?: () => void;
  title: string;
}
