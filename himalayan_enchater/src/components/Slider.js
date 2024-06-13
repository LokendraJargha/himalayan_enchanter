"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css"
import { useRef } from "react";

const SliderComponent = ({children, show = 1, slide = 1, responsive,arrows = true}) => {
    const settings = {
        slidesToShow:show,
        slidesToScroll:slide,
        arrows: arrows,
        dots: true,
        autoplay: true,
        infinite: true,
        responsive: responsive,
    }
  return(
    <Slider {...settings}>
      {children}
    </Slider>
  );
}

export default SliderComponent;