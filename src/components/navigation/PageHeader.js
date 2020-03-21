import React from "react";
import Navigation from "./Navigation";
import logoImage from "../../assets/images/noBgLogo.png";
import styled from "styled-components";
import Button from "../atoms/Button/Button";
import cartIcon from "../../assets/icons/shopping-bag.svg";
import { NavLink } from "react-router-dom";

const StyledHeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: 2fr 1fr 120px;
  align-items: center;
  padding: 0px 30px 0 0;
  min-height: 10vh;
`;
const StyledImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-left: 20px;
`;
const StyledImageWrapper = styled(NavLink)`
  background-color: "white";
  &.active {
    background-color: ${({ theme }) => theme.lighterPink};
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  left: 50%;
  top: 57%;
  font-size: ${({ theme }) => theme.fontSize.cart};
  transform: translate(-50%, -57%);
`;

const PageHeader = () => {
  return (
    <StyledHeaderWrapper>
      <StyledImageWrapper exact to="/">
        <StyledImage src={logoImage} alt="logo" />
      </StyledImageWrapper>
      <Navigation />
      <Button icon={cartIcon}>
        <StyledSpan>0</StyledSpan>
      </Button>
    </StyledHeaderWrapper>
  );
};
export default PageHeader;
