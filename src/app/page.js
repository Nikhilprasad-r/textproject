import Image from "next/image";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Container />
    </>
  );
}
