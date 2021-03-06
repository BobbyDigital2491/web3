import React from "react";
import { NftCardWithButton } from "./NftCard";

const data = [
  {
    image: "black.png",
  },
  {
    image: "cyborg.png",
  },
  {
    image: "yellow.png",
  },
  {
    image: "ruby.png",
  },
  {
    image: "mingo.png",
  },
  {
    image: "mingg.png",
  },
  {
    image: "mingz.png",
  },
  {
    image: "purp.png",
  },
  {
    image: "ruby.png",
  },
  {
    image: "last.png",
  },
  {
    image: "graff.png",
  },
  {
    image: "triple.png",
  },

];

export default function Discover() {
  return (
    <div className="flex flex-col my-10  px-10 ">
      <div className="flex py-10 ">
        <h1 className="text-5xl sm:text-[80px]">Our Collection</h1>
      </div>
      <div className="flex flex-wrap justify-between  items-center ">
        {/* <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  w-full justify-center items-center  grid-rows-4 gap-10"> */}

        {data.map((n, index) => {
          return  <NftCardWithButton image={n.image} key={index} />;
        })}
      </div>
    </div>
  );
}
