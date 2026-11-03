"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top utility bar */}
      <div className="hidden bg-brand-red text-white sm:block">
        <div className="container-site flex h-10 items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <PinIcon />
              {BUSINESS.locationLabel}
            </span>
            <a href={BUSINESS.phoneHref} className="flex items-center gap-1.5 hover:underline">
              <PhoneIcon />
              {BUSINESS.phoneDisplay}
            </a>
            <a href={BUSINESS.emailHref} className="flex items-center gap-1.5 hover:underline">
              <MailIcon />
              {BUSINESS.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            {[FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon].map((Icon, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15"
              >
                <Icon />
              </span>
            ))}
          </div>
        </div>
      </div>

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

        <nav className="hidden items-center gap-5 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 text-sm font-semibold whitespace-nowrap transition-colors hover:text-brand-red ${
                  isActive
                    ? "text-brand-red after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-brand-red"
                    : "text-brand-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-brand-red px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-red-dark sm:flex"
          >
            <PhoneIcon />
            Get Free Quote
          </a>
          <a
            href={BUSINESS.phoneHref}
            aria-label={`Call ${BUSINESS.phoneDisplay}`}
            className="flex items-center justify-center rounded-full bg-brand-red p-2.5 text-white sm:hidden"
          >
            <PhoneIcon />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 lg:hidden"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
{menuOpen && (
        <nav className="border-t border-black/10 bg-white lg:hidden">
          <div className="container-site flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-semibold text-brand-black hover:bg-zinc-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
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

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M12 2a7 7 0 00-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M2 5a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 0l8 6 8-6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
      <path d="M13.5 9H15V6h-1.5C11.6 6 10 7.6 10 9.5V11H8v3h2v7h3v-7h2.2l.8-3H13v-1.5c0-.3.2-.5.5-.5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3 w-3">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
      <path d="M22 12s0-3.4-.4-5a2.8 2.8 0 0 0-2-2C17.9 4.5 12 4.5 12 4.5s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2C2 8.6 2 12 2 12s0 3.4.4 5a2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2c.4-1.6.4-5 .4-5ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
      <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.84-2 3.78-2 4 0 4.75 2.6 4.75 6V21h-4v-5.3c0-1.26-.02-2.9-1.76-2.9-1.76 0-2.03 1.37-2.03 2.8V21h-4V9Z" />
    </svg>
  );
}
