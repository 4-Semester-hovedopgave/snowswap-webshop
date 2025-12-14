import Hero from "@/components/Hero";
import TradeSection from "@/components/TradeSection";
import YouTubeVideo from "@/components/YouTubeVideo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="bg-stone-50">
        <Hero />
        <TradeSection />
        <YouTubeVideo embedUrl="https://www.youtube.com/embed/ieUvrIZVIfU" />
      </main>
    </div>
  );
}
