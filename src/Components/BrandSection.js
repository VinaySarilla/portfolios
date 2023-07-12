import React from "react";
import airbnb from "../../public/logos/airbnb.svg";
import swiggy from "../../public/logos/swiggy.svg";
import zomato from "../../public/logos/zomato.svg";
import myntra from "../../public/logos/myntra.svg";
import oyo from "../../public/logos/oyo.svg";
import flipkart from "../../public/logos/flipkart.svg";
import amazon from "../../public/logos/amazon.svg";

export const BrandSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10 bg-zinc-100">
      <h1 className="text-2xl font-semibold text-zinc-700">Platforms</h1>
      <div className="grid grid-cols-3 gap-8 lg:flex">
        <img src={airbnb.src} className="object-contain w-20 h-14" />
        <img src={swiggy.src} className="object-contain w-20 h-14" />
        <img src={zomato.src} className="object-contain w-20 h-14" />
        <img src={myntra.src} className="object-contain w-20 h-14" />
        <img src={oyo.src} className="object-contain w-20 h-14" />
        <img src={flipkart.src} className="object-contain w-20 h-14" />
        <img src={amazon.src} className="object-contain w-20 h-14" />
      </div>
    </div>
  );
};

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const logos = [
  { src: amazon.src, alt: "Amazon" },
  { src: flipkart.src, alt: "Flipkart" },
  { src: myntra.src, alt: "Myntra" },
  { src: oyo.src, alt: "Oyo" },
  { src: swiggy.src, alt: "Swiggy" },
  { src: zomato.src, alt: "Zomato" },
  { src: airbnb.src, alt: "Airbnb" },
  { src: amazon.src, alt: "Amazon" },
];

const InfiniteScroll = () => {
  return (
    <div className="w-[90vw] max-w-[90vw]">
      <motion.div className="flex gap-4 container-scroll">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="object-contain w-20 h-14"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;
