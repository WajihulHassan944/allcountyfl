"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

type Status = "idle" | "submitting" | "success" | "error" | "not-configured";

export default function EstimateForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.ok) {
        setStatus("success");
        form.reset();
      } else if (result.notConfigured) {
        setStatus("not-configured");
      } else {
        setStatus("error");
        setErrorMessage(result.error ?? "Something went wrong. Please call us instead.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please call us instead.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center">
        <h3 className="text-xl font-bold text-brand-black">Request received!</h3>
        <p className="mt-2 text-sm text-brand-black/70">
          Thanks for reaching out. Our team will call or email you shortly to schedule your free
          bathroom remodeling estimate.
        </p>
      </div>
    );
  }

  if (status === "not-configured") {
    return (
      <div className="text-center">
        <h3 className="text-xl font-bold text-brand-black">Let&rsquo;s talk about your project</h3>
        <p className="mt-2 text-sm text-brand-black/70">
          Our online form isn&rsquo;t finished connecting yet &mdash; please call or email us
          directly and we&rsquo;ll get your free estimate started right away.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white hover:bg-brand-red-dark"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
          <a
            href={BUSINESS.emailHref}
            className="rounded-full border-2 border-brand-black px-6 py-3 text-sm font-bold text-brand-black hover:bg-brand-black hover:text-white"
          >
            Email Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field — hidden from real users, bots tend to fill every field */}
      <input
        type="text"
        name="honeypot"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-brand-black/70">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-zinc-50 px-4 py-3 text-sm text-brand-black outline-none transition-all placeholder:text-brand-black/35 focus:border-brand-red focus:bg-white focus:ring-4 focus:ring-brand-red/10"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-brand-black/70">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1.5 w-full rounded-xl border border-black/10 bg-zinc-50 px-4 py-3 text-sm text-brand-black outline-none transition-all placeholder:text-brand-black/35 focus:border-brand-red focus:bg-white focus:ring-4 focus:ring-brand-red/10"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-brand-black/70">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1.5 w-full rounded-xl border border-black/10 bg-zinc-50 px-4 py-3 text-sm text-brand-black outline-none transition-all placeholder:text-brand-black/35 focus:border-brand-red focus:bg-white focus:ring-4 focus:ring-brand-red/10"
          />
        </div>
      </div>

      <div>
        <label htmlFor="location" className="text-xs font-bold uppercase tracking-wider text-brand-black/70">
          Project Location (city)
        </label>
        <input
          id="location"
          name="location"
          type="text"
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-zinc-50 px-4 py-3 text-sm text-brand-black outline-none transition-all placeholder:text-brand-black/35 focus:border-brand-red focus:bg-white focus:ring-4 focus:ring-brand-red/10"
        />
      </div>

      <div>
        <label htmlFor="description" className="text-xs font-bold uppercase tracking-wider text-brand-black/70">
          Tell us about your bathroom project
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-zinc-50 px-4 py-3 text-sm text-brand-black outline-none transition-all placeholder:text-brand-black/35 focus:border-brand-red focus:bg-white focus:ring-4 focus:ring-brand-red/10"
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-semibold text-brand-red">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-brand-red py-4 text-sm font-bold text-white shadow-lg shadow-brand-red/25 transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-xl hover:shadow-brand-red/30 disabled:translate-y-0 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Request My Free Estimate"}
      </button>
      <p className="text-center text-xs leading-relaxed text-brand-black/50">
        By submitting, you agree that {BUSINESS.shortName} may contact you by phone, text, or
        email about your project. We never sell your information. See our{" "}
        <Link href="/privacy-policy" className="font-semibold text-brand-red hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
