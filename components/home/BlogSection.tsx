"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Play } from "lucide-react"
import type { BlogPost } from "@/lib/blog-api"

const BLOG_URL = process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.eracx.com.br"

const productColors: Record<string, string> = {
  "era-chat": "#22c55e",
  "era-voz": "#3b82f6",
  "era-omni": "#f59e0b",
  geral: "#71717a",
}

const productNames: Record<string, string> = {
  "era-chat": "Chat",
  "era-voz": "Voz",
  "era-omni": "Mensageria",
  geral: "Geral",
}

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${BLOG_URL}/api/posts?limit=6&featured=true`)
        if (!res.ok) return
        const data = await res.json()
        setPosts(data.posts || [])
      } catch {
        // Blog offline — section won't render
      }
    }
    load()
  }, [])

  if (posts.length === 0) return null

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog ERA",
    description: "Artigos sobre atendimento ao cliente, WhatsApp Business, IA e omnichannel",
    url: "https://blog.eracx.com.br",
    publisher: {
      "@type": "Organization",
      name: "ERA",
      url: "https://eracx.com.br",
    },
    hasPart: posts.map((post) => ({
      "@type": "Article",
      headline: post.title,
      url: post.url,
      datePublished: post.date,
      description: post.excerpt,
    })),
  }

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#edf0f3" }} aria-label="Blog ERA">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#2b363d" }} />
            <span className="text-sm text-gray-500">Blog</span>
          </div>
          <h2
            className="text-2xl md:text-3xl font-medium text-gray-900 mb-3"
            style={{ letterSpacing: "-0.0325em" }}
          >
            Blog ERA — Conteúdo sobre Atendimento e Tecnologia
          </h2>
          <p className="text-gray-500 text-sm">Artigos sobre atendimento ao cliente, WhatsApp Business, IA generativa e gestão omnichannel.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {posts.slice(0, 6).map((post, i) => {
            const color = productColors[post.categoryProduct] || "#71717a"
            const name = productNames[post.categoryProduct] || "Geral"
            return (
              <motion.article
                key={post.slug}
                itemScope
                itemType="https://schema.org/Article"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="rounded-xl border border-gray-200/50 bg-white overflow-hidden hover:border-gray-300 transition-colors group"
              >
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="aspect-video bg-gray-100 relative">
                    {post.coverImage && (
                      <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                    )}
                    {post.coverImage?.includes("youtube.com") || post.coverImage?.includes("ytimg.com") ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-9 h-9 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg">
                          <Play className="w-4 h-4 text-gray-900 ml-0.5" fill="white" />
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-md text-[9px] font-medium" style={{ backgroundColor: color + "20", color }}>
                        {name}
                      </span>
                      <span className="text-[9px] text-gray-500">
                        {post.readingTime} min de leitura
                      </span>
                    </div>
                    <h3 itemProp="headline" className="text-gray-900 font-medium text-xs mb-1 group-hover:text-[#2b363d] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p itemProp="description" className="text-gray-500 text-[10px] line-clamp-2">{post.excerpt}</p>
                    <meta itemProp="datePublished" content={post.date} />
                    <meta itemProp="url" content={post.url} />
                  </div>
                </a>
              </motion.article>
            )
          })}
        </div>

        <div className="flex justify-center">
          <a
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-full text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors text-xs font-medium"
          >
            Ver todos os artigos no Blog ERA
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  )
}
