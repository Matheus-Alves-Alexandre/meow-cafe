import React from "react";

const Footer = () => {
  return (
    <footer className="justify-between flex gap-20 text-[#3C0E0E]">
      <div className="flex flex-col p-5">
        <h1 className="font-bold">Informações</h1>
        <span>
          Todos os direitos reservados Meow Cafe Ltda.
          <br /> Um lugar perfeito para pais de pets e amantes de café!
        </span>
      </div>
      <div className="flex flex-col p-5 ">
        <h1 className="font-bold">Links Úteis</h1>
        <span>Início </span>
        <span>Sobre </span>
        <span>Produtos </span>
        <span>Delivery </span>
        <span>Login </span>
      </div>
      <div className="flex flex-col p-5">
        <h1 className="font-bold">Institucional</h1>
        <span>
          CNPJ: XX. XXX. XXX/0001-XX <br /> Endereço: Lorem ipsum, 64
          <br /> Política de Privacidade <br />
          Dúvidas Frequentes
          <br /> Ajuda
          <br /> Acessibilidade
        </span>
      </div>
    </footer>
  );
};

export default Footer;
