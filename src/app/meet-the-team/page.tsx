import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import MobileCta from "@/components/MobileCta";
import Reveal from "@/components/Reveal";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the owners, leadership, and crew behind All County Construction Services, a licensed and insured contractor serving Central Florida.",
  alternates: { canonical: "/meet-the-team" },
  openGraph: {
    title: "Meet the Team | All County Construction Services",
    description: "The owners, leadership, and crew behind All County Construction Services.",
    url: `${BUSINESS.url}/meet-the-team`,
  },
};

const TEAM = [
  {
    name: "Angelica Perrin",
    role: "Chief Financial Officer",
    image: "/images/team/angelica-perrin.jpg",
    bio: "Keeps every project on solid footing — from clear, written estimates to on-time invoicing and budgets you can count on.",
  },
  {
    name: "Jacquan Gonzalez",
    role: "Project Manager",
    image: "/images/team/jacquan-gonzalez.jpg",
    bio: "Your point of contact on site — coordinating crews, schedules, and permits so your remodel runs smoothly from start to finish.",
  },
  {
    name: "Jisandra Gonzalez",
    role: "Administrative Assistant",
    image: "/images/team/jisandra-gonzalez.jpg",
    bio: "The friendly voice behind scheduling and follow-ups, making sure every call, estimate, and question gets a quick answer.",
  },
];

const CREW_PHOTOS = [
  { src: "/images/team/crew-7.jpg", alt: "All County crew member preparing a wall for finishing" },
  { src: "/images/team/crew-1.jpg", alt: "Crew member reviewing framing on a job site" },
  { src: "/images/team/crew-5.jpg", alt: "Crew member installing a window in an All County shirt" },
  { src: "/images/team/crew-9.jpg", alt: "Crew member installing ceiling insulation" },
  { src: "/images/team/crew-2.jpg", alt: "Crew member measuring framing during a build-out" },
  { src: "/images/team/crew-8.jpg", alt: "Crew member cutting an opening in drywall" },
  { src: "/images/team/crew-6.jpg", alt: "Crew member clearing a job site" },
  { src: "/images/team/crew-4.jpg", alt: "Crew member reviewing plans posted on framing" },
];

const VALUES = [
  {
    title: "You talk to the owners",
    description: "Questions get answered directly — by phone or text — from your first call to final walkthrough.",
  },
  {
    title: "We're on the job",
    description: "Ownership stays hands-on, checking the work and keeping your project on schedule.",
  },
  {
    title: "We stand behind our work",
    description: "Our name is on every job, so every detail has to be right before we call it done.",
  },
];

const PILLARS = [
  {
    title: "Craftsmanship",
    description: "Precision, quality, and attention to detail in every build.",
    icon: <HammerIcon />,
  },
  {
    title: "Transparency",
    description: "Clear written estimates, honest timelines, and no surprises.",
    icon: <HandshakeIcon />,
  },
  {
    title: "Respect",
    description: "For your home, your business, your time, and your vision.",
    icon: <PeopleIcon />,
  },
  {
    title: "Reliability",
    description: "A licensed, insured team you can count on from estimate to completion.",
    icon: <ShieldIcon />,
  },
];

