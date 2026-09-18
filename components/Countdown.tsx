"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

function getTimeLeft() {
  const target = new Date(site.eventStartISO).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, done: diff === 0 };
}

export default function Countdown({ compact = false }: { compact?: boolean }) {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  if (time.done) {
    return <span>{compact ? "Underway" : "The workshop is underway"}</span>;
  }

  if (compact) {
    return (
      <span>
        {time.days}d {time.hours}h {time.minutes}m left
      </span>
    );
  }

  const items = [
    { value: time.days, label: "days" },
    { value: time.hours, label: "hours" },
    { value: time.minutes, label: "minutes" },
    { value: time.seconds, label: "seconds" },
  ];

  return (
    <div className="flex gap-0 flex-wrap" aria-label="Countdown to the workshop">
      {items.map((item, i) => (
        <div key={item.label} className={`px-6 first:pl-0 ${i > 0 ? "border-l border-white/20" : ""}`}>
          <div className="font-display text-[38px] font-semibold leading-none tabular-nums">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="text-[12.5px] text-white/60 mt-1.5">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
