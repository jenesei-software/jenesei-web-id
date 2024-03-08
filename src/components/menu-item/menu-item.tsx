import {
  MenuItemInfoContainer,
  MenuItemLogoContainer,
  MenuItemProps,
  MenuItemWrapper,
} from '.'
import { ButtonPlaystationShort } from '@components/button-playstation/short'
import { JeneseiTheme, SpanInterM12, SpanInterSB14 } from 'jenesei-react-ui'
import React from 'react'
import { FC, useMemo } from 'react'
import { Ripple } from 'react-ripple-click'

export const MenuItem: FC<MenuItemProps> = React.memo(
  (props) => {
    const memoizedMenuItemInfo = useMemo(
      () => (
        <MenuItemInfoContainer>
          <SpanInterSB14 color={JeneseiTheme.colors.black[80]}>
            {props.title}
          </SpanInterSB14>
          <SpanInterM12 color={JeneseiTheme.colors.black[50]}>
            {props.description}
          </SpanInterM12>
        </MenuItemInfoContainer>
      ),
      [props.title, props.description]
    )

    return (
      <MenuItemWrapper
        checked={props.checked}
        onClick={() => {
          props.onClick()
        }}
      >
        <Ripple />
        <MenuItemLogoContainer>
          <ButtonPlaystationShort icon={props.icon} checked={props.checked} />
        </MenuItemLogoContainer>
        {memoizedMenuItemInfo}
      </MenuItemWrapper>
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.checked === nextProps.checked &&
      prevProps.title === nextProps.title &&
      prevProps.description === nextProps.description
    )
  }
)
