"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { ArrowRight, Loader2, Check, X } from "lucide-react"
import { applyPhoneMask, sanitizePhone, hasRepeatedChars, hasRepeatedLetters } from "@/lib/masks"
import { getStoredUTMData, mapSourceId } from "@/lib/utm"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

type Stage = "gate" | "step1" | "step2" | "done"

export default function PabxStepForm() {
  const router = useRouter()
  const [stage, setStage] = useState<Stage>("gate")
  const [checking, setChecking] = useState(true)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [leadId, setLeadId] = useState<string | null>(null)

  // step 1 fields
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")

  // step 2 fields
  const [email, setEmail] = useState("")
  const [empresa, setEmpresa] = useState("")

  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (typeof window !== "undefined") {
      const passed = localStorage.getItem("era_gate_passed") === "true"
      if (passed) setStage("step1")
    }
    setChecking(false)
  }, [])

  const handleGateYes = () => {
    localStorage.setItem("era_gate_passed", "true")
    setStage("step1")
  }

  const handleGateNo = () => {
    router.push("/obrigado-sem")
  }

  const validateStep1 = () => {
    const e: Record<string, string> = {}
    if (nome.trim().length < 3) e.nome = "Nome obrigatório"
    else if (hasRepeatedLetters(nome)) e.nome = "Nome inválido"
    const phoneDigits = telefone.replace(/\D/g, "")
    if (phoneDigits.length < 10) e.telefone = "Telefone inválido"
    else if (hasRepeatedChars(telefone)) e.telefone = "Números repetidos"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validateStep2 = () => {
    const e: Record<string, string> = {}
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "E-mail inválido"
    if (empresa.trim().length < 2) e.empresa = "Nome da empresa obrigatório"
    else if (hasRepeatedLetters(empresa)) e.empresa = "Nome inválido"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleStep1Submit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (loading || !validateStep1()) return

    setLoading(true)
    setServerError(null)

    try {
      const utmData = getStoredUTMData()
      const payload = {
        TITLE: `PABX Nuvem — ${nome.trim()}`,
        NAME: nome.trim(),
        PHONE: [{ VALUE: sanitizePhone(telefone) }],
        EMAIL: [],
        COMPANY_TITLE: "",
        UF_CRM_1770397017792: "",
        UF_CRM_1762258369972: utmData.gclid || "",
        UF_CRM_1743511264307: utmData.utm_campaign || "",
        SOURCE_ID: mapSourceId(utmData.utm_source),
        UF_CRM_1762349845998: utmData.landingPage,
        UF_CRM_1762865623361: "LP PABX em Nuvem",
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
        setLeadId(String(result.leadId))
        localStorage.setItem("era_lead_id", String(result.leadId))
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({ event: "lead_form_step1", form_source: "pabx-nuvem" })
        }
        setStage("step2")
      } else {
        setServerError("Ocorreu um erro. Tente novamente.")
      }
    } catch {
      setServerError("Ocorreu um erro. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  const handleStep2Submit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (loading || !validateStep2()) return

    setLoading(true)
    setServerError(null)

    try {
      await fetch("/api/bitrix/update-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId,
          EMAIL: [{ VALUE: email.trim() }],
          COMPANY_TITLE: empresa.trim(),
          COMMENTS: `LP PABX em Nuvem — passo 2 completo. Empresa: ${empresa.trim()}`,
        }),
      })

      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({ event: "lead_form_complete", form_source: "pabx-nuvem" })
      }

      setStage("done")
      setTimeout(() => router.push("/obrigado"), 400)
    } catch {
      setStage("done")
      setTimeout(() => router.push("/obrigado"), 400)
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    "w-full h-11 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#cfff00] focus:ring-1 focus:ring-[#cfff00]/30 transition-colors"

  if (checking) {
    return <div className="w-full rounded-xl bg-white p-6 shadow-xl border border-gray-200 min-h-[280px]" />
  }

  return (
    <div className="w-full rounded-xl bg-white p-6 shadow-xl border border-gray-200">
      {stage === "gate" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <p className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">Solicite uma cotação</p>
          <h3 className="text-gray-900 font-medium text-base mb-2">Antes de continuar</h3>
          <p className="text-gray-500 text-xs mb-5">Nossos serviços são exclusivos para empresas.</p>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-left">
            <p className="text-gray-900 text-sm font-medium mb-3 text-center">Você tem empresa ativa (CNPJ)?</p>
            <div className="flex gap-2">
              <button
                onClick={handleGateYes}
                className="flex-1 h-10 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 border border-gray-300 text-gray-700 hover:border-[#cfff00] hover:bg-[#cfff00]/10 transition-colors"
              >
                <Check className="w-3.5 h-3.5" /> Sim, tenho empresa
              </button>
              <button
                onClick={handleGateNo}
                className="flex-1 h-10 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 border border-gray-300 text-gray-700 hover:border-red-500/50 hover:text-red-500 transition-colors"
              >
                <X className="w-3.5 h-3.5" /> Não
              </button>
            </div>
          </div>

          <p className="text-gray-400 text-[10px] mt-4">
            Nossos serviços são destinados exclusivamente a empresas com CNPJ ativo.
          </p>
        </motion.div>
      )}

      {stage !== "gate" && (
        <>
          <div className="text-center mb-5">
            <p className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">Solicite uma cotação</p>
            <p className="text-xs text-gray-500">
              Etapa {stage === "step1" ? "1" : "2"} — {stage === "step1" ? "Seus dados" : "Dados da empresa"}
            </p>
            <div className="mt-3 flex items-center justify-center gap-1.5">
              <span className={`h-1 w-8 rounded-full ${stage === "step1" ? "bg-[#cfff00]" : "bg-gray-300"}`} />
              <span className={`h-1 w-8 rounded-full ${stage === "step2" || stage === "done" ? "bg-[#cfff00]" : "bg-gray-300"}`} />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {stage === "step1" && (
              <motion.form
                key="step1"
                onSubmit={handleStep1Submit}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className={inputClass}
                  />
                  {errors.nome && <p className="text-red-500 text-[10px] mt-1">{errors.nome}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(applyPhoneMask(e.target.value))}
                    className={inputClass}
                  />
                  {errors.telefone && <p className="text-red-500 text-[10px] mt-1">{errors.telefone}</p>}
                </div>
                {serverError && <p className="text-red-500 text-xs">{serverError}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-50 hover:brightness-110 transition-all cursor-pointer"
                  style={{ backgroundColor: "#cfff00", color: "#1a2429" }}
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Continuar <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            )}

            {stage === "step2" && (
              <motion.form
                key="step2"
                onSubmit={handleStep2Submit}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <div>
                  <input
                    type="email"
                    required
                    placeholder="E-mail corporativo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                  />
                  {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Nome da empresa"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    className={inputClass}
                  />
                  {errors.empresa && <p className="text-red-500 text-[10px] mt-1">{errors.empresa}</p>}
                </div>
                {serverError && <p className="text-red-500 text-xs">{serverError}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-50 hover:brightness-110 transition-all cursor-pointer"
                  style={{ backgroundColor: "#cfff00", color: "#1a2429" }}
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Solicitar cotação <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            )}

            {stage === "done" && (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-12 h-12 rounded-full bg-[#cfff00] mx-auto flex items-center justify-center mb-3">
                  <Check className="w-6 h-6 text-[#1a2429]" />
                </div>
                <p className="text-gray-900 font-medium text-sm">Recebemos sua cotação!</p>
                <p className="text-gray-500 text-xs mt-1">Redirecionando...</p>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-[10px] text-gray-400 text-center mt-4">
            Ao enviar, você concorda com a <a href="/politica-de-privacidade" className="underline hover:text-gray-600">Política de Privacidade</a>.
          </p>
        </>
      )}
    </div>
  )
}
