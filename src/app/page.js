import Image from "next/image";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Spacer from "./components/Spacer";
export default function Home() {
  return (
    <>
      <Spacer />
      <Navbar />
      <Hero />
      <Container />
    </>
  );
}
