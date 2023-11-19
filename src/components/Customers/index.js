import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import agaex from "./Agaex.png";
import artmir from "./artmir.png";
import baydo from "./baydo.png";
import energa from "./energa.png";
import pks from "./pks.png";
import telemax from "./telemax.png";
import { CustomSlider } from "./styled";

export const Customers = () => {
  const slider = useRef();
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <CustomSlider ref={slider} {...settings}>
      <div>
        <img src={agaex} />
      </div>
      <div>
        <img src={artmir} />
      </div>
      <div>
        <img src={baydo} />
      </div>
      <div>
        <img src={energa} />
      </div>
      <div>
        <img src={pks} />
      </div>
      <div>
        <img src={telemax} />
      </div>
    </CustomSlider>
  );
};
