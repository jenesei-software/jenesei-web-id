import {
  ButtonVolumetricShortContainer,
  ButtonVolumetricShortWrapper,
} from '../short'
import styled from 'styled-components'

export const ButtonVolumetricLongWrapper = styled(ButtonVolumetricShortWrapper)`
  display: flex;
  height: 44px;
  padding: 4px;
  justify-content: center;
  align-items: center;
  width: max-content;
`

export const ButtonVolumetricLongContainer = styled(
  ButtonVolumetricShortContainer
)`
  display: flex;
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  align-self: stretch;
`
