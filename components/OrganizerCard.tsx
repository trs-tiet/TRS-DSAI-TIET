"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Organizer } from "@/data/organizers";

export default function OrganizerCard({ organizer }: { organizer: Organizer }) {
  const [open, setOpen] = useState(false);
  const hasBio = Boolean(organizer.bio);

  const cardInner = (
    <>
      <div className="relative w-full aspect-square bg-[#f1f5f9] dark:bg-slate-800/50 overflow-hidden flex items-center justify-center border-b border-line">
        {organizer.photo ? (
          <Image
            src={organizer.photo}
            alt={organizer.name}
            fill
            sizes="(min-width: 1024px) 200px, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 select-none">
            <div className="w-14 h-14 rounded-full bg-slate-200/80 dark:bg-slate-700/60 text-steel flex items-center justify-center mb-2.5">
              <svg
                className="w-7 h-7 text-steel/70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <span className="text-[10.5px] font-semibold tracking-wider uppercase text-steel/80">
              Photo En Route
            </span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col justify-center items-center text-center min-h-[104px]">
        {organizer.role && organizer.affiliation ? (
          <>
            <div className="text-[11.5px] font-semibold text-primary uppercase tracking-wide line-clamp-1 mb-1">
              {organizer.role}
            </div>
            <div className="text-[14.5px] font-semibold font-display line-clamp-1 mb-0.5">
              {organizer.name}
            </div>
            <div className="text-[12px] text-steel line-clamp-1">
              {organizer.affiliation}
            </div>
          </>
        ) : organizer.affiliation ? (
          <>
            <div className="text-[14.5px] font-semibold font-display line-clamp-1 mb-1">
              {organizer.name}
            </div>
            <div className="text-[12px] text-steel line-clamp-1">
              {organizer.affiliation}
            </div>
          </>
        ) : (
          <>
            <div className="text-[14.5px] font-semibold font-display line-clamp-1 mb-1">
              {organizer.name}
            </div>
            <div className="text-[12px] text-steel line-clamp-2">
              {organizer.role}
            </div>
          </>
        )}
      </div>
    </>
  );

  return (
    <>
      {hasBio ? (
        <button
          onClick={() => setOpen(true)}
          className="w-full h-full text-center bg-surface border border-line flex flex-col hover:shadow-md transition-shadow group cursor-pointer"
        >
          {cardInner}
        </button>
      ) : (
        <div className="w-full h-full text-center bg-surface border border-line flex flex-col hover:shadow-md transition-shadow group">
          {cardInner}
        </div>
      )}

      {hasBio && (
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[60] bg-ink/60 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            >
              <motion.div
                className="bg-surface max-w-md w-full p-8 relative"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="absolute top-4 right-4 text-steel hover:text-fg text-xl leading-none"
                >
                  ×
                </button>
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden bg-paper rounded-full">
                    {organizer.photo && (
                      <Image
                        src={organizer.photo}
                        alt={organizer.name}
                        fill
                        sizes="72px"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <div className="text-[19px] font-semibold font-display">
                      {organizer.name}
                    </div>
                    {organizer.role && organizer.affiliation ? (
                      <>
                        <div className="text-[13px] font-medium text-primary">
                          {organizer.role}
                        </div>
                        <div className="text-[13px] text-steel">
                          {organizer.affiliation}
                        </div>
                      </>
                    ) : (
                      <div className="text-[14px] text-steel">
                        {organizer.role || organizer.affiliation}
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-[14.5px] text-fg leading-relaxed">
                  {organizer.bio ?? "Full bio coming soon."}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
