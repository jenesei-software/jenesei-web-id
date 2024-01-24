import { StyledInterR16 } from '@styles/fonts/inter'
import { theme } from '@styles/theme'
import ReactLoading from 'react-loading'
import styled from 'styled-components'

export const UserWrapper = styled.div`
  border-top: 2px solid ${theme.colors.black[5]};
  display: flex;
  padding: 26px;
  flex-direction: column;
  align-items: flex-start;
  gap: 26px;
  align-self: stretch;

  @media (max-width: ${theme.size.mobile}) {
    padding: 14px;
    gap: 14px;
  }
`
export const UserLine = styled.div`
  display: flex;
  height: 2px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  width: 100%;
  background: ${theme.colors.black[5]};
`

export const FrameOnlyBottom = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
`
interface IFrameColumn {
  mediaMaxWidth?: string
}

export const FrameColumn = styled.div<IFrameColumn>`
  display: flex;
  flex-direction: column;

  @media (${(props) => `max-width: ${props.mediaMaxWidth}`}) {
    display: none;
  }
`

export const FrameRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const FrameColumnGap = styled(FrameColumn)`
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`

export const FrameColumnGap300 = styled(FrameColumnGap)`
  width: 300px;
`

export const FrameColumnGap250 = styled(FrameColumnGap)`
  width: 250px;
`

export const FrameColumnGap180 = styled(FrameColumnGap)`
  width: 180px;
`

export const FrameColumnGap78 = styled(FrameColumnGap)`
  width: 78px;
`

export const FrameColumnGap78Center = styled(FrameColumnGap78)`
  align-items: center;
`

export const FrameRowGap = styled(FrameColumn)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  @media (max-width: ${theme.size.mobile}) {
    justify-content: space-between;
  }
`

export const FrameRowGapMediaColumn = styled(FrameRowGap)`
  @media (max-width: ${theme.size.mobile}) {
    flex-direction: column;
  }
`

export const FrameSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
`

export const FrameRowWrapGap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`
export const StyledALotOfTitle = styled.div``

export const StyledInterR16OnClick = styled(StyledInterR16)`
  color: ${theme.colors.product['100']};
  cursor: pointer;
`

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`

export const StyledReactLoading = styled(ReactLoading)``
StyledReactLoading.defaultProps = {
  color: theme.colors.black[80],
  type: 'spin',
  height: '42px',
  width: '42px',
}
