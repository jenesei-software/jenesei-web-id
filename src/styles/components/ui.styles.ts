import { JeneseiTheme, SpanInterR16 } from 'jenesei-react-ui'
import ReactLoading from 'react-loading'
import styled from 'styled-components'

export const UIReactLoading = styled(ReactLoading)``
UIReactLoading.defaultProps = {
  color: JeneseiTheme.colors.black[80],
  type: 'spin',
  height: '42px',
  width: '42px',
}

export const UIALotOfTitle = styled.div``

export const UIInterR16OnClick = styled(SpanInterR16)`
  color: ${(props) => props.theme.colors.product['100']};
  cursor: pointer;
`

export const UIUserLine = styled.div`
  display: flex;
  height: 2px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  width: 100%;
  background: ${(props) => props.theme.colors.black[5]};
`
