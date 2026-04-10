"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const channels = [
  { name: "WhatsApp", color: "#25D366", icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" },
  { name: "Instagram", color: "#E1306C", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" },
  { name: "Messenger", color: "#0084FF", icon: "M12 2C6.477 2 2 6.145 2 11.243c0 2.907 1.432 5.502 3.68 7.2V22l3.363-1.847c.898.248 1.852.384 2.84.384h.118C17.523 20.537 22 16.392 22 11.243 22 6.145 17.523 2 12 2z" },
  { name: "Telegram", color: "#0088CC", icon: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0z" },
  { name: "E-mail", color: "#EA4335", icon: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" },
  { name: "Telefone", color: "#3b82f6", icon: "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" },
]

export default function ChannelFunnelAnimation() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const [arrived, setArrived] = useState<number[]>([])
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true) }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    channels.forEach((_, i) => {
      setTimeout(() => {
        setActiveIndex(i)
        setTimeout(() => setArrived(prev => [...prev, i]), 600)
      }, i * 1200)
    })
  }, [started])

  return (
    <div ref={ref} className="max-w-3xl mx-auto py-8">
      <div className="flex flex-col items-center gap-6">
        {/* Channel icons spread out */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {channels.map((ch, i) => (
            <motion.div
              key={ch.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={started ? { opacity: 1, scale: activeIndex === i ? 1.15 : 1 } : {}}
              transition={{ delay: i * 0.2, duration: 0.4 }}
              className="flex flex-col items-center gap-1.5"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{ backgroundColor: ch.color + "15", borderColor: activeIndex === i ? ch.color : "transparent" }}>
                <svg className="w-6 h-6" fill={ch.color} viewBox="0 0 24 24"><path d={ch.icon} /></svg>
              </div>
              <span className="text-[8px] text-zinc-500">{ch.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Funnel arrows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={started ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-1"
        >
          <svg className="w-6 h-6 text-zinc-600" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
          <svg className="w-6 h-6 text-zinc-600" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
        </motion.div>

        {/* Unified inbox */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2 }}
          className="w-full max-w-sm rounded-xl border overflow-hidden" style={{ borderColor: "#cfff00" + "40", background: "#1a2429" }}
        >
          <div className="px-4 py-2.5 border-b border-zinc-800/60 flex items-center gap-2">
            <div className="w-5 h-5 rounded flex items-center justify-center" style={{ backgroundColor: "#cfff00" + "20" }}>
              <svg className="w-3 h-3" fill="#cfff00" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
            </div>
            <span className="text-[10px] font-bold text-white">Painel Unificado ERA</span>
            <span className="ml-auto text-[7px] px-1.5 py-0.5 rounded font-medium" style={{ backgroundColor: "#cfff00", color: "#1a1a1a" }}>{arrived.length} canais</span>
          </div>
          <div className="p-2 space-y-1">
            {arrived.map((idx) => {
              const ch = channels[idx]
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-zinc-800/30"
                >
                  <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: ch.color + "20" }}>
                    <svg className="w-2.5 h-2.5" fill={ch.color} viewBox="0 0 24 24"><path d={ch.icon} /></svg>
                  </div>
                  <span className="text-[8px] text-zinc-300">{ch.name}</span>
                  <span className="text-[7px] text-zinc-600 ml-auto">Integrado</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
