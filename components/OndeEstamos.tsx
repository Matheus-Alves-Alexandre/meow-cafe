import Image from "next/image";
import React from "react";

import ondeEstamos from "../public/assets/ondeEstamos.png";
import pointer from "../public/assets/pointer.png";

const OndeEstamos = () => {
  return (
    <section className="mt-28 flex ">
      <div className="flex justify-between rounded-l-3xl overflow-visible  bg-[#F3C7C4] ">
        <div className="p-4">
          <h1 className="text-white font-black text-6xl">
            Meow <br /> <span className="border-b-2 border-white">E</span>njoy
            <br />{" "}
          </h1>
          <h2 className="font-light mt-10 text-white text-lg">
            Todos os sábados e domingos
          </h2>
          <span className="font-light mt-10 text-white text-base">
            Venha tomar o seu brunch com a gente!
          </span>
          <br />
          <button className="font-bold mt-10 text-[#3C0E0E]">
            Faça uma reserva {">"}
          </button>
        </div>

        <Image
          src={ondeEstamos}
          alt="onde estamos"
          className="-mt-20 -mr-24 overflow-visible"
        />
      </div>
      <div className="rounded-r-3xl gap-10 overflow-visible bg-[#8F423D]  text-white">
        <h1 className="font-black text-4xl p-5 ">Onde estamos</h1>
        <div className="p-6 -ml-6 -mt-6">
          <div className="border-b-2" />
        </div>
        <span className="p-2 font-thin">
          Você pode nos encontrar no endereço:
        </span>
        <div className="flex p-2">
          <Image src={pointer} alt="" />
          <span className="p-2 font-thin">Rua do Miado 234, Gatolândia</span>
        </div>
      </div>
    </section>
  );
};

export default OndeEstamos;
