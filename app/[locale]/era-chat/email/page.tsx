import type { Metadata } from "next"
import EraChatSubpageClient from "@/components/era-chat/EraChatSubpageClient"
import { getPageBySlug } from "@/data/era-chat-pages"

const page = getPageBySlug("email")!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  openGraph: { title: page.metaTitle, description: page.metaDescription, type: "website", url: `/era-chat/email` },
}

function JsonLd() {
  const app = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: `Chat - ${page.title}`, description: page.metaDescription, brand: { "@type": "Brand", name: "ERA" } }
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "/" }, { "@type": "ListItem", position: 2, name: "Chat", item: "/era-chat" }, { "@type": "ListItem", position: 3, name: page.title, item: `/era-chat/email` }] }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}>
      <JsonLd />
      <EraChatSubpageClient page={page} />
    </main>
  )
}
