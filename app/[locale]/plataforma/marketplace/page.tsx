import type { Metadata } from "next"
import PlataformaPageClient from "@/components/plataforma/PlataformaPageClient"

export const metadata: Metadata = {
  title: "Marketplace | ERA",
  description: "Conectores prontos para n8n, Make, Zapier, HubSpot, Salesforce e mais. Amplie as capacidades da ERA sem código.",
  openGraph: {
    title: "Marketplace | ERA",
    description: "Conectores prontos para n8n, Make, Zapier, HubSpot, Salesforce e mais. Amplie as capacidades da ERA sem código.",
    type: "website",
    url: "/plataforma/marketplace",
  },
  alternates: { canonical: "/plataforma/marketplace" },
}

export default function Page() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}>
      <PlataformaPageClient slug="marketplace" />
    </main>
  )
}
