export interface ButtonVolumetricShortProps {
  icon: () => JSX.Element;
  onClick?: () => void;
  checked?: boolean;
  disabled?: boolean;
  title?: string;
}
