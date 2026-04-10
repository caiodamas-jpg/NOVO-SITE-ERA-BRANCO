"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Check } from "lucide-react"
import VozHeroAnimation from "./VozHeroAnimation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import EraChatFAQ from "@/components/era-chat/EraChatFAQ"
import { LeadCaptureModal } from "@/components/lead-capture/LeadCaptureModal"
import RelatedBlogPosts from "@/components/shared/RelatedBlogPosts"
import { eraVozPages, hubFeatures } from "@/data/era-voz-pages"

const hubFaqs = [
  { question: "O que é o Voz?", answer: "O Voz é o PABX em nuvem da ERA que substitui seu PABX físico. Unifica PABX virtual, call center, URA inteligente, discador preditivo, gravação e monitoramento em uma plataforma 100% cloud." },
  { question: "O Voz substitui meu PABX físico?", answer: "Sim. O PABX virtual da ERA substitui completamente seu PABX físico, com mais recursos, sem hardware, sem manutenção e com escalabilidade imediata." },
  { question: "Qual a diferença entre PABX em nuvem e PABX virtual?", answer: "São a mesma coisa. PABX em nuvem (ou PABX virtual) significa que toda a telefonia roda em servidores na nuvem, sem necessidade de equipamentos físicos na sua empresa." },
  { question: "Quantos ramais o PABX em nuvem suporta?", answer: "Ilimitados. De 5 a 500+ ramais, a plataforma escala conforme sua operação." },
  { question: "O PABX virtual funciona com minha operadora?", answer: "Sim, suporta gateways SIP registrados e por IP confiável com múltiplas operadoras e redundância automática." },
  { question: "Posso integrar o PABX em nuvem com meu CRM?", answer: "Sim, CTI com pop-up de dados e +100 integrações nativas com CRMs e ERPs." },
]

const enterpriseCards = [
  { title: "Filas inteligentes com distribuição por skills", description: "Distribua chamadas por competência do agente, prioridade de fila e nível de serviço configurável." },
  { title: "Monitoramento com sussurro", description: "Supervisores escutam, sussurram orientações e intervêm na chamada ao vivo." },
  { title: "Discador preditivo", description: "Discagem automática com detecção de secretária eletrônica e alimentação via mailing." },
  { title: "CTI com pop-up do CRM", description: "Informações do cliente na tela antes de atender. Integração com +100 CRMs." },
]

export default function EraVozHubClient() {
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
              <span className="text-sm text-gray-500">Voz</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-medium text-gray-900 mb-5" style={{ letterSpacing: "-0.0325em", lineHeight: 1.1, fontVariationSettings: '"opsz" 28' }}>
              Voz — PABX em Nuvem e Telefonia Virtual para sua empresa
            </h1>
            <p className="text-gray-500 text-base max-w-2xl mb-8">
              PABX virtual completo na nuvem: ramais ilimitados, URA inteligente multinível, call center com filas, discador preditivo, gravação e monitoramento — sem hardware, sem manutenção.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <button onClick={() => setModalOpen(true)} className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg hover:opacity-90 transition-opacity text-xs md:text-sm font-medium" style={{ backgroundColor: "#f97316", color: "#ffffff" }}>Solicitar cotação</button>
              <Link href="/pricing#era-voz" className="px-4 py-2 md:px-5 md:py-2.5 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors text-xs md:text-sm">Ver planos Voz</Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {[{ v: "+40.000", l: "Empresas" }, { v: "Ilimitadas", l: "Chamadas" }, { v: "1 ano", l: "Gravação" }, { v: "24/7", l: "Monitoramento" }].map((s) => (
                <div key={s.l}><span className="text-xl font-bold text-gray-900">{s.v}</span><p className="text-[10px] text-gray-500 mt-0.5">{s.l}</p></div>
              ))}
            </div>
          </motion.div>

          {/* Hero Animation */}
          <div className="mt-12">
            <VozHeroAnimation />
          </div>
        </div>
      </section>

      {/* Enterprise section */}
      <section className="py-20 px-6 border-t border-gray-200" style={{ backgroundColor: "#1e2a30" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3" style={{ letterSpacing: "-0.0325em" }}>PABX em nuvem para empresas que exigem excelência</h2>
            <p className="text-gray-500 text-sm mb-10 max-w-2xl">Substitua seu PABX físico por um PABX virtual completo na nuvem. Sem hardware, sem manutenção — com URA inteligente, filas de call center, discador preditivo e monitoramento em tempo real.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {enterpriseCards.map((card, i) => (
              <motion.div key={card.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.08 }}
                className="p-5 rounded-xl border border-[#cfff00]/15 bg-[#2b363d]/5">
                <h3 className="text-gray-900 font-medium text-sm mb-2">{card.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
          <Link href="/era-voz/pabx" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity" style={{ color: "#2b363d" }}>
            Conheça nosso PABX em Nuvem <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-10" style={{ letterSpacing: "-0.0325em" }}>Funcionalidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eraVozPages.map((page, i) => (
              <motion.div key={page.slug} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                <Link href={`/era-voz/${page.slug}`} className="block p-5 rounded-xl border border-gray-200/50 bg-white hover:border-gray-300 transition-colors group h-full">
                  <h3 className="text-gray-900 font-medium text-sm mb-2">{page.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{page.subtitle}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Saiba mais <ChevronRight className="w-3 h-3" /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8" style={{ letterSpacing: "-0.0325em" }}>Recursos inclusos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {hubFeatures.map((f) => (<div key={f} className="flex items-start gap-2.5 text-sm text-gray-600"><Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#2b363d" }} />{f}</div>))}
          </div>
        </div>
      </section>

      <EraChatFAQ faqs={hubFaqs} />

      {/* CTA */}
      <section className="py-20 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4" style={{ letterSpacing: "-0.0325em" }}>Pronto para modernizar sua operação de voz?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <button onClick={() => setModalOpen(true)} className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg hover:opacity-90 transition-opacity text-xs md:text-sm font-medium" style={{ backgroundColor: "#f97316", color: "#ffffff" }}>Solicitar cotação</button>
            <Link href="/pricing#era-voz" className="px-4 py-2 md:px-5 md:py-2.5 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors text-xs md:text-sm">Ver planos Voz</Link>
          </div>
          <p className="text-gray-500 text-xs mt-4">Ou <Link href="/pricing#era-omni" className="text-gray-900 underline underline-offset-2 hover:opacity-80">conheça o Omnichannel para unificar voz e chat</Link></p>
        </div>
      </section>

      <RelatedBlogPosts
        tags={["call-center", "pabx", "telefonia", "ura"]}
        categoryProduct="era-voz"
        title="Artigos relacionados sobre Voz"
      />
      <Footer />
      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} context="planos" />
    </>
  )
}
