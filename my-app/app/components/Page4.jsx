import React from "react";
import Link from "next/link";
import { exp } from "@/public/Assets/assets";

const Page4 = () => {
  return (
    <div
      id="experience"
      className="relative w-full h-580 bg-white text-black flex flex-col items-center justify-center overflow-hidden rounded-4xl"
    >
      <h1
        className="
          mt-5 mb-10 
          text-center font-extrabold 
          text-[clamp(5rem,10vw,10rem)] 
          tracking-tight
        "
      >
        EXPERIENCE
      </h1>

      {exp.map((item, index) => (
        <Link
          href={`/experiences/${item.id}`}
          key={index}
          className="relative 2xl:left-20 left-5 justify-center"
        >
          <div className="card group hover:scale-105 hover:bg-white/90 transition-all duration-300 cursor-pointer flex">
            <div className="shrink-0">
              <h1 className="text-[40px] sm:text-[110px] font-bold text-black/80 leading-none group-hover:text-black transition-colors duration-300 m-3">
                {item.num}
              </h1>
            </div>

            <div className="sm:ml-8 top-0 sm:mt-0">
              <h1 className="text-[40px] sm:text-[55px] font-semibold text-black/80 group-hover:text-black">
                {item.judul}
              </h1>
              <p className="sm:pl-0 text-sm sm:text-base text-black/80 leading-snug">
                {item.deskripsi}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page4;
