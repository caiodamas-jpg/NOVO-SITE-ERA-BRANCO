"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Check } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LeadCaptureModal } from "@/components/lead-capture/LeadCaptureModal"
import RelatedBlogPosts from "@/components/shared/RelatedBlogPosts"
import CompanySlideshow from "@/components/shared/CompanySlideshow"
import { eraChatPages, hubBenefits } from "@/data/era-chat-pages"

export default function EraChatHubClient() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#2b363d" }} />
              <span className="text-sm text-gray-500">Chat</span>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-[48px] font-medium text-gray-900 mb-5"
              style={{ letterSpacing: "-0.0325em", lineHeight: 1.1, fontVariationSettings: '"opsz" 28' }}
            >
              Chat — Atendimento inteligente por mensagens
            </h1>
            <p className="text-gray-500 text-base max-w-2xl mb-8">
              Gerencie WhatsApp, Instagram, Messenger, Telegram, e-mail, LiveChat e mais canais em uma única plataforma com chatbot, IA generativa e distribuição inteligente.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => setModalOpen(true)}
                className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg hover:opacity-90 transition-opacity text-xs md:text-sm font-medium"
                style={{ backgroundColor: "#cfff00", color: "#1a2429" }}
              >
                Solicitar cotação
              </button>
              <Link
                href="/pricing#era-chat"
                className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg hover:opacity-90 transition-opacity text-xs md:text-sm font-medium"
                style={{ backgroundColor: "#cfff00", color: "#1a2429" }}
              >
                Ver planos Chat
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {[
                { value: "12", label: "Canais integrados" },
                { value: "IA 24/7", label: "Generativa" },
                { value: "+100", label: "Integrações CRM" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                  <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature grid — 7 cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-10" style={{ letterSpacing: "-0.0325em" }}>
            Funcionalidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eraChatPages.map((page, i) => (
              <motion.div
                key={page.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link
                  href={`/era-chat/${page.slug}`}
                  className="block p-5 rounded-xl border border-gray-200/50 bg-white hover:border-gray-300 transition-colors group h-full"
                >
                  <h3 className="text-gray-900 font-medium text-sm mb-2">{page.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{page.subtitle}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
                    Saiba mais <ChevronRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8" style={{ letterSpacing: "-0.0325em" }}>
            Benefícios do Chat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {hubBenefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-2.5 text-sm text-gray-600">
                <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#2b363d" }} />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4" style={{ letterSpacing: "-0.0325em" }}>
            Pronto para transformar seu atendimento por chat?
          </h2>
          <p className="text-gray-500 text-sm mb-8">Um especialista ERA pode ajudar a encontrar a solução ideal.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg hover:opacity-90 transition-opacity text-xs md:text-sm font-medium"
              style={{ backgroundColor: "#cfff00", color: "#1a2429" }}
            >
              Solicitar cotação
            </button>
            <Link
              href="/pricing#era-chat"
              className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg hover:opacity-90 transition-opacity text-xs md:text-sm font-medium"
              style={{ backgroundColor: "#cfff00", color: "#1a2429" }}
            >
              Ver planos Chat
            </Link>
          </div>
        </div>
      </section>

      <CompanySlideshow />

      <RelatedBlogPosts
        tags={["whatsapp", "chatbot", "atendimento", "ia"]}
        categoryProduct="era-chat"
        title="Artigos relacionados sobre Chat"
      />
      <Footer />
      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} context="planos" />
    </>
  )
}
