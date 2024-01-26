import { ButtonBigProps } from '.'
import { theme } from '@styles/theme'
import styled, { css } from 'styled-components'

const ButtonBigWrapperProduct = css`
  color: ${theme.colors.product['100']};
  border: 1px solid transparent;
  background: ${theme.colors.product['100']};
  & span {
    color: ${theme.colors.default.white};
  }
`

const ButtonBigWrapperBorder = css`
  color: ${theme.colors.default.white};
  border: 1px solid ${theme.colors.black['80']};
  background: ${theme.colors.default.white};
  & span {
    color: ${theme.colors.black['100']};
  }
`

const ButtonBigWrapperDefault = css`
  color: ${theme.colors.default.white};
  border: 1px solid transparent;
  background: ${theme.colors.default.white};
  & span {
    color: ${theme.colors.black['100']};
  }
`

const ButtonBigWrapperIsIconColorTrue = css`
  & svg {
    width: 19px;
    height: 19px;
    flex-shrink: 0;
    & path {
      fill: ${theme.colors.black['60']};
    }
  }
`
const ButtonBigWrapperIsIconColorFalse = css`
  & svg {
    width: 19px;
    height: 19px;
    flex-shrink: 0;
  }
`

const ButtonBigWrapperLoadingTrue = css`
  & span {
    display: none;
  }
`
const ButtonBigWrapperDisabledTrue = css`
  background: ${theme.colors.default.white};
  color: ${theme.colors.gray.e5e5ea};
  border: 1px solid ${theme.colors.gray.e5e5ea};
  & span {
    color: ${theme.colors.gray.e5e5ea};
  }
  & svg {
    & path {
      fill: ${theme.colors.gray.e5e5ea};
    }
  }
`
export const ButtonBigWrapper = styled.button<
  Pick<ButtonBigProps, 'variant' | 'isIconColor' | 'disabled' | 'loading'>
>`
  cursor: pointer;
  display: flex;
  width: 100%;
  height: 44px;
  padding: 8px 14px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  box-sizing: border-box;
  border-radius: 6px;
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  isolation: isolate;

  ${(props) =>
    props.isIconColor === true
      ? ButtonBigWrapperIsIconColorTrue
      : props.isIconColor === false
        ? ButtonBigWrapperIsIconColorFalse
        : ''};

  ${(props) =>
    props.variant === 'product'
      ? ButtonBigWrapperProduct
      : props.variant === 'border'
        ? ButtonBigWrapperBorder
        : ButtonBigWrapperDefault};

  ${(props) => (props.disabled === true ? ButtonBigWrapperDisabledTrue : '')};
  ${(props) => (props.loading === true ? ButtonBigWrapperLoadingTrue : '')};
`
