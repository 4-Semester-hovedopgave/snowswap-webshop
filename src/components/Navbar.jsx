"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [openCategories, setOpenCategories] = useState(false);
    const cart = useCartStore((state) => state.cart);

    return (
        <>
            {/* TOPBAR */}
            <nav className="flex items-center justify-between h-20 px-6">

                {/* LOGO */}
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={80}
                        height={80}
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex gap-6 items-center text-sm">

                    <Link href="/">Home</Link>
                    <Link href="https://www.anarikkelarsen.dk/collections">Shop</Link>



                    <Link href="https://www.anarikkelarsen.dk/pages/trade-in">Trade-In</Link>

                </div>

                {/* BURGER - MOBILE ONLY */}
                <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                    ☰
                </button>
            </nav>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden flex flex-col gap-4 p-4 bg-white">

                    <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
                    <Link href="/trade-in" onClick={() => setOpen(false)}>Trade-In</Link>

                    {/* SIMPLE CATEGORY LIST */}
                    <Link href="/category/jackets" onClick={() => setOpen(false)}>Jackets</Link>
                    <Link href="/category/pants" onClick={() => setOpen(false)}>Pants</Link>
                    <Link href="/category/goggles" onClick={() => setOpen(false)}>Goggles</Link>
                    <Link href="/category/accessories" onClick={() => setOpen(false)}>Accessories</Link>

                    {/* CART */}
                    <Link href="/cart" onClick={() => setOpen(false)} className="relative">
                        Cart
                        {cart.length > 0 && (
                            <span className="absolute -top-2 left-20 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {cart.length}
                            </span>
                        )}
                    </Link>
                </div>
            )}
        </>
    );
}
