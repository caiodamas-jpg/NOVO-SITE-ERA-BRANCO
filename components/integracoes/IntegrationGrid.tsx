"use client"

"use client"

import { motion } from "framer-motion"
import type { Integration } from "@/data/integrations"
import IntegrationCard from "./IntegrationCard"
import { WhatsAppLink } from "@/components/whatsapp/WhatsAppLink"

interface IntegrationGridProps {
  integrations: Integration[]
}

export default function IntegrationGrid({ integrations }: IntegrationGridProps) {
  if (integrations.length === 0) {
    return (
      <div className="text-center py-20 px-6">
        <p className="text-gray-500 text-lg mb-2">
          Nenhuma integracao encontrada com esses filtros.
        </p>
        <p className="text-gray-500 text-sm">
          Nao encontrou sua integracao?{" "}
          <WhatsAppLink message="Olá, gostaria de solicitar uma integração customizada" className="text-gray-900 hover:underline inline">
            Entre em contato
          </WhatsAppLink>{" "}
          — podemos desenvolver integracoes customizadas para seu CRM.
        </p>
      </div>
    )
  }

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
            >
              <IntegrationCard integration={integration} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
