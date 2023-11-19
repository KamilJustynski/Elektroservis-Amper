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
