import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import imageSlider1 from "../../assets/images/sliderImages/imageSlider1.jpg";
import imageSlider2 from "../../assets/images/sliderImages/imageSlider2.jpg";
import imageSlider3 from "../../assets/images/sliderImages/imageSlider3.jpg";
import imageSlider4 from "../../assets/images/sliderImages/imageSlider4.jpg";
import imageSlider5 from "../../assets/images/sliderImages/imageSlider5.jpg";
import imageSlider6 from "../../assets/images/sliderImages/imageSlider6.jpg";
import imageSlider7 from "../../assets/images/sliderImages/imageSlider7.jpg";
import imageSlider8 from "../../assets/images/sliderImages/imageSlider8.jpg";
import imageSlider10 from "../../assets/images/sliderImages/imageSlider10.jpg";
import imageSlider0 from "../../assets/images/sliderImages/imageSlider0.jpg";
import imageSlider13 from "../../assets/images/sliderImages/imageSlider13.jpg";
import imageSlider14 from "../../assets/images/sliderImages/imageSlider14.jpg";
import imageSlider11 from "../../assets/images/sliderImages/imageSlider11.jpg";
import imageSlider16 from "../../assets/images/sliderImages/imageSlider16.jpg";
import imageSlider17 from "../../assets/images/sliderImages/imageSlider17.jpg";
import imageSlider18 from "../../assets/images/sliderImages/imageSlider18.jpg";

import styled from "styled-components";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const StyledSlider = styled(AutoplaySlider)`
  width: 85%;
  height: 100%;
  margin: auto;
`;

const StyledDiv = styled.div`
  width: 20px;
`;

const Slider = () => (
  <StyledSlider
    play={true}
    cancelOnInteraction={false}
    interval={3500}
    bullets={false}
    mobileTouch={true}
  >
    <StyledDiv data-src={imageSlider11} />
    <StyledDiv data-src={imageSlider0} />
    <StyledDiv data-src={imageSlider4} />
    <StyledDiv data-src={imageSlider3} />
    <StyledDiv data-src={imageSlider2} />
    <StyledDiv data-src={imageSlider17} />
  </StyledSlider>
);

export default Slider;
