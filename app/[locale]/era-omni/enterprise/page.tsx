import type { Metadata } from "next"
import EnterprisePageClient from "@/components/era-omni/pages/EnterprisePageClient"
import { getOmniPageBySlug } from "@/data/era-omni-pages"

const page = getOmniPageBySlug("enterprise")!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  openGraph: { title: page.metaTitle, description: page.metaDescription, type: "website", url: "/era-omni/enterprise" },
}

function JsonLd() {
  const app = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: `Omni - ${page.title}`, description: page.metaDescription, brand: { "@type": "Brand", name: "ERA" } }
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "/" }, { "@type": "ListItem", position: 2, name: "Mensageria", item: "/era-omni" }, { "@type": "ListItem", position: 3, name: page.title, item: "/era-omni/enterprise" }] }
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /></>)
}

export default function Page() {
  return (<main className="min-h-screen" style={{ backgroundColor: "#2b363d" }}><JsonLd /><EnterprisePageClient /></main>)
}
