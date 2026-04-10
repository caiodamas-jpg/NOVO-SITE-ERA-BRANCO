"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface EraChatFAQProps {
  faqs: { question: string; answer: string }[]
}

export default function EraChatFAQ({ faqs }: EraChatFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 px-6 border-t border-gray-200 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-2xl md:text-3xl font-medium text-gray-900 mb-8"
          style={{ letterSpacing: "-0.0325em" }}
        >
          Perguntas frequentes
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200/50 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-sm text-gray-900 hover:bg-gray-100/30 transition-colors"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
