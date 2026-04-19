"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Mic,
  Headphones,
  MonitorPlay,
  FileText,
  Plug,
  Globe,
  Infinity as InfinityIcon,
  Zap,
  Check,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import PabxStepForm from "./PabxStepForm"

const features = [
  { icon: Phone, title: "PABX Virtual", desc: "Toda a sua telefonia corporativa na nuvem. Sem equipamentos, sem manutenção. Escale ramais sob demanda." },
  { icon: Mic, title: "URA Inteligente", desc: "Atendimento automatizado multinível com discagem direta, regras de horário e saudação personalizada." },
  { icon: Headphones, title: "Call Center", desc: "Filas inteligentes com 6 estratégias de distribuição, agentes multi-skill e callback automático." },
  { icon: MonitorPlay, title: "Monitoramento", desc: "Escuta silenciosa, sussurro e intervenção ao vivo. Dashboards por fila com TMA, TME e nível de serviço." },
  { icon: FileText, title: "Gravação e Relatórios", desc: "Grave chamadas por até 1 ano. Relatórios de performance, HMM, CDR e consolidação por agente." },
  { icon: Plug, title: "CTI e Integrações", desc: "Pop-up do cliente antes de atender. +50 integrações nativas com CRMs e ERPs, API e webhooks." },
]

const callouts = [
  { icon: Globe, title: "Substitua seu PABX físico", desc: "Migre toda a sua telefonia para a nuvem sem trocar nenhum equipamento. Funciona com suas operadoras atuais via gateway SIP." },
  { icon: InfinityIcon, title: "Escale sem limites", desc: "De 5 a 500+ ramais sob demanda. Cada colaborador pode usar o ramal no celular via app — trabalhe de qualquer lugar." },
  { icon: Zap, title: "+50 CRMs integrados", desc: "IXC, Salesforce, Zendesk, Hubspot, Totvs, MK Solutions e dezenas de outros CRMs integrados nativamente." },
]

const integrations = [
  { name: "IXC", src: "/images/crms/ixc.png" },
  { name: "Salesforce", src: "/images/crms/salesforce.png" },
  { name: "Zendesk", src: "/images/crms/zendesk.png" },
  { name: "Hubspot", src: "/images/crms/hubspot.png" },
  { name: "MK Solutions", src: "/images/crms/mk-solutions.png" },
  { name: "PipeDrive", src: "/images/crms/pipedrive.png" },
  { name: "Totvs", src: "/images/crms/totvs.png" },
  { name: "Teams", src: "/images/crms/teams.png" },
  { name: "Movidesk", src: "/images/crms/movidesk.png" },
  { name: "Zoho", src: "/images/crms/zoho.png" },
  { name: "Bitrix", src: "/images/crms/bitrix.png" },
  { name: "RD Station", src: "/images/crms/rd-station.png" },
  { name: "HubSoft", src: "/images/crms/hubsoft.png" },
  { name: "Kommo", src: "/images/crms/kommo.png" },
  { name: "Cobmais", src: "/images/crms/cobmais.png" },
  { name: "Octadesk", src: "/images/crms/octadesk.png" },
  { name: "Senior", src: "/images/crms/senior.png" },
  { name: "Super Lógica", src: "/images/crms/super-logica.png" },
  { name: "GSS", src: "/images/crms/gss.png" },
  { name: "Voalle", src: "/images/crms/voalle.png" },
]

const faqs = [
  { q: "O PABX em nuvem da ERA substitui meu PABX físico?", a: "Sim. O PABX virtual da ERA substitui completamente seu PABX físico, com mais recursos, sem hardware, sem manutenção e com escalabilidade imediata." },
  { q: "Qual a diferença entre PABX em nuvem e PABX virtual?", a: "São a mesma coisa. PABX em nuvem (ou PABX virtual) significa que toda a telefonia roda em servidores na nuvem, sem necessidade de equipamentos físicos na sua empresa." },
  { q: "Preciso de hardware para usar o PABX virtual?", a: "Não. O PABX em nuvem funciona 100% via software. Seus colaboradores usam o ramal no computador (softphone) ou no celular via app." },
  { q: "Quantos ramais o PABX em nuvem suporta?", a: "Ilimitados. De 5 a 500+ ramais, a plataforma escala conforme sua operação." },
  { q: "O PABX virtual funciona com minha operadora?", a: "Sim, suporta gateways SIP registrados e por IP confiável com múltiplas operadoras e redundância automática." },
  { q: "O supervisor consegue intervir na chamada ao vivo?", a: "Sim. O monitoramento com sussurro permite que supervisores escutem, sussurrem orientações e intervenham na chamada em tempo real." },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-4 flex items-center justify-between text-left gap-4"
      >
        <span className="text-gray-900 text-sm font-medium">{q}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 text-gray-500 text-xs leading-relaxed">{a}</p>}
    </div>
  )
}

