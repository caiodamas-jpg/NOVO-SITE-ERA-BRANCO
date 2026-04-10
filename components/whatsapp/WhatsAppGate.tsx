"use client"

import { useState, createContext, useContext, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Loader2, Check } from "lucide-react"
import { applyPhoneMask, sanitizePhone, hasRepeatedChars, hasRepeatedLetters } from "@/lib/masks"
import { getStoredUTMData, mapSourceId } from "@/lib/utm"
import { useRouter } from "next/navigation"

const WHATSAPP_NUMBER = "551151920035"

interface WhatsAppGateContextType {
  openWhatsAppGate: (customMessage?: string) => void
}

const WhatsAppGateContext = createContext<WhatsAppGateContextType>({ openWhatsAppGate: () => {} })

export function useWhatsAppGate() {
  return useContext(WhatsAppGateContext)
}

export function WhatsAppGateProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [gateStep, setGateStep] = useState<"gate" | "form">("gate")
  const [customMsg, setCustomMsg] = useState("")
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [empresa, setEmpresa] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const openWhatsAppGate = useCallback((msg?: string) => {
    const wppSent = typeof window !== "undefined" && localStorage.getItem("era_wpp_sent")
    if (wppSent) {
      const savedName = localStorage.getItem("era_wpp_name") || ""
      const message = encodeURIComponent(msg || `Olá! Meu nome é ${savedName}, gostaria de saber mais sobre as soluções ERA CX.`)
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank")
      return
    }
    setCustomMsg(msg || "")
    const gatePassed = typeof window !== "undefined" && localStorage.getItem("era_gate_passed") === "true"
    setGateStep(gatePassed ? "form" : "gate")
    setIsOpen(true)
  }, [])

  const handleGateYes = () => {
    localStorage.setItem("era_gate_passed", "true")
    setGateStep("form")
  }

  const handleGateNo = () => {
    setIsOpen(false)
    router.push("/obrigado-sem")
  }

  const validate = (): boolean => {
    const e: Record<string, string> = {}
    if (nome.trim().length < 3) e.nome = "Nome obrigatório"
    else if (hasRepeatedLetters(nome)) e.nome = "Nome inválido"
    const phoneDigits = telefone.replace(/\D/g, "")
    if (phoneDigits.length < 10) e.telefone = "Telefone inválido"
    else if (hasRepeatedChars(telefone)) e.telefone = "Números repetidos"
    if (empresa.trim().length < 2) e.empresa = "Nome da empresa obrigatório"
    else if (hasRepeatedLetters(empresa)) e.empresa = "Nome inválido"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (loading || !validate()) return

    setLoading(true)
    try {
      const utmData = getStoredUTMData()
      const payload = {
        TITLE: `Lead WhatsApp - ${nome.trim()}`,
        NAME: nome.trim(),
        PHONE: [{ VALUE: sanitizePhone(telefone) }],
        EMAIL: [],
        COMPANY_TITLE: empresa.trim(),
        UF_CRM_1770397017792: "",
        UF_CRM_1762258369972: utmData.gclid || "",
        UF_CRM_1743511264307: utmData.utm_campaign || "",
        SOURCE_ID: mapSourceId(utmData.utm_source),
        UF_CRM_1762349845998: utmData.landingPage,
        UF_CRM_1762865623361: "WhatsApp Link",
        ASSIGNED_BY_ID: "2828",
        OPENED: "Y",
      }

      const res = await fetch("/api/bitrix/create-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const result = await res.json()

      if (result.success) {
        localStorage.setItem("era_wpp_sent", "true")
        localStorage.setItem("era_wpp_name", nome.trim())
        if (result.leadId) localStorage.setItem("era_lead_id", String(result.leadId))
      }

      if (typeof window !== "undefined") {
        (window as any).dataLayer = (window as any).dataLayer || []
        ;(window as any).dataLayer.push({ event: "whatsapp_click", whatsapp_source: "link_site" })
      }

      const message = encodeURIComponent(customMsg || `Olá! Meu nome é ${nome.trim()}, gostaria de saber mais sobre as soluções ERA CX.`)
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank")
      setIsOpen(false)
    } catch {
      const message = encodeURIComponent(customMsg || `Olá! Meu nome é ${nome.trim()}, gostaria de saber mais sobre as soluções ERA CX.`)
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank")
      setIsOpen(false)
    } finally {
      setLoading(false)
    }
  }

  const inputClass = "w-full h-10 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 text-sm focus:outline-none focus:border-[#cfff00]/50 transition-colors"

  return (
    <WhatsAppGateContext.Provider value={{ openWhatsAppGate }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6" role="dialog" aria-modal="true">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-900 font-medium text-sm">Fale conosco pelo WhatsApp</p>
                <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors" aria-label="Fechar">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {gateStep === "gate" ? (
                <div>
                  <p className="text-gray-500 text-xs mb-4">Nossos serviços são exclusivos para empresas.</p>
                  <div className="rounded-lg border border-gray-300/50 bg-white p-4">
                    <p className="text-gray-900 text-sm font-medium mb-3">Você tem empresa ativa (CNPJ)?</p>
                    <div className="flex gap-2">
                      <button onClick={handleGateYes} className="flex-1 h-9 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 border border-gray-300 text-gray-600 hover:border-[#cfff00]/50 hover:text-gray-900 transition-colors">
                        <Check className="w-3.5 h-3.5" /> Sim
                      </button>
                      <button onClick={handleGateNo} className="flex-1 h-9 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 border border-gray-300 text-gray-600 hover:border-red-500/50 hover:text-red-400 transition-colors">
                        <X className="w-3.5 h-3.5" /> Não
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-gray-500 text-xs mb-4">Preencha seus dados para iniciar a conversa.</p>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <input type="text" placeholder="Seu nome" required value={nome} onChange={(e) => setNome(e.target.value)} className={inputClass} />
                      {errors.nome && <p className="text-red-400 text-[10px] mt-0.5">{errors.nome}</p>}
                    </div>
                    <div>
                      <input type="tel" placeholder="(11) 99999-9999" required value={telefone} onChange={(e) => setTelefone(applyPhoneMask(e.target.value))} className={inputClass} />
                      {errors.telefone && <p className="text-red-400 text-[10px] mt-0.5">{errors.telefone}</p>}
                    </div>
                    <div>
                      <input type="text" placeholder="Nome da empresa" required value={empresa} onChange={(e) => setEmpresa(e.target.value)} className={inputClass} />
                      {errors.empresa && <p className="text-red-400 text-[10px] mt-0.5">{errors.empresa}</p>}
                    </div>
                    <button type="submit" disabled={loading} className="w-full h-10 rounded-lg font-medium text-sm flex items-center justify-center gap-2 text-gray-900 hover:opacity-90 transition-opacity disabled:opacity-50" style={{ backgroundColor: "#25D366" }}>
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Iniciar conversa"}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </WhatsAppGateContext.Provider>
  )
}
