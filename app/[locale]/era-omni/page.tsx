import type { Metadata } from "next"
import EraOmniHubClient from "@/components/era-omni/EraOmniHubClient"

export const metadata: Metadata = {
  title: "Mensageria — Plataforma Omnichannel Completa | Voz + Chat + IA Unificados | ERA",
  description: "Unifique telefonia, WhatsApp, Instagram, Telegram e mais 8 canais em uma plataforma com histórico único, transição entre canais, IA generativa, dashboard consolidado.",
  openGraph: { title: "Mensageria — Todos os canais. Uma plataforma.", description: "Voz + Chat + IA unificados em uma plataforma omnichannel.", type: "website", url: "/era-omni" },
}

function JsonLd() {
  const app = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Mensageria", description: "Plataforma omnichannel completa com voz, chat e IA unificados.", brand: { "@type": "Brand", name: "ERA" } }
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "/" }, { "@type": "ListItem", position: 2, name: "Mensageria", item: "/era-omni" }] }
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /></>)
}

export default function EraOmniPage() {
  return (<main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}><JsonLd /><EraOmniHubClient /></main>)
}
