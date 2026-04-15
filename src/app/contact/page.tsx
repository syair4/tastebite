"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-12 text-center text-4xl font-bold text-white">Contact us</h1>

        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <textarea
                rows={5}
                placeholder="Message"
                className="w-full resize-y rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <button
                type="button"
                onClick={() => {}}
                className="w-full rounded-lg bg-amber-500 py-3 font-semibold text-zinc-950 transition hover:bg-amber-400"
              >
                Submit
              </button>
            </form>
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h2 className="mb-4 text-lg font-semibold text-amber-500">Visit</h2>
              <p className="text-sm leading-relaxed text-zinc-300">
                123 Culinary Lane
                <br />
                Foodie District
                <br />
                NY 10001
              </p>
              <p className="mt-4 text-sm text-zinc-300">
                <span className="text-zinc-500">Phone:</span> (555) 123-456
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                <span className="text-zinc-500">Email:</span>{" "}
                <a
                  href="mailto:info@tastebit.com"
                  className="text-amber-500 hover:text-amber-400"
                >
                  info@tastebit.com
                </a>
              </p>
              <div className="mt-4 text-sm text-zinc-400">
                <p className="font-medium text-zinc-300">Hours</p>
                <p>Mon–Thu: 5pm – 10pm</p>
                <p>Fri–Sat: 5pm – 11pm</p>
                <p>Sun: Closed</p>
              </div>
            </div>

            <div className="flex h-48 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-800/80 text-zinc-500">
              Map goes here
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
