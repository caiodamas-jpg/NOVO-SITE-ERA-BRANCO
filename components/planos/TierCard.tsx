"use client"

import { ExternalLink } from "lucide-react"
import { isOmniTier } from "@/data/plans"
import type { StandardTier, OmniTier } from "@/data/plans"
import FeatureList from "./FeatureList"

interface TierCardProps {
  tier: StandardTier | OmniTier
  onRequestQuote?: () => void
}

export default function TierCard({ tier, onRequestQuote }: TierCardProps) {
  const omni = isOmniTier(tier)

  return (
    <article
      className={`relative rounded-xl border p-6 flex flex-col ${
        tier.highlighted
          ? "border-[#cfff00]/40 bg-white/80 shadow-lg shadow-[#cfff00]/5"
          : "border-gray-200/50 bg-white"
      }`}
    >
      {/* MAIS PROCURADO badge */}
      {tier.highlighted && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap"
          style={{ backgroundColor: "#2b363d", color: "#ffffff" }}
        >
          Mais procurado
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        <h3 className="text-gray-900 font-semibold text-lg">{tier.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{tier.description}</p>
      </div>

      {/* CTA */}
      <button
        onClick={onRequestQuote}
        className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors mb-6 ${
          tier.highlighted
            ? "hover:opacity-90"
            : "border border-gray-300 text-gray-900 hover:bg-gray-100"
        }`}
        style={
          tier.highlighted
            ? { backgroundColor: "#cfff00", color: "#1a2429" }
            : undefined
        }
      >
        Solicitar cotação
      </button>

      {/* Includes previous */}
      {tier.includes_previous && (
        <p className="text-xs font-medium mb-3" style={{ color: "#2b363d" }}>
          {tier.includes_previous}
        </p>
      )}

      {/* Features */}
      <div className="flex-1 space-y-4">
        {omni ? (
          <>
            <FeatureList features={(tier as OmniTier).features_general} label="Geral" initialVisible={5} />
            <div className="border-t border-gray-200/50 pt-3">
              <FeatureList features={(tier as OmniTier).features_chat} label="Chat" initialVisible={4} />
            </div>
            <div className="border-t border-gray-200/50 pt-3">
              <FeatureList features={(tier as OmniTier).features_voz} label="Voz" initialVisible={4} />
            </div>
          </>
        ) : (
          <FeatureList features={(tier as StandardTier).features} initialVisible={6} />
        )}
      </div>
    </article>
  )
}
