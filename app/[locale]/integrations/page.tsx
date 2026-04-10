import type { Metadata } from "next"
import IntegracoesPageClient from "@/components/integracoes/IntegracoesPageClient"
import { integrations } from "@/data/integrations"

export const metadata: Metadata = {
  title: "Integrações ERA CX — ERA | +50 CRMs e ERPs integrados",
  description:
    "Conecte seu CRM ou ERP ao ERA CX. Integrações nativas com IXC, MK Solutions, Salesforce, Zendesk, Hubspot, PipeDrive, Totvs e mais de 50 plataformas. Omnichannel e PABX.",
  openGraph: {
    title: "Integrações ERA CX — +50 CRMs e ERPs integrados",
    description:
      "Conecte seu CRM ou ERP ao ERA CX. Integrações nativas com IXC, MK Solutions, Salesforce, Zendesk, Hubspot, PipeDrive, Totvs e mais de 50 plataformas.",
    type: "website",
    url: "/integrations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrações ERA CX — +50 CRMs e ERPs integrados",
    description:
      "Conecte seu CRM ou ERP ao ERA CX. Integrações nativas com mais de 50 plataformas.",
  },
}

function JsonLd() {
  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ERA CX",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Plataforma omnichannel e PABX com mais de 50 integrações nativas com CRMs, ERPs e plataformas do mercado brasileiro.",
    offers: {
      "@type": "Offer",
      category: "Integrações",
    },
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quais CRMs se integram com o ERA CX?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O ERA CX se integra com mais de 50 CRMs, ERPs e plataformas, incluindo IXC, MK Solutions, Salesforce, Zendesk, Hubspot, PipeDrive, Totvs, Microsoft Teams, Movidesk, Zoho, Bitrix, RD Station e muitos outros.",
        },
      },
      {
        "@type": "Question",
        name: "A integração do ERA CX com meu CRM tem custo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As integrações disponíveis no Marketplace podem ser ativadas diretamente no onboarding, sem custo adicional de desenvolvimento. Para integrações 'Sob consulta', entre em contato com nosso time comercial.",
        },
      },
      {
        "@type": "Question",
        name: "O ERA CX integra com IXC e MK Solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! O IXC e o MK Solutions possuem integração completa com consulta de cadastro, lista e envio de boletos, e desbloqueio de confiança, disponíveis no Marketplace Omnichannel.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona a integração do ERA CX com meu sistema?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O ERA CX utiliza diferentes métodos de integração: APIs via IVR, cc_event.lua para eventos de chamada, e APIs diretas. A ativação pode ser feita pelo Marketplace ou sob consulta.",
        },
      },
    ],
  }

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Integrações ERA CX",
    numberOfItems: integrations.length,
    itemListElement: integrations.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: `Integração ${item.category} — ${item.features.slice(0, 3).join(", ")}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
    </>
  )
}

export default function IntegracoesPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}>
      <JsonLd />
      <IntegracoesPageClient />
    </main>
  )
}
