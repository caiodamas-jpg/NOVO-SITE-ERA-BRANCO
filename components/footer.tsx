"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { X, MapPin } from "lucide-react"

const BLOG_URL = "https://blog.eracx.com.br"

const socialLinks = [
  { href: "https://www.instagram.com/era.com.br/", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { href: "https://www.youtube.com/@minhaeravideos", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { href: "https://www.linkedin.com/company/14838972", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
]

export function Footer() {
  const t = useTranslations("footer")
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [lightbox])

  return (
    <>
    <footer className="bg-white border-t border-gray-200 px-6 pt-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-10">
          {/* Logo + endereço */}
          <div className="lg:col-span-3">
            <a href="/">
              <Image src="/images/era-logo.png" alt="ERA" width={100} height={30} className="h-8 w-auto mb-10 brightness-0" />
            </a>
            <div className="text-gray-500 text-sm leading-relaxed mb-4 space-y-3">
              <div className="flex items-start gap-5">
                <button
                  type="button"
                  onClick={() => setLightbox({ src: "/images/company/campinas-01.jpg", alt: "Escritório ERA Campinas" })}
                  className="shrink-0"
                  aria-label="Abrir foto do escritório de Campinas"
                >
                  <Image
                    src="/images/company/campinas-01.jpg"
                    alt="Escritório ERA Campinas"
                    width={160}
                    height={96}
                    className="w-28 h-28 rounded-md object-cover hover:opacity-90 transition-opacity cursor-pointer"
                  />
                </button>
                <div className="flex-1 space-y-0.5">
                  <p className="text-gray-900 text-xs font-medium">Campinas - SP</p>
                  <p>R. Miguel Pascoal, 104 - 1º andar</p>
                  <p>Jardim do Trevo</p>
                  <p>CEP 13041-312</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=R.+Miguel+Pascoal%2C+104+-+Jardim+do+Trevo%2C+Campinas+-+SP%2C+13041-312"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-gray-500 hover:text-orange-500 transition-colors mt-1"
                  >
                    <MapPin className="w-3 h-3" />
                    Ver no Google Maps
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <button
                  type="button"
                  onClick={() => setLightbox({ src: "/images/company/sp-01.jpg", alt: "Escritório ERA São Paulo - Torre Alpha" })}
                  className="shrink-0"
                  aria-label="Abrir foto do escritório de São Paulo"
                >
                  <Image
                    src="/images/company/sp-01.jpg"
                    alt="Escritório ERA São Paulo - Torre Alpha"
                    width={160}
                    height={96}
                    className="w-28 h-28 rounded-md object-cover hover:opacity-90 transition-opacity cursor-pointer"
                  />
                </button>
                <div className="flex-1 space-y-0.5">
                  <p className="text-gray-900 text-xs font-medium">São Paulo - SP</p>
                  <p>Torre Alpha</p>
                  <p>Av. das Nações Unidas, 17007 - Sala 236</p>
                  <p>Várzea de Baixo</p>
                  <p>CEP 04730-090</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Torre+Alpha+-+Av.+das+Na%C3%A7%C3%B5es+Unidas%2C+17007+-+V%C3%A1rzea+de+Baixo%2C+S%C3%A3o+Paulo+-+SP%2C+04730-090"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-gray-500 hover:text-orange-500 transition-colors mt-1"
                  >
                    <MapPin className="w-3 h-3" />
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              {socialLinks.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={s.icon} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Soluções */}
          <div>
            <p className="text-gray-900 text-sm font-medium mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {t("solutions")}
            </p>
            <div className="space-y-2.5">
              <Link href="/era-chat" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">Chat</Link>
              <Link href="/era-voz" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">Voz</Link>
              <Link href="/era-omni" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">Omni</Link>
              <Link href="/pricing" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">Planos</Link>
              <Link href="/integrations" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">{t("integracoes")}</Link>
              <a href="/#coex-section" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">{t("whatsappCoex")}</a>
            </div>
          </div>

          {/* Plataforma */}
          <div>
            <p className="text-gray-900 text-sm font-medium mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              {t("platform")}
            </p>
            <div className="space-y-2.5">
              <Link href="/plataforma/flows" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">{t("flows")}</Link>
              <Link href="/plataforma/crm" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">{t("crm")}</Link>
              <Link href="/plataforma/tickets" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">{t("tickets")}</Link>
              <Link href="/plataforma/api" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">{t("apiPortal")}</Link>
              <Link href="/plataforma/marketplace" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">{t("marketplace")}</Link>
              <Link href="/plataforma/analytics" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">{t("analytics")}</Link>
              <Link href="/plataforma/surveys" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">{t("surveys")}</Link>
            </div>
          </div>

          {/* Blog & Recursos */}
          <div>
            <p className="text-gray-900 text-sm font-medium mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {t("resources")}
            </p>
            <div className="space-y-2.5">
              <a href={BLOG_URL} target="_blank" rel="noopener noreferrer" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">
                {t("allArticles")}
              </a>
              <a href={`${BLOG_URL}/categoria/era-chat`} target="_blank" rel="noopener noreferrer" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">
                {t("articlesChat")}
              </a>
              <a href={`${BLOG_URL}/categoria/era-voz`} target="_blank" rel="noopener noreferrer" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">
                {t("articlesVoz")}
              </a>
              <a href={`${BLOG_URL}/categoria/era-omni`} target="_blank" rel="noopener noreferrer" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">
                {t("articlesOmni")}
              </a>
              <a href={`${BLOG_URL}/eventos`} target="_blank" rel="noopener noreferrer" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">
                {t("events")}
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <p className="text-gray-900 text-sm font-medium mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              {t("contact")}
            </p>
            <div className="space-y-2.5">
              <a href="/#lead-capture" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">{t("talkToUs")}</a>
              <Link href="/politica-de-privacidade" className="block text-gray-500 text-xs hover:text-gray-900 transition-colors">{t("privacyPolicy")}</Link>
            </div>
          </div>
        </div>

        <div className="my-5 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">{t("copyright")}</p>
          <p className="text-gray-400 text-[10px]">{t("address")}</p>
        </div>
      </div>

    </footer>

    {mounted && lightbox && createPortal(
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4"
        onClick={() => setLightbox(null)}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={() => setLightbox(null)}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
          aria-label="Fechar"
        >
          <X className="w-8 h-8" />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={lightbox.src}
          alt={lightbox.alt}
          className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>,
      document.body
    )}
    </>
  )
}
