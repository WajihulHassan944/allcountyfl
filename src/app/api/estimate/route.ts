import { NextResponse } from "next/server";
import { sendToWeb3Forms } from "@/lib/web3forms";

// The estimate form is also shown on allcountyfl.com (proxied from this app),
// so the browser calls this route cross-origin from those hosts.
const ALLOWED_ORIGINS = new Set([
  "https://allcountyfl.com",
  "https://www.allcountyfl.com",
  "https://bathrooms.allcountyfl.com",
]);

function corsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get("origin") ?? "";
  if (!ALLOWED_ORIGINS.has(origin)) return {};
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

export async function OPTIONS(request: Request) {
  return new NextResponse(null, { status: 204, headers: corsHeaders(request) });
}

export async function POST(request: Request) {
  const headers = corsHeaders(request);
  const body = await request.json();
  const { name, phone, email, location, description, honeypot } = body ?? {};

  // Spam trap: bots fill hidden fields, real users leave it blank.
  if (honeypot) {
    return NextResponse.json({ ok: true }, { headers });
  }

  if (!name || !phone || !description) {
    return NextResponse.json(
      { ok: false, error: "Name, phone, and project description are required." },
      { status: 400, headers }
    );
  }

  const result = await sendToWeb3Forms("New Bathroom Remodeling Estimate Request", {
    name,
    phone,
    email,
    project_location: location,
    project_description: description,
  });

  const status = result.ok ? 200 : "notConfigured" in result && result.notConfigured ? 503 : 502;
  return NextResponse.json(result, { status, headers });
}
