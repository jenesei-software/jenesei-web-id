import { ButtonBigWrapper, ButtonBigProps } from '.'
import { StyledInterSB16 } from '@styles/fonts/inter'
import React from 'react'
import { FC } from 'react'
import { Ripple } from 'react-ripple-click'

export const ButtonBig: FC<ButtonBigProps> = React.memo(
  (props) => {
    return (
      <ButtonBigWrapper
        onClick={props.onClick}
        isIconColor={props.isIconColor}
        type={props.type}
      >
        <Ripple />
        {props.icon && props.icon()}
        <StyledInterSB16>{props.title}</StyledInterSB16>
      </ButtonBigWrapper>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.title === nextProps.title
  }
)
