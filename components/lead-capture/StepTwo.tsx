"use client"

import { useState } from "react"
import { Loader2, ChevronDown } from "lucide-react"
import type { StepTwoData } from "@/hooks/useLeadForm"
import ProgressBar from "./ProgressBar"

const faturamentoOptions = [
  { value: "ate_50k", label: "Até R$ 50 mil" },
  { value: "50k_200k", label: "R$ 50 mil a R$ 200 mil" },
  { value: "200k_500k", label: "R$ 200 mil a R$ 500 mil" },
  { value: "500k_1m", label: "R$ 500 mil a R$ 1 milhão" },
  { value: "1m_5m", label: "R$ 1 milhão a R$ 5 milhões" },
  { value: "acima_5m", label: "Acima de R$ 5 milhões" },
]

const volumeOptions = [
  { value: "ate_50", label: "Até 50 atendimentos" },
  { value: "50_200", label: "50 a 200" },
  { value: "200_500", label: "200 a 500" },
  { value: "500_1000", label: "500 a 1.000" },
  { value: "mais_1000", label: "Mais de 1.000" },
]

const atendentesOptions = [
  { value: "1_5", label: "1 a 5" },
  { value: "6_20", label: "6 a 20" },
  { value: "21_50", label: "21 a 50" },
  { value: "51_100", label: "51 a 100" },
  { value: "mais_100", label: "Mais de 100" },
]

const segmentos = [
  "Provedor de Internet (ISP)",
  "Telecomunicações",
  "Saúde e Planos de Saúde",
  "Financeiro e Cobrança",
  "Varejo e E-commerce",
  "Educação",
  "Imobiliário",
  "Automotivo",
  "Logística e Transporte",
  "Serviços Profissionais",
  "Tecnologia e SaaS",
  "Indústria e Manufatura",
  "Governo e Setor Público",
  "Condomínios e Administradoras",
  "Seguros",
  "Energia e Utilities",
  "Agronegócio",
  "Alimentação e Restaurantes",
  "Turismo e Hotelaria",
  "Jurídico",
  "Contabilidade",
  "Marketing e Comunicação",
  "Outro",
]

const interesseOptions = [
  { value: "pabx", label: "Telefonia e PABX virtual" },
  { value: "callcenter", label: "Call Center com filas e discador" },
  { value: "whatsapp", label: "Atendimento por WhatsApp" },
  { value: "ia_chatbot", label: "IA e Chatbots para atendimento" },
  { value: "omnichannel", label: "Atendimento Omnichannel (voz + chat)" },
  { value: "completa", label: "Solução completa ERA CX" },
]

interface StepTwoProps {
  onSubmit: (data: StepTwoData) => void
  onSkip: () => void
  loading: boolean
}

function ChipSelect({
  options,
  value,
  onChange,
  label,
}: {
  options: { value: string; label: string }[]
  value: string
  onChange: (v: string) => void
  label: string
}) {
  return (
    <div>
      <span className="text-base font-semibold text-gray-900 mb-3 block">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              value === opt.value
                ? ""
                : "border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400"
            }`}
            style={value === opt.value ? { backgroundColor: "#2b363d", color: "#ffffff" } : undefined}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function StepTwo({ onSubmit, onSkip, loading }: StepTwoProps) {
  const [faturamento, setFaturamento] = useState("")
  const [media_atendimento, setMediaAtendimento] = useState("")
  const [atendentes, setAtendentes] = useState("")
  const [segmento, setSegmento] = useState("")
  const [segmentoSearch, setSegmentoSearch] = useState("")
  const [segmentoOpen, setSegmentoOpen] = useState(false)
  const [interesses, setInteresses] = useState<string[]>([])

  const toggleInteresse = (val: string) => {
    setInteresses((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    )
  }

  const filteredSegmentos = segmentos.filter((s) =>
    s.toLowerCase().includes(segmentoSearch.toLowerCase())
  )

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    if (loading) return
    onSubmit({ faturamento, media_atendimento, atendentes, segmento, interesses })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <ChipSelect
        label="Faturamento mensal da empresa *"
        options={faturamentoOptions}
        value={faturamento}
        onChange={setFaturamento}
      />

      <ChipSelect
        label="Média de atendimento diário *"
        options={volumeOptions}
        value={media_atendimento}
        onChange={setMediaAtendimento}
      />

      <ChipSelect
        label="Número de atendentes *"
        options={atendentesOptions}
        value={atendentes}
        onChange={setAtendentes}
      />

      {/* Segmento dropdown */}
      <div className="relative">
        <span className="text-base font-semibold text-gray-900 mb-3 block">Segmento da empresa *</span>
        <button
          type="button"
          onClick={() => setSegmentoOpen(!segmentoOpen)}
          className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-sm text-left flex items-center justify-between focus:outline-none focus:border-[#cfff00] focus:ring-1 focus:ring-[#cfff00]/30"
        >
          <span className={segmento ? "text-gray-900" : "text-gray-500"}>
            {segmento || "Selecione o segmento"}
          </span>
          <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${segmentoOpen ? "rotate-180" : ""}`} />
        </button>
        {segmentoOpen && (
          <div className="absolute z-50 top-full left-0 right-0 mt-1 rounded-lg border border-gray-300 bg-white shadow-2xl max-h-60 overflow-y-auto">
            <div className="p-2 border-b border-gray-200 sticky top-0 bg-white">
              <input
                type="text"
                placeholder="Buscar segmento..."
                value={segmentoSearch}
                onChange={(e) => setSegmentoSearch(e.target.value)}
                className="w-full h-9 px-3 rounded bg-gray-100 text-gray-900 text-sm placeholder:text-gray-500 focus:outline-none"
              />
            </div>
            {filteredSegmentos.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setSegmento(s)
                  setSegmentoOpen(false)
                  setSegmentoSearch("")
                }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                  segmento === s ? "text-white bg-[#2b363d]" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Interesses multi-select */}
      <div>
        <span className="text-base font-semibold text-gray-900 mb-3 block">Principal interesse * <span className="text-xs text-gray-500 font-normal">(pode marcar vários)</span></span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {interesseOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggleInteresse(opt.value)}
              className={`px-4 py-3 rounded-lg text-sm font-medium text-left transition-colors ${
                interesses.includes(opt.value)
                  ? ""
                  : "border border-gray-300 text-gray-700 hover:text-gray-900 hover:border-gray-400"
              }`}
              style={interesses.includes(opt.value) ? { backgroundColor: "#2b363d", color: "#ffffff" } : undefined}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full h-14 rounded-lg font-semibold text-base hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
        style={{ backgroundColor: "#cfff00", color: "#1a2429" }}
      >
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Receber minha proposta personalizada"}
      </button>

      <button
        type="button"
        onClick={onSkip}
        className="w-full text-center text-xs text-gray-400 hover:text-gray-600 transition-colors"
      >
        Pular esta etapa
      </button>
    </form>
  )
}
