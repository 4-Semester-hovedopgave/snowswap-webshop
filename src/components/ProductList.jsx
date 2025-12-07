"use client";

import Link from "next/link";

import { useCartStore } from "@/store/useCartStore";

export default function ProductList({ products }) {
    const addToCart = useCartStore((state) => state.addToCart);
    const cart = useCartStore((state) => state.cart);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {products.map((product) => {
                // Denne linje finder produkterne
                const isInCart = cart.some((item) => item.id === product.id);

                return (
                    <div
                        key={product.id}
                        className="border p-4  shadow-sm"
                    >
                        <Link href={`/products/${product.id}`}>
                            <img
                                src={product.image_url}
                                alt={product.title}
                                className="w-full h-48 object-cover "
                            />
                            <h2 className="text-lg font-semibold mt-4 hover:underline">{product.title}</h2>

                            <p className="text-slate-600">{product.description}</p>
                            <p className="font-bold mt-2">{product.price} kr.</p>
                        </Link>
                        <button
                            onClick={() => addToCart(product)}
                            disabled={isInCart}
                            className={`mt-4 px-4 py-2 rounded text-white ${isInCart
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-black hover:bg-gray-800"
                                }`}
                        >
                            {isInCart ? "Already in cart" : "Add to cart"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
