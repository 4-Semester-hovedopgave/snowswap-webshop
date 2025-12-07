"use client";

import { useCartStore } from "@/store/useCartStore";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  // Da der kun er 1 af hver, lægger vi bare prisen sammen og tilføjer ikke en "stepper" som tæller op.
  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">Your Cart</h1>

      {cart.length === 0 && <p className="mt-4 text-slate-600">Your cart is empty.</p>}

      <div className="mt-6 space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="border p-4 rounded flex items-center gap-4">
            {item.image_url && <img src={item.image_url} alt={item.title} className="w-20 h-20 object-cover rounded" />}

            <div className="flex-1">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-slate-600">{item.price} kr</p>
            </div>

            <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline">
              Remove
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <>
          <p className="font-bold mt-6">Total: {total} kr</p>

          <button onClick={clearCart} className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-black">
            Clear Cart
          </button>
        </>
      )}
    </main>
  );
}
