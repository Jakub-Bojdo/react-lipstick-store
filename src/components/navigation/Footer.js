import React from "react";
import styled from "styled-components";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import twitterIcon from "../../assets/icons/twitter.svg";

const StyledFooterWrapper = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  margin: 0 60px 0 100px;
`;

const StyledIconLink = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 20px 28px 20px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <StyledFooterWrapper>
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
