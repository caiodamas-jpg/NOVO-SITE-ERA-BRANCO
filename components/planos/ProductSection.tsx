"use client"

import { motion } from "framer-motion"
import { MessageSquare, Phone, Layers } from "lucide-react"
import type { Product } from "@/data/plans"
import TierCard from "./TierCard"
import ComparisonTable from "./ComparisonTable"

const productIcons: Record<string, React.ReactNode> = {
  "chat-bubble": <MessageSquare className="w-5 h-5" />,
  phone: <Phone className="w-5 h-5" />,
  omnichannel: <Layers className="w-5 h-5" />,
}

const productColors: Record<string, string> = {
  "era-chat": "#22c55e",
  "era-voz": "#3b82f6",
  "era-omni": "#8b5cf6",
}

interface ProductSectionProps {
  product: Product
}

export default function ProductSection({ product }: ProductSectionProps) {
  const color = productColors[product.id] || "#22c55e"

  return (
    <section id={product.id} className="py-20 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Product header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: color + "20", color }}
            >
              {productIcons[product.icon]}
            </div>
            <h2
              className="text-3xl md:text-4xl font-medium text-gray-900"
              style={{ letterSpacing: "-0.0325em", fontVariationSettings: '"opsz" 28' }}
            >
              {product.name}
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-2xl">{product.description}</p>
        </motion.div>

        {/* Tier cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.tiers.map((tier, i) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <TierCard tier={tier} />
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="flex justify-center">
          <ComparisonTable product={product} />
        </div>
      </div>
    </section>
  )
}
