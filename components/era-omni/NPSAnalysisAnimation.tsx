"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function NPSAnalysisAnimation() {
  const [started, setStarted] = useState(false)
  const [npsValue, setNpsValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true) }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let current = 0
    const interval = setInterval(() => {
      current += 2
      if (current >= 87) { setNpsValue(87); clearInterval(interval) }
      else setNpsValue(current)
    }, 30)
    return () => clearInterval(interval)
  }, [started])

  const criteria = [
    { name: "Cordialidade", score: 92, color: "#22c55e" },
    { name: "Agilidade", score: 78, color: "#f59e0b" },
    { name: "Conhecimento", score: 85, color: "#3b82f6" },
    { name: "Resolução", score: 88, color: "#cfff00" },
    { name: "Profissionalismo", score: 91, color: "#8b5cf6" },
  ]

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      <div className="rounded-xl border border-zinc-700/50 overflow-hidden shadow-2xl" style={{ background: "#1a2429" }}>
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800/60">
          <span className="text-[10px] font-bold text-white">IA — Análise de Atendimento</span>
          <span className="text-[7px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-400">Powered by IA</span>
        </div>

        <div className="p-4 space-y-4">
          {/* NPS Gauge + Score */}
          <div className="flex gap-4">
            <motion.div initial={{ opacity: 0 }} animate={started ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
              className="flex-1 rounded-lg p-4 border border-zinc-800/40 flex flex-col items-center" style={{ background: "#1e2d35" }}>
              <p className="text-[8px] text-zinc-400 mb-3">NPS Score</p>
              <svg viewBox="0 0 120 70" className="w-32">
                <path d="M10 60 A50 50 0 0 1 110 60" fill="none" stroke="#2a2a2a" strokeWidth="8" strokeLinecap="round" />
                <motion.path d="M10 60 A50 50 0 0 1 110 60" fill="none" stroke="#cfff00" strokeWidth="8" strokeLinecap="round"
                  strokeDasharray="157" initial={{ strokeDashoffset: 157 }} animate={started ? { strokeDashoffset: 157 * (1 - 0.87) } : {}}
                  transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }} />
                <text x="60" y="55" textAnchor="middle" fill="#cfff00" fontSize="20" fontWeight="bold">{npsValue}</text>
                <text x="60" y="66" textAnchor="middle" fill="#71717a" fontSize="7">Excelente</text>
              </svg>
            </motion.div>

            {/* Criteria bars */}
            <motion.div initial={{ opacity: 0 }} animate={started ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}
              className="flex-1 rounded-lg p-4 border border-zinc-800/40" style={{ background: "#1e2d35" }}>
              <p className="text-[8px] text-zinc-400 mb-3">Critérios de Avaliação</p>
              <div className="space-y-2">
                {criteria.map((c, i) => (
                  <div key={c.name}>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-[7px] text-zinc-400">{c.name}</span>
                      <span className="text-[7px] font-medium" style={{ color: c.color }}>{c.score}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-zinc-800">
                      <motion.div className="h-full rounded-full" style={{ backgroundColor: c.color }}
                        initial={{ width: 0 }} animate={started ? { width: `${c.score}%` } : {}}
                        transition={{ delay: 0.8 + i * 0.15, duration: 0.8, ease: "easeOut" }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Agent ratings */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={started ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.5 }}
            className="rounded-lg p-3 border border-zinc-800/40" style={{ background: "#1e2d35" }}>
            <p className="text-[8px] text-zinc-400 mb-2">Ranking de Agentes</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {["Juliana", "Cláudia", "Diego", "Camila", "Larissa", "Michele"].map((name, i) => (
                <div key={name} className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
                    <span className="text-[9px] text-zinc-300 font-medium">{name.charAt(0)}</span>
                  </div>
                  <span className="text-[7px] text-zinc-400">{name}</span>
                  <div className="flex gap-px">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <div key={j} className="w-1.5 h-1.5 rounded-sm" style={{ backgroundColor: j < (5 - (i % 2)) ? "#cfff00" : "#3f3f46" }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
