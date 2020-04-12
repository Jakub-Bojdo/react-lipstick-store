import React, { useContext } from "react";
import { Formik, Field } from "formik";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import Button from "../../atoms/Button/Button";
import styled, { keyframes } from "styled-components";
import RootContext from "../../../context/context";

const StyledSubmitButton = styled(Button)`
  margin: auto;
`;

const formAnim = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1;}
`;
const StyledForm = styled.form`
  margin-bottom: 5px;

  animation: ${formAnim} 1.2s ease-in-out;
`;

const StyledGoBackLink = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  text-align: center;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.red};
`;

const PaymentForm = () => {
  const {
    meta,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    wrapperProps
  } = usePaymentInputs();

  const context = useContext(RootContext);

  const { handlePaymentInputVisibility, handleAlertVisibility } = context;

  return (
    <Formik
      initialValues={{
        cardNumber: "",
        expiryDate: "",
        cvc: ""
      }}
      onSubmit={
        (data => console.log(data), () => handleAlertVisibility("payment"))
      }
      validate={() => {
        let errors = {};
        if (meta.erroredInputs.cardNumber) {
          errors.cardNumber = meta.erroredInputs.cardNumber;
        }
        if (meta.erroredInputs.expiryDate) {
          errors.expiryDate = meta.erroredInputs.expiryDate;
        }
        if (meta.erroredInputs.cvc) {
          errors.cvc = meta.erroredInputs.cvc;
        }
        return errors;
      }}
    >
      {({ handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit}>
          <div style={{ marginBottom: "5px" }}>
            <PaymentInputsWrapper {...wrapperProps}>
              {/* <svg {...getCardImageProps({ images })} /> */}
              <Field name="cardNumber">
                {({ field }) => (
                  <input
                    {...getCardNumberProps({
                      onBlur: field.onBlur,
                      onChange: field.onChange
                    })}
                  />
                )}
              </Field>
              <Field name="expiryDate">
                {({ field }) => (
                  <input
                    {...getExpiryDateProps({
                      onBlur: field.onBlur,
                      onChange: field.onChange
                    })}
                  />
                )}
              </Field>
              <Field name="cvc">
                {({ field }) => (
                  <input
                    {...getCVCProps({
                      onBlur: field.onBlur,
                      onChange: field.onChange
                    })}
                  />
                )}
              </Field>
            </PaymentInputsWrapper>
          </div>
          <StyledSubmitButton type="submit">Pay now</StyledSubmitButton>
          <StyledGoBackLink onClick={handlePaymentInputVisibility}>
            or cancel payment
          </StyledGoBackLink>
        </StyledForm>
      )}
    </Formik>
  );
};

export default PaymentForm;
