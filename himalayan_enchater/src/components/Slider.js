"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./slider.css";

const RightArrow = ({onClick}) =>{
  return(
    <div onClick={onClick} className="w-8 h-8 cursor-pointer hidden  absolute -right-3 top-0 bottom-0 my-auto rounded-full md:flex items-center justify-center bg-white">
      <IoIosArrowForward size={20} />
    </div>
  )
}
const LeftArrow = ({onClick}) =>{
  return(
    <div onClick={ onClick  } className="w-8 cursor-pointer h-8 absolute -left-3 top-0 bottom-0 my-auto z-10 rounded-full hidden md:flex items-center justify-center bg-white" >
      <IoIosArrowBack size={20} />
    </div>
  )
}

const SliderComponent = ({
  children,
  show = 1,
  slide = 1,
  responsive,
  arrows = true,
  dots = true,
}) => {
  const settings = {
    slidesToShow: show,
    slidesToScroll: slide,
    arrows: arrows,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    dots: true,
    autoplay: true,
    infinite: true,
    responsive: responsive,
    className: "gap-4"
  };
  return <Slider className="w-full" {...settings}>{children}</Slider>;
};
export default SliderComponent;
