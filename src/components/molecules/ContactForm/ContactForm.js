import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import styled from "styled-components";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import Heading from "../../atoms/Heading/Heading";
import contactBgImage from "../../../assets/images/lipsticksContactBg.jpg";
import closeArrowIcon from "../../../assets/icons/arrowIcon.svg";
import * as Yup from "yup";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width: 480px;
  position: fixed;
  z-index: 9999;
  right: 0;
  top: 0;
  padding: 60px 30px 60px 70px;
  border-left: 7px solid ${({ theme }) => theme.darkerPink};
  background: white;
  background-size: contain;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  transform: translateX(${({ isVisible }) => (isVisible ? "0" : "100%")});
  transition: transform 0.4s ease-in-out;
`;

const StyledFormWrapper = styled(Form)`
  display: flex;

  flex-direction: column;
`;

const StyledInputForm = styled(Input)`
  margin-top: 30px;
`;

const StyledFormHeading = styled(Heading)`
  text-align: center;
  color: ${({ theme }) => theme.darkerRed};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.extraBold};
`;

const StyledFormTextArea = styled(Input)`
  margin: 30px 0 22px;
  height: 25vh;
  max-height: 25vh;
`;

const StyledFormButton = styled(Button)`
  background-color: ${({ theme }) => theme.darkerRed};
  width: 25vh;
  margin: 0 auto;
  padding: 12px 15px;
`;

const StyledCloseButton = styled.button`
  position: absolute;
  left: 0;
  top: 5%;
  cursor: pointer;
  padding: 0;
  margin: 0;
  z-index: 1000000;
  border: none;
  outline: none;
  background: transparent;
`;
const StyledArrowImage = styled.img`
  width: 50px;
  height: 50px;
`;

const ContactForm = ({ isVisible, handleClose }) => {
  return (
    <StyledWrapper isVisible={isVisible}>
      <StyledFormHeading>Contact Us</StyledFormHeading>
      <Formik
        initialValues={{ email: "", topic: "", content: "" }}
        onSubmit={values => {
          console.log("Message Send!");
          console.log(values);
        }}
      >
        {({ handleBlur, handleChange, handleSubmit }) => (
          <StyledFormWrapper>
            <StyledInputForm
              type="email"
              name="email"
              placeholder="Your email address"
              required
            />
            <StyledInputForm
              type="text"
              name="topic"
              placeholder="What is this about?"
              required
            />
            <StyledFormTextArea
              type="text"
              as="textarea"
              rows="10"
              required
              name="content"
              placeholder="How we can help You?"
            />
            <StyledFormButton type="submit">Send Message</StyledFormButton>
          </StyledFormWrapper>
        )}
      </Formik>
      <StyledCloseButton onClick={handleClose}>
        <StyledArrowImage src={closeArrowIcon} alt="simea" />
      </StyledCloseButton>
    </StyledWrapper>
  );
};

export default ContactForm;
