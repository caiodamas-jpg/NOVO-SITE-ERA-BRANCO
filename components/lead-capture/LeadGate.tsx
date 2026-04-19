"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { Check, X } from "lucide-react"

interface LeadGateProps {
  children: React.ReactNode
}

export default function LeadGate({ children }: LeadGateProps) {
  const router = useRouter()
  const [passed, setPassed] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const gateOk = localStorage.getItem("era_gate_passed")
    if (gateOk === "true") {
      setPassed(true)
    }
    setChecking(false)
  }, [])

  useEffect(() => {
    if (!checking && !passed) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [checking, passed])

  const handleYes = () => {
    localStorage.setItem("era_gate_passed", "true")
    setPassed(true)
  }

  const handleNo = () => {
    router.push("/obrigado-sem")
  }

  if (checking) return <div className="min-h-[200px]" />

  if (passed) return <>{children}</>

  return (
    <>
      <div className="blur-sm pointer-events-none select-none opacity-40">
        {children}
      </div>

      <AnimatePresence>
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-sm rounded-xl border border-gray-300 bg-white shadow-2xl shadow-black/60 p-6"
            role="dialog"
            aria-modal="true"
          >
            <h3 className="text-gray-900 font-medium text-base mb-2 text-center">Antes de continuar</h3>
            <p className="text-gray-500 text-xs text-center mb-6">
              Nossos serviços são exclusivos para empresas.
            </p>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-gray-900 text-sm font-medium mb-3">Você tem empresa ativa (CNPJ)?</p>
              <div className="flex gap-2">
                <button
                  onClick={handleYes}
                  className="flex-1 h-10 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 border border-gray-300 text-gray-700 hover:border-[#cfff00] hover:bg-[#cfff00]/10 transition-colors"
                >
                  <Check className="w-3.5 h-3.5" /> Sim, tenho empresa
                </button>
                <button
                  onClick={handleNo}
                  className="flex-1 h-10 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 border border-gray-300 text-gray-700 hover:border-red-500/50 hover:text-red-500 transition-colors"
                >
                  <X className="w-3.5 h-3.5" /> Não
                </button>
              </div>
            </div>

            <p className="text-gray-500 text-[10px] text-center mt-4">
              Nossos serviços são destinados exclusivamente a empresas com CNPJ ativo.
            </p>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  )
}
