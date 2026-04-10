export type TierLevel = "básico" | "padrão" | "profissional"

export interface FeatureItem {
  text: string
  addon?: boolean
}

export interface StandardTier {
  name: string
  tier: TierLevel
  description: string
  highlighted: boolean
  includes_previous?: string
  features: (string | FeatureItem)[]
}

export interface OmniTier {
  name: string
  tier: TierLevel
  description: string
  highlighted: boolean
  includes_previous?: string
  features_general: (string | FeatureItem)[]
  features_chat: (string | FeatureItem)[]
  features_voz: (string | FeatureItem)[]
}

export interface Product {
  id: string
  name: string
  icon: string
  tagline: string
  description: string
  tiers: (StandardTier | OmniTier)[]
}

export function isOmniTier(tier: StandardTier | OmniTier): tier is OmniTier {
  return "features_general" in tier
}

export function getFeatureText(feature: string | FeatureItem): string {
  return typeof feature === "string" ? feature : feature.text
}

export function isAddon(feature: string | FeatureItem): boolean {
  return typeof feature !== "string" && feature.addon === true
}

export function getAllFeatures(tier: StandardTier | OmniTier): (string | FeatureItem)[] {
  if (isOmniTier(tier)) {
    return [...tier.features_general, ...tier.features_chat, ...tier.features_voz]
  }
  return tier.features
}

