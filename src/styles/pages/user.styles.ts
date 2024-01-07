import { theme } from '@styles/theme'
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

export const FrameColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const FrameRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const FrameColumnGap = styled(FrameColumn)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`

export const FrameRowGap = styled(FrameColumn)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
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
