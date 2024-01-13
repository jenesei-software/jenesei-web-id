import { ButtonBorderShortProps, ButtonBorderShortWrapper } from '.'
import React from 'react'
import { FC } from 'react'
import { Ripple } from 'react-ripple-click'

export const ButtonBorderShort: FC<ButtonBorderShortProps> = React.memo(
  (props) => {
    return (
      <ButtonBorderShortWrapper onClick={props.onClick} type={props.type}>
        <Ripple />
        {props.icon && props.icon()}
      </ButtonBorderShortWrapper>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.title === nextProps.title
  }
)
