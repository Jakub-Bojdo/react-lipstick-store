import { createGlobalStyle } from "styled-components";
import { routes } from "../routes";
import React, { useContext } from "react";
import RootContext from "../context/context";

const GlobalStyles = () => {
  const context = useContext(RootContext);

  const { pathname } = context;
  console.log(pathname);
  console.log(window.location.pathname);

  return <GlobalStyle pathname={pathname} />;
};

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600&display=swap');


*,*::before, *::after {
    box-sizing: border-box;
}
html{
    font-size: 62.5%
}

body{
    font-size: 1.6rem;
    padding-left: ${({ pathname }) =>
      (window.location.pathname === "/about" ? "0" : "30px") ||
      (pathname === routes.about ? "0" : "30px")};
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    height: 100%;
    
    overflow-y: ${({ pathname }) =>
      (window.location.pathname === "/about" ? "scroll" : "hidden") ||
      (pathname === routes.about ? "scroll" : "hidden")};
      
      overflow-x: hidden;
     @media (max-width: 900px) {
        padding: 0px;
        margin: 0px;
        overflow: scroll;

  }
}


`;

export default GlobalStyles;
