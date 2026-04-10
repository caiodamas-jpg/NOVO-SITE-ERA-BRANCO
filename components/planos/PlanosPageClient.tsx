"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import PlanosHero from "./PlanosHero"
import PlanosCTA from "./PlanosCTA"
import { LeadCaptureModal } from "@/components/lead-capture/LeadCaptureModal"

export default function PlanosPageClient() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Navbar />
      <PlanosHero onRequestQuote={() => setModalOpen(true)} />
      <PlanosCTA />
      <Footer />
      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} context="planos" />
    </>
  )
}
