"use client"

import { Check, ChevronRight } from "lucide-react"
import Link from "next/link"
import { WhatsAppLink } from "@/components/whatsapp/WhatsAppLink"
import type { Recommendation } from "@/lib/recommendation"

interface RecommendationResultProps {
  recommendation: Recommendation
}

export default function RecommendationResult({ recommendation }: RecommendationResultProps) {
  return (
    <div className="text-center space-y-6">
      <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: "#2b363d" }}>
        <Check className="w-7 h-7 text-[#1a1a1a]" />
      </div>

      <div>
        <p className="text-gray-900 font-medium text-sm mb-1">Com base no perfil da sua empresa, recomendamos:</p>
      </div>

      <div className="rounded-xl border border-[#cfff00]/30 bg-white/80 p-5 text-left">
        <p className="text-lg font-semibold text-gray-900 mb-1">{recommendation.fullName}</p>
        <p className="text-gray-500 text-sm mb-4">{recommendation.reason}</p>
        <Link
          href={recommendation.planUrl}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#2b363d", color: "#ffffff" }}
        >
          Ver detalhes do plano
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <p className="text-gray-500 text-xs">
        Atendimento de segunda a sexta, das 9h às 17h.
      </p>

      <WhatsAppLink className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
        Prefere falar agora? WhatsApp
      </WhatsAppLink>
    </div>
  )
}
