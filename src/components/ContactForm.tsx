"use client";

import { useState, type FormEvent } from "react";
import { BUSINESS } from "@/lib/constants";

type Status = "idle" | "submitting" | "success" | "error" | "not-configured";

const SERVICES = [
  "Bathroom Remodeling",
  "Tenant Build-Outs",
  "Commercial Remodeling",
  "Windows & Doors",
  "Painting",
  "Flooring & Trim",
  "Roofing & Skylights",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
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
        <h3 className="text-xl font-bold text-brand-black">Message sent!</h3>
        <p className="mt-2 text-sm text-brand-black/70">
          Thanks for reaching out — our team will get back to you shortly.
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
          directly.
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
      <input
        type="text"
        name="honeypot"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="text-sm font-semibold text-brand-black">
            Full Name
          </label>
          <input
            id="c-name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-red"
          />
        </div>
        <div>
          <label htmlFor="c-email" className="text-sm font-semibold text-brand-black">
            Email
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-red"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-phone" className="text-sm font-semibold text-brand-black">
            Phone Number
          </label>
          <input
            id="c-phone"
            name="phone"
            type="tel"
            className="mt-1 w-full rounded-lg border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-red"
          />
        </div>
        <div>
          <label htmlFor="c-service" className="text-sm font-semibold text-brand-black">
            Service Interested In
          </label>
          <select
            id="c-service"
            name="service"
            defaultValue=""
            className="mt-1 w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-red"
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="c-message" className="text-sm font-semibold text-brand-black">
          Message
        </label>
        <textarea
          id="c-message"
          name="message"
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
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
