import { NextResponse } from "next/server";
import { sendToWeb3Forms } from "@/lib/web3forms";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, email, location, description, honeypot } = body ?? {};

  // Spam trap: bots fill hidden fields, real users leave it blank.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !phone || !description) {
    return NextResponse.json(
      { ok: false, error: "Name, phone, and project description are required." },
      { status: 400 }
    );
  }

  const result = await sendToWeb3Forms("New Bathroom Remodeling Estimate Request", {
    name,
    phone,
    email,
    project_location: location,
    project_description: description,
  });

  return NextResponse.json(result, { status: result.ok ? 200 : "notConfigured" in result && result.notConfigured ? 503 : 502 });
}
