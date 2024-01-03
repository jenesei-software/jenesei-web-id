import { IconCurved } from "@assets/icons/icon-curved/icon-curved";

export interface IUserRout {
  icon: () => JSX.Element;
  title: string;
  description: string;
  to: string;
  path: string;
  key: string;
  element: JSX.Element;
}
export interface IUserRoutsForRouter extends Pick<IUserRout, "path" | "element" | "key"> {}
export interface IUserRoutsForMenu extends Pick<IUserRout, "icon" | "title" | "description"> {}

export const UserRouts: IUserRout[] = [
  {
    icon: IconCurved.Profile,
    title: "PersonalInfo.title",
    description: "PersonalInfo.description",
    to: "/user/personal-info",
    path: "personal-info",
    key: "personal-info",
    element: <div>personal-info</div>,
  },
  {
    icon: IconCurved.Password,
    title: "LoginAndSecurity.title",
    description: "LoginAndSecurity.description",
    to: "/user/login-and-security",
    path: "login-and-security",
    key: "login-and-security",
    element: <div>login-and-security</div>,
  },
  {
    icon: IconCurved.Wallet,
    title: "Payments.title",
    description: "Payments.description",
    to: "/user/payments",
    path: "payments",
    key: "payments",
    element: <div>payments</div>,
  },
  {
    icon: IconCurved.Voice2,
    title: "LanguageAndLocalization.title",
    description: "LanguageAndLocalization.description",
    to: "/user/language-and-localization",
    path: "language-and-localization",
    key: "language-and-localization",
    element: <div>language-and-localization</div>,
  },
];