import type { Metadata } from "next"
import PlataformaPageClient from "@/components/plataforma/PlataformaPageClient"

export const metadata: Metadata = {
  title: "Tickets & Helpdesk | ERA",
  description: "Sistema completo de tickets com SLA configurável, escalonamento inteligente e automação — integrado aos canais da ERA.",
  openGraph: {
    title: "Tickets & Helpdesk | ERA",
    description: "Sistema completo de tickets com SLA configurável, escalonamento inteligente e automação — integrado aos canais da ERA.",
    type: "website",
    url: "/plataforma/tickets",
  },
  alternates: { canonical: "/plataforma/tickets" },
}

export default function Page() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}>
      <PlataformaPageClient slug="tickets" />
    </main>
  )
}
