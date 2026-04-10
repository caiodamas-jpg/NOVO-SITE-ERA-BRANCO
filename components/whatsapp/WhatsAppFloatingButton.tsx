"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Loader2, MessageCircle, Check } from "lucide-react"
import { applyPhoneMask, sanitizePhone, hasRepeatedChars, hasRepeatedLetters } from "@/lib/masks"
import { getStoredUTMData, mapSourceId } from "@/lib/utm"
import { useRouter } from "next/navigation"

const WHATSAPP_NUMBER = "551151920035"

export function WhatsAppFloatingButton() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [gateStep, setGateStep] = useState<"gate" | "form">("gate")
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [empresa, setEmpresa] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const popoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) setIsOpen(false)
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEsc)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen])

  const openWhatsApp = (name: string) => {
    const message = encodeURIComponent(`Olá! Meu nome é ${name}, gostaria de tirar uma dúvida sobre as soluções ERA CX.`)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank")
  }

  const handleClick = () => {
    const wppSent = localStorage.getItem("era_wpp_sent")
    if (wppSent) {
      openWhatsApp(localStorage.getItem("era_wpp_name") || "")
      return
    }
    const gatePassed = localStorage.getItem("era_gate_passed") === "true"
    setGateStep(gatePassed ? "form" : "gate")
    setIsOpen(true)
  }

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
        UF_CRM_1762865623361: "Botão WPP",
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
        ;(window as any).dataLayer.push({ event: "whatsapp_click", whatsapp_source: "botao_flutuante" })
      }

      openWhatsApp(nome.trim())
      setIsOpen(false)
    } catch {
      openWhatsApp(nome.trim())
      setIsOpen(false)
    } finally {
      setLoading(false)
    }
  }

  const inputClass = "w-full h-10 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 text-sm focus:outline-none focus:border-[#cfff00]/50 transition-colors"

  return (
    <div className="fixed bottom-6 right-6 z-[90]" ref={popoverRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-16 right-0 w-80 rounded-xl border border-white/10 bg-[#2b363d] shadow-2xl shadow-black/40 p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white/10">
                  <MessageCircle className="w-3 h-3 text-white" />
                </div>
                <p className="text-white font-medium text-sm">Quero saber mais</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-6 h-6 rounded flex items-center justify-center text-white/50 hover:text-white" aria-label="Fechar">
                <X className="w-4 h-4" />
              </button>
            </div>

            {gateStep === "gate" ? (
              <div>
                <p className="text-white/50 text-xs mb-4">Nossos serviços são exclusivos para empresas.</p>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <p className="text-white text-sm font-medium mb-3">Você tem empresa ativa (CNPJ)?</p>
                  <div className="flex gap-2">
                    <button onClick={handleGateYes} className="flex-1 h-9 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 border border-white/20 text-white/70 hover:border-[#cfff00]/50 hover:text-white transition-colors">
                      <Check className="w-3.5 h-3.5" /> Sim
                    </button>
                    <button onClick={handleGateNo} className="flex-1 h-9 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 border border-white/20 text-white/70 hover:border-red-500/50 hover:text-red-400 transition-colors">
                      <X className="w-3.5 h-3.5" /> Não
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <p className="text-white/50 text-[10px] mb-4">Preencha seus dados e fale com um especialista pelo WhatsApp.</p>
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
                  <button type="submit" disabled={loading}
                    className="w-full h-10 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                    style={{ backgroundColor: "#2b363d", color: "#ffffff" }}>
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Iniciar conversa"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        className="flex items-center gap-2 px-5 py-3 rounded-full shadow-lg font-medium text-sm cursor-pointer"
        style={{ backgroundColor: "#2b363d", color: "#ffffff" }}
        aria-label="Quero saber mais"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 4 }}
        >
          <MessageCircle className="w-5 h-5" />
        </motion.div>
        Quero saber mais
      </motion.button>
    </div>
  )
}
