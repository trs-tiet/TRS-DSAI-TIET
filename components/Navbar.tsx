"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import Countdown from "./Countdown";
import SearchModal from "./SearchModal";
import ThemeToggle from "./ThemeToggle";

const flatLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/organizers", label: "Organizers" },
  { href: "/speakers", label: "Speakers" },
  { href: "/schedule", label: "Schedule" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/hands-on-experience", label: "Hands-on Experience" },
  { href: "/accommodation", label: "Accommodation & Travel" },
];

const moreChildren = [
  { href: "/places-to-visit/thapar", label: "Places to Visit — In Thapar" },
  { href: "/places-to-visit/patiala", label: "Places to Visit — In Patiala" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact us" },
];

function HoverDropdown({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        // Only close once focus has actually left this whole dropdown
        // (not just moved from the button to a link inside it)
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          (e.currentTarget.querySelector("button") as HTMLButtonElement)?.focus();
        }
      }}
    >
      <button
        type="button"
        className="relative group py-1 flex items-center gap-1 whitespace-nowrap"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <svg width="9" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-crimson transition-all duration-200 group-hover:w-full" />
      </button>
      {open && (
        <div className="absolute top-full right-0 pt-3 w-56 z-10">
          <div className="bg-surface border border-line shadow-lg py-2" role="menu">
            {items.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                role="menuitem"
                className="block px-4 py-2.5 text-[13.5px] hover:bg-paper transition-colors whitespace-nowrap"
                onClick={() => setOpen(false)}
              >
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
      className={`sticky top-0 z-50 transition-colors duration-300 overflow-x-hidden ${
        scrolled ? "bg-paper/95 backdrop-blur shadow-sm" : "bg-paper"
      }`}
    >
      <div className="wrap flex flex-wrap items-center justify-between xl:justify-center gap-3 xl:gap-6 py-3">
        <Link href="/" className="flex items-center gap-2 text-[15.5px] font-semibold font-display shrink-0">
          <Image src="/images/logos/trs-dsai-logo.png" alt={site.eventName} width={32} height={32} className="shrink-0" />
          {site.eventName}
        </Link>

        <nav className="hidden xl:flex items-center justify-center gap-4 text-[12.5px] font-medium flex-wrap max-w-full min-w-0">
          {flatLinks.map((l) => (
            <Link key={l.href} href={l.href} className="relative group py-1 whitespace-nowrap">
              {l.label}
              <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-crimson transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
          <HoverDropdown label="More" items={moreChildren} />
        </nav>

        <div className="hidden xl:flex items-center justify-center gap-3 flex-wrap max-w-full">
          {scrolled && (
            <div className="text-[11px] text-steel font-medium mr-1 whitespace-nowrap">
              <Countdown compact />
            </div>
          )}
          <SearchModal />
          <ThemeToggle />
          <a
            href={site.registerUrl}
            className="bg-navy text-white px-3.5 py-2.5 text-[12.5px] font-semibold rounded-sm hover:bg-navy-deep transition-colors whitespace-nowrap"
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
          {flatLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[15px] font-medium py-1">
              {l.label}
            </Link>
          ))}
          <div className="text-[15px] font-medium py-1">More</div>
          <div className="pl-4 flex flex-col gap-3 -mt-2">
            {moreChildren.map((c) => (
              <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="text-[14px] text-steel">
                {c.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-line pt-4 mt-2">
            <div className="text-[13px] text-steel mb-3 font-medium">Follow us</div>
            <div className="flex gap-3 flex-wrap">
              {site.socials.map((social) => (
                social.url !== "#" && (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-medium text-crimson hover:text-crimson-deep transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {social.label}
                  </a>
                )
              ))}
            </div>
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
