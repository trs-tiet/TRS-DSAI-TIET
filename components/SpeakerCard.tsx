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

function Photo({ speaker, size }: { speaker: Speaker; size: number }) {
  if (speaker.photo) {
    return (
      <div className="relative shrink-0 overflow-hidden bg-paper" style={{ width: size, height: size }}>
        <Image src={speaker.photo} alt={speaker.name} fill sizes={`${size}px`} className="object-cover" />
      </div>
    );
  }
  return (
    <div
      className="shrink-0 bg-navy text-white flex items-center justify-center font-display font-semibold"
      style={{ width: size, height: size, fontSize: size * 0.28 }}
    >
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
        className="w-full text-left flex flex-col bg-surface border border-line hover:shadow-md transition-shadow"
      >
        <Photo speaker={speaker} size={250} />
        <div className="p-5 flex-1 flex flex-col">
          <div className="text-[17px] font-semibold font-display mb-1">{speaker.name}</div>
          <div className="text-[13.5px] text-steel">{speaker.affiliation}</div>
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
                <Photo speaker={speaker} size={72} />
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
