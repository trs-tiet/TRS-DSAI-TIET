"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { searchIndex } from "@/data/searchIndex";

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchIndex
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description?.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      )
      .slice(0, 20);
  }, [query]);

  return (
    <>
      <button
        aria-label="Search the site"
        onClick={() => setOpen(true)}
        className="p-2 text-ink hover:text-crimson transition-colors"
      >
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.6" />
          <line x1="13" y1="13" x2="18" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] bg-ink/60 flex items-start justify-center pt-24 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-white w-full max-w-xl max-h-[70vh] flex flex-col overflow-hidden"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 border-b border-line px-5 py-4">
                <svg width="17" height="17" viewBox="0 0 19 19" fill="none" className="text-steel shrink-0">
                  <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.6" />
                  <line x1="13" y1="13" x2="18" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search speakers, pages, FAQs..."
                  className="flex-1 outline-none text-[15px] font-body placeholder:text-steel/70"
                />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close search"
                  className="text-steel hover:text-ink text-lg leading-none"
                >
                  ×
                </button>
              </div>

              <div className="overflow-y-auto">
                {query.trim() === "" ? (
                  <p className="text-[13.5px] text-steel px-5 py-8 text-center">
                    Start typing to search the whole site.
                  </p>
                ) : results.length === 0 ? (
                  <p className="text-[13.5px] text-steel px-5 py-8 text-center">
                    No results for &ldquo;{query}&rdquo;.
                  </p>
                ) : (
                  results.map((item, i) => (
                    <Link
                      key={item.category + item.title + i}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex flex-col gap-0.5 px-5 py-3.5 border-b border-line hover:bg-paper transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-[11px] font-semibold text-crimson uppercase tracking-wide">
                          {item.category}
                        </span>
                        <span className="text-[14.5px] font-medium font-display">{item.title}</span>
                      </div>
                      {item.description && (
                        <span className="text-[13px] text-steel truncate">{item.description}</span>
                      )}
                    </Link>
                  ))
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
