import React, { useState } from "react";
import {
  SecondHeaderContainer,
  List,
  BurgerMenu,
  ButtonContainer,
  SideMenu,
} from "../styles/SecondHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { Container, Flex } from "../styles/Utilities.css";

const SecondHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const changeSize = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 68) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  window.addEventListener("scroll", changeSize);
  return (
    <SecondHeaderContainer>
      <Container>
        <Flex>
          <ButtonContainer>
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setSideMenu(true)}
              style={{ width: "30px", height: "auto" }}
            />
          </ButtonContainer>
          {sideMenu && (
            <BurgerMenu>
              <FontAwesomeIcon
                icon={faClose}
                onClick={() => setSideMenu(false)}
                style={{
                  color: "#fff",
                  width: "20px",
                  height: "auto",
                  marginTop: "5%",
                  marginLeft: "85%",
                }}
              />
              <SideMenu>
                <li>Home</li>
                <li>Shop Now</li>
                <li>Our Products</li>
                <li>Farm to Kitchen</li>
                <li>Contact Us</li>
              </SideMenu>
            </BurgerMenu>
          )}
          <img
            src="	https://asbrandoils.com/wp-content/uploads/2021/08/Footer-New-Logo-copy-1.png"
            alt="logo"
            style={{ maxHeight: isSticky && "50px" }}
          />
          <List>
            <li>Home</li>
            <li>Shop Now</li>
            <li>Our Products</li>
            <li>Farm to Kitchen</li>
            <li>Contact Us</li>
          </List>
        </Flex>
      </Container>
    </SecondHeaderContainer>
  );
};

export default SecondHeader;
