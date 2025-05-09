import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { AboutSection } from "./components/AboutSection";
import { ProjectSection } from "./components/ProjectSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col container mx-auto p-4">
        <Navbar />
        <div className="container mx-auto px-2 md:px-12 py-16 mt-16">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
        </div>

      </main>
      <Footer />
    </>
  );
}
