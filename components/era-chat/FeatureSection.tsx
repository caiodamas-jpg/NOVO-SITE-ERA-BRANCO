"use client"

import { motion } from "framer-motion"

interface FeatureSectionProps {
  title: string
  features: { title: string; description: string }[]
}

export default function FeatureSection({ title, features }: FeatureSectionProps) {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-2xl md:text-3xl font-medium text-gray-900 mb-10"
          style={{ letterSpacing: "-0.0325em" }}
        >
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="p-5 rounded-xl border border-gray-200/50 bg-white hover:border-gray-300 transition-colors"
            >
              <h3 className="text-gray-900 font-medium text-sm mb-2">{feat.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
