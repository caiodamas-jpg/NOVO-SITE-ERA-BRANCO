"use client"

import { motion } from "framer-motion"
import { Check, ChevronRight, ExternalLink, Smartphone, Monitor } from "lucide-react"

export function CoExSection() {
  return (
    <section id="coex-section" className="py-24 px-6 scroll-mt-20" style={{ backgroundColor: "#2b363d" }}>
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-sm text-white/50">WhatsApp CoEx</span>
            <span className="ml-2 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border border-emerald-500/40 text-emerald-400">
              Meta Official
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 max-w-xl"
                style={{
                  letterSpacing: "-0.0325em",
                  lineHeight: 1.1,
                  fontVariationSettings: '"opsz" 28',
                }}
              >
                Seu time usa o WhatsApp no celular.
                <br />
                <span className="text-emerald-400">Você vê tudo aqui</span>
              </h2>

              <p className="text-white/40 text-sm mb-2">
                Coexistence — API + App no mesmo numero
              </p>

              <ul className="space-y-3 mt-6 mb-8">
                {[
                  "Veja o que cada um faz no WhatsApp — sem instalar nada no celular",
                  "Identifique horários de pico e distribua melhor a carga",
                  "Acesse qualquer conversa em segundos",
                  "Histórico protegido mesmo se alguém sair da empresa",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://nex.era.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg font-medium text-base hover:brightness-110 transition-all inline-flex items-center gap-2 text-white"
                  style={{ backgroundColor: "#f97316" }}
                >
                  Ver planos e preços
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="https://nex.era.com.br/forms/coex/plans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 font-medium rounded-lg hover:brightness-110 transition-all text-base inline-flex items-center gap-2 text-[#2b363d]"
                  style={{ backgroundColor: "#cfff00" }}
                >
                  Ver Atividade
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Mockup visual */}
            <div className="flex-1 w-full max-w-md">
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 space-y-4">
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Celular do vendedor</p>
                    <p className="text-white/50 text-xs">WhatsApp Business App</p>
                    <p className="text-emerald-400 text-xs mt-1">Ele usa como sempre</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-6 bg-white/20" />
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Monitor className="w-4 h-4 text-white/70" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Seu Painel</p>
                    <p className="text-white/50 text-xs">Métricas + Conversas</p>
                    <p className="text-xs mt-1 text-emerald-400">Você vê tudo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
