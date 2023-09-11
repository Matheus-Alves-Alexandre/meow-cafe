import React from "react";

import delivery from "../public/assets/delivery.png";
import Image from "next/image";
const Delivery = () => {
  return (
    <section>
      <div className="bg-[#f3c7c4f2] flex  mt-10 justify-between overflow-visible rounded-3xl ">
        <div className="-mt-16">
          <Image src={delivery} alt="delivery" className="p-5 -ml-5 " />
        </div>
        <div className="flex flex-col justify-around p-10">
          <div className="items-center">
            <h1 className="text-white font-black text-3xl">
              Levamos até você!
            </h1>
            <span className="text-white font-light">
              Estamos nos principais aplicativos de Delivery!
            </span>
            <br />
            <div className="p-10 -mt-8 ">
              <button className="rounded-full  w-full bg-white p-3 font-extrabold text-black  shadow-2xl">
                Delivery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
