import { Link } from "react-router-dom";
import styled from "styled-components";

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;
  height: 100%;
  gap: 20px;

  @media (max-width: ${(props) => props.theme.size.tablet}) {
    align-self: stretch;
    height: auto;
    justify-content: space-between;
  }
`;

export const ServicesTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  @media (max-width: ${(props) => props.theme.size.tablet}) {
  }
`;
export const ServicesListContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
  align-self: stretch;
  flex-wrap: wrap;

  @media (max-width: ${(props) => props.theme.size.mobile}) {
  }
`;
export const ServicesListItemContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  height: 186px;
  padding: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  border-radius: 6px;

  background: ${(props) => props.theme.colors.default.white};
  box-shadow: ${(props) => props.theme.buttons.volumetric.effects.default};

  & span {
    width: min-content;
  }

  @media (max-width: ${(props) => props.theme.size.mobile}) {
    height: 142px;
    & .icon {
      width: 84px;
      height: 84px;
    }
  }
`;
export const ServicesButtonsContainer = styled.div`
  @media (max-width: ${(props) => props.theme.size.tablet}) {
  }
`;
