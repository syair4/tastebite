import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Welcome to TasteBite
          </h1>
          <p className="text-lg leading-relaxed text-zinc-300">
            Where passion meets the plate. TasteBite began as a small kitchen with a big dream:
            to bring bold flavors and warm hospitality to every guest who walks through our door.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          {/* FIX: changed h4 to h2 for proper heading hierarchy */}
          <h2 className="mb-6 text-2xl font-semibold text-amber-500">Our Story</h2>
          <p className="leading-relaxed text-zinc-300">
            Founded in the heart of the city, we source ingredients from local farms and artisans.
            Every dish tells a story of craft, seasonality, and the people who grow and prepare our food.
            From our wood-fired oven to our seasonal tasting menus, we invite you to slow down and savor.
          </p>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">Meet the team</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
              {/* FIX: use Next.js Image component with descriptive alt text */}
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=300&fit=crop"
                  alt="Chef Maria Santos, Executive Chef"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="font-semibold text-white">Chef Maria Santos</p>
                <p className="text-sm text-zinc-400">Executive Chef</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1581299894003-aa3a0c0b21a9?w=400&h=300&fit=crop"
                  alt="James Okonkwo, Sous Chef"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="font-semibold text-white">James Okonkwo</p>
                <p className="text-sm text-zinc-400">Sous Chef</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop"
                  alt="Elena Vasquez, Pastry Chef"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="font-semibold text-white">Elena Vasquez</p>
                <p className="text-sm text-zinc-400">Pastry Chef</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIX: changed low-contrast #666666 to high-contrast #e2e2e2 */}
      <section
        className="px-6 py-16"
        style={{ backgroundColor: "#1a1a2e", color: "#e2e2e2" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-10 text-3xl font-bold" style={{ color: "#e2e2e2" }}>
            Our values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-2 text-xl font-semibold" style={{ color: "#e2e2e2" }}>
                Quality
              </h3>
              <p className="text-sm leading-relaxed">
                We never compromise on ingredients or technique.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold" style={{ color: "#e2e2e2" }}>
                Fresh
              </h3>
              <p className="text-sm leading-relaxed">
                Seasonal menus that change with what the market offers.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold" style={{ color: "#e2e2e2" }}>
                Community
              </h3>
              <p className="text-sm leading-relaxed">
                Supporting local growers and the neighborhood we call home.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
