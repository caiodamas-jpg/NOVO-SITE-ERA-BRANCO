export interface EraVozPage {
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

export const eraVozPages: EraVozPage[] = [
  {
    slug: "pabx",
    title: "PABX em Nuvem",
    metaTitle: "PABX em Nuvem | PABX Virtual para Empresas — Substitua seu PABX Físico | ERA",
    metaDescription: "PABX em nuvem completo: PABX virtual com ramais ilimitados, URA inteligente, filas de call center, discador preditivo, monitoramento com sussurro e CTI. Substitua seu PABX físico sem hardware.",
    h1: "PABX em Nuvem — Substitua seu PABX físico por uma solução virtual completa",
    subtitle: "PABX virtual 100% em nuvem para empresas de todos os portes. Ramais ilimitados, URA multinível, filas inteligentes de call center, discador preditivo, monitoramento em tempo real e integração com +100 CRMs. Sem hardware, sem manutenção — escale de 5 a 500+ ramais sob demanda.",
    features: [
      { title: "PABX virtual sem hardware", description: "Toda a sua telefonia corporativa na nuvem. Sem equipamentos físicos, sem manutenção. Escale ramais sob demanda com custo previsível." },
      { title: "Ramais ilimitados com ramal no app", description: "Crie ramais em lote ou individualmente. Cada colaborador pode usar o ramal no celular via app — trabalhe de qualquer lugar." },
      { title: "URA inteligente multinível", description: "Atendimento automatizado com múltiplos níveis, discagem direta (cut-through), regras de horário e saudação personalizada." },
      { title: "Filas inteligentes com distribuição por skills", description: "Distribua chamadas por competência do agente, prioridade de fila e nível de serviço configurável. 6 estratégias de distribuição." },
      { title: "Monitoramento em tempo real com sussurro", description: "Supervisores escutam, sussurram orientações e intervêm na chamada ao vivo. Dashboards por fila com TMA, TME e nível de serviço." },
      { title: "CTI com pop-up de dados do CRM", description: "Informações do cliente aparecem em tela antes mesmo do atendente atender. Integração nativa com +100 CRMs e ERPs." },
    ],
    faqs: [
      { question: "O PABX em nuvem da ERA substitui meu PABX físico?", answer: "Sim. O PABX virtual da ERA substitui completamente seu PABX físico, com mais recursos, sem hardware e com escalabilidade imediata." },
      { question: "Qual a diferença entre PABX em nuvem e PABX virtual?", answer: "São a mesma coisa. PABX em nuvem (ou PABX virtual) significa que toda a telefonia roda em servidores na nuvem, sem necessidade de equipamentos físicos na sua empresa." },
      { question: "Preciso de hardware para usar o PABX virtual?", answer: "Não. A solução é 100% em nuvem — só precisa de internet e headset. Opcionalmente, use telefones IP ou o app no celular." },
      { question: "Quantos ramais o PABX em nuvem suporta?", answer: "Ilimitados. De 5 a 500+ ramais, escaláveis sob demanda sem trocar de plano de infraestrutura." },
      { question: "O PABX virtual funciona com minha operadora?", answer: "Sim, suporta gateways SIP registrados e por IP confiável com múltiplas operadoras e redundância automática." },
      { question: "O supervisor consegue intervir na chamada ao vivo?", answer: "Sim, com escuta silenciosa, sussurro (só o agente ouve) e intervenção (conferência a três)." },
    ],
    relatedSlugs: ["call-center", "monitoramento", "cti"],
  },
  {
    slug: "telefonia",
    title: "Telefonia em Nuvem",
    metaTitle: "Telefonia em Nuvem para Empresas — PABX Virtual, Ramais e Rotas | ERA",
    metaDescription: "PABX virtual completo: ramais ilimitados, gateways SIP com redundância, rotas de entrada/saída, siga-me cascateado, caixa postal por e-mail e ramal no app.",
    h1: "Telefonia em nuvem — PABX virtual completo para sua empresa",
    subtitle: "Ramais ilimitados em nuvem, gateways SIP com redundância, rotas de entrada e saída com failover, siga-me cascateado, caixa postal e ramal no app do celular.",
    features: [
      { title: "Ramais ilimitados em nuvem", description: "Criação individual ou em lote, alias numérico, vinculação de usuário e ramal no app." },
      { title: "Gateways SIP com redundância", description: "Gateway registrado ou por IP confiável, failover automático entre operadoras." },
      { title: "Rotas de entrada e saída", description: "Direcionamento para ramal ou URA, binagem personalizada e redundância." },
      { title: "Siga-me cascateado", description: "Ramal, celular, backup, retorno — encaminhamento inteligente." },
      { title: "Caixa postal por e-mail", description: "Áudio enviado automaticamente por e-mail com saudação personalizada." },
      { title: "Cadeado eletrônico", description: "Bloqueio por modalidade (local, LDN, LDI) com senha por ramal." },
    ],
    faqs: [
      { question: "Posso usar ramal no celular?", answer: "Sim, via app (Zoiper/Acrobits) com auto-provisionamento por QR Code." },
      { question: "Se minha operadora cair, o que acontece?", answer: "O sistema tenta automaticamente a próxima operadora configurada (failover)." },
      { question: "O siga-me funciona para celular externo?", answer: "Sim, com encaminhamento cascateado para múltiplos números." },
      { question: "Posso bloquear ligações internacionais por ramal?", answer: "Sim, com bloqueio por modalidade e cadeado eletrônico." },
      { question: "A caixa postal envia áudio por e-mail?", answer: "Sim, com opção de manter a mensagem no ramal também." },
    ],
    relatedSlugs: ["ura", "relatorios", "pabx"],
  },
  {
    slug: "ura",
    title: "URA Inteligente",
    metaTitle: "URA Inteligente Multinível — Atendimento Automatizado por Voz | ERA",
    metaDescription: "URA com saudação longa e curta, múltiplos níveis, discagem direta (cut-through), timeout configurável, regras de tempo e integração com filas.",
    h1: "URA Inteligente — Atendimento automatizado que direciona com precisão",
    subtitle: "URA multinível com saudação longa e curta, discagem direta (cut-through), timeout configurável, regras de tempo por departamento e aviso técnico para situações de crise.",
    features: [
      { title: "URA multinível", description: "URAs encadeadas em múltiplos níveis com opções de 1 a 9, dígitos duplos e jogo da velha." },
      { title: "Discagem direta (cut-through)", description: "Cliente que sabe o ramal digita diretamente, ignorando as opções da URA." },
      { title: "Regras de tempo", description: "Horário de expediente por dia, feriados e ações fora do expediente configuráveis." },
      { title: "Timeout configurável", description: "Loop, outra URA, áudio ou transferência para fila humana quando o cliente não digita." },
      { title: "Aviso técnico", description: "Mensagem automática antes do atendimento para situações de crise ou instabilidade." },
      { title: "Saudação longa e curta", description: "Saudação completa na primeira vez, resumida no loop para agilizar o atendimento." },
    ],
    faqs: [
      { question: "A URA pode ter múltiplos níveis?", answer: "Sim, URAs podem ser encadeadas em múltiplos níveis." },
      { question: "O que é cut-through?", answer: "Permite que o cliente digite diretamente o ramal, pulando as opções da URA." },
      { question: "Posso ter horários diferentes por departamento?", answer: "Sim, regras de tempo independentes por departamento." },
      { question: "O que acontece se o cliente não digitar nada?", answer: "Conforme configurado: loop, transferência para fila ou reprodução de áudio." },
      { question: "Posso colocar um aviso de emergência na URA?", answer: "Sim, o aviso técnico permite informar clientes sobre problemas antes do atendimento." },
    ],
    relatedSlugs: ["telefonia", "call-center", "pabx"],
  },
  {
    slug: "call-center",
    title: "Call Center",
    metaTitle: "Call Center em Nuvem — Filas Inteligentes, Callback e Agentes Multi-skill | ERA",
    metaDescription: "Monte seu call center com 6 estratégias de distribuição, agentes multi-skill, callback automático, pesquisa de satisfação e nível de serviço.",
    h1: "Call Center em nuvem — filas inteligentes para atendimento profissional",
    subtitle: "6 estratégias de distribuição de chamadas, agentes multi-skill, callback automático inteligente, pesquisa de satisfação, pausas configuráveis e nível de serviço.",
    features: [
      { title: "6 estratégias de distribuição", description: "Simultânea, desocupado há mais tempo, menor TMA, menor número de chamadas, sequencial e aleatória." },
      { title: "Agentes multi-skill", description: "Atuar em múltiplas filas com posição e prioridade configuráveis por fila." },
      { title: "Callback automático", description: "Cliente desligou? O sistema retorna automaticamente. Se ligar de volta, cancela o callback." },
      { title: "Pesquisa de satisfação", description: "Transferência automática para pesquisa com múltiplas perguntas e escala de avaliação." },
      { title: "Pausas configuráveis", description: "Motivos, tempo máximo e lista de pausas independente por fila." },
      { title: "Nível de serviço", description: "Configurável de 5 a 180 segundos com transbordo para outra fila, callback ou URA." },
    ],
    faqs: [
      { question: "Quantas filas posso criar?", answer: "Ilimitadas. Cada fila tem configuração independente." },
      { question: "O agente pode atuar em mais de uma fila?", answer: "Sim, com multi-skill e relatórios separados por fila." },
      { question: "O que acontece quando a fila lota?", answer: "Configurável: mensagem + desliga, transbordo para outra fila, callback ou URA." },
      { question: "A pesquisa de satisfação é automática?", answer: "Sim, o cliente é transferido automaticamente ao final do atendimento." },
      { question: "Posso configurar pausas diferentes por fila?", answer: "Sim, cada fila pode ter seus motivos e tempos de pausa." },
    ],
    relatedSlugs: ["pabx", "discador", "monitoramento"],
  },
  {
    slug: "discador",
    title: "Discador Preditivo",
    metaTitle: "Discador Preditivo para Call Center — Discagem Automática | ERA",
    metaDescription: "Discador preditivo com alimentação via mailing, detecção de secretária eletrônica, campanhas de discagem e integração com filas de call center.",
    h1: "Discador Preditivo — aumente a produtividade das suas campanhas ativas",
    subtitle: "Discagem automática com detecção de secretária eletrônica, alimentação via mailing, campanhas organizadas e tabulação integrada. Addon do plano Voz Profissional.",
    features: [
      { title: "Discagem preditiva", description: "O sistema disca automaticamente antes do agente ficar livre, antecipando a disponibilidade." },
      { title: "Detecção de secretária", description: "Identifica automaticamente secretária eletrônica e caixa postal para otimizar tempo." },
      { title: "Campanhas com mailing", description: "Upload de listas de contatos e organização por campanha com relatórios." },
      { title: "Tabulação integrada", description: "Agente classifica cada ligação: sem interesse, retornar, vendido, etc." },
      { title: "Menos tempo ocioso", description: "Agentes recebem chamadas já conectadas, sem esperar discagem." },
      { title: "Relatórios de campanha", description: "Métricas de contatos, atendidos, tabulações e performance por campanha." },
    ],
    faqs: [
      { question: "O discador é automático?", answer: "Sim, o sistema disca automaticamente com base na disponibilidade dos agentes." },
      { question: "Detecta secretária eletrônica?", answer: "Sim, com detecção automática para otimizar o tempo dos agentes." },
      { question: "Preciso de um plano específico?", answer: "O Discador Preditivo é um addon disponível no plano Voz Profissional." },
      { question: "Como carrego os contatos?", answer: "Via mailing/listas de discagem configuráveis por campanha." },
      { question: "Tem relatório das ligações do discador?", answer: "Sim, com tabulações por resultado e métricas de campanha." },
    ],
    relatedSlugs: ["call-center", "cti", "pabx"],
  },
  {
    slug: "monitoramento",
    title: "Monitoramento e Supervisão",
    metaTitle: "Monitoramento de Call Center em Tempo Real — Dashboards, Sussurro e Intervenção | ERA",
    metaDescription: "Monitore chamadas em tempo real: escuta silenciosa, sussurro para orientar agentes e intervenção ao vivo. Dashboards com TMA, TME e nível de serviço.",
    h1: "Monitoramento e supervisão — controle total da sua operação em tempo real",
    subtitle: "Escuta silenciosa, sussurro, intervenção ao vivo, dashboards por fila com TMA, TME, nível de serviço e dashboards expansíveis para TV.",
    features: [
      { title: "Escuta silenciosa", description: "Supervisor ouve a conversa entre agente e cliente sem ser percebido." },
      { title: "Sussurro", description: "Supervisor fala com o agente durante a chamada sem que o cliente ouça (coaching ao vivo)." },
      { title: "Intervenção/Conferência", description: "Supervisor entra na chamada e fala com ambos (conferência a três)." },
      { title: "Dashboard por fila", description: "Chamadas em fila, TMA, TME, nível de serviço e resumo do dia em tempo real." },
      { title: "Dashboard para TV", description: "Dashboards expansíveis para exibição em televisores na operação." },
      { title: "Painel do operador", description: "Status de todos os ramais, captura de chamadas e transferência pelo painel." },
    ],
    faqs: [
      { question: "O supervisor pode ouvir a chamada sem o cliente saber?", answer: "Sim, com escuta silenciosa." },
      { question: "O que é sussurro?", answer: "O supervisor fala com o agente durante a chamada, sem que o cliente ouça." },
      { question: "Posso exibir o dashboard em uma TV?", answer: "Sim, todos os dashboards são expansíveis para exibição em TV." },
      { question: "O supervisor vê os dados de todas as filas?", answer: "Configurável — pode ser restrito às filas que supervisiona." },
      { question: "Posso capturar chamadas de outros ramais?", answer: "Sim, via painel do operador, dentro do mesmo grupo." },
    ],
    relatedSlugs: ["call-center", "relatorios", "pabx"],
  },
  {
    slug: "relatorios",
    title: "Gravação e Relatórios",
    metaTitle: "Gravação de Chamadas e Relatórios de Call Center — Performance e CDR | ERA",
    metaDescription: "Grave todas as chamadas por até 1 ano. Relatórios detalhados: agente histórico, fila performance, HMM, chamadas abandonadas, pausas e consolidação.",
    h1: "Gravação de chamadas e relatórios — dados para decisões melhores",
    subtitle: "Gravação de todas as chamadas com armazenamento até 1 ano. Relatórios de performance por agente, fila, HMM, tabulações, pausas e chamadas abandonadas.",
    features: [
      { title: "Gravação de chamadas", description: "Habilitável por ramal e fila, acesso imediato, armazenamento de 30 dias a 1 ano." },
      { title: "Registro de chamadas (CDR)", description: "Histórico completo com origem, destino, duração e gravação. Filtros por período." },
      { title: "Agente histórico", description: "Todas as ações do colaborador: chamadas, pausas, estados. Exportável em CSV." },
      { title: "Fila performance", description: "Atendidas, abandonadas, nível de serviço com gráficos diários." },
      { title: "HMM (Horário de Maior Movimento)", description: "Movimento hora a hora ou a cada 15 minutos para otimizar escalas." },
      { title: "Consolidação dos agentes", description: "Tempo trabalhado, falado, pausas, TMA individual. Ideal para bonificações." },
    ],
    faqs: [
      { question: "Por quanto tempo as gravações ficam disponíveis?", answer: "30 dias no plano Básico, 1 ano no Padrão e Profissional." },
      { question: "Posso exportar os relatórios?", answer: "Sim, todos exportáveis em CSV." },
      { question: "O que é o relatório HMM?", answer: "Mostra o movimento por hora/15min — essencial para otimizar escalas." },
      { question: "As gravações são acessíveis em tempo real?", answer: "Sim, disponíveis imediatamente após o término da chamada." },
      { question: "Posso ver o TMA individual de cada agente?", answer: "Sim, no relatório de Consolidação dos Agentes." },
    ],
    relatedSlugs: ["monitoramento", "call-center", "pabx"],
  },
  {
    slug: "cti",
    title: "CTI e Integrações",
    metaTitle: "CTI — Pop-up de Dados do Cliente no Atendimento | Integração com CRM | ERA",
    metaDescription: "CTI completo: pop-up com dados do cliente antes do atendimento, tabulação de chamadas, integração com CRM/ERP. +100 integrações nativas.",
    h1: "CTI — Dados do cliente na tela antes mesmo de atender",
    subtitle: "Quando uma chamada chega, o CTI busca automaticamente dados do cliente no CRM/ERP e exibe na tela do agente antes do atendimento. +100 integrações nativas.",
    features: [
      { title: "Pop-up automático de dados", description: "Nome, CPF, status da conta, plano e histórico aparecem antes de atender." },
      { title: "Tabulação de chamadas", description: "Agente classifica o atendimento ao final: resolvido, retornar, cancelamento, etc." },
      { title: "+100 integrações nativas", description: "IXC, Salesforce, Zendesk, Totvs, Hubspot, MK Solutions e mais." },
      { title: "API e Webhooks abertos", description: "Desenvolvimento customizado para integrações específicas da sua operação." },
      { title: "CTI + Discador", description: "Dados do mailing e campanha exibidos automaticamente quando a chamada vem do discador." },
      { title: "Histórico de atendimentos", description: "Todos os contatos anteriores do cliente acessíveis na tela do agente." },
    ],
    faqs: [
      { question: "O CTI funciona com meu CRM?", answer: "Sim, com +100 integrações nativas. Se seu CRM não estiver na lista, desenvolvemos via API." },
      { question: "O agente vê os dados antes de atender?", answer: "Sim, o pop-up aparece automaticamente quando a chamada chega." },
      { question: "Posso customizar as tabulações?", answer: "Sim, completamente customizáveis por fila e departamento." },
      { question: "O CTI funciona com o discador?", answer: "Sim, exibe dados do mailing e da campanha." },
      { question: "Preciso de desenvolvimento para integrar?", answer: "Depende — muitas integrações são nativas (marketplace). Outras podem ser customizadas." },
    ],
    relatedSlugs: ["pabx", "call-center", "discador"],
  },
  {
    slug: "campanhas",
    title: "Campanhas Outbound",
    metaTitle: "Campanhas Outbound — Voz, Broadcast, Cobrança e Upsell | ERA",
    metaDescription: "Crie campanhas outbound de voz e broadcast multicanal. Worker dedicado, discagem automática, CRM integrado e relatórios de conversão.",
    h1: "Campanhas outbound com worker dedicado e CRM integrado",
    subtitle: "Campanhas de voz outbound e broadcast multicanal (WhatsApp, SMS, Email) com worker de processamento em background e integração nativa ao CRM.",
    features: [
      { title: "Campanhas de voz outbound", description: "Crie campanhas com listas do CRM, discagem automática, agendamento por dia/horário e worker dedicado de processamento." },
      { title: "Broadcast multicanal", description: "Campanhas de broadcast por WhatsApp, SMS e Email integradas ao CRM com segmentação por pipeline e tags." },
      { title: "Campanhas de cobrança", description: "Módulo específico para cobrança com tabulação de resultados, follow-up automático e relatório de recuperação." },
      { title: "Upsell e cross-sell", description: "Campanhas de upsell segmentadas por produto, ticket e histórico de compras diretamente do CRM." },
      { title: "Worker em background", description: "Processamento de campanhas em background com fila, retry automático e controle de concorrência." },
      { title: "Relatórios de conversão", description: "Taxa de contato, conversão, receita por campanha, performance por agente e ROI detalhado." },
    ],
    faqs: [
      { question: "Posso criar campanhas de cobrança automatizadas?", answer: "Sim, com discagem automática, mensagens pré-gravadas e tabulação integrada para classificar cada contato." },
      { question: "Os scripts podem mudar conforme o perfil do cliente?", answer: "Sim, os scripts dinâmicos suportam variáveis do CRM e ramificações condicionais baseadas nas respostas." },
      { question: "Quais relatórios de conversão estão disponíveis?", answer: "Taxa de conversão, custo por contato, receita gerada, ROI por campanha e performance por agente." },
      { question: "As chamadas das campanhas são gravadas?", answer: "Sim, todas as chamadas são gravadas automaticamente com armazenamento configurável de 30 dias a 1 ano." },
      { question: "Posso agendar campanhas para horários específicos?", answer: "Sim, com controle de horário por dia da semana, fuso horário e respeito a listas de não-perturbe." },
    ],
    relatedSlugs: ["call-center", "discador", "monitoramento"],
  },
]

export const hubFeatures = [
  "6 estratégias de distribuição de chamadas",
  "Callback automático inteligente",
  "Pesquisa de satisfação integrada",
  "Relatórios de performance por agente",
  "Dashboards expansíveis para TV",
  "Discador preditivo (addon)",
  "CTI com pop-up de dados do CRM",
  "Gravação de chamadas por até 1 ano",
]

export function getVozPageBySlug(slug: string): EraVozPage | undefined {
  return eraVozPages.find((p) => p.slug === slug)
}

export function getVozRelatedPages(slugs: string[]): EraVozPage[] {
  return slugs.map((s) => eraVozPages.find((p) => p.slug === s)!).filter(Boolean)
}
