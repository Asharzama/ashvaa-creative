import styled from "styled-components";

export const ProductsContainer = styled.div`
  margin-bottom: 94px;
  h2 {
    height: 141px;
    line-height: 1.857;
    font-weight: 400;
    font-size: 50px;
    display: block;
    color: #111;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  @media (max-width: 426px) {
    display: block;
  }
`;

export const Card = styled.div`
  margin: 0 auto;
  width: 370px;
  height: 560px;
  img {
    height: 370px;
    width: 100%;
    background-color: #aaa;
  }
  h3 {
    margin: 20px 0;
    font-size: 24px;
    text-align: center;
    font-weight: 500;
  }
  p {
    font-size: 16px;
    text-align: center;
    line-height: 1.857;
    color: #666;
  }
`;
