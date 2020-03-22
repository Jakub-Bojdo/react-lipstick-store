import { createGlobalStyle } from "styled-components";

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
    padding-left:30px ;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    height: 100%;
     overflow: hidden;
}


`;

export default GlobalStyle;
