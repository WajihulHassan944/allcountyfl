import type { Metadata } from "next";
import EstimateForm from "@/components/EstimateForm";
import MobileCta from "@/components/MobileCta";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bathroom Remodeling in Central Florida",
  description:
    "Full bathroom remodeling, showers, tile, vanities, and fixtures from All County Construction Services. Serving Central Florida. Request a free estimate today.",
  alternates: { canonical: "/bathroom-remodeling" },
  openGraph: {
    title: "Bathroom Remodeling | All County Construction Services",
    description:
      "Full bathroom remodeling, showers, tile, vanities, and fixtures. Serving Central Florida.",
    url: `${BUSINESS.url}/bathroom-remodeling`,
  },
};

const SERVICES_OFFERED = [
  "Full bathroom remodels, start to finish",
  "Custom and walk-in showers",
  "Tile, flooring, and waterproofing",
  "Vanities, countertops, and cabinetry",
  "Plumbing fixtures and lighting upgrades",
  "Accessibility and aging-in-place conversions",
];

const PROCESS_STEPS = [
  {
    step: "1. Free Consultation",
    description: "We visit (or review photos of) your space, discuss your goals, and answer questions.",
  },
  {
    step: "2. Design & Estimate",
    description: "You receive a clear project scope and estimate before any work begins.",
  },
  {
    step: "3. Permits & Scheduling",
    description: "We handle required permitting and schedule the work around your household.",
  },
  {
    step: "4. Remodel & Walkthrough",
    description: "Our crew completes the remodel and walks you through the finished space.",
  },
];

const FAQS = [
  {
    q: "How much does a bathroom remodel cost?",
    a: "Cost depends on the size of the bathroom, the materials you choose, and the scope of work (for example, a fixture refresh versus a full gut remodel with new plumbing). We provide a written estimate after a free consultation so you know the cost before any work starts.",
  },
  {
    q: "How long does a bathroom remodel take?",
    a: "A typical full bathroom remodel takes a few weeks from demolition to final walkthrough, depending on the scope of work, material lead times, and any permitting requirements. We'll give you a project-specific timeline as part of your estimate.",
  },
  {
    q: "Do I need a permit to remodel my bathroom?",
    a: "Many bathroom remodels that involve plumbing, electrical, or structural changes require a permit from the local building department. We handle the permitting process for work that requires it so your project stays code-compliant.",
  },
  {
    q: "Can you remodel my bathroom while I'm still living in the home?",
    a: "Yes. Most of our bathroom remodeling projects are completed in occupied homes. We coordinate scheduling and keep the work area contained to minimize disruption to your household.",
  },
  {
    q: "What areas do you serve?",
    a: `We serve ${BUSINESS.serviceArea}. Call us to confirm coverage for your specific city.`,
  },
];

export default function BathroomRemodelingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-brand-black py-20 text-white sm:py-28">
        <div className="container-site">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-red">
            Bathroom Remodeling
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Bathroom Remodeling You Can Trust in {BUSINESS.addressRegion === "FL" ? "Central Florida" : "Your Area"}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">
            Full remodels, custom showers, tile, vanities, and fixtures &mdash; built by a
            licensed and insured team, from free estimate to final walkthrough.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-bold text-white hover:bg-brand-red-dark"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
            <a
              href="#estimate"
              className="rounded-full border-2 border-white px-7 py-3.5 text-sm font-bold text-white hover:bg-white hover:text-brand-black"
            >
              Request a Bathroom Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Services offered */}
      <section className="container-site py-16">
        <h2 className="text-3xl font-extrabold text-brand-black sm:text-4xl">
          What&rsquo;s Included in Our Bathroom Remodeling
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {SERVICES_OFFERED.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl bg-zinc-50 p-4">
              <CheckIcon />
              <span className="text-sm font-medium text-brand-black/85">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Project gallery (placeholder until client photos arrive) */}
      <section className="bg-zinc-50 py-16">
        <div className="container-site">
          <h2 className="text-3xl font-extrabold text-brand-black sm:text-4xl">
            Recent Bathroom Projects
          </h2>
          <p className="mt-2 max-w-xl text-brand-black/70">
            Real before-and-after photos from our completed bathroom remodels are being added
            here.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="flex h-56 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-black/15 bg-white text-brand-black/40"
              >
                <CameraIcon />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Project photo coming soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-site py-16">
        <h2 className="text-3xl font-extrabold text-brand-black sm:text-4xl">
          From Consultation to Completion
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item) => (
            <div key={item.step}>
              <h3 className="text-lg font-bold text-brand-red">{item.step}</h3>
              <p className="mt-2 text-sm text-brand-black/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-brand-black py-16 text-white">
        <div className="container-site text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Areas We Serve</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            We proudly provide bathroom remodeling services throughout {BUSINESS.serviceArea}.
            Call us to confirm coverage for your city.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-site py-16">
        <h2 className="text-3xl font-extrabold text-brand-black sm:text-4xl">
          Bathroom Remodeling FAQs
        </h2>
        <div className="mx-auto mt-8 max-w-2xl divide-y divide-black/10">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="cursor-pointer list-none font-semibold text-brand-black">
                {faq.q}
              </summary>
              <p className="mt-2 text-sm text-brand-black/70">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Estimate form */}
      <section id="estimate" className="bg-zinc-50 py-16 pb-28 sm:pb-16">
        <div className="container-site">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-extrabold text-brand-black sm:text-4xl">
              Request Your Free Bathroom Estimate
            </h2>
            <p className="mt-3 text-brand-black/70">
              Tell us about your project and we&rsquo;ll follow up to schedule your free
              estimate.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-xl">
            <EstimateForm />
          </div>
        </div>
      </section>

      <MobileCta />
    </>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-red">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M4 8a2 2 0 012-2h1.5l1-1.5h7l1 1.5H18a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}
