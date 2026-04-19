"use client"

import { useState } from "react"
import { motion } from "framer-motion"
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

const pageData = getPageBySlug("redes-sociais")!
const related = getRelatedPages(pageData.relatedSlugs)

const channels = [
  {
    name: "Instagram Direct",
    color: "#E1306C",
    description: "Gerencie mensagens diretas do Instagram. Atenda DMs, responda stories e organize por departamento. Tudo sem sair do painel da ERA.",
    details: ["Atendimento de DMs automatizado", "Distribuição por departamento", "Histórico completo do cliente"],
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    name: "Facebook Messenger",
    color: "#0084FF",
    description: "Conexão direta com o Messenger. Atenda clientes que chegam pela página do Facebook com distribuição automática e chatbot integrado.",
    details: ["Atendimento via página do Facebook", "Chatbot personalizado", "Transferência entre departamentos", "Métricas de atendimento"],
    icon: "M12 2C6.477 2 2 6.145 2 11.243c0 2.907 1.432 5.502 3.68 7.2V22l3.363-1.847c.898.248 1.852.384 2.84.384h.118C17.523 20.537 22 16.392 22 11.243 22 6.145 17.523 2 12 2zm1.187 12.46l-2.55-2.72L5.5 14.46l5.62-5.96 2.55 2.72 5.137-2.72-5.62 5.96z",
  },
  {
    name: "Telegram",
    color: "#0088CC",
    description: "Canal de atendimento por Telegram integrado ao mesmo painel. Ideal para empresas que atendem público técnico ou internacional.",
    details: ["Atendimento de grupos e canais", "Bots personalizados", "Envio de mídia e documentos", "Histórico persistente"],
    icon: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.504-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
  },
  {
    name: "Google Chat",
    color: "#4285F4",
    description: "Integração com Google Chat para gerenciamento de conversas corporativas. Centralize a comunicação do Google Workspace no painel ERA.",
    details: ["Integração com Workspace", "Conversas corporativas", "Gerenciamento centralizado", "Respostas pelo painel"],
    icon: "M22 2H2v20l4-4h16V2zm-9 13h-2v-2h2v2zm0-4h-2V6h2v5z",
  },
  {
    name: "E-mail",
    color: "#EA4335",
    description: "Recebimento e distribuição de e-mails para grupos ou usuários específicos. Responda diretamente pela plataforma sem alternar entre ferramentas.",
    details: ["Distribuição automática", "Resposta pelo painel ERA", "Templates de e-mail", "Histórico por contato"],
    icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
  },
]

const sharedFeatures = [
  "Distribuição automática entre atendentes",
  "Chatbot personalizado por rede social",
  "Tags, tabulações e status personalizáveis",
  "Transferência entre departamentos",
  "Monitoramento e supervisão em tempo real",
  "Relatórios por canal (métricas separadas)",
  "Pesquisa de satisfação automática",
  "Histórico unificado por cliente",
]

export default function RedesSociaisPageClient() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeChannel, setActiveChannel] = useState(0)

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
              <li className="text-gray-600">Instagram e Redes Sociais</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-medium text-gray-900 mb-5" style={{ letterSpacing: "-0.0325em", lineHeight: 1.1, fontVariationSettings: '"opsz" 28' }}>
              Atendimento por Instagram, Messenger e Telegram em uma única tela
            </h1>
            <p className="text-gray-500 text-base max-w-2xl mb-8">
              Centralize mensagens de todas as redes sociais em uma única plataforma. O atendente sabe de qual canal veio a mensagem e pode adaptar a abordagem.
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
        </div>
      </section>

      {/* Channel icons row */}
      <section className="py-8 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            {channels.map((channel, i) => (
              <button
                key={channel.name}
                onClick={() => setActiveChannel(i)}
                className={`flex flex-col items-center gap-2 group transition-all ${activeChannel === i ? "scale-110" : "hover:opacity-90"}`}
              >
                <div className="flex items-center justify-center">
                  <svg className="w-10 h-10" fill={channel.color} viewBox="0 0 24 24"><path d={channel.icon} /></svg>
                </div>
                <span className={`text-xs font-medium ${activeChannel === i ? "text-gray-900" : "text-gray-700"}`}>
                  {channel.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active channel detail */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {channels.map((channel, i) => (
            activeChannel === i && (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col lg:flex-row gap-10 items-start"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: channel.color + "20" }}>
                      <svg className="w-5 h-5" fill={channel.color} viewBox="0 0 24 24"><path d={channel.icon} /></svg>
                    </div>
                    <h2 className="text-2xl font-medium text-gray-900">{channel.name}</h2>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{channel.description}</p>
                  <ul className="space-y-2">
                    {channel.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: channel.color }} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full lg:w-80 rounded-xl border border-gray-200/50 bg-white p-6">
                  <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-4">Exemplo de conversa</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: channel.color + "30" }}>
                        <svg className="w-3 h-3" fill={channel.color} viewBox="0 0 24 24"><path d={channel.icon} /></svg>
                      </div>
                      <div className="bg-gray-100/80 rounded-lg px-3 py-2 text-xs text-gray-600">
                        Olá, preciso de ajuda com meu pedido #4521
                      </div>
                    </div>
                    <div className="flex items-start gap-2 justify-end">
                      <div className="rounded-lg px-3 py-2 text-xs text-zinc-900" style={{ backgroundColor: "#2b363d" }}>
                        Olá! Vou verificar seu pedido agora mesmo.
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </section>

      {/* Shared features */}
      <section className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3" style={{ letterSpacing: "-0.0325em" }}>
            Funcionalidades compartilhadas entre todos os canais
          </h2>
          <p className="text-gray-500 text-sm mb-10 max-w-xl">
            Independente da rede social, todas as conversas passam pelo mesmo motor de distribuição e gestão.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sharedFeatures.map((feat) => (
              <div key={feat} className="flex items-start gap-2.5 text-sm text-gray-600 py-2">
                <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#2b363d" }} />
                {feat}
              </div>
            ))}
          </div>
        </div>
      </section>

      <EraChatFAQ faqs={pageData.faqs} />
      <RelatedPages pages={related} />
      <BlogAndSlideshow tags={["redes-sociais", "chat", "atendimento"]} categoryProduct="era-chat" />
      <SubpageCTA onRequestQuote={() => setModalOpen(true)} />
      <Footer />
      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} context="planos" />
    </>
  )
}
