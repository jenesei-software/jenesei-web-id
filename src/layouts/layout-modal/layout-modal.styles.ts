import { theme } from '@styles/theme'
import styled from 'styled-components'

export const LayoutModalWrapper = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  min-width: 100dvw;
  max-width: 100dvw;
  min-height: 100dvh;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.black[40]};
  display: ${(props) => (props.visible ? 'flex' : 'none')};
`

export const LayoutModalContainer = styled.div`
  padding: 26px;
  border-radius: 10px;
  background-color: ${theme.colors.default.white};
`
