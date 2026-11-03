import { BUSINESS } from "@/lib/constants";

type Web3FormsResult =
  | { ok: true }
  | { ok: false; notConfigured: true; error: string }
  | { ok: false; notConfigured?: false; error: string };

export async function sendToWeb3Forms(
  subject: string,
  fields: Record<string, string | undefined>
): Promise<Web3FormsResult> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      ok: false,
      notConfigured: true,
      error: "Online form delivery isn't fully set up yet. Please call or email us directly.",
    };
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: "All County Construction Website",
      to: BUSINESS.email,
      ...fields,
    }),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    return { ok: false, error: "We couldn't send your request. Please call us instead." };
  }

  return { ok: true };
}
