import React, { useContext } from "react";
import Slider from "../components/molecules/Slider";
import styled, { css, keyframes } from "styled-components";
import Slide from "react-reveal/Slide";
import Rotate from "react-reveal/Rotate";
import Fade from "react-reveal/Fade";
import aboutImage from "../assets/images/sliderImages/imageSlider2.jpg";
import Heading from "../components/atoms/Heading/Heading";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import gridImage1 from "../assets/images/sliderImages/imageSlider0.jpg";
import gridImage2 from "../assets/images/sliderImages/imageSlider8.jpg";
import gridImage3 from "../assets/images/sliderImages/imageSlider2.jpg";
import gridImage4 from "../assets/images/sliderImages/imageSlider4.jpg";
import stationaryImage2 from "../assets/images/stationaryImage2.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import RootContext from "../context/context";
import SimpleMap from "../components/molecules/GoogleMap/GoogleMap";

const StyledAboutViewWrapper = styled.div`
  background-color: ${({ theme }) => theme.grey100};
  margin: auto;

  @media (max-width: 900px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

const StyledSliderWrapper = styled.div`
  width: 100%;
  height: 80vh;
  margin: 0;
  padding-top: 10px;

  @media (max-width: 500px) {
    border-radius: 25px;
    overflow: hidden;
  }
`;

const StyledSecondSection = styled.div`
  padding: 70px 60px 50px 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  margin: auto;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 70px 20px 50px 20px;
  }
`;

const StyledAboutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: -30px;

  @media (max-width: 900px) {
    padding: 0 20px 0 20px;
  }
`;

const StyledImage = styled.div`
  background-image: url(${aboutImage});
  background-position: 50%;
  background-size: cover;
  width: 100%;
  height: 500px;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 3px 5px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);

  @media (max-width: 900px) {
    height: 400px;
  }
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.red};
  @media (max-width: 900px) {
    display: none;
  }
`;

const StyledSubHeading = styled(Heading)`
  color: ${({ theme }) => theme.red};
  position: relative;
  margin-left: ${({ huge }) => (huge ? "0" : "100px")};
  text-transform: capitalize;
  font-size: ${({ huge, theme }) =>
    huge ? theme.fontSize.xl : theme.fontSize.l};

  &:before {
    content: "";
    height: 5px;
    width: 90px;
    background-color: ${({ theme }) => theme.red};
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    margin-left: -100px;

    ${({ huge }) =>
      huge &&
      css`
        margin-left: 0;
        top: 100%;
      `}
  }
  @media (max-width: 600px) {
    font-size: ${({ theme, huge }) =>
      huge ? theme.fontSize.xl : theme.fontSize.m};
  }
`;

const StyledRedirectSectionText = styled(Heading)`
  color: ${({ theme }) => theme.red};
  position: relative;
  margin-left: 100px;
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSize.xl};

  &:before {
    content: "";
    height: 5px;
    width: 90px;
    background-color: ${({ theme }) => theme.red};
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    margin-left: -100px;

    @media (max-width: 900px) {
      display: none;
    }
  }

  &:after {
    content: "";
    height: 5px;
    width: 90px;
    background-color: ${({ theme }) => theme.red};
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    margin-right: -100px;

    @media (max-width: 900px) {
      display: none;
    }
  }

  @media (max-width: 900px) {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 0;
  }
`;

const StyledThirdSectionWrapper = styled.div`
  padding: 50px 60px 50px 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  margin: auto;
  position: relative;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 50px 20px 50px 20px;
  }
`;

const StyledGridImagesWrapper = styled.div`
  height: 98%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  border-radius: 25px;
  overflow: hidden;
  margin-top: -40px;

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const StyledGridImage = styled.div`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: 75% 25%;
  width: 100%;
  height: 300px;
  margin: 0 auto;
`;

const StyledThridTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    padding: 0 20px 0 20px;
  }
`;

const StyledDelayTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 29.5%;

  @media (max-width: 900px) {
    position: relative;
    width: 100%;
    top: 0;
    right: 0;
    margin-left: 20px;
    padding: 20px 0 20px 0;
  }
`;
const StyledProductsRedirectWrapper = styled.div`
  position: absolute;
  top: 65%;
  right: 15%;
  text-align: center;

  @media (max-width: 900px) {
    position: relative;
    top: 0;
    right: 0;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.red};
  text-transform: capitalize;
  margin-left: 80px;
  font-size: ${({ theme }) => theme.fontSize.l};

  @media (max-width: 900px) {
    margin: 0;
  }
`;

const StyledMapWrapper = styled.div`
  padding: 50px 60px 20px 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  margin: auto;
  position: relative;
  height: 600px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 0px 20px 20px 20px;
    height: auto;
  }
`;

const StyledMapDiv = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 900px) {
    width: 100%;
    height: 340px;
  }
`;

const StyledStationaryImage = styled.div`
  background-image: url(${({ src }) => src});
  background-size: cover;
  width: 100%;
  height: 400px;
  margin: 0 auto;
  border-radius: 20px;
  margin-top: 50px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const StyledAboutFooter = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.grey400};
  display: grid;
  grid-template-columns: 1fr 0.1fr;
  align-items: center;
  padding: 0 60px 0 60px;

  @media (max-width: 500px) {
    height: 40px;
    display: flex;
    padding: 0;
  }
`;

