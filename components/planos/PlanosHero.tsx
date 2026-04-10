"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { products } from "@/data/plans"
import TierCard from "./TierCard"
import ComparisonTable from "./ComparisonTable"

export default function PlanosHero({ onRequestQuote }: { onRequestQuote?: () => void }) {
  const [activeProduct, setActiveProduct] = useState(0)
  const product = products[activeProduct]

  return (
    <section className="relative pt-32 pb-20 px-6 bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(207, 255, 0, 0.04) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* H1 + subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#2b363d" }} />
            <span className="text-sm text-gray-500">Planos</span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-[56px] font-medium text-gray-900 mb-6"
            style={{
              letterSpacing: "-0.0325em",
              lineHeight: 1.1,
              fontVariationSettings: '"opsz" 28',
            }}
          >
            A plataforma completa de
            <br />
            <span style={{ color: "#2b363d" }}>comunicação para sua empresa</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            A ERA CX reúne voz, chat e omnichannel em uma única plataforma, com IA, automações e
            integrações nativas. Escolha a solução ideal para sua operação.
          </p>

          {/* Product tabs */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full border border-gray-200 bg-white">
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveProduct(i)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeProduct === i ? "text-white" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {activeProduct === i && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: "#2b363d" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{p.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-center text-gray-500 text-sm mb-10 max-w-xl mx-auto">
              {product.description}
            </p>

            {/* Tier cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.tiers.map((tier, i) => (
                <motion.div
                  key={tier.tier}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                >
                  <TierCard tier={tier} onRequestQuote={onRequestQuote} />
                </motion.div>
              ))}
            </div>

            {/* Comparison table */}
            <div className="flex justify-center">
              <ComparisonTable product={product} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
