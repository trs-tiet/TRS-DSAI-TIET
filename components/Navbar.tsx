"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import Countdown from "./Countdown";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/speakers", label: "Speakers" },
  { href: "/schedule", label: "Schedule" },
  { href: "/exhibitions", label: "Exhibitions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="wrap flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-2.5 text-[19px] font-semibold font-display">
          <span className="inline-block h-[9px] w-[9px] bg-crimson" />
          {site.eventName}
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-[14.5px] font-medium">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="relative group py-1">
              {l.label}
              <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-crimson transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          {scrolled && (
            <div className="text-xs text-steel font-medium">
              <Countdown compact />
            </div>
          )}
          <a
            href={site.registerUrl}
            className="bg-navy text-white px-5 py-2.5 text-[14px] font-semibold rounded-sm hover:bg-navy-deep transition-colors"
          >
            Register now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-[1.5px] w-6 bg-ink" />
          <span className="block h-[1.5px] w-6 bg-ink" />
          <span className="block h-[1.5px] w-4 bg-ink" />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-paper border-t border-line px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[15px] font-medium py-1">
              {l.label}
            </Link>
          ))}
          <a
            href={site.registerUrl}
            className="bg-navy text-white px-5 py-3 text-center text-[14px] font-semibold rounded-sm mt-2"
          >
            Register now
          </a>
        </div>
      )}
    </header>
  );
}
