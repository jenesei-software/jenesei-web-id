import styled from "styled-components";

export const MenuListWrapper = styled.div`
  display: flex;
  width: 428px;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border-top: 2px solid ${(props) => props.theme.colors.black["5"]};

  @media (max-width: ${(props) => props.theme.size.mobile}) {
    border-top: 0;
    position: absolute;
    top: 100%;
    left: 0;
    box-shadow: ${(props) => props.theme.header.effects.menu};
    background: ${(props) => props.theme.colors.gray.F2f2f7};
  }
`;
