"use client";

import { FormEvent, useState } from "react";

const TIME_SLOTS = [
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
];

export default function ReservationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(TIME_SLOTS[0]);
  const [partySize, setPartySize] = useState("2");
  const [requests, setRequests] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime(TIME_SLOTS[0]);
    setPartySize("2");
    setRequests("");
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-lg px-4 py-16">
        <h1 className="mb-2 text-center font-serif text-3xl font-semibold tracking-tight text-amber-400">
          TasteBite
        </h1>
        <p className="mb-10 text-center text-sm text-zinc-400">
          Reserve a table for your next visit
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-xl shadow-black/40"
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />

          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-100 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />

          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-100 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          >
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>

          <select
            value={partySize}
            onChange={(e) => setPartySize(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-100 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={String(n)}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>

          <textarea
            placeholder="Special requests"
            value={requests}
            onChange={(e) => setRequests(e.target.value)}
            rows={4}
            className="w-full resize-y rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-amber-500 py-3 font-semibold text-zinc-950 transition hover:bg-amber-400"
          >
            Reserve Table
          </button>
        </form>
      </div>
    </div>
  );
}
