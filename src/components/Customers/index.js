import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import agaex from "./customersSVG/agaex.svg";
import artmir from "./customersPNG/artmir.png";
import baydo from "./customersPNG/baydo.png";
import energaLogo from "./customersSVG/energaLogo.svg";
import energaName from "./customersSVG/energaName.svg";
import pks from "./customersPNG/pks.png";
import telemax from "./customersPNG/telemax.png";
import garsad from "./customersPNG/garsad.png";
import moeg from "./customersSVG/moeg.svg";
import nckGroup from "./customersPNG/nckGroup.png";
import sipPanelPolska from "./customersSVG/sipPanelPolska.svg";
import tpu from "./customersSVG/tpu.svg";
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
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
          <img src={energaLogo} alt="Energa Logo" />
          <img src={energaName} alt="Energa Name" />
        </div>
        <div>
          <img src={pks} alt="PKS" />
        </div>
        <div>
          <img src={telemax} alt="TELE-MAX" />
        </div>
        <div>
          <img src={garsad} alt="Garsad" />
        </div>
        <div>
          <img src={moeg} alt="Member of elevation group" />
        </div>
        <div>
          <img src={nckGroup} alt="NCK Group" />
        </div>
        <div>
          <img src={sipPanelPolska} alt="Sip Panel Polska" />
        </div>
        <div>
          <img src={tpu} alt="TPU" />
        </div>
      </CustomSlider>
    </>
  );
};
