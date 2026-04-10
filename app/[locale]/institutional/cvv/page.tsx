import type { Metadata } from "next"
import CVVPageClient from "@/components/institucional/CVVPageClient"

export const metadata: Metadata = {
  title: "ERA + CVV — Tecnologia a serviço da vida | ERA",
  description: "Há mais de 4 anos a ERA doa infraestrutura e software para o CVV (Centro de Valorização da Vida), apoiando 3 milhões de atendimentos anuais.",
  openGraph: {
    title: "ERA + CVV — Tecnologia a serviço da vida",
    description: "Há mais de 4 anos a ERA doa infraestrutura e software para o CVV, apoiando 3 milhões de atendimentos anuais.",
    type: "website",
    url: "/institutional/cvv",
  },
}

function JsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ERA",
    description: "Plataforma de comunicação omnichannel",
    url: "https://eracx.com.br",
    sponsor: {
      "@type": "NGO",
      name: "CVV - Centro de Valorização da Vida",
      url: "https://cvv.org.br",
      description: "Apoio emocional e prevenção do suicídio desde 1962",
      telephone: "188",
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
    />
  )
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd />
      <CVVPageClient />
    </main>
  )
}
