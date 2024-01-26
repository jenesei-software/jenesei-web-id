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
  display: flex;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  transition:
    opacity 0.15s ease,
    visibility 0.15s ease;
`

export const LayoutModalContainer = styled.div`
  min-width: 680px;
  padding: 26px;
  border-radius: 10px;
  background-color: ${theme.colors.default.white};
  box-sizing: border-box;
  overflow: auto;
  @media (max-width: ${theme.size.mobile}) {
    border-radius: 0px;
    min-width: 100dvw;
    max-width: 100dvw;
    width: 100dvw;
    max-height: 100dvh;
  }
`
