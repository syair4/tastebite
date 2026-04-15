"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items: cart, cartTotal, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartTotal;
  // FIX: tax rate is 5% — fixed label to match calculation
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-2 font-serif text-3xl font-semibold text-amber-400">
          TasteBite
        </h1>
        <p className="mb-8 text-zinc-400">Your cart</p>

        {cart.length === 0 ? (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 py-16 text-center text-zinc-500">
            Your cart is empty. Add something delicious from the menu.
          </div>
        ) : (
          <div className="space-y-4">
            <ul className="divide-y divide-zinc-800 rounded-2xl border border-zinc-800 bg-zinc-900/40">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-wrap items-center gap-4 p-4 sm:flex-nowrap"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-zinc-800">
                    {/* FIX: added descriptive alt text */}
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-zinc-100">{item.name}</p>
                    <p className="text-sm text-zinc-400">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-600 bg-zinc-800 text-lg text-zinc-200 hover:bg-zinc-700"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      −
                    </button>
                    <span className="w-8 text-center tabular-nums">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-600 bg-zinc-800 text-lg text-zinc-200 hover:bg-zinc-700"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-amber-400"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <div className="flex justify-between text-zinc-300">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {/* FIX: label now correctly says Tax (5%) to match the 0.05 calculation */}
              <div className="flex justify-between text-zinc-300">
                <span>Tax (5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              {/* FIX: changed € to $ for consistent currency */}
              <div className="flex justify-between border-t border-zinc-800 pt-3 text-lg font-semibold text-amber-400">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="mt-4 block w-full rounded-xl bg-amber-500 py-3 text-center font-semibold text-zinc-950 transition hover:bg-amber-400"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
