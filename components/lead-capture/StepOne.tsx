"use client"

import { useState } from "react"
import { Loader2, ArrowRight } from "lucide-react"
import { applyPhoneMask, hasRepeatedChars, hasRepeatedLetters } from "@/lib/masks"
import type { StepOneData } from "@/hooks/useLeadForm"

interface StepOneProps {
  onSubmit: (data: StepOneData) => void
  loading: boolean
  error: string | null
}

export default function StepOne({ onSubmit, loading, error }: StepOneProps) {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [empresa, setEmpresa] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (): boolean => {
    const e: Record<string, string> = {}

    if (nome.trim().length < 3) e.nome = "Nome deve ter ao menos 3 caracteres"
    else if (hasRepeatedLetters(nome)) e.nome = "Nome inválido"

    const phoneDigits = telefone.replace(/\D/g, "")
    if (phoneDigits.length < 10) e.telefone = "Telefone inválido"
    else if (hasRepeatedChars(telefone)) e.telefone = "Telefone inválido — números repetidos"

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "E-mail inválido"

    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate() || loading) return
    onSubmit({
      nome: nome.trim(),
      email: email.trim(),
      telefone,
      empresa: empresa.trim(),
      cnpj: "",
    })
  }

  const inputClass = "w-full h-11 px-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-[#cfff00] focus:ring-1 focus:ring-[#cfff00]/30 transition-colors"

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-2">
        <p className="text-sm font-medium text-gray-800">Agende sua demonstração gratuita</p>
        <p className="text-xs text-gray-400 mt-0.5">Leva menos de 30 segundos</p>
      </div>

      <div>
        <input id="lead-nome" type="text" required placeholder="Seu nome completo *" value={nome} onChange={(e) => setNome(e.target.value)} className={inputClass} />
        {errors.nome && <p className="text-red-400 text-xs mt-1">{errors.nome}</p>}
      </div>

      <div>
        <input id="lead-telefone" type="tel" required placeholder="Telefone com DDD *" value={telefone} onChange={(e) => setTelefone(applyPhoneMask(e.target.value))} className={inputClass} />
        {errors.telefone && <p className="text-red-400 text-xs mt-1">{errors.telefone}</p>}
      </div>

      <div>
        <input id="lead-email" type="email" required placeholder="E-mail corporativo *" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <input id="lead-empresa" type="text" placeholder="Nome da empresa (opcional)" value={empresa} onChange={(e) => setEmpresa(e.target.value)} className={inputClass} />
      </div>

      {error && <p className="text-red-400 text-xs">{error}</p>}

      <button type="submit" disabled={loading}
        className="w-full h-11 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 text-[#1a2429] hover:brightness-110 cursor-pointer"
        style={{ backgroundColor: "#cfff00" }}>
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : (
          <>
            Agendar minha demonstração
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-[10px] text-gray-400 text-center">
        Ao enviar, você concorda com a{" "}
        <a href="/politica-de-privacidade" target="_blank" className="text-gray-500 underline underline-offset-2 hover:text-gray-900">Política de Privacidade</a>.
      </p>
    </form>
  )
}
