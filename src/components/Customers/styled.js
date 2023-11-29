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
  font-weight: 400;
  margin-left: 80px;
  margin-bottom: 95px;
  position: relative;
  font-style: italic;

  &::after {
    content: "";
    position: absolute;
    left: 4%;
    bottom: -10px;
    width: 108px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
    transform: translateX(-50%);
  }

  @media(max-width: 1200px) {
    font-size: 38px;

    &::after {
      content: "";
    position: absolute;
    left: 5%;
    bottom: -10px;
    width: 108px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
    transform: translateX(-50%);
  }
  }

  @media(max-width: 540px) {
    font-size: 32px;
    margin-left: 40px;
  }

  @media(max-width: 390px) {
    margin-left: 25px;
  }

`;
