import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SliderComponent({
  children,
  slidesToShow,
  slidesToScroll,
  responsive,
}) {
    const settings = {
        slidesToShow,
        slidesToScroll,
        responsive,
        dots: true,
        autoplay: true
    }
  return <Slider className="w-full" {...settings}>{children}</Slider>;
}
