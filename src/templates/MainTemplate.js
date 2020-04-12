import React, { useState, useContext } from "react";
import GlobalStyles from "../theme/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import { mainTheme } from "../theme/mainTheme";
import PageHeader from "../components/navigation/PageHeader";
import Footer from "../components/navigation/Footer";
import ContactForm from "../components/molecules/ContactForm/ContactForm";
import Button from "../components/atoms/Button/Button";
import Alert from "../components/atoms/Alert/Alert";
import RootContext from "../context/context";
import Cart from "../components/molecules/Cart/Cart";

const StyledContactUsButton = styled(Button)`
  position: absolute;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  right: 0;
  top: 50%;
  transform: rotate(-90deg);
  transform-origin: 70% 0;
  z-index: 99;

  @media (max-width: 700px) {
    top: 58%;
  }
`;

const MainTemplate = ({ children }) => {
  const context = useContext(RootContext);
  const {
    isAlertMessageVisible,
    handleAlertVisibility,
    isPaymentAlertVisible,
  } = context;

  const [isContactFormVisible, setContactFormVisible] = useState(false);

  const handleContactFormVisibility = () => {
    setContactFormVisible(!isContactFormVisible);
  };

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={mainTheme}>
        <>
          <PageHeader />
          {isAlertMessageVisible && (
            <Alert
              alertContent="Message Send!"
              isAlertVisible={isAlertMessageVisible}
              closeAlert={() => handleAlertVisibility("message")}
            />
          )}
          {isPaymentAlertVisible && (
            <Alert
              alertContent="Payment Succesfull!"
              isAlertVisible={isPaymentAlertVisible}
              closeAlert={() => handleAlertVisibility("payment")}
            />
          )}
          <Cart />
          {children}

          <StyledContactUsButton onClick={handleContactFormVisibility}>
            Contact Us
          </StyledContactUsButton>
          <ContactForm
            isVisible={isContactFormVisible}
            handleFormClose={handleContactFormVisibility}
          />
        </>
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
