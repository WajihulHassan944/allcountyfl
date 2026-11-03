import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

const SERVICES = [
  {
    title: "Bathroom Remodeling",
    description:
      "Full bathroom remodels, showers, tile, vanities, and fixtures for homeowners across Central Florida.",
    href: "/bathroom-remodeling",
    cta: "View Bathroom Remodeling",
  },
  {
    title: "Commercial Construction",
    description:
      "Commercial renovations, tenant improvements, interior construction, and facility upgrades for businesses.",
    href: "/#contact",
    cta: "Request a Consultation",
  },
  {
    title: "Government & Secure Facilities",
    description:
      "Project management, subcontractor coordination, and controlled-environment construction experience for public-sector work.",
    href: "/#contact",
    cta: "Discuss Your Project",
  },
];

const WHY_CHOOSE_US = [
  {
    title: "Licensed & Insured",
    description:
      "Every project meets industry standards and gives clients peace of mind from start to finish.",
  },
  {
    title: "On Code. On Time.",
    description:
      "We plan and manage every build to stay on schedule and in full compliance with local codes.",
  },
  {
    title: "Experienced Team",
    description:
      "From residential bathrooms to commercial and government facilities, our team manages projects of every scale.",
  },
];

const FAQS = [
  {
    q: "Are your construction services licensed and insured?",
    a: "Absolutely. We are a fully licensed and insured construction company, ensuring that every project meets industry standards and provides our clients with peace of mind throughout the building process.",
  },
  {
    q: "What areas do you serve?",
    a: `We proudly serve ${BUSINESS.serviceArea}.`,
  },
  {
    q: "How do I get a free estimate?",
    a: `Call us at ${BUSINESS.phoneDisplay} or use the contact form below and our team will follow up with next steps.`,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-black text-white">
        <Image
          src="/images/hero-construction.jpg"
          alt="All County Construction job site"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="container-site relative py-24 sm:py-32">
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Built Right. On Code. On Time.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">
            All County Construction Services, Inc. delivers bathroom remodeling, commercial
            construction, and government &amp; secure facility projects across{" "}
            {BUSINESS.serviceArea}.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-red-dark"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
            <Link
              href="/bathroom-remodeling"
              className="rounded-full border-2 border-white px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand-black"
            >
              Get a Bathroom Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container-site py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand-red">
              About All County
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-brand-black sm:text-4xl">
              Construction Without Compromise.
            </h2>
            <p className="mt-4 text-brand-black/75">
              All County Construction Services, Inc. brings together residential, commercial,
              and government construction expertise under one team &mdash; managing every
              project with careful planning, clear communication, and quality craftsmanship.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-block rounded-full bg-brand-black px-6 py-3 text-sm font-bold text-white hover:bg-brand-red"
            >
              About Us
            </Link>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl sm:h-96">
            <Image
              src="/images/teamwork.jpg"
              alt="All County Construction team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-zinc-50 py-20">
        <div className="container-site">
          <h2 className="text-center text-3xl font-extrabold text-brand-black sm:text-4xl">
            Why Choose All County Construction?
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-black/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container-site py-20">
        <h2 className="text-center text-3xl font-extrabold text-brand-black sm:text-4xl">
          Professional Services
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-2xl border border-black/10 p-7"
            >
              <h3 className="text-xl font-bold text-brand-black">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm text-brand-black/70">{service.description}</p>
              <Link
                href={service.href}
                className="mt-5 text-sm font-bold text-brand-red hover:underline"
              >
                {service.cta} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-brand-black py-20 text-white">
        <div className="container-site">
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl">
            Showcasing Excellence in Every Build
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { src: "/images/commercial-facade.jpg", alt: "Commercial construction project" },
              { src: "/images/crane-sunset.jpg", alt: "Construction site at sunset" },
              { src: "/images/worker-smiling.jpg", alt: "All County Construction crew member" },
            ].map((img) => (
              <div key={img.src} className="relative h-64 overflow-hidden rounded-2xl">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-site py-20">
        <h2 className="text-center text-3xl font-extrabold text-brand-black sm:text-4xl">
          Common Questions About Our Construction
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
      </section>

      {/* Contact */}
      <section className="bg-zinc-50 py-20">
        <div className="container-site text-center">
          <h2 className="text-3xl font-extrabold text-brand-black sm:text-4xl">
            Let&rsquo;s Build Your Vision
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-black/70">
            Have a question about our construction services, pricing, or ongoing projects? Our
            team is ready to assist you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-bold text-white hover:bg-brand-red-dark"
            >
              {BUSINESS.phoneDisplay}
            </a>
            <a
              href={BUSINESS.emailHref}
              className="rounded-full border-2 border-brand-black px-7 py-3.5 text-sm font-bold text-brand-black hover:bg-brand-black hover:text-white"
            >
              {BUSINESS.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
