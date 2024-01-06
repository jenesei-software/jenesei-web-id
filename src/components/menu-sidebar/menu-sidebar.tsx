import {
  MenuSideBarTitle,
  MenuSideBarWrapper,
  MenuSideBarWrapperContainer,
  MenuSideLogoContainer,
} from '.'
import { Logo } from '@assets/icons/logo'
import { LogoWithTitle } from '@assets/icons/logo-with-title'
import { MenuList } from '@components/menu-list'
import { StyledInterSB18 } from '@styles/fonts/inter'
import { theme } from '@styles/theme'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const MenuSideBar: React.FC = () => {
  const { t } = useTranslation('sidebar')

  return (
    <MenuSideBarWrapper>
      <MenuSideBarWrapperContainer>
        <MenuSideBarTitle>
          <StyledInterSB18 color={theme.colors.black[100]}>
            {t('title')}
          </StyledInterSB18>
        </MenuSideBarTitle>
        <MenuList />
        <MenuSideLogoContainer>
          <LogoWithTitle />
          <Logo />
        </MenuSideLogoContainer>
      </MenuSideBarWrapperContainer>
    </MenuSideBarWrapper>
  )
}
