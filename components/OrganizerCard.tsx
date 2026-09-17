"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Organizer } from "@/data/organizers";

export default function OrganizerCard({ organizer }: { organizer: Organizer }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full h-full text-left bg-surface border border-line flex flex-col hover:shadow-md transition-shadow"
      >
        <div className="relative w-full aspect-square bg-paper">
          {organizer.photo && (
            <Image
              src={organizer.photo}
              alt={organizer.name}
              fill
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover"
            />
          )}
        </div>
        <div className="p-5 flex flex-col min-h-[86px]">
          <div className="text-[15.5px] font-semibold font-display mb-1 line-clamp-1">{organizer.name}</div>
          <div className="text-[12.5px] text-steel line-clamp-2">{organizer.role}</div>
        </div>
      </button>

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
                    <Image src={organizer.photo} alt={organizer.name} fill sizes="72px" className="object-cover" />
                  )}
                </div>
                <div>
                  <div className="text-[19px] font-semibold font-display">{organizer.name}</div>
                  <div className="text-[14px] text-steel">{organizer.role}</div>
                </div>
              </div>
              <p className="text-[14.5px] text-fg leading-relaxed">
                {organizer.bio ?? "Full bio coming soon."}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
