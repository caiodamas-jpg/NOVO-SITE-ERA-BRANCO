export interface EraChatPage {
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

export const eraChatPages: EraChatPage[] = [
  {
    slug: "whatsapp",
    title: "WhatsApp Business",
    metaTitle: "WhatsApp Business API para Empresas — Múltiplos Atendentes e Chatbot | ERA",
    metaDescription: "Atendimento profissional por WhatsApp com API oficial Meta, até 3 números, chatbot, IA, distribuição inteligente e relatórios.",
    h1: "WhatsApp Business API para atendimento profissional",
    subtitle: "Conecte a API oficial da Meta, gerencie múltiplos números, distribua conversas automaticamente e atenda com chatbot e IA generativa.",
    features: [
      { title: "API Oficial da Meta", description: "Conexão direta com a API oficial do WhatsApp Business. Ideal para empresas com conta verificada." },
      { title: "Até 3 números simultâneos", description: "Gerencie múltiplos números de WhatsApp no mesmo painel com distribuição automática." },
      { title: "Distribuição inteligente", description: "Distribua conversas automaticamente entre atendentes por departamento, skill ou round-robin." },
      { title: "Templates de mensagens", description: "Envie templates pré-aprovados pela Meta com variáveis dinâmicas para campanhas e notificações." },
      { title: "Direct Chat (carterização)", description: "Vincule clientes a atendentes específicos para atendimento personalizado e contínuo." },
      { title: "Monitoramento em tempo real", description: "Supervisores acompanham todas as conversas em tempo real com intervenção quando necessário." },
    ],
    faqs: [
      { question: "O Chat usa a API oficial do WhatsApp?", answer: "Sim, conexão direta via API oficial da Meta." },
      { question: "Posso usar mais de um número de WhatsApp?", answer: "Sim, até 3 números simultâneos no plano Padrão e Profissional." },
      { question: "Quantos atendentes podem usar o mesmo número?", answer: "Ilimitado. A distribuição é automática entre os atendentes cadastrados." },
      { question: "O WhatsApp da ERA integra com meu CRM?", answer: "Sim, o chatbot pode consultar CRMs e ERPs via API e a plataforma integra com +100 sistemas." },
      { question: "Posso enviar mensagens em massa pelo WhatsApp?", answer: "Sim, via disparos agendados com templates aprovados pela Meta." },
    ],
    relatedSlugs: ["chatbot", "disparos", "ia-generativa"],
  },
  {
    slug: "redes-sociais",
    title: "Instagram e Redes Sociais",
    metaTitle: "Atendimento por Instagram, Messenger e Telegram para Empresas | ERA",
    metaDescription: "Centralize o atendimento de Instagram Direct, Facebook Messenger, Telegram, Google Chat e e-mail em um único painel. Distribuição automática, chatbot e relatórios.",
    h1: "Atendimento por Instagram, Messenger e Telegram em um painel",
    subtitle: "Centralize mensagens de Instagram Direct, Facebook Messenger, Telegram, Google Chat e e-mail em um único painel com distribuição automática.",
    features: [
      { title: "Instagram Direct", description: "Gerencie mensagens diretas do Instagram. Atenda DMs, responda stories e organize por departamento." },
      { title: "Facebook Messenger", description: "Conexão direta com o Messenger. Atenda clientes que chegam pela página do Facebook." },
      { title: "Telegram", description: "Canal de atendimento por Telegram integrado ao mesmo painel." },
      { title: "Google Chat", description: "Integração com Google Chat para gerenciamento de conversas corporativas." },
      { title: "E-mail", description: "Recebimento e distribuição de e-mails para grupos ou usuários específicos, com resposta direta pela plataforma." },
      { title: "Chatbot por canal", description: "Fluxos de chatbot independentes por rede social para atendimento personalizado." },
    ],
    faqs: [
      { question: "Posso atender Instagram e WhatsApp no mesmo painel?", answer: "Sim, todos os canais ficam na mesma tela do atendente." },
      { question: "O chatbot funciona no Instagram também?", answer: "Sim, é possível criar fluxos separados por rede social." },
      { question: "Posso ter departamentos diferentes por canal?", answer: "Sim, cada canal pode direcionar para departamentos específicos." },
      { question: "O atendente sabe de qual rede social veio a mensagem?", answer: "Sim, cada conversa exibe um badge visual do canal de origem." },
      { question: "Posso responder e-mails pela plataforma?", answer: "Sim, e-mails são distribuídos e respondidos diretamente pela ERA." },
    ],
    relatedSlugs: ["whatsapp", "livechat", "marketplace"],
  },
  {
    slug: "chatbot",
    title: "Chatbot e Automação",
    metaTitle: "Chatbot para WhatsApp e Redes Sociais — Automação de Atendimento | ERA",
    metaDescription: "Crie chatbots com árvore de decisões para WhatsApp, Instagram, Messenger e Telegram. Integre com CRM/ERP, consulte boletos e qualifique leads automaticamente.",
    h1: "Chatbot e automação de atendimento para todos os canais",
    subtitle: "Crie fluxos de atendimento automatizado com árvore de decisões visual, sem precisar programar. Integre com CRM/ERP para consultas em tempo real.",
    features: [
      { title: "Recepcionar e direcionar", description: "Menu de opções que guia o cliente para o departamento certo automaticamente." },
      { title: "Consultar sistemas", description: "Via API: gerar boletos, consultar cadastro por CPF/CNPJ, verificar status de pedidos." },
      { title: "Qualificar leads", description: "Coletar nome, empresa, e-mail e necessidade antes de transferir para um humano." },
      { title: "Tirar dúvidas", description: "Responder perguntas frequentes com informações pré-configuradas." },
      { title: "Agendar retorno", description: "Se não houver atendente disponível, agendar callback ou encerrar com mensagem." },
      { title: "Pesquisa de satisfação", description: "Ao final do atendimento, coletar avaliação do cliente automaticamente." },
    ],
    faqs: [
      { question: "Preciso saber programar para criar o chatbot?", answer: "Não, a criação é visual com árvore de decisões no painel." },
      { question: "O chatbot funciona em todos os canais?", answer: "Sim, com fluxos independentes por rede social." },
      { question: "O chatbot pode consultar meu ERP?", answer: "Sim, via integrações API (boletos, cadastro, status)." },
      { question: "O que acontece quando o chatbot não resolve?", answer: "Transfere para atendente humano com todo o contexto da conversa." },
      { question: "Posso ter chatbots diferentes por departamento?", answer: "Sim, cada departamento/canal pode ter seu fluxo." },
    ],
    relatedSlugs: ["ia-generativa", "whatsapp", "redes-sociais"],
  },
  {
    slug: "ia-generativa",
    title: "IA Generativa",
    metaTitle: "IA Generativa para Atendimento — Assistentes Virtuais 24/7 | ERA",
    metaDescription: "Crie assistentes virtuais com IA generativa treinados com as diretrizes da sua empresa. Atendimento 24/7, qualificação de leads, agendamento e integração com CRM.",
    h1: "IA Generativa — Assistentes virtuais que atendem como sua equipe",
    subtitle: "Diferente do chatbot tradicional, a IA Generativa conduz conversas orgânicas e naturais, treinada com o contexto e tom de voz da sua empresa.",
    features: [
      { title: "Atendimento 24/7", description: "Recepciona clientes a qualquer hora, mantendo conversa fluida e natural." },
      { title: "Treinamento com diretrizes", description: "Configurada com o contexto da empresa: produtos, serviços, políticas e tom de voz." },
      { title: "Qualificação de leads", description: "Solicita nome, empresa, quantidade de posições, e-mail e necessidade automaticamente." },
      { title: "Agendamento", description: "Integra com sistemas de agendamento para marcar reuniões automaticamente." },
      { title: "Integração com CRM", description: "Abre cards, atualiza cadastros e registra interações no CRM." },
      { title: "Ambiente de testes", description: "Tela dedicada para testar a conversa com o bot antes de ativar em produção." },
    ],
    faqs: [
      { question: "A IA Generativa substitui o atendente humano?", answer: "Não, ela complementa. Pode atender sozinha ou transferir para humano quando necessário." },
      { question: "Como treino a IA com as informações da minha empresa?", answer: "Via prompts e diretrizes no painel — defina o contexto, tom de voz e regras." },
      { question: "A IA pode agendar reuniões?", answer: "Sim, integrando com sistemas de agendamento." },
      { question: "Quantas conversas a IA atende simultaneamente?", answer: "Ilimitadas, 24/7." },
      { question: "Posso testar a IA antes de colocar em produção?", answer: "Sim, há uma tela dedicada para testar conversas com o assistente." },
    ],
    relatedSlugs: ["chatbot", "whatsapp", "redes-sociais"],
  },
  {
    slug: "livechat",
    title: "LiveChat para Site",
    metaTitle: "LiveChat para Site — Widget de Chat com Chatbot e IA | ERA",
    metaDescription: "Instale um widget de chat no seu site com código simples. Personalize cores, logo e mensagens. Integre chatbot e IA para atendimento automatizado direto no site.",
    h1: "LiveChat para seu site — atenda visitantes em tempo real",
    subtitle: "Instale um widget de chat no seu site com código simples. Personalize cores, logo e mensagens. Integre chatbot e IA para atendimento automatizado.",
    features: [
      { title: "Instalação simples", description: "Copie e cole um código no HTML do seu site. Pronto para usar em minutos." },
      { title: "Personalização completa", description: "Adapte logo, cores e mensagens do widget à identidade visual do seu site." },
      { title: "Chatbot integrado", description: "Árvore de decisões e IA Generativa para tirar dúvidas automaticamente no site." },
      { title: "Dashboard dedicado", description: "Métricas de conversas: total, abertas, concluídas, tempo médio de resposta." },
      { title: "Distribuição automática", description: "Conversas do LiveChat são distribuídas entre atendentes da mesma forma que os outros canais." },
      { title: "Histórico por visitante", description: "Histórico completo de conversas por visitante com contexto preservado." },
    ],
    faqs: [
      { question: "Como instalo o LiveChat no meu site?", answer: "Basta copiar um código de instalação e colar no HTML do seu site." },
      { question: "Posso personalizar as cores do chat?", answer: "Sim, logo, cores e mensagens são totalmente customizáveis." },
      { question: "O LiveChat tem chatbot?", answer: "Sim, com árvore de decisões e IA Generativa integrada." },
      { question: "As conversas do LiveChat ficam no mesmo painel?", answer: "Sim, junto com WhatsApp, Instagram e todos os outros canais." },
      { question: "Tem relatórios do LiveChat?", answer: "Sim, dashboard dedicado com métricas de atendimento em tempo real." },
    ],
    relatedSlugs: ["chatbot", "ia-generativa", "redes-sociais"],
  },
  {
    slug: "marketplace",
    title: "Marketplace",
    metaTitle: "Atendimento Reclame Aqui, Mercado Livre e WebMotors Integrado | ERA",
    metaDescription: "Gerencie reclamações do Reclame Aqui, mensagens do Mercado Livre e leads do WebMotors no mesmo painel de atendimento.",
    h1: "Reclame Aqui, Mercado Livre e WebMotors no seu painel de atendimento",
    subtitle: "Centralize mensagens de marketplaces em um único painel com distribuição automática, relatórios e histórico unificado por cliente.",
    features: [
      { title: "Reclame Aqui", description: "Receba e gerencie reclamações diretamente no painel ERA. Responda sem sair da plataforma." },
      { title: "Mercado Livre", description: "Gerencie mensagens de compradores e vendedores. Responda perguntas e acompanhe pós-venda." },
      { title: "WebMotors", description: "Receba leads do WebMotors e atenda diretamente pelo painel. Ideal para concessionárias." },
      { title: "Histórico unificado", description: "Mesmo CPF/nome em diferentes plataformas — tudo em um só histórico." },
      { title: "Relatórios por canal", description: "Métricas separadas por marketplace com dashboards dedicados." },
      { title: "Chatbot para marketplace", description: "Fluxos automáticos podem ser configurados por canal de marketplace." },
    ],
    faqs: [
      { question: "O Chat integra com o Reclame Aqui?", answer: "Sim, reclamações chegam direto no painel e podem ser respondidas pela plataforma." },
      { question: "Posso atender Mercado Livre e WhatsApp no mesmo painel?", answer: "Sim, todos os canais ficam na mesma tela." },
      { question: "O WebMotors é integrado automaticamente?", answer: "Sim, leads e mensagens do WebMotors são centralizados no painel." },
      { question: "Tem relatório separado por marketplace?", answer: "Sim, métricas por canal com dashboards dedicados." },
      { question: "O chatbot funciona nos canais de marketplace?", answer: "Sim, fluxos automáticos podem ser configurados por canal." },
    ],
    relatedSlugs: ["redes-sociais", "whatsapp", "chatbot"],
  },
  {
    slug: "disparos",
    title: "Disparos e Templates",
    metaTitle: "Disparo de Mensagens em Massa no WhatsApp — Templates e Campanhas | ERA",
    metaDescription: "Envie mensagens em massa pelo WhatsApp com templates aprovados pela Meta. Campanhas de até 1.000 contatos, disparo cadenciado, agendamento e relatórios.",
    h1: "Disparos em massa e templates de mensagens pelo WhatsApp",
    subtitle: "Envie campanhas para até 1.000 contatos com templates aprovados pela Meta, disparo cadenciado anti-bloqueio e agendamento inteligente.",
    features: [
      { title: "Upload de lista CSV", description: "Importe sua lista de contatos via arquivo CSV para campanhas segmentadas." },
      { title: "Campanhas de até 1.000 contatos", description: "Envie mensagens em massa com controle de volume e cadência." },
      { title: "Disparo cadenciado", description: "5-10 minutos para 1.000 contatos — evita bloqueio da Meta automaticamente." },
      { title: "Templates com variáveis", description: "Templates com variáveis dinâmicas: nome, número do pedido, valor e mais." },
      { title: "Agendamento inteligente", description: "Agende envios para data e hora específicas, otimizando a janela de 24h do WhatsApp." },
      { title: "Histórico e métricas", description: "Relatório completo de envios com métricas de entrega e leitura." },
    ],
    faqs: [
      { question: "Posso enviar mensagens em massa pelo WhatsApp?", answer: "Sim, via disparos agendados com templates aprovados pela Meta." },
      { question: "Quantos contatos posso enviar por vez?", answer: "Até 1.000 contatos por campanha, com disparo cadenciado para evitar bloqueio." },
      { question: "Os templates precisam ser aprovados?", answer: "Sim, templates seguem as políticas da Meta e precisam de aprovação prévia." },
      { question: "Posso agendar o envio para uma data futura?", answer: "Sim, com agendamento inteligente para otimizar a janela de 24h." },
      { question: "Tem relatório dos disparos?", answer: "Sim, histórico completo de envios com métricas de entrega." },
    ],
    relatedSlugs: ["whatsapp", "chatbot", "ia-generativa"],
  },
  {
    slug: "sms",
    title: "SMS",
    metaTitle: "SMS para Empresas — API Explorer, SDKs e Créditos | ERA",
    metaDescription: "Envie SMS com API REST, explorer interativo, SDKs em 6 linguagens (curl, JS, Python, PHP, Ruby, C#), sistema de créditos e logs em tempo real.",
    h1: "SMS empresarial com API Explorer e créditos",
    subtitle: "API REST com explorer interativo, SDKs em 6 linguagens, sistema de créditos por organização e logs de entrega em tempo real.",
    features: [
      { title: "API Explorer interativo", description: "Teste envios de SMS direto no navegador com autenticação automática e visualização de responses em tempo real." },
      { title: "SDKs em 6 linguagens", description: "Exemplos prontos em curl, JavaScript, Python, PHP, Ruby e C# para integração imediata com seu sistema." },
      { title: "Sistema de créditos", description: "Saldo de créditos por organização com controle de consumo, recarga e histórico detalhado de uso." },
      { title: "Short code e long code", description: "Escolha entre short code (números curtos) ou long code para envios, com número virtual configurável." },
      { title: "Logs de entrega", description: "Histórico completo de SMS enviados com status de entrega, timestamps, filtros por período e destinatário." },
      { title: "Integração multicanal", description: "SMS integrado ao mesmo painel de WhatsApp, RCS, Email e Voz — envie por qualquer canal no mesmo workflow." },
    ],
    faqs: [
      { question: "Posso enviar SMS em massa pela plataforma ERA?", answer: "Sim, é possível enviar campanhas de SMS em massa com segmentação, agendamento e relatórios de entrega." },
      { question: "O SMS da ERA suporta envio de OTP?", answer: "Sim, a plataforma suporta envio de códigos de verificação (OTP) para autenticação de dois fatores e validação de cadastro." },
      { question: "Como integro o SMS ao meu sistema?", answer: "Via API REST documentada. Você pode integrar envio e recebimento de SMS ao seu CRM, ERP ou qualquer sistema." },
      { question: "Tem relatório de entrega dos SMS?", answer: "Sim, relatórios em tempo real com status de entrega, taxa de abertura e métricas detalhadas por campanha." },
      { question: "O SMS funciona junto com os outros canais da ERA?", answer: "Sim, o SMS é mais um canal integrado ao painel, funcionando junto com WhatsApp, e-mail e demais canais." },
    ],
    relatedSlugs: ["whatsapp", "disparos", "rcs"],
  },
  {
    slug: "rcs",
    title: "RCS",
    metaTitle: "RCS — Envio, Mídia, Botões Interativos e API | ERA",
    metaDescription: "Envie mensagens RCS ricas com 4 módulos: envio, mídia, botões interativos e API. Logs de entrega e métricas em tempo real.",
    h1: "RCS: envio, mídia, botões e API integrados",
    subtitle: "4 módulos dedicados: envio de mensagens, gestão de mídia, botões interativos e API Explorer — tudo com logs e métricas.",
    features: [
      { title: "Módulo de envio", description: "Envie mensagens RCS individuais ou em massa com preview em tempo real e controle de entrega." },
      { title: "Gestão de mídia", description: "Upload e gerenciamento de imagens, vídeos e áudios para usar nas mensagens RCS." },
      { title: "Botões interativos", description: "Crie botões de ação: ligar, abrir URL, responder, agendar. Configure ações, textos e ícones." },
      { title: "API Explorer RCS", description: "Teste envios de RCS direto no navegador com autenticação e exemplos de payloads prontos." },
      { title: "Logs detalhados", description: "Histórico completo de mensagens RCS com status de entrega, leitura e interação com botões." },
      { title: "Branding verificado Google", description: "Mensagens com logo, nome da empresa e selo de autenticidade do Google na caixa de entrada nativa." },
    ],
    faqs: [
      { question: "O que é RCS?", answer: "RCS (Rich Communication Services) é a evolução do SMS, permitindo mensagens ricas com imagens, botões e carrosséis na caixa de mensagens nativa do celular." },
      { question: "O RCS funciona em todos os celulares?", answer: "O RCS funciona em celulares Android com Google Messages. Em aparelhos sem suporte, a mensagem pode ser entregue como SMS." },
      { question: "Posso usar carrossel de produtos no RCS?", answer: "Sim, é possível enviar carrosséis com até 10 cards contendo imagem, título, descrição e botão de ação." },
      { question: "O RCS mostra o logo da minha empresa?", answer: "Sim, com o branding verificado do Google, suas mensagens exibem logo, nome da empresa e selo de autenticidade." },
      { question: "O RCS integra com os outros canais da ERA?", answer: "Sim, o RCS é mais um canal no painel unificado, funcionando junto com WhatsApp, SMS, e-mail e demais canais." },
    ],
    relatedSlugs: ["sms", "whatsapp", "disparos"],
  },
  {
    slug: "email",
    title: "Email Marketing",
    metaTitle: "Email Marketing — Dashboard, Campanhas, Segmentos e Formulários | ERA",
    metaDescription: "Plataforma completa de email marketing com 8 módulos: dashboard, remetentes, campanhas, contatos, templates visuais, segmentos, formulários e relatórios.",
    h1: "Email marketing completo com 8 módulos",
    subtitle: "Dashboard, remetentes, campanhas, contatos, templates visuais, segmentos, formulários de captação e relatórios — tudo integrado.",
    features: [
      { title: "Dashboard de métricas", description: "Painel com envios, aberturas, cliques, bounces e descadastros consolidados por período." },
      { title: "Gestão de remetentes", description: "Configure e verifique múltiplos remetentes (domínios e emails) com autenticação SPF/DKIM." },
      { title: "Campanhas e envios", description: "Crie campanhas com editor visual, agendamento, segmentação e controle de frequência de envio." },
      { title: "Editor visual de templates", description: "Editor drag-and-drop para criar emails responsivos sem código. Biblioteca de templates prontos." },
      { title: "Segmentos e formulários", description: "Crie segmentos dinâmicos por comportamento e formulários de captação (signup forms) para landing pages." },
      { title: "Relatórios detalhados", description: "Logs de envio, taxa de entrega, abertura por dispositivo, cliques por link e métricas de campanha." },
    ],
    faqs: [
      { question: "Posso criar campanhas de email na plataforma ERA?", answer: "Sim, a ERA oferece email marketing integrado com templates, segmentação, automação e relatórios completos." },
      { question: "Os templates de email são responsivos?", answer: "Sim, todos os templates são responsivos e se adaptam a desktop, tablet e celular automaticamente." },
      { question: "Posso fazer testes A/B nos emails?", answer: "Sim, é possível testar variações de assunto, conteúdo e horário de envio para otimizar resultados." },
      { question: "O email marketing integra com o CRM?", answer: "Sim, contatos, segmentação e histórico são sincronizados automaticamente com o CRM da ERA." },
      { question: "Tem automação de email?", answer: "Sim, crie fluxos automáticos de boas-vindas, nutrição de leads, carrinho abandonado e pós-venda." },
    ],
    relatedSlugs: ["disparos", "redes-sociais", "chatbot"],
  },
]

export const hubBenefits = [
  "Distribuição automática de conversas entre atendentes",
  "Kanban visual com drag-and-drop para gestão de conversas",
  "Dashboard em tempo real com métricas de atendimento",
  "Pesquisa de satisfação automática ao final do atendimento",
  "Histórico completo de conversas por cliente",
  "Tags, tabulações e status personalizáveis",
  "Pausas configuráveis com controle de tempo",
  "Mensagens favoritas (respostas rápidas com hashtag)",
  "Grupos privados para comunicação interna da equipe",
  "Supervisores por usuário para gestão individualizada",
]

export function getPageBySlug(slug: string): EraChatPage | undefined {
  return eraChatPages.find((p) => p.slug === slug)
}

export function getRelatedPages(slugs: string[]): EraChatPage[] {
  return slugs.map((s) => eraChatPages.find((p) => p.slug === s)!).filter(Boolean)
}
