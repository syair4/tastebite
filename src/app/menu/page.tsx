"use client";

import { useMemo, useState } from "react";
import { categories, menuItems } from "@/data/menu";
import { useCart } from "@/context/CartContext";

export default function MenuPage() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Search state updates in the input, but results are not filtered by search (bug).
  // const searchLower = search.trim().toLowerCase();
  // const bySearch = menuItems.filter(
  //   (item) =>
  //     item.name.toLowerCase().includes(searchLower) ||
  //     item.description.toLowerCase().includes(searchLower)
  // );

  const filteredItems = useMemo(() => {
    // Category "All" uses strict equality to "All" on item.category — matches nothing (bug).
    return menuItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  function formatPrice(item: (typeof menuItems)[number]): string {
    // Intentional inconsistent formatting: burger shows 3 decimal places (e.g. 17.490).
    if (item.name.toLowerCase().includes("burger")) {
      return item.price.toFixed(3);
    }
    return item.price.toFixed(2);
  }

  return (
    <div className="min-h-screen bg-[#0f0f23] px-4 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-white">
          Our Menu
        </h1>

        <div className="mb-8">
          <label htmlFor="menu-search" className="sr-only">
            Search menu
          </label>
          <input
            id="menu-search"
            type="search"
            placeholder="Search dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-amber-500/30 bg-[#1a1a2e] px-4 py-3 text-white placeholder:text-white/40 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
          />
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-amber-500 text-[#0f0f23]"
                  : "bg-[#1a1a2e] text-amber-200/90 ring-1 ring-amber-500/30 hover:bg-amber-500/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <li
              key={item.id}
              className="flex flex-col overflow-hidden rounded-xl border border-amber-500/20 bg-[#1a1a2e] shadow-lg shadow-black/40"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-300">
                    {item.category}
                  </span>
                  {item.spicy ? (
                    <span className="text-lg" title="Spicy" aria-label="Spicy">
                      🌶️
                    </span>
                  ) : null}
                  {item.vegetarian ? (
                    <span
                      className="text-lg"
                      title="Vegetarian"
                      aria-label="Vegetarian"
                    >
                      🌿
                    </span>
                  ) : null}
                </div>
                <h2 className="mb-2 text-xl font-semibold text-white">
                  {item.name}
                </h2>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
                <div className="mt-auto flex items-center justify-between gap-3">
                  <span className="text-lg font-bold text-amber-400">
                    ${formatPrice(item)}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      item.id === 7 ? addToCart(undefined as any) : addToCart(item)
                    }
                    className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-[#0f0f23] transition hover:bg-amber-400"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
