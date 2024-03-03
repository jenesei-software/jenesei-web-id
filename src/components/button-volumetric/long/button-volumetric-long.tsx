import {
  ButtonVolumetricLongContainer,
  ButtonVolumetricLongProps,
  ButtonVolumetricLongWrapper,
} from '.'
import { JeneseiTheme, SpanInterSB14 } from 'jenesei-react-ui'
import React from 'react'
import { FC } from 'react'

export const ButtonVolumetricLong: FC<ButtonVolumetricLongProps> = React.memo(
  (props) => {
    return (
      <ButtonVolumetricLongWrapper>
        <ButtonVolumetricLongContainer
          onClick={props.onClick}
          checked={props.checked}
        >
          {props.icon && props.icon()}
          {props.title && (
            <SpanInterSB14 color={JeneseiTheme.colors.black[60]}>
              {props.title}
            </SpanInterSB14>
          )}
        </ButtonVolumetricLongContainer>
      </ButtonVolumetricLongWrapper>
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.checked === nextProps.checked &&
      prevProps.title === nextProps.title
    )
  }
)
