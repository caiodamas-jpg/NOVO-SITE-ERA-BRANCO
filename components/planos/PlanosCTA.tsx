"use client"

import Link from "next/link"
import { WhatsAppLink } from "@/components/whatsapp/WhatsAppLink"

export default function PlanosCTA() {
  return (
    <section className="py-24 px-6 border-t border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl lg:text-[42px] font-medium text-gray-900 mb-4"
          style={{ letterSpacing: "-0.0325em", fontVariationSettings: '"opsz" 28' }}
        >
          Não sabe qual plano escolher?
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
          Nosso time de especialistas pode ajudar a encontrar a solução ideal para o tamanho e as
          necessidades da sua operação.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <WhatsAppLink
            message="Olá, gostaria de falar com um especialista ERA sobre planos"
            className="px-5 py-2.5 font-medium rounded-lg hover:opacity-90 transition-opacity text-sm inline-flex items-center gap-2"
            style={{ backgroundColor: "#cfff00", color: "#1a2429" }}
          >
            Agendar demonstração
          </WhatsAppLink>
          <Link
            href="/integrations"
            className="px-5 py-2.5 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            Ou conheça nossas integrações →
          </Link>
        </div>
      </div>
    </section>
  )
}
