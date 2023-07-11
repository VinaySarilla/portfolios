import React, { useEffect } from "react";
import { motion, animate, stagger } from "framer-motion";

const HeroSection = (props) => {
  return (
    <motion.div className="lg:h-[500px] grid grid-cols-1 lg:grid-cols-2 lg:place-content-center mt-4 mb-8 gap-4 lg:px-10">
      <div className="mx-4 flex flex-col justify-center items-start order-2 lg:order-1">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut", delayChildren: 0.5 },
          }}
        >
          <h1 className="text-4xl font-semibold">Unlock Creativity</h1>
          <h1 className="text-4xl font-semibold">ShutterFame</h1>

          <motion.div className="flex w-full justify-start gap-4 mt-4">
            <button className="bg-zinc-800 p-3 px-4 rounded-lg text-white text-sm shadow-xl font-medium">
              Gallery
            </button>

            <button className="bg-zinc-200 text-zinc-800 p-3 px-4 rounded-lg text-sm">
              Contact
            </button>
          </motion.div>
        </motion.div>
      </div>
      <div className="bg-zinc-200 lg:h-[500px] rounded-lg overflow-hidden m-4 lg:order-2">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
          className="object-contain w-full"
        />
      </div>
    </motion.div>
  );
};

export default HeroSection;
