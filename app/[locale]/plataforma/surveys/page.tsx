import type { Metadata } from "next"
import PlataformaPageClient from "@/components/plataforma/PlataformaPageClient"

export const metadata: Metadata = {
  title: "Pesquisas CSAT/NPS | ERA",
  description: "Envie pesquisas CSAT e NPS automaticamente após atendimentos. Colete feedback em qualquer canal e acompanhe tendências.",
  openGraph: {
    title: "Pesquisas CSAT/NPS | ERA",
    description: "Envie pesquisas CSAT e NPS automaticamente após atendimentos. Colete feedback em qualquer canal e acompanhe tendências.",
    type: "website",
    url: "/plataforma/surveys",
  },
  alternates: { canonical: "/plataforma/surveys" },
}

export default function Page() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}>
      <PlataformaPageClient slug="surveys" />
    </main>
  )
}
