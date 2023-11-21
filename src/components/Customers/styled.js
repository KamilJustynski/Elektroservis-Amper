import styled from "styled-components";
import Slider from "react-slick";

export const CustomSlider = styled(Slider)`
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 98px;
  height: 100px;

  .slick-slide {
    text-align: center; /* Wyśrodkowanie zawartości */
  }

  .slick-slide img {
    width: auto;
    height: auto;
    display: inline-block; /* Zmiana na inline-block */
    vertical-align: middle; /* Wyśrodkowanie pionowe */
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
`;
