"use client";

import Image from "next/image";
import { useCallback, useRef, useState, type PointerEvent } from "react";

type Props = {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  className?: string;
};

/**
 * Drag-to-compare before/after image slider. Works with mouse, touch, and
 * keyboard (the handle is a focusable slider controlled with arrow keys).
 */
export default function BeforeAfter({ before, after, className = "" }: Props) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    update(e.clientX);
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (dragging) update(e.clientX);
  }

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
      className={`relative cursor-ew-resize touch-pan-y select-none overflow-hidden ${className}`}
    >
      <Image
        src={after.src}
        alt={after.alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="pointer-events-none object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        aria-hidden
      >
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="pointer-events-none object-cover"
          draggable={false}
        />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-brand-red px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_20px_rgba(0,0,0,0.35)]"
        style={{ left: `${pos}%` }}
      />
      <div
        role="slider"
        tabIndex={0}
        aria-label="Compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
          if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
        }}
        className="absolute top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-black shadow-2xl outline-none ring-brand-red/40 transition-transform focus-visible:ring-4 active:scale-95"
        style={{ left: `${pos}%` }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
        </svg>
      </div>
    </div>
  );
}
