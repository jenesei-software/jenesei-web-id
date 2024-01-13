import { MenuItemProps } from '.'
import { theme } from '@styles/theme'
import styled, { css } from 'styled-components'

const MenuItemWrapperCheckedTrue = css`
  border-left: 4px solid ${theme.colors.black['80']};
  background: ${theme.colors.black['5']};
`
const MenuItemWrapperCheckedFalse = css`
  border-left: 4px solid transparent;
  background: transparent;
`

export const MenuItemWrapper = styled.button<Pick<MenuItemProps, 'checked'>>`
  display: flex;
  width: 100%;
  height: 84px;
  padding: 16px 50px 16px 26px;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  border: none;
  color: ${theme.colors.black['100']};

  @media (max-width: ${theme.size.menu}) {
    display: flex;
    height: 84px;
    padding: 16px 26px;
    align-items: flex-start;
  }

  ${(props) =>
    props.checked === true
      ? MenuItemWrapperCheckedTrue
      : props.checked === false
        ? MenuItemWrapperCheckedFalse
        : ''};
`
export const MenuItemLogoContainer = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`
export const MenuItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  text-align: start;
  flex: 1 0 0;
  & :first-child {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    -moz-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-clamp: 1;
    box-orient: vertical;
  }
  & :last-child {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    -moz-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-clamp: 2;
    box-orient: vertical;
  }
  @media (max-width: ${theme.size.menu}) {
    display: none;
  }
  @media (max-width: ${theme.size.mobile}) {
    display: flex;
  }
`
