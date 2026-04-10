import type { Metadata } from "next"
import EraVozHubClient from "@/components/era-voz/EraVozHubClient"

export const metadata: Metadata = {
  title: "Voz — PABX em Nuvem | PABX Virtual, Call Center, URA e Telefonia | ERA",
  description: "PABX em nuvem completo para empresas: PABX virtual com ramais ilimitados, call center com filas inteligentes, URA multinível, discador preditivo, CTI, gravação e monitoramento. Substitua seu PABX físico.",
  openGraph: { title: "Voz — PABX em Nuvem e PABX Virtual para Empresas", description: "PABX em nuvem, PABX virtual, call center, URA, discador e monitoramento em uma plataforma.", type: "website", url: "/era-voz" },
}

function JsonLd() {
  const app = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Voz", description: "PABX em nuvem e PABX virtual completo com Call Center, URA inteligente e monitoramento.", brand: { "@type": "Brand", name: "ERA" }, applicationCategory: "BusinessApplication", operatingSystem: "Cloud" }
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "/" }, { "@type": "ListItem", position: 2, name: "Voz", item: "/era-voz" }] }
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /></>)
}

export default function EraVozPage() {
  return (<main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}><JsonLd /><EraVozHubClient /></main>)
}
