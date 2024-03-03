import {
  MenuSideBarTitle,
  MenuSideBarWrapper,
  MenuSideBarWrapperContainer,
  MenuSideLogoContainer,
} from '.'
import { Logo } from '@assets/icons/logo'
import { LogoWithTitle } from '@assets/icons/logo-with-title'
import { MenuList } from '@components/menu-list'
import { JeneseiTheme, SpanInterSB18 } from 'jenesei-react-ui'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const MenuSideBar: React.FC = () => {
  const { t } = useTranslation('pages')

  return (
    <MenuSideBarWrapper>
      <MenuSideBarWrapperContainer>
        <MenuSideBarTitle>
          <SpanInterSB18 color={JeneseiTheme.colors.black[100]}>
            {t('user.title')}
          </SpanInterSB18>
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
