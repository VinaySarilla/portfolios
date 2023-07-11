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
    <div className="flex flex-col justify-center items-center gap-4 bg-zinc-100 py-10">
      <h1 className="text-2xl font-semibold">Platforms</h1>
      <div className="grid grid-cols-3 lg:flex gap-8">
        <img src={airbnb.src} className="w-20 h-14 object-contain" />
        <img src={swiggy.src} className="w-20 h-14 object-contain" />
        <img src={zomato.src} className="w-20 h-14 object-contain" />
        <img src={myntra.src} className="w-20 h-14 object-contain" />
        <img src={oyo.src} className="w-20 h-14 object-contain" />
        <img src={flipkart.src} className="w-20 h-14 object-contain" />
        <img src={amazon.src} className="w-20 h-14 object-contain" />
      </div>
    </div>
  );
};
