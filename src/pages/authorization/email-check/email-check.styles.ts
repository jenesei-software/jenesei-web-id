import styled from "styled-components";

export const EmailCheckWrapper = styled.div`
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