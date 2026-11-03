import type { Metadata } from "next";
import Image from "next/image";
import EstimateForm from "@/components/EstimateForm";
import MobileCta from "@/components/MobileCta";
import { BUSINESS } from "@/lib/constants";
import { GOOGLE_REVIEWS } from "@/lib/reviews";

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

const STATS = [
  { value: "Free", label: "Written Estimates" },
  { value: "Licensed", label: "& Insured" },
  { value: "5.0 / 5", label: "Average Google Rating" },
];

const SERVICES_OFFERED = [
  {
    title: "Full Bathroom Remodels",
    description: "Complete, start-to-finish remodels from demolition to final walkthrough.",
  },
  {
    title: "Custom & Walk-In Showers",
    description: "Frameless glass, tile surrounds, and accessible walk-in designs.",
  },
  {
    title: "Tile, Flooring & Waterproofing",
    description: "Precision tile work and proper waterproofing that lasts for years.",
  },
  {
    title: "Vanities, Countertops & Cabinetry",
    description: "Custom and prefab vanities fitted to your space and style.",
  },
  {
    title: "Plumbing Fixtures & Lighting",
    description: "Fixture upgrades, lighting, and ventilation improvements.",
  },
  {
    title: "Aging-in-Place Conversions",
    description: "Accessible, safer bathrooms designed for every stage of life.",
  },
];

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Free Consultation",
    description: "We visit (or review photos of) your space, discuss your goals, and answer questions.",
  },
  {
    step: "2",
    title: "Design & Estimate",
    description: "You receive a clear project scope and written estimate before any work begins.",
  },
  {
    step: "3",
    title: "Permits & Scheduling",
    description: "We handle required permitting and schedule the work around your household.",
  },
  {
    step: "4",
    title: "Remodel & Walkthrough",
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

// Real Google reviews from bathroom remodeling clients.
const BATHROOM_REVIEWS = GOOGLE_REVIEWS.filter((r) =>
  ["Patricia Heiner", "Sandra"].includes(r.name)
);

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
      <section className="relative overflow-hidden bg-brand-black text-white">
        <Image
          src="/images/featured-villa.jpg"
          alt="Bathroom remodeling by All County Construction"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/40" />
        <div className="container-site relative py-24 sm:py-32">
          <p className="inline-block rounded-full bg-brand-red/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-red">
            Bathroom Remodeling &middot; Central Florida
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Bathroom Remodeling You Can Trust
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">
            Full remodels, custom showers, tile, vanities, and fixtures &mdash; built by a
            licensed and insured team, from free estimate to final walkthrough.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-red/30 transition-colors hover:bg-brand-red-dark"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
            <a
              href="#estimate"
              className="rounded-full border-2 border-white px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand-black"
            >
              Request a Bathroom Estimate
            </a>
          </div>

          <div className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold text-brand-red sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-white/70 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services offered */}
      <section className="container-site py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-red">What We Do</p>
          <h2 className="mt-2 text-3xl font-extrabold text-brand-black sm:text-4xl">
            What&rsquo;s Included in Our Bathroom Remodeling
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_OFFERED.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black/10 p-7 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                <CheckIcon />
              </div>
              <h3 className="mt-4 text-lg font-bold text-brand-black">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-black/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project gallery (placeholder until client photos arrive) */}
      <section className="bg-zinc-50 py-20">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-red">Our Work</p>
            <h2 className="mt-2 text-3xl font-extrabold text-brand-black sm:text-4xl">
              Recent Bathroom Projects
            </h2>
            <p className="mt-3 text-brand-black/70">
              Real before-and-after photos from our completed bathroom remodels are being added
              here.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="flex h-56 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-brand-red/25 bg-white text-brand-black/40 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <CameraIcon />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Project photo coming soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      {BATHROOM_REVIEWS.length > 0 && (
        <section className="container-site py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-red">
              Verified Reviews
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-brand-black sm:text-4xl">
              What Bathroom Remodeling Clients Say
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            {BATHROOM_REVIEWS.map((review) => (
              <div key={review.name} className="rounded-2xl bg-zinc-50 p-7">
                <div className="flex text-brand-red">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="mt-3 text-sm text-brand-black/75">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-4">
                  <p className="text-sm font-bold text-brand-black">{review.name}</p>
                  <p className="text-xs text-brand-black/50">
                    Google review &middot; {review.timeAgo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Process */}
      <section className="bg-brand-black py-20 text-white">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-red">
              How It Works
            </p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              From Consultation to Completion
            </h2>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item) => (
              <div key={item.title} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-lg font-extrabold">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="container-site py-16 text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-brand-red">Where We Work</p>
        <h2 className="mt-2 text-3xl font-extrabold text-brand-black sm:text-4xl">
          Areas We Serve
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-black/70">
          We proudly provide bathroom remodeling services throughout {BUSINESS.serviceArea}.
          Call us to confirm coverage for your city.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-50 py-20">
        <div className="container-site">
          <h2 className="text-center text-3xl font-extrabold text-brand-black sm:text-4xl">
            Bathroom Remodeling FAQs
          </h2>
          <div className="mx-auto mt-10 max-w-2xl divide-y divide-black/10">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="cursor-pointer list-none font-semibold text-brand-black">
                  {faq.q}
                </summary>
                <p className="mt-2 text-sm text-brand-black/70">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate form */}
      <section id="estimate" className="py-20 pb-28 sm:pb-20">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-brand-red">
                Get Started
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-brand-black sm:text-4xl">
                Request Your Free Bathroom Estimate
              </h2>
              <p className="mt-4 text-brand-black/70">
                Tell us about your project and we&rsquo;ll follow up to schedule your free
                estimate. No pressure, no obligation.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-brand-black/80">
                {["Free, no-obligation written estimate", "Licensed & insured team", "Clear timeline before work begins"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                        <CheckIcon small />
                      </span>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <EstimateForm />
          </div>
        </div>
      </section>

      <MobileCta />
    </>
  );
}

function CheckIcon({ small }: { small?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={small ? "h-3.5 w-3.5" : "h-5 w-5"}
    >
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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <path d="M4 8a2 2 0 012-2h1.5l1-1.5h7l1 1.5H18a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9L10 1.5z" />
    </svg>
  );
}
