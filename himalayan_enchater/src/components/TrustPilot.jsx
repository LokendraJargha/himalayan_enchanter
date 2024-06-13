import React from "react";
import OrangeStar from "../../public/svgs/orangestar";
import { VscCalendar } from "react-icons/vsc";

const TrustPilot = () => {
  return (
    <>
      <div className="w-72 border">
        <div className="text-center">
          <img src="/svgs/green_star.svg" className="inline-block" />
          <p className="inline-block pl-2 font-semibold text-3xl align-middle tracking-tight">
            Trustpilot
          </p>
          <div className="mt-2 flex flex-row justify-between">
            <p className="">
              {[...Array(4)].map((_, index) => (
                <img
                  key={index}
                  src="/svgs/green_star.svg"
                  className="inline-block w-5 mr-2"
                />
              ))}
            </p>
            <p className="font-medium">Rated 4.6/5</p>
          </div>
        </div>
        <div className="mt-2 bg-customPale px-4 py-4 relative">
          <div className="w-fit absolute top-0 right-0">
            <img src="/svgs/discount.svg" className="w-20" />
          </div>
          <div className="">
            <p className="font-semibold">Mardi Himal Trek</p>
            <p className="text-sm mb-3">Trip Code: XDW23</p>
            <p className="">
              {[...Array(4)].map((_, index) => (
                <span className="inline-block mr-2">
                  <OrangeStar key={index} />
                </span>
              ))}
              <span className="text-xs">(4/5)</span>
            </p>
          </div>
          <div className="w-40  m-auto my-3">
            <p className="text-[#373737] text-sm">Starts From</p>
            <p className="text-right font-bold text-3xl">$ 1800</p>
          </div>
          <hr className="border-[#F7941D] h-2 w-2/3 mx-auto" />
          <div className="mt-4">
            <p className="text-[#373737] text-sm mb-3">
              Nearest Date Available
            </p>
            <div className="grid grid-cols-[1fr,4fr,4fr]">
              <div className="flex pb-1">
                <VscCalendar className="size-6  mt-auto" />
              </div>
              <div className=" mr-2">
                <p className="text-xs italic">Start Date</p>
                <p className="tracking-tighter font-medium">June 12, 2024</p>
              </div>
              <div className="">
                <p className="text-xs italic">End Date</p>
                <p className="tracking-tighter font-medium">June 12, 2024</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center bg-orange-100 p-4 space-y-4 rounded-md">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-2 border rounded-md"
            />
            <div className="flex items-center w-full border rounded-md overflow-hidden">
              <input
                type="number"
                value="1"
                className="flex-grow p-2 border-r"
                readOnly
              />
              <button className="bg-orange-500 text-white p-2">+</button>
            </div>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-md w-full">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustPilot;
