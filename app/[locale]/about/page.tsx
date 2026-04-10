import type { Metadata } from "next"
import AboutPageClient from "@/components/about/AboutPageClient"

export const metadata: Metadata = {
  title: "Quem somos — ERA | Pioneiros em gestão de comunicação",
  description: "Desde 2013 no mercado de PABX e Call Center. Mais de 10 mil empresas em 6+ países confiam na ERA para transformar sua comunicação.",
  openGraph: {
    title: "Quem somos — ERA",
    description: "Mais de 10 anos transformando a comunicação de empresas em todo o mundo.",
    type: "website",
    url: "/about",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
