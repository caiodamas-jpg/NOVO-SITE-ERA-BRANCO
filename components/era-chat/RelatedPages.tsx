"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import type { EraChatPage } from "@/data/era-chat-pages"

interface RelatedPagesProps {
  pages: EraChatPage[]
}

export default function RelatedPages({ pages }: RelatedPagesProps) {
  return (
    <section className="py-16 px-6 border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-medium text-gray-900 mb-6" style={{ letterSpacing: "-0.0325em" }}>
          Conheca tambem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pages.map((page, i) => (
            <motion.div
              key={page.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
            >
              <Link
                href={`/era-chat/${page.slug}`}
                className="block p-5 rounded-xl border border-gray-200/50 bg-white hover:border-gray-300 transition-colors group"
              >
                <h3 className="text-gray-900 font-medium text-sm mb-1">{page.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{page.subtitle}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
                  Saiba mais <ChevronRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
