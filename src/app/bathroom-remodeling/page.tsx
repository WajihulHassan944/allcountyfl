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

const TRUST_ITEMS = [
  { value: "Free", label: "In-Home Estimates", icon: <DiamondIcon /> },
  { value: "Licensed", label: "& Insured", icon: <ShieldCheckIcon /> },
  { value: "5.0 / 5", label: "Average Google Rating", icon: <StarOutlineIcon /> },
];

const SERVICES_OFFERED = [
  {
    title: "Full Bathroom Remodels",
    description: "Complete, start-to-finish remodels from demolition to final walkthrough.",
    icon: <BathtubIcon />,
  },
  {
    title: "Custom & Walk-In Showers",
    description: "Frameless glass, tile surrounds, and accessible walk-in designs.",
    icon: <ShowerIcon />,
  },
  {
    title: "Tile, Flooring & Waterproofing",
    description: "Precision tile work and proper waterproofing that lasts for years.",
    icon: <TileIcon />,
  },
  {
    title: "Vanities, Countertops & Cabinetry",
    description: "Custom and prefab vanities fitted to your space and style.",
    icon: <CabinetIcon />,
  },
  {
    title: "Plumbing Fixtures & Lighting",
    description: "Fixture upgrades, lighting, and ventilation improvements.",
    icon: <BulbIcon />,
  },
  {
    title: "Aging-in-Place Conversions",
    description: "Accessible, safer bathrooms designed for every stage of life.",
    icon: <RefreshIcon />,
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
        <div className="container-site relative grid lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="relative z-10 flex flex-col justify-center py-20 pr-0 sm:py-24 lg:py-28 lg:pr-14">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-wider text-brand-red">
                All County Construction Services
              </p>
              <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                Bathroom Remodeling You Can Trust
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/75">
                Fully remodeled, custom showers, tile, vanities, and fixtures &mdash; built by a
                licensed and insured team, from free estimates to final walkthrough.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
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
          </div>

          <Reveal delay={150} className="relative -mx-5 h-72 sm:-mx-6 sm:h-96 lg:mx-0 lg:h-auto">
            <Image
              src="/images/bathroom-3.jpg"
              alt="Example bathroom remodel by All County Construction"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <div className="flex text-brand-red">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <div className="leading-tight">
                <p className="text-sm font-extrabold text-brand-black">5.0 / 5</p>
                <p className="text-xs text-brand-black/60">Google Reviews</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust strip */}
      <Reveal className="block bg-[#f5eceb] py-9">
        <div className="container-site flex flex-col items-center gap-8 divide-y divide-black/10 text-center sm:flex-row sm:justify-center sm:divide-x sm:divide-y-0">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-8 pt-8 first:pt-0 sm:pt-0"
            >
              <span className="text-brand-red">{item.icon}</span>
              <span className="text-left">
                <span className="block text-sm font-extrabold text-brand-black">
                  {item.value}
                </span>
                <span className="block text-xs text-brand-black/60">{item.label}</span>
              </span>
            </div>
          ))}
        </div>
      </Reveal>

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
                  {item.icon}
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
      <section id="work" className="bg-zinc-50 py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wide text-brand-red">Our Work</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
              The Kind of Bathrooms We Build
            </h2>
            <p className="mt-4 text-brand-black/70">
              Example styles shown below &mdash; your real completed-project photos will replace
              these once available.
            </p>
            <a
              href="#work"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-red-dark"
            >
              View Our Projects
              <ArrowIcon />
            </a>
          </Reveal>
          <div className="grid auto-rows-[140px] gap-4 grid-cols-2 sm:auto-rows-[160px] lg:grid-cols-3">
            {GALLERY_IMAGES.slice(0, 5).map((img, i) => (
              <Reveal
                key={img.src}
                delay={(i % 5) * 80}
                className={`group relative overflow-hidden rounded-2xl shadow-sm ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#200505] via-brand-black to-brand-black py-16 text-white">
        <div className="container-site relative grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wide text-brand-red">
              Our Process
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              From Consultation to Completion
            </h2>
            <p className="mt-3 text-sm text-white/60">
              A simple process to get the bathroom of your dreams.
            </p>
          </Reveal>
          <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent sm:block"
            />
            {PROCESS_STEPS.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} className="relative">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-lg font-extrabold shadow-lg shadow-brand-red/30 ring-4 ring-brand-black">
                  {item.step}
                </div>
                <h3 className="mt-4 text-sm font-bold sm:text-base">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/60">{item.description}</p>
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

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

function BathtubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <path strokeLinecap="round" d="M4 11V6a2 2 0 0 1 2-2 2 2 0 0 1 2 2" />
      <path strokeLinecap="round" d="M2 11h20v2a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6v-2Z" />
      <path strokeLinecap="round" d="M5 19v2M19 19v2" />
    </svg>
  );
}

function ShowerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <path strokeLinecap="round" d="M7 5a5 5 0 0 1 10 0" />
      <path strokeLinecap="round" d="M5 9h14" />
      <path strokeLinecap="round" d="M8 13v.01M12 13v.01M16 13v.01M9 17v.01M13 17v.01M8 21v.01M15 21v.01" />
    </svg>
  );
}

function TileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
  );
}

function CabinetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path strokeLinecap="round" d="M12 4v16" />
      <path strokeLinecap="round" d="M8 13v.01M16 13v.01" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6M10 21h4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2.2h5.2c0-1 .4-1.7 1-2.2A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10a9 9 0 0 1 15-6.7L21 6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 3v5h-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 14a9 9 0 0 1-15 6.7L3 18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-5h5" />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12l4 6-10 12L2 9l4-6Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 9h20M9 3l-2 6 5 12 5-12-2-6" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

function StarOutlineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.9 6 6.6.6-5 4.5 1.5 6.4L12 17l-5.9 3.5L7.6 14l-5-4.5 6.6-.6L12 3Z" />
    </svg>
  );
}
