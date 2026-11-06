import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.1fr_0.8fr_0.8fr]">
        <div>
          <Image
            src="/images/logo.png"
            alt="All County Construction Services logo"
            width={64}
            height={64}
          />
          <h3 className="mt-4 text-xl font-bold">{BUSINESS.name}</h3>
          <p className="mt-2 max-w-xs text-sm text-white/70">
            Commercial Remodeling, Build-Outs &amp; Bathroom Remodeling Across Central Florida
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={BUSINESS.phoneHref} className="hover:text-white">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li className="text-white/60">{BUSINESS.locationLabel}</li>
            <li>
              <a href={BUSINESS.emailHref} className="hover:text-white">
                {BUSINESS.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-brand-red">Top Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-brand-red">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/#projects" className="hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#testimonials" className="hover:text-white">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/bathroom-remodeling" className="hover:text-white">
                Bathroom Remodeling
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-site flex flex-col items-center justify-between gap-2 text-xs text-white/60 sm:flex-row">
          <p>
            &copy; {CURRENT_YEAR} {BUSINESS.name} All Rights Reserved.
          </p>
          <p className="flex items-center gap-4">
            <span>Licensed &amp; insured general contractor.</span>
            <Link href="/privacy-policy" className="underline-offset-2 hover:text-white hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
