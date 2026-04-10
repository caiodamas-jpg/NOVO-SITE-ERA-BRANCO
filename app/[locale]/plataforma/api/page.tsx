import type { Metadata } from "next"
import PlataformaPageClient from "@/components/plataforma/PlataformaPageClient"

export const metadata: Metadata = {
  title: "Portal do Desenvolvedor | ERA",
  description: "APIs RESTful completas, webhooks em tempo real e documentação interativa para integrar a ERA com qualquer sistema.",
  openGraph: {
    title: "Portal do Desenvolvedor | ERA",
    description: "APIs RESTful completas, webhooks em tempo real e documentação interativa para integrar a ERA com qualquer sistema.",
    type: "website",
    url: "/plataforma/api",
  },
  alternates: { canonical: "/plataforma/api" },
}

export default function Page() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}>
      <PlataformaPageClient slug="api" />
    </main>
  )
}
