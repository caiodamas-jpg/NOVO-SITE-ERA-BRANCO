"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Check, X } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import EraChatFAQ from "@/components/era-chat/EraChatFAQ"
import { LeadCaptureModal } from "@/components/lead-capture/LeadCaptureModal"
import RelatedBlogPosts from "@/components/shared/RelatedBlogPosts"
import { OmniChannelAnimation } from "@/components/ai-section"
import { eraOmniPages, hubFaqs, comparisonData } from "@/data/era-omni-pages"

const exclusiveFeatures = [
  { title: "Transição entre canais", description: "O cliente começa por WhatsApp e termina por telefone — sem repetir informação, sem perder contexto." },
  { title: "Histórico único", description: "Todo o histórico de interação do cliente, de qualquer canal, acessível em uma única timeline." },
  { title: "Dashboard consolidado", description: "Métricas de voz e chat em um único painel. TMA, TME, conversas e chamadas lado a lado." },
  { title: "IA que analisa seus atendentes", description: "Avaliação automática de cordialidade, agilidade, conhecimento, resolução e profissionalismo." },
]

export default function EraOmniHubClient() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Navbar />

      {/* Hero premium */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#2b363d" }} />
              <span className="text-sm text-gray-500">Mensageria</span>
              <span className="ml-2 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase" style={{ backgroundColor: "#2b363d", color: "#ffffff" }}>Completo</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[52px] font-medium text-gray-900 mb-6" style={{ letterSpacing: "-0.0325em", lineHeight: 1.08, fontVariationSettings: '"opsz" 28' }}>
              Omnichannel — Todos os canais.{"\n"}Uma plataforma. Uma experiência.
            </h1>
            <p className="text-gray-500 text-base max-w-2xl mb-10">
              Unifique voz, WhatsApp, Instagram, Messenger, Telegram, e-mail, LiveChat e mais 5 canais em uma plataforma com histórico único do cliente, transição transparente entre canais, IA que analisa a qualidade do atendimento e personalização completa.
            </p>
            <div className="flex flex-wrap gap-3 mb-14">
              <button onClick={() => setModalOpen(true)} className="px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium" style={{ backgroundColor: "#cfff00", color: "#1a2429" }}>Solicitar cotação</button>
              <Link href="/pricing#era-omni" className="px-5 py-2.5 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors text-sm">Ver planos Omnichannel</Link>
            </div>
            <div className="flex flex-wrap gap-8">
              {[{ v: "12", l: "Canais" }, { v: "1", l: "Plataforma" }, { v: "1", l: "Histórico" }, { v: "24/7", l: "Com IA" }].map((s) => (
                <div key={s.l}><span className="text-2xl font-bold text-gray-900">{s.v}</span><p className="text-[10px] text-gray-500 mt-0.5">{s.l}</p></div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Phone + Dashboard animation */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <OmniChannelAnimation />
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-6 border-t border-white/10" style={{ backgroundColor: "#1e2a30" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-3 text-center" style={{ letterSpacing: "-0.0325em" }}>Por que escolher o Omnichannel?</h2>
          <p className="text-white/50 text-sm text-center mb-10">O Omnichannel inclui tudo do Chat e Voz, mais funcionalidades exclusivas de unificação.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4 text-white/50 font-medium">Capacidade</th>
                  <th className="text-center py-3 px-4 text-white/50 font-medium">Chat</th>
                  <th className="text-center py-3 px-4 text-white/50 font-medium">Voz</th>
                  <th className="text-center py-3 px-4 font-medium text-[#cfff00]">Mensageria</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.feature} className="border-b border-white/10">
                    <td className="py-3 px-4 text-white/70 text-xs">{row.feature}</td>
                    <td className="text-center py-3 px-4">{row.chat ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-white/20 mx-auto" />}</td>
                    <td className="text-center py-3 px-4">{row.voz ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-white/20 mx-auto" />}</td>
                    <td className="text-center py-3 px-4">{row.omni ? <Check className="w-4 h-4 text-[#cfff00] mx-auto" /> : <X className="w-4 h-4 text-white/20 mx-auto" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link href="/era-chat" className="text-xs text-white/50 hover:text-white transition-colors">Conheça o Chat →</Link>
            <Link href="/era-voz" className="text-xs text-white/50 hover:text-white transition-colors">Conheça o Voz →</Link>
            <button onClick={() => setModalOpen(true)} className="px-4 py-2 rounded-lg text-xs font-medium" style={{ backgroundColor: "#cfff00", color: "#1a2429" }}>Solicitar cotação Omnichannel</button>
          </div>
        </div>
      </section>

      {/* Exclusive features */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-10" style={{ letterSpacing: "-0.0325em" }}>O que torna o Omnichannel único</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {exclusiveFeatures.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.08 }}
                className="p-5 rounded-xl border border-[#cfff00]/15 bg-[#2b363d]/5">
                <h3 className="text-gray-900 font-medium text-sm mb-2">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-10" style={{ letterSpacing: "-0.0325em" }}>Funcionalidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eraOmniPages.map((page, i) => (
              <motion.div key={page.slug} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                <Link href={`/era-omni/${page.slug}`} className="block p-5 rounded-xl border border-gray-200/50 bg-white hover:border-gray-300 transition-colors group h-full">
                  <h3 className="text-gray-900 font-medium text-sm mb-2">{page.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{page.subtitle}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Saiba mais <ChevronRight className="w-3 h-3" /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <EraChatFAQ faqs={hubFaqs} />

      <section className="py-20 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4" style={{ letterSpacing: "-0.0325em" }}>Pronto para unificar sua operação?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <button onClick={() => setModalOpen(true)} className="px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium" style={{ backgroundColor: "#cfff00", color: "#1a2429" }}>Solicitar cotação</button>
            <Link href="/pricing#era-omni" className="px-5 py-2.5 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors text-sm">Ver planos Omnichannel</Link>
          </div>
        </div>
      </section>

      <RelatedBlogPosts
        tags={["omnichannel", "atendimento", "unificado"]}
        categoryProduct="era-omni"
        title="Artigos relacionados sobre Omni"
      />
      <Footer />
      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} context="planos" />
    </>
  )
}
