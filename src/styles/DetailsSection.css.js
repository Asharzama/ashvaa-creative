import styled from "styled-components";

export const DetailsContainer = styled.div`
  padding-top: 100px;
  background-color: #fff0b2;
  h4 {
    font-size: 50px;
    color: #111;
    line-height: 1.2;
    font-weight: 400;
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 769px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Videos = styled.div``;

export const Video = styled.div`
  width: 400px;
  height: 225px;
  margin-bottom: 32px;
  background-color: #aaa;
`;

export const Text = styled.div`
  display: flex;
  @media (max-width: 426px) {
    display: block;
  }
`;

export const Topics = styled.div`
  @media (max-width: 426px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Topic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  width: 140px;
  height: 140px;
  border: solid 2px #111;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  :hover {
    background: #c75643;
    border: solid 2px #c75643;
    color: #fff;
  }
  @media (max-width: 426px) {
    height: 41px;
    width: 80%;
    border-radius: 20px;
    margin: 10px;
    font-size: 20px;
  }
`;

export const Details = styled.div`
  padding: 14px 20px;
  h3 {
    font-weight: 500;
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 1.2;
    color: #111;
  }
  p {
    margin-bottom: 20px;
    line-height: 1.857;
    font-size: 17px;
    color: #666;
  }
`;
