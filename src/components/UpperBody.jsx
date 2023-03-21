import React from "react";
import {
  Grid,
  IconWrapper,
  Item,
  UpperBodyContainer,
} from "../styles/UpperBody.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faRadiation,
  faSeedling,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "../styles/Utilities.css";

const UpperBody = () => {
  return (
    <UpperBodyContainer>
      <img
        src="https://lh3.googleusercontent.com/Uzc3xmqrHhvIm35pNZe2XRpcJnDHnlJi1YDMLDHduYq7RQMo_emEh_oCLw3aaTZNPpmYVv4EDJPENcDixzTp6O5tG6y8uw7NAerk-RA"
        alt="body"
      />
      <Container>
        <Grid>
          <Item>
            <IconWrapper>
              <FontAwesomeIcon
                icon={faSeedling}
                style={{ height: "40px", color: "#c75643" }}
              />
            </IconWrapper>
            <h2>From the Farm</h2>
            <p>
              We use fresh and organic seeds directly from the farms to extract
              the oil.
            </p>
          </Item>
          <Item>
            <IconWrapper>
              <FontAwesomeIcon
                icon={faCheck}
                style={{ height: "40px", color: "#c75643" }}
              />
            </IconWrapper>
            <h2>100% Pure</h2>
            <p>
              We extract oil directly from the seeds without adding any
              chemicals.
            </p>
          </Item>
          <Item>
            <IconWrapper>
              <FontAwesomeIcon
                icon={faRadiation}
                style={{ height: "40px", color: "#c75643" }}
              />
            </IconWrapper>
            <h2>Chemical Free Oil</h2>
            <p>
              Pure and chemical-free filtered oils to meet your healthy
              lifestyle.
            </p>
          </Item>
          <Item>
            <IconWrapper>
              <FontAwesomeIcon
                icon={faTint}
                style={{ height: "40px", color: "#c75643" }}
              />
            </IconWrapper>
            <h2>Double- Filtered</h2>
            <p>
              Extracting oil in a Double- Filtered way will keep the nutrition
              intact.
            </p>
          </Item>
        </Grid>
      </Container>
    </UpperBodyContainer>
  );
};

export default UpperBody;
