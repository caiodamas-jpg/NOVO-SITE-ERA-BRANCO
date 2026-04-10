"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Check, ChevronRight, ExternalLink, Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import StepTwo from "@/components/lead-capture/StepTwo"
import { products, homeHighlights } from "@/data/plans"
import { calculateICPScore } from "@/lib/icp-score"
import { getRecommendation } from "@/lib/recommendation"
import { getStoredUTMData } from "@/lib/utm"
import type { StepTwoData } from "@/hooks/useLeadForm"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/era.com.br/", color: "#E1306C", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { name: "YouTube", href: "https://www.youtube.com/@minhaeravideos", color: "#FF0000", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/14838972", color: "#0A66C2", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { name: "Podcast", href: "https://www.youtube.com/@eraumavezpodcast", color: "#2b363d", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" },
]

export default function ObrigadoClient() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const leadId = typeof window !== "undefined" ? localStorage.getItem("era_lead_id") : null

  useEffect(() => {
    // No extra events here — lead_form_step1 is fired before redirect
  }, [])

  const handleStepTwo = useCallback(async (data: StepTwoData) => {
    setLoading(true)
    try {
      const score = calculateICPScore(data)
      const rec = getRecommendation(data)
      const utmData = getStoredUTMData()

      const payload = {
        leadId,
        UF_CRM_1762352042875: data.faturamento,
        UF_CRM_1762352553637: data.segmento,
        SOURCE_DESCRIPTION: data.atendentes,
        UF_CRM_1768125539928: score,
        UF_CRM_1768126301805: data.media_atendimento,
        COMMENTS: `Faturamento=${data.faturamento}, Segmento=${data.segmento}, Atendentes=${data.atendentes}, Media=${data.media_atendimento} | Interesses: ${data.interesses.join(", ")} | Plano: ${rec.productName} ${rec.tierName} | Score: ${score} | UTMs: ${utmData.utm_source || "N/A"}/${utmData.utm_medium || "N/A"}/${utmData.utm_campaign || "N/A"}`,
      }

      await fetch("/api/bitrix/update-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const userEmail = localStorage.getItem("era_lead_email") || ""
      const userPhone = localStorage.getItem("era_lead_phone") || ""
      const formattedPhone = userPhone ? `+${userPhone.replace(/^55/, "55")}` : ""

      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "lead_form_step2_complete",
        enhanced_conversion_data: {
          email: userEmail,
          phone_number: formattedPhone,
        },
        user_email: userEmail,
        user_phone: formattedPhone,
      })

      router.push("/personalize")
    } catch {
      router.push("/personalize")
    } finally {
      setLoading(false)
    }
  }, [leadId, router])

  const handleSkip = () => {
    router.push("/")
  }

  return (
    <>
      <Navbar />

      {/* Hero agradecimento */}
      <section className="pt-32 pb-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6" style={{ backgroundColor: "#2b363d" }}>
              <Check className="w-8 h-8 text-[#1a1a1a]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4" style={{ letterSpacing: "-0.0325em", lineHeight: 1.1 }}>
              Obrigado pelo seu contato!
            </h1>
            <p className="text-gray-500 text-base max-w-lg mx-auto mb-2">
              Recebemos seus dados com sucesso. Um especialista ERA entrará em contato em breve.
            </p>
            <p className="text-gray-500 text-sm">Atendimento de segunda a sexta, das 9h às 17h.</p>
          </motion.div>
        </div>
      </section>

      {/* Step 2 — personalização opcional */}
      <section className="py-12 px-6 border-t border-gray-200" style={{ backgroundColor: "#f9fafb" }}>
        <div className="max-w-lg mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="rounded-xl border border-[#cfff00]/20 bg-white p-6">
              <div className="text-center mb-6">
                <h2 className="text-lg font-medium text-gray-900 mb-2">Quer um contato mais personalizado?</h2>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Preencha as informações abaixo e nossa equipe vai preparar uma proposta sob medida para a sua operação. É rápido — menos de 1 minuto.
                </p>
              </div>
              <StepTwo onSubmit={handleStepTwo} onSkip={handleSkip} loading={loading} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-medium text-gray-900 text-center mb-10" style={{ letterSpacing: "-0.0325em" }}>
            Enquanto isso, conheça nossas soluções
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product, i) => {
              const highlights = homeHighlights[product.id] || []
              return (
                <motion.div key={product.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}>
                  <div className="h-full p-6 rounded-xl border border-gray-200/50 bg-white flex flex-col">
                    <h3 className="text-gray-900 font-semibold text-lg mb-1">{product.name}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-5">{product.tagline}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#2b363d" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/planos#${product.id}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                      Ver planos <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden border border-gray-300/50">
            <iframe src="https://www.youtube.com/embed/CTYAxDjPU-4" title="Era Uma Vez Podcast" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl font-medium text-gray-900 mb-3" style={{ letterSpacing: "-0.0325em" }}>Era Uma Vez Podcast</h2>
            <p className="text-gray-500 text-sm mb-6">Conversas com líderes sobre tecnologia, inovação e atendimento ao cliente.</p>
            <a href="https://www.youtube.com/@eraumavezpodcast" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors text-xs">
              Ver todos os episódios <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Redes sociais */}
      <section className="py-12 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-medium text-gray-900 mb-6">Siga a ERA nas redes sociais</h2>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors hover:opacity-80" style={{ backgroundColor: social.color + "20" }} title={social.name}>
                <svg className="w-6 h-6" fill={social.color} viewBox="0 0 24 24"><path d={social.icon} /></svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Link href="/pricing" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: "#2b363d", color: "#ffffff" }}>
            Ver todos os planos <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
