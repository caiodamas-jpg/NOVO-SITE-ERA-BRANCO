"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronDown } from "lucide-react"
import { getFeatureText, isAddon } from "@/data/plans"
import type { FeatureItem } from "@/data/plans"

interface FeatureListProps {
  features: (string | FeatureItem)[]
  initialVisible?: number
  label?: string
}

export default function FeatureList({ features, initialVisible = 6, label }: FeatureListProps) {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? features : features.slice(0, initialVisible)
  const hasMore = features.length > initialVisible

  return (
    <div>
      {label && (
        <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-2 block">
          {label}
        </span>
      )}
      <ul className="space-y-2">
        {visible.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#2b363d" }} />
            <span>
              {getFeatureText(feature)}
              {isAddon(feature) && (
                <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase bg-orange-500/15 text-orange-400">
                  ADDON
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="mt-3 flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 transition-colors"
        >
          {expanded ? "Mostrar menos" : `Ver todos os recursos (${features.length})`}
          <ChevronDown className={`w-3 h-3 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}
    </div>
  )
}
