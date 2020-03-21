import React from "react";
import GlobalStyle from "../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../theme/mainTheme";
import PageHeader from "../components/navigation/PageHeader";
import Footer from "../components/navigation/Footer";
import { routes } from "../routes";

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <>
          <PageHeader />
          {children}
          <Footer />
        </>
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
