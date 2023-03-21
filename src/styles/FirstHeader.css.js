import styled from "styled-components";

export const FirstHeaderContainer = styled.div`
  background-color: #f5f5f5;
  padding-top: 10px;
  color: #111;
  line-height: 30px;
  min-height: 70px;
`;

export const RightSection = styled.div`
  margin-left: 50%;
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  font-size: 14px;
  @media (max-width: 426px) {
    display: block;
  }
  li {
    cursor: pointer;

    :hover {
      color: #c75643;
    }
  }
`;
