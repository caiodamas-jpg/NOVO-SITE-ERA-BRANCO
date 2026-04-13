"use client"

import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface IntegrationHeroProps {
  onSearch: (query: string) => void
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1500
          const steps = 40
          const increment = target / steps
          let current = 0
          const interval = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(interval)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function IntegrationHero({ onSearch }: IntegrationHeroProps) {
  const [heroSearch, setHeroSearch] = useState("")

  const handleSearch = (value: string) => {
    setHeroSearch(value)
    onSearch(value)
    if (value.length > 0) {
      const filtersEl = document.getElementById("integration-filters")
      if (filtersEl) {
        filtersEl.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <section className="relative pt-32 pb-20 px-6 bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#cfff00]" />
            <span className="text-sm text-gray-500">Integrações</span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-[56px] font-medium text-gray-900 mb-6"
            style={{
              letterSpacing: "-0.0325em",
              lineHeight: 1.1,
              fontVariationSettings: '"opsz" 28',
            }}
          >
            Conecte seu CRM ao ERA CX
            <br />
            <span className="text-gray-500">+100 integrações nativas</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            O ERA CX se integra nativamente com os principais CRMs, ERPs e plataformas do mercado
            brasileiro, automatizando atendimento, cobrança, vendas e suporte técnico.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-12"
        >
          {[
            { value: 100, suffix: "+", label: "Integrações" },
            { value: 12, suffix: "", label: "Categorias" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-medium text-gray-900">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-medium text-gray-900">Marketplace</div>
            <div className="text-sm text-gray-500 mt-1">Disponível</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar integração... (ex: IXC, Salesforce, Hubspot)"
              value={heroSearch}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-zinc-500/50 transition-colors text-sm"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
