"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const success = login(email, password);
    if (!success) {
      setError("Invalid email or password. Please try again.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-xl backdrop-blur">
        <h1 className="mb-2 text-center text-2xl font-bold text-white">
          TasteBite
        </h1>
        <p className="mb-8 text-center text-sm text-zinc-400">Log in to your account</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* FIX: changed type="text" to type="email" for proper email input */}
          <label className="block">
            <span className="sr-only">Email address</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              required
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </label>
          {/* FIX: changed type="text" to type="password" so password is masked */}
          <label className="block">
            <span className="sr-only">Password</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
              required
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </label>
          {error && (
            <p className="text-sm text-red-400" role="alert">{error}</p>
          )}
          <button
            type="submit"
            className="w-full rounded-lg bg-amber-500 py-3 font-semibold text-zinc-950 transition hover:bg-amber-400"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-amber-500 hover:text-amber-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
