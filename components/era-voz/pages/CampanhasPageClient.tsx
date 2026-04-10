"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import EraChatFAQ from "@/components/era-chat/EraChatFAQ"
import SubpageCTA from "@/components/era-chat/SubpageCTA"
import { LeadCaptureModal } from "@/components/lead-capture/LeadCaptureModal"
import VozHeroAnimation from "../VozHeroAnimation"
import { getVozPageBySlug, getVozRelatedPages } from "@/data/era-voz-pages"

const pageData = getVozPageBySlug("campanhas")!
const related = getVozRelatedPages(pageData.relatedSlugs)

export default function CampanhasPageClient() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Navbar />
      <section className="pt-32 pb-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-xs text-gray-500">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li><ChevronRight className="w-3 h-3" /></li>
              <li><Link href="/era-voz" className="hover:text-gray-900 transition-colors">Voz</Link></li>
              <li><ChevronRight className="w-3 h-3" /></li>
              <li className="text-gray-600">{pageData.title}</li>
            </ol>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-medium text-gray-900 mb-5" style={{ letterSpacing: "-0.0325em", lineHeight: 1.1, fontVariationSettings: '"opsz" 28' }}>{pageData.h1}</h1>
            <p className="text-gray-500 text-base max-w-2xl mb-8">{pageData.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => setModalOpen(true)} className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg hover:opacity-90 transition-opacity text-xs md:text-sm font-medium" style={{ backgroundColor: "#f97316", color: "#ffffff" }}>Solicitar cotação</button>
              <Link href="/pricing#era-voz" className="px-4 py-2 md:px-5 md:py-2.5 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors text-xs md:text-sm">Ver planos Voz</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animation */}
      <section className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto">
          <VozHeroAnimation />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-10" style={{ letterSpacing: "-0.0325em" }}>Funcionalidades</h2>
          {pageData.features.map((feat, i) => (
            <motion.div key={feat.title} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl border border-gray-200/50 bg-gray-50 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ backgroundColor: "#2b363d", color: "#ffffff" }}>{i + 1}</div>
                  <h3 className="text-gray-900 font-medium text-base">{feat.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{feat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-medium text-gray-900 mb-6">Conheça também</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((p) => (
              <Link key={p.slug} href={`/era-voz/${p.slug}`} className="block p-5 rounded-xl border border-gray-200/50 bg-white hover:border-gray-300 transition-colors group">
                <h3 className="text-gray-900 font-medium text-sm mb-1">{p.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{p.subtitle}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Saiba mais <ChevronRight className="w-3 h-3" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EraChatFAQ faqs={pageData.faqs} />
      <SubpageCTA onRequestQuote={() => setModalOpen(true)} />
      <Footer />
      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} context="planos" />
    </>
  )
}
