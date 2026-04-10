"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { WhatsAppLink } from "@/components/whatsapp/WhatsAppLink"
import type { Integration } from "@/data/integrations"
import { categoryColors } from "@/data/integrations"

interface IntegrationCardProps {
  integration: Integration
}

export default function IntegrationCard({ integration }: IntegrationCardProps) {
  const [expanded, setExpanded] = useState(false)
  const color = categoryColors[integration.category] || "#8b5cf6"

  return (
    <article
      className="bg-white border border-gray-200/50 rounded-xl overflow-hidden hover:border-gray-300 transition-colors flex flex-col"
    >
      <div className="p-5 flex flex-col flex-1">
        {/* Header: logo + name + category */}
        <div className="flex items-start gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 overflow-hidden bg-gray-100"
          >
            {integration.logo ? (
              <Image
                src={integration.logo}
                alt={integration.name}
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
            ) : (
              <span className="text-xs font-bold text-gray-400">{integration.name.slice(0, 2).toUpperCase()}</span>
            )}
          </div>
          <div className="min-w-0">
            <h3 className="text-gray-900 font-medium text-sm leading-tight">{integration.name}</h3>
            <span
              className="inline-block mt-1 px-2 py-0.5 rounded-md text-[10px] font-medium"
              style={{ backgroundColor: color + "18", color }}
            >
              {integration.category}
            </span>
          </div>
        </div>

        {/* Availability badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium ${
              integration.omnichannel === 2
                ? "bg-emerald-500/15 text-emerald-400"
                : "border border-gray-300 text-gray-500"
            }`}
          >
            Omnichannel
            {integration.omnichannel === 2 ? " — Marketplace" : " — Sob consulta"}
          </span>
          <span
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium ${
              integration.pabx === 2
                ? "bg-emerald-500/15 text-emerald-400"
                : "border border-gray-300 text-gray-500"
            }`}
          >
            PABX
            {integration.pabx === 2 ? " — Marketplace" : " — Sob consulta"}
          </span>
        </div>

        {/* Feature preview */}
        <div className="flex flex-wrap gap-1 mb-3">
          {integration.features.slice(0, 2).map((feat) => (
            <span
              key={feat}
              className="px-2 py-0.5 rounded-md bg-gray-100/80 text-gray-500 text-[10px]"
            >
              {feat}
            </span>
          ))}
          {integration.features.length > 2 && (
            <span className="px-2 py-0.5 text-gray-500 text-[10px]">
              +{integration.features.length - 2}
            </span>
          )}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="mt-auto flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors"
        >
          {expanded ? "Fechar detalhes" : "Ver detalhes"}
          <ChevronDown
            className={`w-3 h-3 transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Expanded details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-2 border-t border-gray-200/50 space-y-3">
              {/* All features */}
              <div>
                <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                  O que faz
                </span>
                <ul className="mt-1.5 space-y-1">
                  {integration.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: color }} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suggested use */}
              {integration.suggested_use && (
                <div>
                  <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                    Ideal para
                  </span>
                  <p className="text-xs text-gray-600 mt-1">{integration.suggested_use}</p>
                </div>
              )}

              {/* Method */}
              {integration.method && (
                <div>
                  <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                    Integracao via
                  </span>
                  <p className="text-xs text-gray-600 mt-1">{integration.method}</p>
                </div>
              )}

              {/* CTA */}
              <WhatsAppLink
                message="Olá, gostaria de saber mais sobre a integração com o ERA CX"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2b363d] text-white font-medium rounded-lg hover:bg-[#1e272e] transition-colors text-xs mt-1"
              >
                Agendar demonstração
              </WhatsAppLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
