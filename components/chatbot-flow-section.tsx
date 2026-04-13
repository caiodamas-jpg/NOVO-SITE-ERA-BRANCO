"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, MessageSquare, GitBranch, Users, CheckCircle2, Zap } from "lucide-react"

type NodeId = "start" | "menu" | "suporte" | "vendas" | "financeiro" | "humano" | "encerrar"

interface FlowNode {
  id: NodeId
  x: number
  y: number
  type: "start" | "message" | "options" | "department" | "end"
  label: string
  message?: string
  options?: { label: string; next: NodeId }[]
  color: string
}

const nodes: FlowNode[] = [
  {
    id: "start",
    x: 60,
    y: 200,
    type: "start",
    label: "Início",
    color: "#22c55e",
  },
  {
    id: "menu",
    x: 260,
    y: 200,
    type: "message",
    label: "Boas-vindas",
    message: "Olá! Seja bem-vindo à ERA. Como posso te ajudar hoje?",
    options: [
      { label: "Suporte", next: "suporte" },
      { label: "Vendas", next: "vendas" },
      { label: "Financeiro", next: "financeiro" },
    ],
    color: "#3b82f6",
  },
  {
    id: "suporte",
    x: 560,
    y: 80,
    type: "department",
    label: "Suporte Técnico",
    message: "Entendido! Vou te direcionar ao nosso suporte técnico. Um atendente estará disponível em breve.",
    options: [
      { label: "Falar com humano", next: "humano" },
      { label: "Resolver sozinho", next: "encerrar" },
    ],
    color: "#f59e0b",
  },
  {
    id: "vendas",
    x: 560,
    y: 230,
    type: "department",
    label: "Vendas",
    message: "Que ótimo! Nossa equipe de vendas vai adorar te ajudar. Qual produto você tem interesse?",
    options: [
      { label: "Falar com consultor", next: "humano" },
      { label: "Ver catálogo", next: "encerrar" },
    ],
    color: "#8b5cf6",
  },
  {
    id: "financeiro",
    x: 560,
    y: 380,
    type: "department",
    label: "Financeiro",
    message: "Entendido! Para questões financeiras, posso ajudar com boletos, notas fiscais e pagamentos.",
    options: [
      { label: "Segunda via", next: "encerrar" },
      { label: "Falar com atendente", next: "humano" },
    ],
    color: "#ec4899",
  },
  {
    id: "humano",
    x: 840,
    y: 150,
    type: "department",
    label: "Atendente Humano",
    message: "Transferindo para um atendente humano. Aguarde um momento.",
    color: "#06b6d4",
  },
  {
    id: "encerrar",
    x: 840,
    y: 340,
    type: "end",
    label: "Encerrar",
    message: "Obrigado pelo contato! Qualquer dúvida estamos aqui.",
    color: "#22c55e",
  },
]

const connections: { from: NodeId; to: NodeId }[] = [
  { from: "start", to: "menu" },
  { from: "menu", to: "suporte" },
  { from: "menu", to: "vendas" },
  { from: "menu", to: "financeiro" },
  { from: "suporte", to: "humano" },
  { from: "suporte", to: "encerrar" },
  { from: "vendas", to: "humano" },
  { from: "vendas", to: "encerrar" },
  { from: "financeiro", to: "humano" },
  { from: "financeiro", to: "encerrar" },
]

const NODE_W = 160
const NODE_H = 64

function getNodeCenter(node: FlowNode) {
  return { x: node.x + NODE_W / 2, y: node.y + NODE_H / 2 }
}

function getCurvedPath(from: FlowNode, to: FlowNode) {
  const f = getNodeCenter(from)
  const t = getNodeCenter(to)
  const fx = from.x + NODE_W
  const tx = to.x
  const fy = f.y
  const ty = t.y
  const cx1 = fx + (tx - fx) * 0.5
  const cy1 = fy
  const cx2 = fx + (tx - fx) * 0.5
  const cy2 = ty
  return `M ${fx} ${fy} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${tx} ${ty}`
}

