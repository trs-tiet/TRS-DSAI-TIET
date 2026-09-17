"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import Countdown from "./Countdown";
import SearchModal from "./SearchModal";
import ThemeToggle from "./ThemeToggle";

const flatLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/organizers", label: "Organizers" },
  { href: "/schedule", label: "Schedule" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/hands-on-experience", label: "Hands-on Experience" },
  { href: "/accommodation", label: "Accommodation & Travel" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact us" },
];

const speakersChildren = [
  { href: "/speakers/academia", label: "Academia" },
  { href: "/speakers/industrial", label: "Industrial" },
];

const placesChildren = [
  { href: "/places-to-visit/thapar", label: "In Thapar" },
  { href: "/places-to-visit/patiala", label: "In Patiala" },
];

function HoverDropdown({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="relative group py-1 flex items-center gap-1" aria-expanded={open}>
        {label}
        <svg width="9" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-crimson transition-all duration-200 group-hover:w-full" />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-3 w-44 z-10">
          <div className="bg-surface border border-line shadow-lg py-2">
            {items.map((c) => (
              <Link key={c.href} href={c.href} className="block px-4 py-2.5 text-[13.5px] hover:bg-paper transition-colors">
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

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
        scrolled ? "bg-paper/95 backdrop-blur shadow-sm" : "bg-paper"
      }`}
    >
      <div className="wrap flex items-center justify-between py-4 gap-4">
        <Link href="/" className="flex items-center gap-2.5 text-[17px] font-semibold font-display shrink-0">
          <span className="inline-block h-[9px] w-[9px] bg-crimson" />
          {site.eventName}
        </Link>

        <nav className="hidden xl:flex items-center gap-5 text-[13px] font-medium flex-wrap">
          {flatLinks.slice(0, 3).map((l) => (
            <Link key={l.href} href={l.href} className="relative group py-1">
              {l.label}
              <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-crimson transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
          <HoverDropdown label="Speakers" items={speakersChildren} />
          {flatLinks.slice(3).map((l) => (
            <Link key={l.href} href={l.href} className="relative group py-1">
              {l.label}
              <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-crimson transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
          <HoverDropdown label="Places to Visit" items={placesChildren} />
        </nav>

        <div className="hidden xl:flex items-center gap-2 shrink-0">
          {scrolled && (
            <div className="text-xs text-steel font-medium mr-1 whitespace-nowrap">
              <Countdown compact />
            </div>
          )}
          <SearchModal />
          <ThemeToggle />
          <a
            href={site.registerUrl}
            className="bg-navy text-white px-4 py-2.5 text-[13px] font-semibold rounded-sm hover:bg-navy-deep transition-colors whitespace-nowrap"
          >
            Register now
          </a>
        </div>

        <div className="flex items-center gap-1 xl:hidden">
          <SearchModal />
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-[1.5px] w-6 bg-fg" />
            <span className="block h-[1.5px] w-6 bg-fg" />
            <span className="block h-[1.5px] w-4 bg-fg" />
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden bg-paper border-t border-line px-6 pb-6 flex flex-col gap-4 max-h-[75vh] overflow-y-auto">
          {flatLinks.slice(0, 3).map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[15px] font-medium py-1">
              {l.label}
            </Link>
          ))}
          <div className="text-[15px] font-medium py-1">Speakers</div>
          <div className="pl-4 flex flex-col gap-3 -mt-2">
            {speakersChildren.map((c) => (
              <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="text-[14px] text-steel">
                {c.label}
              </Link>
            ))}
          </div>
          {flatLinks.slice(3).map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[15px] font-medium py-1">
              {l.label}
            </Link>
          ))}
          <div className="text-[15px] font-medium py-1">Places to Visit</div>
          <div className="pl-4 flex flex-col gap-3 -mt-2">
            {placesChildren.map((c) => (
              <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="text-[14px] text-steel">
                {c.label}
              </Link>
            ))}
          </div>
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
