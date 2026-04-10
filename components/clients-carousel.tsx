"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  { name: "UNICAMP", logo: "/images/customers/unicamp.png" },
  { name: "SENAI", logo: "/images/customers/senai.png" },
  { name: "Prefeitura de Campinas", logo: "/images/customers/prefeitura-campinas.png" },
  { name: "Motta Box", logo: "/images/customers/motta-box.png" },
  { name: "Samsung", logo: "/images/customers/samsung.png" },
  { name: "Honda", logo: "/images/customers/honda.png" },
  { name: "Fatec Campinas", logo: "/images/customers/fatec-campinas.png" },
  { name: "EMS", logo: "/images/customers/ems.png" },
  { name: "Centro Paula Souza", logo: "/images/customers/centro-paula-souza.png" },
  { name: "Agroceres Binova", logo: "/images/customers/agroceres-binova.png" },
  { name: "Acácia Autopeças", logo: "/images/customers/acacia-autopecas.png" },
  { name: "Syngenta", logo: "/images/customers/syngenta.png" },
  { name: "ShineWindows", logo: "/images/customers/shinewindows.png" },
  { name: "MamyPoko", logo: "/images/customers/mamypoko.png" },
  { name: "Senac", logo: "/images/customers/senac.png" },
  { name: "SEW Eurodrive", logo: "/images/customers/sew-eurodrive.png" },
  { name: "Cobasi", logo: "/images/customers/cobasi.png" },
  { name: "Unimed", logo: "/images/customers/unimed.png" },
]

export function ClientsCarousel() {
  return (
    <section id="clientes" className="relative z-20 py-20 bg-white">
      <div className="w-full max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-medium text-gray-900 text-center mb-16"
        >
          Alguns de nossos clientes
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative overflow-hidden"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #2b363d, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #2b363d, transparent)" }} />

        {/* Single row - scrolls left */}
        <div className="flex animate-scroll-left">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`logo-${i}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center h-40 w-64 group"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={260}
                height={130}
                className="w-auto max-h-36 object-contain brightness-0 invert opacity-60 transition-all duration-500 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
