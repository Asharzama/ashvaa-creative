import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  @media (min-width: 1200px) {
    width: 1200px;
  }
  /* @media (max-width: 992px) {
    width: 970px;
  }
  @media (max-width: 768px) {
    width: 750px;
  } */
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`;
