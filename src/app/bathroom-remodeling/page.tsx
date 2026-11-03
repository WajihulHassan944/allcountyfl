import type { Metadata } from "next";
import Image from "next/image";
import EstimateForm from "@/components/EstimateForm";
import MobileCta from "@/components/MobileCta";
import Reveal from "@/components/Reveal";
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

// Example/inspiration photos (stock) shown until the client provides real
// completed-project photos.
const GALLERY_IMAGES = [
  { src: "/images/bathroom-1.jpg", alt: "Modern double-vanity bathroom remodel" },
  { src: "/images/bathroom-2.jpg", alt: "Bathroom remodel with patterned tile shower" },
  { src: "/images/bathroom-3.jpg", alt: "Frameless glass walk-in shower remodel" },
  { src: "/images/bathroom-4.jpg", alt: "Freestanding tub bathroom remodel" },
  { src: "/images/bathroom-5.jpg", alt: "Full bathroom remodel with walk-in shower and tub" },
  { src: "/images/bathroom-6.jpg", alt: "Marble tile double-vanity bathroom remodel" },
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
      <section className="relative overflow-hidden bg-brand-black text-white">
        <Image
          src="/images/bathroom-5.jpg"
          alt="Bathroom remodeling by All County Construction"
          fill
          priority
          className="object-cover opacity-15 grayscale contrast-125"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand-red/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-red/10 blur-3xl"
        />

        <div className="container-site relative grid gap-16 py-24 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-red/30 bg-brand-red/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-red">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                Bathroom Remodeling &middot; Central Florida
              </p>
              <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Bathroom Remodeling You Can Trust
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
                Full remodels, custom showers, tile, vanities, and fixtures &mdash; built by a
                licensed and insured team, from free estimate to final walkthrough.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={BUSINESS.phoneHref}
                  className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-red/30 transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-xl"
                >
                  Call {BUSINESS.phoneDisplay}
                </a>
                <a
                  href="#estimate"
                  className="rounded-full border-2 border-white/80 px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-brand-black"
                >
                  Request a Bathroom Estimate
                </a>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-extrabold text-brand-red sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-white/60 sm:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="relative hidden lg:block">
            <div className="relative h-[28rem] overflow-hidden rounded-3xl shadow-2xl shadow-black/50 ring-1 ring-white/10">
              <Image
                src="/images/bathroom-3.jpg"
                alt="Example bathroom remodel by All County Construction"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-7 -left-7 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <div className="flex text-brand-red">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <div className="leading-tight">
                <p className="text-sm font-extrabold text-brand-black">5.0 / 5</p>
                <p className="text-xs text-brand-black/60">Google reviews</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services offered */}
      <section className="container-site py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-red">What We Do</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            What&rsquo;s Included in Our Bathroom Remodeling
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_OFFERED.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-xl hover:shadow-black/5">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-red transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white">
                  <CheckIcon />
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-black/70">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Project gallery (example/inspiration photos until client photos arrive) */}
      <section className="bg-zinc-50 py-24">
        <div className="container-site">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-red">Our Work</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
              The Kind of Bathrooms We Build
            </h2>
            <p className="mt-3 text-brand-black/70">
              Example styles shown below &mdash; your real completed-project photos will replace
              these once provided.
            </p>
          </Reveal>
          <div className="mt-12 grid auto-rows-[220px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY_IMAGES.map((img, i) => (
              <Reveal
                key={img.src}
                delay={(i % 4) * 80}
                className={`group relative overflow-hidden rounded-2xl shadow-sm ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                  Example style
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      {BATHROOM_REVIEWS.length > 0 && (
        <section className="container-site py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-red">
              Verified Reviews
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
              What Bathroom Remodeling Clients Say
            </h2>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {BATHROOM_REVIEWS.map((review, i) => (
              <Reveal key={review.name} delay={i * 100}>
                <div className="relative h-full overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
                  <QuoteIcon className="absolute right-6 top-6 h-10 w-10 text-brand-red/10" />
                  <div className="flex text-brand-red">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <p className="relative mt-4 text-sm leading-relaxed text-brand-black/75">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-black text-sm font-bold text-white">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-black">{review.name}</p>
                      <p className="text-xs text-brand-black/50">
                        Google review &middot; {review.timeAgo}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Process */}
      <section className="relative overflow-hidden bg-brand-black py-24 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-red/10 blur-3xl"
        />
        <div className="container-site relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-red">
              How It Works
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              From Consultation to Completion
            </h2>
          </Reveal>
          <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block"
            />
            {PROCESS_STEPS.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} className="relative">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-lg font-extrabold shadow-lg shadow-brand-red/20 ring-4 ring-brand-black">
                  {item.step}
                </div>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <Reveal className="container-site block py-20 text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-brand-red">Where We Work</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
          Areas We Serve
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-black/70">
          We proudly provide bathroom remodeling services throughout {BUSINESS.serviceArea}.
          Call us to confirm coverage for your city.
        </p>
      </Reveal>

      {/* FAQ */}
      <section className="bg-zinc-50 py-24">
        <Reveal className="container-site">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            Bathroom Remodeling FAQs
          </h2>
          <div className="mx-auto mt-12 max-w-2xl space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl bg-white px-6 py-5 shadow-sm ring-1 ring-black/5 open:ring-brand-red/20"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-black">
                  {faq.q}
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red transition-transform duration-200 group-open:rotate-45">
                    <PlusIcon />
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-brand-black/70">{faq.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Estimate form */}
      <section id="estimate" className="bg-zinc-50 py-24 pb-32 sm:pb-24">
        <div className="container-site">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/5 ring-1 ring-black/5">
            <div className="grid lg:grid-cols-[1fr_1fr]">
              <div className="relative flex flex-col justify-center overflow-hidden bg-brand-black px-8 py-12 text-white sm:px-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl"
                />
                <div className="relative">
                  <p className="text-sm font-bold uppercase tracking-wide text-brand-red">
                    Get Started
                  </p>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Request Your Free Bathroom Estimate
                  </h2>
                  <p className="mt-4 text-white/70">
                    Tell us about your project and we&rsquo;ll follow up to schedule your free
                    estimate. No pressure, no obligation.
                  </p>
                  <ul className="mt-8 space-y-4 text-sm">
                    {[
                      "Free, no-obligation written estimate",
                      "Licensed & insured team",
                      "Clear timeline before work begins",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-red/20 text-brand-red">
                          <CheckIcon small />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-8 sm:p-12">
                <EstimateForm />
              </div>
            </div>
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

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9L10 1.5z" />
    </svg>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 24" fill="currentColor" className={className}>
      <path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0l1.6 4.4C9.6 5.6 7.2 8.4 7.2 12.4H14.4V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.2 30.4 0L32 4.4c-4.8 1.2-7.2 4-7.2 8h7.2V24H17.6Z" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
      <path strokeLinecap="round" d="M10 4v12M4 10h12" />
    </svg>
  );
}