export default function PabxNuvemClient() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative pt-28 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pabx-hero-banner.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1.5 text-xs text-white/70" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><ChevronRight className="w-3 h-3" /></li>
              <li><Link href="/era-chat" className="hover:text-white transition-colors">Chat</Link></li>
              <li><ChevronRight className="w-3 h-3" /></li>
              <li className="text-white">PABX em Nuvem</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cfff00] text-[#1a2429] text-[11px] font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1a2429]" />
                PABX em Nuvem
              </span>

              <h1
                className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-5"
                style={{ letterSpacing: "-0.0325em", lineHeight: 1.05, textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
              >
                Migre seu PABX para a nuvem.
                <br />
                <span className="text-[#cfff00]">Sem hardware.</span>
              </h1>

              <p className="text-white/85 text-base max-w-lg mb-6 leading-relaxed" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
                PABX virtual completo com ramais ilimitados, URA inteligente, call center e +50 integrações. Ativação em menos de 24h.
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-white/90" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#cfff00]" /> Ramais ilimitados
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#cfff00]" /> Gravação 1 ano
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#cfff00]" /> Suporte 24/7
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md mx-auto lg:ml-auto"
            >
              <PabxStepForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-t border-b border-gray-200 py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "+40.000", l: "Empresas" },
            { n: "Ilimitados", l: "Ramais" },
            { n: "24h", l: "Ativação" },
            { n: "24/7", l: "Suporte" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-2xl md:text-3xl font-medium text-gray-900" style={{ letterSpacing: "-0.02em" }}>{s.n}</p>
              <p className="text-xs text-gray-500 mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOGOS */}
      <section className="py-12 border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-8 text-center">Empresas que confiam na ERA</p>
          <div className="grid grid-cols-5 lg:grid-cols-10 items-center justify-items-center gap-x-4 gap-y-6">
            {[
              { name: "Senac", src: "/images/customers/senac.png" },
              { name: "Decathlon", src: "/images/customers/decathlon.png" },
              { name: "Unimed", src: "/images/customers/unimed.png" },
              { name: "Pizza Hut", src: "/images/customers/pizzahut.png" },
              { name: "Samsung", src: "/images/customers/samsung.png" },
              { name: "Honda", src: "/images/customers/honda.png" },
              { name: "Sicoob", src: "/images/customers/sicoob.png" },
              { name: "Unicamp", src: "/images/customers/unicamp.png" },
              { name: "Cobasi", src: "/images/customers/cobasi.png" },
              { name: "EMS", src: "/images/customers/ems.png" },
            ].map((c) => (
              <Image
                key={c.name}
                src={c.src}
                alt={c.name}
                width={180}
                height={64}
                className="h-10 md:h-12 lg:h-14 w-auto max-w-full object-contain grayscale opacity-75 hover:opacity-100 hover:grayscale-0 transition-all"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-[#cfff00]/20 border border-[#cfff00] text-[#1a2429] text-[10px] font-semibold uppercase tracking-wider mb-4">
              Funcionalidades
            </span>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900" style={{ letterSpacing: "-0.0325em" }}>
              Tudo que o seu PABX em nuvem precisa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-gray-200/60 bg-gray-50 p-5 hover:border-[#cfff00] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#cfff00]/20 flex items-center justify-center mb-3">
                  <f.icon className="w-5 h-5 text-[#2b363d]" />
                </div>
                <h3 className="text-gray-900 font-medium text-sm mb-1.5">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALLOUTS */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-3">
          {callouts.map((c) => (
            <div key={c.title} className="flex items-start gap-4 p-6 rounded-xl border border-gray-200 bg-white">
              <div className="w-10 h-10 rounded-lg bg-[#cfff00]/20 flex items-center justify-center shrink-0">
                <c.icon className="w-5 h-5 text-[#2b363d]" />
              </div>
              <div>
                <h3 className="text-gray-900 font-medium text-base mb-1">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-20 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-[#cfff00]/20 border border-[#cfff00] text-[#1a2429] text-[10px] font-semibold uppercase tracking-wider mb-4">
              Integrações
            </span>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3" style={{ letterSpacing: "-0.0325em" }}>
              CRMs que conectam com o PABX
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Pop-up automático com dados do cliente, tabulação de chamadas e CTI completo. +50 CRMs e ERPs integrados nativamente.
            </p>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-3">
            {integrations.map((crm) => (
              <div key={crm.name} className="flex flex-col items-center gap-1.5 group">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden transition-colors group-hover:border-[#cfff00]/50"
                  style={{ backgroundColor: "#2b363d", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Image
                    src={crm.src}
                    alt={crm.name}
                    width={40}
                    height={40}
                    className="object-contain"
                    sizes="40px"
                    loading="lazy"
                  />
                </div>
                <span className="text-gray-500 text-[9px] text-center leading-tight">{crm.name}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/integrations" className="inline-flex items-center gap-1.5 text-[#2b363d] text-xs font-medium hover:underline">
              Ver todas as +50 integrações →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-gray-200 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3" style={{ letterSpacing: "-0.0325em" }}>
            Pronto para migrar seu PABX?
          </h2>
          <p className="text-gray-500 text-sm mb-6">Um especialista ERA pode ajudar a encontrar o plano ideal para sua operação.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="px-5 py-2.5 rounded-lg text-sm font-medium hover:brightness-110 transition-all"
              style={{ backgroundColor: "#cfff00", color: "#1a2429" }}
            >
              Solicitar cotação
            </a>
            <Link
              href="/pricing#era-voz"
              className="px-5 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm"
            >
              Ver planos Era Voz
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 text-center" style={{ letterSpacing: "-0.0325em" }}>
            Perguntas frequentes
          </h2>
          <div>
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
