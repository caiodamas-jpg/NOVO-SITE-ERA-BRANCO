import type { Metadata } from "next"
import PabxNuvemClient from "@/components/pabx-nuvem/PabxNuvemClient"

export const metadata: Metadata = {
  title: "PABX em Nuvem — Migre sua telefonia sem hardware | ERA",
  description:
    "PABX virtual completo com ramais ilimitados, URA inteligente, call center, gravação e +50 integrações. Ativação em 24h. Solicite sua cotação.",
  openGraph: {
    title: "PABX em Nuvem — ERA",
    description:
      "PABX virtual completo com ramais ilimitados, URA, call center e +50 integrações. Ativação em 24h.",
    type: "website",
    url: "/era-chat/pabx-nuvem",
  },
}

function JsonLd() {
  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PABX em Nuvem — ERA",
    description:
      "PABX virtual na nuvem com ramais ilimitados, URA inteligente, call center, gravação de chamadas e +50 integrações com CRMs.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud",
    brand: { "@type": "Brand", name: "ERA" },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
  }

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O PABX em nuvem da ERA substitui meu PABX físico?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O PABX virtual da ERA substitui completamente seu PABX físico, com mais recursos, sem hardware, sem manutenção e com escalabilidade imediata.",
        },
      },
      {
        "@type": "Question",
        name: "Qual a diferença entre PABX em nuvem e PABX virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "São a mesma coisa. PABX em nuvem (ou PABX virtual) significa que toda a telefonia roda em servidores na nuvem, sem necessidade de equipamentos físicos na sua empresa.",
        },
      },
      {
        "@type": "Question",
        name: "Preciso de hardware para usar o PABX virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não. O PABX em nuvem funciona 100% via software. Seus colaboradores usam o ramal no computador (softphone) ou no celular via app.",
        },
      },
      {
        "@type": "Question",
        name: "Quantos ramais o PABX em nuvem suporta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ilimitados. De 5 a 500+ ramais, a plataforma escala conforme sua operação.",
        },
      },
    ],
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Chat", item: "/era-chat" },
      { "@type": "ListItem", position: 3, name: "PABX em Nuvem", item: "/era-chat/pabx-nuvem" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <JsonLd />
      <PabxNuvemClient />
    </main>
  )
}
