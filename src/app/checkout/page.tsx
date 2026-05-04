"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { items: cart, cartTotal, clearCart } = useCart();
  const { user } = useAuth();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("pay-at-restaurant");
  const [orderStatus, setOrderStatus] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");

  const discountAmount = 0;

  // Valid promo codes (can be extended)
  const VALID_PROMO_CODES = ["TASTE10", "WELCOME20"];

  function handleApplyPromo() {
    setPromoError("");
    if (!promoCode.trim()) return;
    // FIX: validate promo code and show "Invalid code" for unknown codes
    if (VALID_PROMO_CODES.includes(promoCode.trim().toUpperCase())) {
      setPromoApplied(true);
    } else {
      setPromoApplied(false);
      setPromoError("Invalid code. Please check and try again.");
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOrderStatus("");
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        email,
        address,
        city,
        zip,
        paymentMethod,
        promoCode: promoApplied ? promoCode.trim().toUpperCase() : "",
        items: cart,
        total: cartTotal - discountAmount,
      }),
    });
    if (!response.ok) {
      setOrderStatus("We could not place your order. Please try again.");
      return;
    }
    const result = await response.json();
    setOrderStatus(`Order placed! Confirmation ${result.confirmationId}.`);
    clearCart();
    setFullName("");
    setEmail("");
    setAddress("");
    setCity("");
    setZip("");
    setPaymentMethod("pay-at-restaurant");
    setPromoCode("");
    setPromoApplied(false);
    setPromoError("");
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="mb-2 font-serif text-3xl font-semibold text-amber-400">
          TasteBite
        </h1>
        <p className="mb-10 text-zinc-400">Checkout</p>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <section className="order-2 space-y-6 lg:order-1">
            <h2 className="text-lg font-medium text-zinc-200">Payment &amp; delivery</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                aria-label="Full Name"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                aria-label="Address"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  aria-label="City"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  required
                  aria-label="Zip Code"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
              <label className="block">
                <span className="mb-2 block text-sm text-zinc-400">Payment method</span>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  aria-label="Payment method"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-zinc-100 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  <option value="pay-at-restaurant">Pay at restaurant</option>
                  <option value="pay-on-delivery">Pay on delivery</option>
                </select>
              </label>
              <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
                TasteBite does not collect card numbers or security codes in this demo checkout. Online payments should be handled by a PCI-compliant provider tokenization flow.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <input
                  type="text"
                  placeholder="Promo code"
                  value={promoCode}
                  onChange={(e) => { setPromoCode(e.target.value); setPromoError(""); }}
                  aria-label="Promo code"
                  className="min-w-[200px] flex-1 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <button
                  type="button"
                  onClick={handleApplyPromo}
                  className="rounded-lg border border-amber-600 bg-amber-500/10 px-5 py-3 font-medium text-amber-400 hover:bg-amber-500/20"
                >
                  Apply
                </button>
              </div>
              {promoApplied && (
                <p className="text-sm text-green-400">
                  Promo code applied successfully!
                </p>
              )}
              {/* FIX: show "Invalid code" message for unknown promo codes */}
              {promoError && (
                <p className="text-sm text-red-400" role="alert">{promoError}</p>
              )}

              <button
                type="submit"
                className="mt-4 w-full rounded-xl bg-amber-500 py-3 font-semibold text-zinc-950 transition hover:bg-amber-400"
              >
                Place Order
              </button>
              {orderStatus && (
                <p className="text-sm text-green-400" role="status">{orderStatus}</p>
              )}
            </form>
          </section>

          <aside className="order-1 space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 lg:order-2">
            <h2 className="text-lg font-medium text-zinc-200">Order summary</h2>
            {user && (
              <p className="text-sm text-zinc-500">
                Signed in as {user.email ?? "guest"}
              </p>
            )}
            {cart.length === 0 ? (
              <p className="text-zinc-500">No items in your order.</p>
            ) : (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li key={item.id} className="flex gap-3">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-zinc-800">
                      {/* FIX: added descriptive alt text */}
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-zinc-500">
                        Qty {item.quantity} × ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="border-t border-zinc-800 pt-4">
              <div className="flex justify-between text-amber-400">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
