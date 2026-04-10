"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import Image from "next/image"

const crmCards = [
  {
    id: 1,
    name: "HubSpot",
    description: "Sincronize contatos, deals e automações de marketing",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23-EbQpy8gGdOKRDD8waKBfSYC5K2C3Fa.png",
  },
  {
    id: 2,
    name: "Octadesk",
    description: "Integre atendimento multicanal com gestão de tickets",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20-iXPWAAlLvzfwej0ImPOOPC8UNQArcF.png",
  },
  {
    id: 3,
    name: "Zapier",
    description: "Conecte com mais de 5000 apps e automatize processos",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-x4cdxNWBYcpA2ByYXE2tJOyfqYgNkh.png",
  },
  {
    id: 4,
    name: "IXCsoft",
    description: "Integração completa para provedores de internet",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-z6P88dM7IKJcmoVNVyMItqJEA7djRE.png",
  },
  {
    id: 5,
    name: "Salesforce",
    description: "CRM líder mundial em gestão de relacionamento",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-aSdiPwYlIcZsD4P2Pc3VuqmlUc4tCD.png",
  },
  {
    id: 6,
    name: "Pipedrive",
    description: "CRM focado em pipeline de vendas",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24-Lhhglfh1R9zhVqRk3Q9V6M53EygaOX.png",
  },
  {
    id: 7,
    name: "Zoho CRM",
    description: "Suite completa de CRM e produtividade",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zoho%20logo-Ll8kbhciq8liy2zniC7UmyG5XsXFb3.png",
  },
  {
    id: 8,
    name: "Freshsales",
    description: "CRM de vendas inteligente da Freshworks",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-5HLuPCnMbVumToSTMyYgsC8rwuOh11.png",
  },
  {
    id: 9,
    name: "Moskit CRM",
    description: "CRM brasileiro para gestão de vendas",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-85irpPX9Tlgns15FTBNTUCkmRMvTvv.png",
  },
]

export function WorkflowsSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const visibleCards = isExpanded ? crmCards : crmCards.slice(0, 8)

  return (
    <section className="relative py-16 bg-white">
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="lg:max-w-xl">
            {/* Orange indicator */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm text-gray-500">Integrações</span>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-[1.1]">
              Integração com mais de
              <br />
              100 CRMs
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-500 lg:max-w-sm lg:pt-12">
            Conecte a ERA com as ferramentas que sua equipe ja utiliza. Sincronize dados automaticamente e mantenha tudo integrado.
          </p>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleCards.map((card) => (
            <div key={card.id} className="bg-white border border-gray-200/50 rounded-xl overflow-hidden h-[160px] flex items-center justify-center p-6 md:p-10 hover:border-gray-300 transition-colors">
              <Image
                src={card.logo}
                alt={card.name}
                width={220}
                height={100}
                className="object-contain max-h-24 w-full brightness-0 invert opacity-90"
              />
            </div>
          ))}
        </div>

        {/* Show more button */}
        {!isExpanded && crmCards.length > 8 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setIsExpanded(true)}
              className="px-6 py-2 border border-gray-300 rounded-full text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors flex items-center gap-2 text-sm"
            >
              Mostre mais
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Show less button */}
        {isExpanded && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setIsExpanded(false)}
              className="px-6 py-2 border border-gray-300 rounded-full text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors flex items-center gap-2 text-sm"
            >
              Mostrar menos
              <ChevronDown className="w-4 h-4 rotate-180" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
