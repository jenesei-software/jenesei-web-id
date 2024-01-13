import styled from 'styled-components'

export const LogoServicesWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;

  & .icon {
    width: 122px;
    height: 122px;
    flex-shrink: 0;
  }
`

export const LogoServicesWrapperMin = styled(LogoServicesWrapper)`
  & .icon {
    width: 42px;
    height: 42px;
  }
`
