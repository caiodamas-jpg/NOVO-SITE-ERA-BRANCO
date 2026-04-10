const BLOG_URL = process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.eracx.com.br"

export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  coverImage: string
  date: string
  author: { name: string; avatar: string }
  categoryProduct: string
  categoryTheme: string
  tags: string[]
  readingTime: number
  url: string
}

interface BlogPostsResponse {
  posts: BlogPost[]
  total: number
  page: number
  totalPages: number
}

export async function fetchRecentPosts(limit = 4): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${BLOG_URL}/api/posts?limit=${limit}&featured=true`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    const data: BlogPostsResponse = await res.json()
    return data.posts
  } catch {
    return []
  }
}

export async function fetchPopularPosts(limit = 5): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${BLOG_URL}/api/posts/popular?limit=${limit}`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    const data: BlogPostsResponse = await res.json()
    return data.posts
  } catch {
    return []
  }
}

export async function fetchRelatedPosts(
  tags: string[],
  categoryProduct: string,
  exclude?: string,
  limit = 3
): Promise<BlogPost[]> {
  try {
    const params = new URLSearchParams({
      tags: tags.join(","),
      categoryProduct,
      limit: String(limit),
    })
    if (exclude) params.set("exclude", exclude)
    const res = await fetch(`${BLOG_URL}/api/posts/related?${params}`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    const data: BlogPostsResponse = await res.json()
    return data.posts
  } catch {
    return []
  }
}

export interface BlogEvent {
  id: string
  title: string
  description: string
  date: string
  location: string
  coverImage: string
  photos: string[]
  tags: string[]
}

interface BlogEventsResponse {
  events: BlogEvent[]
  total: number
}

export async function fetchEvents(limit = 3): Promise<BlogEvent[]> {
  try {
    const res = await fetch(`${BLOG_URL}/api/events?limit=${limit}`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    const data: BlogEventsResponse = await res.json()
    return data.events
  } catch {
    return []
  }
}

export async function fetchPostsByCategory(
  categoryProduct: string,
  limit = 3
): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      `${BLOG_URL}/api/posts?categoryProduct=${categoryProduct}&limit=${limit}`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    const data: BlogPostsResponse = await res.json()
    return data.posts
  } catch {
    return []
  }
}

export async function fetchDynamicCTA(categoryProduct: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(
      `${BLOG_URL}/api/posts?categoryProduct=${categoryProduct}&featured=true&limit=1`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return null
    const data: BlogPostsResponse = await res.json()
    return data.posts[0] || null
  } catch {
    return null
  }
}
