"use client"

import { ChevronRight, Phone, Mic, Play, Pause } from "lucide-react"
import { useState, useEffect, useRef, useMemo } from "react"
import { motion } from "framer-motion"

function AudioTranscriptionMockup() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [visibleText, setVisibleText] = useState("")
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const fullTranscript = `Atendente: Olá, bom dia! Meu nome é Letícia, como posso ajudar?

Cliente: Bom dia, Letícia. Preciso de informações sobre o plano empresarial.

Atendente: Claro! Temos planos a partir de 10 ramais com gravação de chamadas incluída. Posso explicar os benefícios?

Cliente: Sim, por favor. Principalmente sobre a gravação e análise das ligações.

Atendente: Perfeito! Todas as chamadas são gravadas automaticamente e nossa IA transcreve o áudio em tempo real, gerando insights e análises de sentimento.`

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          setIsPlaying(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPlaying(false)
          return 100
        }
        return prev + 0.5
      })
    }, 50)
    return () => clearInterval(interval)
  }, [isPlaying])

  useEffect(() => {
    const charCount = Math.floor((progress / 100) * fullTranscript.length)
    setVisibleText(fullTranscript.slice(0, charCount))
  }, [progress, fullTranscript])

  const waveformBars = 40

  const barHeights = useMemo(() => {
    return Array.from({ length: waveformBars }).map((_, i) => {
      const seedValue = Math.sin(i * 12.9898) * 43758.5453123
      const pseudoRandom = seedValue - Math.floor(seedValue)
      return Math.round(20 + Math.sin(i * 0.5) * 15 + pseudoRandom * 10)
    })
  }, [waveformBars])

  return (
    <div ref={ref} className="relative">
      <div className="rounded-2xl border border-gray-300/50 bg-white/80 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <Phone className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p className="text-zinc-200 font-medium text-sm">Ligacao #4829 - Gravada</p>
              <p className="text-gray-500 text-xs">Duração: 03:42 - Hoje, 14:30</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Transcrita
            </span>
          </div>
        </div>

        <div className="px-5 py-4 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-400 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-gray-900" />
              ) : (
                <Play className="w-5 h-5 text-gray-900 ml-0.5" />
              )}
            </button>

            <div className="flex-1 flex items-center gap-[2px] h-12">
              {barHeights.map((height, i) => {
                const barProgress = (i / waveformBars) * 100
                const isActive = barProgress <= progress
                return (
                  <motion.div
                    key={i}
                    className="rounded-full transition-colors duration-150"
                    style={{
                      width: "3px",
                      height: `${height}px`,
                      backgroundColor: isActive ? "#22c55e" : "#3f3f46",
                    }}
                    animate={isPlaying && isActive ? { scaleY: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3, repeat: Infinity, delay: i * 0.02 }}
                  />
                )
              })}
            </div>

            <span className="text-gray-500 text-sm font-mono">
              {String(Math.floor((progress / 100) * 222 / 60)).padStart(2, '0')}:
              {String(Math.floor((progress / 100) * 222) % 60).padStart(2, '0')}
            </span>
          </div>
        </div>

        <div className="px-5 py-4">
          <div className="flex items-center gap-2 mb-3">
            <Mic className="w-4 h-4 text-green-500" />
            <span className="text-gray-500 text-sm font-medium">Transcrição em tempo real</span>
            {isPlaying && (
              <motion.span
                className="flex items-center gap-1 text-green-400 text-xs"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Transcrevendo...
              </motion.span>
            )}
          </div>

          <div className="bg-gray-100 rounded-xl p-4 min-h-[180px] max-h-[220px] overflow-y-auto">
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
              {visibleText}
              {isPlaying && (
                <motion.span
                  className="inline-block w-0.5 h-4 bg-green-500 ml-0.5"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}
            </p>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-xs">Sentimento: Positivo</span>
            <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-400 text-xs">Tema: Vendas</span>
            <span className="px-2 py-1 rounded bg-orange-500/20 text-orange-400 text-xs">Lead Qualificado</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProductDirectionSection() {
  return (
    <section id="pabx-section" className="relative py-24 px-6 md:px-12 lg:px-24 scroll-mt-20" style={{ backgroundColor: "#f1f3f5" }}>
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-gray-500 text-sm">PABX Inteligente com IA</span>
          <ChevronRight className="w-4 h-4 text-gray-500" />
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-gray-900 mb-8 max-w-3xl"
          style={{
            letterSpacing: "-0.0325em",
            fontVariationSettings: '"opsz" 28',
            fontWeight: 538,
            lineHeight: 1.1,
          }}
        >
          Grave e Transcreva todas as Ligações
        </h2>

        <p className="text-gray-500 text-lg max-w-lg mb-16">
          <span className="text-gray-900 font-medium">Nosso PABX grava 100% das chamadas automaticamente.</span> A IA transcreve o audio em tempo real, analisa o sentimento e gera insights para sua equipe.
        </p>

        {/* Video + Audio Transcription */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-300/50">
            <iframe
              src="https://www.youtube.com/embed/b6_cJoeKEKY"
              title="ERA - PABX Inteligente"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="relative w-full">
            <AudioTranscriptionMockup />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-12">
          <a
            href="#lead-capture"
            className="px-6 py-3 md:px-8 md:py-3.5 rounded-lg hover:brightness-110 transition-all text-sm font-medium inline-flex items-center gap-2 text-center min-w-[200px] justify-center"
            style={{ backgroundColor: "#f97316", color: "#ffffff" }}
          >
            Solicitar cotação
            <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="/pricing"
            className="px-6 py-3 md:px-8 md:py-3.5 bg-[#2b363d] text-white font-medium rounded-lg hover:bg-[#1e272e] transition-colors text-sm text-center min-w-[200px] inline-flex items-center justify-center"
          >
            Ver planos de PABX
          </a>
        </div>
      </div>
    </section>
  )
}
