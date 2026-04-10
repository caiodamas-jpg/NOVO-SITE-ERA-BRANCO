"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const images = [
  { src: "/images/company/campinas-03.jpg", alt: "Escritório ERA Campinas" },
  { src: "/images/company/era-cx-01.jpg", alt: "Equipe ERA CX" },
  { src: "/images/company/campinas-04.jpg", alt: "Escritório ERA Campinas" },
  { src: "/images/company/futurecom-01.jpg", alt: "ERA no Futurecom" },
  { src: "/images/company/sp-02.jpg", alt: "Escritório ERA São Paulo" },
  { src: "/images/company/era-cx-02.jpg", alt: "Equipe ERA CX" },
  { src: "/images/company/campinas-01.jpg", alt: "Escritório ERA Campinas" },
  { src: "/images/company/sp-03.jpg", alt: "Escritório ERA São Paulo" },
  { src: "/images/company/futurecom-02.jpg", alt: "ERA no Futurecom" },
  { src: "/images/company/campinas-02.jpg", alt: "Escritório ERA Campinas" },
  { src: "/images/company/sp-01.jpg", alt: "Torre Alpha — Escritório ERA São Paulo" },
]

const VISIBLE = 3
const INTERVAL = 4500

export default function CompanySlideshow() {
  const [start, setStart] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setDirection(1)
    setStart((s) => (s + 1) % images.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setStart((s) => (s - 1 + images.length) % images.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, INTERVAL)
    return () => clearInterval(id)
  }, [paused, next])

  const visible = Array.from({ length: VISIBLE }, (_, i) => images[(start + i) % images.length])

  return (
    <section className="py-16 px-6 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <h2
              className="text-2xl md:text-3xl font-medium text-white mb-2"
              style={{ letterSpacing: "-0.0325em" }}
            >
              Conheça a ERA
            </h2>
            <p className="text-white/60 text-sm max-w-xl">
              Nossa equipe, escritórios e participações em eventos.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={prev}
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={next}
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Próxima"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((img, i) => (
              <motion.div
                key={`${start}-${i}-${img.src}`}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative aspect-[4/3] overflow-hidden bg-black"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-1.5 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setDirection(i > start ? 1 : -1)
                setStart(i)
              }}
              className={`h-1.5 rounded-full transition-all ${
                i === start ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Ir para imagem ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
