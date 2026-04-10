"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Quais CRMs se integram com o ERA CX?",
    answer:
      "O ERA CX se integra com mais de 100 CRMs, ERPs e plataformas, incluindo IXC, MK Solutions, Salesforce, Zendesk, Hubspot, PipeDrive, Totvs, Microsoft Teams, Movidesk, Zoho, Bitrix, RD Station e muitos outros. As integrações cobrem desde CRMs de provedor de internet até sistemas de cobrança, saúde, automotivo e gestão de tickets.",
  },
  {
    question: "A integração do ERA CX com meu CRM tem custo?",
    answer:
      "As integrações disponíveis no Marketplace podem ser ativadas diretamente no onboarding, sem custo adicional de desenvolvimento. Para integrações marcadas como 'Sob consulta', pode haver custo de implementação. Entre em contato com nosso time comercial para detalhes.",
  },
  {
    question: "O ERA CX integra com IXC, MK Solutions e Hubspot?",
    answer:
      "Sim! O IXC e o MK Solutions possuem integração completa com consulta de cadastro, lista e envio de boletos, e desbloqueio de confiança, disponíveis no Marketplace Omnichannel. O Hubspot oferece consulta de CPF e gestão de leads. Todas essas integrações estão prontas para uso.",
  },
  {
    question: "Como funciona a integração do ERA CX com meu sistema?",
    answer:
      "O ERA CX utiliza diferentes métodos de integração dependendo do sistema: APIs via IVR para integrações mais completas (como IXC e Salesforce), cc_event.lua para integrações via eventos de chamada (como PipeDrive e Cobmais), e APIs diretas para plataformas como Zendesk e Gerenet. A ativação pode ser feita pelo Marketplace ou sob consulta com nosso time técnico.",
  },
  {
    question: "Posso solicitar uma integração customizada?",
    answer:
      "Sim! O ERA CX possui APIs abertas e nosso time de desenvolvimento pode criar integrações sob medida para qualquer CRM, ERP ou plataforma da sua operação. Basta entrar em contato conosco para avaliarmos o escopo e prazo de desenvolvimento.",
  },
]

export default function IntegrationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-6 border-t border-gray-200 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-orange-500" />
          <span className="text-sm text-gray-500">FAQ</span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-medium text-gray-900 mb-10"
          style={{ letterSpacing: "-0.0325em", fontVariationSettings: '"opsz" 28' }}
        >
          Perguntas frequentes
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200/50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-sm text-gray-900 hover:bg-gray-100/30 transition-colors"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
