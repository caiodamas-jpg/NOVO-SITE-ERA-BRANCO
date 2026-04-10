"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
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
    <div className="relative">
      <div className="blur-sm pointer-events-none select-none opacity-40">
        {children}
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-sm mx-4 rounded-xl border border-gray-300 bg-[#2b363d] shadow-2xl shadow-black/60 p-6"
        >
          <h3 className="text-gray-900 font-medium text-base mb-2 text-center">Antes de continuar</h3>
          <p className="text-gray-500 text-xs text-center mb-6">
            Nossos serviços são exclusivos para empresas.
          </p>

          <div className="rounded-lg border border-gray-300/50 bg-white p-4">
            <p className="text-gray-900 text-sm font-medium mb-3">Você tem empresa ativa (CNPJ)?</p>
            <div className="flex gap-2">
              <button
                onClick={handleYes}
                className="flex-1 h-9 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 border border-gray-300 text-gray-600 hover:border-[#cfff00]/50 hover:text-gray-900 transition-colors"
              >
                <Check className="w-3.5 h-3.5" /> Sim, tenho empresa
              </button>
              <button
                onClick={handleNo}
                className="flex-1 h-9 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 border border-gray-300 text-gray-600 hover:border-red-500/50 hover:text-red-400 transition-colors"
              >
                <X className="w-3.5 h-3.5" /> Não
              </button>
            </div>
          </div>

          <p className="text-gray-500 text-[9px] text-center mt-4">
            Nossos serviços são destinados exclusivamente a empresas com CNPJ ativo.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
