import React, { useState } from "react";
import GlobalStyle from "../theme/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import { mainTheme } from "../theme/mainTheme";
import PageHeader from "../components/navigation/PageHeader";
import Footer from "../components/navigation/Footer";
import ContactForm from "../components/molecules/ContactForm/ContactForm";
import Button from "../components/atoms/Button/Button";

const StyledContactUsButton = styled(Button)`
  position: absolute;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  right: 0;
  top: 50%;
  transform: rotate(-90deg);
  transform-origin: 70% 0;
  z-index: 9000;
`;

const MainTemplate = ({ children }) => {
  const [isContactFormVisible, setContactFormVisible] = useState(false);

  const handleContactFormVisibility = () => {
    setContactFormVisible(!isContactFormVisible);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <>
          <PageHeader />
          {children}
          <StyledContactUsButton onClick={handleContactFormVisibility}>
            Contact Us
          </StyledContactUsButton>
          <ContactForm
            isVisible={isContactFormVisible}
            handleClose={handleContactFormVisibility}
          />
          <Footer />
        </>
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
