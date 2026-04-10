"use client"

import Link from "next/link"
import CompanySlideshow from "@/components/shared/CompanySlideshow"

interface SubpageCTAProps {
  onRequestQuote: () => void
}

export default function SubpageCTA({ onRequestQuote }: SubpageCTAProps) {
  return (
    <>
      <section className="py-20 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-medium text-gray-900 mb-4"
            style={{ letterSpacing: "-0.0325em" }}
          >
            Pronto para transformar seu atendimento?
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-lg mx-auto">
            Nosso time de especialistas pode ajudar a encontrar a solução ideal para sua operação.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onRequestQuote}
              className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg hover:opacity-90 transition-opacity text-xs md:text-sm font-medium"
              style={{ backgroundColor: "#f97316", color: "#ffffff" }}
            >
              Solicitar cotação
            </button>
            <Link
              href="/pricing#era-chat"
              className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg hover:opacity-90 transition-opacity text-xs md:text-sm font-medium"
              style={{ backgroundColor: "#f97316", color: "#ffffff" }}
            >
              Ver planos Chat
            </Link>
          </div>
        </div>
      </section>
      <CompanySlideshow />
    </>
  )
}
