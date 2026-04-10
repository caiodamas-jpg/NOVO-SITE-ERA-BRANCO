"use client"

import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog-api"

const BLOG_URL = process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.eracx.com.br"

export default function DynamicBlogCTA({ categoryProduct }: { categoryProduct: string }) {
  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${BLOG_URL}/api/posts?categoryProduct=${categoryProduct}&featured=true&limit=1`)
        if (!res.ok) return
        const data = await res.json()
        setPost(data.posts?.[0] || null)
      } catch {
        // Blog offline
      }
    }
    load()
  }, [categoryProduct])

  if (!post) return null

  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col md:flex-row items-center gap-6 rounded-xl border border-gray-200/50 bg-gray-50 p-5 hover:border-gray-300 transition-colors group"
        >
          <div className="w-full md:w-48 h-28 rounded-lg bg-gray-100 shrink-0 overflow-hidden">
            {post.coverImage && <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />}
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[9px] uppercase tracking-wider font-semibold" style={{ color: "#2b363d" }}>Do nosso blog</span>
            <h3 className="text-gray-900 font-medium text-sm mt-1 mb-1 group-hover:text-[#2b363d] transition-colors">{post.title}</h3>
            <p className="text-gray-500 text-xs line-clamp-2">{post.excerpt}</p>
            <span className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
              Ler no blog <ChevronRight className="w-3 h-3" />
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}
