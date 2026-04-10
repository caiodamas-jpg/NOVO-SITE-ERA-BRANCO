"use client"

import { motion } from "framer-motion"
import { Check, Shield, Star, Clock } from "lucide-react"
import Image from "next/image"
import LeadForm from "./LeadForm"
import LeadGate from "./LeadGate"

export function LeadCaptureSection() {
  return (
    <section id="lead-capture" className="py-24 px-6 scroll-mt-20" style={{ backgroundColor: "#2b363d" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#cfff00]" />
              <span className="text-sm text-white/60">Demonstração gratuita</span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-medium text-white mb-4"
              style={{
                letterSpacing: "-0.0325em",
                lineHeight: 1.1,
                fontVariationSettings: '"opsz" 28',
              }}
            >
              Veja na prática como
              <br />
              <span className="text-[#cfff00]">reduzir 40% do tempo</span>
              <br />
              de atendimento
            </h2>

            <p className="text-white/50 text-sm mb-8">
              Preencha em 30 segundos e receba uma demonstração personalizada para sua operação.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                { icon: Clock, text: "Resposta de um especialista em até 2h" },
                { icon: Star, text: "Demonstração personalizada para seu segmento" },
                { icon: Shield, text: "Sem compromisso — cancele quando quiser" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2.5 text-sm text-white/70">
                  <item.icon className="w-4 h-4 shrink-0 text-[#cfff00]" />
                  {item.text}
                </li>
              ))}
            </ul>

            {/* Prova social */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-[11px] text-white/40 uppercase tracking-wider mb-4">Empresas que confiam na ERA</p>
              <div className="flex items-center gap-4 flex-wrap">
                <Image src="/images/selo-gptw.png" alt="GPTW" width={42} height={42} className="h-[42px] w-[42px] object-contain opacity-70" />
                <Image src="/images/meta-partner.webp" alt="Meta Business Partner" width={120} height={48} className="h-[40px] w-auto object-contain brightness-0 invert opacity-50" />
              </div>
              <div className="flex items-center gap-1.5 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#cfff00] text-[#cfff00]" />
                ))}
                <span className="text-white/50 text-xs ml-1">4.9 no Google</span>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-md"
          >
            <div className="rounded-xl border border-white/10 bg-white p-6">
              <LeadGate>
                <LeadForm context="home" />
              </LeadGate>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
