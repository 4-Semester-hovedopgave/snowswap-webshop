"use client";

import { useCartStore } from "@/store/useCartStore";

export default function ProductInfo({ product }) {
    const addToCart = useCartStore((state) => state.addToCart);
    const cart = useCartStore((state) => state.cart);

    const isInCart = cart.some((item) => item.id === product.id);

    return (
        <div className="max-w-xl mx-auto">
            {product.image_url && (
                <img
                    src={product.image_url}
                    alt={product.title}
                    className="w-full h-80 object-cover rounded"
                />
            )}

            <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
            <p className="text-slate-600 mt-2">{product.description}</p>
            <p className="text-xl font-bold mt-4">{product.price} kr.</p>

            <button
                onClick={() => addToCart(product)}
                disabled={isInCart}
                className={`mt-6 px-6 py-3 rounded text-white ${isInCart
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black hover:bg-gray-800"
                    }`}
            >
                {isInCart ? "Already in cart" : "Add to cart"}
            </button>
        </div>
    );
}
