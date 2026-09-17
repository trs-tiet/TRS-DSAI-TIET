"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Speaker } from "@/data/speakers";

function initialsOf(name: string) {
  return name
    .replace(/^(Prof\.|Dr\.|Mr\.|Ms\.)\s*/i, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

// Fixed-size avatar — used in the bio modal only
function Avatar({ speaker, size }: { speaker: Speaker; size: number }) {
  if (speaker.photo) {
    return (
      <div className="relative shrink-0 overflow-hidden bg-paper rounded-full" style={{ width: size, height: size }}>
        <Image src={speaker.photo} alt={speaker.name} fill sizes={`${size}px`} className="object-cover" />
      </div>
    );
  }
  return (
    <div
      className="shrink-0 bg-navy text-white flex items-center justify-center font-display font-semibold rounded-full"
      style={{ width: size, height: size, fontSize: size * 0.28 }}
    >
      {initialsOf(speaker.name)}
    </div>
  );
}

// Responsive square photo — fills the card's width, used in the grid
function CardPhoto({ speaker }: { speaker: Speaker }) {
  if (speaker.photo) {
    return (
      <div className="relative w-full aspect-square overflow-hidden bg-paper">
        <Image
          src={speaker.photo}
          alt={speaker.name}
          fill
          sizes="(min-width: 1024px) 250px, (min-width: 640px) 33vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div className="w-full aspect-square bg-navy text-white flex items-center justify-center font-display font-semibold text-[15px]">
      {initialsOf(speaker.name)}
    </div>
  );
}

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full h-full text-left flex flex-col bg-surface border border-line hover:shadow-md transition-shadow"
      >
        <CardPhoto speaker={speaker} />
        <div className="p-5 flex flex-col min-h-[94px]">
          <div className="text-[16px] font-semibold font-display mb-1 line-clamp-1">{speaker.name}</div>
          <div className="text-[13px] text-steel line-clamp-2">{speaker.affiliation}</div>
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
                <Avatar speaker={speaker} size={72} />
                <div>
                  <div className="text-[19px] font-semibold font-display">{speaker.name}</div>
                  <div className="text-[14px] text-steel">{speaker.affiliation}</div>
                </div>
              </div>
              <p className="text-[14.5px] text-fg leading-relaxed">
                {speaker.bio ?? "Full bio coming soon."}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
