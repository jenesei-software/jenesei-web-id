import { ButtonBorderLongProps, ButtonBorderLongWrapper } from '.'
import { SpanInterSB16 } from 'jenesei-react-ui'
import React from 'react'
import { FC } from 'react'
import { Ripple } from 'react-ripple-click'

export const ButtonBorderLong: FC<ButtonBorderLongProps> = React.memo(
  (props) => {
    return (
      <ButtonBorderLongWrapper onClick={props.onClick} type={props.type}>
        <Ripple />
        {props.icon && props.icon()}
        {props.title && <SpanInterSB16>{props.title}</SpanInterSB16>}
      </ButtonBorderLongWrapper>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.title === nextProps.title
  }
)
