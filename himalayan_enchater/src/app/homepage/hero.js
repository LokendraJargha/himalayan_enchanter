import Image from "next/image";
import { kaushan } from "../layout";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SliderComponent from "@/components/Slider";

export default function HeroContent() {
  return (
    <div className="relative">
      <SliderComponent show={1} slide={1} arrows={false}> 
        <div>
          <img src="/imgs/hero.png" alt="mountain" />
        </div>
          <img className="w-full" src="/imgs/hero.png" alt="mountain" />
        <div>
          <img src="/imgs/hero.png" alt="mountain" />
        </div>
        <div>
          <img src="/imgs/hero.png" alt="mountain" />
        </div>
       </SliderComponent>
      <div className="absolute top-0 left-0 bg-transparent w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center px-4 py-2 gap-4">
          <h2 className={`${kaushan.className} text-3xl md:text-4xl lg:text-6xl text-white flex flex-col items-center gap-2 `}>
            <span>Explore Adventure</span>
            <span>with us !</span>
          </h2>
          <p className="text-center text-xs md:text-base md:w-4/5 lg:w-1/2 text-white">
            Lorem ipsum dolor sit amet consectetur. Pellentesque nibh quis nunc
            at. Rhoncus suscipit in enim suscipit pellentesque ultrices mattis
            scelerisque. Cursus posuere fringilla. suscipit pellentesque.
          </p>
          <Button className={"text-white text-sm md:text-base py-1 px-2 md:px-4 md:py-2 rounded-3xl bg-customOrange w-fit"}>View Details</Button>
        </div>
      </div>
    </div>
  );
}
