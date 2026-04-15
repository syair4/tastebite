"use client";

import Link from "next/link";
import { menuItems, testimonials } from "@/data/menu";

export default function Home() {
  const featuredDishes = menuItems.filter((item) => item.popular).slice(0, 4);

  return (
    <main className="min-h-screen bg-[#1a1a2e] text-gray-100">
      {/* Hero — z-20 overlaps mobile nav (z-10) */}
      <section
        className="relative z-20 flex min-h-[70vh] w-full flex-col items-center justify-center bg-cover bg-center px-6 py-24 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 15, 35, 0.75), rgba(26, 26, 46, 0.85)), url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80)",
        }}
      >
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
          TasteBite
        </h1>
        <p className="mb-10 max-w-xl text-lg text-gray-300 md:text-xl">
          Experience Culinary Excellence
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/menu"
            className="rounded-lg bg-amber-500 px-8 py-3 font-semibold text-[#1a1a2e] transition hover:bg-amber-400"
          >
            View Menu
          </Link>
          <Link
            href="/reservation"
            className="rounded-lg border-2 border-amber-500 px-8 py-3 font-semibold text-amber-500 transition hover:bg-amber-500/10"
          >
            Reserve a Table
          </Link>
        </div>
      </section>

      {/* Featured dishes — second h1 (SEO bug) */}
      <section className="relative z-10 px-6 py-16 md:px-10">
        <h1 className="mb-10 text-center text-3xl font-bold text-white md:text-4xl">
          Our Specialties
        </h1>
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDishes.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#16213e]/80 shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="mb-2 text-lg font-semibold text-white">{item.name}</h2>
                <p className="mb-4 text-xl font-bold text-amber-500">
                  €{item.price.toFixed(2)}
                </p>
                <button
                  type="button"
                  className="w-full rounded-lg bg-amber-500 py-2.5 font-semibold text-[#1a1a2e] transition hover:bg-amber-400"
                >
                  Order Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials — h4 skips h2/h3 (hierarchy bug) */}
      <section className="relative z-10 border-t border-white/10 bg-[#0f0f23]/50 px-6 py-16 md:px-10">
        <h4 className="mb-10 text-center text-3xl font-bold text-white md:text-4xl">
          What Our Guests Say
        </h4>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.id}
              className="rounded-xl border border-white/10 bg-[#1a1a2e] p-6 shadow-md"
            >
              <div className="mb-3 flex gap-1 text-amber-500" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>{i < t.rating ? "★" : "☆"}</span>
                ))}
              </div>
              <p className="mb-4 text-gray-300">&ldquo;{t.text}&rdquo;</p>
              <footer className="text-sm font-medium text-amber-500/90">
                — {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA — typo: /reservaton */}
      <section className="relative z-10 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl rounded-2xl border border-amber-500/30 bg-gradient-to-r from-[#16213e] to-[#1a1a2e] px-8 py-12 text-center">
          <p className="mb-6 text-2xl font-semibold text-white md:text-3xl">
            Ready to taste something amazing?
          </p>
          <Link
            href="/reservaton"
            className="inline-block rounded-lg bg-amber-500 px-10 py-3 font-semibold text-[#1a1a2e] transition hover:bg-amber-400"
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}
