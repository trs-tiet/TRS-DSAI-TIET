"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import Countdown from "./Countdown";
import SearchModal from "./SearchModal";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/speakers", label: "Speakers" },
  { href: "/schedule", label: "Schedule" },
  { href: "/exhibitions", label: "Exhibitions" },
];

const moreLinks = [
  { href: "/organizers", label: "Organizers" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/accommodation", label: "Accommodation & Travel" },
  { href: "/places-to-visit", label: "Places to Visit" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact us" },
];

const allLinksForMobile = [...primaryLinks, ...moreLinks];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="wrap flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-2.5 text-[19px] font-semibold font-display shrink-0">
          <span className="inline-block h-[9px] w-[9px] bg-crimson" />
          {site.eventName}
        </Link>

        <div className="hidden lg:flex items-center gap-7 text-[14.5px] font-medium">
          {primaryLinks.map((l) => (
            <Link key={l.href} href={l.href} className="relative group py-1">
              {l.label}
              <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-crimson transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}

          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreOpen((v) => !v)}
              className="relative group py-1 flex items-center gap-1"
              aria-expanded={moreOpen}
            >
              More
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>

            {moreOpen && (
              <div className="absolute top-full right-0 mt-3 w-56 bg-white border border-line shadow-lg py-2 z-10">
                {moreLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMoreOpen(false)}
                    className="block px-4 py-2.5 text-[14px] hover:bg-paper transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {scrolled && (
            <div className="text-xs text-steel font-medium mr-1">
              <Countdown compact />
            </div>
          )}
          <SearchModal />
          <a
            href={site.registerUrl}
            className="bg-navy text-white px-5 py-2.5 text-[14px] font-semibold rounded-sm hover:bg-navy-deep transition-colors"
          >
            Register now
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <SearchModal />
          <button
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-[1.5px] w-6 bg-ink" />
            <span className="block h-[1.5px] w-6 bg-ink" />
            <span className="block h-[1.5px] w-4 bg-ink" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-paper border-t border-line px-6 pb-6 flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
          {allLinksForMobile.map((l) => (
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
