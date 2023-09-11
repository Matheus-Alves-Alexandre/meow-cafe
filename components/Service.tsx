import Image from "next/image";
import React from "react";

import croissants from "../public/assets/croissants.png";

const Service = () => {
  return (
    <section className="justify-between flex p-10">
      <div className="items-center text-[#4D1D1D] gap-5 p-4">
        <div className="p-1">
          {" "}
          <span className="bg-[#fff] rounded-full p-2 font-bold text-base text-[#F9C4C4]">
            R$ 12,00
          </span>
        </div>
        <div className="gap-10">
          <h1 className="text-6xl font-black">
            <span className="border-b-4 border-[#4D1D1D]">C</span>roissants
          </h1>
          <h2 className="text-xl font-medium p-3 -ml-3 ">
            Conheça nossa receita
          </h2>
          <span className="p-3 -ml-3 text-base">
            A nossa receita de Croissant vai te <br />
            surpreender. Croissants clássicos ou recheados!
          </span>
          <br />
          <span className="font-bold ">Todos os croissants{">"}</span>
        </div>
      </div>

      <div className="p-5">
        <Image src={croissants} alt="hero" width={500} />
      </div>
    </section>
  );
};

export default Service;
