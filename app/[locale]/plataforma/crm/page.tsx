import type { Metadata } from "next"
import PlataformaPageClient from "@/components/plataforma/PlataformaPageClient"

export const metadata: Metadata = {
  title: "CRM Integrado | ERA",
  description: "Leads, contatos, pipeline e propostas em um só lugar. CRM integrado nativamente com todos os canais de comunicação da ERA.",
  openGraph: {
    title: "CRM Integrado | ERA",
    description: "Leads, contatos, pipeline e propostas em um só lugar. CRM integrado nativamente com todos os canais de comunicação da ERA.",
    type: "website",
    url: "/plataforma/crm",
  },
  alternates: { canonical: "/plataforma/crm" },
}

export default function Page() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}>
      <PlataformaPageClient slug="crm" />
    </main>
  )
}
