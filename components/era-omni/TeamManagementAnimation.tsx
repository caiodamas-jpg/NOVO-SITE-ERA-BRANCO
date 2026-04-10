"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const agents = [
  { name: "Letícia S.", skill: "Voz + Chat", status: "Em chamada" },
  { name: "Carlos M.", skill: "Chat", status: "Disponível" },
  { name: "Fernanda L.", skill: "Voz + Chat", status: "Em chat" },
  { name: "Ricardo O.", skill: "Voz", status: "Pausa" },
  { name: "Juliana C.", skill: "Chat", status: "Em chat" },
  { name: "Diego P.", skill: "Voz + Chat", status: "Em chamada" },
]

const statusColors: Record<string, string> = {
  "Em chamada": "#3b82f6",
  "Disponível": "#22c55e",
  "Em chat": "#cfff00",
  "Pausa": "#f59e0b",
}

export default function TeamManagementAnimation() {
  const [started, setStarted] = useState(false)
  const [activeStatuses, setActiveStatuses] = useState(agents.map(a => a.status))
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true) }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const statuses = ["Em chamada", "Disponível", "Em chat", "Pausa"]
    const interval = setInterval(() => {
      setActiveStatuses(prev => prev.map((s, i) => {
        if (Math.random() > 0.7) return statuses[Math.floor(Math.random() * statuses.length)]
        return s
      }))
    }, 3000)
    return () => clearInterval(interval)
  }, [started])

  return (
    <div ref={ref} className="max-w-3xl mx-auto">
      <div className="rounded-xl border border-zinc-700/50 overflow-hidden shadow-2xl" style={{ background: "#1a2429" }}>
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800/60">
          <span className="text-[10px] font-bold text-white">Gestão de Equipes — Tempo Real</span>
          <div className="flex gap-2">
            <span className="text-[7px] text-zinc-500">6 agentes</span>
            <span className="flex items-center gap-1 text-[7px] text-green-400"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />Online</span>
          </div>
        </div>

        <div className="p-3">
          {/* Summary bar */}
          <div className="flex gap-3 mb-3">
            {Object.entries(statusColors).map(([status, color]) => {
              const count = activeStatuses.filter(s => s === status).length
              return (
                <div key={status} className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-[7px] text-zinc-400">{status}: <span className="text-white font-medium">{count}</span></span>
                </div>
              )
            })}
          </div>

          {/* Agent grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={started ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="rounded-lg p-2.5 border border-zinc-800/40" style={{ background: "#1e2d35" }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center">
                    <span className="text-[8px] text-zinc-300 font-medium">{agent.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-[9px] text-white font-medium">{agent.name}</p>
                    <p className="text-[7px] text-zinc-500">{agent.skill}</p>
                  </div>
                </div>
                <motion.div
                  key={activeStatuses[i]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-1.5"
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: statusColors[activeStatuses[i]] || "#555" }} />
                  <span className="text-[7px]" style={{ color: statusColors[activeStatuses[i]] || "#555" }}>{activeStatuses[i]}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
