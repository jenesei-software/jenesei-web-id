import { ButtonPlaystationLongProps, ButtonPlaystationLongWrapper } from '.'
import { StyledInterSB14 } from '@styles/fonts/inter'
import { theme } from '@styles/theme'
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
          <StyledInterSB14 color={theme.colors.black[60]}>
            {props.title}
          </StyledInterSB14>
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
