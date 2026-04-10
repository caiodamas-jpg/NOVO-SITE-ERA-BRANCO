"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function DashboardChartsAnimation() {
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true) }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  const barData = [65, 80, 45, 90, 72, 55, 88]
  const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"]

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      <div className="rounded-xl border border-zinc-700/50 overflow-hidden shadow-2xl" style={{ background: "#1a2429" }}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800/60">
          <span className="text-[10px] font-bold text-white">Dashboard Consolidado</span>
          <span className="text-[7px] px-1.5 py-0.5 rounded font-medium" style={{ backgroundColor: "#cfff00", color: "#1a1a1a" }}>Tempo real</span>
        </div>

        <div className="p-4 space-y-4">
          {/* Top row: 4 KPI cards */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Conversas Ativas", value: "847", color: "#cfff00" },
              { label: "Chamadas em Fila", value: "12", color: "#3b82f6" },
              { label: "TMA Geral", value: "04:32", color: "#f59e0b" },
              { label: "NPS", value: "87%", color: "#22c55e" },
            ].map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 10 }}
                animate={started ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="rounded-lg p-2.5 border border-zinc-800/40"
                style={{ background: "#1e2d35" }}
              >
                <p className="text-[14px] font-bold" style={{ color: kpi.color }}>{kpi.value}</p>
                <p className="text-[7px] text-zinc-500">{kpi.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Charts row */}
          <div className="flex gap-3">
            {/* Pie chart 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={started ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="flex-1 rounded-lg p-3 border border-zinc-800/40" style={{ background: "#1e2d35" }}
            >
              <p className="text-[8px] text-zinc-400 mb-2">Por Canal</p>
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 36 36" className="w-20 h-20">
                  <motion.circle cx="18" cy="18" r="14" fill="none" stroke="#25D366" strokeWidth="4" strokeDasharray="0 88" animate={started ? { strokeDasharray: "35 53" } : {}} transition={{ delay: 1, duration: 1 }} strokeLinecap="round" transform="rotate(-90 18 18)" />
                  <motion.circle cx="18" cy="18" r="14" fill="none" stroke="#E1306C" strokeWidth="4" strokeDasharray="0 88" animate={started ? { strokeDasharray: "20 68" } : {}} transition={{ delay: 1.2, duration: 1 }} strokeLinecap="round" transform="rotate(37 18 18)" />
                  <motion.circle cx="18" cy="18" r="14" fill="none" stroke="#0084FF" strokeWidth="4" strokeDasharray="0 88" animate={started ? { strokeDasharray: "15 73" } : {}} transition={{ delay: 1.4, duration: 1 }} strokeLinecap="round" transform="rotate(110 18 18)" />
                  <motion.circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="0 88" animate={started ? { strokeDasharray: "18 70" } : {}} transition={{ delay: 1.6, duration: 1 }} strokeLinecap="round" transform="rotate(165 18 18)" />
                </svg>
                <div className="space-y-1">
                  {[{ c: "#25D366", l: "WhatsApp 40%" }, { c: "#E1306C", l: "Instagram 23%" }, { c: "#0084FF", l: "Messenger 17%" }, { c: "#3b82f6", l: "Telefone 20%" }].map(i => (
                    <div key={i.l} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: i.c }} />
                      <span className="text-[6px] text-zinc-400">{i.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bar chart */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={started ? { opacity: 1 } : {}}
              transition={{ delay: 1.0 }}
              className="flex-1 rounded-lg p-3 border border-zinc-800/40" style={{ background: "#1e2d35" }}
            >
              <p className="text-[8px] text-zinc-400 mb-2">Volume Semanal</p>
              <div className="flex items-end gap-1.5 h-16">
                {barData.map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                    <motion.div
                      className="w-full rounded-t"
                      style={{ backgroundColor: h > 75 ? "#cfff00" : "#3b82f6" }}
                      initial={{ height: 0 }}
                      animate={started ? { height: `${(h / 100) * 50}px` } : {}}
                      transition={{ delay: 1.2 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                    />
                    <span className="text-[5px] text-zinc-600">{days[i]}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom: Satisfaction pie + mini candles */}
          <div className="flex gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={started ? { opacity: 1 } : {}}
              transition={{ delay: 1.5 }}
              className="flex-1 rounded-lg p-3 border border-zinc-800/40" style={{ background: "#1e2d35" }}
            >
              <p className="text-[8px] text-zinc-400 mb-2">Satisfação</p>
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 36 36" className="w-16 h-16">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#2a2a2a" strokeWidth="5" />
                  <motion.circle cx="18" cy="18" r="14" fill="none" stroke="#cfff00" strokeWidth="5" strokeDasharray="0 88" animate={started ? { strokeDasharray: "77 11" } : {}} transition={{ delay: 1.8, duration: 1.2 }} strokeLinecap="round" transform="rotate(-90 18 18)" />
                  <text x="18" y="20" textAnchor="middle" fill="#cfff00" fontSize="8" fontWeight="bold">87%</text>
                </svg>
                <div className="space-y-1">
                  <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#cfff00" }} /><span className="text-[6px] text-zinc-400">Satisfeitos 87%</span></div>
                  <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /><span className="text-[6px] text-zinc-400">Neutros 8%</span></div>
                  <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /><span className="text-[6px] text-zinc-400">Insatisfeitos 5%</span></div>
                </div>
              </div>
            </motion.div>

            {/* Candlestick mini */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={started ? { opacity: 1 } : {}}
              transition={{ delay: 1.7 }}
              className="flex-1 rounded-lg p-3 border border-zinc-800/40" style={{ background: "#1e2d35" }}
            >
              <p className="text-[8px] text-zinc-400 mb-2">Performance Diária</p>
              <div className="flex items-center justify-center gap-3 h-14">
                {[{ o: 30, c: 50, h: 55, l: 25, up: true }, { o: 50, c: 35, h: 52, l: 30, up: false }, { o: 35, c: 60, h: 65, l: 32, up: true }, { o: 60, c: 45, h: 62, l: 40, up: false }, { o: 45, c: 70, h: 75, l: 42, up: true }].map((candle, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={started ? { opacity: 1, scaleY: 1 } : {}}
                    transition={{ delay: 2.0 + i * 0.15, duration: 0.4 }}
                    className="flex flex-col items-center"
                    style={{ originY: 1 }}
                  >
                    <div className="w-px" style={{ height: `${(candle.h - Math.max(candle.o, candle.c)) * 0.7}px`, backgroundColor: candle.up ? "#22c55e" : "#ef4444" }} />
                    <div className="w-2.5 rounded-sm" style={{ height: `${Math.abs(candle.c - candle.o) * 0.7}px`, backgroundColor: candle.up ? "#22c55e" : "#ef4444", minHeight: 3 }} />
                    <div className="w-px" style={{ height: `${(Math.min(candle.o, candle.c) - candle.l) * 0.7}px`, backgroundColor: candle.up ? "#22c55e" : "#ef4444" }} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
