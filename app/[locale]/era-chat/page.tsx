import type { Metadata } from "next"
import EraChatHubClient from "@/components/era-chat/EraChatHubClient"
import { eraChatPages } from "@/data/era-chat-pages"

export const metadata: Metadata = {
  title: "Chat — Atendimento por WhatsApp, Redes Sociais, Chatbot e IA | ERA",
  description: "Plataforma completa de atendimento por chat: WhatsApp Business API, Instagram, Messenger, Telegram, LiveChat, chatbot com IA generativa, Kanban e relatórios.",
  openGraph: {
    title: "Chat — Atendimento inteligente por mensagens",
    description: "WhatsApp, Instagram, Messenger, Telegram, LiveChat, chatbot e IA generativa em uma única plataforma.",
    type: "website",
    url: "/era-chat",
  },
}

function JsonLd() {
  const app = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Chat",
    applicationCategory: "BusinessApplication",
    description: "Plataforma de atendimento por chat com WhatsApp, redes sociais, chatbot e IA generativa.",
    brand: { "@type": "Brand", name: "ERA" },
  }

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "O que é o Chat?", acceptedAnswer: { "@type": "Answer", text: "O Chat é a plataforma de atendimento por mensagens da ERA CX. Integra WhatsApp, Instagram, Messenger, Telegram, LiveChat, e-mail e marketplaces em um único painel com chatbot, IA generativa e distribuição inteligente." } },
      { "@type": "Question", name: "Quais canais o Chat suporta?", acceptedAnswer: { "@type": "Answer", text: "WhatsApp Business API, Instagram Direct, Facebook Messenger, Telegram, Google Chat, E-mail, LiveChat, Reclame Aqui, Mercado Livre e WebMotors." } },
      { "@type": "Question", name: "O Chat tem IA?", acceptedAnswer: { "@type": "Answer", text: "Sim, o Chat possui IA Generativa para assistentes virtuais 24/7 e chatbot com árvore de decisões para automação de atendimento." } },
    ],
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Chat", item: "/era-chat" },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  )
}

export default function EraChatPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}>
      <JsonLd />
      <EraChatHubClient />
    </main>
  )
}
