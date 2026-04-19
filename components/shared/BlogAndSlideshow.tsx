"use client"

import RelatedBlogPosts from "./RelatedBlogPosts"

interface BlogAndSlideshowProps {
  tags: string[]
  categoryProduct: "era-chat" | "era-voz" | "era-omni"
}

// Kept name for backwards-compat — SubpageCTA already renders CompanySlideshow,
// so this component is now just the blog teaser.
export default function BlogAndSlideshow({ tags, categoryProduct }: BlogAndSlideshowProps) {
  return <RelatedBlogPosts tags={tags} categoryProduct={categoryProduct} />
}
