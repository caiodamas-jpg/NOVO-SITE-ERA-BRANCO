"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronRight, MapPin, Calendar } from "lucide-react"
import type { BlogEvent } from "@/lib/blog-api"

const BLOG_URL = process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.eracx.com.br"

export default function EventsSection() {
  const [events, setEvents] = useState<BlogEvent[]>([])

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${BLOG_URL}/api/events?limit=3`)
        if (!res.ok) return
        const data = await res.json()
        setEvents(data.events || [])
      } catch {
        // Blog offline
      }
    }
    load()
  }, [])

  if (events.length === 0) return null

  return (
    <section className="py-20 px-6 bg-white" aria-label="Eventos ERA">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#2b363d" }} />
            <span className="text-sm text-gray-500">Eventos</span>
          </div>
          <h2
            className="text-2xl md:text-3xl font-medium text-gray-900 mb-3"
            style={{ letterSpacing: "-0.0325em" }}
          >
            Eventos — Onde a ERA está presente
          </h2>
          <p className="text-gray-500 text-sm">Confira os eventos que a ERA participa e patrocina.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {events.map((event, i) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="rounded-xl border border-gray-200/50 bg-white overflow-hidden hover:border-gray-300 transition-colors group"
            >
              <div className="aspect-video bg-gray-100">
                {event.coverImage && (
                  <img src={event.coverImage} alt={event.title} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-gray-900 font-medium text-sm mb-2 group-hover:text-[#2b363d] transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-3 h-3 text-gray-500" />
                  <span className="text-[10px] text-gray-500">
                    {new Date(event.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-gray-500" />
                  <span className="text-[10px] text-gray-500">{event.location}</span>
                </div>
                <p className="text-gray-500 text-[10px] mt-2 line-clamp-2">{event.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href={`${BLOG_URL}/eventos`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-full text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors text-xs font-medium"
          >
            Ver todos os eventos da ERA
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  )
}
