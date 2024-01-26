import { StyledInterR16 } from '@styles/fonts/inter'
import { theme } from '@styles/theme'
import ReactLoading from 'react-loading'
import styled from 'styled-components'

export const StyledReactLoading = styled(ReactLoading)``
StyledReactLoading.defaultProps = {
  color: theme.colors.black[80],
  type: 'spin',
  height: '42px',
  width: '42px',
}

export const StyledALotOfTitle = styled.div``

export const StyledInterR16OnClick = styled(StyledInterR16)`
  color: ${theme.colors.product['100']};
  cursor: pointer;
`

export const StyledUserLine = styled.div`
  display: flex;
  height: 2px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  width: 100%;
  background: ${theme.colors.black[5]};
`
