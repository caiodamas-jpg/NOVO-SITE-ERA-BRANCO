"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Check } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import BlogAndSlideshow from "@/components/shared/BlogAndSlideshow"
import { ChatbotFlowSection } from "@/components/chatbot-flow-section"
import EraChatFAQ from "../EraChatFAQ"
import RelatedPages from "../RelatedPages"
import SubpageCTA from "../SubpageCTA"
import { LeadCaptureModal } from "@/components/lead-capture/LeadCaptureModal"
import { getPageBySlug, getRelatedPages } from "@/data/era-chat-pages"

const pageData = getPageBySlug("chatbot")!
const related = getRelatedPages(pageData.relatedSlugs)

const capabilities = [
  { title: "Recepcionar e direcionar", description: "Menu de opções que guia o cliente para o departamento certo. O bot identifica a necessidade e transfere automaticamente.", color: "#22c55e" },
  { title: "Consultar sistemas via API", description: "Gere boletos, consulte cadastro por CPF/CNPJ, verifique status de pedidos e consulte grade escolar — tudo automaticamente.", color: "#3b82f6" },
  { title: "Qualificar leads", description: "Colete nome, empresa, e-mail e necessidade antes de transferir para um humano. O atendente recebe o contexto completo.", color: "#f59e0b" },
  { title: "Tirar dúvidas frequentes", description: "Responda perguntas sobre endereço, horário, preços e políticas com informações pré-configuradas.", color: "#8b5cf6" },
  { title: "Agendar retorno", description: "Se não houver atendente disponível, o bot agenda callback ou encerra com mensagem personalizada.", color: "#ec4899" },
  { title: "Pesquisa de satisfação", description: "Ao final do atendimento, colete avaliação do cliente automaticamente com nota e comentário.", color: "#06b6d4" },
]

const smartRules = [
  "Tempo máximo no bot — mensagem de reativação ou encerramento automático",
  "Regra de horário — fluxo diferente para horário comercial e fora de expediente",
  "Encaminhamento se o agente não interagir — transferência automática",
  "Alerta de inatividade do cliente no chatbot",
  "Fluxos independentes por canal (WhatsApp, Instagram, Telegram)",
  "Integração com CRM/ERP via API para consultas em tempo real",
]

export default function ChatbotPageClient() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-xs text-gray-500">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li><ChevronRight className="w-3 h-3" /></li>
              <li><Link href="/era-chat" className="hover:text-gray-900 transition-colors">Chat</Link></li>
              <li><ChevronRight className="w-3 h-3" /></li>
              <li className="text-gray-600">Chatbot e Automação</li>
            </ol>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-medium text-gray-900 mb-5" style={{ letterSpacing: "-0.0325em", lineHeight: 1.1, fontVariationSettings: '"opsz" 28' }}>
              Chatbot e automação de atendimento para todos os canais
            </h1>
            <p className="text-gray-500 text-base max-w-2xl mb-8">
              Crie fluxos de atendimento automatizado com árvore de decisões visual, sem precisar programar. O chatbot recepciona, qualifica e direciona — você foca no que importa.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => setModalOpen(true)} className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg hover:opacity-90 transition-opacity text-xs md:text-sm font-medium" style={{ backgroundColor: "#2b363d", color: "#ffffff" }}>
                Solicitar cotação
              </button>
              <Link href="/pricing#era-chat" className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg hover:opacity-90 transition-opacity text-xs md:text-sm font-medium" style={{ backgroundColor: "#cfff00", color: "#1a2429" }}>
                Ver planos Chat
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reuse the interactive chatbot flow from home */}
      <ChatbotFlowSection />

      {/* What the chatbot can do */}
      <section className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3" style={{ letterSpacing: "-0.0325em" }}>
            O que o chatbot pode fazer
          </h2>
          <p className="text-gray-500 text-sm mb-10 max-w-xl">
            Desde recepcionar o cliente até consultar sistemas externos — tudo sem intervenção humana.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="p-5 rounded-xl border border-gray-200/50 bg-white"
              >
                <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: cap.color }} />
                <h3 className="text-gray-900 font-medium text-sm mb-2">{cap.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart rules */}
      <section className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3" style={{ letterSpacing: "-0.0325em" }}>
            Regras inteligentes
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Configure comportamentos automáticos para que o chatbot atue de forma inteligente em cada situação.
          </p>
          <div className="space-y-3">
            {smartRules.map((rule) => (
              <div key={rule} className="flex items-start gap-2.5 text-sm text-gray-600 py-2">
                <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#2b363d" }} />
                {rule}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM integration explanation */}
      <section className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6" style={{ letterSpacing: "-0.0325em" }}>
            Integração do chatbot com CRM/ERP
          </h2>
          <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
            <p>
              O chatbot da ERA se conecta a sistemas externos via API. Na prática: o cliente digita o CPF no chat, o bot consulta o CRM em tempo real, retorna o status da conta e, se houver pendência financeira, direciona automaticamente para o departamento financeiro.
            </p>
            <p>
              Exemplos de consultas automatizadas: <span className="text-gray-900 font-medium">segunda via de boleto</span>, <span className="text-gray-900 font-medium">status de pedido</span>, <span className="text-gray-900 font-medium">consulta de cadastro</span>, <span className="text-gray-900 font-medium">desbloqueio de confiança</span> e <span className="text-gray-900 font-medium">abertura de protocolos</span>.
            </p>
            <p>
              A ERA já possui <Link href="/integrations" className="text-gray-900 font-medium underline underline-offset-2 hover:opacity-80">+100 integrações nativas com CRMs e ERPs</Link>, incluindo IXC, MK Solutions, Salesforce, Zendesk e mais.
            </p>
          </div>
        </div>
      </section>

      <EraChatFAQ faqs={pageData.faqs} />
      <RelatedPages pages={related} />
      <BlogAndSlideshow tags={["chatbot", "chat", "atendimento"]} categoryProduct="era-chat" />
      <SubpageCTA onRequestQuote={() => setModalOpen(true)} />
      <Footer />
      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} context="planos" />
    </>
  )
}
