import styled, { css, keyframes } from 'styled-components'

const fillLine = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`

const LayoutAnimatedTransitionWrapperIsTransitioningTrue = css<{
  $loadingTime: number
}>`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${(props) => props.theme.colors.product[100]};
    animation: ${fillLine} ${(props) => props.$loadingTime}ms linear;
    z-index: 3;
  }
`

export const LayoutAnimatedTransitionWrapper = styled.div<{
  $isTransitioning: boolean
  $loadingTime: number
}>`
  ${({ $isTransitioning }) =>
    $isTransitioning && LayoutAnimatedTransitionWrapperIsTransitioningTrue}
`
