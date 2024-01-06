import {
  ButtonVolumetricShortProps,
  ButtonVolumetricShortContainer,
  ButtonVolumetricShortWrapper,
} from '.'
import { FC } from 'react'
import React from 'react'

export const ButtonVolumetricShort: FC<ButtonVolumetricShortProps> = React.memo(
  (props) => {
    return (
      <ButtonVolumetricShortWrapper>
        <ButtonVolumetricShortContainer
          disabled={props.disabled}
          onClick={props.onClick}
          checked={props.checked}
        >
          {props.icon()}
        </ButtonVolumetricShortContainer>
      </ButtonVolumetricShortWrapper>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.checked === nextProps.checked
  }
)
