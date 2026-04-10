"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const steps = [
  { id: 0, type: "call", label: "(19) 98802-0930", sublabel: "Ligação recebida...", delay: 0 },
  { id: 1, type: "ura", label: "URA Nível 1", sublabel: "Bem-vindo à ERA! Para financeiro, digite 1. Para suporte, digite 2. Para comercial, digite 3.", delay: 2000 },
  { id: 2, type: "dtmf", label: "Cliente digitou: 1", sublabel: "Direcionando para Financeiro...", delay: 5500 },
  { id: 3, type: "ura2", label: "URA Nível 2 — Financeiro", sublabel: "Para 2ª via de boleto, digite 1. Para negociação, digite 2. Para falar com atendente, digite 3.", delay: 7500 },
  { id: 4, type: "dtmf", label: "Cliente digitou: 3", sublabel: "Transferindo para fila Financeiro...", delay: 10500 },
  { id: 5, type: "queue", label: "Fila: Financeiro", sublabel: "Posição 1 • Tempo estimado: 30 segundos", delay: 12500 },
  { id: 6, type: "connected", label: "Conectado!", sublabel: "Atendente: Letícia Santos — Ramal 1004", delay: 14500 },
]

export default function UraFlowAnimation() {
  const [activeStep, setActiveStep] = useState(-1)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    steps.forEach((step) => {
      setTimeout(() => setActiveStep(step.id), step.delay)
    })
  }, [started])

  const getStepColor = (type: string) => {
    switch (type) {
      case "call": return "#3b82f6"
      case "ura": return "#cfff00"
      case "ura2": return "#cfff00"
      case "dtmf": return "#f59e0b"
      case "queue": return "#8b5cf6"
      case "connected": return "#22c55e"
      default: return "#555"
    }
  }

  const getStepIcon = (type: string) => {
    switch (type) {
      case "call": return "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
      case "ura": case "ura2": return "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
      case "dtmf": return "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
      case "queue": return "M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"
      case "connected": return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
      default: return ""
    }
  }

  return (
    <div ref={ref} className="max-w-2xl mx-auto">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-zinc-800" />

        <div className="space-y-4">
          {steps.map((step) => {
            const isActive = activeStep >= step.id
            const isCurrent = activeStep === step.id
            const color = getStepColor(step.type)

            return (
              <AnimatePresence key={step.id}>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex items-start gap-4"
                  >
                    {/* Node */}
                    <motion.div
                      animate={isCurrent ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 1, repeat: isCurrent ? Infinity : 0 }}
                      className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: color + "20", border: `2px solid ${color}` }}
                    >
                      <svg className="w-4 h-4" fill={color} viewBox="0 0 24 24"><path d={getStepIcon(step.type)} /></svg>
                    </motion.div>

                    {/* Content */}
                    <div className={`flex-1 rounded-xl p-4 border ${isCurrent ? "border-zinc-700" : "border-zinc-800/30"}`} style={{ backgroundColor: isCurrent ? "#1e2d35" : "#1a2429" }}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-white">{step.label}</span>
                        {isCurrent && step.type === "call" && (
                          <motion.span
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-full"
                            style={{ backgroundColor: color + "20", color }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                            Tocando
                          </motion.span>
                        )}
                        {step.type === "connected" && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-400">
                            Atendimento iniciado
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-relaxed">{step.sublabel}</p>

                      {/* URA options visual */}
                      {(step.type === "ura" || step.type === "ura2") && isCurrent && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ delay: 0.5 }}
                          className="mt-3 space-y-1.5"
                        >
                          {step.type === "ura" ? (
                            <>
                              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-zinc-800/50">
                                <span className="w-5 h-5 rounded flex items-center justify-center text-[9px] font-bold" style={{ backgroundColor: "#cfff00", color: "#1a1a1a" }}>1</span>
                                <span className="text-[10px] text-zinc-300">Financeiro</span>
                              </div>
                              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-zinc-800/30">
                                <span className="w-5 h-5 rounded flex items-center justify-center text-[9px] font-bold bg-zinc-700 text-zinc-400">2</span>
                                <span className="text-[10px] text-zinc-500">Suporte Técnico</span>
                              </div>
                              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-zinc-800/30">
                                <span className="w-5 h-5 rounded flex items-center justify-center text-[9px] font-bold bg-zinc-700 text-zinc-400">3</span>
                                <span className="text-[10px] text-zinc-500">Comercial</span>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-zinc-800/30">
                                <span className="w-5 h-5 rounded flex items-center justify-center text-[9px] font-bold bg-zinc-700 text-zinc-400">1</span>
                                <span className="text-[10px] text-zinc-500">2ª via de boleto</span>
                              </div>
                              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-zinc-800/30">
                                <span className="w-5 h-5 rounded flex items-center justify-center text-[9px] font-bold bg-zinc-700 text-zinc-400">2</span>
                                <span className="text-[10px] text-zinc-500">Negociação</span>
                              </div>
                              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-zinc-800/50">
                                <span className="w-5 h-5 rounded flex items-center justify-center text-[9px] font-bold" style={{ backgroundColor: "#cfff00", color: "#1a1a1a" }}>3</span>
                                <span className="text-[10px] text-zinc-300">Falar com atendente</span>
                              </div>
                            </>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )
          })}
        </div>
      </div>
    </div>
  )
}
