import Container from "@/components/Container";
import { kaushan } from "../layout";
import { IoIosArrowRoundForward as RightArrow } from "react-icons/io";
export default function KnowAboutUs() {
  return (
    <div className="flex justify-end relative py-4 ">
      <div className="absolute inset-0 bg-[url(/svgs/route.svg)] bg-no-repeat bg-right bg-contain opacity-10"></div>
      <Container
        className={
          "relative h-full w-full bg-transparent flex lg:justify-between gap-6 py-12 opacity-100"
        }
      >
        <div className="w-1/2 h-96 border-2 border-black hidden lg:block"></div>
        <div className="space-y-8 lg:w-1/2">
          <h2 className={`${kaushan.className} text-3xl`}>
            <span className="relative">
              <span className="relative">Know about us</span>
              <span className="absolute left-3 -bottom-1 w-2/3 h-2 bg-customOrange"></span>
            </span>
          </h2>
          <p className="text-customGray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            neque massa, bibendum vel efficitur dapibus, imperdiet id orci.
            Suspendisse pulvinar mi vitae diam rutrum malesuada. Donec ultricies
            tellus purus, ac rhoncus erat pharetra nec. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Aenean neque massa, bibendum vel
            efficitur dapibus, imperdiet id orci. Suspendisse pulvinar mi vitae
            diam rutrum malesuada.
          </p>
          <p className="flex items-center">
            <span>Explore More</span>
            <RightArrow size={30} />
          </p>
          <div className="grid grid-rows-4 md:grid-rows-2 md:grid-cols-2 gap-2">
            <div className="flex items-center gap-1">
              <div>
                <img src="/svgs/commitmet.svg" />
              </div>
              <p>Commitment To Quality</p>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <img src="/svgs/user_review.svg" />
              </div>
              <p>Authentic User Review</p>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <img src="/svgs/sustainable.svg" />
              </div>
              <p>Sustainable & Ethical Travel</p>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <img src="/svgs/sustainable.svg" />
              </div>
              <p>Sustainable & Ethical Travel</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
