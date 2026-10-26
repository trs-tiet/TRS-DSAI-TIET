"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface ScheduleItem {
  id: "complete" | "day1" | "day2";
  title: string;
  badge: string;
  date: string;
  description: string;
  venues: string[];
  imageSrc: string;
  downloadPngName: string;
}

const scheduleData: Record<string, ScheduleItem> = {
  complete: {
    id: "complete",
    title: "Complete Two-Day Programme Schedule",
    badge: "Full Overview",
    date: "October 30 – 31, 2026",
    description: "Complete overview of all keynote lectures, technical sessions, hands-on workshops in LP-109, and networking breaks across both days.",
    venues: ["Auditorium", "LP-108", "LP-109", "Poster Area"],
    imageSrc: "/images/schedule/complete_schedule.png",
    downloadPngName: "TRS-DSAI-2026-Complete-Schedule.png",
  },
  day1: {
    id: "day1",
    title: "Day 1 Schedule: Intelligent Systems & Robotics in Industry",
    badge: "Day 1 · Friday, Oct 30",
    date: "October 30, 2026",
    description: "Inaugural session, Intelligent Systems keynote & talks, Robotics in Industry, MathWorks hands-on workshop in LP-109, and TRS GBM.",
    venues: ["Auditorium", "LP-108", "LP-109"],
    imageSrc: "/images/schedule/day1_schedule.png",
    downloadPngName: "TRS-DSAI-2026-Day1-Schedule.png",
  },
  day2: {
    id: "day2",
    title: "Day 2 Schedule: AI/ML in Robotics & Healthcare Robotics",
    badge: "Day 2 · Saturday, Oct 31",
    date: "October 31, 2026",
    description: "AI/ML in Robotics, Healthcare Robotics, Noraxon & Labellerr AI hands-on workshops in LP-109, and Valedictory Session.",
    venues: ["LP-108", "LP-109"],
    imageSrc: "/images/schedule/day2_schedule.png",
    downloadPngName: "TRS-DSAI-2026-Day2-Schedule.png",
  },
};

