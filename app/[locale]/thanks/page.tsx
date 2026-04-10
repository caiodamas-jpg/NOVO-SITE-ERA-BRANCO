import type { Metadata } from "next"
import ObrigadoClient from "@/components/obrigado/ObrigadoClient"

export const metadata: Metadata = {
  title: "Obrigado — ERA CX",
  description: "Obrigado pelo seu contato. Um especialista ERA entrara em contato em breve.",
  robots: "noindex, nofollow",
}

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}>
      <ObrigadoClient />
    </main>
  )
}
