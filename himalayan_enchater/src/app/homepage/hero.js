import Image from "next/image";
import { kaushan } from "../layout";
import Container from "@/components/Container";
import Button from "@/components/Button";
export default function HeroContent() {
  return (
    <div className="relative">
      <div className="w-full">
        <img className="w-full" src="/imgs/hero.png" alt="hero image" />
      </div>
      <Container
        className={
          " absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6 w-full md:w-4/5 lg:w-2/3 xl:w-1/2"
        }
      >
        <h1
          className={`${kaushan.className} text-3xl md:text-5xl lg:text-6xl flex flex-col items-center text-white`}
        >
          <span>Explore Adventure</span>
          <span>with us !</span>
        </h1>
        <p className={"text-white text-center text-sm md:text-base"}>
          Lorem ipsum dolor sit amet consectetur. Pellentesque nibh quis nunc
          at. Rhoncus suscipit in enim suscipit pellentesque ultrices mattis
          scelerisque. Cursus posuere fringilla. suscipit pellentesque.
        </p>
        <Button className={"text-white bg-customOrange rounded-3xl px-6 py-2"}>View Details</Button>
      </Container>
    </div>
  );
}
