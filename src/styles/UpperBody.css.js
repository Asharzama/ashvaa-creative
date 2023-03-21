import styled from "styled-components";

export const UpperBodyContainer = styled.div`
  background-color: #f8f7de;
  img {
    width: 98.7vw;
    height: auto;
  }
`;

export const Grid = styled.div`
  grid-template-columns: repeat(4, 1fr);
  display: grid;
  padding: 32px 0;
  @media (max-width: 426px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  h2 {
    margin-top: 17px;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }
  p {
    margin-top: 20px;
    line-height: 26px;
    text-align: center;
    font-size: 16px;
    color: #666;
  }
  :hover {
    h2 {
      color: #c75643;
    }
  }
`;

export const IconWrapper = styled.div`
  border: 2px solid #c75643;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 77px;
  width: 77px;
`;
