"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  // FIX: added form onSubmit handler — button changed from type="button" to type="submit"
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-12 text-center text-4xl font-bold text-white">Contact us</h1>

        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 text-4xl">✅</div>
                <h2 className="mb-2 text-xl font-semibold text-amber-400">Message sent!</h2>
                <p className="text-zinc-400">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-lg border border-amber-500/50 px-4 py-2 text-sm text-amber-400 hover:bg-amber-500/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  aria-label="Your name"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  aria-label="Your email"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  aria-label="Message subject"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <textarea
                  rows={5}
                  placeholder="Message"
                  required
                  aria-label="Your message"
                  className="w-full resize-y rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                {/* FIX: changed from type="button" with onClick to type="submit" inside form */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-amber-500 py-3 font-semibold text-zinc-950 transition hover:bg-amber-400"
                >
                  Submit
                </button>
              </form>
            )}
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
                {/* FIX: corrected email typo tastebit.com → tastebite.com */}
                <a
                  href="mailto:info@tastebite.com"
                  className="text-amber-500 hover:text-amber-400"
                >
                  info@tastebite.com
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
