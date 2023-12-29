import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  height: 60px;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  width: 100%;
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.black["5"]};
  box-shadow: ${(props) => props.theme.effects.header};

  @media (max-width: ${(props) => props.theme.size.tablet}) {
  }

  @media (max-width: ${(props) => props.theme.size.mobile}) {
  }
`;
