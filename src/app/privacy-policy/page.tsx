import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { BUSINESS } from "@/lib/constants";

const LAST_UPDATED = "November 6, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${BUSINESS.name} collects, uses, and protects your personal information, including information from our website, advertising, and social media.`,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | All County Construction Services",
    url: `${BUSINESS.url}/privacy-policy`,
  },
};

type Section = { id: string; title: string; body: ReactNode };

const SECTIONS: Section[] = [
  {
    id: "who-we-are",
    title: "Who We Are",
    body: (
      <>
        <p>
          {BUSINESS.name} (&ldquo;All County,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) is a licensed and insured general contractor serving{" "}
          {BUSINESS.serviceArea}. This Privacy Policy explains how we collect, use, share, and
          protect personal information when you visit{" "}
          <a href={BUSINESS.url}>allcountyfl.com</a> (the &ldquo;Site&rdquo;), respond to our
          advertising (including on Facebook and Instagram), or otherwise contact us.
        </p>
        <p>
          By using the Site or submitting your information to us, you agree to the practices
          described in this policy.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: (
      <>
        <h3>Information you give us</h3>
        <p>When you request an estimate, fill out a form, call, text, or email us, we may collect:</p>
        <ul>
          <li>Your name, phone number, and email address</li>
          <li>Your project location (such as your city or address)</li>
          <li>Details you share about your project, home, timeline, and budget</li>
          <li>Any photos or other information you choose to send us</li>
        </ul>

        <h3>Information from Facebook, Instagram, and other platforms</h3>
        <p>
          If you respond to one of our ads or submit a lead form on Facebook or Instagram (Meta),
          Meta shares with us the information you choose to submit in that form &mdash; typically
          your name, phone number, email address, and answers to any project questions. If you
          message us on social media, we receive the content of your messages and your public
          profile name.
        </p>

        <h3>Information collected automatically</h3>
        <p>
          When you visit the Site, we and our service providers may automatically collect
          technical information such as your IP address, browser and device type, pages viewed,
          the website that referred you, and the date and time of your visit. This may be
          collected using cookies, pixels, and similar technologies (see{" "}
          <a href="#cookies">Cookies &amp; Tracking</a>).
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiry and schedule your free estimate or consultation</li>
          <li>Prepare estimates, perform work, and communicate with you about your project</li>
          <li>Send follow-ups, appointment reminders, and service-related messages</li>
          <li>
            Measure and improve the performance of our website and advertising, and show relevant
            ads to people who may be interested in our services
          </li>
          <li>Maintain business records, prevent spam and fraud, and keep our Site secure</li>
          <li>Comply with legal obligations and enforce our agreements</li>
        </ul>
      </>
    ),
  },
  {
    id: "advertising",
    title: "Advertising & Social Media",
    body: (
      <>
        <p>
          We advertise on platforms such as Facebook and Instagram (operated by Meta Platforms,
          Inc.) and may advertise on Google. To understand how our ads perform and to reach
          people likely to be interested in our services, we may use tools such as the Meta
          Pixel, Meta Conversions API, Custom Audiences, and Lead Ads.
        </p>
        <p>
          These tools may allow Meta and other advertising partners to collect or receive
          information from the Site and from your interactions with our ads &mdash; such as
          pages you visit and whether you submitted a form &mdash; and to use that information to
          deliver, measure, and improve ads. Where we upload contact information to create a
          Custom Audience, it is hashed (encoded) before being sent so that it is used only for
          matching.
        </p>
        <p>
          Meta&rsquo;s use of information is governed by its own{" "}
          <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          . You can control the ads you see on Facebook and Instagram in your{" "}
          <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer">
            Ad Preferences
          </a>
          , and you can opt out of interest-based advertising from many companies at{" "}
          <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">
            aboutads.info
          </a>{" "}
          and{" "}
          <a href="https://youradchoices.com/" target="_blank" rel="noopener noreferrer">
            youradchoices.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "How We Share Information",
    body: (
      <>
        <p>
          <strong>We do not sell your personal information,</strong> and we do not share it with
          third parties for their own marketing purposes. We share information only as follows:
        </p>
        <ul>
          <li>
            <strong>Service providers</strong> that help us operate our business &mdash; for
            example, website hosting, form delivery (our estimate form is delivered to us through
            Web3Forms), email, scheduling, and advertising platforms. They may use your
            information only to provide services to us.
          </li>
          <li>
            <strong>Subcontractors and suppliers</strong> involved in your project, only as
            needed to complete the work you requested.
          </li>
          <li>
            <strong>Legal and safety reasons</strong> &mdash; when required by law, subpoena, or
            court order, or to protect the rights, property, or safety of All County, our clients,
            or others.
          </li>
          <li>
            <strong>Business transfers</strong> &mdash; in connection with a merger, sale, or
            transfer of all or part of our business.
          </li>
        </ul>
        <p>
          Mobile phone numbers and text-messaging opt-in consent are never sold or shared with
          third parties or affiliates for marketing purposes.
        </p>
      </>
    ),
  },
  {
    id: "communications",
    title: "Calls, Texts & Email",
    body: (
      <>
        <p>
          When you submit a form or contact us, you agree that we may contact you by phone, text
          message, or email about your inquiry and project. Message and data rates may apply,
          and message frequency varies based on your project.
        </p>
        <p>
          You can opt out of text messages at any time by replying <strong>STOP</strong>, and
          unsubscribe from emails using the link in the message or by contacting us. We may still
          send messages necessary to complete a project you have hired us for.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    body: (
      <>
        <p>
          Cookies are small files stored on your device. We and our partners may use cookies,
          pixels, and similar technologies to keep the Site working, understand how visitors use
          it, and measure and personalize advertising.
        </p>
        <p>
          Most browsers let you block or delete cookies in their settings. Blocking cookies may
          affect how parts of the Site work. Some browsers send &ldquo;Do Not Track&rdquo;
          signals; because there is no common standard for these signals, the Site does not
          currently respond to them.
        </p>
      </>
    ),
  },
  {
    id: "retention-security",
    title: "Data Retention & Security",
    body: (
      <>
        <p>
          We keep personal information for as long as needed to respond to you, complete and
          support your project (including warranty questions), and meet our legal, tax, and
          accounting obligations. When it is no longer needed, we delete it or keep it in a form
          that no longer identifies you.
        </p>
        <p>
          We use reasonable administrative, technical, and physical safeguards to protect your
          information, including encrypted (HTTPS) connections on the Site. No method of
          transmission or storage is completely secure, so we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Privacy Choices & Rights",
    body: (
      <>
        <p>
          Depending on where you live, you may have the right to request access to the personal
          information we hold about you, ask us to correct or delete it, or opt out of certain
          uses such as targeted advertising. We honor these requests for all of our customers,
          wherever they live.
        </p>
        <p>
          To make a request, contact us using the details below. We may need to verify your
          identity before acting on your request, and we will respond within a reasonable time
          and as required by applicable law. We will not discriminate against you for exercising
          your privacy rights.
        </p>
      </>
    ),
  },
  {
    id: "data-deletion",
    title: "Requesting Deletion of Your Data",
    body: (
      <>
        <p>
          You can ask us to delete the personal information we have about you &mdash; including
          information we received through a Facebook or Instagram lead form &mdash; at any time:
        </p>
        <ol>
          <li>
            Email <a href={BUSINESS.emailHref}>{BUSINESS.email}</a> with the subject line
            &ldquo;Delete My Data,&rdquo; or call us at{" "}
            <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>.
          </li>
          <li>
            Include your name and the phone number and/or email address you used to contact us so
            we can locate your records.
          </li>
          <li>
            We will confirm your request and delete your information within 30 days, except for
            records we are legally required to keep (for example, signed contracts and invoices).
          </li>
        </ol>
        <p>
          To remove our access to your Facebook account data, you can also go to your Facebook
          Settings &amp; Privacy &rarr; Settings &rarr; Apps and Websites, and remove any app or
          integration associated with us.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    body: (
      <p>
        Our services and Site are intended for adults. We do not knowingly collect personal
        information from children under 13. If you believe a child has provided us with personal
        information, please contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    body: (
      <p>
        The Site may link to websites and services we do not control, such as Google, Facebook,
        and Instagram. We are not responsible for the privacy practices of those third parties,
        and we encourage you to review their privacy policies.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. When we do, we will post the updated
        version on this page and change the &ldquo;Last updated&rdquo; date above. Your continued
        use of the Site after an update means you accept the revised policy.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-brand-black text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-brand-red/20 blur-[130px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]"
        />
        <div className="container-site relative py-20 sm:py-24">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
            <span className="h-px w-8 bg-brand-red" />
            Legal
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Privacy{" "}
            <span className="font-display font-medium italic text-brand-red">Policy</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Your trust matters to us &mdash; in your home and with your information. Here&rsquo;s
            exactly what we collect, why, and the choices you have.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs">
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80">
              Last updated: <span className="font-bold text-white">{LAST_UPDATED}</span>
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80">
              We never sell your personal information
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-[#f8f4f3] py-16 sm:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
          {/* Table of contents */}
          <aside className="hidden lg:sticky lg:top-36 lg:block lg:self-start">
            <nav
              aria-label="Privacy policy sections"
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red">
                On this page
              </p>
              <ol className="mt-4 space-y-1 text-sm">
                {SECTIONS.map((section, i) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex gap-3 rounded-lg px-2 py-1.5 text-brand-black/65 transition-colors hover:bg-brand-red/5 hover:text-brand-red"
                    >
                      <span className="w-5 font-heading text-xs font-bold text-brand-black/30 group-hover:text-brand-red">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    className="group flex gap-3 rounded-lg px-2 py-1.5 text-brand-black/65 transition-colors hover:bg-brand-red/5 hover:text-brand-red"
                  >
                    <span className="w-5 font-heading text-xs font-bold text-brand-black/30 group-hover:text-brand-red">
                      {String(SECTIONS.length + 1).padStart(2, "0")}
                    </span>
                    Contact Us
                  </a>
                </li>
              </ol>
            </nav>
          </aside>

          {/* Content */}
          <div className="min-w-0">
            <article className="rounded-[2rem] bg-white px-6 py-10 shadow-sm ring-1 ring-black/5 sm:px-12 sm:py-14">
              {SECTIONS.map((section, i) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="policy-section scroll-mt-36 border-b border-black/5 pb-10 pt-10 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <h2 className="flex items-baseline gap-4 text-2xl font-extrabold tracking-tight text-brand-black">
                    <span className="font-display text-xl font-medium italic text-brand-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </h2>
                  <div className="policy-prose mt-5">{section.body}</div>
                </section>
              ))}
            </article>

            {/* Contact */}
            <div
              id="contact"
              className="relative mt-8 scroll-mt-36 overflow-hidden rounded-[2rem] bg-brand-black px-6 py-10 text-white sm:px-12 sm:py-12"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-brand-red/25 blur-3xl"
              />
              <div className="relative">
                <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Questions about your{" "}
                  <span className="font-display font-medium italic text-brand-red">privacy?</span>
                </h2>
                <p className="mt-3 max-w-xl text-white/70">
                  Contact us to ask a question, update your information, or make a privacy or
                  deletion request.
                </p>
                <p className="mt-6 font-heading font-bold">{BUSINESS.name}</p>
                <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                  <a
                    href={BUSINESS.emailHref}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:border-brand-red hover:bg-brand-red/10"
                  >
                    <span className="text-white/50">Email</span>
                    <span className="font-semibold">{BUSINESS.email}</span>
                  </a>
                  <a
                    href={BUSINESS.phoneHref}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:border-brand-red hover:bg-brand-red/10"
                  >
                    <span className="text-white/50">Phone</span>
                    <span className="font-semibold">{BUSINESS.phoneDisplay}</span>
                  </a>
                </div>
                <p className="mt-4 text-xs text-white/45">{BUSINESS.locationLabel}</p>
              </div>
            </div>

            <p className="mt-8 text-center text-sm text-brand-black/50">
              <Link href="/bathroom-remodeling" className="font-semibold text-brand-red hover:underline">
                &larr; Back to Bathroom Remodeling
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
