import React, { useEffect, useState } from "react";
import one from "../../public/photos/interior/1.jpg";
import three from "../../public/photos/interior/3.jpg";
import four from "../../public/photos/interior/4.jpg";
import five from "../../public/photos/interior/5.jpg";
import seven from "../../public/photos/interior/7.jpg";
import eight from "../../public/photos/interior/8.jpg";
import { motion } from "framer-motion";

import Image from "next/image";
const photos = () => {
  const [selected, setSelected] = useState(null);

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

  return (
    <motion.div
      class="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
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
      </motion.div>
      {/* create modal on click */}
      {selected !== null ? (
        <motion.div
          className="fixed top-0 left-0 flex items-center justify-center w-full h-full px-4 bg-black bg-opacity-80"
          onClick={() => setSelected(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
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
              className="h-2/3 w-[90%] rounded-2xl object-cover"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </motion.div>
  );
};

export default photos;
