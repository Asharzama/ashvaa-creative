import React from "react";
import {
  FooterContainer,
  Grid,
  Row,
  UnderLine,
  List,
} from "../styles/Footer.css";
import { Container } from "../styles/Utilities.css";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid>
          <Row>
            <h3>Our Products</h3>
            <UnderLine />
            <List>
              <li>A.S. Brand Hulled Gingelly Oil</li>
              <li>Mansion Gingelly Oil</li>
              <li>A.S. Brand Groundnut Oil</li>
              <li>Pooja Brand Gingelly Oil</li>
              <li>A.S. Brand Hulled Gingelly Seeds</li>
            </List>
          </Row>
          <Row>
            <h3>Our Policies</h3>
            <UnderLine />
            <List>
              <li>Home</li>
              <li>Return Policy</li>
              <li>Cancellation Policy</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Terms & Conditions</li>
            </List>
          </Row>
          <Row>
            <h3>Follow Us</h3>
            <UnderLine />
            <List>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Youtube</li>
            </List>
          </Row>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
