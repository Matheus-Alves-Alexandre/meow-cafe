import Image from "next/image";
import React from "react";

import capuccino from "../public/assets/capuccino.png";
import cafe from "../public/assets/cafe-ao-leite.png";
import cafePreto from "../public/assets/cafe-preto.png";

const Coffe = () => {
  return (
    <section className="flex flex-col justify-center items-center text-[#3C0E0E]">
      <div className="justify-center items-center text-center gap-5">
        <h1 className="font-bold text-3xl p-3 ">
          <span className="border-b-2 border-[#3C0E0E]">Café</span>
        </h1>

        <span>
          Conheça nossos cafés exclusivos pensados e preparados por <br />{" "}
          nossos baristas renomados.{" "}
        </span>
        <h2 className="font-bold">Veja Todos {">"}</h2>
      </div>
      <div className="flex gap-10 mt-5 ">
        <div className="flex flex-col gap-3 items-center justify-center bg-[#C27D7A] rounded-2xl text-white p-5">
          <Image src={capuccino} alt="" />
          <h2 className="font-bold">R$ 24,00</h2>
          <h1 className="font-bold text-xl">Capuccino</h1>
          <span className="font-thin">
            Café expresso , leite vaporizado,
            <br /> espuma e um toque de caramelo.
          </span>
          <button className="rounded-full w-full bg-white p-3 font-extrabold text-black  shadow-2xl">
            Delivery
          </button>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center bg-[#54151194] rounded-2xl text-white p-5">
          <Image src={cafe} alt="" />
          <h2 className="font-bold">R$ 16,00</h2>
          <h1 className="font-bold text-xl">Café ao Leite</h1>
          <span className="font-thin">
            O clássico, amado pelos brasileiros,
            <br /> com um toque de sofisticação!
          </span>
          <button className="rounded-full w-full bg-white p-3 font-extrabold text-black  shadow-2xl">
            Delivery
          </button>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center bg-[#541511f2] rounded-2xl text-white p-5">
          <Image src={cafePreto} alt="" />
          <h2 className="font-bold">R$ 12,00</h2>
          <h1 className="font-bold text-xl">Café Preto</h1>
          <span className="font-thin">
            Grãos selecionados feitos no seu <br /> método de preparo favorito.
          </span>
          <button className="rounded-full w-full bg-white p-3 font-extrabold text-black  shadow-2xl">
            Delivery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Coffe;
