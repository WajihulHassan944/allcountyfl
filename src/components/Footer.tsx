import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-black text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold">{BUSINESS.shortName}</h3>
          <p className="mt-3 max-w-xs text-sm text-white/70">
            Construction without compromise &mdash; serving {BUSINESS.serviceArea}.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-brand-red">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-brand-red">
            Contact Us
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={BUSINESS.phoneHref} className="hover:text-white">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={BUSINESS.emailHref} className="hover:text-white">
                {BUSINESS.email}
              </a>
            </li>
            <li className="text-white/60">{BUSINESS.serviceArea}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-site flex flex-col items-center justify-between gap-2 text-xs text-white/60 sm:flex-row">
          <p>
            &copy; {CURRENT_YEAR} {BUSINESS.name}. All rights reserved.
          </p>
          <p>Licensed &amp; insured general contractor.</p>
        </div>
      </div>
    </footer>
  );
}
