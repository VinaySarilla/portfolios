import React from "react";
import swiggy from "../../public/logos/swiggy.svg";
import zomato from "../../public/logos/zomato.svg";
import airbnb from "../../public/logos/airbnb.svg";
import oyo from "../../public/logos/oyo.svg";
import flipkart from "../../public/logos/flipkart.svg";
import amazon from "../../public/logos/amazon.svg";
import myntra from "../../public/logos/myntra.svg";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const Portfolio = () => {
  let data = [
    {
      img: "https://framerusercontent.com/images/Ma5gVlDWbzA2VKokq4UpDxSSm6k.jpg?scale-down-to=1024",
      title: "Food",
      description:
        "Restaurants, Bars, & Pubs Shoot for popular food delivery apps",
      logos: [swiggy, zomato],
    },
    {
      img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      title: "Interior",
      description:
        "Villas, Staycations and  Hotels, for popular hospitality apps",
      logos: [airbnb, oyo],
    },
    {
      img: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      title: "Ecommerce",
      description: "Product Shoot for Ecommerce Apps",
      logos: [amazon, myntra, flipkart],
    },
  ];
  return (
    <motion.div
      className="p-4 my-4 lg:my-16 lg:px-20"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          staggerChildren: 0.2,
          staggerDirection: 1,
        },
      }}
    >
      <h1 className="text-2xl font-bold text-zinc-800">Portfolio</h1>
      <div className="flex flex-col items-center gap-8 mt-4 lg:grid lg:grid-cols-3">
        {data.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;

const Card = ({ img, title, description, logos }) => {
  const router = useRouter();
  return (
    <div
      className="lg:w-[300px] rounded-lg cursor-pointer"
      onClick={() => router.push("/photos")}
    >
      <img
        src={img}
        className="object-cover transition-all aspect-square rounded-xl hover:scale-105"
      />
      <div className="mt-4">
        <p className="text-xl font-bold text-zinc-800">{title}</p>
        <p className="mt-1 text-xs text-zinc-600">{description}</p>
      </div>
      <div className="flex items-center gap-4 mt-2">
        {logos.map((logo) => (
          <img src={logo.src} className="object-contain w-16 h-10" />
        ))}
      </div>
    </div>
  );
};
