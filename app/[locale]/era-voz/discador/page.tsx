import type { Metadata } from "next"
import DiscadorPageClient from "@/components/era-voz/pages/DiscadorPageClient"
import { getVozPageBySlug } from "@/data/era-voz-pages"

const page = getVozPageBySlug("discador")!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  openGraph: { title: page.metaTitle, description: page.metaDescription, type: "website", url: `/era-voz/discador` },
}

function JsonLd() {
  const app = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: `Voz - ${page.title}`, description: page.metaDescription, brand: { "@type": "Brand", name: "ERA" } }
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "/" }, { "@type": "ListItem", position: 2, name: "Voz", item: "/era-voz" }, { "@type": "ListItem", position: 3, name: page.title, item: `/era-voz/discador` }] }
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /></>)
}

export default function Page() {
  return (<main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}><JsonLd /><DiscadorPageClient /></main>)
}
