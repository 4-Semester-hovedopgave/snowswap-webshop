// src/components/TradeSection.jsx
"use client";

import Image from "next/image";

export default function TradeSection() {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                {/* GRID: billede venstre, tekst højre */}
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* VENSTRE: billede */}
                    <div className="relative w-full h-[380px]">
                        <Image
                            src="/jacket.png"   // byt til dit eget billede
                            alt="Skier on a slope"
                            fill
                            className="object-cover rounded-sm"
                        />
                    </div>

                    {/* HØJRE: tekst + knapper */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide text-slate-900">
                            TRADE IN & SHOP
                        </h2>

                        <p className="mt-6 text-lg md:text-xl uppercase tracking-wide leading-snug max-w-md">
                            GO TO OUR SHOP<br />
                            AND SEE ALL<br />
                            THE AMAZING ITEMS<br />
                            THAT WE HAVE
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="https://www.anarikkelarsen.dk/pages/trade-in" target="_blank"
                                className="px-6 py-3 rounded-full bg-slate-700 text-white text-sm font-semibold tracking-wide hover:bg-slate-600 transition"
                            >
                                TRADE-IN NOW
                            </a>
                            <a
                                href="https://www.anarikkelarsen.dk/collections" target="_blank"
                                className="px-6 py-3 rounded-full border border-slate-700 text-slate-700 text-sm font-semibold tracking-wide bg-white hover:bg-slate-50 transition"
                            >
                                SHOP NOW
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
