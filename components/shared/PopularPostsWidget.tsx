"use client"

import { useState, useEffect } from "react"
import type { BlogPost } from "@/lib/blog-api"

const BLOG_URL = process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.eracx.com.br"

const productColors: Record<string, string> = {
  "era-chat": "#22c55e",
  "era-voz": "#3b82f6",
  "era-omni": "#f59e0b",
  geral: "#71717a",
}

export default function PopularPostsWidget() {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${BLOG_URL}/api/posts/popular?limit=5`)
        if (!res.ok) return
        const data = await res.json()
        setPosts(data.posts || [])
      } catch {
        // Blog offline
      }
    }
    load()
  }, [])

  if (posts.length === 0) return null

  return (
    <div>
      <p className="text-gray-900 font-medium text-sm mb-3">Posts populares</p>
      <div className="space-y-2">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 border-b border-gray-200/30 hover:border-gray-300 transition-colors group"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: productColors[post.categoryProduct] || "#71717a" }} />
              <span className="text-[9px] text-gray-500">{new Date(post.date).toLocaleDateString("pt-BR")}</span>
            </div>
            <p className="text-xs text-gray-600 group-hover:text-[#2b363d] transition-colors line-clamp-2">{post.title}</p>
          </a>
        ))}
      </div>
      <a
        href={BLOG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-3 text-[10px] text-gray-500 hover:text-gray-900 transition-colors"
      >
        Ver mais no blog →
      </a>
    </div>
  )
}
