import React, { useContext, useState, useEffect } from "react";
// import roseLipsImage from "../assets/images/rose-lips.jpg";
// import greenLipsImage from "../assets/images/green-lips.png";
// import oceanLipsImage from "../assets/images/ocean-lips.png";
// import orangeLipsImage from "../assets/images/orange-lips.png";
// import violetLipsImage from "../assets/images/violet-lips.png";
import styled, { keyframes, css } from "styled-components";
import RootContext from "../context/context";
import WithAnim from "../hoc/withAnim";
import Button from "../components/atoms/Button/Button";
import Alert from "../components/atoms/Alert/Alert";
import Footer from "../components/navigation/Footer";

const StyledProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 20px 1fr;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;
//TODO: Zrobić animacje w momencie kliknięcia w przycisk
const productImageAnim = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1;}
`;

const productNameAnim = keyframes`
  0% { opacity: 0; transform: translateX(-50%);}
  100% { opacity: 1; transform: translateX(0%);}
`;
const StyledProductImage = styled.div`
  height: 80vh;
  width: 30vw;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: 50%, 50%;
  background-size: cover;
  border-radius: 15px;
  margin: 0 0 0 100px;

  ${({ anim }) =>
    anim &&
    css`
      animation: ${productImageAnim} 1.1s ease-in-out;
    `}

  @media (max-width: 700px) {
    height: 30vh;
    width: 80vw;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-position: 50%, 50%;
    background-size: cover;
    border-radius: 15px;
    margin: auto;
  }
`;
const StyledBreakLine = styled.div`
  height: 80vh;
  width: 7px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.red};

  @media (max-width: 900px) {
    /* height: 7px;
    width: 90%;
    margin: auto; */
    display: none;
  }
`;

const StyledInformationWrapper = styled.div`
  margin: 0 150px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    margin: auto;
    width: 80vw;
  }
`;

const StyledStaticProductNameHeading = styled.h2`
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const StyledAvailableColorSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledChooseColorWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 80px);

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(5, 60px);
  }
`;

const StyledColorOption = styled.button`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  outline: none;
  border: none;
  background-color: ${({ theme, green, violet, ocean, orange }) =>
    green
      ? theme.green
      : violet
      ? theme.violet
      : ocean
      ? theme.ocean
      : orange
      ? theme.orange
      : theme.rose};

  cursor: pointer;
`;

const StyledProductDescription = styled.h5`
  font-weight: ${({ theme }) => theme.medium};
`;

const StyledColorOptionsHeader = styled.h3`
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.darkerPink};
  margin-top: 21px;
`;

const StyledReadMoreButton = styled.button`
  border: none;
  outline: none;
  position: relative;
  width: 100px;
  text-transform: capitalize;
  background-color: transparent;
  color: ${({ theme }) => theme.red};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.bold};
  text-align: start;
  &:after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.red};
    height: 2.5px;
    width: 75px;
    display: block;
  }
`;

const StyledLipstickName = styled.span`
  color: ${({ theme, productName }) => theme[productName]};
  text-transform: capitalize;
  letter-spacing: 1px;

  ${({ anim }) =>
    anim &&
    css`
      animation: ${productNameAnim} 1s ease-in-out;
    `}
`;

const StyledMoreInfoWrapper = styled.div``;

const StyledSubtitle = styled.h4`
  color: ${({ theme }) => theme.red};
`;

const StyledAddToCartButton = styled(Button)`
  width: 150px;
  height: 40px;
  margin: 50px 0 0 0;
  color: white;
  font-weight: ${({ theme }) => theme.medium};
  letter-spacing: 0.6px;
  font-size: ${({ theme }) => theme.fontSize.cart};

  @media (max-width: 700px) {
    margin: 30px 0 20px 0;
  }
`;

const StyledWeightAndPriceInfo = styled.p`
  @media (max-width: 700px) {
    margin: 0;
    padding: 0;
  }
