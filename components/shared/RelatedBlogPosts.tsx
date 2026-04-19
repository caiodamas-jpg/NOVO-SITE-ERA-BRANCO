"use client"

import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog-api"

const BLOG_URL = process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.eracx.com.br"

interface RelatedBlogPostsProps {
  tags: string[]
  categoryProduct: string
  title?: string
  limit?: number
}

const productNames: Record<string, string> = {
  "era-chat": "Chat",
  "era-voz": "Voz",
  "era-omni": "Omnichannel",
  geral: "Geral",
}

export default function RelatedBlogPosts({ tags, categoryProduct, title, limit = 3 }: RelatedBlogPostsProps) {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    async function load() {
      try {
        const params = new URLSearchParams({ tags: tags.join(","), categoryProduct, limit: String(limit) })
        const res = await fetch(`${BLOG_URL}/api/posts/related?${params}`)
        if (!res.ok) return
        const data = await res.json()
        setPosts(data.posts || [])
      } catch {
        // Blog offline
      }
    }
    load()
  }, [tags, categoryProduct, limit])

  if (posts.length === 0) return null

  const productLabel = productNames[categoryProduct] || "este tema"
  const sectionTitle = title || `Artigos sobre ${productLabel}`

  return (
    <aside className="py-10 px-6" style={{ backgroundColor: "#f4f5f7" }} aria-label="Artigos relacionados">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#2b363d" }} />
              <span className="text-[11px] text-gray-500 uppercase tracking-wide">Blog ERA</span>
            </div>
            <h3 className="text-base md:text-lg font-medium text-gray-900" style={{ letterSpacing: "-0.02em" }}>
              {sectionTitle}
            </h3>
          </div>
          <a
            href={`${BLOG_URL}/categoria/${categoryProduct}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 text-[11px] font-medium text-gray-600 hover:text-[#2b363d] transition-colors whitespace-nowrap"
          >
            Ver todos no Blog ERA
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              itemScope
              itemType="https://schema.org/Article"
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-2.5 rounded-lg border border-gray-200/60 bg-white hover:border-[#2b363d]/30 transition-colors group h-full"
              >
                <div className="w-16 h-16 rounded bg-gray-100 shrink-0 overflow-hidden">
                  {post.coverImage && <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" loading="lazy" />}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="inline-block text-[8px] font-semibold uppercase tracking-wider text-gray-500 mb-1">
                    {productLabel}
                  </span>
                  <p itemProp="headline" className="text-xs text-gray-900 font-medium line-clamp-2 group-hover:text-[#2b363d] transition-colors">
                    {post.title}
                  </p>
                  <p className="text-[9px] text-gray-500 mt-1">{post.readingTime} min de leitura</p>
                  <meta itemProp="url" content={post.url} />
                  <meta itemProp="datePublished" content={post.date} />
                </div>
              </a>
            </article>
          ))}
        </div>
        <div className="md:hidden flex justify-center mt-4">
          <a
            href={`${BLOG_URL}/categoria/${categoryProduct}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-600 hover:text-[#2b363d] transition-colors"
          >
            Ver todos no Blog ERA
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </aside>
  )
}