const StyledFooterText = styled(Paragraph)`
  color: white;
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSize.cart};
  @media (max-width: 500px) {
    padding-left: 10px;
  }
`;

const StyledFooterIconsWrapper = styled.div`
  display: flex;
`;

const StyledFooterIcon = styled.a`
  color: white;
  cursor: pointer;
  margin: 0 25px 0 25px;
  transition: all 0.6s ease-in-out;
  :hover {
    color: ${({ theme }) => theme.darkerPink};
  }

  @media (max-width: 500px) {
    margin: 0 5px 0 5px;
  }
`;

const About = () => {
  const context = useContext(RootContext);
  const { handlePathnameChange } = context;

  return (
    <StyledAboutViewWrapper>
      <Fade left>
        <StyledSliderWrapper>
          <Slider />
        </StyledSliderWrapper>
      </Fade>

      <StyledSecondSection>
        <StyledAboutTextWrapper>
          <Slide left duration={800}>
            <StyledHeading big>About us</StyledHeading>
            <StyledSubHeading>always on your lips</StyledSubHeading>
          </Slide>
          <Slide left duration={900}>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              itaque animi eius laudantium commodi architecto. Laudantium ipsa
              saepe reiciendis ipsum odit molestiae adipisci repellendus unde,
              quis corrupti nobis expedita maxime nulla, perspiciatis incidunt
              quod voluptate eius architecto esse consequuntur. Dicta!
            </Paragraph>
          </Slide>
          <Slide right duration={1000}>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              molestias hic placeat consectetur ex, quae doloribus eos et
              deserunt saepe cupiditate necessitatibus quaerat soluta sint!
            </Paragraph>
          </Slide>
          <Slide left duration={1000}>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit deserunt
              saepe cupiditate necessitatibus quaerat soluta sint!
            </Paragraph>
          </Slide>
        </StyledAboutTextWrapper>
        <Slide right duration={900}>
          <StyledImage />
        </Slide>
      </StyledSecondSection>

      <StyledThirdSectionWrapper>
        <Slide left duration={1000}>
          <StyledGridImagesWrapper>
            <StyledGridImage src={gridImage4} />
            <StyledGridImage src={gridImage3} />
            <StyledGridImage src={gridImage1} />
            <StyledGridImage src={gridImage2} />
          </StyledGridImagesWrapper>
        </Slide>
        <Slide right duration={1000}>
          <StyledThridTextWrapper>
            <StyledSubHeading huge>Our Gallery</StyledSubHeading>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, enim. Vitae atque suscipit velit aperiam cupiditate?
              Autem reprehenderit eveniet tempore? Recusandae minima ipsa,
              veniam perferendis dolorem dolorum doloremque nostrum inventore!
            </Paragraph>
            <Paragraph>
              Recusandae minima ipsa, veniam perferendis dolorem dolorum
              doloremque nostrum inventore! Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit.
            </Paragraph>
          </StyledThridTextWrapper>
        </Slide>
        <StyledDelayTextWrapper>
          <Fade bottom duration={900} delay={1500}>
            <StyledSubHeading>do you like it?</StyledSubHeading>
          </Fade>
        </StyledDelayTextWrapper>
        <StyledProductsRedirectWrapper>
          <Fade bottom duration={900} delay={2400}>
            <StyledRedirectSectionText>
              check our products
            </StyledRedirectSectionText>
            <StyledLink
              to={routes.lipsticks}
              onClick={handlePathnameChange(routes.lipsticks)}
            >
              go now
            </StyledLink>
          </Fade>
        </StyledProductsRedirectWrapper>
      </StyledThirdSectionWrapper>
      <StyledMapWrapper>
        <div style={{ marginTop: "-20px" }}>
          <Slide left duration={1100}>
            <StyledSubHeading huge>
              See where you can find us stationary!
            </StyledSubHeading>
          </Slide>
          <Slide right duration={1100}>
            <StyledStationaryImage src={stationaryImage2} />
          </Slide>
        </div>
        <Slide bottom duration={1500}>
          <StyledMapDiv>
            <SimpleMap />
          </StyledMapDiv>
        </Slide>
      </StyledMapWrapper>
      <Fade bottom duration={900} delay={1400}>
        <StyledAboutFooter>
          <StyledFooterText>
            copyright &copy; lipstick shop {new Date().getFullYear()} all rights
            reserved
          </StyledFooterText>
          <Rotate bottom right delay={1600}>
            <StyledFooterIconsWrapper>
              <StyledFooterIcon
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook style={{ width: "26px", height: "26px" }} />
              </StyledFooterIcon>
              <StyledFooterIcon
                href="https://twitter.com/home?lang=pl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter style={{ width: "26px", height: "26px" }} />
              </StyledFooterIcon>
              <StyledFooterIcon
                href="https://www.instagram.com/?hl=pl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram style={{ width: "26px", height: "26px" }} />
              </StyledFooterIcon>
            </StyledFooterIconsWrapper>
          </Rotate>
        </StyledAboutFooter>
      </Fade>
    </StyledAboutViewWrapper>
  );
};
export default About;