export default function ScheduleViewer() {
  const [activeTab, setActiveTab] = useState<"all" | "day1" | "day2">("all");
  const [modalItem, setModalItem] = useState<ScheduleItem | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setModalItem(null);
        setZoomScale(1);
      }
    }
    if (modalItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalItem]);

  const openModal = (item: ScheduleItem) => {
    setModalItem(item);
    setZoomScale(1);
  };

  const closeModal = () => {
    setModalItem(null);
    setZoomScale(1);
  };

  const zoomIn = () => setZoomScale((prev) => Math.min(prev + 0.25, 3));
  const zoomOut = () => setZoomScale((prev) => Math.max(prev - 0.25, 0.75));
  const resetZoom = () => setZoomScale(1);

  return (
    <div className="space-y-16">
      {/* ==================== 1. COMPLETE SCHEDULE (HERO SECTION) ==================== */}
      <div id="complete-schedule" className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-steel/20 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-crimson/10 text-crimson text-[12px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
              Complete Programme
            </div>
            <h2 className="font-display font-bold text-[28px] md:text-[36px] text-navy">
              Overview Schedule
            </h2>
            <p className="text-[15px] text-steel max-w-2xl mt-1">
              Complete two-day programme covering keynote lectures, technical tracks, all hands-on sessions in LP-109, and social breaks.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={() => openModal(scheduleData.complete)}
              className="inline-flex items-center gap-2 bg-paper-deep text-navy hover:bg-steel/15 px-4 py-2.5 text-[13px] font-semibold rounded-md border border-steel/25 transition-all shadow-xs"
              title="Click to view full-resolution schedule in interactive lightbox"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
              View Full Size
            </button>
            <a
              href={scheduleData.complete.imageSrc}
              download={scheduleData.complete.downloadPngName}
              className="inline-flex items-center gap-2 bg-navy text-white hover:bg-navy-deep px-4 py-2.5 text-[13px] font-semibold rounded-md transition-all shadow-xs"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
              Download HD Image
            </a>
          </div>
        </div>

        {/* Complete Schedule Image Card */}
        <div className="relative group bg-white border border-steel/25 rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
          <div className="p-3 sm:px-4 sm:py-3 bg-slate-50 border-b border-steel/15 flex items-center justify-between text-[13px] text-steel">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="font-medium text-navy">Complete Programme Schedule</span>
              <span className="hidden sm:inline text-steel/60">·</span>
              <span className="text-[11px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200 font-semibold uppercase tracking-wider">
                HD Graphic
              </span>
            </div>
            <div className="flex items-center gap-2 text-steel/80">
              <span className="hidden md:inline text-[12px]">Click image to expand &amp; zoom</span>
            </div>
          </div>

          <div
            onClick={() => openModal(scheduleData.complete)}
            className="cursor-zoom-in relative block overflow-hidden bg-white p-2 sm:p-4"
            title="Click to view high-resolution interactive zoom"
          >
            <img
              src={scheduleData.complete.imageSrc}
              alt="TRS-DSAI 2026 Complete Schedule"
              className="w-full h-auto rounded block shadow-2xs transition-transform duration-300 group-hover:scale-[1.003]"
              loading="eager"
            />
            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-navy/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <div className="bg-navy/90 text-white text-[13px] font-medium px-4 py-2 rounded-full shadow-lg backdrop-blur-xs flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                Click to expand & zoom
              </div>
            </div>
          </div>

          <div className="px-4 py-3 bg-paper border-t border-steel/15 flex flex-wrap items-center justify-between gap-3 text-[12px] text-steel">
            <div className="flex flex-wrap items-center gap-3">
              <span><b>HOS</b>: All Hands-on Sessions in <b>LP-109</b></span>
              <span>•</span>
              <span><b>PS1 &amp; PS2</b>: Poster Sessions</span>
              <span>•</span>
              <span><b>GBM</b>: TRS General Body Meeting</span>
            </div>
            <div className="text-right">
              <span className="text-navy font-medium">Click image or &quot;View Full Size&quot; to inspect details</span>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== 2. DETAILED DAY 1 & DAY 2 SCHEDULES ==================== */}
      <div id="day-wise-schedules" className="space-y-6 pt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-steel/20 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-navy/10 text-navy text-[12px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              Detailed Day Breakdown
            </div>
            <h2 className="font-display font-bold text-[28px] md:text-[36px] text-navy">
              Day 1 &amp; Day 2 Detailed Schedules
            </h2>
            <p className="text-[15px] text-steel max-w-2xl mt-1">
              Explore the exact hourly itineraries, session chairs, keynote speakers, paper presentations, and hands-on industrial masterclasses in LP-109.
            </p>
          </div>

          {/* Tab Filter */}
          <div className="inline-flex items-center p-1 bg-paper-deep rounded-lg border border-steel/20">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-1.5 text-[13px] font-semibold rounded-md transition-colors ${
                activeTab === "all"
                  ? "bg-navy text-white shadow-xs"
                  : "text-steel hover:text-navy"
              }`}
            >
              All Days
            </button>
            <button
              onClick={() => setActiveTab("day1")}
              className={`px-3.5 py-1.5 text-[13px] font-semibold rounded-md transition-colors ${
                activeTab === "day1"
                  ? "bg-navy text-white shadow-xs"
                  : "text-steel hover:text-navy"
              }`}
            >
              Day 1 (Oct 30)
            </button>
            <button
              onClick={() => setActiveTab("day2")}
              className={`px-3.5 py-1.5 text-[13px] font-semibold rounded-md transition-colors ${
                activeTab === "day2"
                  ? "bg-navy text-white shadow-xs"
                  : "text-steel hover:text-navy"
              }`}
            >
              Day 2 (Oct 31)
            </button>
          </div>
        </div>

        {/* Day Cards Grid */}
        <div
          className={`grid gap-8 ${
            activeTab === "all" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 max-w-4xl mx-auto"
          }`}
        >
          {/* ---------------- DAY 1 CARD ---------------- */}
          {(activeTab === "all" || activeTab === "day1") && (
            <div className="bg-white border border-steel/25 rounded-xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all">
              {/* Header */}
              <div className="p-5 border-b border-steel/15 bg-slate-50/70">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-crimson uppercase tracking-wide bg-crimson/10 px-2.5 py-0.5 rounded-full">
                    Day 1 Schedule
                  </span>
                  <span className="text-[13px] font-medium text-steel font-mono">
                    Friday, Oct 30, 2026
                  </span>
                </div>
                <h3 className="font-display font-bold text-[20px] text-navy">
                  Intelligent Systems &amp; Robotics in Industry
                </h3>
                <p className="text-[13px] text-steel mt-1 line-clamp-2">
                  Inauguration, 5 technical lectures, MathWorks Hands-on Session in LP-109, and TRS General Body Meeting.
                </p>

                {/* Venues & Timings */}
                <div className="flex flex-wrap items-center gap-2 mt-3 text-[12px]">
                  <span className="bg-paper px-2.5 py-1 rounded border border-steel/20 text-navy font-medium">
                    📍 Auditorium &amp; LP-108 (Lectures)
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded border border-emerald-200 font-semibold">
                    🛠️ LP-109 (HOS 1: MathWorks)
                  </span>
                  <span className="bg-paper px-2.5 py-1 rounded border border-steel/20 text-navy font-medium">
                    ⏰ 08:00 – 18:00
                  </span>
                </div>
              </div>

              {/* Image Preview Container */}
              <div
                onClick={() => openModal(scheduleData.day1)}
                className="cursor-zoom-in relative p-2 sm:p-4 bg-white flex-1 flex items-center justify-center overflow-hidden border-b border-steel/10"
                title="Click to view full Day 1 schedule in interactive lightbox"
              >
                <img
                  src={scheduleData.day1.imageSrc}
                  alt="TRS-DSAI 2026 Day 1 Detailed Schedule"
                  className="w-full h-auto rounded block shadow-2xs transition-transform duration-300 group-hover:scale-[1.008]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="bg-navy/90 text-white text-[12px] font-medium px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-xs flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    Click to zoom Day 1
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-4 bg-paper flex flex-wrap items-center justify-between gap-2.5">
                <button
                  onClick={() => openModal(scheduleData.day1)}
                  className="inline-flex items-center gap-1.5 text-[13px] text-navy font-semibold hover:text-crimson transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                  View Full Size
                </button>

                <a
                  href={scheduleData.day1.imageSrc}
                  download={scheduleData.day1.downloadPngName}
                  className="inline-flex items-center gap-1.5 bg-navy text-white hover:bg-navy-deep px-3 py-1.5 text-[12px] font-semibold rounded transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
                  </svg>
                  Download HD Image
                </a>
              </div>
            </div>
          )}

          {/* ---------------- DAY 2 CARD ---------------- */}
          {(activeTab === "all" || activeTab === "day2") && (
            <div className="bg-white border border-steel/25 rounded-xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all">
              {/* Header */}
              <div className="p-5 border-b border-steel/15 bg-slate-50/70">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-navy uppercase tracking-wide bg-navy/10 px-2.5 py-0.5 rounded-full">
                    Day 2 Schedule
                  </span>
                  <span className="text-[13px] font-medium text-steel font-mono">
                    Saturday, Oct 31, 2026
                  </span>
                </div>
                <h3 className="font-display font-bold text-[20px] text-navy">
                  AI/ML in Robotics &amp; Healthcare Robotics
                </h3>
                <p className="text-[13px] text-steel mt-1 line-clamp-2">
                  5 invited lectures including Mr. Aditya Marathe (Nugenix), Noraxon &amp; Labellerr AI industrial workshops in LP-109, and Valedictory.
                </p>

                {/* Venues & Timings */}
                <div className="flex flex-wrap items-center gap-2 mt-3 text-[12px]">
                  <span className="bg-paper px-2.5 py-1 rounded border border-steel/20 text-navy font-medium">
                    📍 LP-108 (Technical Sessions)
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded border border-emerald-200 font-semibold">
                    🛠️ LP-109 (Noraxon &amp; Labellerr HOS)
                  </span>
                  <span className="bg-paper px-2.5 py-1 rounded border border-steel/20 text-navy font-medium">
                    ⏰ 09:00 – 18:00
                  </span>
                </div>
              </div>

              {/* Image Preview Container */}
              <div
                onClick={() => openModal(scheduleData.day2)}
                className="cursor-zoom-in relative p-2 sm:p-4 bg-white flex-1 flex items-center justify-center overflow-hidden border-b border-steel/10"
                title="Click to view full Day 2 schedule in interactive lightbox"
              >
                <img
                  src={scheduleData.day2.imageSrc}
                  alt="TRS-DSAI 2026 Day 2 Detailed Schedule"
                  className="w-full h-auto rounded block shadow-2xs transition-transform duration-300 group-hover:scale-[1.008]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="bg-navy/90 text-white text-[12px] font-medium px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-xs flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    Click to zoom Day 2
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-4 bg-paper flex flex-wrap items-center justify-between gap-2.5">
                <button
                  onClick={() => openModal(scheduleData.day2)}
                  className="inline-flex items-center gap-1.5 text-[13px] text-navy font-semibold hover:text-crimson transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                  View Full Size
                </button>

                <a
                  href={scheduleData.day2.imageSrc}
                  download={scheduleData.day2.downloadPngName}
                  className="inline-flex items-center gap-1.5 bg-navy text-white hover:bg-navy-deep px-3 py-1.5 text-[12px] font-semibold rounded transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
                  </svg>
                  Download HD Image
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ==================== 3. VENUE & TRACK DIRECTORY GUIDE ==================== */}
      <div className="bg-white border border-steel/20 rounded-xl p-6 sm:p-8 shadow-xs">
        <h3 className="font-display font-bold text-[20px] text-navy mb-2">
          Venue &amp; Track Directory
        </h3>
        <p className="text-[14px] text-steel mb-6">
          All workshop venues are centrally located within the Thapar Institute campus. Signage and student volunteers will guide delegates across all halls.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-4 rounded-lg bg-paper border border-steel/15">
            <div className="font-display font-bold text-navy text-[16px] mb-1">
              🏛️ Main Auditorium
            </div>
            <p className="text-[13px] text-steel">
              Inaugural Ceremony, Intelligent Systems plenary keynotes, and general conference assemblies.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-paper border border-steel/15">
            <div className="font-display font-bold text-navy text-[16px] mb-1">
              📍 Lecture Hall LP-108
            </div>
            <p className="text-[13px] text-steel">
              Technical Paper Presentations, Robotics in Industry 4.0, AI/ML in Robotics, Healthcare Robotics, and Valedictory.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-emerald-50/70 border border-emerald-200">
            <div className="font-display font-bold text-emerald-900 text-[16px] mb-1">
              🛠️ Workshop Lab LP-109
            </div>
            <p className="text-[13px] text-emerald-800">
              <b>All Hands-on Sessions (HOS):</b> MathWorks (MATLAB/Simulink), Noraxon Biomechanics, and Labellerr AI Computer Vision.
            </p>
          </div>
        </div>
      </div>

      {/* ==================== 4. LIGHTBOX ZOOM MODAL ==================== */}
      {mounted &&
        modalItem &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[9999] flex flex-col bg-ink/95 backdrop-blur-md animate-fade-in"
          >
            {/* Lightbox Toolbar */}
            <div className="h-16 px-4 sm:px-6 bg-ink border-b border-white/10 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="text-crimson font-bold text-[12px] uppercase tracking-wider bg-crimson/20 px-2.5 py-1 rounded hidden sm:inline">
                  {modalItem.badge}
                </span>
                <h4 className="font-display font-semibold text-[15px] sm:text-[17px] truncate text-white">
                  {modalItem.title}
                </h4>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {/* Zoom Controls */}
                <div className="hidden sm:flex items-center bg-white/10 rounded-md p-1 border border-white/10 text-white/90">
                  <button
                    onClick={zoomOut}
                    disabled={zoomScale <= 0.75}
                    className="p-1.5 hover:bg-white/10 rounded disabled:opacity-40 transition-colors"
                    title="Zoom Out"
                    aria-label="Zoom Out"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </button>
                  <span className="text-[12px] font-mono px-2 min-w-[50px] text-center">
                    {Math.round(zoomScale * 100)}%
                  </span>
                  <button
                    onClick={zoomIn}
                    disabled={zoomScale >= 3}
                    className="p-1.5 hover:bg-white/10 rounded disabled:opacity-40 transition-colors"
                    title="Zoom In"
                    aria-label="Zoom In"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </button>
                  {zoomScale !== 1 && (
                    <button
                      onClick={resetZoom}
                      className="text-[11px] px-2 py-0.5 ml-1 bg-white/15 hover:bg-white/25 rounded transition-colors"
                    >
                      Reset
                    </button>
                  )}
                </div>

                {/* Download Button in Modal */}
                <a
                  href={modalItem.imageSrc}
                  download={modalItem.downloadPngName}
                  className="inline-flex items-center gap-1.5 bg-navy hover:bg-navy-deep text-white px-3 py-1.5 text-[12px] font-semibold rounded transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
                  </svg>
                  Download HD Image
                </a>

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors ml-1"
                  aria-label="Close schedule viewer"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content / Zoomable Canvas */}
            <div
              className="flex-1 overflow-auto p-4 md:p-8 flex items-center justify-center cursor-grab active:cursor-grabbing"
              onClick={(e) => {
                if (e.target === e.currentTarget) closeModal();
              }}
            >
              <div
                style={{
                  transform: `scale(${zoomScale})`,
                  transformOrigin: "center center",
                  transition: "transform 0.15s ease-out",
                }}
                className="max-w-full max-h-full flex items-center justify-center"
              >
                <img
                  src={modalItem.imageSrc}
                  alt={modalItem.title}
                  className="max-w-[95vw] max-h-[82vh] object-contain rounded-lg shadow-2xl bg-white"
                />
              </div>
            </div>

            {/* Modal Footer hint */}
            <div className="h-10 px-4 bg-ink border-t border-white/10 flex items-center justify-between text-[12px] text-white/60 shrink-0">
              <span>Press <kbd className="px-1.5 py-0.5 bg-white/15 rounded text-white font-mono text-[10px]">ESC</kbd> or click background to exit</span>
              <span className="hidden sm:inline">Use zoom buttons to inspect session details</span>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
