"use client"

import { motion } from "framer-motion"
import { Check, ChevronRight, MessageCircle, Phone, Layers } from "lucide-react"
import Link from "next/link"

const solutionCards = [
  {
    id: "era-chat",
    name: "Chat",
    icon: MessageCircle,
    tagline: "Atendimento por mensagens",
    description: "WhatsApp, Instagram, Messenger, Telegram, e-mail e LiveChat em uma plataforma com chatbot e IA generativa.",
    color: "#22c55e",
    highlights: [
      "WhatsApp Business API",
      "IA Generativa e chatbots",
      "Distribuição inteligente",
      "Kanban e gestão visual",
      "+100 integrações nativas",
    ],
    href: "/era-chat",
    plansHref: "/pricing#era-chat",
  },
  {
    id: "era-voz",
    name: "Voz",
    icon: Phone,
    tagline: "PABX em nuvem e telefonia virtual",
    description: "PABX virtual completo na nuvem: ramais ilimitados, URA inteligente, call center com filas, discador preditivo e monitoramento.",
    color: "#3b82f6",
    highlights: [
      "PABX em nuvem sem hardware",
      "Ramais ilimitados com app",
      "URA inteligente multinível",
      "Call Center com filas e skills",
      "Monitoramento com sussurro",
    ],
    href: "/era-voz",
    plansHref: "/pricing#era-voz",
  },
  {
    id: "era-omni",
    name: "Mensageria",
    icon: Layers,
    tagline: "Todos os canais unificados",
    description: "Unifique voz e chat em uma plataforma com histórico único, transição entre canais e IA avançada.",
    color: "#2b363d",
    highlighted: true,
    highlights: [
      "Dashboard unificado voz + chat",
      "Transição entre canais",
      "IA Generativa 24/7",
      "Histórico único do cliente",
      "Agentes multi-skill ilimitados",
    ],
    href: "/era-omni",
    plansHref: "/pricing#era-omni",
  },
]

export default function PlanosHomeSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#e8ecf1" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#2b363d" }} />
            <span className="text-sm text-gray-500">Soluções</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-4"
            style={{
              letterSpacing: "-0.0325em",
              lineHeight: 1.1,
              fontVariationSettings: '"opsz" 28',
            }}
          >
            A plataforma completa de
            <br />
            <span style={{ color: "#2b363d" }}>comunicação para sua empresa</span>
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Chat, Voz ou Omnichannel — escale seu atendimento com a solução certa.
          </p>
        </motion.div>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {solutionCards.map((card, i) => {
            const Icon = card.icon
            const isHighlighted = card.highlighted
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={`relative rounded-xl border p-6 flex flex-col ${
                  isHighlighted
                    ? "border-[#cfff00]/40 bg-white/80 shadow-lg shadow-[#cfff00]/5"
                    : "border-gray-200/50 bg-white"
                }`}
              >
                {isHighlighted && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap"
                    style={{ backgroundColor: "#2b363d", color: "#ffffff" }}
                  >
                    Completo
                  </div>
                )}

                {/* Icon + name */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: card.color + "20" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: card.color }} />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold text-base">{card.name}</h3>
                    <p className="text-gray-500 text-[10px]">{card.tagline}</p>
                  </div>
                </div>

                <p className="text-gray-500 text-xs leading-relaxed mb-5">{card.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 flex-1">
                  {card.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "#2b363d" }} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="space-y-2">
                  <Link
                    href={card.plansHref}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#2b363d", color: "#ffffff" }}
                  >
                    Ver planos
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={card.href}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Conhecer {card.name}
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-full text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors text-xs font-medium"
          >
            Comparar todos os planos
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  )
}