function NodeCard({ node, isActive, isHighlighted, onClick }: {
  node: FlowNode
  isActive: boolean
  isHighlighted: boolean
  onClick: () => void
}) {
  const icons = {
    start: <Zap className="w-3.5 h-3.5" />,
    message: <MessageSquare className="w-3.5 h-3.5" />,
    options: <GitBranch className="w-3.5 h-3.5" />,
    department: <Users className="w-3.5 h-3.5" />,
    end: <CheckCircle2 className="w-3.5 h-3.5" />,
  }

  return (
    <motion.g
      style={{ cursor: "pointer" }}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Drop shadow */}
      <rect
        x={node.x + 2}
        y={node.y + 4}
        width={NODE_W}
        height={NODE_H}
        rx={10}
        fill="rgba(0,0,0,0.3)"
      />
      {/* Card background */}
      <rect
        x={node.x}
        y={node.y}
        width={NODE_W}
        height={NODE_H}
        rx={10}
        fill={isActive ? "#1e2a30" : isHighlighted ? "#1a2429" : "#1a2429"}
        stroke={isActive ? node.color : isHighlighted ? node.color + "88" : "rgba(255,255,255,0.08)"}
        strokeWidth={isActive ? 2 : 1}
      />
      {/* Color dot */}
      <circle
        cx={node.x + 18}
        cy={node.y + NODE_H / 2}
        r={6}
        fill={node.color}
        opacity={0.9}
      />
      {/* Glow when active */}
      {isActive && (
        <rect
          x={node.x - 1}
          y={node.y - 1}
          width={NODE_W + 2}
          height={NODE_H + 2}
          rx={11}
          fill="none"
          stroke={node.color}
          strokeWidth={1}
          opacity={0.3}
          filter="url(#glow)"
        />
      )}
    </motion.g>
  )
}

