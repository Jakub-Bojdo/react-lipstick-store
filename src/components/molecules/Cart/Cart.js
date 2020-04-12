import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styled, { keyframes } from "styled-components";
import RootContext from "../../../context/context";
import removeItemIcon from "../../../assets/icons/removeItemIcon.svg";
import PaymentInput from "./PaymentInput";
import Button from "../../atoms/Button/Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "3px solid rgb(199, 0, 57)",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    borderRadius: "15px",
    height: "90vh",
    width: "30vw",
    position: "relative",

    "@media (max-width: 500px)": {
      width: "86%",
    },
  },
}));

const StyledCartTitle = styled.h2`
  color: ${({ theme }) => theme.red};
  position: relative;
  font-weight: ${({ theme }) => theme.medium};

  &:after {
    content: "";
    height: 2px;
    width: 150px;
    background-color: ${({ theme }) => theme.red};
    display: block;
    position: absolute;
  }
`;

const StyledListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 5px 10px;
`;

const StyledListItemWrapper = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 20px;
  align-items: center;
  font-weight: ${({ theme }) => theme.medium};
  color: ${({ theme }) => theme.red};
`;

const StyledProductImage = styled.div`
  background-image: url(${({ image }) => image});
  width: 45px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

const StyledProductName = styled.h4`
  color: ${({ theme, color }) => theme[color]};
  font-weight: ${({ theme }) => theme.medium};
`;

const StyledDeleteButton = styled.button`
  width: 12px;
  height: 12px;
  background-image: url(${removeItemIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  overflow: hidden;
  padding: 6px;
`;

const paymentInputAnim = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1;}
`;

const StyledTotalPrice = styled.h5`
  font-weight: ${({ theme }) => theme.medium};
  color: ${({ theme }) => theme.red};
  font-size: ${({ theme }) => theme.fontSize.s};
  position: absolute;
  left: 71%;
  bottom: 22%;
  animation: ${paymentInputAnim} 2s ease-in-out;
`;

const StyledPaymentInputWrapper = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;

  transform: translateX(-50%);
  animation: ${paymentInputAnim} 2s ease-in-out;
`;

const Cart = () => {
  const classes = useStyles();

  const context = useContext(RootContext);
  const {
    shoppingCart,
    handleCartClose,
    isCartOpen,
    removeProductFromCart,
    cartTotal,
    isPaymentInputVisible,
    handlePaymentInputVisibility,
  } = context;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isCartOpen}
        onClose={handleCartClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isCartOpen}>
          <div className={classes.paper}>
            <StyledCartTitle id="transition-modal-title">
              Your Cart
            </StyledCartTitle>
            <div id="transition-modal-description">
              <StyledListWrapper>
                {shoppingCart.map(({ name, image, quantity, price }) => (
                  <StyledListItemWrapper key={name}>
                    <StyledProductImage image={image} />
                    <StyledProductName color={name}>{name}</StyledProductName>
                    <span>{quantity}</span>
                    <p>{price}$</p>
                    <StyledDeleteButton
                      onClick={() => removeProductFromCart(name)}
                    />
                  </StyledListItemWrapper>
                ))}
                {shoppingCart.length !== 0 && (
                  <StyledTotalPrice>Total: {cartTotal}$</StyledTotalPrice>
                )}

                <StyledPaymentInputWrapper>
                  {!isPaymentInputVisible && (
                    <Button onClick={handlePaymentInputVisibility}>
                      Go to Payment
                    </Button>
                  )}
                  {isPaymentInputVisible && <PaymentInput />}
                </StyledPaymentInputWrapper>
              </StyledListWrapper>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Cart;
