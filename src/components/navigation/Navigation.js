import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { routes } from "../../routes";
import RootContext from "../../context/context";

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin-right: 45px;

  @media (max-width: 900px) {
    justify-content: flex-start;
    margin-right: 10px;
    margin-left: -10px;
  }
`;

const StyledLi = styled.li`
  margin: 0 30px;
  @media (max-width: 900px) {
    margin: 0 10px;
  }
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
const Navigation = () => {
  const context = useContext(RootContext);
  const { handlePathnameChange } = context;

  const { home, about, lipsticks } = routes;

  return (
    <>
      <StyledUl>
        <StyledLi>
          <StyledNavLink
            exact
            to={home}
            onClick={() => handlePathnameChange(home)}
          >
            Home
          </StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink
            exact
            to={about}
            onClick={() => handlePathnameChange(about)}
          >
            About
          </StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink
            exact
            to={lipsticks}
            onClick={() => handlePathnameChange(lipsticks)}
          >
            Lipsticks
          </StyledNavLink>
        </StyledLi>
      </StyledUl>
    </>
  );
};
export default Navigation;
