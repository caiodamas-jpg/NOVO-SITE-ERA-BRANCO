import type { Metadata } from "next"
import PlataformaPageClient from "@/components/plataforma/PlataformaPageClient"

export const metadata: Metadata = {
  title: "Analytics & BI | ERA",
  description: "Dashboards interativos, análise de sentimento, scoring de agentes e previsão de demanda para sua operação.",
  openGraph: {
    title: "Analytics & BI | ERA",
    description: "Dashboards interativos, análise de sentimento, scoring de agentes e previsão de demanda para sua operação.",
    type: "website",
    url: "/plataforma/analytics",
  },
  alternates: { canonical: "/plataforma/analytics" },
}

export default function Page() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}>
      <PlataformaPageClient slug="analytics" />
    </main>
  )
}
