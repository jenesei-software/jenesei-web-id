import { ButtonPlaystationLongProps, ButtonPlaystationLongWrapper } from '.'
import { JeneseiTheme, SpanInterSB14 } from 'jenesei-react-ui'
import React from 'react'
import { FC } from 'react'
import { Ripple } from 'react-ripple-click'

export const ButtonPlaystationLong: FC<ButtonPlaystationLongProps> = React.memo(
  (props) => {
    return (
      <ButtonPlaystationLongWrapper checked={props.checked}>
        <Ripple />
        {props.icon && props.icon()}
        {props.title && (
          <SpanInterSB14 color={JeneseiTheme.colors.black[60]}>
            {props.title}
          </SpanInterSB14>
        )}
      </ButtonPlaystationLongWrapper>
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.checked === nextProps.checked &&
      prevProps.title === nextProps.title
    )
  }
)
