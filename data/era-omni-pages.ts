export interface EraOmniPage {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  h1: string
  subtitle: string
  features: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
  relatedSlugs: string[]
}

export const eraOmniPages: EraOmniPage[] = [
  {
    slug: "atendimento-unificado",
    title: "Atendimento Unificado",
    metaTitle: "Atendimento Unificado — Transição entre Canais sem Perder Contexto | Omni",
    metaDescription: "Seu cliente começa por WhatsApp e termina por telefone sem repetir informação. Histórico único, jornada completa e atendimento verdadeiramente omnichannel.",
    h1: "Atendimento unificado — seu cliente nunca mais repete informação",
    subtitle: "O cliente começa por WhatsApp e termina por telefone — sem perder contexto, sem repetir dados. Histórico único, jornada completa e transição transparente entre canais.",
    features: [
      { title: "Transição entre canais", description: "WhatsApp → Telefone (e vice-versa) sem perder contexto. O atendente vê toda a conversa anterior." },
      { title: "Histórico único multi-canal", description: "Timeline unificada: mensagens de WhatsApp, ligações, e-mails, Instagram — tudo em ordem cronológica." },
      { title: "Jornada completa do cliente", description: "Lista todas as vezes que o cliente entrou em contato, por qualquer canal, acessível pelo atendente." },
      { title: "Webphone integrado no chat", description: "O atendente faz ligações pela mesma tela de chat — voz e mensagem na mesma interface." },
      { title: "Tabulação unificada", description: "Voz e chat com os mesmos motivos de tabulação. Relatórios consolidados de todos os canais." },
      { title: "Retorno ativo pela tela de chat", description: "O atendente liga para o cliente direto pela tela de atendimento, sem alternar entre sistemas." },
    ],
    faqs: [
      { question: "O cliente pode começar por WhatsApp e continuar por telefone?", answer: "Sim, com todo o contexto da conversa visível para o atendente durante a ligação." },
      { question: "O histórico de voz e chat fica junto?", answer: "Sim, em uma timeline unificada por cliente." },
      { question: "O atendente consegue ligar para o cliente pela tela de chat?", answer: "Sim, com webphone integrado na interface de atendimento." },
      { question: "A tabulação é a mesma para voz e chat?", answer: "Sim, configurável com os mesmos motivos para ambos os canais." },
      { question: "O atendente sabe de qual canal veio o contato?", answer: "Sim, com badge visual indicando o canal de origem." },
    ],
    relatedSlugs: ["dashboard", "canais", "gestao-equipes"],
  },
  {
    slug: "dashboard",
    title: "Dashboard Consolidado",
    metaTitle: "Dashboard Consolidado Voz + Chat — Métricas Omnichannel em Tempo Real | ERA",
    metaDescription: "Dashboard que consolida métricas de voz e chat em tempo real: TMA, TME, conversas, chamadas, nível de serviço e performance de agentes em um único painel.",
    h1: "Dashboard consolidado — voz e chat em um único painel de gestão",
    subtitle: "Métricas de voz e chat lado a lado em um único dashboard. TMA, TME, conversas, chamadas, nível de serviço e performance — tudo em tempo real, sem alternar entre sistemas.",
    features: [
      { title: "Painel inicial consolidado", description: "Ao fazer login, o gestor vê todas as canalidades: voz, WhatsApp, Messenger, Instagram, e-mail e mais." },
      { title: "Métricas de voz em tempo real", description: "Chamadas em fila, TMA, TME, nível de serviço, abandonadas e callback atendidos." },
      { title: "Métricas de chat em tempo real", description: "Conversas abertas, concluídas, tempo médio de resposta, dia e hora mais movimentados." },
      { title: "Performance por agente", description: "Tempo logado, chamadas/conversas, TMA individual e status em tempo real." },
      { title: "Dashboards para TV", description: "Todos os dashboards são expansíveis para exibição em televisores na operação." },
      { title: "Relatórios históricos", description: "Tempo real para gestão imediata + relatórios históricos para análise estratégica." },
    ],
    faqs: [
      { question: "O dashboard mostra voz e chat juntos?", answer: "Sim, consolidado em um único painel com atualização em tempo real." },
      { question: "Posso ver métricas por departamento?", answer: "Sim, tanto de voz quanto de chat, com filtros por fila e departamento." },
      { question: "O dashboard funciona em TV?", answer: "Sim, todos os dashboards são expansíveis para exibição em telas grandes." },
      { question: "Posso ver a performance individual de cada agente?", answer: "Sim, com tempo logado, chamadas/conversas, TMA e status em tempo real." },
      { question: "O dashboard mostra dados históricos ou só tempo real?", answer: "Ambos. Tempo real para gestão imediata + relatórios históricos para análise." },
    ],
    relatedSlugs: ["atendimento-unificado", "gestao-equipes", "ia-analise"],
  },
  {
    slug: "gestao-equipes",
    title: "Gestão de Equipes",
    metaTitle: "Gestão de Equipes Omnichannel — Multi-skill, Supervisão e Metas | Omni",
    metaDescription: "Gerencie agentes que atendem voz e chat simultaneamente. Supervisão unificada, metas por fila, pausas configuráveis e relatórios de produtividade.",
    h1: "Gestão de equipes — agentes multi-skill de voz e chat em uma única plataforma",
    subtitle: "Agentes atendem chamadas telefônicas E conversas de chat na mesma tela. Supervisão unificada, metas por departamento, pausas configuráveis e distribuição inteligente.",
    features: [
      { title: "Agentes multi-skill voz + chat", description: "O agente atende chamadas e conversas na mesma tela. Relatórios separados por canal medem produtividade." },
      { title: "Supervisão unificada", description: "Supervisores vinculados a filas de voz E departamentos de chat com monitoramento em tempo real." },
      { title: "Distribuição inteligente coordenada", description: "Se o agente está em chamada, não recebe nova conversa (e vice-versa, configurável)." },
      { title: "Metas por departamento e fila", description: "Nível de serviço configurável com prompts de IA para avaliação do atendimento." },
      { title: "Limite de chats por agente", description: "Configurável individualmente — controle o volume de conversas simultâneas por atendente." },
      { title: "Grupos privados internos", description: "Comunicação interna entre a equipe dentro da plataforma, como um WhatsApp interno." },
    ],
    faqs: [
      { question: "O agente pode atender chamada e chat ao mesmo tempo?", answer: "Sim, com configuração de prioridade entre canais." },
      { question: "O supervisor vê voz e chat na mesma tela?", answer: "Sim, com supervisão unificada e monitoramento em tempo real de ambos." },
      { question: "Posso definir metas diferentes por departamento?", answer: "Sim, com nível de serviço e prompts de IA configuráveis por departamento." },
      { question: "O agente tem limite de chats simultâneos?", answer: "Sim, configurável por agente." },
      { question: "Tem comunicação interna entre a equipe?", answer: "Sim, grupos privados dentro da plataforma." },
    ],
    relatedSlugs: ["dashboard", "ia-analise", "atendimento-unificado"],
  },
  {
    slug: "ia-analise",
    title: "IA e Análise",
    metaTitle: "IA para Análise de Atendimento — Avaliação Automática e Scoring | Omni",
    metaDescription: "IA que analisa o atendimento dos seus agentes automaticamente: cordialidade, agilidade, resolução, profissionalismo. Scoring por atendimento e feedback detalhado.",
    h1: "IA e Análise — avaliação inteligente de cada atendimento da sua operação",
    subtitle: "A IA avalia cada atendimento automaticamente: cordialidade, agilidade, conhecimento, resolução e profissionalismo. Scoring por atendimento, feedback detalhado e pontos de melhoria.",
    features: [
      { title: "Avaliação automática por IA", description: "Cada atendimento recebe pontuação em cordialidade, agilidade, conhecimento, clareza, resolução e profissionalismo." },
      { title: "Feedback automatizado por agente", description: "Cada agente recebe avaliação sem o gestor precisar ouvir cada chamada ou ler cada conversa." },
      { title: "Identificação de treinamento", description: "A IA aponta quais habilidades de cada agente precisam de desenvolvimento." },
      { title: "Benchmarking interno", description: "Compare agentes e equipes com métricas objetivas geradas pela IA." },
      { title: "Análise de voz E chat", description: "Avaliação unificada para ambos os canais — uma IA para toda a operação." },
      { title: "Compliance automatizado", description: "Garanta que 100% dos atendimentos seguem as políticas da empresa, não apenas amostras." },
    ],
    faqs: [
      { question: "A IA analisa voz e chat?", answer: "Sim, avaliação unificada para ambos os canais." },
      { question: "Como configuro os critérios de avaliação?", answer: "Via prompts personalizáveis por departamento no painel." },
      { question: "O agente vê sua avaliação?", answer: "Configurável pelo gestor — pode usar para feedback individual ou apenas para gestão." },
      { question: "A IA substitui o supervisor?", answer: "Não, complementa. Analisa 100% dos atendimentos, liberando o supervisor para casos críticos." },
      { question: "Qual a diferença entre IA Generativa e IA de Análise?", answer: "A Generativa atende clientes (chatbot). A de Análise avalia a qualidade do atendimento humano depois que ele acontece." },
    ],
    relatedSlugs: ["dashboard", "gestao-equipes", "atendimento-unificado"],
  },
  {
    slug: "canais",
    title: "12 Canais Integrados",
    metaTitle: "12 Canais de Atendimento Integrados — Voz, WhatsApp, Instagram e Mais | Omni",
    metaDescription: "12 canais em uma plataforma: WhatsApp, Instagram, Messenger, Telegram, E-mail, LiveChat, Google Chat, Reclame Aqui, Mercado Livre, WebMotors + Telefonia.",
    h1: "12 canais de atendimento. Uma plataforma. Uma experiência para o cliente.",
    subtitle: "WhatsApp, Instagram, Messenger, Telegram, E-mail, LiveChat, Google Chat, Reclame Aqui, Mercado Livre, WebMotors + Telefonia (PABX + Call Center). Tudo em um painel.",
    features: [
      { title: "WhatsApp Business API", description: "API oficial Meta, múltiplos números, templates e distribuição inteligente." },
      { title: "Instagram, Messenger, Telegram", description: "DMs, respostas a stories, mensagens de página e canal completo — tudo centralizado." },
      { title: "E-mail e Google Chat", description: "Recebimento, distribuição e resposta por e-mail e Google Chat pelo painel." },
      { title: "LiveChat para Site", description: "Widget de chat no site com chatbot e IA integrados." },
      { title: "Marketplace (Reclame Aqui, ML, WebMotors)", description: "Reclamações, mensagens de compradores e leads automotivos centralizados." },
      { title: "Telefonia (PABX + Call Center)", description: "Ramais, URA, filas inteligentes, discador e monitoramento em tempo real." },
    ],
    faqs: [
      { question: "Preciso usar todos os 12 canais?", answer: "Não, você ativa apenas os que sua operação precisa." },
      { question: "Posso adicionar canais depois?", answer: "Sim, canais são ativáveis sob demanda." },
      { question: "Cada canal tem chatbot próprio?", answer: "Sim, fluxos independentes por canal." },
      { question: "Se já tenho PABX, posso usar só os canais de chat?", answer: "Sim, os canais de voz são opcionais." },
      { question: "O atendente precisa de uma tela por canal?", answer: "Não, todos os canais ficam na mesma tela de atendimento." },
    ],
    relatedSlugs: ["atendimento-unificado", "dashboard", "enterprise"],
  },
  {
    slug: "enterprise",
    title: "Para Grandes Operações",
    metaTitle: "Plataforma Omnichannel para Grandes Operações — Enterprise | Omni",
    metaDescription: "Solução omnichannel escalável para operações de 50 a 500+ posições. API e webhooks, desenvolvimento customizado, integrações enterprise e SLA dedicado.",
    h1: "Mensageria Enterprise — para operações que exigem escala e personalização",
    subtitle: "De 50 a 500+ posições de atendimento. API e webhooks abertos, desenvolvimento customizado, +100 integrações nativas, SLA dedicado e escalabilidade sob demanda.",
    features: [
      { title: "Escalabilidade", description: "De 50 a 500+ posições sem mudança de plataforma. Adicione agentes sob demanda." },
      { title: "API e Webhooks abertos", description: "Integração com qualquer sistema: CRM, ERP, BI, billing e sistemas legados." },
      { title: "Desenvolvimento customizado", description: "Time de desenvolvimento ERA para integrações sob medida da sua operação." },
      { title: "+100 integrações nativas", description: "IXC, Salesforce, Zendesk, Totvs, Hubspot, MK Solutions, Microsoft Teams e mais." },
      { title: "Gravação por 1 ano", description: "Armazenamento de gravações para compliance, auditoria e treinamento." },
      { title: "Dashboard para TV", description: "Gestão visual em telas grandes para operações com múltiplas filas." },
    ],
    faqs: [
      { question: "O Omni escala para 500+ posições?", answer: "Sim, sem mudança de plataforma ou migração." },
      { question: "Posso integrar com sistemas legados?", answer: "Sim, via API/webhooks abertos + desenvolvimento customizado." },
      { question: "Tem SLA dedicado para enterprise?", answer: "Sim, com suporte humano 24x7 e onboarding assistido." },
      { question: "A plataforma funciona multi-site?", answer: "Sim, com gestão centralizada e supervisores por fila/departamento." },
      { question: "Quais segmentos usam o Enterprise?", answer: "Provedores de internet, saúde, financeiro, telecomunicações, varejo e e-commerce." },
    ],
    relatedSlugs: ["canais", "ia-analise", "dashboard"],
  },
]

