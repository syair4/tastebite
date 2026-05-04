import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body?.name || !body?.email || !body?.subject || !body?.message) {
    return NextResponse.json({ error: "Missing required contact fields" }, { status: 400 });
  }

  const messageId = `MSG-${Date.now().toString(36).toUpperCase()}`;

  return NextResponse.json({
    ok: true,
    messageId,
    status: "received",
  });
}
