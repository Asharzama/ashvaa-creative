import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #f8f7de;
  padding: 60px 0 35px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  margin-right: 300px;
  @media (max-width: 426px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100vw;
  }
`;

export const Row = styled.div`
  padding: 0 15px;
  h3 {
    letter-spacing: 0.05em;
    color: #111;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4444;
    height: 40px;
  }
  @media (max-width: 426px) {
    padding-top: 10px;
  }
`;

export const UnderLine = styled.div`
  height: 1px;
  width: 40px;
  background-color: #c75643;
  margin-bottom: 40px;
`;

export const List = styled.ul`
  list-style: none;
  li {
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    color: #666;
  }
`;
