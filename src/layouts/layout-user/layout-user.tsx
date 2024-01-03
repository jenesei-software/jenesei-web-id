import { Header } from '@components/header';
import { LayoutOutletContainer, LayoutUserContainer, LayoutUserWrapper } from '.';
import { MenuSideBar } from '@components/menu-sidebar';
import { Outlet } from 'react-router-dom';

/**
 * The wrapper for authorized users
 */
export const LayoutUser: React.FC = () => {
  return (
    <LayoutUserWrapper>
      <Header />
      <LayoutUserContainer>
        <MenuSideBar />
        <LayoutOutletContainer>
          <Outlet />
        </LayoutOutletContainer>
      </LayoutUserContainer>
    </LayoutUserWrapper>
  );
};
