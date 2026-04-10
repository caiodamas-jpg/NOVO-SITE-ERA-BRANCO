"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Phone, MessageSquare, Server, Headphones, Shield, Clock, Heart, Users, Calendar, ExternalLink } from "lucide-react"

const impactNumbers = [
  { value: "3M+", label: "Atendimentos por ano", icon: <Phone className="w-5 h-5" /> },
  { value: "3.500", label: "Voluntários ativos", icon: <Users className="w-5 h-5" /> },
  { value: "22.630+", label: "Dias ininterruptos", icon: <Calendar className="w-5 h-5" /> },
  { value: "24/7", label: "Disponível sempre", icon: <Clock className="w-5 h-5" /> },
]

const contributions = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Infraestrutura de voz",
    desc: "Infraestrutura completa para o 188 e ramais dos postos de atendimento em todo o Brasil, garantindo que nenhuma ligação fique sem resposta.",
    color: "#3b82f6",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Software de atendimento",
    desc: "Plataforma completa para que os voluntários possam acolher pessoas que precisam de apoio emocional.",
    color: "#22c55e",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Suporte técnico contínuo",
    desc: "Equipe dedicada para manutenção, evolução e suporte técnico sem custo. Atualizações e melhorias constantes.",
    color: "#f59e0b",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Infraestrutura cloud",
    desc: "Servidores em nuvem com 99.9% de uptime, segurança de dados e backups automáticos para garantir disponibilidade total.",
    color: "#8b5cf6",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Segurança e privacidade",
    desc: "Todos os atendimentos são confidenciais. A infraestrutura garante sigilo absoluto das conversas entre voluntários e pessoas atendidas.",
    color: "#06b6d4",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "100% gratuito",
    desc: "Toda a infraestrutura, software e suporte são doados pela ERA. Zero custo para o CVV, para que todo recurso vá para a missão.",
    color: "#ec4899",
  },
]

export default function CVVPageClient() {
  return (
    <>
      <Navbar />

      {/* Hero — fundo claro, humanizado */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-5 mb-8"
          >
            <Image src="/images/era-logo.png" alt="ERA" width={100} height={30} className="h-7 w-auto brightness-0" />
            <span className="text-gray-300 text-2xl font-light">+</span>
            <div className="px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50">
              <span className="text-gray-700 font-bold text-lg">CVV</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wide uppercase bg-amber-50 text-amber-700 border border-amber-200"
          >
            <Heart className="w-3 h-3" />
            Responsabilidade Social
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight mb-6"
          >
            Há mais de 4 anos, a ERA é a{" "}
            <span className="text-amber-600">infraestrutura por trás do CVV</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-gray-500 mb-10 max-w-xl mx-auto"
          >
            Doamos tecnologia e infraestrutura para que 3.500 voluntários possam
            oferecer apoio emocional a milhões de brasileiros.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://cvv.org.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 font-medium rounded-lg text-sm bg-amber-500 text-white hover:bg-amber-600 transition-colors"
            >
              Conhecer o CVV
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="tel:188"
              className="px-5 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Ligar 188
            </a>
          </motion.div>
        </div>
      </section>

      {/* O que é o CVV */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f9fafb" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">
              O que é o CVV
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              O Centro de Valorização da Vida (CVV) realiza apoio emocional e prevenção do suicídio
              há mais de 62 anos, atendendo voluntária e gratuitamente todas as pessoas que querem e
              precisam conversar, sob total sigilo, por telefone (188) e presencialmente.
            </p>
          </motion.div>

          {/* Impact numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactNumbers.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-6 rounded-xl bg-white border border-gray-200"
              >
                <div className="flex justify-center mb-3 text-amber-500">{item.icon}</div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{item.value}</p>
                <p className="text-xs text-gray-500">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como a ERA contribui */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">
              Como a ERA contribui
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Toda a infraestrutura tecnológica é doada pela ERA, sem nenhum custo para o CVV
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributions.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl p-6 border border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">
            Se você precisa conversar
          </h2>
          <p className="text-gray-500 mb-8">
            O CVV está disponível 24 horas por dia, 7 dias por semana, de forma gratuita e sigilosa.
            Você não precisa estar em crise para ligar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:188"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm bg-amber-500 text-white hover:bg-amber-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Ligar 188
            </a>
            <a
              href="https://cvv.org.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Conhecer o CVV
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
