import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { AboutSection } from "./components/AboutSection";
import { ProjectSection } from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 container mx-auto p-4">
      <Navbar />
      <div className="container mx-auto px-12 py-16">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </main>
  );
}
