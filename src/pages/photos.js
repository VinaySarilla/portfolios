import React, { useEffect, useState } from "react";
import one from "../../public/photos/interior/1.jpg";
import three from "../../public/photos/interior/3.jpg";
import four from "../../public/photos/interior/4.jpg";
import five from "../../public/photos/interior/5.jpg";
import seven from "../../public/photos/interior/7.jpg";
import eight from "../../public/photos/interior/8.jpg";
import { motion } from "framer-motion";

import Image from "next/image";
import Navbar from "@/Components/Navbar";
const photos = () => {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        // staggerDirection: -1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  let artWork = [
    {
      title: "Nature",
      src: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    },
    {
      title: "Skull",
      src: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    },
    {
      title: "Water",
      src: "https://images.unsplash.com/photo-1531951829979-d658d7e5e8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    },
  ];

  return (
    <div>
      <Navbar />
      <motion.div
        class="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 lg:px-36"
        variants={container}
        initial="hidden"
        onClick={() => setLoading(true)}
        animate="show"
      >
        {artWork.map((art, index) => {
          return (
            <motion.div
              variants={item}
              className="first:col-span-2 lg:first:col-span-4 first:mx-auto"
            >
              <Image
                class="h-[300px] max-w-full rounded-2xl object-cover"
                width={1000}
                height={500}
                src={art.src}
                alt=""
                onClick={() => setSelected(art.src)}
              />
              {selected === art.src ? (
                <motion.div
                  className="h-1 bg-white w-[50%] mx-auto rounded-xl"
                  layoutId="underline"
                ></motion.div>
              ) : null}
            </motion.div>
          );
        })}
        {/* <motion.div
          variants={item}
          className="first:col-span-2 lg:first:col-span-4 first:mx-auto"
        >
          <Image
            class="h-[300px] max-w-full rounded-2xl object-cover"
            width={1000}
            height={500}
            src={one.src}
            alt=""
            onClick={() => setSelected(one.src)}
          />
          {selected === 0 ? (
            <motion.div
              className="h-1 bg-white w-[50%] mx-auto rounded-xl"
              layoutId="underline"
            ></motion.div>
          ) : null}
        </motion.div>
        <motion.div variants={item}>
          <Image
            height={500}
            width={300}
            class="h-[300px] max-w-full rounded-2xl object-cover"
            src={seven.src}
            alt=""
            onClick={() => setSelected(seven.src)}
          />
          {selected === 1 ? (
            <motion.div
              className="h-1 bg-white w-[50%] mx-auto rounded-xl"
              layoutId="underline"
            ></motion.div>
          ) : null}
        </motion.div>
        <motion.div variants={item}>
          <Image
            height={500}
            width={300}
            class="h-[300px] max-w-full rounded-2xl object-cover"
            src={three.src}
            alt=""
            onClick={() => setSelected(three.src)}
          />
          {selected === 2 ? (
            <motion.div
              className="h-1 bg-white w-[50%] mx-auto rounded-xl"
              layoutId="underline"
            ></motion.div>
          ) : null}
        </motion.div>

        <motion.div variants={item}>
          <Image
            height={500}
            width={300}
            class="h-[300px] max-w-full rounded-2xl object-cover"
            src={four.src}
            alt=""
            onClick={() => setSelected(four.src)}
          />
        </motion.div>

        <motion.div variants={item}>
          <Image
            height={500}
            width={300}
            class="h-[300px] max-w-full rounded-2xl object-cover"
            src={five.src}
            alt=""
            onClick={() => setSelected(five.src)}
          />
        </motion.div>

        <motion.div variants={item}>
          <Image
            height={500}
            width={300}
            class="h-[300px] max-w-full rounded-2xl object-cover"
            src={eight.src}
            alt=""
            onClick={() => setSelected(eight.src)}
          />
        </motion.div> */}
        {/* create modal on click */}
        {selected !== null ? (
          <motion.div
            className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full px-4 bg-black bg-opacity-80"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {loading && (
              <svg
                class="animate-spin mx-auto h-5 w-5 text-white my-auto mt-[20vh]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="flex items-center justify-center w-full h-full rounded-2xl"
            >
              <Image
                src={selected}
                width={500}
                height={800}
                className={`h-2/3 w-[90%] rounded-2xl object-cover`}
                onLoad={() => setLoading(false)}
              />
            </motion.div>
          </motion.div>
        ) : null}
      </motion.div>
    </div>
  );
};

export default photos;
