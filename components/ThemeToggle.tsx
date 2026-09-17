"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable — theme just won't persist, still works this session
    }
  }

  // Avoid a hydration mismatch flash: render a neutral placeholder until mounted
  if (!mounted) {
    return <span className="p-2 w-[35px] h-[35px] inline-block" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 text-fg hover:text-crimson transition-colors"
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="4.5" stroke="currentColor" strokeWidth="1.6" />
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <line x1="10" y1="1" x2="10" y2="3" />
            <line x1="10" y1="17" x2="10" y2="19" />
            <line x1="1" y1="10" x2="3" y2="10" />
            <line x1="17" y1="10" x2="19" y2="10" />
            <line x1="3.5" y1="3.5" x2="5" y2="5" />
            <line x1="15" y1="15" x2="16.5" y2="16.5" />
            <line x1="16.5" y1="3.5" x2="15" y2="5" />
            <line x1="5" y1="15" x2="3.5" y2="16.5" />
          </g>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path
            d="M17 12.5A7.5 7.5 0 0 1 7.5 3a7.5 7.5 0 1 0 9.5 9.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
