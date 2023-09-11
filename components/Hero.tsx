import Image from "next/image";
import React from "react";

import hero from "../public/assets/hero.png";

const Hero = () => {
  return (
    <section className="justify-between flex gap-10">
      <div className="flex flex-col text-[#3C0E0E] p-10">
        <h1 className="text-2xl ">Sabor inesquecível</h1>
        <span className="font-bold text-9xl">
          Meow <br /> Café
        </span>
        <span className="font-thin text-xl">
          Um lugar perfeito para pais de pets e <br /> amantes de café. Nossa
          cafeteria tem um <br /> espaço confortável para você e seu melhor
          amigo.{" "}
        </span>
      </div>
      <div className="border-[#3C0E0E] border-l-2" />
      <div className="">
        <Image src={hero} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
