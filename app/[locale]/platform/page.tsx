import type { Metadata } from "next"
import { PlatformClient } from "@/components/platform/PlatformClient"

export const metadata: Metadata = {
  title: "Plataforma ERA CX | Comunicação, IA e Dados em um só lugar",
  description:
    "Conheça todos os produtos da ERA: Chat, Voz, Omnichannel, WhatsApp API, IA Generativa, CoreMetrics, Studio Pro e mais. A plataforma completa de customer engagement.",
  openGraph: {
    title: "Plataforma ERA CX | Customer Engagement Platform",
    description:
      "Conecte cada canal, automatize com IA e transforme dados em resultados. Conheça a plataforma completa da ERA.",
    type: "website",
  },
}

export default function PlatformPage() {
  return <PlatformClient />
}
