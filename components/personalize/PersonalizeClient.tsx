"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Check, ChevronRight, Loader2 } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { applyPhoneMask, applyCnpjMask, sanitizePhone, sanitizeCnpj, validateCnpj, hasRepeatedChars } from "@/lib/masks"
import { getStoredUTMData, mapSourceId } from "@/lib/utm"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export default function PersonalizeClient() {
  const [leadId, setLeadId] = useState<string | null>(null)
  const [needsFullForm, setNeedsFullForm] = useState(false)

  // Fallback form fields (when no leadId)
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [empresa, setEmpresa] = useState("")
  const [cnpj, setCnpj] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    const id = localStorage.getItem("era_lead_id")
    if (id) {
      setLeadId(id)
    } else {
      setNeedsFullForm(true)
    }
  }, [])

  // No extra events — lead_form_step2_complete is fired on /obrigado before redirect

  const validateFallback = (): boolean => {
    const e: Record<string, string> = {}
    if (nome.trim().length < 3) e.nome = "Nome obrigatório"
    const phoneDigits = telefone.replace(/\D/g, "")
    if (phoneDigits.length < 10) e.telefone = "Telefone inválido"
    else if (hasRepeatedChars(telefone)) e.telefone = "Números repetidos"
    if (empresa.trim().length < 2) e.empresa = "Empresa obrigatória"
    if (!validateCnpj(cnpj)) e.cnpj = "CNPJ inválido"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleFallbackSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (loading || !validateFallback()) return

    setLoading(true)
    try {
      const utmData = getStoredUTMData()
      const payload = {
        TITLE: `Lead Personalização - ${nome.trim()}`,
        NAME: nome.trim(),
        PHONE: [{ VALUE: sanitizePhone(telefone) }],
        EMAIL: [],
        COMPANY_TITLE: empresa.trim(),
        UF_CRM_1770397017792: sanitizeCnpj(cnpj),
        UF_CRM_1762258369972: utmData.gclid || "",
        UF_CRM_1743511264307: utmData.utm_campaign || "",
        SOURCE_ID: mapSourceId(utmData.utm_source),
        UF_CRM_1762349845998: utmData.landingPage,
        ASSIGNED_BY_ID: "2828",
        OPENED: "Y",
      }

      const res = await fetch("/api/bitrix/create-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const result = await res.json()

      if (result.success && result.leadId) {
        localStorage.setItem("era_lead_id", String(result.leadId))
      }

      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  const inputClass = "w-full h-10 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 text-sm focus:outline-none focus:border-[#cfff00]/50 focus:ring-1 focus:ring-[#2b363d]/30 transition-colors"

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            {/* Success state (leadId exists or fallback submitted) */}
            {(leadId && !needsFullForm) || submitted ? (
              <>
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6" style={{ backgroundColor: "#2b363d" }}>
                  <Check className="w-8 h-8 text-[#1a1a1a]" />
                </div>
                <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4" style={{ letterSpacing: "-0.0325em", lineHeight: 1.1 }}>
                  Sua personalização foi registrada!
                </h1>
                <p className="text-gray-500 text-base max-w-lg mx-auto mb-3">
                  Nosso time já está preparando uma proposta sob medida para a sua operação. Entraremos em contato em breve.
                </p>
                <p className="text-gray-500 text-sm mb-8">Atendimento de segunda a sexta, das 9h às 17h.</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link href="/pricing" className="px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: "#2b363d", color: "#ffffff" }}>
                    Ver todos os planos
                  </Link>
                  <Link href="/" className="px-5 py-2.5 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors text-sm">
                    Voltar para a home
                  </Link>
                </div>
              </>
            ) : needsFullForm ? (
              /* Fallback form — no leadId found */
              <>
                <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3" style={{ letterSpacing: "-0.0325em", lineHeight: 1.1 }}>
                  Para personalizar sua recomendação, precisamos dos seus dados
                </h1>
                <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">
                  Parece que você acessou esta página diretamente. Preencha abaixo para que possamos entrar em contato.
                </p>

                <div className="max-w-sm mx-auto">
                  <form onSubmit={handleFallbackSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="text-xs font-medium text-gray-500 mb-1 block">Nome completo *</label>
                      <input type="text" required placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} className={inputClass} />
                      {errors.nome && <p className="text-red-400 text-xs mt-1">{errors.nome}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-500 mb-1 block">Telefone *</label>
                      <input type="tel" required placeholder="(11) 99999-9999" value={telefone} onChange={(e) => setTelefone(applyPhoneMask(e.target.value))} className={inputClass} />
                      {errors.telefone && <p className="text-red-400 text-xs mt-1">{errors.telefone}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-500 mb-1 block">Empresa *</label>
                      <input type="text" required placeholder="Nome da empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} className={inputClass} />
                      {errors.empresa && <p className="text-red-400 text-xs mt-1">{errors.empresa}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-medium text-gray-500 mb-1 block">CNPJ *</label>
                      <input type="text" required placeholder="00.000.000/0000-00" value={cnpj} onChange={(e) => setCnpj(applyCnpjMask(e.target.value))} className={inputClass} />
                      {errors.cnpj && <p className="text-red-400 text-xs mt-1">{errors.cnpj}</p>}
                    </div>
                    <button type="submit" disabled={loading} className="w-full h-10 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50" style={{ backgroundColor: "#2b363d", color: "#ffffff" }}>
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Enviar e receber contato"}
                    </button>
                  </form>
                </div>
              </>
            ) : null}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
