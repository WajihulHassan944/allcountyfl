import { BUSINESS } from "@/lib/constants";

export default function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-black/10 bg-white p-3 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] sm:hidden">
      <a
        href={BUSINESS.phoneHref}
        className="flex flex-1 items-center justify-center rounded-full bg-brand-red py-3 text-sm font-bold text-white"
      >
        Call Now
      </a>
      <a
        href="#estimate"
        className="flex flex-1 items-center justify-center rounded-full border-2 border-brand-black py-3 text-sm font-bold text-brand-black"
      >
        Free Estimate
      </a>
    </div>
  );
}
