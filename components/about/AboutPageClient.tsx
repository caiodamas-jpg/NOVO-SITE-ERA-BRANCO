"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Globe, Users, Headphones, Building2, Phone, MessageSquare, Layers, ChevronRight } from "lucide-react"

const timeline = [
  { year: "2013", text: "Fundada no mercado de PABX e Call Center" },
  { year: "2016", text: "Entrada em comunicações unificadas" },
  { year: "2019", text: "Expansão para atendimento omnichannel" },
  { year: "2022", text: "Lançamento da plataforma ERA CX com IA" },
  { year: "2024", text: "Presente em 6+ países com +10 mil empresas" },
]

const stats = [
  { value: "+10", label: "anos no mercado", icon: Building2 },
  { value: "+10 mil", label: "empresas atendidas", icon: Users },
  { value: "+130 mil", label: "usuários finais", icon: Headphones },
  { value: "6+", label: "países", icon: Globe },
]

const countries = [
  { name: "Brasil", flag: "🇧🇷" },
  { name: "EUA", flag: "🇺🇸" },
  { name: "México", flag: "🇲🇽" },
  { name: "Colômbia", flag: "🇨🇴" },
  { name: "Argentina", flag: "🇦🇷" },
  { name: "Portugal", flag: "🇵🇹" },
]

const solutions = [
  {
    name: "PABX em Nuvem",
    desc: "PABX virtual completo com ramais ilimitados, URA inteligente, gravação e monitoramento.",
    icon: Phone,
    color: "#3b82f6",
  },
  {
    name: "Call Center",
    desc: "Filas inteligentes, discador preditivo, monitoramento com sussurro e relatórios avançados.",
    icon: Headphones,
    color: "#8b5cf6",
  },
  {
    name: "Omnichannel",
    desc: "Unifique voz, WhatsApp, Instagram, Telegram e mais canais em uma única plataforma com IA.",
    icon: Layers,
    color: "#f59e0b",
  },
]

const clients = [
  "Unimed", "Decathlon", "Cobasi", "Kopenhagen", "Pizza Hut",
  "Sicoob", "Giuliana Flores", "CVV", "PUC Campinas", "Cultura Inglesa",
  "Unifique", "Dia",
]

export default function AboutPageClient() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="pt-32 pb-20 px-6" style={{ backgroundColor: "#2b363d" }}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#cfff00]" />
                <span className="text-sm text-white/60">Quem somos</span>
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-6"
                style={{ letterSpacing: "-0.0325em", lineHeight: 1.1, fontVariationSettings: '"opsz" 28' }}
              >
                Pioneiros em gestão
                <br />
                <span className="text-[#cfff00]">de comunicação</span>
              </h1>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                Desde 2013 no mercado de PABX e Call Center. Mais de 10 anos transformando
                a comunicação de empresas em todo o mundo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6 border-b border-gray-200">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-3 text-gray-400" />
                  <p className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2
                className="text-3xl md:text-4xl font-medium text-gray-900 mb-4"
                style={{ letterSpacing: "-0.0325em" }}
              >
                Nossa trajetória
              </h2>
              <p className="text-gray-500">Mais de uma década construindo o futuro da comunicação empresarial.</p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200" />
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-center gap-6 mb-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                    <p className="text-sm text-gray-500">{item.text}</p>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#2b363d" }}>
                    <span className="text-xs font-bold text-[#cfff00]">{item.year}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 md:hidden">{item.text}</p>
                    <div className="hidden md:block" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Presença global */}
        <section className="py-20 px-6" style={{ backgroundColor: "#f9fafb" }}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl md:text-4xl font-medium text-gray-900 mb-4"
                style={{ letterSpacing: "-0.0325em" }}
              >
                Estamos em mais de 6 países
              </h2>
              <p className="text-gray-500 mb-12">Levando tecnologia de comunicação para empresas ao redor do mundo.</p>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {countries.map((country, i) => (
                <motion.div
                  key={country.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="text-4xl">{country.flag}</span>
                  <span className="text-sm font-medium text-gray-700">{country.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl md:text-4xl font-medium text-gray-900 mb-4"
                style={{ letterSpacing: "-0.0325em" }}
              >
                Pronto para transformar sua comunicação?
              </h2>
              <p className="text-gray-500 mb-8">
                Agende uma demonstração e descubra como a ERA pode ajudar sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/#lead-capture"
                  className="px-8 py-4 rounded-lg font-medium text-base text-white hover:brightness-110 transition-all"
                  style={{ backgroundColor: "#cfff00" }}
                >
                  Agendar demonstração
                </a>
                <a
                  href="/pricing"
                  className="px-8 py-4 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors text-base"
                >
                  Ver planos
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
