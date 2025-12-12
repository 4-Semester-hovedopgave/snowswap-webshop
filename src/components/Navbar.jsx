"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="grid grid-cols-3 items-center h-20 px-4 lg:px-0 lg:max-w-screen-lg lg:mx-auto">

                {/* LOGO – venstre */}
                <Link href="/" className="justify-self-start">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={80}
                        height={80}
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* MENU – i kolonne 3 */}
                <div className="hidden md:flex gap-6 items-center justify-self-end col-start-3 text-sm">
                    <Link className="tracking-widest font-medium" href="https://www.anarikkelarsen.dk" target="_blank">TRADE-IN & SHOP NOW</Link>
                </div>

                {/* BURGER – mobil, stadig i højre side */}
                <button
                    className="md:hidden text-3xl justify-self-end col-start-3"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

            </nav>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden flex flex-col gap-4 p-4 bg-white">
                    <Link href="https://www.anarikkelarsen.dk/collections" target="_blank" onClick={() => setOpen(false)}>Shop</Link>
                    <Link href="https://www.anarikkelarsen.dk/pages/trade-in" target="_blank" onClick={() => setOpen(false)}>Trade-In</Link>
                </div>
            )}

        </>
    );
}
