import {
  HeaderDesktopContainer,
  HeaderMenuListContainer,
  HeaderMobileContainer,
  HeaderWrapper,
} from '.'
import { IconCurved } from '@assets/icons/icon-curved'
import { ButtonVolumetricLong } from '@components/button-volumetric/long'
import { ButtonVolumetricShort } from '@components/button-volumetric/short'
import { MenuList } from '@components/menu-list'
import { useGoToLink } from '@hooks/use-go-to-link'
import React from 'react'
import { useMemo, useReducer } from 'react'
import { useTranslation } from 'react-i18next'
import OutsideClickHandler from 'react-outside-click-handler'

export const Header: React.FC = () => {
  const { t } = useTranslation('header')
  const [isShow, toggleIsShow] = useReducer((checked) => !checked, false)
  const goToLink = useGoToLink()

  /* Memoized  */
  const memoizedHeaderWrapperDesktopContainerBack = useMemo(
    () => (
      <HeaderDesktopContainer>
        <ButtonVolumetricLong
          checked={false}
          onClick={() => goToLink('/authorization/services')}
          title={t('back')}
          icon={IconCurved.ArrowLeft}
        />
      </HeaderDesktopContainer>
    ),
    [t]
  )
  const memoizedHeaderWrapperMobileContainerBack = useMemo(
    () => (
      <HeaderMobileContainer>
        <ButtonVolumetricShort
          onClick={() => goToLink('/authorization/services')}
          icon={IconCurved.ArrowLeft}
        />
      </HeaderMobileContainer>
    ),
    []
  )
  const memoizedHeaderWrapperDesktopContainerHelp = useMemo(
    () => (
      <HeaderDesktopContainer>
        <ButtonVolumetricLong title={t('help')} icon={IconCurved.Call} />
      </HeaderDesktopContainer>
    ),
    [t]
  )
  return (
    <OutsideClickHandler onOutsideClick={() => isShow && toggleIsShow()}>
      <HeaderWrapper>
        {memoizedHeaderWrapperDesktopContainerBack}
        {memoizedHeaderWrapperMobileContainerBack}

        <ButtonVolumetricShort icon={IconCurved.Search} />

        {memoizedHeaderWrapperDesktopContainerHelp}

        <HeaderMobileContainer>
          <ButtonVolumetricShort icon={IconCurved.Call} />
          <ButtonVolumetricShort
            onClick={() => toggleIsShow()}
            checked={isShow}
            icon={IconCurved.Category}
          />
        </HeaderMobileContainer>
        {isShow && (
          <HeaderMenuListContainer>
            <MenuList />
          </HeaderMenuListContainer>
        )}
      </HeaderWrapper>
    </OutsideClickHandler>
  )
}
