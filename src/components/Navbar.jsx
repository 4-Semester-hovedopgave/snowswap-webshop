"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const cart = useCartStore((state) => state.cart);

    return (
        <>
            {/* TOPBAR */}
            <nav className="flex items-center justify-between p-6 border-b">

                {/* LOGO - VENSTRE */}
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={80} height={80} />
                </Link>

                {/* LINKS - HØJRE (SKJULT PÅ MOBIL) */}
                <div className="hidden md:flex gap-6 text-sm font-medium">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/products" className="hover:underline">Products</Link>
                    <Link href="/trade-in" className="hover:underline">Trade-In</Link>

                    <Link href="/cart" className="relative hover:underline">
                        Cart
                        {cart.length > 0 && (
                            <span className="
                                absolute -top-2 -right-3 
                                bg-red-500 text-white text-xs 
                                w-5 h-5 flex items-center justify-center 
                                rounded-full
                            ">
                                {cart.length}
                            </span>
                        )}
                    </Link>
                </div>

                {/* BURGER IKON - KUN PÅ MOBIL */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </nav>

            {/* MOBIL MENU - VISES KUN NÅR DEN ER ÅBEN */}
            {open && (
                <div className="flex flex-col gap-4 p-4 border-b md:hidden bg-white">

                    <Link href="/" className="hover:underline" onClick={() => setOpen(false)}>
                        Home
                    </Link>

                    <Link href="/products" className="hover:underline" onClick={() => setOpen(false)}>
                        Products
                    </Link>

                    <Link href="/trade-in" className="hover:underline" onClick={() => setOpen(false)}>
                        Trade-In
                    </Link>

                    <Link href="/cart" className="relative hover:underline" onClick={() => setOpen(false)}>
                        Cart
                        {cart.length > 0 && (
                            <span className="
                                absolute -top-2 left-20 
                                bg-red-500 text-white text-xs 
                                w-5 h-5 flex items-center justify-center 
                                rounded-full
                            ">
                                {cart.length}
                            </span>
                        )}
                    </Link>

                </div>
            )}
        </>
    );
}
