import React from "react";
import Heading from "../components/atoms/Heading/Heading";
import styled, { keyframes } from "styled-components";
import landingImage from "../assets/images/rose-lips.jpg";
import Button from "../components/atoms/Button/Button";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import TextyAnim from "rc-texty";

const StyledHomeWrapper = styled.div`
  display: flex;
  position: relative;
`;

const StyledLandingImage = styled.div`
  flex: 1.502;
  height: 86vh;
  background-image: url(${landingImage});
  background-repeat: inherit;
  background-position: 50%, 50%;
  background-size: cover;
`;

const StyledLandingTextWrapper = styled.div`
  flex: 1;
  margin-top: 50px;
`;

const landingThirdTextAnim = keyframes`
  0% { transform: translateX(0%); width: 0%;
opacity: 0; }
  100% { transform: translateX(0%);
  opacity: 1; width: 70% }
`;

const buttonAnim = keyframes`
  0% { transform: translateX(-30%);
opacity: 0; }
  100% { transform: translateX(0%);
  opacity: 1;  }
`;

const StyledFirstLandingText = styled(Heading)`
  margin-left: -90px;
`;
const StyledSecondLandingText = styled(Heading)`
  margin-left: 40px;
`;
const StyledThirdLandingText = styled(Heading)`
  margin-left: 120px;
  position: relative;

  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 55%;
    right: 35%;
    height: 2.5px;
    background-color: ${({ theme }) => theme.red};
    width: 70%;
    animation-name: ${landingThirdTextAnim};
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
  }
`;
const StyledRedirectLink = styled(Link)`
  color: white;
  text-decoration: none;
  position: absolute;
  top: 68%;
  right: 33.5%;
`;
const StyledButton = styled(Button)`
  width: 200px;
  height: 60px;
  text-transform: uppercase;
  border: none;
  letter-spacing: 2px;
  background-color: ${({ theme }) => theme.red};
  animation-name: ${buttonAnim};
  animation-duration: 2.5s;
  animation-timing-function: ease-in-out;
`;

const Home = () => {
  return (
    <StyledHomeWrapper>
      <StyledLandingImage />
      <StyledLandingTextWrapper>
        <StyledFirstLandingText big>
          <TextyAnim
            duration={e => {
              if (e.index === 0) {
                return 1000;
              }
              return 3000;
            }}
          >
            Your secret
          </TextyAnim>
        </StyledFirstLandingText>

        <StyledSecondLandingText big>
          <TextyAnim
            duration={e => {
              if (e.index === 0) {
                return 1000;
              }
              return 3000;
            }}
          >
            beetwen
          </TextyAnim>
        </StyledSecondLandingText>
        <StyledThirdLandingText big>
          <TextyAnim
            duration={e => {
              if (e.index === 0) {
                return 1000;
              }
              return 3000;
            }}
          >
            your lips!
          </TextyAnim>
        </StyledThirdLandingText>
      </StyledLandingTextWrapper>
      <StyledRedirectLink to={routes.lipsticks}>
        <StyledButton>Discover It</StyledButton>
      </StyledRedirectLink>
    </StyledHomeWrapper>
  );
};
export default Home;
