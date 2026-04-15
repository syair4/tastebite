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
  // FIX: added confirmation state to show success message after submission
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedDetails, setConfirmedDetails] = useState<{
    name: string;
    date: string;
    time: string;
    partySize: string;
  } | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Save details before resetting
    setConfirmedDetails({ name, date, time, partySize });
    setConfirmed(true);
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime(TIME_SLOTS[0]);
    setPartySize("2");
    setRequests("");
  }

  if (confirmed && confirmedDetails) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <div className="mx-auto max-w-lg px-4 py-16">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 text-center shadow-xl shadow-black/40">
            <div className="mb-4 text-5xl">🍽️</div>
            <h1 className="mb-2 text-2xl font-bold text-amber-400">Reservation Confirmed!</h1>
            <p className="mb-6 text-zinc-400">
              Thank you, <span className="font-semibold text-zinc-200">{confirmedDetails.name}</span>! Your table is booked.
            </p>
            <div className="mb-6 rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-left space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Date</span>
                <span className="font-medium text-zinc-200">{confirmedDetails.date}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Time</span>
                <span className="font-medium text-zinc-200">{confirmedDetails.time}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Guests</span>
                <span className="font-medium text-zinc-200">
                  {confirmedDetails.partySize} {Number(confirmedDetails.partySize) === 1 ? "guest" : "guests"}
                </span>
              </div>
            </div>
            <p className="mb-6 text-sm text-zinc-500">
              A confirmation will be sent to your email. We look forward to seeing you!
            </p>
            <button
              type="button"
              onClick={() => { setConfirmed(false); setConfirmedDetails(null); }}
              className="rounded-lg bg-amber-500 px-6 py-2.5 font-semibold text-zinc-950 transition hover:bg-amber-400"
            >
              Make another reservation
            </button>
          </div>
        </div>
      </div>
    );
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
            required
            aria-label="Your name"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Your email"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />

          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-label="Your phone number"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />

          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            aria-label="Reservation date"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-zinc-100 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />

          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            aria-label="Reservation time"
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
            aria-label="Party size"
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
            aria-label="Special requests"
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
