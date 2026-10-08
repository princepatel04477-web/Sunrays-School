"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Container, Section } from "@/components/layout";
import { PageHero } from "@/components/layout/PageHero";
import { Masonry } from "@/components/reactbits/Masonry";
import {
  galleryPhotos,
  galleryAlbums,
  type GalleryPhoto,
} from "@/content/gallery";
import { cn } from "@/lib/utils";

export default function GalleryPage() {
  const [selectedAlbum, setSelectedAlbum] = useState<string>("All");
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos = galleryPhotos.filter(
    (p) => selectedAlbum === "All" || p.album === selectedAlbum
  );

  const currentIndex = activePhoto
    ? filteredPhotos.findIndex((p) => p.id === activePhoto.id)
    : -1;

  const handleNext = useCallback(() => {
    if (currentIndex >= 0 && currentIndex < filteredPhotos.length - 1) {
      setActivePhoto(filteredPhotos[currentIndex + 1] ?? null);
    } else {
      setActivePhoto(filteredPhotos[0] ?? null);
    }
  }, [currentIndex, filteredPhotos]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setActivePhoto(filteredPhotos[currentIndex - 1] ?? null);
    } else {
      setActivePhoto(filteredPhotos[filteredPhotos.length - 1] ?? null);
    }
  }, [currentIndex, filteredPhotos]);

  // Keyboard controls Esc, Left, Right
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activePhoto) return;
      if (e.key === "Escape") setActivePhoto(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto, handleNext, handlePrev]);

  return (
    <div className="flex flex-col w-full">
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Life at Sunrays", href: "/life" },
          { label: "Gallery", href: "/gallery" },
        ]}
        eyebrow="Visual Archives"
        title="Photographs of school life."
        lead="A curated visual record of assemblies, practical laboratories, athletic competitions, and cultural celebrations."
      />

      <Section tone="paper" spacing="tight">
        <Container>
          {/* Album Filters with Motion layout pills */}
          <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-[var(--line)] pb-6">
            <span className="t-eyebrow text-sun mr-2">Album:</span>
            {galleryAlbums.map((album) => {
              const isSelected = selectedAlbum === album;
              return (
                <button
                  key={album}
                  onClick={() => setSelectedAlbum(album)}
                  className={cn(
                    "relative px-4 py-1.5 text-xs uppercase tracking-wider font-sans transition-colors rounded-full border",
                    isSelected
                      ? "border-sun text-ink font-semibold"
                      : "border-[var(--line)] text-muted hover:border-sun/60 hover:text-ink"
                  )}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeAlbumPill"
                      className="absolute inset-0 rounded-full border border-sun pointer-events-none"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span>{album}</span>
                </button>
              );
            })}
          </div>

          {/* Masonry Gallery Grid with FLIP */}
          <motion.div layout className="w-full">
            <Masonry
              items={filteredPhotos}
              columns={{ default: 1, sm: 2, md: 3, lg: 3 }}
              gap={24}
              renderItem={(photo) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={photo.id}
                  onClick={() => setActivePhoto(photo)}
                  className="group relative cursor-pointer overflow-hidden border border-[var(--line)] bg-porcelain p-2.5 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper">
                    <motion.div
                      layoutId={`gallery-thumb-${photo.id}`}
                      className="w-full h-full relative"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  </div>

                  <div className="p-3 space-y-1">
                    <div className="flex items-center justify-between text-[10px] text-sun uppercase tracking-wider font-mono">
                      <span>{photo.album}</span>
                      <span>🔎 Inspect</span>
                    </div>
                    <h3 className="font-display text-base text-ink font-normal truncate">
                      {photo.title}
                    </h3>
                  </div>
                </motion.div>
              )}
            />
          </motion.div>
        </Container>
      </Section>

      {/* Accessible Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-md flex flex-col justify-between p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Photo Lightbox"
            onClick={() => setActivePhoto(null)}
          >
            {/* Top Toolbar */}
            <div
              className="flex items-center justify-between text-paper text-xs uppercase tracking-widest z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="t-eyebrow text-sun">{activePhoto.album}</span>
              <button
                onClick={() => setActivePhoto(null)}
                className="hover:text-sun p-2 flex items-center gap-1.5 focus:outline-none"
              >
                <span>Close (Esc)</span>
                <span>✕</span>
              </button>
            </div>

            {/* Center Image with Prev / Next */}
            <div
              className="relative max-w-5xl mx-auto w-full h-[70vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handlePrev}
                className="absolute left-2 md:-left-16 z-20 w-12 h-12 rounded-full border border-paper/30 text-paper hover:border-sun hover:text-sun flex items-center justify-center transition-colors bg-ink/60"
                aria-label="Previous photo"
              >
                ←
              </button>

              <div className="relative w-full h-full max-h-[65vh] border border-[var(--line-dark)] bg-black/40">
                <motion.div
                  layoutId={`gallery-thumb-${activePhoto.id}`}
                  className="w-full h-full relative"
                >
                  <Image
                    src={activePhoto.src}
                    alt={activePhoto.title}
                    fill
                    sizes="1000px"
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>

              <button
                onClick={handleNext}
                className="absolute right-2 md:-right-16 z-20 w-12 h-12 rounded-full border border-paper/30 text-paper hover:border-sun hover:text-sun flex items-center justify-center transition-colors bg-ink/60"
                aria-label="Next photo"
              >
                →
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div
              className="max-w-3xl mx-auto text-center space-y-1 text-paper z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-display text-xl text-paper font-normal">
                {activePhoto.title}
              </h3>
              <p className="t-meta text-xs text-[#b6bcd2]">{activePhoto.caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
