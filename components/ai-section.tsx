"use client"

import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ChevronRight, Check, Paperclip, Globe, Lightbulb, Phone, Video, MoreVertical, ArrowLeft } from "lucide-react"
import Image from "next/image"

const whatsappMessages = [
  { id: 1, from: "user", text: "Oi! Preciso de ajuda com meu pedido. Ele chegou errado.", delay: 0.2 },
  { id: 2, from: "ia", text: "Olá! Pode me informar o número do pedido?", delay: 1.2 },
  { id: 3, from: "user", text: "Sim, é o #48291.", delay: 2.4 },
  { id: 4, from: "ia", text: "Encontrei seu pedido! Vou abrir uma ocorrência agora e em até 24h você recebe o produto correto. Posso ajudar com mais alguma coisa?", delay: 3.5 },
  { id: 5, from: "user", text: "Perfeito, muito obrigado!", delay: 5.0 },
  { id: 6, from: "ia", text: "Fico feliz em ajudar! Qualquer dúvida estou aqui.", delay: 6.0 },
]

function WhatsAppMockup() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    whatsappMessages.forEach((msg, i) => {
      if (msg.from === "ia") {
        setTimeout(() => setIsTyping(true), msg.delay * 1000 - 700)
      }
      setTimeout(() => {
        setIsTyping(false)
        setVisibleMessages((prev) => [...prev, msg.id])
      }, msg.delay * 1000)
    })
  }, [started])

  return (
    <div ref={ref} className="flex justify-center">
      {/* Phone frame */}
      <div
        className="relative w-[270px] rounded-[40px] overflow-hidden shadow-2xl"
        style={{
          background: "#1a1a1a",
          border: "8px solid #2a2a2a",
          boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-b-2xl z-20" />

        {/* Screen */}
        <div className="overflow-hidden rounded-[32px]" style={{ background: "#ECE5DD", minHeight: "520px" }}>
          {/* WhatsApp header */}
          <div className="flex items-center gap-2 px-3 py-3 pt-8" style={{ background: "#075E54" }}>
            <ArrowLeft className="w-4 h-4 text-gray-900/80" />
            <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-xs font-bold text-gray-900 flex-shrink-0">E</div>
            <div className="flex-1 min-w-0">
              <p className="text-gray-900 text-xs font-semibold leading-none">ERA Atendimento</p>
              <p className="text-green-200 text-[10px] mt-0.5">online</p>
            </div>
            <div className="flex items-center gap-3">
              <Video className="w-4 h-4 text-gray-900/80" />
              <Phone className="w-4 h-4 text-gray-900/80" />
              <MoreVertical className="w-4 h-4 text-gray-900/80" />
            </div>
          </div>

          {/* Chat background pattern */}
          <div className="relative px-2 py-3 space-y-1.5" style={{ background: "#ECE5DD", minHeight: "440px" }}>
            {whatsappMessages.map((msg) =>
              visibleMessages.includes(msg.id) ? (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[80%] px-2.5 py-1.5 rounded-lg text-[11px] leading-relaxed shadow-sm"
                    style={{
                      background: msg.from === "user" ? "#DCF8C6" : "#fff",
                      color: "#111",
                      borderRadius: msg.from === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                    }}
                  >
                    {msg.from === "ia" && (
                      <p className="text-[9px] font-semibold mb-0.5" style={{ color: "#075E54" }}>ERA IA</p>
                    )}
                    {msg.text}
                    <span className="text-[9px] text-gray-500 float-right ml-2 mt-0.5">
                      {["12:41", "12:41", "12:42", "12:42", "12:43", "12:43"][msg.id - 1]}
                      {msg.from === "user" && <span className="ml-0.5" style={{ color: "#53bdeb" }}>✓✓</span>}
                    </span>
                  </div>
                </motion.div>
              ) : null
            )}

            {/* Typing indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex justify-start"
              >
                <div className="bg-white rounded-xl px-3 py-2 shadow-sm flex gap-1 items-center">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-zinc-400 block"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-2 px-2 pb-3 pt-1" style={{ background: "#ECE5DD" }}>
            <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-[10px] text-gray-500">Mensagem</div>
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#075E54" }}>
              <svg className="w-3.5 h-3.5 text-gray-900" fill="currentColor" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const incomingMessages = [
  { id: 1, name: "Clara Santos", text: "Ola! Gostaria de saber sobre os planos empresariais", channel: "whatsapp" as const, time: "12:45", delay: 0.8 },
  { id: 2, name: "Ricardo Oliveira", text: "Oi, preciso de ajuda com meu pedido #4521", channel: "instagram" as const, time: "13:01", delay: 2.5 },
  { id: 3, name: "Fernanda Lima", text: "Boa tarde! Como funciona a integração com CRM?", channel: "messenger" as const, time: "13:05", delay: 4.0 },
  { id: 4, name: "Alexandre Silva", text: "Preciso de suporte técnico urgente", channel: "email" as const, time: "13:08", delay: 5.5 },
  { id: 5, name: "Juliana Costa", text: "Oi, vi o anuncio e quero saber mais", channel: "telegram" as const, time: "13:12", delay: 7.0 },
]

const channelIcons: Record<string, { svg: string; color: string; bg: string }> = {
  whatsapp: { svg: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z", color: "#25D366", bg: "bg-green-500/20" },
  instagram: { svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", color: "#E1306C", bg: "bg-pink-500/20" },
  messenger: { svg: "M12 2C6.477 2 2 6.145 2 11.243c0 2.907 1.432 5.502 3.68 7.2V22l3.363-1.847c.898.248 1.852.384 2.84.384h.118C17.523 20.537 22 16.392 22 11.243 22 6.145 17.523 2 12 2zm1.187 12.46l-2.55-2.72L5.5 14.46l5.62-5.96 2.55 2.72 5.137-2.72-5.62 5.96z", color: "#0084FF", bg: "bg-blue-500/20" },
  email: { svg: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z", color: "#EA4335", bg: "bg-red-500/20" },
  telegram: { svg: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.504-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z", color: "#0088CC", bg: "bg-cyan-500/20" },
}

function ChannelIcon({ channel, size = 14 }: { channel: string; size?: number }) {
  const ch = channelIcons[channel]
  if (!ch) return null
  return <svg width={size} height={size} fill={ch.color} viewBox="0 0 24 24"><path d={ch.svg} /></svg>
}

export function OmniChannelAnimation() {
  const [arrivedMessages, setArrivedMessages] = useState<number[]>([])
  const [activeChat, setActiveChat] = useState<number | null>(null)
  const [started, setStarted] = useState(false)
  const animRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.2 }
    )
    if (animRef.current) observer.observe(animRef.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    incomingMessages.forEach((msg) => {
      setTimeout(() => {
        setArrivedMessages((prev) => [...prev, msg.id])
        setActiveChat(msg.id)
      }, msg.delay * 1000)
    })
  }, [started])

  const activeChatData = incomingMessages.find((m) => m.id === activeChat)

  return (
    <div ref={animRef} className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
      {/* === PHONE === */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="shrink-0 mx-auto lg:mx-0"
      >
        <div style={{ width: 260, borderRadius: 36, border: "7px solid #1a1a1a", overflow: "hidden", background: "#111" }}>
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-2 pb-1" style={{ background: "#111" }}>
            <span className="text-[8px] text-gray-500">9:41</span>
            <div className="w-20 h-5 bg-black rounded-full" />
            <div className="flex gap-1">
              <div className="w-3 h-2 rounded-sm bg-zinc-500" />
              <div className="w-3 h-2 rounded-sm bg-zinc-500" />
            </div>
          </div>

          {/* Phone screen content */}
          <div style={{ background: "#fff", minHeight: 420 }}>
            {/* Phone header */}
            <div className="px-3 py-2.5 border-b border-gray-100">
              <p className="text-[11px] font-bold text-gray-900">Conversas</p>
              <p className="text-[8px] text-gray-400">5 novas mensagens</p>
            </div>

            {/* Messages in phone */}
            <div className="divide-y divide-gray-50">
              {incomingMessages.map((msg) => {
                const sent = arrivedMessages.includes(msg.id)
                const ch = channelIcons[msg.channel]
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0.2 }}
                    animate={sent ? { opacity: 1 } : { opacity: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-start gap-2.5 px-3 py-3"
                  >
                    {/* Avatar with channel icon */}
                    <div className="relative shrink-0">
                      <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                      </div>
                      <div className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center ${ch.bg} border-2 border-white`}>
                        <ChannelIcon channel={msg.channel} size={8} />
                      </div>
                    </div>
                    {/* Message content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-gray-900">{msg.name}</span>
                        <span className="text-[8px] text-gray-400">{msg.time}</span>
                      </div>
                      <p className="text-[9px] text-gray-500 leading-relaxed mt-0.5">{msg.text}</p>
                    </div>
                    {/* Sent indicator */}
                    {sent && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 20 }}
                        className="w-2 h-2 rounded-full shrink-0 mt-2"
                        style={{ backgroundColor: ch.color }}
                      />
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Home indicator */}
          <div className="flex justify-center py-2" style={{ background: "#111" }}>
            <div className="w-24 h-1 bg-zinc-600 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* === ERA DASHBOARD === */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex-1 w-full min-w-0"
      >
        <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/10 border border-gray-200 h-full" style={{ background: "#ffffff" }}>
          {/* Top bar — ERA logo + user info */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200" style={{ background: "#f9fafb" }}>
            <Image src="/images/era-logo.png" alt="ERA" width={55} height={16} className="h-3.5 w-auto brightness-0 opacity-80" />
            <div className="flex items-center gap-4">
              {activeChatData && (
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-gray-900 font-medium">{activeChatData.name}</span>
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${channelIcons[activeChatData.channel].bg}`}>
                    <ChannelIcon channel={activeChatData.channel} size={9} />
                  </div>
                </div>
              )}
              <div className="text-[8px] text-gray-500">...</div>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center gap-4 px-3 py-1.5 border-b border-gray-200" style={{ background: "#ffffff" }}>
            <div className="flex items-center gap-1">
              <span className="text-[9px] font-bold" style={{ color: "#2b363d" }}>{arrivedMessages.length}</span>
              <span className="text-[7px] text-gray-500">Ativos</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[9px] font-bold text-orange-400">13</span>
              <span className="text-[7px] text-gray-500">Aguardando</span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              {["tags", "Ligar", "Transferir"].map((btn) => (
                <span key={btn} className="px-1.5 py-0.5 rounded text-[7px] bg-gray-100/60 text-gray-500">{btn}</span>
              ))}
              <span className="px-1.5 py-0.5 rounded text-[7px] bg-gray-100 text-gray-900 border border-gray-300">Finalizar</span>
            </div>
          </div>

          {/* Main content — sidebar chat list + conversation */}
          <div className="flex" style={{ minHeight: 340 }}>
            {/* Chat list sidebar */}
            <div className="w-52 md:w-60 border-r border-gray-200 overflow-hidden">
              {incomingMessages.map((msg) => {
                const arrived = arrivedMessages.includes(msg.id)
                const isActive = activeChat === msg.id
                const ch = channelIcons[msg.channel]
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, x: -15 }}
                    animate={arrived ? { opacity: 1, x: 0 } : { opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className={`flex items-start gap-2 px-2.5 py-2.5 border-b border-gray-100 ${isActive ? "bg-gray-50" : ""}`}>
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] text-gray-900 font-medium truncate">{msg.name}</span>
                          <span className="text-[7px] text-gray-500">{msg.time}</span>
                        </div>
                        <p className="text-[8px] text-gray-500 truncate">{msg.text}</p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center ${ch.bg}`}>
                            <ChannelIcon channel={msg.channel} size={8} />
                          </div>
                          <span className="text-[7px] text-gray-500">00:13</span>
                          <span className="px-1 py-0.5 rounded text-[6px] bg-gray-100 text-gray-500">Aguardando</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Conversation area */}
            <div className="flex-1 flex flex-col min-w-0 hidden md:flex">
              <div className="flex-1 p-3 space-y-3 overflow-hidden">
                {/* Bot message */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={arrivedMessages.length > 0 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.5 }}
                >
                  <span className="text-[7px] font-bold" style={{ color: "#2b363d" }}>BOT</span>
                  <div className="mt-0.5 px-2.5 py-2 rounded-lg text-[9px] text-gray-700 max-w-[85%]" style={{ background: "rgba(147, 197, 253, 0.15)" }}>
                    Claro, estou direcionando para um atendente. Mas caso precise, estou sempre aqui para ajudar!
                  </div>
                  <span className="text-[7px] text-gray-500 mt-0.5 block">12:46</span>
                </motion.div>

                {/* Agent message */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={arrivedMessages.length >= 2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-end"
                >
                  <div className="px-2.5 py-2 rounded-lg text-[9px] text-zinc-900 max-w-[85%]" style={{ background: "#e8ecf0" }}>
                    Olá! Tudo bem? Sou a Letícia e vou fazer seu atendimento. Vi que você já recebeu sua fatura pelo nosso atendimento automático. Em que mais posso ajudar?
                  </div>
                  <span className="text-[7px] text-gray-500 mt-0.5">12:46</span>
                </motion.div>

                {/* Client reply */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={arrivedMessages.length >= 3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <div className="px-2.5 py-2 rounded-lg text-[9px] text-gray-700 max-w-[75%]" style={{ background: "#f3f4f6" }}>
                    Oi, Leticia. Eu gostaria de entender o que eu tenho no meu plano?
                  </div>
                </motion.div>

                {/* Agent reply 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={arrivedMessages.length >= 4 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-end"
                >
                  <div className="px-2.5 py-2 rounded-lg text-[9px] text-zinc-900 max-w-[75%]" style={{ background: "#e8ecf0" }}>
                    Claro, só um momento, por favor.
                  </div>
                </motion.div>
              </div>

              {/* Message input */}
              <div className="px-3 py-2 border-t border-gray-200">
                <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg" style={{ background: "#f5f5f5" }}>
                  <span className="text-[9px] text-gray-400 flex-1">Mensagem ...</span>
                  <span className="px-2.5 py-1 rounded text-[8px] font-medium text-white" style={{ background: "#2b363d" }}>Enviar</span>
                </div>
              </div>
            </div>

            {/* IA Analysis sidebar */}
            <div className="w-44 border-l border-gray-200 p-2.5 hidden lg:block">
              <p className="text-[8px] font-bold text-gray-900 mb-3">IA - Análise do atendimento</p>
              <div className="space-y-2.5">
                {[
                  { text: "Cliente já passou mais de 20 minutos em chamada conosco nos últimos 7 dias" },
                  { text: "Cliente já ligou 7 vezes para o suporte esse mês" },
                  { text: "Cliente já passou por 2 departamentos antes de chegar até você" },
                  { text: "Pelas conversas anteriores, me parece que esse cliente está insatisfeito com o serviço" },
                ].map((insight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={arrivedMessages.length > i ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="p-2 rounded-lg bg-gray-100/40"
                  >
                    <p className="text-[7px] text-gray-500 leading-relaxed">{insight.text}</p>
                    <p className="text-[7px] mt-1" style={{ color: "#2b363d" }}>O que fazer?</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const rotatingChannels = [
  { name: "WhatsApp", color: "#25D366" },
  { name: "Instagram", color: "#E1306C" },
  { name: "Messenger", color: "#0084FF" },
  { name: "Reclame Aqui", color: "#1BAF27" },
  { name: "Telegram", color: "#0088CC" },
  { name: "E-mail", color: "#EA4335" },
]

function RotatingChannel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingChannels.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const channel = rotatingChannels[index]

  return (
    <span className="inline-block relative" style={{ minWidth: "4ch" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={channel.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ color: channel.color }}
          className="inline-block"
        >
          {channel.name}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function AISection() {
  const imageRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.02, 0.98])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.6])

  return (
    <div id="ai-section" className="relative z-20 py-40 scroll-mt-20" style={{ backgroundColor: "#1e272e" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-white/50 text-sm">Artificial intelligence</span>
            <ChevronRight className="w-4 h-4 text-white/50" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-3xl mb-8"
            style={{
              letterSpacing: "-0.0325em",
              fontVariationSettings: '"opsz" 28',
              fontWeight: 538,
              lineHeight: 1.1,
            }}
          >
            Venda mais, atenda mais e melhor no{" "}
            <RotatingChannel />
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 max-w-md mb-8"
          >
            <span className="text-white font-medium">Toda a sua comunicação centralizada em um único lugar.</span> Nunca mais perca mensagens ou seja surpreendido negativamente.
          </motion.p>

          {/* Learn more button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-16"
          >
            <a
              href="#lead-capture"
              className="px-6 py-3 md:px-8 md:py-3.5 rounded-lg hover:brightness-110 transition-all text-sm font-medium inline-flex items-center gap-2 text-center min-w-[200px] justify-center"
              style={{ backgroundColor: "#cfff00", color: "#1a2429" }}
            >
              Solicitar cotação
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="/pricing"
              className="px-6 py-3 md:px-8 md:py-3.5 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm text-center min-w-[200px] inline-flex items-center justify-center"
            >
              Ver planos
            </a>
          </motion.div>

          {/* Animated: Phone sending messages → ERA dashboard receiving */}
          <div ref={imageRef} className="mb-24">
            <motion.div
              style={{ y, scale, opacity }}
              className="w-full max-w-5xl mx-auto"
            >
              <OmniChannelAnimation />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  )
}
