import BentoGrid from "@/components/BentoGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="p-6">
        <h1 className="text-2xl font-bold">SnowSwap</h1>
        <p className="text-slate-600 mt-2">Forsiden</p>
        <BentoGrid />
      </main>
    </div>
  );
}
