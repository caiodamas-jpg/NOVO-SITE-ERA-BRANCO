import type { Metadata } from "next"
import PersonalizeClient from "@/components/personalize/PersonalizeClient"

export const metadata: Metadata = {
  title: "Recomendação Personalizada — ERA CX",
  description: "Sua recomendação personalizada de plano ERA CX.",
  robots: "noindex, nofollow",
}

export default function PersonalizePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}>
      <PersonalizeClient />
    </main>
  )
}
