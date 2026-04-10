import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Serviço para empresas — ERA",
  robots: "noindex, nofollow",
}

export default function ObrigadoSemPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}>
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-lg mx-auto text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ backgroundColor: "#cfff00" + "15" }}
          >
            <svg className="w-8 h-8" style={{ color: "#cfff00" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
          </div>

          <h1
            className="text-3xl md:text-4xl font-medium text-white mb-4"
            style={{ letterSpacing: "-0.0325em", lineHeight: 1.1 }}
          >
            Nossos serviços são exclusivos para empresas
          </h1>

          <p className="text-zinc-400 text-base mb-6">
            A ERA CX é uma plataforma de atendimento ao cliente projetada para empresas com CNPJ ativo.
            Nossas soluções de PABX em nuvem, WhatsApp Business API e omnichannel atendem operações corporativas.
          </p>

          <p className="text-zinc-500 text-sm mb-10">
            Se você está em processo de abertura da sua empresa, volte quando estiver tudo certo — teremos o prazer de ajudar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#cfff00", color: "#1a1a1a" }}
            >
              Voltar para o site
            </Link>
            <a
              href="https://blog.eracx.com.br"
              className="px-5 py-2.5 border border-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors text-sm"
            >
              Conhecer o Blog ERA
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
