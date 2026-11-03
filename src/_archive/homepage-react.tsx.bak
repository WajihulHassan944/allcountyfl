import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { GOOGLE_REVIEWS } from "@/lib/reviews";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

const SERVICES = [
  {
    title: "Bathroom Remodeling",
    description:
      "Full bathroom remodels, custom showers, tile, vanities, and fixtures for homeowners across Central Florida.",
    href: "/bathroom-remodeling",
    highlight: true,
  },
  {
    title: "Tenant Build-Outs",
    description:
      "We create custom interiors for retail, corporate, and medical spaces. From space planning to final finishes, our build-outs are designed for functionality, compliance, and long-term performance.",
    href: "/#contact",
  },
  {
    title: "Commercial Remodeling",
    description:
      "Whether it's updating outdated spaces or transforming large facilities, our remodeling services improve efficiency, modernize interiors, and align with your business goals.",
    href: "/#contact",
  },
  {
    title: "Windows & Doors",
    description:
      "Durable, energy-efficient, and secure solutions that improve both the performance and appearance of your property. We handle installation, replacement, and upgrades.",
    href: "/#contact",
  },
  {
    title: "Painting",
    description:
      "Professional interior and exterior painting that not only refreshes the look of your building but also protects it against wear, weather, and time.",
    href: "/#contact",
  },
  {
    title: "Flooring & Trim",
    description:
      "From hardwood to tile and everything in between, we install and finish floors that stand up to heavy use. Precision trim work completes the polished look.",
    href: "/#contact",
  },
  {
    title: "Roofing & Skylights",
    description:
      "Strong, reliable roofing backed by expert installation. Skylights and gutter systems add natural light and protection, enhancing the overall value of your property.",
    href: "/#contact",
  },
];

const WHY_CHOOSE_US = [
  {
    title: "Experience You Can Trust",
    description:
      "With years of proven expertise, we deliver projects that meet the highest standards of quality. Our skilled team brings reliability and consistency to every build.",
  },
  {
    title: "Highest Safety First",
    description:
      "Safety isn't optional, it's our priority. Every project adheres to strict safety protocols and code compliance to safeguard your personnel, property, and investment.",
  },
  {
    title: "Innovative Solutions",
    description:
      "We use modern techniques and smart planning to build efficient, cost-effective spaces designed to fit your business today and support its growth tomorrow.",
  },
];

const BADGES = ["On Time & On Budget", "Code-Compliant", "Transparent", "Reliable"];

const FEATURED_PROJECTS = [
  { title: "Modern Residential Villa", category: "Residential Construction", src: "/images/featured-villa.jpg" },
  { title: "Corporate Office Complex", category: "Commercial Construction", src: "/images/commercial-facade.jpg" },
  { title: "Retail Shopping Center", category: "Commercial Construction", src: "/images/crane-sunset.jpg" },
  { title: "Industrial Manufacturing Plant", category: "Industrial Construction", src: "/images/hero-construction.jpg" },
];

