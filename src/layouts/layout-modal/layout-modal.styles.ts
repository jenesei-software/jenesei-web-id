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
  background-color: ${(props) => props.theme.colors.black[40]};
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
  background-color: ${(props) => props.theme.colors.white[100]};
  box-sizing: border-box;
  overflow: auto;
  @media (max-width: ${(props) => props.theme.screens.mobile.width}) {
    border-radius: 0px;
    min-width: 100dvw;
    max-width: 100dvw;
    width: 100dvw;
    max-height: 100dvh;
  }
`
