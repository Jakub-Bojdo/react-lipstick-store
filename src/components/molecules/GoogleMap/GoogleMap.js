import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import Jump from "react-reveal/Jump";

const StyledMapMarkWrapper = styled.div`
  color: white;
  background-color: ${({ theme }) => theme.red};
  padding: 13px 20px;
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 100% 100% 100% 0;
  transform: rotate(-45deg);
  width: 50px;
  height: 50px;
`;

const StyledTextMark = styled.h4`
  transform: rotate(45deg);
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  margin: 0;
  padding: 0;
`;

const MapMark = ({ text }) => (
  <Jump forever delay={2000} duration={2000}>
    <StyledMapMarkWrapper>
      <StyledTextMark>{text}</StyledTextMark>
    </StyledMapMarkWrapper>
  </Jump>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: { lat: 50.049683, lng: 19.944544 },
    zoom: 11,
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <MapMark lat={50.049683} lng={19.944544} text={"We Are Here"} />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;
