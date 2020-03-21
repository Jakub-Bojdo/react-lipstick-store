import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin-right: 45px;
`;

const StyledLi = styled.li`
  margin: 0 30px;
`;

const navLinksUnderlineAnimation = keyframes`
  0% { transform: translateX(0%); width: 0%;
opacity: 0; }
  100% { transform: translateX(0%);
  opacity: 1; width: 100% }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  position: relative;
  cursor: pointer;
  color: ${({ theme }) => theme.black};
  &.active {
    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 2px;
      background-color: ${({ theme }) => theme.red};
      animation: ${navLinksUnderlineAnimation} 0.4s ease-in-out;
      width: 100%;
    }
  }
`;

const StyledNavWrapper = styled.nav``;
const Navigation = () => (
  <StyledNavWrapper>
    <StyledUl>
      <StyledLi>
        <StyledNavLink exact to="/">
          Home
        </StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink exact to="/about">
          About
        </StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink exact to="/lipsticks">
          Lipsticks
        </StyledNavLink>
      </StyledLi>
    </StyledUl>
  </StyledNavWrapper>
);
export default Navigation;
