"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Check } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import BlogAndSlideshow from "@/components/shared/BlogAndSlideshow"
import EraChatFAQ from "../EraChatFAQ"
import RelatedPages from "../RelatedPages"
import SubpageCTA from "../SubpageCTA"
import { LeadCaptureModal } from "@/components/lead-capture/LeadCaptureModal"
import { getPageBySlug, getRelatedPages } from "@/data/era-chat-pages"

const pageData = getPageBySlug("whatsapp")!
const related = getRelatedPages(pageData.relatedSlugs)

const chatMessages = [
  { id: 1, from: "user", text: "Oi! Gostaria de saber sobre os planos empresariais.", delay: 0.3 },
  { id: 2, from: "bot", text: "Olá! Sou a assistente virtual da ERA. Posso te ajudar com isso! Qual o tamanho da sua equipe?", delay: 1.5 },
  { id: 3, from: "user", text: "Somos 15 atendentes.", delay: 3.0 },
  { id: 4, from: "bot", text: "Ótimo! Para equipes desse tamanho, recomendo o plano Padrão com até 3 números e distribuição automática. Quer que um especialista entre em contato?", delay: 4.5 },
  { id: 5, from: "user", text: "Sim, por favor!", delay: 6.0 },
  { id: 6, from: "bot", text: "Perfeito! Um especialista entrará em contato em até 2h. Obrigada!", delay: 7.0 },
]

