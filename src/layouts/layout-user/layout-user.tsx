import { Outlet } from "react-router-dom";
import { LayoutUserWrapper } from ".";
import { Header } from "@components/header";

export const LayoutUser: React.FC = () => {
  return (
    <LayoutUserWrapper>
      <Header />
      <Outlet />
    </LayoutUserWrapper>
  );
};
