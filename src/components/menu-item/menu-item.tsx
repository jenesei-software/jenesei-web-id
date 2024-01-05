import React from 'react';
import { ButtonPlaystationShort } from '@components/button-playstation/short';
import { FC, useMemo } from 'react';
import {
  MenuItemInfoContainer,
  MenuItemLogoContainer,
  MenuItemProps,
  MenuItemWrapper
  } from '.';
import { Ripple } from 'react-ripple-click';
import { StyledInterM12, StyledInterSB14 } from '@styles/fonts/inter';
import { theme } from '@styles/theme';
import { useVibration } from '@hooks/use-vibration';

export const MenuItem: FC<MenuItemProps> = React.memo(
  (props) => {
    const vibrate = useVibration();
    const memoizedMenuItemInfo = useMemo(
      () => (
        <MenuItemInfoContainer>
          <StyledInterSB14 color={theme.colors.black[80]}>{props.title}</StyledInterSB14>
          <StyledInterM12 color={theme.colors.black[50]}>{props.description}</StyledInterM12>
        </MenuItemInfoContainer>
      ),
      [props.title, props.description]
    );

    return (
      <MenuItemWrapper
        checked={props.checked}
        onClick={() => {
          vibrate(1);
          props.onClick();
        }}
      >
        <Ripple />
        <MenuItemLogoContainer>
          <ButtonPlaystationShort icon={props.icon} checked={props.checked} />
        </MenuItemLogoContainer>
        {memoizedMenuItemInfo}
      </MenuItemWrapper>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.checked === nextProps.checked &&
      prevProps.title === nextProps.title &&
      prevProps.description === nextProps.description
    );
  }
);
