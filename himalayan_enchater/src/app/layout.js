import { Inter } from "next/font/google";
import {Kaushan_Script } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
export const kaushan= Kaushan_Script({subsets:["latin"], weight: '400'})
export const metadata = {
  title: "Himalayan Enchater",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
