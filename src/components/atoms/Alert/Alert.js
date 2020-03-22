import React from "react";
import styled from "styled-components";

const StyledAlertPositionWrapper = styled.div`
  position: absolute;
  left: 52%;
  top: 5%;
  z-index: 1000000;
  transform: translate(-52%, -5%);
`;

const StyledAlertWrapper = styled.div`

/* transform: translateX(${({ isVisible }) => (isVisible ? "0" : "100%")}); */
opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
transition: opacity 0.5s ease-in-out;
background-color: ${({ theme }) => theme.darkerPink};
width: 13vw;
height: 5vh;
border-radius:10px;
display: flex;
flex-direction: column;
justify-content: flex-start;
position: relative;

`;

const StyledAlertHeading = styled.h4`
  color: white;
  margin: 9px 20px;
  font-weight: ${({ theme }) => theme.medium};
`;

// const StyledAlertContent = styled.h5`
//   color: white;
//   margin: 10px 20px;
// `;

const StyledAlertCloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  margin-right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
`;

const StyledButtonContent = styled.div`
  color: white;
  background-color: white;
  position: relative;
  margin-right: 10px;

  &:after {
    content: "";
    position: absolute;
    height: 2px;
    top: 50%;
    left: 50%;
    z-index: 9999;
    transform: translate(-50%, -50%);
    background-color: white;
    display: block;
    width: 17px;
    transform: rotate(47deg);
  }
  &:before {
    content: "";
    position: absolute;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    display: block;
    width: 17px;
    transform: rotate(-47deg);
  }
`;

const Alert = ({ isVisible, handleAlertClose }) => (
  <StyledAlertPositionWrapper>
    <StyledAlertWrapper isVisible={isVisible}>
      <StyledAlertHeading>Message Send!</StyledAlertHeading>
      {/* <StyledAlertContent>Thank You !</StyledAlertContent> */}
      <StyledAlertCloseButton onClick={handleAlertClose}>
        <StyledButtonContent />
      </StyledAlertCloseButton>
    </StyledAlertWrapper>
  </StyledAlertPositionWrapper>
);

export default Alert;
