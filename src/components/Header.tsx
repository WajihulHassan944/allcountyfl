import Link from "next/link";
import Image from "next/image";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-site flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="All County Construction Services logo"
            width={52}
            height={52}
            priority
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-lg font-bold text-brand-black">All County</span>
            <span className="text-xs font-semibold tracking-wide text-brand-red">
              CONSTRUCTION SERVICES
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-brand-black transition-colors hover:text-brand-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-brand-red px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-red-dark sm:flex"
          >
            <PhoneIcon />
            {BUSINESS.phoneDisplay}
          </a>
          <a
            href={BUSINESS.phoneHref}
            aria-label={`Call ${BUSINESS.phoneDisplay}`}
            className="flex items-center justify-center rounded-full bg-brand-red p-2.5 text-white sm:hidden"
          >
            <PhoneIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1.1.5 1.1 1.1v3.6c0 .6-.5 1.1-1.1 1.1C10.6 21.3 2.7 13.4 2.7 3.1 2.7 2.5 3.2 2 3.8 2h3.6c.6 0 1.1.5 1.1 1.1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
    </svg>
  );
}
