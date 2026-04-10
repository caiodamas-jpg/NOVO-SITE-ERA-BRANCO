import type { Metadata } from "next"
import { Hero3DStage } from "@/components/hero-3d-stage"

export const metadata: Metadata = {
  title: "ERA — Plataforma de Comunicação Omnichannel | Chat, Voz e IA",
  description: "Atenda mais e melhor por voz, mensagem e IA. WhatsApp Business API, PABX em nuvem, CRM, chatbot, call center e +50 integrações. Usada por Decathlon, Cobasi, Unimed e +335 empresas.",
  openGraph: {
    title: "ERA — Plataforma de Comunicação Omnichannel",
    description: "Chat, Voz e IA em uma plataforma. WhatsApp, PABX, CRM, chatbot e +50 integrações.",
    type: "website",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
}

function HomeJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ERA",
    url: "https://eracx.com.br",
    description: "Plataforma omnichannel completa para comunicação empresarial. Chat, Voz e IA integrados.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://eracx.com.br/pt/integrations?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function Home() {
  return (
    <main>
      <HomeJsonLd />
      <Hero3DStage />
    </main>
  )
}
