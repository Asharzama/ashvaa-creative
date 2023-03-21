import styled from "styled-components";

export const SecondHeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  img {
    max-height: 80px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  li {
    padding: 8px 10px;
    height: 40px;
    cursor: pointer;
    :hover {
      background-color: #c75643;
      color: #fff;
    }
  }
  @media (max-width: 769px) {
    display: none;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  @media (max-width: 769px) {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #212121;
    height: 100vh;
    width: 40vh;
    color: #fff;
  }
`;

export const ButtonContainer = styled.button`
  display: none;
  @media (max-width: 769px) {
    display: inline;
    background-color: #fff;
    border: none;
    outline: none;
  }
`;

export const SideMenu = styled.ul`
  list-style: none;
  padding: 0 10px;
  li {
    font-size: 14px;
    height: 40px;
    display: flex;
    align-items: center;
    :hover {
      background-color: #333333;
    }
  }
`;
