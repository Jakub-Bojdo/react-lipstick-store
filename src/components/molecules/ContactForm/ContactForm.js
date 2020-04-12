import React, { useRef, useContext } from "react";
import styled from "styled-components";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import Heading from "../../atoms/Heading/Heading";
import contactBgImage from "../../../assets/images/lipsticksContactBg.jpg";
import closeArrowIcon from "../../../assets/icons/arrowIcon.svg";
import emailjs from "emailjs-com";
import RootContext from "../../../context/context";

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

  @media (max-width: 500px) {
    width: 365px;
  }
`;

const StyledFormWrapper = styled.form`
  display: flex;
  font-weight: ${({ theme }) => theme.medium};

  flex-direction: column;
`;

const StyledInputForm = styled(Input)`
  margin-top: 30px;
`;

const StyledFormHeading = styled(Heading)`
  text-align: center;
  color: ${({ theme }) => theme.darkerPink};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.medium};
`;

const StyledFormTextArea = styled(Input)`
  margin: 30px 0 22px;
  height: 25vh;
  max-height: 25vh;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledFormButton = styled(Button)`
  background-color: ${({ theme }) => theme.darkerPink};
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

const ContactForm = ({ isVisible, handleFormClose }) => {
  const context = useContext(RootContext);
  const { handleAlertVisibility } = context;
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const service_id = "default_service";
    const template_id = "lipstickstoreemail";
    const user_id = process.env.REACT_APP_USER_ID;

    emailjs.sendForm(service_id, template_id, e.target, user_id).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    //Reset Inputs after send
    const { email, subject, content } = e.target;
    email.value = "";
    subject.value = "";
    content.value = "";

    handleFormClose();
    handleAlertVisibility("message");
  };

  return (
    <StyledWrapper isVisible={isVisible}>
      <StyledFormHeading>Contact Us</StyledFormHeading>

      <StyledFormWrapper onSubmit={sendEmail} ref={formRef}>
        <StyledInputForm
          type="email"
          name="email"
          placeholder="Your email address"
          required
        />
        <StyledInputForm
          type="text"
          name="subject"
          required
          placeholder="What is this about?"
        />
        <StyledFormTextArea
          type="text"
          as="textarea"
          rows="10"
          name="content"
          required
          placeholder="How we can help You?"
        />
        <StyledFormButton type="submit">Send Message</StyledFormButton>
      </StyledFormWrapper>

      <StyledCloseButton onClick={handleFormClose}>
        <StyledArrowImage src={closeArrowIcon} alt="close arrow" />
      </StyledCloseButton>
    </StyledWrapper>
  );
};

export default ContactForm;
