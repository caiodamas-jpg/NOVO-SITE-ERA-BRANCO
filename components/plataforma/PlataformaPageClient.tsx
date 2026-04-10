"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { Zap, Users, Ticket, Code2, Store, PieChart, ClipboardCheck, ArrowRight, Check } from "lucide-react"

const LeadCaptureSection = dynamic(() => import("@/components/lead-capture/LeadCaptureSection").then(m => ({ default: m.LeadCaptureSection })), { ssr: false })

const pages: Record<string, {
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
  accentColor: string
  accentLight: string
  heroGradient: string
  features: { title: string; desc: string }[]
  benefits: string[]
}> = {
  flows: {
    icon: <Zap className="w-7 h-7" />,
    title: "Flows — Automação Visual",
    subtitle: "Editor visual de workflows com triggers, condições, APIs e ações multicanal",
    description: "O API Connector da ERA é uma engine completa de automação. Crie workflows visuais com dashboard de métricas, editor drag-and-drop, triggers por sources e cron, monitoramento de execuções em tempo real e logs detalhados. Conecte dados, envie mensagens e integre com qualquer sistema via REST.",
    accentColor: "#8b5cf6",
    accentLight: "rgba(139, 92, 246, 0.1)",
    heroGradient: "linear-gradient(135deg, #2b363d 0%, #1e1b4b 50%, #312e81 100%)",
    features: [
      { title: "Editor de workflows visual", desc: "Crie automações com interface drag-and-drop. Arraste nós de condição, ação, loop e integração em uma tela visual." },
      { title: "Triggers por sources e cron", desc: "Inicie workflows por webhooks (sources), agendamentos (cron) ou eventos de mensagens recebidas em qualquer canal." },
      { title: "Dashboard de métricas", desc: "Painel com total de workflows, execuções, taxa de sucesso e erros — tudo em tempo real." },
      { title: "Monitoramento de execuções", desc: "Acompanhe cada execução com status, logs detalhados e consumo de recursos por workflow." },
      { title: "Explore e componentes", desc: "Biblioteca de componentes reutilizáveis, variáveis de ambiente e data stores para workflows complexos." },
      { title: "Configuração avançada", desc: "Variáveis de ambiente, data stores compartilhados e controle de uso por organização." },
    ],
    benefits: ["Dashboard + Workflows + Triggers + Monitor", "Sources e Cron integrados", "Logs e consumo em tempo real"],
  },
  crm: {
    icon: <Users className="w-7 h-7" />,
    title: "CRM Integrado",
    subtitle: "Pipeline Kanban, leads, contatos, produtos, cotações, faturas e gamificação",
    description: "O CRM da ERA vai além do básico: pipeline visual Kanban com drag-and-drop, detector de leads duplicados, gestão de produtos e estoque, cotações e faturas, broadcast multicanal, relatórios de vendas/conversão/atividade e até gamificação para equipes. Tudo integrado ao chat e voz.",
    accentColor: "#22c55e",
    accentLight: "rgba(34, 197, 94, 0.1)",
    heroGradient: "linear-gradient(135deg, #2b363d 0%, #14532d 50%, #166534 100%)",
    features: [
      { title: "Pipeline Kanban", desc: "Visualize e arraste leads entre estágios do funil. Detector automático de duplicados e alertas de estagnação." },
      { title: "Gestão de produtos e estoque", desc: "Cadastre produtos, gerencie estoque, crie cotações e faturas diretamente do CRM." },
      { title: "Relatórios completos", desc: "7 tipos de relatórios: vendas, pipeline, conversão, atividade, produtos, forecast e por responsável." },
      { title: "Broadcast e campanhas", desc: "Envie campanhas multicanal (WhatsApp, SMS, Email) segmentadas direto do CRM com templates." },
      { title: "Forecast e previsão", desc: "Dashboard de previsão de receita baseado em histórico, sazonalidade e velocidade do pipeline." },
      { title: "Gamificação", desc: "Rankings de vendedores, metas por equipe, badges e indicadores de performance para motivar o time." },
    ],
    benefits: ["Kanban + Produtos + Faturas", "7 tipos de relatórios", "Forecast e gamificação integrados"],
  },
  tickets: {
    icon: <Ticket className="w-7 h-7" />,
    title: "Tickets & Helpdesk",
    subtitle: "Sistema completo com Kanban, SLA, automação, merge, bulk actions e relatórios",
    description: "O helpdesk da ERA oferece visão em lista e Kanban, painel lateral detalhado com thread de comentários, editor rico, atalhos de teclado, ações em massa, merge de tickets duplicados, regras de automação condicionais e relatórios de SLA completos.",
    accentColor: "#f59e0b",
    accentLight: "rgba(245, 158, 11, 0.1)",
    heroGradient: "linear-gradient(135deg, #2b363d 0%, #451a03 50%, #78350f 100%)",
    features: [
      { title: "Visão lista e Kanban", desc: "Alterne entre lista detalhada e board Kanban. Sidebar com detalhes completos do ticket e thread de comentários." },
      { title: "Regras de automação", desc: "Crie regras condicionais para categorizar, atribuir, priorizar e escalonar tickets automaticamente." },
      { title: "Editor rico e anexos", desc: "Respostas com formatação rica, menções, anexos e templates de resposta rápida." },
      { title: "Merge e bulk actions", desc: "Mescle tickets duplicados e execute ações em massa: atribuir, mover, fechar ou alterar prioridade." },
      { title: "Atalhos de teclado", desc: "Navegação rápida com keyboard shortcuts para agentes de alto volume." },
      { title: "Relatórios de SLA", desc: "Métricas de tempo de resposta, resolução, cumprimento de SLA e satisfaction por agente e equipe." },
    ],
    benefits: ["Lista + Kanban + Sidebar", "Automação condicional", "Merge, bulk e atalhos"],
  },
  api: {
    icon: <Code2 className="w-7 h-7" />,
    title: "Portal do Desenvolvedor",
    subtitle: "API Explorer, SDKs em 6 linguagens, webhooks e sistema de créditos",
    description: "APIs RESTful completas com explorer interativo, exemplos prontos em curl, JavaScript, Python, PHP, Ruby e C#. Sistema de créditos para controle de uso, tokens de autenticação por organização e logs de chamadas.",
    accentColor: "#06b6d4",
    accentLight: "rgba(6, 182, 212, 0.1)",
    heroGradient: "linear-gradient(135deg, #2b363d 0%, #083344 50%, #164e63 100%)",
    features: [
      { title: "API Explorer interativo", desc: "Teste endpoints direto no navegador com autenticação automática e visualização de responses." },
      { title: "SDKs em 6 linguagens", desc: "Exemplos de código prontos em curl, JavaScript, Python, PHP, Ruby e C# para cada endpoint." },
      { title: "Sistema de créditos", desc: "Controle de saldo e consumo por organização. Visualize créditos restantes e histórico de uso." },
      { title: "Tokens por organização", desc: "Gere e gerencie tokens de API por organização com permissões granulares." },
      { title: "Logs de SMS e mensagens", desc: "Histórico completo de mensagens enviadas com status de entrega, timestamps e metadados." },
      { title: "Webhooks configuráveis", desc: "Receba callbacks em tempo real para eventos de mensagens, chamadas e tickets." },
    ],
    benefits: ["Explorer + SDKs em 6 linguagens", "Créditos e tokens", "Logs e webhooks em tempo real"],
  },
  marketplace: {
    icon: <Store className="w-7 h-7" />,
    title: "Marketplace",
    subtitle: "Conecte n8n, Zapier e Make com webhooks bidirecionais",
    description: "O Marketplace da ERA conecta sua operação com as principais plataformas de automação. Configure integrações com n8n (open-source), Zapier (5.000+ apps) e Make (automações visuais). Cada integração recebe um webhook exclusivo para processar, rotear e responder mensagens.",
    accentColor: "#ec4899",
    accentLight: "rgba(236, 72, 153, 0.1)",
    heroGradient: "linear-gradient(135deg, #2b363d 0%, #500724 50%, #831843 100%)",
    features: [
      { title: "n8n (open-source)", desc: "Workflows n8n conectados via webhook para processar, rotear e responder mensagens WhatsApp com controle total." },
      { title: "Zapier (5.000+ apps)", desc: "Use mensagens WhatsApp como trigger para disparar automações no Zapier sem escrever código." },
      { title: "Make (Integromat)", desc: "Crie cenários visuais para processar, filtrar e responder mensagens automaticamente." },
      { title: "Ativar/desativar integrações", desc: "Controle individual de cada integração: ative, desative ou teste com um clique." },
      { title: "Logs de integrações", desc: "Histórico completo de execuções com status, payload e tempo de resposta por integração." },
      { title: "Guia de configuração", desc: "Tutorial passo a passo para configurar cada plataforma com screenshots e exemplos." },
    ],
    benefits: ["n8n + Zapier + Make", "Webhooks bidirecionais", "Logs e toggle por integração"],
  },
  analytics: {
    icon: <PieChart className="w-7 h-7" />,
    title: "Analytics & BI",
    subtitle: "Forecast de vendas, relatórios por pipeline/conversão/atividade e dashboards em tempo real",
    description: "Business Intelligence completo com forecast de receita, relatórios de vendas por período, pipeline por estágio, conversão por responsável, atividades por equipe e análise de produtos. Dashboard do CRM com métricas consolidadas e alertas de estagnação.",
    accentColor: "#3b82f6",
    accentLight: "rgba(59, 130, 246, 0.1)",
    heroGradient: "linear-gradient(135deg, #2b363d 0%, #1e3a5f 50%, #1e40af 100%)",
    features: [
      { title: "Forecast de receita", desc: "Previsão de vendas baseada em histórico do pipeline, velocidade de conversão e sazonalidade." },
      { title: "Relatório de vendas", desc: "Volume, ticket médio, receita por período, comparativo mensal e tendências." },
      { title: "Relatório de pipeline", desc: "Leads por estágio, tempo médio em cada fase, taxa de avanço e gargalos." },
      { title: "Relatório de conversão", desc: "Taxa de conversão por responsável, canal, produto e período." },
      { title: "Relatório de atividades", desc: "Chamadas, mensagens, follow-ups e tarefas por agente e equipe." },
      { title: "Alertas de estagnação", desc: "Notificações automáticas quando leads ficam parados em um estágio acima do tempo esperado." },
    ],
    benefits: ["Forecast + 5 tipos de relatório", "Dashboard consolidado", "Alertas de estagnação"],
  },
  surveys: {
    icon: <ClipboardCheck className="w-7 h-7" />,
    title: "Pesquisas CSAT/NPS",
    subtitle: "Editor de pesquisas, dashboards de CSAT e NPS, analytics e envio automático",
    description: "Sistema completo de pesquisas com editor visual, dashboards separados para CSAT e NPS, analytics de resultados, lista de pesquisas ativas e envio automático ao final de cada atendimento. Worker dedicado para processamento de respostas em background.",
    accentColor: "#f97316",
    accentLight: "rgba(249, 115, 22, 0.1)",
    heroGradient: "linear-gradient(135deg, #2b363d 0%, #431407 50%, #7c2d12 100%)",
    features: [
      { title: "Editor de pesquisas", desc: "Crie pesquisas com perguntas de múltipla escolha, escala (1-5, 0-10) e texto livre." },
      { title: "Dashboard CSAT", desc: "Painel dedicado com CSAT médio, distribuição de notas, tendência e comparativo por período." },
      { title: "Dashboard NPS", desc: "Score NPS com detalhamento de promotores, neutros e detratores por canal e equipe." },
      { title: "Analytics de respostas", desc: "Análise de respostas com filtros por canal, agente, departamento e período." },
      { title: "Envio automático", desc: "Pesquisa disparada automaticamente ao final de cada atendimento via WhatsApp, chat ou email." },
      { title: "Worker de processamento", desc: "Processamento de respostas em background com cálculo automático de métricas e alertas." },
    ],
    benefits: ["CSAT + NPS separados", "Envio automático por canal", "Analytics com filtros avançados"],
  },
}

