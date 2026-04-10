import type { Metadata } from "next"
import PlataformaPageClient from "@/components/plataforma/PlataformaPageClient"

export const metadata: Metadata = {
  title: "Flows — Automação Visual | ERA",
  description: "Crie automações poderosas com editor visual drag-and-drop. Mais de 70 tipos de nós para conectar canais, APIs e ações em fluxos intuitivos.",
  openGraph: {
    title: "Flows — Automação Visual | ERA",
    description: "Crie automações poderosas com editor visual drag-and-drop. Mais de 70 tipos de nós para conectar canais, APIs e ações em fluxos intuitivos.",
    type: "website",
    url: "/plataforma/flows",
  },
  alternates: { canonical: "/plataforma/flows" },
}

export default function Page() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}>
      <PlataformaPageClient slug="flows" />
    </main>
  )
}
