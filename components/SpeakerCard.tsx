"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Speaker } from "@/data/speakers";

function Avatar({ speaker }: { speaker: Speaker }) {
  const initials = speaker.name
    .replace(/^(Prof\.|Dr\.|Mr\.|Ms\.)\s*/i, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="h-14 w-14 rounded-full bg-navy text-white flex items-center justify-center font-display font-semibold text-[15px] shrink-0">
      {initials}
    </div>
  );
}

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full text-left flex items-center gap-5 py-5 border-b border-line hover:bg-[#FAFAF8] transition-colors px-2 -mx-2"
      >
        <Avatar speaker={speaker} />
        <div className="flex-1 min-w-0">
          <div className="text-[17px] font-semibold font-display truncate">{speaker.name}</div>
          <div className="text-[14px] text-steel truncate">{speaker.affiliation}</div>
        </div>
        <div className="text-[12px] text-crimson font-semibold whitespace-nowrap">
          {speaker.type}
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
              className="bg-white max-w-md w-full p-8 relative"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-4 right-4 text-steel hover:text-ink text-xl leading-none"
              >
                ×
              </button>
              <div className="flex items-center gap-5 mb-6">
                <Avatar speaker={speaker} />
                <div>
                  <div className="text-[19px] font-semibold font-display">{speaker.name}</div>
                  <div className="text-[14px] text-steel">{speaker.affiliation}</div>
                </div>
              </div>
              <p className="text-[14.5px] text-[#333] leading-relaxed">
                {speaker.bio ??
                  "Full bio coming soon."}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
