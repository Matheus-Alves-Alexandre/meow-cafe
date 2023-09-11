import React from "react";

const About = () => {
  return (
    <section className="justify-between flex text-[#3C0E0E] gap-24 mt-10">
      <div className="p-10">
        <span className="font-bold">Sobre nós</span>
        <h1 className="font-extrabold text-3xl">
          Nós oferecemos <br /> uma experiência <br /> inesquecível para
          <br /> amantes de café <br /> e pais de pet!
        </h1>
      </div>
      <div className="">
        <h2 className="font-bold">O melhor lugar para apreciar o seu café</h2>
        <span className="font-thin text-lg">
          No Meow Cafe, priorizamos a criação de
          <br /> um espaço onde tanto os seres humanos
          <br />
          quanto seus animais de estimação <br />
          possam relaxar e desfrutar.
          <br />
          <br />
          Nosso design interior é inspirado na
          <br /> harmonia e conforto, com sofás
          <br />
          aconchegantes, iluminação suave e uma
          <br /> decoração que remete à natureza e à <br />
          alegria que os animais trazem para <br /> nossas vidas.
        </span>
      </div>
    </section>
  );
};

export default About;
