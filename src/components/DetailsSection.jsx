import React from "react";
import {
  DetailsContainer,
  Content,
  Videos,
  Video,
  Text,
  Topics,
  Topic,
  Details,
} from "../styles/DetailsSection.css";
import { Container } from "../styles/Utilities.css";

const DetailsSection = () => {
  return (
    <DetailsContainer>
      <Container>
        <h4>Why A.S Brand Oils?</h4>
        <Content>
          <Videos>
            <Video />
            <Video />
          </Videos>
          <Text>
            <Topics>
              <Topic>Quality</Topic>
              <Topic>Health</Topic>
              <Topic>Values</Topic>
            </Topics>
            <Details>
              <h3>Commitment to Quality</h3>
              <p>
                A.S. Brand has always been synonymous with manufacturing the
                best quality products. Our extensive research to formulate the
                essential Health Guide and an understanding of the much-needed
                healthy lifestyle choices for today’s world has driven us to
                deliver impeccable quality across our product range.
              </p>
              <p>
                Sourcing the best seasonal produce from across the country,
                handpicking every raw material, thorough inspection via
                stringent quality checks and an optimum fusion of natural &amp;
                industrial processes in extracting oil consistently ensures the
                best aroma and flavor without compromising the Nutritional
                Value.
              </p>
            </Details>
          </Text>
        </Content>
      </Container>
    </DetailsContainer>
  );
};

export default DetailsSection;
