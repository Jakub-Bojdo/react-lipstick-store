import React, { useState, useEffect } from "react";
import Heading from "../components/atoms/Heading/Heading";
import styled, { keyframes, css } from "styled-components";
import landingImage from "../assets/images/rose-lips.jpg";
import Button from "../components/atoms/Button/Button";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import WithAnim from "../hoc/withAnim";
import Footer from "../components/navigation/Footer";

const StyledHomeWrapper = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 500px) {
    width: 100%;
    display: flex;
  }
`;

const StyledLandingImage = styled.div`
  flex: 1.502;
  height: 86vh;
  background-image: url(${landingImage});
  background-repeat: inherit;
  background-position: 50%, 50%;
  background-size: cover;

  @media (max-width: 500px) {
    flex: 1.5;
    height: 86vh;
    background-position: bottom 20%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const StyledLandingTextWrapper = styled.div`
  flex: 1;
  margin-top: 50px;

  @media (max-width: 500px) {
    flex: 0.7;
  }
`;

const landingThirdTextAnim = keyframes`
  0% { transform: translateX(0%); width: 0%;
opacity: 0; }
  100% { transform: translateX(0%);
  opacity: 1; width: 70% }


`;

const landingThirdTextAnimMedia = keyframes`
0% { transform: translateX(0%); width: 0%;
opacity: 0; }
100% { transform: translateX(0%);
opacity: 1; width: 85% }


`;

const buttonAnim = keyframes`
  0% { transform: translateX(-30%);
opacity: 0; }
  100% { transform: translateX(0%);
  opacity: 1;  }
`;

const StyledFirstLandingText = styled(Heading)`
  margin-left: -90px;

  @media (max-width: 500px) {
    margin-left: -220px;
    margin-top: -45px;
  }
`;
const StyledSecondLandingText = styled(Heading)`
  margin-left: 40px;

  @media (max-width: 500px) {
    margin-left: -135px;
  }
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
    animation-name: ${landingThirdTextAnim};
    animation-duration: 1.5s;
    animation-delay: 2s;
    animation-timing-function: ease-in-out;
    ${({ animActive }) =>
      animActive &&
      css`
        width: 70%;
      `};
  }

  @media (max-width: 500px) {
    margin-left: -80px;

    &:after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 55%;
      right: 18%;
      height: 2.5px;
      background-color: ${({ theme }) => theme.red};
      animation-name: ${landingThirdTextAnimMedia};
      animation-duration: 1.5s;
      animation-delay: 2s;
      animation-timing-function: ease-in-out;
      ${({ animActive }) =>
        animActive &&
        css`
          width: 85%;
        `};
    }
  }
`;
const StyledRedirectLink = styled(Link)`
  color: white;
  text-decoration: none;
  position: absolute;
  top: 68%;
  right: 33.5%;

  @media (max-width: 500px) {
    color: white;
    text-decoration: none;
    position: absolute;
    top: 72%;
    right: 15%;
  }
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

  @media (max-width: 500px) {
    width: 150px;
    height: 50px;
    text-transform: uppercase;
    border: none;
    letter-spacing: 1px;
    background-color: ${({ theme }) => theme.darkerPink};
    animation-name: ${buttonAnim};
    animation-duration: 2.5s;
    animation-timing-function: ease-in-out;
    font-weight: ${({ theme }) => theme.medium};
  }
`;

const Home = () => {
  const [isAnimEnd, setAnimEnd] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimEnd(true);
    }, 2000);
    return () => {};
  }, []);

  return (
    <StyledHomeWrapper>
      <StyledLandingImage />
      <StyledLandingTextWrapper>
        <StyledFirstLandingText big>
          <WithAnim content="Your secret" animDuration={3000} />
        </StyledFirstLandingText>
        <StyledSecondLandingText big>
          <WithAnim content="beetwen" animDuration={3000} delayTime={800} />
        </StyledSecondLandingText>
        <StyledThirdLandingText big animActive={isAnimEnd}>
          <WithAnim content="your lips!" animDuration={3000} delayTime={1600} />
        </StyledThirdLandingText>
      </StyledLandingTextWrapper>
      <StyledRedirectLink to={routes.lipsticks}>
        <StyledButton>Discover It</StyledButton>
      </StyledRedirectLink>
      <Footer />
    </StyledHomeWrapper>
  );
};
export default Home;
