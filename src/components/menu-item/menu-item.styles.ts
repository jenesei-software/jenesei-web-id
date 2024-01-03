import styled from "styled-components";
import { MenuItemProps } from ".";

export const MenuItemWrapper = styled.button<Pick<MenuItemProps, "checked">>`
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
  border-left: ${(props) => (props.checked ? `4px solid ${props.theme.colors.black["80"]}` : "4px solid transparent")};
  background: ${(props) => (props.checked ? props.theme.colors.black["5"] : "transparent")};
  color: ${(props) => props.theme.colors.black["100"]};

  @media (max-width: ${(props) => props.theme.size.tablet}) {
    display: flex;
    height: 84px;
    padding: 16px 26px;
    align-items: flex-start;
  }
`;
export const MenuItemLogoContainer = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
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
  @media (max-width: ${(props) => props.theme.size.tablet}) {
    display: none;
  }
  @media (max-width: ${(props) => props.theme.size.mobile}) {
    display: flex;
  }
`;
