import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body?.name || !body?.email || !body?.date || !body?.time || !body?.partySize) {
    return NextResponse.json({ error: "Missing required reservation fields" }, { status: 400 });
  }

  const confirmationId = `RSV-${Date.now().toString(36).toUpperCase()}`;

  return NextResponse.json({
    ok: true,
    confirmationId,
    status: "confirmed",
  });
}
