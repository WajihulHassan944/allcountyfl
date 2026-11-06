import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
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
  { value: "Permits", label: "Handled For You", icon: <ClipboardIcon /> },
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

// Commitments drawn from how the business actually works (FAQ answers and
// what real clients describe in their Google reviews).
const CRAFT_POINTS = [
  {
    title: "A written estimate before any work begins",
    description: "Clear scope, clear pricing, and a project-specific timeline up front.",
  },
  {
    title: "Proper waterproofing behind every wall",
    description: "The parts you never see are built to the same standard as the ones you do.",
  },
  {
    title: "A clean, contained work area every day",
    description: "We remodel in occupied homes and leave the space neat at the end of each day.",
  },
  {
    title: "Direct, responsive communication",
    description: "Questions get answered quickly, by phone or text, from start to finish.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Free Consultation",
    description: "We visit (or review photos of) your space, discuss your goals, and answer questions.",
  },
  {
    step: "02",
    title: "Design & Estimate",
    description: "You receive a clear project scope and written estimate before any work begins.",
  },
  {
    step: "03",
    title: "Permits & Scheduling",
    description: "We handle required permitting and schedule the work around your household.",
  },
  {
    step: "04",
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
const [FEATURED_REVIEW, ...OTHER_REVIEWS] = BATHROOM_REVIEWS;

// Example/inspiration photos (stock) shown until the client provides real
// completed-project photos. Labeled as "style inspiration" on the page so
// they are not presented as completed All County projects.
const GALLERY_IMAGES = [
  { src: "/images/bathroom-1.jpg", alt: "Modern double-vanity bathroom", label: "Double Vanity Suites" },
  { src: "/images/bathroom-2.jpg", alt: "Bathroom with patterned tile shower", label: "Statement Tile" },
  { src: "/images/bathroom-3.jpg", alt: "Frameless glass walk-in shower", label: "Frameless Glass Showers" },
  { src: "/images/bathroom-4.jpg", alt: "Bathroom with freestanding tub", label: "Freestanding Tubs" },
  { src: "/images/bathroom-6.jpg", alt: "Marble tile double-vanity bathroom", label: "Marble & Stone" },
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
          src="/images/bathroom-3.jpg"
          alt="Bright, modern bathroom with a frameless glass walk-in shower"
          fill
          priority
          sizes="100vw"
          className="hero-zoom object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,#161616_0%,#161616_28%,rgba(22,22,22,0.97)_38%,rgba(22,22,22,0.82)_48%,rgba(22,22,22,0.45)_60%,rgba(22,22,22,0.1)_74%,transparent_88%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-brand-red/15 blur-[120px]"
        />

        <div className="container-site relative flex min-h-[620px] items-center pb-36 pt-20 sm:min-h-[680px] lg:min-h-[740px] lg:pb-40">
          <Reveal className="max-w-xl">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
              <span className="h-px w-10 bg-brand-red" />
              Central Florida Bathroom Remodeling
            </p>
            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.1rem]">
              Bathroom Remodeling You Can{" "}
              <span className="font-display font-medium italic text-brand-red">Trust</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
              Full remodels, custom showers, tile, vanities, and fixtures &mdash; built by a
              licensed and insured team, from free estimate to final walkthrough.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#estimate"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-4 text-sm font-bold text-white shadow-lg shadow-brand-red/30 transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-xl hover:shadow-brand-red/40"
              >
                Request a Free Estimate
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-brand-black"
              >
                <PhoneIcon />
                {BUSINESS.phoneDisplay}
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {GOOGLE_REVIEWS.slice(0, 4).map((r) => (
                  <span
                    key={r.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-extrabold text-brand-black ring-2 ring-brand-black"
                  >
                    {r.name.charAt(0)}
                  </span>
                ))}
              </div>
              <div className="leading-tight">
                <div className="flex text-[#fbbc04]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="mt-1 text-xs text-white/65">
                  Rated <span className="font-bold text-white">5.0</span> by Central Florida
                  homeowners on Google
                </p>
              </div>
            </div>
          </Reveal>

          {FEATURED_REVIEW && (
            <Reveal
              delay={250}
              className="absolute bottom-40 right-5 hidden w-80 lg:block xl:right-0"
            >
              <figure className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div className="flex text-[#fbbc04]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <blockquote className="mt-3 font-display text-lg italic leading-snug text-white">
                  &ldquo;It is now a beautiful modern bathroom and we are so happy!&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-2 text-xs text-white/70">
                  <GoogleIcon />
                  {FEATURED_REVIEW.name} &middot; Google Review
                </figcaption>
              </figure>
            </Reveal>
          )}
        </div>
      </section>

      {/* Trust strip — floats over the bottom edge of the hero */}
      <div className="container-site relative z-10 -mt-20">
        <Reveal className="block">
          <div className="grid grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/10 ring-1 ring-black/5 lg:grid-cols-4">
            {TRUST_ITEMS.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col items-start gap-3 px-6 py-7 sm:flex-row sm:items-center sm:px-8 ${
                  i % 2 === 1 ? "border-l border-black/5" : ""
                } ${i >= 2 ? "border-t border-black/5 lg:border-t-0" : ""} ${
                  i === 2 ? "lg:border-l" : ""
                }`}
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#f5eceb] text-brand-red">
                  {item.icon}
                </span>
                <span>
                  <span className="block font-heading text-base font-extrabold text-brand-black">
                    {item.value}
                  </span>
                  <span className="block text-xs text-brand-black/55">{item.label}</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Services offered */}
      <section className="container-site py-24 sm:py-28">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-brand-black sm:text-[2.75rem]">
              Everything your new bathroom needs,{" "}
              <span className="font-display font-medium italic text-brand-red">under one roof</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-brand-black/65 lg:pb-2">
              One licensed team handles every trade and every detail &mdash; so you get a single
              point of contact, one clear estimate, and a finished bathroom built to last.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_OFFERED.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 100}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-black/[0.07] bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:bg-brand-black hover:shadow-2xl hover:shadow-black/20">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-red/0 blur-3xl transition-colors duration-500 group-hover:bg-brand-red/30"
                />
                <div className="relative flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red transition-colors duration-500 group-hover:bg-brand-red group-hover:text-white">
                    {item.icon}
                  </div>
                  <span className="font-heading text-sm font-bold text-brand-black/20 transition-colors duration-500 group-hover:text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="relative mt-7 text-lg font-bold text-brand-black transition-colors duration-500 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-brand-black/65 transition-colors duration-500 group-hover:text-white/70">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="relative overflow-hidden bg-[#f8f4f3] py-24 sm:py-28">
        <div className="container-site grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative">
            <div
              aria-hidden
              className="absolute -bottom-5 -left-5 h-full w-full rounded-[2rem] border-2 border-brand-red/25"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/15 sm:aspect-[5/5]">
              <Image
                src="/images/bathroom-5.jpg"
                alt="Bathroom with a walk-in shower and soaking tub"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-3 bottom-10 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-right-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red text-white">
                <ShieldCheckIcon />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-extrabold text-brand-black">
                  Licensed &amp; Insured
                </span>
                <span className="block text-xs text-brand-black/55">General Contractor</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>Why Homeowners Choose Us</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-brand-black sm:text-[2.75rem]">
              Built right &mdash;{" "}
              <span className="font-display font-medium italic text-brand-red">
                even the parts you&rsquo;ll never see
              </span>
            </h2>
            <p className="mt-5 text-brand-black/65">
              A beautiful bathroom has to hold up to Florida humidity and years of daily use. We
              sweat the details behind the tile as much as the finishes in front of it.
            </p>
            <ul className="mt-9 space-y-6">
              {CRAFT_POINTS.map((point) => (
                <li key={point.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-red text-white shadow-md shadow-brand-red/30">
                    <CheckIcon small />
                  </span>
                  <span>
                    <span className="block font-heading font-bold text-brand-black">
                      {point.title}
                    </span>
                    <span className="mt-1 block text-sm text-brand-black/60">
                      {point.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Style gallery (example/inspiration photos until client photos arrive) */}
      <section id="work" className="container-site py-24 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <Eyebrow>Style Inspiration</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-brand-black sm:text-[2.75rem]">
              The kind of bathrooms{" "}
              <span className="font-display font-medium italic text-brand-red">we build</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <a
              href="#estimate"
              className="group inline-flex items-center gap-2 text-sm font-bold text-brand-black transition-colors hover:text-brand-red"
            >
              Start your design
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-black text-white transition-all group-hover:translate-x-1 group-hover:bg-brand-red">
                <ArrowIcon />
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4">
          {GALLERY_IMAGES.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 5) * 80}
              className={`group relative overflow-hidden rounded-3xl ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 right-4 font-heading text-sm font-bold text-white sm:bottom-5 sm:left-5 sm:text-base">
                {img.label}
              </span>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-xs text-brand-black/40">
          Photos shown are design inspiration for the styles we build.
        </p>
      </section>

      {/* Reviews */}
      {FEATURED_REVIEW && (
        <section className="relative overflow-hidden bg-brand-black py-24 text-white sm:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-brand-red/20 blur-[140px]"
          />
          <div className="container-site relative">
            <Reveal className="text-center">
              <Eyebrow light center>
                Verified Google Reviews
              </Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-[2.75rem]">
                What bathroom clients{" "}
                <span className="font-display font-medium italic text-brand-red">say</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
              <Reveal>
                <figure className="relative h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-12">
                  <QuoteIcon className="h-10 w-10 text-brand-red" />
                  <blockquote className="mt-6 font-display text-xl leading-relaxed text-white sm:text-2xl">
                    &ldquo;{FEATURED_REVIEW.text}&rdquo;
                  </blockquote>
                  <ReviewAuthor name={FEATURED_REVIEW.name} timeAgo={FEATURED_REVIEW.timeAgo} />
                </figure>
              </Reveal>
              <div className="grid gap-6">
                {OTHER_REVIEWS.map((review, i) => (
                  <Reveal key={review.name} delay={(i + 1) * 120}>
                    <figure className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                      <div className="flex text-[#fbbc04]">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <StarIcon key={j} />
                        ))}
                      </div>
                      <blockquote className="mt-4 text-sm leading-relaxed text-white/80">
                        &ldquo;{review.text}&rdquo;
                      </blockquote>
                      <ReviewAuthor name={review.name} timeAgo={review.timeAgo} />
                    </figure>
                  </Reveal>
                ))}
                <Reveal delay={240}>
                  <div className="flex h-full items-center gap-5 rounded-3xl bg-brand-red p-8">
                    <span className="font-heading text-5xl font-extrabold leading-none">5.0</span>
                    <span>
                      <span className="flex text-white">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <StarIcon key={j} />
                        ))}
                      </span>
                      <span className="mt-1 block text-sm text-white/85">
                        Average rating on Google
                      </span>
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="container-site py-24 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow center>Our Process</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-black sm:text-[2.75rem]">
            From consultation to{" "}
            <span className="font-display font-medium italic text-brand-red">completion</span>
          </h2>
          <p className="mt-4 text-brand-black/65">
            A simple, transparent process &mdash; so you always know what happens next.
          </p>
        </Reveal>
        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden h-px border-t border-dashed border-brand-red/30 lg:block"
          />
          {PROCESS_STEPS.map((item, i) => (
            <Reveal key={item.title} delay={i * 120} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white font-heading text-lg font-extrabold text-brand-red shadow-lg shadow-black/5 ring-1 ring-black/5">
                {item.step}
              </div>
              <h3 className="mt-6 text-lg font-bold text-brand-black">{item.title}</h3>
              <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-brand-black/60">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Service area CTA band */}
      <section className="container-site pb-24 sm:pb-28">
        <Reveal className="block">
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-black px-8 py-16 text-white sm:px-14 sm:py-20">
            <Image
              src="/images/bathroom-4.jpg"
              alt=""
              fill
              sizes="(min-width: 1200px) 1200px, 100vw"
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/30" />
            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <Eyebrow light>Areas We Serve</Eyebrow>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-[2.6rem]">
                  Ready for a bathroom{" "}
                  <span className="font-display font-medium italic text-brand-red">
                    you&rsquo;ll love?
                  </span>
                </h2>
                <p className="mt-4 max-w-lg text-white/70">
                  We proudly provide bathroom remodeling throughout {BUSINESS.serviceArea}. Call
                  us to confirm coverage for your city.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                <a
                  href="#estimate"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-4 text-sm font-bold text-white shadow-lg shadow-brand-red/30 transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark"
                >
                  Get My Free Estimate
                  <ArrowIcon />
                </a>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-brand-black"
                >
                  <PhoneIcon />
                  Call {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8f4f3] py-24 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="lg:sticky lg:top-36 lg:self-start">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-brand-black sm:text-[2.75rem]">
              Bathroom remodeling{" "}
              <span className="font-display font-medium italic text-brand-red">questions</span>
            </h2>
            <p className="mt-4 text-brand-black/65">
              Straight answers to what homeowners ask us most. Don&rsquo;t see yours?
            </p>
            <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <p className="font-heading font-bold text-brand-black">Talk to our team</p>
              <p className="mt-1 text-sm text-brand-black/60">
                We&rsquo;re happy to answer questions &mdash; no pressure, no obligation.
              </p>
              <div className="mt-5 space-y-3 text-sm">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-3 font-semibold text-brand-black hover:text-brand-red"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                    <PhoneIcon />
                  </span>
                  {BUSINESS.phoneDisplay}
                </a>
                <a
                  href={BUSINESS.emailHref}
                  className="flex items-center gap-3 font-semibold text-brand-black hover:text-brand-red"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                    <MailIcon />
                  </span>
                  {BUSINESS.email}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={faq.q}
                open={i === 0}
                className="group rounded-2xl bg-white px-6 py-5 shadow-sm ring-1 ring-black/5 transition-shadow open:shadow-lg open:shadow-black/5 open:ring-brand-red/20 sm:px-8 sm:py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-semibold text-brand-black [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red transition-all duration-300 group-open:rotate-45 group-open:bg-brand-red group-open:text-white">
                    <PlusIcon />
                  </span>
                </summary>
                <p className="mt-4 pr-10 text-sm leading-relaxed text-brand-black/65">{faq.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Estimate form */}
      <section id="estimate" className="scroll-mt-28 bg-[#f8f4f3] pb-32 sm:pb-28">
        <div className="container-site">
          <Reveal className="block">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-black/10 ring-1 ring-black/5">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative flex flex-col justify-between overflow-hidden bg-brand-black px-8 py-12 text-white sm:px-12 sm:py-14">
                  <Image
                    src="/images/bathroom-6.jpg"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/85 to-brand-black" />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-red/25 blur-3xl"
                  />
                  <div className="relative">
                    <Eyebrow light>Get Started</Eyebrow>
                    <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-[2.5rem]">
                      Request your free{" "}
                      <span className="font-display font-medium italic text-brand-red">
                        bathroom estimate
                      </span>
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
                          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                            <CheckIcon small />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative mt-12 border-t border-white/10 pt-6 text-sm">
                    <p className="text-white/50">Prefer to talk it through?</p>
                    <a
                      href={BUSINESS.phoneHref}
                      className="mt-1 inline-flex items-center gap-2 font-heading text-xl font-bold text-white hover:text-brand-red"
                    >
                      <PhoneIcon />
                      {BUSINESS.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="p-8 sm:p-12">
                  <EstimateForm />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <MobileCta />
    </>
  );
}

function Eyebrow({
  children,
  light,
  center,
}: {
  children: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] ${
        light ? "text-white/70" : "text-brand-red"
      } ${center ? "justify-center" : ""}`}
    >
      <span className="h-px w-8 bg-brand-red" />
      {children}
    </p>
  );
}

function ReviewAuthor({ name, timeAgo }: { name: string; timeAgo: string }) {
  return (
    <figcaption className="mt-8 flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white font-heading text-sm font-extrabold text-brand-black">
        {name.charAt(0)}
      </span>
      <span>
        <span className="block text-sm font-bold text-white">{name}</span>
        <span className="flex items-center gap-1.5 text-xs text-white/50">
          <GoogleIcon />
          Google review &middot; {timeAgo}
        </span>
      </span>
    </figcaption>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1.1.5 1.1 1.1v3.6c0 .6-.5 1.1-1.1 1.1C10.6 21.3 2.7 13.4 2.7 3.1 2.7 2.5 3.2 2 3.8 2h3.6c.6 0 1.1.5 1.1 1.1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
      <path fill="#4285F4" d="M22.6 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.3-4.8 3.3-8Z" />
      <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1.1-3.7 1.1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.8 14.2a6.6 6.6 0 0 1 0-4.3V7.1H2.1a11 11 0 0 0 0 9.9l3.7-2.8Z" />
      <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4Z" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4V3h6v1M9 11h6M9 15h4" />
    </svg>
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
