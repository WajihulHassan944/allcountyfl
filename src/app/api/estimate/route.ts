import { NextResponse } from "next/server";
import { BUSINESS } from "@/lib/constants";

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

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    // Email delivery isn't configured yet. Let the client fall back to a
    // mailto/tel link instead of silently failing.
    return NextResponse.json(
      {
        ok: false,
        notConfigured: true,
        error: "Online form delivery isn't fully set up yet. Please call or email us directly.",
      },
      { status: 503 }
    );
  }

  const web3FormsResponse = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: "New Bathroom Remodeling Estimate Request",
      from_name: "All County Construction Website",
      to: BUSINESS.email,
      name,
      phone,
      email,
      project_location: location,
      project_description: description,
    }),
  });

  const result = await web3FormsResponse.json();

  if (!web3FormsResponse.ok || !result.success) {
    return NextResponse.json(
      { ok: false, error: "We couldn't send your request. Please call us instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