export const products: Product[] = [
  {
    id: "era-chat",
    name: "Chat",
    icon: "chat-bubble",
    tagline: "Atendimento por mensagens com WhatsApp, IA e automações",
    description:
      "Solução completa de atendimento via WhatsApp e canais de mensagem, com chatbots, IA generativa, distribuição inteligente e relatórios avançados.",
    tiers: [
      {
        name: "Chat Básico",
        tier: "básico",
        description: "Para pequenas equipes que atendem principalmente via WhatsApp",
        highlighted: false,
        features: [
          "WhatsApp Business API (1 número)",
          "100 conversas por atendente por mes",
          "Chatbot com menu de botões",
          "Canais adicionais (Instagram, Messenger, Telegram)",
          "Distribuição de conversas manual e automático",
          "Envio de templates de mensagens",
          "Histórico de conversas de 30 dias",
          "Mensagens favoritas (respostas rápidas)",
          "Regras de horário",
          "Relatórios essenciais",
          "Suporte por e-mail",
        ],
      },
      {
        name: "Chat Padrão",
        tier: "padrão",
        description: "Para empresas em crescimento que precisam de gestão avançada",
        highlighted: true,
        includes_previous: "Tudo do Básico, mais:",
        features: [
          "WhatsApp Business API (ate 3 números)",
          "1 Agente de IA / 30 conversas por mes",
          "Pesquisa de satisfacao automática",
          "150 conversas por atendente por mes",
          "Análise de atendimento por IA",
          "Pausas configuráveis",
          "Monitoramento com intervenção",
          "Canais adicionais (Instagram, Messenger, Telegram)",
          "Departamentos com filas específicas",
          "Integração com sistemas externos (customizado na instalação)",
          "Direct Chat (cartelização)",
          "Tags e status personalizados",
          "Transferência entre agentes e departamentos",
          "Relatórios avançados e exportáveis",
          "Suporte humano 24x7",
        ],
      },
      {
        name: "Chat Profissional",
        tier: "profissional",
        description: "Para operações de alto volume que buscam excelencia com automacao e IA",
        highlighted: false,
        includes_previous: "Tudo do Padrão, mais:",
        features: [
          "Agentes multi-skill ilimitados",
          "Callback inteligente para chat",
          "200 conversas por atendente por mes",
          "Canais adicionais (Instagram, Messenger, Telegram)",
          "Integração com sistemas externos (customizado na instalação)",
          "Direct Chat (cartelização)",
          "API e Webhooks",
          "Distribuição Inteligente",
          "Prefixo do chamador para agente multi-skill",
          "Limite de conversas ativas por agente configurável",
          "Encaminhamento automático se agente nao atender",
          "Suporte humano 24x7",
          "Alerta de inatividade no chat/bot",
          "Visualização Kanban com drag-and-drop",
          "Tempo no bot vs tempo com agente",
          "Palavras bloqueadas customizáveis",
          "Supervisores específicos por departamento",
          "Metas individualizadas por fila",
          "Envio apenas para contatos cadastrados",
        ],
      },
    ],
  },
  {
    id: "era-voz",
    name: "Voz",
    icon: "phone",
    tagline: "PABX em nuvem, PABX virtual e telefonia corporativa completa",
    description:
      "PABX em nuvem completo: PABX virtual com ramais ilimitados, URA inteligente, gravação de chamadas, call center com filas e discador preditivo. Substitua seu PABX fisico.",
    tiers: [
      {
        name: "Voz Básico",
        tier: "básico",
        description: "Para pequenos escritorios com baixo volume de ligações",
        highlighted: false,
        features: [
          "50 minutos para todo Brasil",
          "Ramal no app",
          "Atendimento Automático (URA) de 1 nível",
          "Música de espera personalizada",
          "Gravação de chamadas por 30 dias",
          "Siga-me",
          "Regras de horário",
        ],
      },
      {
        name: "Voz Padrão",
        tier: "padrão",
        description: "Ideal para equipes que precisam de liberdade total para ligar",
        highlighted: true,
        includes_previous: "Tudo do Básico, mais:",
        features: [
          "Chamadas ilimitadas para todo Brasil",
          "Atendimento Automático (URA) multinível",
          "Relatórios avançados e exportáveis",
          "Integração com sistemas externos (customizado na instalação)",
          "Gravação de chamadas por 1 ano",
          "Cadeado eletrônico por modalidade de chamada",
          "Onboarding assistido",
          "Suporte humano 24x7",
        ],
      },
      {
        name: "Voz Profissional",
        tier: "profissional",
        description: "Para operações complexas de atendimento",
        highlighted: false,
        includes_previous: "Tudo do Padrão, mais:",
        features: [
          "Call Center completo com filas inteligentes",
          "Pausas configuráveis",
          "Distribuição de chamadas por skills de agentes",
          { text: "Análise de sentimento por IA", addon: true },
          "Pesquisa de Satisfação automática",
          { text: "Integração com MS Teams", addon: true },
          { text: "Discador Preditivo", addon: true },
          "Callback automático",
          "Monitoramento com sussurro/intervenção",
          "API e Webhooks",
          "Discagem Direta de Ramal",
          "Supervisores dedicados por fila",
          "CTI completo com pop-up de dados do cliente",
        ],
      },
    ],
  },
  {
    id: "era-omni",
    name: "Mensageria",
    icon: "omnichannel",
    tagline: "Agentes de IA especializados para atendimento automatizado",
    description:
      "A solução completa que unifica voz e chat em uma única plataforma com histórico unificado, transição entre canais e gestão integrada com IA e análise avançada.",
    tiers: [
      {
        name: "Mensageria Básico",
        tier: "básico",
        description: "Para empresas que buscam integração simples entre telefonia e WhatsApp",
        highlighted: false,
        features_general: [
          "Transicao entre canais",
          "Histórico único do cliente",
          "Dashboard unificado voz + chat",
          "Regras de horário",
          "Relatórios gerenciais",
          "Monitoramento assistido",
          "Suporte humano 24x7",
          "Histórico de 30 dias",
          "Canais adicionais disponíveis",
        ],
        features_chat: [
          "WhatsApp Business API (1 número)",
          "100 conversas por atendente por mes",
          "Chatbot com menu de botões",
          "Envio de templates de mensagens",
          "Mensagens favoritas (respostas rápidas)",
        ],
        features_voz: [
          "50 minutos para todo Brasil",
          "Ramal no app",
          "Atendimento Automático (URA) de 1 nível",
          "Música de espera personalizada",
          "Siga-me",
        ],
      },
      {
        name: "Mensageria Padrão",
        tier: "padrão",
        description: "Para empresas em crescimento que precisam de comunicação unificada",
        highlighted: true,
        includes_previous: "Tudo do Básico, mais:",
        features_general: [
          "Canais adicionais disponíveis",
          "Monitoramento com intervenção",
          "Integração com sistemas externos (customizado na instalação)",
          "Departamentos com filas específicas",
          "Pausas configuráveis",
          "Transferência entre agentes e departamentos",
          "Pesquisa de Satisfação automática",
          "Relatórios avançados e exportáveis",
          "Suporte humano 24x7",
        ],
        features_chat: [
          "150 conversas por atendente por mes",
          "IA Generativa 24/7 (assistentes virtuais) — 100 conversas/mes incluídas",
          "Canais adicionais (WhatsApp, Instagram, Messenger, Telegram)",
          "Análise de atendimento por IA",
          "WhatsApp Business API (ate 3 números)",
          "Direct Chat (cartelização)",
          "Tags e status personalizados",
        ],
        features_voz: [
          "Chamadas ilimitadas para todo Brasil",
          "Atendimento Automático (URA) multinível",
          "Relatórios avançados e exportáveis",
          "Integração com sistemas externos (customizado na instalação)",
          "Gravação de chamadas por 1 ano",
          "Cadeado eletrônico por modalidade de chamada",
        ],
      },
      {
        name: "Mensageria Profissional",
        tier: "profissional",
        description: "Para operações que exigem gestão integrada com IA e análise avançada",
        highlighted: false,
        includes_previous: "Tudo do Padrão, mais:",
        features_general: [
          "Agentes multi-skill ilimitados",
          "Callback automático",
          "Canais ilimitados",
          "Integração e desenvolvimento customizado",
          "API e Webhooks",
          "Distribuição de atendimentos por skill",
          "Pesquisa de Satisfação automática",
          "Prefixo do chamador para agente multi-skill",
          "Supervisores específicos por agente",
        ],
        features_chat: [
          "Direct Chat (cartelização)",
          "200 conversas por atendente por mes",
          "Limite de conversas ativas por agente configurável",
          "Visualização Kanban com drag-and-drop",
          "Palavras bloqueadas customizáveis",
          "Envio apenas para contatos cartelizados",
          "Metas individualizadas por fila",
          "Encaminhamento automático se agente nao interagir",
          "Tempo no bot vs tempo com agente segregado",
          "Alerta de inatividade no chatbot",
          "Análise de sentimento por IA",
        ],
        features_voz: [
          { text: "Integração com MS Teams", addon: true },
          "Call Center completo com filas inteligentes",
          "Pausas configuráveis",
          "Monitoramento com sussurro/intervenção",
          "Discagem Direta de Ramal",
          "Supervisores dedicados por fila",
          "CTI completo com pop-up de dados do cliente",
        ],
      },
    ],
  },
]

export const homeHighlights: Record<string, string[]> = {
  "era-chat": [
    "WhatsApp Business API",
    "IA Generativa e chatbots",
    "Distribuição inteligente",
    "Kanban e gestão visual",
  ],
  "era-voz": [
    "PABX em nuvem sem hardware",
    "PABX virtual com ramais ilimitados",
    "URA inteligente multinível",
    "Call Center com filas e skills",
  ],
  "era-omni": [
    "Dashboard unificado voz + chat",
    "Transicao entre canais",
    "IA Generativa 24/7",
    "Agentes multi-skill ilimitados",
  ],
}
