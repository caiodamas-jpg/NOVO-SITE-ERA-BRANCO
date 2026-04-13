"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const menuItems = [
  { key: "dashboard", name: "Dashboard Fila", icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" },
  { key: "callcenter", name: "Call Center", icon: "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" },
  { key: "monitor", name: "Monitoramento", icon: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" },
]

function DashboardFilaScreen() {
  return (
    <div className="p-3 space-y-3">
      {/* Top stats */}
      <div className="grid grid-cols-4 gap-2">
        {[{ n: "4", l: "FILA" }, { n: "00:05:08", l: "T.M. FILA" }, { n: "00:05:21", l: "TMA GERAL" }, { n: "00:03:44", l: "TME" }].map((s) => (
          <div key={s.l} className="rounded-md p-2 text-center" style={{ background: "#1e2d35" }}>
            <p className="text-[10px] font-bold text-white">{s.n}</p>
            <p className="text-[5px] text-zinc-500 uppercase">{s.l}</p>
          </div>
        ))}
      </div>
      {/* Pie charts */}
      <div className="flex gap-3">
        <div className="flex-1 flex flex-col items-center">
          <p className="text-[6px] text-zinc-500 uppercase mb-1">Agente</p>
          <div className="relative w-16 h-16">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <circle cx="18" cy="18" r="15" fill="none" stroke="#cfff00" strokeWidth="6" strokeDasharray="75 25" strokeDashoffset="25" />
              <circle cx="18" cy="18" r="15" fill="none" stroke="#22c55e" strokeWidth="6" strokeDasharray="0 100" strokeDashoffset="0" />
              <circle cx="18" cy="18" r="15" fill="none" stroke="#ef4444" strokeWidth="6" strokeDasharray="25 75" strokeDashoffset="0" />
            </svg>
          </div>
          <div className="flex gap-2 mt-1">
            <span className="text-[5px] text-orange-400">Pausa 75%</span>
            <span className="text-[5px] text-red-400">Chamada 25%</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <p className="text-[6px] text-zinc-500 uppercase mb-1">Chamadas da Fila</p>
          <div className="relative w-16 h-16">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <circle cx="18" cy="18" r="15" fill="none" stroke="#22c55e" strokeWidth="6" strokeDasharray="35 65" strokeDashoffset="25" />
              <circle cx="18" cy="18" r="15" fill="none" stroke="#ef4444" strokeWidth="6" strokeDasharray="65 35" strokeDashoffset="60" />
            </svg>
          </div>
          <div className="flex gap-2 mt-1">
            <span className="text-[5px] text-green-400">Atendidas 35%</span>
            <span className="text-[5px] text-red-400">Abandon. 65%</span>
          </div>
        </div>
      </div>
      {/* Agent table */}
      <div className="rounded-md border border-zinc-800/40 overflow-hidden">
        <div className="grid grid-cols-5 text-[5px] text-zinc-500 bg-zinc-800/30 px-2 py-1">
          <span>Nome</span><span>Extensao</span><span>Estado</span><span>Atendidas</span><span>TMA</span>
        </div>
        {[
          { name: "bruna.caroline", ext: "1004", estado: "TREINAMENTO", cor: "bg-yellow-500/30 text-yellow-300", at: "5", tma: "00:03:12" },
          { name: "rachel.pereira", ext: "1001", estado: "EM CHAMADA", cor: "bg-green-500/30 text-green-300", at: "21", tma: "00:09:00" },
          { name: "adriana.santos", ext: "1003", estado: "TREINAMENTO", cor: "bg-yellow-500/30 text-yellow-300", at: "5", tma: "00:03:48" },
          { name: "karoline.mota", ext: "1002", estado: "PAUSA", cor: "bg-red-500/30 text-red-300", at: "85", tma: "00:04:13" },
        ].map((a) => (
          <div key={a.name} className="grid grid-cols-5 text-[6px] text-zinc-400 px-2 py-1 border-t border-zinc-800/30">
            <span className="truncate">{a.name}</span>
            <span>{a.ext}</span>
            <span className={`px-1 py-0.5 rounded text-[5px] w-fit ${a.cor}`}>{a.estado}</span>
            <span>{a.at}</span>
            <span>{a.tma}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CallCenterScreen() {
  return (
    <div className="p-3 space-y-3">
      {/* Call Center header */}
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#cfff00" + "20" }}>
          <svg className="w-3 h-3" fill="#cfff00" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" /></svg>
        </div>
        <span className="text-[10px] font-bold text-white">Call Center</span>
        <span className="ml-auto px-2 py-0.5 rounded text-[7px] font-medium text-zinc-900" style={{ backgroundColor: "#cfff00" }}>Dashboard</span>
      </div>
      {/* Entrada */}
      <div className="rounded-lg p-2.5 border border-zinc-800/40 bg-zinc-900/30">
        <p className="text-[7px] text-zinc-500 mb-2">Entrada</p>
        <div className="grid grid-cols-4 gap-2">
          {[{ n: "5000", l: "Recebidas" }, { n: "4000", l: "Atendidas" }, { n: "1000", l: "Abandonadas" }, { n: "80%", l: "Sucesso", color: "#cfff00" }].map((s) => (
            <div key={s.l}>
              <p className="text-[10px] font-bold" style={{ color: s.color || "#fff" }}>{s.n}</p>
              <p className="text-[5px] text-zinc-500">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Saida */}
      <div className="rounded-lg p-2.5 border border-zinc-800/40 bg-zinc-900/30">
        <p className="text-[7px] text-zinc-500 mb-2">Saida</p>
        <div className="grid grid-cols-4 gap-2">
          {[{ n: "300", l: "Realizadas" }, { n: "250", l: "Completadas" }, { n: "5000", l: "Nao atendidas" }, { n: "83,33%", l: "Sucesso" }].map((s) => (
            <div key={s.l}>
              <p className="text-[10px] font-bold text-white">{s.n}</p>
              <p className="text-[5px] text-zinc-500">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Analise */}
      <div className="rounded-lg p-2.5 border border-zinc-800/40 bg-zinc-900/30">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[8px] font-bold text-white">Analise de atendimento</p>
          <span className="text-[6px] text-zinc-500">Relatorio completo →</span>
        </div>
        <div className="flex gap-2">
          {["Juliana", "Claudia", "Diego", "Camila", "Larissa"].map((name, i) => (
            <div key={name} className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-zinc-700" />
              <span className="text-[5px] text-zinc-400 mt-0.5">{name}</span>
              <div className="flex gap-px mt-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div key={j} className="w-1 h-1" style={{ backgroundColor: j < (5 - i % 3) ? "#cfff00" : "#3f3f46" }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MonitorScreen() {
  return (
    <div className="p-3 space-y-3">
      {/* Live badge */}
      <div className="flex items-center gap-2">
        <span className="text-[8px] font-bold text-white">Monitoramento em Tempo Real</span>
        <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[6px]">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          AO VIVO
        </span>
      </div>
      {/* Agents status */}
      <div className="rounded-lg border border-zinc-800/40 overflow-hidden">
        <div className="grid grid-cols-4 text-[5px] text-zinc-500 bg-zinc-800/30 px-2 py-1">
          <span>Agente</span><span>Estado</span><span>Tempo</span><span>Acoes</span>
        </div>
        {[
          { name: "bruna.caroline", estado: "Em chamada", cor: "text-green-400", tempo: "00:04:22" },
          { name: "rachel.pereira", estado: "Disponivel", cor: "text-blue-400", tempo: "00:01:15" },
          { name: "adriana.santos", estado: "Pausa (Almoco)", cor: "text-yellow-400", tempo: "00:32:12" },
          { name: "karoline.mota", estado: "Em chamada", cor: "text-green-400", tempo: "00:08:45" },
        ].map((a) => (
          <div key={a.name} className="grid grid-cols-4 text-[6px] text-zinc-400 px-2 py-1.5 border-t border-zinc-800/30">
            <span className="truncate">{a.name}</span>
            <span className={a.cor}>{a.estado}</span>
            <span>{a.tempo}</span>
            <div className="flex gap-1">
              <span className="px-1 py-0.5 rounded text-[5px] bg-zinc-800 text-zinc-400">Escutar</span>
              <span className="px-1 py-0.5 rounded text-[5px] bg-zinc-800 text-zinc-400">Sussurro</span>
            </div>
          </div>
        ))}
      </div>
      {/* Queue */}
      <div className="rounded-lg p-2.5 border border-zinc-800/40 bg-zinc-900/30">
        <p className="text-[7px] font-bold text-white mb-2">Chamadas em Fila</p>
        <div className="grid grid-cols-3 text-[5px] text-zinc-500 mb-1">
          <span>Tempo</span><span>Telefone</span><span>Prioridade</span>
        </div>
        {[
          { t: "00:09:07", tel: "134000****", p: "0" },
          { t: "00:04:01", tel: "114000****", p: "0" },
          { t: "00:03:53", tel: "133500****", p: "0" },
        ].map((c, i) => (
          <div key={i} className="grid grid-cols-3 text-[6px] text-zinc-400 py-1 border-t border-zinc-800/20">
            <span className="text-red-400">{c.t}</span>
            <span>{c.tel}</span>
            <span>{c.p}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const screens: Record<string, () => React.ReactNode> = {
  dashboard: DashboardFilaScreen,
  callcenter: CallCenterScreen,
  monitor: MonitorScreen,
}

export default function VozHeroAnimation() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % menuItems.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const activeKey = menuItems[activeIndex].key
  const ActiveScreen = screens[activeKey]

  return (
    <div className="relative w-full max-w-4xl mx-auto" style={{ perspective: "1800px", perspectiveOrigin: "50% 30%" }}>
      <motion.div
        initial={{ opacity: 0, rotateX: 20, rotateY: -6, scale: 0.92 }}
        whileInView={{ opacity: 1, rotateX: 10, rotateY: -4, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl shadow-black/50"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#1e2a30] border-b border-zinc-800">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-8 py-0.5 rounded-md bg-zinc-800/60 text-[8px] text-zinc-500">eracx.com.br</div>
          </div>
        </div>

        <div className="flex" style={{ background: "#1a2429", minHeight: 320 }}>
          {/* Sidebar */}
          <div className="w-12 border-r border-zinc-800/60 py-2 flex flex-col items-center gap-0.5 shrink-0">
            <div className="mb-3">
              <Image src="/images/era-logo.png" alt="ERA" width={28} height={10} className="w-7 h-auto brightness-0 invert opacity-70" />
            </div>
            {menuItems.map((item, i) => (
              <motion.div
                key={item.key}
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={activeIndex === i ? { backgroundColor: "#cfff00" + "20" } : {}}
                animate={activeIndex === i ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-3.5 h-3.5" fill={activeIndex === i ? "#cfff00" : "#555"} viewBox="0 0 24 24"><path d={item.icon} /></svg>
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 overflow-hidden">
            <div className="flex items-center gap-3 px-3 py-1.5 border-b border-zinc-800/40">
              <span className="text-[9px] font-bold text-white">{menuItems[activeIndex].name}</span>
              <span className="ml-auto text-[7px] px-1.5 py-0.5 rounded text-zinc-900 font-medium" style={{ backgroundColor: "#cfff00" }}>Ao vivo</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeKey}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <ActiveScreen />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
