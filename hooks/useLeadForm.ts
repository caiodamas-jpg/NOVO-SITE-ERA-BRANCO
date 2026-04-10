"use client"

import { useState, useCallback } from "react"
import { sanitizePhone } from "@/lib/masks"
import { getStoredUTMData, mapSourceId } from "@/lib/utm"
import { calculateICPScore } from "@/lib/icp-score"
import { getRecommendation, type Recommendation } from "@/lib/recommendation"

export interface StepOneData {
  nome: string
  email: string
  telefone: string
  empresa: string
  cnpj: string
}

export interface StepTwoData {
  faturamento: string
  media_atendimento: string
  atendentes: string
  segmento: string
  interesses: string[]
}

type FormStep = "step1" | "step2" | "result" | "success-generic"

export function useLeadForm() {
  const [step, setStep] = useState<FormStep>("step1")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [leadId, setLeadId] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("era_lead_id")
    }
    return null
  })
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null)
  const [stepOneData, setStepOneData] = useState<StepOneData | null>(null)

  const submitStepOne = useCallback(async (data: StepOneData) => {
    setLoading(true)
    setError(null)
    setStepOneData(data)

    try {
      const utmData = getStoredUTMData()
      const payload = {
        TITLE: `Lead - ${data.nome}`,
        NAME: data.nome,
        PHONE: [{ VALUE: sanitizePhone(data.telefone) }],
        EMAIL: [{ VALUE: data.email }],
        COMPANY_TITLE: data.empresa,
        UF_CRM_1770397017792: "",
        UF_CRM_1762258369972: utmData.gclid || "",
        UF_CRM_1743511264307: utmData.utm_campaign || "",
        SOURCE_ID: mapSourceId(utmData.utm_source),
        SOURCE_DESCRIPTION: "",
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
        setLeadId(String(result.leadId))
        localStorage.setItem("era_lead_id", String(result.leadId))
        localStorage.setItem("era_lead_email", data.email)
        localStorage.setItem("era_lead_phone", sanitizePhone(data.telefone))
        setStep("result")
      } else {
        setError("Ocorreu um erro. Tente novamente ou fale conosco pelo WhatsApp.")
      }
    } catch {
      setError("Ocorreu um erro. Tente novamente ou fale conosco pelo WhatsApp.")
    } finally {
      setLoading(false)
    }
  }, [])

  const submitStepTwo = useCallback(
    async (data: StepTwoData) => {
      setLoading(true)
      setError(null)

      try {
        const score = calculateICPScore(data)
        const rec = getRecommendation(data)
        setRecommendation(rec)

        const utmData = getStoredUTMData()

        const payload = {
          leadId: leadId,
          UF_CRM_1762352042875: data.faturamento,
          UF_CRM_1762352553637: data.segmento,
          SOURCE_DESCRIPTION: data.atendentes,
          UF_CRM_1768125539928: score,
          UF_CRM_1768126301805: data.media_atendimento,
          COMMENTS: `Dados completos: Empresa=${stepOneData?.empresa || "N/A"}, Faturamento=${data.faturamento}, Segmento=${data.segmento}, Atendentes=${data.atendentes}, Media Atendimento=${data.media_atendimento} | Interesses: ${data.interesses.join(", ")} | Plano Recomendado: ${rec.productName} ${rec.tierName} | Pontuação ICP: ${score} | UTMs: source=${utmData.utm_source || "N/A"}, medium=${utmData.utm_medium || "N/A"}, campaign=${utmData.utm_campaign || "N/A"} | Page: ${utmData.pageUrl}`,
        }

        await fetch("/api/bitrix/update-lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })

        setStep("result")
      } catch {
        setStep("result")
      } finally {
        setLoading(false)
      }
    },
    [leadId, stepOneData]
  )

  const skipStepTwo = useCallback(() => {
    setStep("success-generic")
  }, [])

  const reset = useCallback(() => {
    setStep("step1")
    setError(null)
    setRecommendation(null)
  }, [])

  return {
    step,
    loading,
    error,
    leadId,
    recommendation,
    submitStepOne,
    submitStepTwo,
    skipStepTwo,
    reset,
  }
}
