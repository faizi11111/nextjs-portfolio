import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 container mx-auto p-4">
      <HeroSection />
    </main>
  );
}
