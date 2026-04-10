"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Plus, X } from "lucide-react"
import Image from "next/image"

const featureCards = [
  {
    title: "Gerencie Times",
    description: "Crie e organize seus times de atendimento, suporte, vendas e financeiro tudo em um só lugar.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Time-cbtqC8Nqgc0Oyli9ZWzhSylTJ1nVAh.png",
  },
  {
    title: "Tenha Credibilidade com a API Oficial da Meta",
    description: "Conecte-se à API oficial da Meta direto do sistema e tenha maior estabilidade e segurança nas suas comunicações.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/API-I80wkFpfYsJiMC8BJiu6noSeJ8diCt.png",
  },
  {
    title: "Mais dados, Mais vendas",
    description: "Transforme cada interação em inteligência: acompanhe métricas de atendimento, identifique oportunidades e tome decisões que aceleram suas vendas.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mkt-ISqHoXwlAgcjm20hikenB1g9JG1kwG.png",
  },
]

function FeatureCard({ card, index }: { card: typeof featureCards[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="bg-white border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer group overflow-hidden relative flex flex-col justify-end"
      style={{
        aspectRatio: "336 / 360",
        borderRadius: "30px",
        height: "360px",
        isolation: "isolate",
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          maskImage: "linear-gradient(#000 60%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(#000 60%, transparent 95%)",
        }}
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
        />
      </div>

      {/* Expanded content overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-white/95 z-20 p-6 flex flex-col justify-center"
          >
            <h3 className="text-gray-900 font-medium text-lg mb-3">{card.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div
        className="relative z-10 flex items-center justify-between w-full"
        style={{ padding: "0 24px 40px", gap: "16px" }}
      >
        <h3 className="text-gray-900 font-medium text-lg leading-tight">{card.title}</h3>
        <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 group-hover:border-gray-300 group-hover:text-gray-600 transition-colors flex-shrink-0">
          {isExpanded ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </div>
    </motion.div>
  )
}

export function FeatureCardsSection() {
  return (
    <div className="relative z-20 py-40" style={{ backgroundColor: "#e9ecef" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, #f4f5f7 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] text-gray-900 max-w-md"
              style={{
                letterSpacing: "-0.0325em",
                fontVariationSettings: '"opsz" 28',
                fontWeight: 538,
                lineHeight: 1.1,
              }}
            >
              Feito para grandes empresas com operações complexas
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-md"
            >
              <p className="text-gray-500 leading-relaxed">
                A ERA foi projetada para acompanhar a complexidade da sua operação. Infraestrutura robusta, segurança de ponta e flexibilidade para se adaptar às regras do seu negócio.{" "}
                <a href="#" className="text-gray-900 inline-flex items-center gap-1 hover:underline">
                  Saiba mais <ChevronRight className="w-4 h-4" />
                </a>
              </p>
            </motion.div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featureCards.map((card, index) => (
              <FeatureCard key={card.title} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
