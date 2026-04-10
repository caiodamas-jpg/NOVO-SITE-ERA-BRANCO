export interface Recommendation {
  product: "chat" | "voz" | "omni"
  tier: "basico" | "padrao" | "profissional"
  productName: string
  tierName: string
  fullName: string
  reason: string
  planUrl: string
}

export function getRecommendation(data: {
  faturamento: string
  media_atendimento: string
  atendentes: string
  segmento: string
  interesses: string[]
}): Recommendation {
  const score = { chat: 0, voz: 0, omni: 0 }
  const tier = { basico: 0, padrao: 0, profissional: 0 }

  if (data.interesses.includes("whatsapp")) score.chat += 3
  if (data.interesses.includes("ia_chatbot")) { score.chat += 3; tier.padrao += 2 }
  if (data.interesses.includes("pabx")) score.voz += 3
  if (data.interesses.includes("callcenter")) { score.voz += 3; tier.profissional += 3 }
  if (data.interesses.includes("omnichannel")) score.omni += 5
  if (data.interesses.includes("completa")) { score.omni += 5; tier.profissional += 2 }

  const temChat = data.interesses.some((i) => ["whatsapp", "ia_chatbot"].includes(i))
  const temVoz = data.interesses.some((i) => ["pabx", "callcenter"].includes(i))
  if (temChat && temVoz) score.omni += 4

  const volumeMap: Record<string, { t: keyof typeof tier; pts: number }> = {
    ate_50: { t: "basico", pts: 2 },
    "50_200": { t: "padrao", pts: 2 },
    "200_500": { t: "padrao", pts: 1 },
    "500_1000": { t: "profissional", pts: 3 },
    mais_1000: { t: "profissional", pts: 4 },
  }
  if (volumeMap[data.media_atendimento]) {
    tier[volumeMap[data.media_atendimento].t] += volumeMap[data.media_atendimento].pts
  }
  if (["500_1000", "mais_1000"].includes(data.media_atendimento)) score.omni += 1

  const atendenteMap: Record<string, { t: keyof typeof tier; pts: number }> = {
    "1_5": { t: "basico", pts: 2 },
    "6_20": { t: "padrao", pts: 2 },
    "21_50": { t: "padrao", pts: 1 },
    "51_100": { t: "profissional", pts: 3 },
    mais_100: { t: "profissional", pts: 4 },
  }
  if (atendenteMap[data.atendentes]) {
    tier[atendenteMap[data.atendentes].t] += atendenteMap[data.atendentes].pts
  }

  const segmentosVoz = ["Provedor de Internet (ISP)", "Telecomunicacoes"]
  const segmentosOmni = ["Saude e Planos de Saude", "Financeiro e Cobranca", "Varejo e E-commerce", "Seguros", "Energia e Utilities"]
  const segmentosChat = ["Educacao", "Tecnologia e SaaS", "Imobiliario", "Automotivo", "Marketing e Comunicacao"]

  if (segmentosVoz.includes(data.segmento)) score.voz += 2
  if (segmentosOmni.includes(data.segmento)) score.omni += 2
  if (segmentosChat.includes(data.segmento)) score.chat += 2

  const faturamentoMap: Record<string, { t: keyof typeof tier; pts: number }> = {
    ate_50k: { t: "basico", pts: 1 },
    "50k_200k": { t: "padrao", pts: 1 },
    "200k_500k": { t: "padrao", pts: 1 },
    "500k_1m": { t: "profissional", pts: 1 },
    "1m_5m": { t: "profissional", pts: 2 },
    acima_5m: { t: "profissional", pts: 2 },
  }
  if (faturamentoMap[data.faturamento]) {
    tier[faturamentoMap[data.faturamento].t] += faturamentoMap[data.faturamento].pts
  }

  if (data.interesses.length === 0) {
    score.omni += 3
    tier.padrao += 2
  }

  const productResult = (Object.entries(score) as [string, number][]).sort((a, b) => b[1] - a[1])[0][0] as "chat" | "voz" | "omni"
  const tierResult = (Object.entries(tier) as [string, number][]).sort((a, b) => b[1] - a[1])[0][0] as "basico" | "padrao" | "profissional"

  const productNames = { chat: "Chat", voz: "Voz", omni: "Mensageria" }
  const tierNames = { basico: "Basico", padrao: "Padrao", profissional: "Profissional" }
  const productUrls = { chat: "/pricing#era-chat", voz: "/pricing#era-voz", omni: "/pricing#era-omni" }

  const reasons: Record<string, Record<string, string>> = {
    chat: {
      basico: "Perfeito para equipes menores que precisam atender por WhatsApp com eficiencia.",
      padrao: "Ideal para empresas em crescimento que precisam de IA e automacao no WhatsApp.",
      profissional: "Para operacoes de alto volume que exigem controle total do atendimento por chat.",
    },
    voz: {
      basico: "Ideal para escritorios que precisam de telefonia profissional com PABX virtual.",
      padrao: "Para equipes que precisam de chamadas ilimitadas, URA multinivel e relatorios avancados.",
      profissional: "Para operacoes complexas com call center, filas inteligentes e discador preditivo.",
    },
    omni: {
      basico: "Para empresas que querem unificar telefonia e WhatsApp em uma unica plataforma.",
      padrao: "Ideal para operacoes em crescimento que precisam de comunicacao unificada com IA.",
      profissional: "Para grandes operacoes que exigem gestao integrada, IA avancada e controle total.",
    },
  }

  return {
    product: productResult,
    tier: tierResult,
    productName: productNames[productResult],
    tierName: tierNames[tierResult],
    fullName: `${productNames[productResult]} — Plano ${tierNames[tierResult]}`,
    reason: reasons[productResult][tierResult],
    planUrl: productUrls[productResult],
  }
}
