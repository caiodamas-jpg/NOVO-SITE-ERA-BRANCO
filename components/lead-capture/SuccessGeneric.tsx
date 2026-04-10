"use client"

import { Check } from "lucide-react"
import Link from "next/link"
import { WhatsAppLink } from "@/components/whatsapp/WhatsAppLink"

export default function SuccessGeneric() {
  return (
    <div className="text-center space-y-6">
      <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: "#2b363d" }}>
        <Check className="w-7 h-7 text-[#1a1a1a]" />
      </div>

      <div>
        <p className="text-gray-900 font-medium text-base mb-2">Recebemos seus dados!</p>
        <p className="text-gray-500 text-sm">
          Atendimento de segunda a sexta, das 9h às 17h.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#2b363d", color: "#ffffff" }}
        >
          Conhecer nossos planos
        </Link>
        <WhatsAppLink className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
          Falar agora pelo WhatsApp
        </WhatsAppLink>
      </div>
    </div>
  )
}
