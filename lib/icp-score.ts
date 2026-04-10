export function calculateICPScore(data: {
  faturamento: string
  media_atendimento: string
  atendentes: string
  segmento: string
  interesses: string[]
}): number {
  let score = 0

  const faturamentoScores: Record<string, number> = {
    ate_50k: 0,
    "50k_200k": 1,
    "200k_500k": 2,
    "500k_1m": 2,
    "1m_5m": 3,
    acima_5m: 3,
  }
  score += faturamentoScores[data.faturamento] || 0

  const volumeScores: Record<string, number> = {
    ate_50: 0,
    "50_200": 1,
    "200_500": 1,
    "500_1000": 2,
    mais_1000: 2,
  }
  score += volumeScores[data.media_atendimento] || 0

  const atendentesScores: Record<string, number> = {
    "1_5": 0,
    "6_20": 1,
    "21_50": 1,
    "51_100": 2,
    mais_100: 2,
  }
  score += atendentesScores[data.atendentes] || 0

  const segmentosAltoValor = [
    "Saude e Planos de Saude",
    "Financeiro e Cobranca",
    "Telecomunicacoes",
    "Provedor de Internet (ISP)",
    "Seguros",
    "Energia e Utilities",
    "Varejo e E-commerce",
  ]
  if (segmentosAltoValor.includes(data.segmento)) {
    score += 1
  }

  if (data.interesses.includes("completa") || data.interesses.includes("omnichannel")) {
    score += 1
  }

  return Math.min(9, Math.max(0, score))
}
