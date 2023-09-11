import About from "@/components/About";
import Coffe from "@/components/Coffe";
import Delivery from "@/components/Delivery";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OndeEstamos from "@/components/OndeEstamos";
import Service from "@/components/Service";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-[#F7F2E8] min-h-screen flex-col items-center justify-between">
      <Hero />
      <Coffe />
      <Service />
      <Delivery />
      <About />
      <OndeEstamos />
      <div className="border-b-2 border-[#F7F2E8] w-3/5 mt-5" />
      <Footer />
    </main>
  );
}
