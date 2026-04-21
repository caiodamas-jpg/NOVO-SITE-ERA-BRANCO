"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"
import { Navbar } from "./navbar"
import { HeroAnimation } from "./hero-animation"


// Lazy load all below-fold sections
const FeatureCardsSection = dynamic(() => import("./feature-cards-section").then(m => ({ default: m.FeatureCardsSection })), { ssr: false })
const LogoCloud = dynamic(() => import("./logo-cloud").then(m => ({ default: m.LogoCloud })), { ssr: false })
const PodcastSection = dynamic(() => import("./podcast-section").then(m => ({ default: m.PodcastSection })), { ssr: false })
const AISection = dynamic(() => import("./ai-section").then(m => ({ default: m.AISection })), { ssr: false })
const PlanosHomeSection = dynamic(() => import("./home/PlanosHomeSection"), { ssr: false })
const LeadCaptureSection = dynamic(() => import("./lead-capture/LeadCaptureSection").then(m => ({ default: m.LeadCaptureSection })), { ssr: false })
const ProductDirectionSection = dynamic(() => import("./product-direction-section").then(m => ({ default: m.ProductDirectionSection })), { ssr: false })
const IntegrationOrbit = dynamic(() => import("./integracoes/IntegrationOrbit"), { ssr: false })
const CoExSection = dynamic(() => import("./coex-section").then(m => ({ default: m.CoExSection })), { ssr: false })
const BlogSection = dynamic(() => import("./home/BlogSection"), { ssr: false })
const EventsSection = dynamic(() => import("./home/EventsSection"), { ssr: false })
const CTASection = dynamic(() => import("./cta-section").then(m => ({ default: m.CTASection })), { ssr: false })
const Footer = dynamic(() => import("./footer").then(m => ({ default: m.Footer })), { ssr: false })

function HeroRotatingWord() {
  const t = useTranslations("hero")
  const heroWords = [
    { text: t("word1"), color: "#2b363d" },
    { text: t("word2"), color: "#2b363d" },
    { text: t("word3"), color: "#2b363d" },
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-block relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={heroWords[index].text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ color: heroWords[index].color }}
          className="inline-block"
        >
          {heroWords[index].text}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function Hero3DStage() {
  const t = useTranslations("hero")

  return (
    <>
      <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#f4f5f7" }}>
        <Navbar />

        {/* Subtle glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -30%)",
            width: "1200px",
            height: "800px",
            background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
          }}
        />

        {/* Main content */}
        <div className="relative z-10 pt-28 flex flex-col">
          {/* Hero text - contained and centered */}
          <div className="w-full flex justify-center px-6 mt-16">
            <div className="w-full max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-[56px] font-medium text-gray-900 leading-[1.1] text-balance"
              >
                {t("title")}
                <br />
                {t("titleConnector")} <HeroRotatingWord />
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-lg text-gray-500"
              >
                {t("description")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 flex items-center gap-6 relative z-20"
              >
                <button
                  onClick={() => document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-6 py-3 md:px-8 md:py-4 bg-[#2b363d] text-white font-medium rounded-lg hover:bg-[#1e272e] transition-colors text-sm md:text-base"
                >
                  {t("cta1")}
                </button>
                <a
                  href="/pricing"
                  className="px-6 py-3 md:px-8 md:py-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors text-sm md:text-base"
                >
                  {t("cta2")}
                </a>
                <button
                  onClick={() => document.getElementById("coex-section")?.scrollIntoView({ behavior: "smooth" })}
                  className="hidden md:flex font-medium transition-colors items-center gap-2 text-sm md:text-base px-6 py-3 md:px-8 md:py-4 rounded-lg text-[#1a2429] bg-[#cfff00] hover:bg-[#b8e600]"
                >
                  <span className="font-bold">{t("newLabel")}</span> {t("newText")}
                  <span aria-hidden="true">→</span>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Hero Animation — layers animadas */}
          <div className="relative mt-10 px-4 md:px-0">
            <div
              className="absolute bottom-0 left-0 right-0 h-24 md:h-32 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to top, #f4f5f7 0%, rgba(244, 245, 247, 0.9) 50%, transparent 100%)",
              }}
            />
            <HeroAnimation />
          </div>
        </div>
      </section>

      <FeatureCardsSection />
      <LogoCloud />
      <PodcastSection />
      <AISection />
      <PlanosHomeSection />
      <LeadCaptureSection />
      <ProductDirectionSection />
      <IntegrationOrbit />
      <CoExSection />
      <BlogSection />
      <EventsSection />
      <CTASection />
      <Footer />
    </>
  )
}
