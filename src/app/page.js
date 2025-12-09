import BentoGrid from "@/components/BentoGrid";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="p-6">
        <Hero />
        <BentoGrid />
      </main>
    </div>
  );
}