`;

const Lipsticks = () => {
  const context = useContext(RootContext);
  const {
    productImage,
    productName,
    handleProductColorChange,
    handleCartCounterIncrese,
    isAlertCartVisible,
    handleAlertVisibility,
    addProductToCart,
  } = context;

  const [isAnimationRunning, setAnimationRunning] = useState(false);
  const [isButtonNotClickable, setButtonClickable] = useState(false);
  const [isReadMoreButtonOpen, setReadMoreButtonOpen] = useState(false);

  useEffect(() => {
    runAnimation();
    return () => {};
  }, []);

  const runAnimation = () => {
    setAnimationRunning(true);
    setButtonClickable(true);

    setTimeout(() => {
      setAnimationRunning(false);
      setButtonClickable(false);
    }, 1101);
  };

  return (
    <>
      <StyledProductWrapper>
        <StyledProductImage image={productImage} anim={isAnimationRunning} />
        <StyledBreakLine />
        <StyledInformationWrapper>
          <StyledStaticProductNameHeading>
            Corliss Paton{" "}
            <StyledLipstickName
              productName={productName}
              anim={isAnimationRunning}
            >
              {productName}
            </StyledLipstickName>
          </StyledStaticProductNameHeading>
          <StyledWeightAndPriceInfo>weight (3g) | 25$</StyledWeightAndPriceInfo>

          <StyledProductDescription>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur similique quos quis reprehenderit minima quia libero
            reiciendis voluptatibus architecto repellat! <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
            dolores ullam. Quis incidunt rerum tenetur
          </StyledProductDescription>

          <StyledReadMoreButton
            onClick={() => setReadMoreButtonOpen(!isReadMoreButtonOpen)}
          >
            {isReadMoreButtonOpen ? "read less" : "read more"}
          </StyledReadMoreButton>
          {isReadMoreButtonOpen && (
            <StyledMoreInfoWrapper>
              <StyledSubtitle>
                <WithAnim content="How To Use?" />
              </StyledSubtitle>
              <StyledProductDescription>
                <WithAnim
                  delayTime={1000}
                  content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              unde iure tenetur repellat aliquam enim animi odit, asperiores
              voluptates. Id."
                />
              </StyledProductDescription>
            </StyledMoreInfoWrapper>
          )}

          <StyledAvailableColorSectionWrapper>
            <StyledColorOptionsHeader>
              Available in these colours
            </StyledColorOptionsHeader>
            <StyledChooseColorWrapper>
              <StyledColorOption
                onClick={() => {
                  handleProductColorChange();
                  runAnimation();
                }}
                disabled={isButtonNotClickable}
              />
              <StyledColorOption
                violet
                onClick={() => {
                  handleProductColorChange("violet");
                  runAnimation();
                }}
                disabled={isButtonNotClickable}
              />
              <StyledColorOption
                green
                onClick={() => {
                  handleProductColorChange("green");
                  runAnimation();
                }}
                disabled={isButtonNotClickable}
              />
              <StyledColorOption
                ocean
                onClick={() => {
                  handleProductColorChange("ocean");
                  runAnimation();
                }}
                disabled={isButtonNotClickable}
              />
              <StyledColorOption
                orange
                onClick={() => {
                  handleProductColorChange("orange");
                  runAnimation();
                }}
                disabled={isButtonNotClickable}
              />
            </StyledChooseColorWrapper>
          </StyledAvailableColorSectionWrapper>
          <StyledAddToCartButton
            onClick={() => {
              handleCartCounterIncrese();
              handleAlertVisibility("cart");
              addProductToCart(productName);
            }}
          >
            Add to cart
          </StyledAddToCartButton>
        </StyledInformationWrapper>
        <Footer />
      </StyledProductWrapper>
      {isAlertCartVisible && (
        <Alert
          alertContent="Added to cart!"
          isAlertVisible={isAlertCartVisible}
          closeAlert={() => handleAlertVisibility("cart")}
        />
      )}
    </>
  );
};
export default Lipsticks;
