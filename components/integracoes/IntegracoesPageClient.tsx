"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import IntegrationPageClient from "./IntegrationPageClient"
import RelatedBlogPosts from "@/components/shared/RelatedBlogPosts"
import { LeadCaptureModal } from "@/components/lead-capture/LeadCaptureModal"

export default function IntegracoesPageClient() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Navbar />
      <IntegrationPageClient />
      <RelatedBlogPosts
        tags={["integracao", "api", "crm", "erp"]}
        categoryProduct="geral"
        title="Artigos sobre integrações e APIs"
      />
      <Footer />
      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} context="integracoes" />
    </>
  )
}
