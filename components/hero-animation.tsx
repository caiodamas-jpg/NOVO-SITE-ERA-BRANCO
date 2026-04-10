"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const menuItems = [
  { key: "home", name: "Home", icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" },
  { key: "omnichannel", name: "Omnichannel", icon: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" },
  { key: "pabx", name: "PABX", icon: "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" },
  { key: "dashboards", name: "Dashboards", icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" },
]

// === HOME SCREEN ===
function HomeScreen() {
  return (
    <div className="p-3 space-y-3">
      {/* Agentes de IA */}
      <div className="flex gap-3">
        <div className="flex-1 rounded-lg p-3 bg-gradient-to-r from-emerald-900/40 to-emerald-800/20 border border-emerald-800/30">
          <p className="text-[9px] font-bold text-white mb-1">Agentes de IA</p>
          <p className="text-[7px] text-zinc-400 mb-2">Respostas rápidas e precisas com base no histórico do cliente</p>
          <div className="flex gap-1.5">
            <span className="px-1.5 py-0.5 rounded text-[6px] font-medium" style={{ backgroundColor: "#cfff00", color: "#1a1a1a" }}>Criar agentes</span>
            <span className="px-1.5 py-0.5 rounded text-[6px] border border-zinc-600 text-zinc-400">Saiba mais</span>
          </div>
        </div>
        {/* Call Center mini */}
        <div className="w-36 rounded-lg p-2.5 border border-zinc-800/50 bg-zinc-900/30">
          <p className="text-[8px] font-bold text-white mb-2">Call Center</p>
          <div className="grid grid-cols-2 gap-1">
            {[{ n: "5000", l: "Recebidas" }, { n: "4000", l: "Atendidas" }, { n: "1000", l: "Abandonadas" }, { n: "80%", l: "Sucesso" }].map((s) => (
              <div key={s.l} className="text-center">
                <p className="text-[8px] font-bold text-white">{s.n}</p>
                <p className="text-[5px] text-zinc-500">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Mensageria */}
      <div className="rounded-lg p-3 border border-zinc-800/50 bg-zinc-900/30">
        <p className="text-[8px] font-bold text-white mb-2">Mensageria</p>
        <div className="flex gap-3 flex-wrap">
          {[{ n: "300", l: "Enviadas" }, { n: "300", l: "Chats ativos" }, { n: "300", l: "Concluidos" }, { n: "300", l: "Templates" }].map((s) => (
            <div key={s.l}>
              <p className="text-[9px] font-bold text-white">{s.n}</p>
              <p className="text-[6px] text-zinc-500">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-2">
          {[{ icon: "whatsapp", color: "#25D366" }, { icon: "messenger", color: "#0084FF" }, { icon: "instagram", color: "#E1306C" }, { icon: "email", color: "#EA4335" }, { icon: "telegram", color: "#0088CC" }].map((ch) => (
            <div key={ch.icon} className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: ch.color + "30" }} />
              <span className="text-[6px] text-zinc-500">300</span>
            </div>
          ))}
        </div>
      </div>
      {/* Atalhos */}
      <div className="grid grid-cols-4 gap-1.5">
        {["Ajuda", "Dashboards", "Relatorios", "Teste de rede"].map((a) => (
          <div key={a} className="rounded-md p-2 border border-zinc-800/40 bg-zinc-900/20 text-center">
            <p className="text-[6px] text-zinc-400">{a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// === OMNICHANNEL SCREEN ===
function OmniScreen() {
  return (
    <div className="flex h-full" style={{ minHeight: 250 }}>
      {/* Chat list */}
      <div className="w-44 border-r border-zinc-800/40">
        {[
          { name: "Clara Santos", msg: "Ola, gostaria de saber...", ch: "#25D366", time: "12:45" },
          { name: "Ricardo Oliveira", msg: "Preciso de ajuda com...", ch: "#E1306C", time: "13:01" },
          { name: "Alexandre Silva", msg: "Boa tarde, tenho uma...", ch: "#EA4335", time: "13:05" },
        ].map((c, i) => (
          <div key={c.name} className={`flex items-start gap-1.5 px-2 py-2 border-b border-zinc-800/30 ${i === 0 ? "bg-zinc-800/40" : ""}`}>
            <div className="w-6 h-6 rounded-full bg-zinc-700 shrink-0" />
            <div className="min-w-0 flex-1">
              <div className="flex justify-between">
                <span className="text-[8px] text-white font-medium truncate">{c.name}</span>
                <span className="text-[6px] text-zinc-600">{c.time}</span>
              </div>
              <p className="text-[7px] text-zinc-500 truncate">{c.msg}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: c.ch + "30" }} />
                <span className="text-[6px] text-zinc-600">Aguardando</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Conversation */}
      <div className="flex-1 p-2.5 space-y-2">
        <div className="max-w-[80%]">
          <span className="text-[6px] font-bold" style={{ color: "#cfff00" }}>BOT</span>
          <div className="mt-0.5 px-2 py-1.5 rounded-md text-[8px] text-zinc-200" style={{ background: "rgba(147,197,253,0.12)" }}>
            Claro, estou direcionando para um atendente. Mas caso precise, estou sempre aqui!
          </div>
        </div>
        <div className="ml-auto max-w-[75%]">
          <div className="px-2 py-1.5 rounded-md text-[8px] text-zinc-900" style={{ background: "#e8ecf0" }}>
            Ola! Sou a Leticia e vou fazer seu atendimento.
          </div>
        </div>
        <div className="max-w-[70%]">
          <div className="px-2 py-1.5 rounded-md text-[8px] text-zinc-300" style={{ background: "rgba(255,255,255,0.06)" }}>
            Gostaria de entender meu plano
          </div>
        </div>
      </div>
    </div>
  )
}

// === PABX SCREEN ===
function PabxScreen() {
  return (
    <div className="p-3 space-y-3">
      {/* Stats grid */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { n: "23", l: "CHAMADAS TOTAIS" },
          { n: "10", l: "TOTAL ENTRADA" },
          { n: "5", l: "ATENDIDA" },
          { n: "5", l: "NAO ATENDIDA" },
        ].map((s) => (
          <div key={s.l} className="rounded-md p-2 border border-zinc-800/40 bg-zinc-900/30 text-center">
            <p className="text-[10px] font-bold text-white">{s.n}</p>
            <p className="text-[5px] text-zinc-500 uppercase">{s.l}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[{ n: "13", l: "TOTAL SAIDA" }, { n: "4", l: "ATENDIDA" }, { n: "9", l: "NAO ATENDIDA" }].map((s) => (
          <div key={s.l} className="rounded-md p-2 border border-zinc-800/40 bg-zinc-900/30 text-center">
            <p className="text-[9px] font-bold text-white">{s.n}</p>
            <p className="text-[5px] text-zinc-500 uppercase">{s.l}</p>
          </div>
        ))}
      </div>
      {/* Table */}
      <div className="rounded-md border border-zinc-800/40 overflow-hidden">
        <div className="grid grid-cols-6 gap-0 text-[6px] text-zinc-500 bg-zinc-800/30 px-2 py-1.5">
          <span>Protocolo</span><span>Estado</span><span>Direcao</span><span>Origem</span><span>Destino</span><span>Tempo</span>
        </div>
        {[
          { estado: "Nao Atendida", cor: "bg-red-500", dir: "Saida" },
          { estado: "Nao Atendida", cor: "bg-red-500", dir: "Saida" },
          { estado: "Atendida", cor: "bg-green-500", dir: "Saida" },
          { estado: "Atendida", cor: "bg-green-500", dir: "Entrada" },
        ].map((r, i) => (
          <div key={i} className="grid grid-cols-6 gap-0 text-[6px] text-zinc-400 px-2 py-1.5 border-t border-zinc-800/30">
            <span>20260330...</span>
            <span className={`${r.cor} text-white text-[5px] px-1 py-0.5 rounded w-fit`}>{r.estado}</span>
            <span className="text-blue-400">{r.dir}</span>
            <span>1931990501</span>
            <span>2420603106</span>
            <span className={r.estado === "Atendida" ? "text-green-400" : "text-red-400"}>00:00:{i + 13}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// === DASHBOARDS SCREEN ===
function DashboardsScreen() {
  return (
    <div className="p-3 space-y-3">
      {/* Header */}
      <div className="rounded-lg p-2.5 border border-zinc-800/40 bg-zinc-900/30">
        <p className="text-[8px] font-bold text-white mb-2">Uso do WhatsApp no seu Time</p>
        <div className="grid grid-cols-4 gap-2">
          {[
            { n: "129", l: "Conversas", color: "#cfff00" },
            { n: "2.711", l: "Mensagens" },
            { n: "1h 4m", l: "1a Resposta" },
            { n: "45 min", l: "Tempo Medio" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-[9px] font-bold" style={{ color: s.color || "#fff" }}>{s.n}</p>
              <p className="text-[5px] text-zinc-500">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Chart + Activity */}
      <div className="flex gap-2">
        <div className="flex-1 rounded-lg p-2.5 border border-zinc-800/40 bg-zinc-900/30">
          <p className="text-[7px] font-bold text-white mb-2">Volume de Atendimentos por Dia</p>
          {/* Mini chart */}
          <div className="flex items-end gap-0.5 h-12">
            {[24, 34, 25, 28, 21, 30, 31, 41, 35, 8, 8, 7, 7, 7].map((v, i) => (
              <div key={i} className="flex-1 rounded-t" style={{ height: `${(v / 41) * 100}%`, backgroundColor: i < 9 ? "#0088CC" : "#0088CC50" }} />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[5px] text-zinc-600">Min: 1</span>
            <span className="text-[5px] text-zinc-600">Media: 19</span>
            <span className="text-[5px] text-zinc-600">Total: 316</span>
          </div>
        </div>
        <div className="w-28 rounded-lg p-2.5 border border-zinc-800/40 bg-zinc-900/30">
          <p className="text-[7px] font-bold text-white mb-2">Atividade Recente</p>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start gap-1 mb-1.5">
              <div className="w-3 h-3 rounded-full bg-zinc-700 shrink-0 mt-0.5" />
              <p className="text-[5px] text-zinc-500">usuario recebeu mensagem de Era Mkt</p>
            </div>
          ))}
        </div>
      </div>
      {/* Users */}
      <div className="rounded-lg p-2.5 border border-zinc-800/40 bg-zinc-900/30">
        <p className="text-[7px] font-bold text-white mb-1.5">Detalhamento do Usuario</p>
        <div className="grid grid-cols-5 text-[5px] text-zinc-500 mb-1">
          <span>Usuario</span><span>Atendimentos</span><span>Enviadas</span><span>Recebidas</span><span>Tempo</span>
        </div>
        {[{ name: "grasiela.machado", a: "104", e: "808", r: "1044" }, { name: "vinicius.silva", a: "25", e: "379", r: "474" }].map((u) => (
          <div key={u.name} className="grid grid-cols-5 text-[6px] text-zinc-400 py-1 border-t border-zinc-800/20">
            <span className="truncate">{u.name}</span>
            <span className="text-green-400">{u.a}</span>
            <span className="text-green-400">{u.e}</span>
            <span>{u.r}</span>
            <span>48:09</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const screens: Record<string, () => React.ReactNode> = {
  home: HomeScreen,
  omnichannel: OmniScreen,
  pabx: PabxScreen,
  dashboards: DashboardsScreen,
}

export function HeroAnimation() {
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
    <div className="relative w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden bg-white"
      >
        <Image src="/img/home.png" alt="ERA CX Platform" width={1920} height={1080} className="w-full h-auto" priority />
      </motion.div>
    </div>
  )
}
