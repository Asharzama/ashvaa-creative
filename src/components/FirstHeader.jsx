import React from "react";
import {
  FirstHeaderContainer,
  RightSection,
  List,
} from "../styles/FirstHeader.css";
import { Container } from "../styles/Utilities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const FirstHeader = () => {
  return (
    <FirstHeaderContainer>
      <Container>
        <RightSection>
          <List>
            <li>Shipping Policy</li>
            <li>
              <FontAwesomeIcon icon={faLock} /> Login / Register
            </li>
            <li>Track Order</li>
            <li>Hello, username</li>
          </List>
        </RightSection>
      </Container>
    </FirstHeaderContainer>
  );
};

export default FirstHeader;
