"use client";

import { useState, type FormEvent } from "react";
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
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
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
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
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
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-8 shadow-sm">
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
        <label htmlFor="name" className="text-sm font-semibold text-brand-black">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-red"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-brand-black">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1 w-full rounded-lg border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-red"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-brand-black">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 w-full rounded-lg border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-red"
          />
        </div>
      </div>

      <div>
        <label htmlFor="location" className="text-sm font-semibold text-brand-black">
          Project Location (city)
        </label>
        <input
          id="location"
          name="location"
          type="text"
          className="mt-1 w-full rounded-lg border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-red"
        />
      </div>

      <div>
        <label htmlFor="description" className="text-sm font-semibold text-brand-black">
          Tell us about your bathroom project
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          className="mt-1 w-full rounded-lg border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-red"
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-semibold text-brand-red">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-brand-red py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-red-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Request My Free Estimate"}
      </button>
      <p className="text-center text-xs text-brand-black/50">
        Prefer to talk? Call{" "}
        <a href={BUSINESS.phoneHref} className="font-semibold text-brand-red">
          {BUSINESS.phoneDisplay}
        </a>
      </p>
    </form>
  );
}
