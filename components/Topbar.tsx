import Image from "next/image";
import React from "react";
import logo from "../public/assets/logo.png";

const Topbar = () => {
  return (
    <div className="bg-[#F7F2E8] flex overflow-visible justify-between ">
      <div className="flex items-center">
        <Image src={logo} alt="logo" width={120} />
        <h1 className="font-normal text-[#3C0E0E] text-lg">MEOW CAFÉ</h1>
      </div>
      <div className="flex gap-10  items-center">
        <a className="font-semibold text-[#3C0E0E]   text-lg  hover:border-b-4 hover:border-b-[#3C0E0E]">
          Inicio
        </a>
        <a className="font-semibold text-[#3C0E0E] hover:border-b-4 hover:border-b-[#3C0E0E] text-lg">
          Produtos
        </a>
        <a className="font-semibold text-[#3C0E0E] hover:border-b-4 hover:border-b-[#3C0E0E] text-lg">
          Sobre
        </a>
      </div>
      <div className="flex gap-5  items-center">
        <button className="font-bold text-[#3C0E0E]">Login</button>
        <button className=" bg-[#3C0E0E] p-4 rounded-full text-white">
          Delivery
        </button>
      </div>
    </div>
  );
};

export default Topbar;
