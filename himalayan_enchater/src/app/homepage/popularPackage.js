import PackageCard from "@/components/PackageCard";
import { kaushan } from "../layout";
import SliderComponent from "@/components/Slider";
import Container from "@/components/Container";
const PopularPackage = () => {
  return (
    <Container className="bg-customPale-dark py-16">
      <div className="py-2">
        <div className="flex items-center justify-center gap-1 ">
          <div className="h-[2px] w-10 bg-customGray"></div>
          <p>LOOKING FOR ADVENTURE</p>
          <div className="h-[2px] w-10 bg-customGray"></div>
        </div>
        <div>
          <p className={`${kaushan.className} text-4xl text-center`}>
            Popular Package
          </p>
          <div>
            <SliderComponent
              slidesToScroll={1}
              slidesToShow={2}
              // responsive={[
              //   {
              //     breakpoint:480,
              //     settings: {
              //       slidesToShow: 1,
              //       slidesToScroll: 1
              //     }
              //   }
              // ]}
            >
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
            </SliderComponent>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PopularPackage;
