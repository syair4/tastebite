"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservation", label: "Reservation" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { cartCount } = useCart();
  const { user, logout, isLoggedIn } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-amber-500/20 bg-[#1a1a2e] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-amber-400 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#1a1a2e] focus-visible:outline-none"
        >
          TasteBite
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-amber-400 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#1a1a2e] focus-visible:outline-none"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-amber-400 transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#1a1a2e] focus-visible:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-amber-500 px-1 text-xs font-semibold text-[#1a1a2e]">
                {cartCount}
              </span>
            )}
          </Link>

          {isLoggedIn && user ? (
            <div className="hidden items-center gap-2 sm:flex">
              <span className="max-w-[120px] truncate text-sm text-white/80">
                {user.name}
              </span>
              <button
                type="button"
                onClick={() => logout()}
                className="rounded-md border border-amber-500/50 px-3 py-1.5 text-sm font-medium text-amber-400 transition-colors hover:bg-amber-500/10 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#1a1a2e] focus-visible:outline-none"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="hidden rounded-md bg-amber-500 px-3 py-1.5 text-sm font-semibold text-[#1a1a2e] transition-colors hover:bg-amber-400 sm:inline-flex focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#1a1a2e] focus-visible:outline-none"
            >
              Login
            </Link>
          )}

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#1a1a2e] focus-visible:outline-none"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-10 bg-black/60 md:hidden focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#1a1a2e] focus-visible:outline-none"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <aside
            id="mobile-nav"
            className="fixed inset-y-0 right-0 z-10 flex w-[min(100%,280px)] flex-col border-l border-amber-500/20 bg-[#1a1a2e] p-6 shadow-xl md:hidden"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg font-semibold text-amber-400">Menu</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-md p-2 text-white/80 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#1a1a2e] focus-visible:outline-none"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block text-base font-medium text-white/90 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#1a1a2e] focus-visible:outline-none"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto space-y-3 border-t border-white/10 pt-6">
              {isLoggedIn && user ? (
                <>
                  <p className="text-sm text-white/70">{user.name}</p>
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setMobileOpen(false);
                    }}
                    className="w-full rounded-md border border-amber-500/50 py-2 text-sm font-medium text-amber-400 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#1a1a2e] focus-visible:outline-none"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="block w-full rounded-md bg-amber-500 py-2 text-center text-sm font-semibold text-[#1a1a2e] focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#1a1a2e] focus-visible:outline-none"
                  onClick={() => setMobileOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
