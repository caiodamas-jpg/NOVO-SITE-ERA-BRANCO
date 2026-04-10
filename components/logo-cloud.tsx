"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const customers = [
  { name: "Decathlon", logo: "/images/customers/decathlon.png" },
  { name: "Cobasi", logo: "/images/customers/cobasi.png" },
  { name: "Pizza Hut", logo: "/images/customers/pizzahut.png" },
  { name: "Unifique", logo: "/images/customers/unifique.png" },
  { name: "Sicoob", logo: "/images/customers/sicoob.png" },
  { name: "PUC Campinas", logo: "/images/customers/puc-campinas.png" },
  { name: "Cultura Inglesa", logo: "/images/customers/cultura-inglesa.png" },
  { name: "Unimed", logo: "/images/customers/unimed.png" },
]

// Duplicate for seamless infinite scroll
const allLogos = [...customers, ...customers]

export function LogoCloud() {
  return (
    <div className="relative z-20 pb-20 pt-8" style={{ backgroundColor: "#e9ecef" }}>
      <div className="w-full px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg text-gray-500 mb-12"
        >
          Empresas que confiam na ERA
        </motion.p>

        {/* Carousel container */}
        <div className="relative overflow-hidden max-w-5xl mx-auto">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #e9ecef, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #e9ecef, transparent)" }} />

          {/* Scrolling track */}
          <div className="flex items-center gap-20 animate-scroll-left w-max">
            {allLogos.map((customer, i) => (
              <div
                key={`${customer.name}-${i}`}
                className="flex items-center justify-center h-24 w-52 shrink-0"
              >
                <Image
                  src={customer.logo}
                  alt={customer.name}
                  width={220}
                  height={100}
                  className="max-w-[180px] max-h-[80px] w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300"
                  sizes="220px"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
