import React, { useContext } from "react";
import Navigation from "./Navigation";
import logoImage from "../../assets/images/noBgLogo.png";
import styled from "styled-components";
import Button from "../atoms/Button/Button";
import cartIcon from "../../assets/icons/shopping-bag.svg";
import RootContext from "../../context/context";
import { NavLink } from "react-router-dom";

const StyledHeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: 2fr 1fr 120px;
  align-items: center;
  padding: 0px 30px 0 0;
  min-height: 10vh;
  position: ${({ isNotSticky }) => (isNotSticky ? "relative" : "sticky")};
  position: ${({ isNotSticky }) =>
    isNotSticky ? "relative" : "-webkit-sticky"};
  top: 0;
  z-index: 100;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  background-color: white;
  @media (max-width: 900px) {
    display: gird;
    grid-template-columns: 1fr 100px;
    padding: 0;
    min-height: 15vh;
  }
`;
const StyledImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-left: 20px;
  @media (max-width: 900px) {
    display: none;
    margin: 0;
  }
`;
const StyledImageWrapper = styled(NavLink)`
  background-color: "white";
  &.active {
    background-color: ${({ theme }) => theme.lighterPink};
  }
  @media (max-width: 900px) {
    display: none;
    margin: 0;
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
  const context = useContext(RootContext);
  const { cartCounter, handleCartOpen, isCartOpen } = context;
  return (
    <StyledHeaderWrapper isNotSticky={isCartOpen}>
      <StyledImageWrapper exact to="/">
        <StyledImage src={logoImage} alt="logo" />
      </StyledImageWrapper>
      <Navigation />
      <Button icon={cartIcon} onClick={handleCartOpen}>
        <StyledSpan>{cartCounter}</StyledSpan>
      </Button>
    </StyledHeaderWrapper>
  );
};
export default PageHeader;
