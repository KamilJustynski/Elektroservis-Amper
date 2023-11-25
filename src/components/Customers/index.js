import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import agaex from "./Agaex.png";
import artmir from "./artmir.png";
import baydo from "./baydo.png";
import energa from "./energa.png";
import pks from "./pks.png";
import telemax from "./telemax.png";
import { CustomSlider, Title } from "./styled";

export const Customers = () => {
  const slider = useRef();
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <Title>Zaufali nam</Title>
      <CustomSlider ref={slider} {...settings}>
        <div>
          <img src={agaex} alt="Agaex" />
        </div>
        <div>
          <img src={artmir} alt="Artmir" />
        </div>
        <div>
          <img src={baydo} alt="Baydo" />
        </div>
        <div>
          <img src={energa} alt="Energa" />
        </div>
        <div>
          <img src={pks} alt="PKS" />
        </div>
        <div>
          <img src={telemax} alt="TELEMAX" />
        </div>
      </CustomSlider>
    </>
  );
};
