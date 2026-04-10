"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const orbit1 = [
  { name: "IXC", logo: "/images/crms/ixc.png" },
  { name: "Salesforce", logo: "/images/crms/salesforce.png" },
  { name: "Zendesk", logo: "/images/crms/zendesk.png" },
  { name: "Hubspot", logo: "/images/crms/hubspot.png" },
  { name: "MK Solutions", logo: "/images/crms/mk-solutions.png" },
  { name: "PipeDrive", logo: "/images/crms/pipedrive.png" },
]

const orbit2 = [
  { name: "Totvs", logo: "/images/crms/totvs.png" },
  { name: "Teams", logo: "/images/crms/teams.png" },
  { name: "Gerenet", logo: "/images/crms/gerenet.png" },
  { name: "Zoho", logo: "/images/crms/zoho.png" },
  { name: "Bitrix", logo: "/images/crms/bitrix.png" },
  { name: "RD Station", logo: "/images/crms/rd-station.png" },
  { name: "Hubsoft", logo: "/images/crms/hubsoft.png" },
  { name: "Kommo", logo: "/images/crms/kommo.png" },
]

const orbit3 = [
  { name: "Octadesk", logo: "/images/crms/octadesk.png" },
  { name: "Super Logica", logo: "/images/crms/super-logica.png" },
  { name: "Freshsales", logo: "/images/crms/freshsales.png" },
  { name: "Nectar", logo: "/images/crms/nectar.png" },
  { name: "Routerbox", logo: "/images/crms/routerbox.png" },
  { name: "Wedoo", logo: "/images/crms/wedoo.png" },
]

// Orbita menor para mobile com menos itens
const mobileOrbit = [
  { name: "IXC", logo: "/images/crms/ixc.png" },
  { name: "Salesforce", logo: "/images/crms/salesforce.png" },
  { name: "Hubspot", logo: "/images/crms/hubspot.png" },
  { name: "Zendesk", logo: "/images/crms/zendesk.png" },
  { name: "Totvs", logo: "/images/crms/totvs.png" },
  { name: "Teams", logo: "/images/crms/teams.png" },
]

interface OrbitItem {
  name: string
  logo: string
}

function OrbitRing({
  items,
  radius,
  duration,
  reverse = false,
  itemSize = 48,
}: {
  items: OrbitItem[]
  radius: number
  duration: number
  reverse?: boolean
  itemSize?: number
}) {
  const half = itemSize / 2
  return (
    <div
      className="absolute rounded-full border border-gray-300/40"
      style={{
        width: radius * 2,
        height: radius * 2,
        top: `calc(50% - ${radius}px)`,
        left: `calc(50% - ${radius}px)`,
      }}
    >
      <motion.div
        className="w-full h-full"
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => {
          const angle = (360 / items.length) * i
          const rad = (angle * Math.PI) / 180
          const x = Math.round(radius + radius * Math.cos(rad) - half)
          const y = Math.round(radius + radius * Math.sin(rad) - half)
          return (
            <motion.div
              key={item.name}
              className="absolute rounded-xl bg-white border border-gray-200 shadow-md flex items-center justify-center overflow-hidden p-1.5"
              style={{ left: `${x}px`, top: `${y}px`, width: `${itemSize}px`, height: `${itemSize}px` }}
              animate={{ rotate: reverse ? 360 : -360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
              title={item.name}
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={itemSize}
                height={itemSize}
                className="object-contain rounded-lg"
                style={{ width: itemSize - 12, height: itemSize - 12 }}
              />
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default function IntegrationOrbit() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#f1f3f5" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Orbit visual */}
          <div className="relative w-full max-w-[500px] aspect-square mx-auto lg:mx-0">
            {/* Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
              <Image
                src="/images/era-icon.png"
                alt="ERA CX"
                width={48}
                height={48}
                className="w-10 h-10 md:w-12 md:h-12 mb-2 brightness-0"
              />
              <span className="text-gray-900 font-semibold text-base md:text-lg">100+</span>
              <span className="text-gray-500 text-[10px] md:text-xs">Integrações</span>
            </div>

            {/* Desktop: 3 orbitas */}
            <div className="hidden lg:block">
              <OrbitRing items={orbit1} radius={120} duration={45} />
              <OrbitRing items={orbit2} radius={185} duration={60} reverse />
              <OrbitRing items={orbit3} radius={240} duration={75} />
            </div>

            {/* Tablet: 2 orbitas menores */}
            <div className="hidden md:block lg:hidden">
              <OrbitRing items={orbit1} radius={100} duration={45} itemSize={40} />
              <OrbitRing items={orbit2.slice(0, 6)} radius={170} duration={55} reverse itemSize={40} />
            </div>

            {/* Mobile: 1 orbita com 6 itens */}
            <div className="block md:hidden">
              <OrbitRing items={mobileOrbit} radius={120} duration={40} itemSize={36} />
            </div>
          </div>

          {/* Text + CTA */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm text-gray-500">Integrações</span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-[42px] font-medium text-gray-900 mb-4"
              style={{
                letterSpacing: "-0.0325em",
                lineHeight: 1.1,
                fontVariationSettings: '"opsz" 28',
              }}
            >
              Conecte com mais de
              <br />
              100 CRMs e ERPs
            </h2>

            <p className="text-gray-500 text-base mb-8 max-w-md mx-auto lg:mx-0">
              IXC, Salesforce, Zendesk, Hubspot, MK Solutions, PipeDrive, Totvs e dezenas de outras
              plataformas integradas nativamente ao ERA CX.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                href="/integrations"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                style={{ backgroundColor: "#2b363d", color: "#ffffff" }}
              >
                Ver todas as integrações
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
