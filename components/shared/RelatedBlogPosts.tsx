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

  const sectionTitle = title || `Artigos relacionados sobre ${categoryProduct === "era-chat" ? "Chat" : categoryProduct === "era-voz" ? "Voz" : categoryProduct === "era-omni" ? "Mensageria" : "este tema"}`

  return (
    <aside className="py-12 px-6 border-t border-gray-200 bg-white" aria-label="Artigos relacionados">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{sectionTitle}</h3>
        <p className="text-gray-500 text-xs mb-4">Leia mais no Blog ERA sobre este assunto.</p>
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
                className="flex items-start gap-3 p-3 rounded-lg border border-gray-200/40 bg-gray-50 hover:border-gray-300 transition-colors group"
              >
                <div className="w-16 h-12 rounded bg-gray-100 shrink-0 overflow-hidden">
                  {post.coverImage && <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />}
                </div>
                <div className="min-w-0">
                  <p itemProp="headline" className="text-xs text-gray-900 font-medium line-clamp-2 group-hover:text-[#2b363d] transition-colors">{post.title}</p>
                  <p className="text-[9px] text-gray-500 mt-1">{post.readingTime} min de leitura</p>
                  <meta itemProp="url" content={post.url} />
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </aside>
  )
}