export const hubFaqs = [
  { question: "Qual a diferença entre Omni e Chat + Voz?", answer: "O Omni não é a soma dos dois — é uma plataforma unificada com funcionalidades exclusivas: transição entre canais, histórico único, dashboard consolidado voz + chat, IA de análise e agentes multi-skill." },
  { question: "Preciso contratar Chat e Voz separados antes?", answer: "Não. O Omni é um produto independente que já inclui tudo." },
  { question: "Quantos canais o Omni suporta?", answer: "12 canais: WhatsApp, Instagram, Messenger, Telegram, E-mail, LiveChat, Google Chat, Reclame Aqui, Mercado Livre, WebMotors + telefonia (PABX + Call Center)." },
  { question: "Para qual tamanho de empresa o Omni é indicado?", answer: "De médias a grandes operações (20 a 500+ posições), especialmente quem precisa unificar voz e chat com gestão integrada." },
  { question: "O Omni tem IA?", answer: "Sim, duas: IA Generativa (atende clientes 24/7) e IA de Análise (avalia a qualidade do atendimento humano automaticamente)." },
]

export const comparisonData = [
  { feature: "Canais de mensagem (WhatsApp, IG, etc.)", chat: true, voz: false, omni: true },
  { feature: "Telefonia (PABX, URA, Call Center)", chat: false, voz: true, omni: true },
  { feature: "Dashboard unificado voz + chat", chat: false, voz: false, omni: true },
  { feature: "Histórico único do cliente (todos os canais)", chat: false, voz: false, omni: true },
  { feature: "Transição WhatsApp → Telefone sem perder contexto", chat: false, voz: false, omni: true },
  { feature: "Agentes multi-skill voz + chat", chat: false, voz: false, omni: true },
  { feature: "IA análise de atendimento com scoring", chat: false, voz: false, omni: true },
]

export function getOmniPageBySlug(slug: string): EraOmniPage | undefined {
  return eraOmniPages.find((p) => p.slug === slug)
}

export function getOmniRelatedPages(slugs: string[]): EraOmniPage[] {
  return slugs.map((s) => eraOmniPages.find((p) => p.slug === s)!).filter(Boolean)
}
