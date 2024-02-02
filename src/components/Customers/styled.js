import styled from "styled-components";
import Slider from "react-slick";

export const CustomSlider = styled(Slider)`
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 98px;
  height: 100px;

  @media(max-width: 850px) {
    margin-bottom: 50px;
  }

  .slick-slide {
    text-align: center; 
  }

  .slick-slide img {
    width: auto;
    height: auto;
    display: inline-block;
    vertical-align: middle; 
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 48px;
  font-style: italic;
  font-weight: 500;
  margin: 118px 200px;
  font-style: italic;

  @media(max-width: 1440px) {
    margin: 118px 100px;
  }

  @media(max-width: 1200px) {
    font-size: 38px;
  }

  @media(max-width: 850px) {
    margin: 50px 50px;
  }

  @media(max-width: 540px) {
    font-size: 32px;
    margin-left: 40px;
  }

  @media(max-width: 390px) {
    margin-left: 25px;
  }

`;
