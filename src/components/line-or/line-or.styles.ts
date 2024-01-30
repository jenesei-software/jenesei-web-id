import styled from 'styled-components'

export const LineOrWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme.colors.black['50']};
`
