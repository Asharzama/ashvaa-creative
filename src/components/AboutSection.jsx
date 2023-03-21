import React from "react";
import {
  AboutContainer,
  LeftSection,
  Icon,
  RightSection,
  Grid,
} from "../styles/AboutSection.css";
import { Container } from "../styles/Utilities.css";

const AboutSection = () => {
  return (
    <AboutContainer>
      <Container>
        <Grid>
          <LeftSection>
            <h3>Welcome to the world of</h3>
            <p>A.S. Brand Oils</p>
          </LeftSection>
          <Icon>
            <img
              src="https://asbrandoils.com/wp-content/uploads/2021/03/cropped-Site-Icon-300x300.png"
              alt="icon"
            />
          </Icon>
          <RightSection>
            While going beyond in delivering health to you, A.S. Brand also
            opens up a whole new world of exquisite taste and limitless cooking
            possibilities. Each of our variants has been optimized to exhilarate
            your palate with an underlying promise of delivering nutrition that
            is real.
          </RightSection>
        </Grid>
      </Container>
    </AboutContainer>
  );
};

export default AboutSection;
