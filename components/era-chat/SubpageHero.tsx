"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface SubpageHeroProps {
  h1: string
  subtitle: string
  breadcrumbLabel: string
  onRequestQuote: () => void
}

export default function SubpageHero({ h1, subtitle, breadcrumbLabel, onRequestQuote }: SubpageHeroProps) {
  return (
    <section className="pt-32 pb-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-gray-500">
            <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
            <li><ChevronRight className="w-3 h-3" /></li>
            <li><Link href="/era-chat" className="hover:text-gray-900 transition-colors">Chat</Link></li>
            <li><ChevronRight className="w-3 h-3" /></li>
            <li className="text-gray-600">{breadcrumbLabel}</li>
          </ol>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-3xl md:text-4xl lg:text-[48px] font-medium text-gray-900 mb-5"
            style={{ letterSpacing: "-0.0325em", lineHeight: 1.1, fontVariationSettings: '"opsz" 28' }}
          >
            {h1}
          </h1>
          <p className="text-gray-500 text-base max-w-2xl mb-8">{subtitle}</p>
          <div className="flex flex-wrap gap-3">
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
        </motion.div>
      </div>
    </section>
  )
}
