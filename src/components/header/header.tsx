import { ButtonVolumetricShort } from "@components/button-volumetric/short";
import { HeaderWrapper, HeaderDesktopContainer, HeaderMobileContainer, HeaderMenuListContainer } from ".";
import { IconCurved } from "@assets/icons/icon-curved/icon-curved";
import { ButtonVolumetricLong } from "@components/button-volumetric/long";
import { useTranslation } from "react-i18next";
import { MenuList } from "@components/menu-list";
import { useMemo, useReducer } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import React from "react";
import { useGoToLink } from "@hooks/index";

export const Header: React.FC = () => {
  const { t } = useTranslation("header");
  const [isShow, toggleIsShow] = useReducer((checked) => !checked, false);
  const goToLink = useGoToLink();

  /* Memoized  */
  const memoizedHeaderWrapperDesktopContainerBack = useMemo(
    () => (
      <HeaderDesktopContainer>
        <ButtonVolumetricLong
          checked={false}
          onClick={() => goToLink("/authorization/services")}
          title={t("back")}
          icon={IconCurved.ArrowLeft}
        />
      </HeaderDesktopContainer>
    ),
    [t]
  );
  const memoizedHeaderWrapperMobileContainerBack = useMemo(
    () => (
      <HeaderMobileContainer>
        <ButtonVolumetricShort checked={false} onClick={() => goToLink("/authorization/services")} icon={IconCurved.ArrowLeft} />
      </HeaderMobileContainer>
    ),
    []
  );
  const memoizedHeaderWrapperDesktopContainerHelp = useMemo(
    () => (
      <HeaderDesktopContainer>
        <ButtonVolumetricLong checked={false} title={t("help")} icon={IconCurved.Call} />
      </HeaderDesktopContainer>
    ),
    [t]
  );
  return (
    <OutsideClickHandler onOutsideClick={() => isShow && toggleIsShow()}>
      <HeaderWrapper>
        {memoizedHeaderWrapperDesktopContainerBack}
        {memoizedHeaderWrapperMobileContainerBack}

        <ButtonVolumetricShort checked={false} icon={IconCurved.Search} />

        {memoizedHeaderWrapperDesktopContainerHelp}

        <HeaderMobileContainer>
          <ButtonVolumetricShort checked={false} icon={IconCurved.Call} />
          <ButtonVolumetricShort onClick={() => toggleIsShow()} checked={isShow} icon={IconCurved.Category} />
        </HeaderMobileContainer>
        {isShow && (
          <HeaderMenuListContainer>
            <MenuList />
          </HeaderMenuListContainer>
        )}
      </HeaderWrapper>
    </OutsideClickHandler>
  );
};