export default function PlataformaPageClient({ slug }: { slug: string }) {
  const page = pages[slug]
  if (!page) return null

  return (
    <>
      <Navbar />

      {/* Hero with unique gradient per product */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden" style={{ background: page.heroGradient }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-3xl"
          style={{ backgroundColor: page.accentColor }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-6"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white"
              style={{ backgroundColor: `${page.accentColor}30`, border: `1px solid ${page.accentColor}50` }}
            >
              {page.icon}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-block mb-4 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase text-white/70"
            style={{ backgroundColor: `${page.accentColor}20`, border: `1px solid ${page.accentColor}30` }}
          >
            Plataforma ERA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-medium text-white leading-tight mb-4"
          >
            {page.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-white/60 mb-8 max-w-2xl mx-auto"
          >
            {page.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="/#lead-capture"
              className="px-6 py-3 font-medium rounded-lg transition-all text-sm text-white hover:brightness-110 text-center min-w-[200px]"
              style={{ backgroundColor: page.accentColor }}
            >
              Agendar demonstração
            </a>
            <a href="/pricing" className="px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm text-center min-w-[200px]">
              Ver planos
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits bar */}
      <section className="py-6 px-6 border-b border-gray-200" style={{ backgroundColor: page.accentLight }}>
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {page.benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2">
              <Check className="w-4 h-4 flex-shrink-0" style={{ color: page.accentColor }} />
              <span className="text-sm font-medium text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 leading-relaxed">{page.description}</p>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f1f3f5" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 text-center mb-4">Funcionalidades</h2>
          <p className="text-gray-500 text-center mb-12 max-w-lg mx-auto">Tudo que você precisa para transformar sua operação</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all group"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: page.accentLight }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: page.accentColor }} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">Pronto para conhecer?</h2>
          <p className="text-gray-500 mb-8">Fale com um especialista e descubra como a ERA pode transformar sua operação.</p>
          <a
            href="/#lead-capture"
            className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg text-white text-sm hover:brightness-110 transition-all"
            style={{ backgroundColor: page.accentColor }}
          >
            Agendar demonstração
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <LeadCaptureSection />
      <Footer />
    </>
  )
}
