"use client"

import { WhatsAppLink } from "@/components/whatsapp/WhatsAppLink"

export default function IntegrationCTA() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl lg:text-[42px] font-medium text-gray-900 mb-4"
          style={{ letterSpacing: "-0.0325em", fontVariationSettings: '"opsz" 28' }}
        >
          Não encontrou seu CRM na lista?
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
          O ERA CX possui APIs abertas e nosso time de desenvolvimento pode criar integrações sob
          medida para sua operação.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <WhatsAppLink
            message="Olá, gostaria de solicitar uma integração customizada com o ERA CX"
            className="px-5 py-2.5 bg-[#2b363d] text-white font-medium rounded-lg hover:bg-[#1e272e] transition-colors text-sm"
          >
            Solicitar integração customizada
          </WhatsAppLink>
          <a
            href="/"
            className="px-5 py-2.5 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            Voltar para a home
          </a>
        </div>
      </div>
    </section>
  )
}
