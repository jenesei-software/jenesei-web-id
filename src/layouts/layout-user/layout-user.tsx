import {
  LayoutOutletContainer,
  LayoutUserContainer,
  LayoutUserWrapper,
} from '.'
import { Header } from '@components/header'
import { MenuSideBar } from '@components/menu-sidebar'
import { PathnameAsLinks } from '@components/pathname-as-links'
import { Outlet } from 'react-router-dom'

/*
 * The wrapper for authorized users
 */
export const LayoutUser: React.FC = () => {
  return (
    <LayoutUserWrapper>
      <Header />
      <LayoutUserContainer>
        <MenuSideBar />
        <LayoutOutletContainer>
          <PathnameAsLinks />
          <Outlet />
        </LayoutOutletContainer>
      </LayoutUserContainer>
    </LayoutUserWrapper>
  )
}
