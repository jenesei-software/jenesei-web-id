import { IButtonPlaystationShortContainer } from "../short";

export interface IButtonPlaystationLong extends IButtonPlaystationShortContainer {
  icon?: () => JSX.Element;
  title: string;
}
