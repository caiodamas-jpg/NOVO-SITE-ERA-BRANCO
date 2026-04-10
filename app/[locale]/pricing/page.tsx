import type { Metadata } from "next"
import PlanosPageClient from "@/components/planos/PlanosPageClient"
import { products } from "@/data/plans"

export const metadata: Metadata = {
  title: "Planos ERA CX — Chat, Voz e Omnichannel | ERA",
  description:
    "Conheça os planos ERA Chat, ERA Voz e Omni. Atendimento por WhatsApp, PABX virtual, call center com IA, discador preditivo e omnichannel. Solicite uma cotação.",
  openGraph: {
    title: "Planos ERA CX — Chat, Voz e Omnichannel",
    description:
      "Conheça os planos ERA Chat, ERA Voz e Omni. Atendimento por WhatsApp, PABX virtual, call center com IA e omnichannel.",
    type: "website",
    url: "/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planos ERA CX — Chat, Voz e Omnichannel",
    description:
      "Atendimento por WhatsApp, PABX virtual, call center com IA e omnichannel. Solicite uma cotação.",
  },
}

function JsonLd() {
  const productSchemas = products.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: "ERA" },
    category: "Software de Comunicação Empresarial",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      offerCount: product.tiers.length,
    },
  }))

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quais são os planos da ERA CX?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A ERA CX oferece três soluções: ERA Chat, ERA Voz e Omni. Cada uma possui três tiers: Básico, Padrão e Profissional.",
        },
      },
      {
        "@type": "Question",
        name: "A ERA tem solução de PABX virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! O ERA Voz oferece PABX virtual completo com URA inteligente multinível, gravação de chamadas, chamadas ilimitadas para todo Brasil, call center com filas inteligentes e discador preditivo.",
        },
      },
      {
        "@type": "Question",
        name: "A ERA tem atendimento por WhatsApp com IA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! O ERA Chat oferece WhatsApp Business API com chatbots, IA generativa 24/7, distribuição inteligente de conversas e relatórios avançados.",
        },
      },
      {
        "@type": "Question",
        name: "O que é o Omni?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O Omni unifica voz e chat em uma única plataforma com histórico unificado, transição entre canais, dashboard integrado e IA generativa.",
        },
      },
      {
        "@type": "Question",
        name: "A ERA tem discador preditivo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! O Discador Preditivo está disponível como addon no plano Voz Profissional e no Omni Profissional.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona a URA da ERA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A ERA oferece URA de 1 nível no plano Básico e URA multinível nos planos Padrão e Profissional. A URA integra com CRMs via API.",
        },
      },
    ],
  }

  return (
    <>
      {productSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  )
}

export default function PlanosPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}>
      <JsonLd />
      <PlanosPageClient />
    </main>
  )
}
