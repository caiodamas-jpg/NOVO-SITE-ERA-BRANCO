"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Check } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import EraChatFAQ from "./EraChatFAQ"
import RelatedPages from "./RelatedPages"
import SubpageCTA from "./SubpageCTA"
import { LeadCaptureModal } from "@/components/lead-capture/LeadCaptureModal"
import type { EraChatPage } from "@/data/era-chat-pages"
import { getRelatedPages } from "@/data/era-chat-pages"

interface EraChatSubpageClientProps {
  page: EraChatPage
}

export default function EraChatSubpageClient({ page }: EraChatSubpageClientProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const related = getRelatedPages(page.relatedSlugs)

  // Split features into two groups for visual layout
  const featuresLeft = page.features.slice(0, Math.ceil(page.features.length / 2))
  const featuresRight = page.features.slice(Math.ceil(page.features.length / 2))

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-xs text-gray-500">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li><ChevronRight className="w-3 h-3" /></li>
              <li><Link href="/era-chat" className="hover:text-gray-900 transition-colors">Chat</Link></li>
              <li><ChevronRight className="w-3 h-3" /></li>
              <li className="text-gray-600">{page.title}</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1
              className="text-3xl md:text-4xl lg:text-[48px] font-medium text-gray-900 mb-5"
              style={{ letterSpacing: "-0.0325em", lineHeight: 1.1, fontVariationSettings: '"opsz" 28' }}
            >
              {page.h1}
            </h1>
            <p className="text-gray-500 text-base max-w-2xl mb-8">{page.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => setModalOpen(true)} className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg hover:opacity-90 transition-opacity text-xs md:text-sm font-medium" style={{ backgroundColor: "#2b363d", color: "#ffffff" }}>
                Solicitar cotação
              </button>
              <Link href="/pricing#era-chat" className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg hover:opacity-90 transition-opacity text-xs md:text-sm font-medium" style={{ backgroundColor: "#cfff00", color: "#1a2429" }}>
                Ver planos Chat
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features — alternating layout instead of generic cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-10" style={{ letterSpacing: "-0.0325em" }}>
            Funcionalidades
          </h2>

          <div className="space-y-6">
            {page.features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl border border-gray-200/50 bg-gray-50 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ backgroundColor: "#2b363d", color: "#ffffff" }}>
                      {i + 1}
                    </div>
                    <h3 className="text-gray-900 font-medium text-base">{feat.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{feat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key benefits summary */}
      <section className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8" style={{ letterSpacing: "-0.0325em" }}>
            Por que escolher o {page.title} da ERA
          </h2>
          <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
            <p>
              O <span className="text-gray-900 font-medium">{page.title}</span> da ERA CX centraliza tudo em uma única plataforma. Sua equipe não precisa alternar entre ferramentas — o atendente trabalha em um painel único com distribuição automática, histórico completo e relatórios em tempo real.
            </p>
            <p>
              Combinado com <Link href="/era-chat/chatbot" className="text-gray-900 font-medium underline underline-offset-2 hover:opacity-80">chatbot</Link> e <Link href="/era-chat/ia-generativa" className="text-gray-900 font-medium underline underline-offset-2 hover:opacity-80">IA generativa</Link>, você automatiza até 80% dos atendimentos repetitivos. E com <Link href="/integrations" className="text-gray-900 font-medium underline underline-offset-2 hover:opacity-80">+100 integrações nativas</Link>, o sistema se conecta ao seu CRM ou ERP.
            </p>
          </div>
        </div>
      </section>

      <EraChatFAQ faqs={page.faqs} />
      <RelatedPages pages={related} />
      <SubpageCTA onRequestQuote={() => setModalOpen(true)} />
      <Footer />
      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} context="planos" />
    </>
  )
}
