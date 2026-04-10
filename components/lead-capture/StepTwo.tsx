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
      <span className="text-sm font-semibold text-gray-800 mb-2 block">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              value === opt.value
                ? ""
                : "border border-gray-300 text-gray-500 hover:text-gray-900 hover:border-gray-300"
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <ProgressBar currentStep={2} />
      <div className="space-y-1">
        <p className="text-gray-600 text-sm font-medium">Personalize sua recomendação de plano</p>
        <p className="text-gray-500 text-xs">Selecione as opções abaixo para receber uma recomendação personalizada</p>
      </div>

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
        <span className="text-sm font-semibold text-gray-800 mb-2 block">Segmento da empresa *</span>
        <button
          type="button"
          onClick={() => setSegmentoOpen(!segmentoOpen)}
          className="w-full h-10 px-3 rounded-lg border border-gray-300 bg-white text-sm text-left flex items-center justify-between focus:outline-none focus:border-[#cfff00]/50"
        >
          <span className={segmento ? "text-gray-900" : "text-gray-500"}>
            {segmento || "Selecione o segmento"}
          </span>
          <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${segmentoOpen ? "rotate-180" : ""}`} />
        </button>
        {segmentoOpen && (
          <div className="absolute z-50 top-full left-0 right-0 mt-1 rounded-lg border border-gray-300 bg-white shadow-2xl max-h-48 overflow-y-auto">
            <div className="p-2 border-b border-gray-200">
              <input
                type="text"
                placeholder="Buscar segmento..."
                value={segmentoSearch}
                onChange={(e) => setSegmentoSearch(e.target.value)}
                className="w-full h-8 px-2 rounded bg-gray-100 text-gray-900 text-xs placeholder:text-gray-500 focus:outline-none"
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
                className={`w-full text-left px-3 py-2 text-xs transition-colors ${
                  segmento === s ? "text-white bg-[#2b363d]" : "text-gray-600 hover:bg-gray-100"
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
        <span className="text-sm font-semibold text-gray-800 mb-2 block">Principal interesse * (pode marcar vários)</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {interesseOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggleInteresse(opt.value)}
              className={`px-3 py-2.5 rounded-lg text-xs font-medium text-left transition-colors ${
                interesses.includes(opt.value)
                  ? ""
                  : "border border-gray-300 text-gray-500 hover:text-gray-900 hover:border-gray-300"
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
        className="w-full h-10 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
        style={{ backgroundColor: "#2b363d", color: "#ffffff" }}
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Receber minha recomendação"}
      </button>

      <button
        type="button"
        onClick={onSkip}
        className="w-full text-center text-xs text-gray-500 hover:text-gray-600 transition-colors"
      >
        Pular esta etapa
      </button>
    </form>
  )
}
