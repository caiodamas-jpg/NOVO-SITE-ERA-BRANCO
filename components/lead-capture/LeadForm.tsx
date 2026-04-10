"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useLeadForm } from "@/hooks/useLeadForm"
import StepOne from "./StepOne"

interface LeadFormProps {
  context: "home" | "planos" | "integracoes"
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export default function LeadForm({ context }: LeadFormProps) {
  const router = useRouter()
  const { step, loading, error, submitStepOne } = useLeadForm()

  useEffect(() => {
    if (step === "result" || step === "success-generic") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: "lead_form_step1" })

      // Save for enhanced conversions on step 2
      const savedEmail = localStorage.getItem("era_lead_email")
      const savedPhone = localStorage.getItem("era_lead_phone")
      if (!savedEmail || !savedPhone) {
        // Already saved by useLeadForm hook
      }

      router.push("/thanks")
    }
  }, [step, router])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.25 }}
      >
        {step === "step1" && (
          <StepOne onSubmit={submitStepOne} loading={loading} error={error} />
        )}
      </motion.div>
    </AnimatePresence>
  )
}
