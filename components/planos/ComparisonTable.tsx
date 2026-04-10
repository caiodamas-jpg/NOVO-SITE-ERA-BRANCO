"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Check, X } from "lucide-react"
import type { Product, StandardTier, OmniTier } from "@/data/plans"
import { isOmniTier, getFeatureText, isAddon, getAllFeatures } from "@/data/plans"

interface ComparisonTableProps {
  product: Product
}

export default function ComparisonTable({ product }: ComparisonTableProps) {
  const [open, setOpen] = useState(false)
  const tiers = product.tiers

  const allFeatures: string[] = []
  for (const tier of tiers) {
    const features = getAllFeatures(tier)
    for (const f of features) {
      const text = getFeatureText(f)
      if (!allFeatures.includes(text)) {
        allFeatures.push(text)
      }
    }
  }

  function tierHasFeature(tier: StandardTier | OmniTier, featureText: string): boolean {
    const features = getAllFeatures(tier)
    return features.some((f) => getFeatureText(f) === featureText)
  }

  function featureIsAddon(featureText: string): boolean {
    for (const tier of tiers) {
      const features = getAllFeatures(tier)
      const found = features.find((f) => getFeatureText(f) === featureText)
      if (found && isAddon(found)) return true
    }
    return false
  }

  return (
    <div className="mt-8">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="mx-auto flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-full text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors text-sm font-medium"
      >
        {open ? "Fechar comparação" : "Comparar planos"}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm" role="table">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-gray-500 font-medium w-1/2" scope="col">
                      Recurso
                    </th>
                    {tiers.map((tier) => (
                      <th
                        key={tier.tier}
                        className="text-center py-3 px-4 font-medium"
                        style={tier.highlighted ? { color: "#2b363d" } : { color: "#d4d4d8" }}
                        scope="col"
                      >
                        {tier.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((feature) => (
                    <tr key={feature} className="border-b border-gray-200/30 hover:bg-gray-100/20">
                      <td className="py-2.5 px-4 text-gray-600">
                        {feature}
                        {featureIsAddon(feature) && (
                          <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase bg-orange-500/15 text-orange-400">
                            ADDON
                          </span>
                        )}
                      </td>
                      {tiers.map((tier) => (
                        <td key={tier.tier} className="text-center py-2.5 px-4">
                          {tierHasFeature(tier, feature) ? (
                            <Check className="w-4 h-4 mx-auto" style={{ color: "#2b363d" }} />
                          ) : (
                            <X className="w-4 h-4 text-gray-500 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
