import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body?.fullName || !body?.email || !body?.address || !body?.city || !body?.zip) {
    return NextResponse.json({ error: "Missing required order fields" }, { status: 400 });
  }

  if (!Array.isArray(body.items) || body.items.length === 0) {
    return NextResponse.json({ error: "Order must contain at least one item" }, { status: 400 });
  }

  // Demo persistence boundary: this is where a production app would persist the
  // order and send it to the restaurant/payment systems. Keep payment data out
  // of this app; only non-sensitive payment method metadata is accepted.
  const confirmationId = `TB-${Date.now().toString(36).toUpperCase()}`;

  return NextResponse.json({
    ok: true,
    confirmationId,
    status: "received",
  });
}
