import Image from "next/image";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-sky-100 text-black mt-10">
            <div className="px-6 md:px-20 lg:px-32 xl:px-64 py-10">

                {/* GRID WRAPPER */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Kollone 1 — Logo + SoMe */}
                    <div>
                        <Image
                            src="/logo.png"
                            alt="SnowSwap logo"
                            width={90}
                            height={90}
                            className="mb-4"
                        />

                        <div className="flex gap-4 mt-2">
                            <Link href="https://instagram.com">
                                <FaInstagram />
                            </Link>

                            <Link href="https://tiktok.com">
                                <FaTiktok />

                            </Link>

                            <Link href="https://facebook.com">
                                <FaFacebook />
                            </Link>
                        </div>
                    </div>

                    {/* Kollone 2 — links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>

                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:underline">Home</Link></li>
                            <li><Link href="/products" className="hover:underline">Products</Link></li>
                            <li><Link href="/trade-in" className="hover:underline">Trade-In</Link></li>
                            <li><Link href="/about" className="hover:underline">About SnowSwap</Link></li>
                            <li><Link href="/cart" className="hover:underline">Cart</Link></li>
                        </ul>
                    </div>

                    {/* Kollone 3 — Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Information</h3>

                        <ul className="space-y-2 text-sm">
                            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                            <li><Link href="/support" className="hover:underline">Support</Link></li>
                            <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
                            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-neutral-700 mt-10 pt-4 text-xs text-neutral-400 text-center">
                    © {new Date().getFullYear()} SnowSwap — All rights reserved.
                </div>
            </div>
        </footer>
    );
}
