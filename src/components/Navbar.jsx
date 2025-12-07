"use client";

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

export default function Navbar() {
    const cart = useCartStore((state) => state.cart);

    return (
        <nav className="flex gap-6 p-4 border-b">
            <Link href="/" className="hover:underline">
                Home
            </Link>

            <Link href="/products" className="hover:underline">
                Products
            </Link>

            <Link href="/cart" className="relative hover:underline">
                Cart
                {cart.length > 0 && (
                    <span
                        className="
              absolute -top-2 -right-3 
              bg-red-500 text-white text-xs 
              w-5 h-5 flex items-center justify-center 
              rounded-full"
                    >
                        {cart.length}
                    </span>
                )}
            </Link>
            <Link href="" className="hover:underline">
                Trade-In
            </Link>
        </nav>
    );
}
