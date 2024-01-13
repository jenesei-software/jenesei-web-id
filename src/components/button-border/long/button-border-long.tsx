import { ButtonBorderLongProps, ButtonBorderLongWrapper } from '.'
import { StyledInterSB16 } from '@styles/fonts/inter'
import React from 'react'
import { FC } from 'react'
import { Ripple } from 'react-ripple-click'

export const ButtonBorderLong: FC<ButtonBorderLongProps> = React.memo(
  (props) => {
    return (
      <ButtonBorderLongWrapper onClick={props.onClick} type={props.type}>
        <Ripple />
        {props.icon && props.icon()}
        {props.title && <StyledInterSB16>{props.title}</StyledInterSB16>}
      </ButtonBorderLongWrapper>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.title === nextProps.title
  }
)
