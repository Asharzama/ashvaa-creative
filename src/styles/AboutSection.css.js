import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 64px 0 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 426px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const LeftSection = styled.div`
  padding: 0 15px;
  h3 {
    font-size: 20px;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: #111111;
    text-align: center;
  }
  p {
    text-transform: uppercase;
    font-size: 40px;
    text-align: center;
    line-height: 1.2;
  }
`;

export const Icon = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 150px;
  }
`;

export const RightSection = styled.div`
  padding: 0 15px;
  line-height: 1.86;
  font-size: 16px;
  color: #666;
`;
