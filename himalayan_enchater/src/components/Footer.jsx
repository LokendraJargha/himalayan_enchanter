import React from "react";
import Container from "./Container";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    "NEPAL TOURS & PLACES",
    "POPULAR PLACES",
    "ABOUT US",
    "CONTACT US",
    "BLOG",
    "REVIEW",
  ];
  return (
    <>
      <Container className={"bg-customGray text-white"}>
        <div className="flex flex-row justify-between pt-20 pb-10 border-b border-gray-700">
          <div className="logo flex flex-row gap-2 items-center justify-center">
            <img src="/logo.svg" alt="" className="w-14 h-14" />
            <div className="">
              <p className="tracking-wider">HIMALAYAN</p>
              <p>ENCHANTER</p>
            </div>
          </div>
          <div>
            <p className="tracking-tight">FOLLOW US ON:</p>
            <p className="flex gap-2 mt-2 justify-center">
              <FaFacebookF className="bg-white text-gray-700 rounded-full p-1 w-8 h-8" />
              <FaInstagram className="bg-white text-gray-700 rounded-full p-1 w-8 h-8" />
              <FaXTwitter className="bg-white text-gray-700 rounded-full p-1 w-8 h-8" />
            </p>
          </div>
        </div>
        <div className="grid grid-rows-2 grid-cols-2 sm:grid-rows-1 sm:grid-cols-4  my-4">
          <div className="">
            <h2 className="text-sm mb-3 md:text-xl font-semibold">
              QUICK LINKS
            </h2>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link, index) => (
                <li className="text-xs md:text-sm">{link}</li>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="text-sm mb-3 md:text-xl font-semibold">
              QUICK LINKS
            </h2>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link, index) => (
                <li className="text-xs md:text-sm">{link}</li>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="text-sm mb-3 md:text-xl font-semibold">
              QUICK LINKS
            </h2>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link, index) => (
                <li className="text-xs md:text-sm">{link}</li>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="text-sm mb-3 md:text-xl font-semibold">
              CONTACT US
            </h2>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="font-medium">Himalayan Enchanter Pvt. Ltd.</p>
                <p className="text-xs md:text-sm">Street Name Goes Here</p>
                <p className="text-xs md:text-sm">Thamel, Kathmandu, Nepal.</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs md:text-sm">
                  Phone: +977 1 0000000, +977 1 0000000
                </p>
                <p className="text-xs md:text-sm">Cell: +9779800000000</p>
                <p className="text-xs md:text-sm">Email: info@himalayan.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <p className="text-center">
            © 2024, Heaven Himalaya Treks. Ltd. All Rights Reserved. Re-produced
            or copy of any portion of this website is strictly Prohibited.
          </p>
        </div>
      </Container>
    </>
  );
}
