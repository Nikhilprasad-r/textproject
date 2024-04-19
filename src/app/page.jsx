import Image from "next/image";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <div className="max-w-[100vw] bg-[#fff6ed] overflow-hidden">
      <Image
        src="/svgexport-1.svg"
        class="absolute overflow-hidden z-[1] top-[-12rem] md:top-[-6rem] md:right-[-18rem]
        lg:opacity-100 lg:transition-opacity right-[-10rem] "
        width={822}
        height={822}
      />

      <Image
        src="/svgexport-2.svg"
        class="absolute z-[1] w-[500px] h-[500px] md:w-auto md:h-auto top-[15rem] md:top-[-1rem] left-[-5rem] md:left-[-16rem]  lg:opacity-100"
        width={1066}
        height={1066}
      />
      <Navbar />
      <Hero />
      <Container />
    </div>
  );
}
