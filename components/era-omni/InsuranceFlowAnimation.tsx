"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const steps = [
  { id: 0, label: "Cliente liga", sublabel: "0800 Seguradora", color: "#3b82f6", delay: 0 },
  { id: 1, label: "URA Inteligente", sublabel: "\"Para sinistro, digite 1. Para cotação, 2. Para 2ª via, 3.\"", color: "#cfff00", delay: 1500 },
  { id: 2, label: "Cliente digitou: 1", sublabel: "Sinistro → Priorizando atendimento", color: "#f59e0b", delay: 3500 },
  { id: 3, label: "CTI → Pop-up CRM", sublabel: "Apólice #48291 • Auto • Vigente até 12/2026 • 2 sinistros anteriores", color: "#8b5cf6", delay: 5000 },
  { id: 4, label: "Fila: Sinistros", sublabel: "Distribuição por skill → Agente especialista em Auto", color: "#06b6d4", delay: 7000 },
  { id: 5, label: "Atendimento iniciado", sublabel: "Agente: Camila R. — Ramal 2045 — Tempo: 00:00", color: "#22c55e", delay: 8500 },
  { id: 6, label: "Transição para WhatsApp", sublabel: "Cliente pede fotos do sinistro → Agente envia link por WhatsApp pela mesma tela", color: "#25D366", delay: 10500 },
  { id: 7, label: "IA Análise", sublabel: "Cordialidade: 95% • Resolução: Sim • Tempo: 04:32 • Score: 9.2/10", color: "#a855f7", delay: 12500 },
]

export default function InsuranceFlowAnimation() {
  const [activeStep, setActiveStep] = useState(-1)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true) }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    steps.forEach((step) => {
      setTimeout(() => setActiveStep(step.id), step.delay)
    })
  }, [started])

  return (
    <div ref={ref} className="max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-zinc-800" />
        <div className="space-y-3">
          {steps.map((step) => {
            const isActive = activeStep >= step.id
            const isCurrent = activeStep === step.id
            return (
              <AnimatePresence key={step.id}>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex items-start gap-4"
                  >
                    <motion.div
                      animate={isCurrent ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 1, repeat: isCurrent ? Infinity : 0 }}
                      className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold"
                      style={{ backgroundColor: step.color + "20", border: `2px solid ${step.color}`, color: step.color }}
                    >
                      {step.id + 1}
                    </motion.div>
                    <div className={`flex-1 rounded-xl p-3.5 border ${isCurrent ? "border-zinc-700" : "border-zinc-800/30"}`} style={{ backgroundColor: isCurrent ? "#1e2d35" : "#1a2429" }}>
                      <p className="text-[11px] font-semibold text-white mb-0.5">{step.label}</p>
                      <p className="text-[9px] text-zinc-400 leading-relaxed">{step.sublabel}</p>
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
