"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown, ChevronRight, MessageSquare, Phone, Radio, Layers, Zap, Users, BarChart3, ShoppingBag, Send, Globe, Bot, Headphones, PhoneCall, Activity, FileText, Settings, PieChart, Webhook, Star, Heart, Building2 } from "lucide-react"
import { useTranslations } from "next-intl"
import { LanguageSwitcher } from "./LanguageSwitcher"

/* ─── Types ─── */
interface NavItem {
  label: string
  href: string
  desc?: string
  icon?: React.ReactNode
  ready?: boolean // false = "Em breve" (cinza claro)
  isNew?: boolean
  external?: boolean
}

interface NavGroup {
  title: string
  items: NavItem[]
}

interface MegaMenuData {
  label: string
  groups: NavGroup[]
  featured?: { label: string; desc: string; href: string; bg: string }
}

/* ─── Social icons ─── */
const socialLinks = [
  { href: "https://www.instagram.com/era.com.br/", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { href: "https://www.youtube.com/@minhaeravideos", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { href: "https://www.linkedin.com/company/14838972", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
]

function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className || ""}`}>
      {socialLinks.map((s) => (
        <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.icon} /></svg>
        </a>
      ))}
    </div>
  )
}

/* ─── Badge "Em breve" ─── */
function SoonBadge({ label }: { label: string }) {
  return (
    <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-medium rounded-full bg-gray-100 text-gray-400 uppercase tracking-wide whitespace-nowrap">
      {label}
    </span>
  )
}

function NewBadge() {
  return (
    <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-semibold rounded-full bg-emerald-50 text-emerald-600 uppercase tracking-wide">
      Novo
    </span>
  )
}

/* ─── Mega Menu Desktop ─── */
function MegaDropdown({ menu, soonLabel }: { menu: MegaMenuData; soonLabel: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 300)
  }

  const totalItems = menu.groups.reduce((acc, g) => acc + g.items.length, 0)
  const isWide = totalItems > 8 || menu.groups.length > 2
  const isExtraWide = menu.groups.length >= 3

  return (
    <div ref={ref} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        onClick={() => setOpen(!open)}
        className="text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1 cursor-pointer"
      >
        {menu.label}
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-2xl border border-gray-200/80 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] z-50 overflow-hidden ${
            isExtraWide ? "w-[920px]" : isWide ? "w-[640px]" : "w-[420px]"
          }`}
        >
          <div className={`grid ${isExtraWide ? "grid-cols-3" : isWide ? "grid-cols-2" : "grid-cols-1"} gap-0`}>
            {menu.groups.map((group) => (
              <div key={group.title} className="p-4">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-3 px-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: group.title.includes("Chat") ? "#22c55e" : group.title.includes("Voz") || group.title.includes("Voice") ? "#3b82f6" : group.title.includes("Omni") ? "#f59e0b" : group.title.includes("Autom") || group.title.includes("CRM") ? "#8b5cf6" : group.title.includes("Integ") || group.title.includes("API") ? "#06b6d4" : group.title.includes("Dad") || group.title.includes("Data") ? "#ec4899" : "#6b7280" }} />
                  {group.title}
                </p>
                <div className="space-y-0.5">
                  {group.items.map((item) => {
                    const isReady = item.ready !== false
                    const linkClass = `flex items-start gap-3 px-2 py-2 rounded-lg transition-all group ${
                      isReady
                        ? "hover:bg-gray-50 cursor-pointer"
                        : "cursor-default opacity-40"
                    }`
                    const linkContent = (
                      <>
                        {item.icon && (
                          <span className={`mt-0.5 flex-shrink-0 ${isReady ? "text-gray-400 group-hover:text-gray-700" : "text-gray-300"}`}>
                            {item.icon}
                          </span>
                        )}
                        <div className="min-w-0">
                          <div className="flex items-center">
                            <span className={`text-[13px] font-medium ${isReady ? "text-gray-800 group-hover:text-gray-900" : "text-gray-400"}`}>
                              {item.label}
                            </span>
                            {!isReady && <SoonBadge label={soonLabel} />}
                            {item.isNew && isReady && <NewBadge />}
                          </div>
                          {item.desc && (
                            <p className={`text-[11px] mt-0.5 leading-relaxed ${isReady ? "text-gray-400" : "text-gray-300"}`}>
                              {item.desc}
                            </p>
                          )}
                        </div>
                      </>
                    )
                    return item.external ? (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className={linkClass}
                      >
                        {linkContent}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={isReady ? item.href : "#"}
                        onClick={(e) => { if (!isReady) e.preventDefault(); setOpen(false) }}
                        className={linkClass}
                      >
                        {linkContent}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {menu.featured && (
            <div className="border-t border-gray-100">
              <Link
                href={menu.featured.href}
                className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(false)}
              >
                <div>
                  <p className="text-[12px] font-medium text-gray-700">{menu.featured.label}</p>
                  <p className="text-[11px] text-gray-500">{menu.featured.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

/* ─── Mobile Accordion ─── */
function MobileSection({ menu, soonLabel, onClose }: { menu: MegaMenuData; soonLabel: string; onClose: () => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-sm font-medium text-gray-700 py-3"
      >
        {menu.label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-3 space-y-3">
          {menu.groups.map((group) => (
            <div key={group.title}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5 px-1">
                {group.title}
              </p>
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const isReady = item.ready !== false
                  return (
                    <Link
                      key={item.href}
                      href={isReady ? item.href : "#"}
                      onClick={(e) => { if (!isReady) e.preventDefault(); else onClose() }}
                      className={`flex items-center gap-2 py-1.5 px-1 rounded text-[13px] ${
                        isReady ? "text-gray-600 hover:text-gray-900" : "text-gray-400 cursor-default"
                      }`}
                    >
                      {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
                      <span>{item.label}</span>
                      {!isReady && <SoonBadge label={soonLabel} />}
                      {item.isNew && isReady && <NewBadge />}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── Main Navbar ─── */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const t = useTranslations("nav")

  const iconSize = "w-4 h-4"

  // ── Soluções ──
  const solucoesMenu: MegaMenuData = {
    label: t("solucoes"),
    groups: [
      {
        title: t("grpChat"),
        items: [
          { label: t("whatsappBusiness"), href: "/era-chat/whatsapp", icon: <MessageSquare className={iconSize} />, desc: t("descWhatsapp"), ready: true },
          { label: t("redesSociais"), href: "/era-chat/redes-sociais", icon: <Globe className={iconSize} />, desc: t("descRedes"), ready: true },
          { label: t("chatbot"), href: "/era-chat/chatbot", icon: <Bot className={iconSize} />, desc: t("descChatbot"), ready: true },
          { label: t("iaGenerativa"), href: "/era-chat/ia-generativa", icon: <Zap className={iconSize} />, desc: t("descIA"), ready: true },
          { label: t("livechat"), href: "/era-chat/livechat", icon: <MessageSquare className={iconSize} />, desc: t("descLivechat"), ready: true },
        ],
      },
      {
        title: t("grpVoz"),
        items: [
          { label: t("pabx"), href: "/era-voz/pabx", icon: <Phone className={iconSize} />, desc: t("descPabx"), ready: true },
          { label: t("callCenter"), href: "/era-voz/call-center", icon: <Headphones className={iconSize} />, desc: t("descCallCenter"), ready: true },
          { label: t("ura"), href: "/era-voz/ura", icon: <PhoneCall className={iconSize} />, desc: t("descUra"), ready: true },
          { label: t("discador"), href: "/era-voz/discador", icon: <Activity className={iconSize} />, desc: t("descDiscador"), ready: true },
          { label: t("monitoramento"), href: "/era-voz/monitoramento", icon: <BarChart3 className={iconSize} />, desc: t("descMonitoramento"), ready: true },
          { label: t("relatorios"), href: "/era-voz/relatorios", icon: <FileText className={iconSize} />, desc: t("descRelatorios"), ready: true },

        ],
      },
      {
        title: t("grpOmni"),
        items: [
          { label: t("atendimentoUnificado"), href: "/era-omni/atendimento-unificado", icon: <Layers className={iconSize} />, desc: t("descAtendimento"), ready: true },
          { label: t("dashboard"), href: "/era-omni/dashboard", icon: <PieChart className={iconSize} />, desc: t("descDashboard"), ready: true },
          { label: t("gestaoEquipes"), href: "/era-omni/gestao-equipes", icon: <Users className={iconSize} />, desc: t("descGestao"), ready: true },
          { label: t("iaAnalise"), href: "/era-omni/ia-analise", icon: <BarChart3 className={iconSize} />, desc: t("descIAAnalise"), ready: true },
          { label: t("canais"), href: "/era-omni/canais", icon: <Radio className={iconSize} />, desc: t("descCanais"), ready: true },
          { label: t("enterprise"), href: "/era-omni/enterprise", icon: <Settings className={iconSize} />, desc: t("descEnterprise"), ready: true },
        ],
      },
    ],
    featured: {
      label: t("featuredPlatform"),
      desc: t("featuredPlatformDesc"),
      href: "/platform",
      bg: "#2b363d",
    },
  }

  // ── Recursos ──
  const recursosMenu: MegaMenuData = {
    label: t("recursos"),
    groups: [
      {
        title: t("grpConteudo"),
        items: [
          { label: t("blog"), href: "https://blog.eracx.com.br", icon: <FileText className={iconSize} />, desc: t("descBlog"), ready: true },
          { label: t("podcast"), href: "https://www.instagram.com/eraumavezpodcast/", icon: <Headphones className={iconSize} />, desc: t("descPodcast"), ready: true, external: true },
          { label: t("whatsappCoex"), href: "/#coex-section", icon: <MessageSquare className={iconSize} />, desc: t("descCoex"), ready: true, isNew: true },
        ],
      },
    ],
  }

  // ── Sobre ──
  const sobreMenu: MegaMenuData = {
    label: t("sobre"),
    groups: [
      {
        title: t("grpEmpresa"),
        items: [
          { label: t("quemSomos"), href: "/about", icon: <Building2 className={iconSize} />, desc: t("descQuemSomos"), ready: true },
          { label: t("cvv"), href: "/institutional/cvv", icon: <Heart className={iconSize} />, desc: t("descCvv"), ready: true },
        ],
      },
    ],
  }

  const menus = [solucoesMenu, recursosMenu]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/80 bg-white">
      <div className="w-full flex justify-center px-6 py-3">
        <div className="w-full max-w-6xl flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image src="/images/era-logo.png" alt="ERA" width={80} height={24} className="h-6 w-auto brightness-0" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {menus.map((menu) => (
              <MegaDropdown key={menu.label} menu={menu} soonLabel={t("soon")} />
            ))}
            <Link href="/pricing" className="text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors">
              {t("planos")}
            </Link>
            <MegaDropdown key={sobreMenu.label} menu={sobreMenu} soonLabel={t("soon")} />
          </div>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-3">
            <Image src="/images/selo-gptw.png" alt="GPTW" width={62} height={62} className="h-[52px] w-[52px] object-contain" />
            <Image src="/images/meta-partner.webp" alt="Meta Business Partner" width={210} height={84} className="h-[72px] w-auto object-contain" />
            <LanguageSwitcher />
            <a
              href="https://nex.era.com.br"
              className="px-4 py-2 text-[12px] font-semibold rounded-lg border border-gray-900 text-gray-900 bg-white hover:bg-gray-50 transition-colors"
            >
              Login
            </a>
            <a
              href="/#lead-capture"
              className="px-4 py-2 text-[12px] font-semibold rounded-lg text-[#1a2429] transition-all hover:brightness-110"
              style={{ backgroundColor: "#cfff00" }}
            >
              {t("ctaHeader")}
            </a>
          </div>

          {/* Mobile right */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-500 hover:text-gray-900 transition-colors p-1"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white/98 backdrop-blur-xl px-6 py-4 max-h-[85vh] overflow-y-auto">
          {menus.map((menu) => (
            <MobileSection key={menu.label} menu={menu} soonLabel={t("soon")} onClose={() => setMobileOpen(false)} />
          ))}
          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium text-gray-700 py-3 border-b border-gray-100"
          >
            {t("planos")}
          </Link>

          {/* Mobile CTA */}
          <div className="pt-4 space-y-3">
            <a
              href="https://nex.era.com.br"
              onClick={() => setMobileOpen(false)}
              className="block text-center px-4 py-2.5 text-sm font-semibold rounded-lg border border-gray-900 text-gray-900 bg-white hover:bg-gray-50 transition-colors"
            >
              Login
            </a>
            <a
              href="/#lead-capture"
              onClick={() => setMobileOpen(false)}
              className="block text-center px-4 py-2.5 text-sm font-semibold rounded-lg text-[#1a2429] hover:brightness-110 transition-all"
              style={{ backgroundColor: "#cfff00" }}
            >
              {t("ctaHeader")}
            </a>
            <SocialIcons className="justify-center pt-2" />
          </div>
        </div>
      )}
    </nav>
  )
}