export default function MeetTheTeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-black text-white">
        <div className="absolute inset-0 overflow-hidden md:left-[38%]">
          <Image
            src="/images/team/crew-5.jpg"
            alt="All County crew member installing a window, wearing a company shirt"
            fill
            priority
            sizes="(min-width: 768px) 62vw, 100vw"
            className="hero-zoom object-cover object-[center_40%]"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,#161616_0%,#161616_36%,rgba(22,22,22,0.92)_44%,rgba(22,22,22,0.55)_56%,rgba(22,22,22,0.12)_72%,transparent_86%)] max-md:bg-none max-md:bg-brand-black/75"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent"
        />
        <div className="container-site relative flex min-h-[560px] items-center py-20 lg:min-h-[640px]">
          <Reveal className="max-w-xl">
            <Eyebrow light>About All County</Eyebrow>
            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl">
              Meet the{" "}
              <span className="font-display font-medium italic text-brand-red">heart</span> of
              All County
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
              An owner-operated, licensed and insured construction company serving{" "}
              {BUSINESS.serviceArea}. When you hire All County, you work directly with the
              people who own the company and stand behind every job.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/bathroom-remodeling#estimate"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-4 text-sm font-bold text-white shadow-lg shadow-brand-red/30 transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark"
              >
                Request a Free Estimate
                <ArrowIcon />
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white hover:text-brand-black"
              >
                <PhoneIcon />
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Owners */}
      <section className="container-site py-24 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal className="relative">
            <div
              aria-hidden
              className="absolute -bottom-5 -left-5 h-full w-full rounded-[2rem] border-2 border-brand-red/25"
            />
            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/15">
              <Image
                src="/images/team/owners.jpg"
                alt="The owners of All County Construction Services"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>The Owners</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-brand-black sm:text-[2.75rem]">
              Owner-operated,{" "}
              <span className="font-display font-medium italic text-brand-red">
                personally accountable
              </span>
            </h2>
            <p className="mt-5 text-brand-black/65">
              All County Construction Services is owned and run by the people you&rsquo;ll meet on
              your project. We answer our own phones, walk every job, and treat each home and
              business like our own &mdash; which is why our clients keep calling us back.
            </p>
            <ul className="mt-8 space-y-5">
              {VALUES.map((v) => (
                <li key={v.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-red text-white shadow-md shadow-brand-red/30">
                    <CheckIcon />
                  </span>
                  <span>
                    <span className="block font-heading font-bold text-brand-black">{v.title}</span>
                    <span className="mt-1 block text-sm text-brand-black/60">{v.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Leadership & office */}
      <section className="bg-[#f8f4f3] py-24 sm:py-28">
        <div className="container-site">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow center>Our People</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-black sm:text-[2.75rem]">
              The faces behind{" "}
              <span className="font-display font-medium italic text-brand-red">your project</span>
            </h2>
            <p className="mt-4 text-brand-black/65">
              From your first call to your final walkthrough, these are the people keeping your
              project organized, on budget, and on schedule.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 120}>
                <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/10">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-brand-red px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                      {member.role}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-extrabold tracking-tight text-brand-black">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-black/65">{member.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Crew at work — text column beside a photo mosaic */}
      <section className="relative overflow-hidden bg-brand-black py-24 text-white sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-red/20 blur-[140px]"
        />
        <div className="container-site relative grid gap-12 lg:grid-cols-[0.75fr_2.25fr] lg:items-center">
          <Reveal>
            <Eyebrow light>On the Job</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-[2.75rem]">
              Our crew{" "}
              <span className="font-display font-medium italic text-brand-red">at work</span>
            </h2>
            <span className="mt-5 block h-0.5 w-12 bg-brand-red" />
            <p className="mt-5 text-white/65">
              A hands-on look at our team in action &mdash; framing, insulating, installing, and
              finishing with the care our Central Florida clients expect. Skilled, careful, and
              proud to wear the All County name on every job site.
            </p>
            <Link
              href="/bathroom-remodeling#work"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-brand-red"
            >
              See our finished projects
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-red text-white transition-transform group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
          </Reveal>

          <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[170px] sm:grid-cols-3 sm:gap-4">
            {CREW_PHOTOS.map((photo, i) => (
              <Reveal
                key={photo.src}
                delay={(i % 4) * 80}
                className={`group relative overflow-hidden rounded-2xl bg-white/5 ${
                  i === 0
                    ? "col-span-2 row-span-2 sm:col-span-1"
                    : i === 7
                      ? "col-span-2 sm:col-span-1"
                      : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-site py-24 sm:py-28">
        <Reveal className="max-w-2xl">
          <Eyebrow>Our Values</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-black sm:text-[2.75rem]">
            What drives our{" "}
            <span className="font-display font-medium italic text-brand-red">work</span>
          </h2>
          <p className="mt-4 text-brand-black/65">
            The values that guide our team, our projects, and every client relationship.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="group h-full rounded-3xl border border-black/[0.07] bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-black/10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red transition-colors duration-500 group-hover:bg-brand-red group-hover:text-white">
                  {p.icon}
                </span>
                <h3 className="mt-6 text-lg font-bold text-brand-black">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-black/65">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA — full-width red palm banner (matches design) */}
      <section className="relative overflow-hidden bg-[#8f0d0b] pb-28 pt-20 text-center text-white sm:py-24">
        <Image
          src="/images/cta-red-palms.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
        <Reveal className="container-site relative block">
          <h2 className="mx-auto max-w-5xl text-3xl font-extrabold leading-tight tracking-tight sm:text-[2.9rem]">
            Let&rsquo;s Build Something{" "}
            <span className="font-display font-semibold italic text-[#ff5b54]">Beautiful</span>{" "}
            Together
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
            Ready to remodel your bathroom or start a new construction project in Central Florida?
            Schedule a consultation with our team and let&rsquo;s bring your vision to life.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/bathroom-remodeling#estimate"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-sm font-bold text-brand-red shadow-xl shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-brand-black hover:text-white sm:text-base"
            >
              Book a Consultation
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
            <Link
              href="/bathroom-remodeling#work"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/90 px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-brand-red sm:text-base"
            >
              <ImageIcon />
              View Our Work
            </Link>
          </div>
        </Reveal>
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

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
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

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1.1.5 1.1 1.1v3.6c0 .6-.5 1.1-1.1 1.1C10.6 21.3 2.7 13.4 2.7 3.1 2.7 2.5 3.2 2 3.8 2h3.6c.6 0 1.1.5 1.1 1.1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
    </svg>
  );
}

function HammerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 6l4 4M12.5 7.5L4 16a1.4 1.4 0 0 0 0 2l2 2a1.4 1.4 0 0 0 2 0l8.5-8.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4l3-1 7 7-1 3-2-2-2 1-6-6 1-2Z" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12l4-4 4 2 3-2 3 1 4 3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 8v6l5 5a1.5 1.5 0 0 0 2-2M13 17l1 1a1.5 1.5 0 0 0 2-2l-1-1M15 15l1 1a1.5 1.5 0 0 0 2-2l-3-3M20 11v3l-2 2" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
      <circle cx="9" cy="8" r="3.2" />
      <path strokeLinecap="round" d="M3 20a6 6 0 0 1 12 0" />
      <circle cx="17" cy="9" r="2.4" />
      <path strokeLinecap="round" d="M16 14.2A4.5 4.5 0 0 1 21 19" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 16l-5-5-9 9" />
    </svg>
  );
}
