import { NextResponse } from "next/server";
import { sendToWeb3Forms } from "@/lib/web3forms";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, service, message, honeypot } = body ?? {};

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const result = await sendToWeb3Forms("New Website Contact Form Submission", {
    name,
    email,
    phone,
    service_interested_in: service,
    message,
  });

  return NextResponse.json(result, { status: result.ok ? 200 : "notConfigured" in result && result.notConfigured ? 503 : 502 });
}
