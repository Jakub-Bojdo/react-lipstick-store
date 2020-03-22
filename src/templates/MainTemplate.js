import React, { useState } from "react";
import GlobalStyle from "../theme/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import { mainTheme } from "../theme/mainTheme";
import PageHeader from "../components/navigation/PageHeader";
import Footer from "../components/navigation/Footer";
import ContactForm from "../components/molecules/ContactForm/ContactForm";
import Button from "../components/atoms/Button/Button";
import Alert from "../components/atoms/Alert/Alert";

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
  const [isAlertVisible, setAlertVisible] = useState(false);

  const handleContactFormVisibility = () => {
    setContactFormVisible(!isContactFormVisible);
  };

  const handleAlertVisibility = () => {
    setAlertVisible(!isAlertVisible);

    //hide alert
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <>
          <PageHeader />
          <Alert
            isVisible={isAlertVisible}
            handleAlertClose={handleAlertVisibility}
          />
          {children}
          <StyledContactUsButton onClick={handleContactFormVisibility}>
            Contact Us
          </StyledContactUsButton>
          <ContactForm
            isVisible={isContactFormVisible}
            handleFormClose={handleContactFormVisibility}
            handleAlertOpen={handleAlertVisibility}
          />
          <Footer />
        </>
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