function WhatsAppDemo() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    chatMessages.forEach((msg) => {
      if (msg.from === "bot") {
        setTimeout(() => setIsTyping(true), msg.delay * 1000 - 700)
      }
      setTimeout(() => {
        setIsTyping(false)
        setVisibleMessages((prev) => [...prev, msg.id])
      }, msg.delay * 1000)
    })
  }, [started])

  return (
    <div ref={ref} className="flex justify-center">
      <div style={{ width: 280, borderRadius: 40, border: "8px solid #2a2a2a", overflow: "hidden", background: "#1a1a1a" }}>
        {/* Notch */}
        <div className="flex justify-center pt-2 pb-1" style={{ background: "#1a1a1a" }}>
          <div className="w-24 h-5 bg-black rounded-full" />
        </div>
        {/* Header */}
        <div className="flex items-center gap-2 px-3 py-2" style={{ background: "#075E54" }}>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-gray-900 text-xs font-bold">E</div>
          <div>
            <p className="text-gray-900 text-xs font-medium">ERA CX</p>
            <p className="text-green-200 text-[10px]">online</p>
          </div>
        </div>
        {/* Messages */}
        <div className="px-2 py-3 space-y-2 min-h-[320px] max-h-[320px] overflow-y-auto" style={{ background: "#ECE5DD" }}>
          {chatMessages.filter((m) => visibleMessages.includes(m.id)).map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className="max-w-[85%] px-2.5 py-1.5 rounded-lg text-[11px] leading-relaxed"
                style={{
                  background: msg.from === "user" ? "#DCF8C6" : "#fff",
                  color: "#1a1a1a",
                }}
              >
                {msg.text}
                <div className="text-[9px] text-gray-500 text-right mt-0.5">
                  {msg.from === "user" ? "14:3" + msg.id + " ✓✓" : "14:3" + msg.id}
                </div>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white px-3 py-2 rounded-lg flex items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-gray-400"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Input */}
        <div className="flex items-center gap-2 px-2 py-2" style={{ background: "#f0f0f0" }}>
          <div className="flex-1 h-7 bg-white rounded-full px-3 flex items-center">
            <span className="text-gray-400 text-[10px]">Mensagem</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-[#075E54] flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-gray-900" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

const features = [
  "Até 3 números WhatsApp simultâneos",
  "Múltiplos atendentes no mesmo número",
  "Distribuição automática de conversas",
  "Chatbot com menu de botões na abertura",
  "Envio de templates pré-aprovados pela Meta",
  "Mensagens favoritas com hashtag (#bomdia, #preco)",
  "Histórico completo de conversas",
  "Pesquisa de satisfação automática",
  "Tags e status personalizáveis",
  "Transferência entre atendentes e departamentos",
  "Direct Chat: carterização de clientes",
  "Monitoramento em tempo real pelo supervisor",
  "Relatórios avançados e exportáveis",
  "Canais adicionais no mesmo painel",
]

export default function WhatsAppPageClient() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Navbar />

      {/* Hero with phone mockup */}
      <section className="pt-32 pb-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-xs text-gray-500">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li><ChevronRight className="w-3 h-3" /></li>
              <li><Link href="/era-chat" className="hover:text-gray-900 transition-colors">Chat</Link></li>
              <li><ChevronRight className="w-3 h-3" /></li>
              <li className="text-gray-600">WhatsApp Business</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h1
                className="text-3xl md:text-4xl lg:text-[48px] font-medium text-gray-900 mb-5"
                style={{ letterSpacing: "-0.0325em", lineHeight: 1.1, fontVariationSettings: '"opsz" 28' }}
              >
                WhatsApp Business API para atendimento profissional
              </h1>
              <p className="text-gray-500 text-base max-w-lg mb-8">
                Conecte a API oficial da Meta, gerencie múltiplos números, distribua conversas automaticamente e atenda com chatbot e IA generativa.
              </p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => setModalOpen(true)} className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg hover:opacity-90 transition-opacity text-xs md:text-sm font-medium" style={{ backgroundColor: "#2b363d", color: "#ffffff" }}>
                  Solicitar cotação
                </button>
                <Link href="/pricing#era-chat" className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg hover:opacity-90 transition-opacity text-xs md:text-sm font-medium" style={{ backgroundColor: "#cfff00", color: "#1a2429" }}>
                  Ver planos Chat
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-xs"
            >
              <WhatsAppDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features list */}
      <section className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3" style={{ letterSpacing: "-0.0325em" }}>
            Tudo que você precisa para atender por WhatsApp
          </h2>
          <p className="text-gray-500 text-sm mb-10 max-w-xl">
            Funcionalidades completas para transformar seu WhatsApp em uma central de atendimento profissional.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((feat, i) => (
              <motion.div
                key={feat}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
                className="flex items-start gap-2.5 text-sm text-gray-600 py-2"
              >
                <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#2b363d" }} />
                {feat}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution explanation */}
      <section className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6" style={{ letterSpacing: "-0.0325em" }}>
            Como funciona a distribuição de conversas
          </h2>
          <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
            <p>
              Quando um cliente envia uma mensagem, a plataforma distribui automaticamente para o atendente disponível. A distribuição pode ser por <span className="text-gray-900 font-medium">departamento</span>, por <span className="text-gray-900 font-medium">skill do atendente</span> ou por <span className="text-gray-900 font-medium">round-robin</span> (rotação equilibrada).
            </p>
            <p>
              O atendente também pode capturar conversas manualmente da fila. Cada conversa exibe o status no <span className="text-gray-900 font-medium">Kanban visual</span>: aguardando, em atendimento, finalizada. O supervisor acompanha tudo em tempo real e pode intervir quando necessário.
            </p>
            <p>
              Com o <span className="text-gray-900 font-medium">Direct Chat</span>, você pode vincular clientes específicos a atendentes fixos — ideal para carteiras de clientes, vendedores dedicados ou atendimento VIP.
            </p>
          </div>
        </div>
      </section>

      <EraChatFAQ faqs={pageData.faqs} />
      <RelatedPages pages={related} />
      <BlogAndSlideshow tags={["whatsapp", "chat", "atendimento"]} categoryProduct="era-chat" />
      <SubpageCTA onRequestQuote={() => setModalOpen(true)} />
      <Footer />
      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} context="planos" />
    </>
  )
}