export function ChatbotFlowSection() {
  const [activeNode, setActiveNode] = useState<NodeId | null>(null)
  const [highlightedConnections, setHighlightedConnections] = useState<string[]>([])

  const activeNodeData = nodes.find((n) => n.id === activeNode)

  const handleNodeClick = (nodeId: NodeId) => {
    if (activeNode === nodeId) {
      setActiveNode(null)
      setHighlightedConnections([])
      return
    }
    setActiveNode(nodeId)
    const related = connections
      .filter((c) => c.from === nodeId || c.to === nodeId)
      .map((c) => `${c.from}-${c.to}`)
    setHighlightedConnections(related)
  }

  const getNodeById = (id: NodeId) => nodes.find((n) => n.id === id)!

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-white">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-gray-500 text-sm">Automação inteligente de atendimento</span>
          <ChevronRight className="w-4 h-4 text-gray-500" />
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-6 max-w-3xl text-balance"
          style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
        >
          Monte o fluxo do seu chatbot
        </h2>

        <p className="text-gray-500 text-lg max-w-xl mb-16 leading-relaxed">
          <span className="text-gray-900 font-medium">Defina cada etapa da conversa com o cliente.</span> Crie menus, desvios condicionais e direcione para o atendente certo — sem escrever uma linha de código.
        </p>

        {/* Flow canvas */}
        <div className="relative rounded-2xl overflow-hidden border border-gray-300/40" style={{ background: "#1a2429" }}>
          {/* Canvas header */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-300/40">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <span className="text-gray-500 text-sm ml-2">Fluxo — Atendimento ERA</span>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-gray-500 text-xs">Clique em um no para explorar</span>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row">
            {/* SVG Flow */}
            <div className="flex-1 overflow-x-auto">
              <svg
                viewBox="0 60 1020 440"
                className="w-full"
                style={{ minHeight: "380px", minWidth: "600px" }}
              >
                <defs>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.2)" />
                  </marker>
                  <marker id="arrow-active" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="#22c55e" />
                  </marker>
                </defs>

                {/* Connections */}
                {connections.map((conn) => {
                  const fromNode = getNodeById(conn.from)
                  const toNode = getNodeById(conn.to)
                  const key = `${conn.from}-${conn.to}`
                  const isHighlighted = highlightedConnections.includes(key)
                  const path = getCurvedPath(fromNode, toNode)
                  return (
                    <path
                      key={key}
                      d={path}
                      fill="none"
                      stroke={isHighlighted ? "#22c55e" : "rgba(255,255,255,0.1)"}
                      strokeWidth={isHighlighted ? 2 : 1}
                      strokeDasharray={isHighlighted ? "none" : "4 4"}
                      markerEnd={isHighlighted ? "url(#arrow-active)" : "url(#arrow)"}
                      style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
                    />
                  )
                })}

                {/* Nodes */}
                {nodes.map((node) => (
                  <NodeCard
                    key={node.id}
                    node={node}
                    isActive={activeNode === node.id}
                    isHighlighted={highlightedConnections.some(
                      (c) => c.startsWith(node.id) || c.endsWith(node.id)
                    )}
                    onClick={() => handleNodeClick(node.id)}
                  />
                ))}

                {/* Node labels - rendered on top */}
                {nodes.map((node) => (
                  <text
                    key={`label-${node.id}`}
                    x={node.x + 34}
                    y={node.y + NODE_H / 2 + 1}
                    fill={activeNode === node.id ? "#fff" : "rgba(255,255,255,0.7)"}
                    fontSize="12"
                    fontWeight={activeNode === node.id ? "600" : "400"}
                    dominantBaseline="middle"
                    style={{ pointerEvents: "none", userSelect: "none" }}
                  >
                    {node.label}
                  </text>
                ))}
              </svg>
            </div>

            {/* Detail panel */}
            <div
              className="border-t md:border-t-0 md:border-l border-gray-300/40 md:w-72 p-6 flex flex-col"
              style={{ background: "#162126" }}
            >
              {activeNodeData ? (
                <motion.div
                  key={activeNodeData.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: activeNodeData.color }}
                    />
                    <span className="text-gray-900 font-medium text-sm">{activeNodeData.label}</span>
                    <span className="ml-auto text-gray-500 text-xs capitalize px-2 py-0.5 rounded border border-gray-300">
                      {activeNodeData.type}
                    </span>
                  </div>

                  {activeNodeData.message && (
                    <div className="mb-5">
                      <p className="text-gray-500 text-xs mb-2 uppercase tracking-wide">Mensagem</p>
                      <div className="rounded-lg p-3 text-gray-600 text-sm leading-relaxed" style={{ background: "#1e2d35", borderLeft: `3px solid ${activeNodeData.color}` }}>
                        {activeNodeData.message}
                      </div>
                    </div>
                  )}

                  {activeNodeData.options && (
                    <div>
                      <p className="text-gray-500 text-xs mb-2 uppercase tracking-wide">Opções</p>
                      <div className="flex flex-col gap-2">
                        {activeNodeData.options.map((opt) => {
                          const targetNode = getNodeById(opt.next)
                          return (
                            <button
                              key={opt.label}
                              onClick={() => handleNodeClick(opt.next)}
                              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-gray-900 transition-colors"
                              style={{ background: "#1e2d35", border: "1px solid rgba(255,255,255,0.06)" }}
                            >
                              <span>{opt.label}</span>
                              <div className="flex items-center gap-1.5">
                                <div
                                  className="w-2 h-2 rounded-full"
                                  style={{ background: targetNode.color }}
                                />
                                <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center" style={{ background: "#1e2d35" }}>
                    <GitBranch className="w-5 h-5 text-gray-500" />
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Clique em qualquer nó do fluxo para ver os detalhes e conexões.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {[
            { icon: <GitBranch className="w-5 h-5" />, title: "Fluxos condicionais", desc: "Crie caminhos diferentes baseados na resposta do cliente." },
            { icon: <Users className="w-5 h-5" />, title: "Transferência humana", desc: "Direcione para o departamento certo automaticamente." },
            { icon: <Zap className="w-5 h-5" />, title: "Resposta instantânea", desc: "Atenda 24h por dia com respostas em menos de 1 segundo." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 p-5 rounded-xl border border-gray-300/40" style={{ background: "#1a2429" }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-green-500" style={{ background: "rgba(34,197,94,0.1)" }}>
                {item.icon}
              </div>
              <div>
                <p className="text-gray-900 font-medium text-sm mb-1">{item.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#lead-capture"
            className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg hover:opacity-90 transition-opacity text-xs md:text-sm font-medium inline-flex items-center gap-2"
            style={{ backgroundColor: "#cfff00", color: "#1a2429" }}
          >
            Solicitar cotação
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