const FAQS = [
  {
    q: "What types of construction projects do you handle?",
    a: "We specialize in a wide range of construction projects, including residential homes, commercial buildings, industrial facilities, and renovation services. Our team is experienced in delivering high-quality results tailored to each client's unique needs.",
  },
  {
    q: "How long does a typical construction project take?",
    a: "The timeline depends on the size and complexity of the project. Residential projects may take a few months, while larger commercial or industrial construction may require more time. We always provide a clear project schedule to keep you informed every step of the way.",
  },
  {
    q: "Do you provide free construction estimates?",
    a: "Yes, we offer free and transparent construction estimates. Our experts will assess your project requirements and provide a detailed cost breakdown to help you plan your budget with confidence.",
  },
  {
    q: "Are your construction services licensed and insured?",
    a: "Absolutely. We are a fully licensed and insured construction company, ensuring that every project meets industry standards and provides our clients with peace of mind throughout the building process.",
  },
  {
    q: "Can you assist with custom design and architecture?",
    a: "Yes, we work closely with architects and designers to create custom construction solutions. From concept to completion, we ensure your project aligns with your vision while meeting structural and safety requirements.",
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
          className="object-cover object-top opacity-15 grayscale contrast-125"
        />
        <div className="container-site relative py-24 sm:py-32">
          <Reveal>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
              Built Right. On Code. On Time.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              At All County Construction, we specialize in high-quality commercial remodeling,
              tenant build-outs, bathroom remodeling, and office fit-outs across{" "}
              {BUSINESS.serviceArea}. Our experienced team delivers precise, code-compliant
              construction &mdash; on time and on budget.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={BUSINESS.phoneHref}
                className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-red-dark"
              >
                Get a Free Estimate
              </a>
              <Link
                href="/bathroom-remodeling"
                className="rounded-full border-2 border-white px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand-black"
              >
                Bathroom Remodeling
              </Link>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-14 flex flex-wrap gap-10 sm:gap-16">
              <div>
                <p className="text-4xl font-extrabold text-brand-red">120+</p>
                <p className="mt-1 text-sm text-white/70">Projects Complete</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-brand-red">98%</p>
                <p className="mt-1 text-sm text-white/70">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-brand-red">5.0 / 5</p>
                <p className="mt-1 text-sm text-white/70">Average Google Rating</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container-site py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-wide text-brand-red">
              About All County
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-brand-black sm:text-4xl">
              Construction Without Compromise.
            </h2>
            <p className="mt-4 text-brand-black/75">
              From first bid to final walkthrough, All County Construction doesn&rsquo;t cut
              corners. We deliver code-compliant, high-performance spaces with transparency and
              care. Honesty, craftsmanship, and respect guide every project we take on.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-block rounded-full bg-brand-black px-6 py-3 text-sm font-bold text-white hover:bg-brand-red"
            >
              About Us
            </Link>
          </Reveal>
          <Reveal delay={150} className="relative h-72 overflow-hidden rounded-2xl sm:h-96">
            <Image
              src="/images/teamwork.jpg"
              alt="All County Construction team"
              fill
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-zinc-50 py-20">
        <div className="container-site">
          <Reveal>
            <p className="text-center text-sm font-bold uppercase tracking-wide text-brand-red">
              Experience You Can Trust
            </p>
            <h2 className="mt-2 text-center text-3xl font-extrabold text-brand-black sm:text-4xl">
              Why Choose All County Construction?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-brand-black/70">
              At All County Construction, we deliver more than projects &mdash; we deliver
              confidence. With a focus on precision, integrity, and lasting value, we ensure
              every build is completed to the highest standard.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-white px-4 py-2 text-xs font-bold text-brand-black shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="mt-12 grid gap-8 sm:grid-cols-3">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-black/70">{item.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container-site py-20">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-brand-black sm:text-4xl">
            Professional Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-brand-black/70">
            At All County Construction, we offer a full spectrum of commercial and residential
            construction services across {BUSINESS.serviceArea}. Every project is handled with
            code-compliance, quality craftsmanship, and attention to detail.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 100}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-7 transition-shadow hover:shadow-lg ${
                  service.highlight ? "border-brand-red bg-brand-red/5" : "border-black/10"
                }`}
              >
                <h3 className="text-xl font-bold text-brand-black">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm text-brand-black/70">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-5 text-sm font-bold text-brand-red hover:underline"
                >
                  {service.highlight ? "View Bathroom Remodeling" : "Read More"} &rarr;
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section id="projects" className="bg-brand-black py-20 text-white">
        <div className="container-site">
          <Reveal>
            <h2 className="text-center text-3xl font-extrabold sm:text-4xl">
              Showcasing Excellence in Every Build
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-white/70">
              We take pride in delivering construction projects that stand strong for
              generations. Explore some of our featured work below.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PROJECTS.map((project, i) => (
              <Reveal key={project.title} delay={(i % 4) * 100}>
                <div className="group relative h-64 overflow-hidden rounded-2xl">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">
                      {project.category}
                    </p>
                    <p className="text-sm font-bold">{project.title}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container-site py-20">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-brand-black sm:text-4xl">
            What Our Clients Say About Us
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-brand-black/70">
            We take pride in delivering construction solutions that exceed expectations. Here
            are real Google reviews from our clients.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GOOGLE_REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={(i % 3) * 100}>
              <div className="flex h-full flex-col rounded-2xl bg-zinc-50 p-6">
                <div className="flex text-brand-red">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="mt-3 flex-1 text-sm text-brand-black/75">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4">
                  <p className="text-sm font-bold text-brand-black">{review.name}</p>
                  <p className="text-xs text-brand-black/50">
                    Google review &middot; {review.timeAgo}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-50 py-20">
        <div className="container-site">
          <Reveal>
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
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <Reveal className="container-site">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-extrabold text-brand-black sm:text-4xl">
              Let&rsquo;s Build Your Vision
            </h2>
            <p className="mt-3 text-brand-black/70">
              Have a question about our construction services, pricing, or ongoing projects? Our
              team is ready to assist you.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
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
          <div className="mx-auto mt-10 max-w-xl">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9L10 1.5z" />
    </svg>
  );
}
