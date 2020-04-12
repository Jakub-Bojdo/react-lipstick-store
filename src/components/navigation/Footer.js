import React, { useContext } from "react";
import styled from "styled-components";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import RootContext from "../../context/context";

const StyledFooterWrapper = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  margin: 0 60px 0 100px;

  @media (max-width: 700px) {
    position: absolute;
    right: 0;
    bottom: -9%;
    display: flex;
    align-items: center;
    margin: 0;

    display: none;
  }
`;

const StyledIconLink = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 20px 28px 20px;
  cursor: pointer;

  @media (max-width: 500px) {
    width: 20px;
    height: 20px;
    margin: 0 20px 0px 20px;
    cursor: pointer;
  }
`;

const Footer = () => {
  const context = useContext(RootContext);

  const { pathname } = context;

  return (
    <StyledFooterWrapper path={pathname}>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIconLink src={facebookIcon} alt="facebook" />
      </a>
      <a
        href="https://twitter.com/home?lang=pl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIconLink src={twitterIcon} alt="twitter" />
      </a>
      <a
        href="https://www.instagram.com/?hl=pl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIconLink src={instagramIcon} alt="instagram" />
      </a>
    </StyledFooterWrapper>
  );
};

export default Footer;
