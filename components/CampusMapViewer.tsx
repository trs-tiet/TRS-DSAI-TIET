"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { campusLocations, MapLocation } from "@/data/map";

export default function CampusMapViewer() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(2); // Default to LP-108/LP-109
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isRotated, setIsRotated] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [panPos, setPanPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const panStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const categories = ["All", "Workshop Venues", "Dining & Stay", "Innovation & Research", "Key Landmarks"];

  const filteredLocations =
    activeCategory === "All"
      ? campusLocations
      : campusLocations.filter((loc) => loc.category === activeCategory);

  const currentMapSrc = isRotated
    ? "/images/map/tiet-campus-map-rotated.png"
    : "/images/map/tiet-campus-map.png";

  const downloadMapName = isRotated
    ? "TIET-Campus-Map-Landscape.png"
    : "TIET-Campus-Map-Portrait.png";

  // Handle Escape key to close modal
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setModalOpen(false);
        setZoomScale(1);
        setPanPos({ x: 0, y: 0 });
      }
    }
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  const openLightbox = () => {
    setModalOpen(true);
    setZoomScale(1);
    setPanPos({ x: 0, y: 0 });
  };

  const closeLightbox = () => {
    setModalOpen(false);
    setZoomScale(1);
    setPanPos({ x: 0, y: 0 });
  };

  const zoomIn = () => setZoomScale((prev) => Math.min(prev + 0.35, 3.2));
  const zoomOut = () => {
    setZoomScale((prev) => {
      const next = Math.max(prev - 0.35, 0.9);
      if (next <= 1) setPanPos({ x: 0, y: 0 });
      return next;
    });
  };
  const resetZoom = () => {
    setZoomScale(1);
    setPanPos({ x: 0, y: 0 });
  };

  // Drag-to-pan in lightbox
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomScale <= 1) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    panStartRef.current = { ...panPos };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPanPos({
      x: panStartRef.current.x + dx,
      y: panStartRef.current.y + dy,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="space-y-8">
      {/* Top Banner Notice */}
      <div className="bg-navy-deep text-white p-5 rounded-lg border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start md:items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-crimson flex items-center justify-center font-bold text-white shrink-0 text-[14px]">
            📍
          </span>
          <div>
            <h3 className="font-display font-semibold text-[16px] text-white">
              Primary Workshop Venue: Lecture Hall Complex (LP-108 &amp; LP-109)
            </h3>
            <p className="text-[13px] text-white/70">
              Technical lectures, invited keynotes, and industry masterclasses take place in Location #2 on the map.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => {
              setSelectedLocation(2);
              document.getElementById("location-2")?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="text-[12.5px] font-semibold bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 rounded transition-colors border border-white/15"
          >
            Locate LP-108/109
          </button>
          <a
            href={currentMapSrc}
            download={downloadMapName}
            className="text-[12.5px] font-semibold bg-crimson hover:bg-crimson-deep text-white px-3.5 py-1.5 rounded transition-colors inline-flex items-center gap-1.5"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download HD Map
          </a>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ========================================================================= */}
        {/* LEFT COLUMN: Formatted Number Guide (40% on Desktop)                      */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 space-y-5">
          {/* Guide Header Container */}
          <div className="bg-surface rounded-xl border border-line p-5 shadow-xs">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-700 to-indigo-900 text-white flex items-center justify-center font-bold text-[14px] shadow-xs">
                  #
                </div>
                <div>
                  <h2 className="font-display font-bold text-[20px] text-navy tracking-tight">
                    Key Locations Guide
                  </h2>
                  <p className="text-[12px] text-steel">
                    Numbered 1 to 8 matching the circular map badges
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-purple-800 uppercase tracking-wider bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
                8 Marked Zones
              </span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-line">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[11.5px] font-medium px-2.5 py-1 rounded-md transition-all ${
                    activeCategory === cat
                      ? "bg-navy text-white shadow-xs font-semibold"
                      : "bg-paper text-steel hover:bg-paper-deep hover:text-navy"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Location Cards List */}
          <div className="space-y-3 max-h-[820px] overflow-y-auto pr-1">
            {filteredLocations.map((loc) => {
              const isSelected = selectedLocation === loc.id;
              return (
                <div
                  key={loc.id}
                  id={`location-${loc.id}`}
                  onClick={() => setSelectedLocation(loc.id)}
                  className={`group relative p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-purple-50/70 border-purple-400 shadow-sm ring-1 ring-purple-400/40"
                      : "bg-surface border-line hover:border-steel/40 hover:bg-paper/40"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    {/* Circular Number Badge Matching Poster */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-[16px] shrink-0 transition-transform ${
                        isSelected
                          ? "bg-gradient-to-br from-purple-700 to-fuchsia-800 text-white shadow-md scale-105"
                          : "bg-gradient-to-br from-purple-900 to-indigo-950 text-white group-hover:scale-105"
                      }`}
                    >
                      {loc.id}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                        <h3 className="font-display font-bold text-[16px] text-navy group-hover:text-purple-900 transition-colors">
                          {loc.name}
                        </h3>
                        {loc.tag && (
                          <span className="text-[11px] font-mono text-steel bg-paper px-2 py-0.5 rounded border border-line">
                            {loc.tag}
                          </span>
                        )}
                      </div>

                      {/* Workshop Highlight badge */}
                      {loc.highlight && (
                        <div className="inline-block bg-crimson/10 border border-crimson/25 text-crimson text-[11.5px] font-semibold px-2.5 py-0.5 rounded mb-2">
                          ★ {loc.highlight}
                        </div>
                      )}

                      <p className="text-[13px] text-steel leading-relaxed mb-2">
                        {loc.description}
                      </p>

                      {loc.landmarksNear && (
                        <div className="text-[11.5px] text-steel/80 flex items-center gap-1.5 pt-1.5 border-t border-line/60">
                          <span className="text-purple-700 font-semibold">Around it:</span>
                          <span>{loc.landmarksNear}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: HD Campus Map Image Viewer (60% on Desktop)                 */}
        {/* ========================================================================= */}
        <div className="lg:col-span-7 space-y-4">
          {/* Map Viewer Controls Bar */}
          <div className="bg-surface rounded-xl border border-line p-3.5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="text-[12.5px] font-bold text-navy uppercase tracking-wider">
                Map View:
              </span>
              <button
                onClick={() => setIsRotated(!isRotated)}
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold bg-paper hover:bg-paper-deep text-navy px-3 py-1.5 rounded-md border border-line transition-colors"
                title="Rotate map 90 degrees for landscape view"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
                {isRotated ? "Switch to Portrait" : "Rotate 90° (Landscape)"}
              </button>
            </div>

            {/* Lightbox / Download Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={openLightbox}
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold bg-navy text-white hover:bg-navy-deep px-3 py-1.5 rounded-md transition-colors shadow-xs"
                title="Open interactive zoomable lightbox"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
                Fullscreen Lightbox
              </button>

              <a
                href={currentMapSrc}
                download={downloadMapName}
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold bg-paper hover:bg-paper-deep text-steel hover:text-navy px-3 py-1.5 rounded-md border border-line transition-colors"
                title="Download high-resolution image"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download PNG
              </a>
            </div>
          </div>

          {/* Interactive Map Graphic Card */}
          <div className="relative group bg-surface rounded-xl border border-line overflow-hidden shadow-xs">
            {/* Click to open Lightbox overlay trigger */}
            <div
              onClick={openLightbox}
              className="cursor-pointer relative overflow-hidden bg-[#fafafa] flex items-center justify-center min-h-[580px] p-2"
            >
              <img
                src={currentMapSrc}
                alt="TIET Campus Map — TRS-DSAI 2026"
                className="w-full h-auto max-h-[820px] object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              />

              {/* Hover Badge */}
              <div className="absolute bottom-4 right-4 bg-navy/90 backdrop-blur-xs text-white text-[12px] font-medium px-3.5 py-1.5 rounded-full shadow-lg border border-white/20 flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                Click to inspect in Fullscreen
              </div>
            </div>

            {/* Bottom Caption Bar */}
            <div className="bg-paper/70 border-t border-line px-5 py-3 flex flex-wrap items-center justify-between text-[12px] text-steel">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                High-Definition Campus Plan · Thapar Institute of Engineering &amp; Technology, Patiala
              </span>
              <span>Use the buttons above or click the map to zoom &amp; inspect</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FULLSCREEN LIGHTBOX MODAL WITH ZOOM & DRAG PAN                            */}
      {/* ========================================================================= */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col">
          {/* Top Control Header in Modal */}
          <div className="px-5 py-3.5 bg-black/75 border-b border-white/10 flex items-center justify-between gap-4 text-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white text-[14px]">
                🗺️
              </div>
              <div>
                <h3 className="font-display font-semibold text-[16px] text-white">
                  TIET Campus Map — Interactive Viewer
                </h3>
                <p className="text-[12px] text-white/60">
                  {isRotated ? "Landscape orientation (90°)" : "Standard orientation"} · Zoom: {Math.round(zoomScale * 100)}%
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsRotated(!isRotated)}
                className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded text-[12px] font-medium border border-white/15 transition-colors hidden sm:inline-flex items-center gap-1.5"
                title="Rotate orientation"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
                Rotate
              </button>
              <button
                onClick={zoomOut}
                className="bg-white/10 hover:bg-white/20 text-white w-8 h-8 rounded flex items-center justify-center font-bold text-[16px] border border-white/15 transition-colors"
                title="Zoom Out"
              >
                −
              </button>
              <button
                onClick={resetZoom}
                className="bg-white/10 hover:bg-white/20 text-white px-2.5 h-8 rounded text-[11px] font-mono border border-white/15 transition-colors"
                title="Reset Zoom"
              >
                100%
              </button>
              <button
                onClick={zoomIn}
                className="bg-white/10 hover:bg-white/20 text-white w-8 h-8 rounded flex items-center justify-center font-bold text-[16px] border border-white/15 transition-colors"
                title="Zoom In"
              >
                +
              </button>
              <a
                href={currentMapSrc}
                download={downloadMapName}
                className="bg-crimson hover:bg-crimson-deep text-white px-3 py-1.5 rounded text-[12px] font-semibold transition-colors hidden sm:inline-flex items-center gap-1.5"
              >
                Download
              </a>
              <button
                onClick={closeLightbox}
                className="bg-white/15 hover:bg-white/30 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-[18px] ml-2 transition-colors"
                title="Close (Esc)"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Modal Map Viewport */}
          <div
            className={`flex-1 overflow-hidden relative flex items-center justify-center ${
              zoomScale > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-default"
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <div
              style={{
                transform: `translate(${panPos.x}px, ${panPos.y}px) scale(${zoomScale})`,
                transition: isDragging ? "none" : "transform 0.15s ease-out",
              }}
              className="max-w-full max-h-full flex items-center justify-center select-none"
            >
              <img
                src={currentMapSrc}
                alt="TIET Campus Map Fullscreen"
                draggable={false}
                className="max-h-[88vh] max-w-[90vw] object-contain shadow-2xl rounded-sm"
              />
            </div>
          </div>

          {/* Bottom Location Legend Drawer in Modal */}
          <div className="bg-black/85 border-t border-white/10 px-4 py-2.5 overflow-x-auto shrink-0 flex items-center gap-3">
            <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider shrink-0">
              Legend:
            </span>
            <div className="flex items-center gap-3 shrink-0">
              {campusLocations.map((loc) => (
                <div
                  key={loc.id}
                  className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded text-[12px] text-white shrink-0"
                >
                  <span className="w-5 h-5 rounded-full bg-purple-700 text-white font-bold text-[11px] flex items-center justify-center">
                    {loc.id}
                  </span>
                  <span>{loc.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
