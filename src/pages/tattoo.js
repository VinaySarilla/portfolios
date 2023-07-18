import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { useRouter } from "next/router";
import React from "react";

const tattoo = () => {
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
    <div className="font-poppins">
      <Navbar />
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1552627019-947c3789ffb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3431&q=80"
          className="object-cover w-full h-[40vh]"
        />
        <div className="px-8 my-8">
          <h1 className="w-2/3 text-2xl font-bold leading-9">
            Each one has a story behind them and we listen to it
          </h1>
          <p className="my-4 text-sm">
            Some are joyful, Some are grateful, and Some are painful. We make
            sure to listen and carve each of them beautifully.{" "}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-10 px-8">
          <div>
            <h1 className="text-3xl font-bold">40+</h1>
            <p className="font-semibold">Design Categoried</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold">1000+</h1>
            <p className="font-semibold">Happy Customers</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold">5000+</h1>
            <p className="font-semibold">Custom Designs</p>
          </div>
        </div>

        <div className="flex flex-col gap-8 px-8 py-4 my-10 bg-zinc-50">
          <h1 className="text-3xl font-bold">Art Work</h1>

          {artWork.map((item) => (
            <ArtWorkCard title={item.title} src={item.src} />
          ))}
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default tattoo;

const ArtWorkCard = ({ title, src }) => {
  const router = useRouter();

  let { id, name } = router.query;
  return (
    <div
      className="w-full border-zinc-100 border-[1px] rounded-b-lg overflow-hidden softShadow"
      onClick={() => router.push(`/photos?name=${name}`)}
    >
      <img src={src} className="object-cover w-full h-64 rounded-t-lg" />
      <div className="flex items-end justify-between p-4 bg-white">
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-sm">See More</p>
      </div>
    </div>
  );
};
