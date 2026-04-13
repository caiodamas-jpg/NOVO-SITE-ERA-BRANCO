"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import dynamic from "next/dynamic"
import { Navbar } from "../navbar"
import {
  MessageSquare,
  Phone,
  Layers,
  Send,
  Bot,
  BarChart3,
  Sparkles,
  Globe,
  Zap,
  Shield,
  Headphones,
  ArrowRight,
  ChevronRight,
  Users,
  Building2,
  CheckCircle2,
  Workflow,
  Palette,
  Database,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const LeadCaptureSection = dynamic(
  () =>
    import("../lead-capture/LeadCaptureSection").then((m) => ({
      default: m.LeadCaptureSection,
    })),
  { ssr: false }
)
const Footer = dynamic(
  () => import("../footer").then((m) => ({ default: m.Footer })),
  { ssr: false }
)

/* ─── Components ─── */

/* ─── Main ─── */

export function PlatformClient() {
  const t = useTranslations("platform")
  const tc = useTranslations("common")
  const tCta = useTranslations("cta")

  /* ─── Data (inside component for translation access) ─── */

  const heroWords = [
    { text: t("word1"), color: "#2b363d" },
    { text: t("word2"), color: "#2b363d" },
    { text: t("word3"), color: "#2b363d" },
  ]

  const platformCategories = [
    {
      id: "comunicacao",
      title: t("catComm"),
      subtitle: t("catCommSub"),
      color: "#2b363d",
      products: [
        {
          name: "Chat",
          description: t("prodChatDesc"),
          icon: MessageSquare,
          features: [
            t("prodChatFeat1"),
            t("prodChatFeat2"),
            t("prodChatFeat3"),
            t("prodChatFeat4"),
          ],
          href: "/era-chat",
          color: "#22c55e",
        },
        {
          name: "Voz",
          description: t("prodVozDesc"),
          icon: Phone,
          features: [
            t("prodVozFeat1"),
            t("prodVozFeat2"),
            t("prodVozFeat3"),
            t("prodVozFeat4"),
          ],
          href: "/era-voz",
          color: "#3b82f6",
        },
        {
          name: "Mensageria",
          description: t("prodOmniDesc"),
          icon: Layers,
          features: [
            t("prodOmniFeat1"),
            t("prodOmniFeat2"),
            t("prodOmniFeat3"),
            t("prodOmniFeat4"),
          ],
          href: "/era-omni",
          color: "#a855f7",
        },
      ],
    },
    {
      id: "infraestrutura",
      title: t("catInfra"),
      subtitle: t("catInfraSub"),
      color: "#3b82f6",
      products: [
        {
          name: "WabaHub",
          description: t("prodWabaDesc"),
          icon: Send,
          features: [
            t("prodWabaFeat1"),
            t("prodWabaFeat2"),
            t("prodWabaFeat3"),
            t("prodWabaFeat4"),
          ],
          href: "#wabahub",
          color: "#22c55e",
        },
        {
          name: "AppComHub",
          description: t("prodAppComDesc"),
          icon: Workflow,
          features: [
            t("prodAppComFeat1"),
            t("prodAppComFeat2"),
            t("prodAppComFeat3"),
            t("prodAppComFeat4"),
          ],
          href: "#appcomhub",
          color: "#f59e0b",
        },
      ],
    },
    {
      id: "atendimento",
      title: t("catService"),
      subtitle: t("catServiceSub"),
      color: "#a855f7",
      products: [
        {
          name: "AppComm Chat",
          description: t("prodAppCommDesc"),
          icon: Headphones,
          features: [
            t("prodAppCommFeat1"),
            t("prodAppCommFeat2"),
            t("prodAppCommFeat3"),
            t("prodAppCommFeat4"),
          ],
          href: "#appcomm-chat",
          color: "#6366f1",
        },
        {
          name: "WebCoEx",
          description: t("prodWebCoExDesc"),
          icon: Globe,
          features: [
            t("prodWebCoExFeat1"),
            t("prodWebCoExFeat2"),
            t("prodWebCoExFeat3"),
            t("prodWebCoExFeat4"),
          ],
          href: "#webcoex",
          color: "#ec4899",
        },
      ],
    },
    {
      id: "dados",
      title: t("catData"),
      subtitle: t("catDataSub"),
      color: "#f59e0b",
      products: [
        {
          name: "CoreMetrics",
          description: t("prodCoreDesc"),
          icon: BarChart3,
          features: [
            t("prodCoreFeat1"),
            t("prodCoreFeat2"),
            t("prodCoreFeat3"),
            t("prodCoreFeat4"),
          ],
          href: "#coremetrics",
          color: "#cfff00",
        },
        {
          name: "Studio Pro",
          description: t("prodStudioDesc"),
          icon: Palette,
          features: [
            t("prodStudioFeat1"),
            t("prodStudioFeat2"),
            t("prodStudioFeat3"),
            t("prodStudioFeat4"),
          ],
          href: "#studio-pro",
          color: "#14b8a6",
        },
      ],
    },
  ]

  const useCases = [
    {
      icon: Building2,
      title: t("useCase1"),
      description: t("useCase1Desc"),
    },
    {
      icon: Users,
      title: t("useCase2"),
      description: t("useCase2Desc"),
    },
    {
      icon: Headphones,
      title: t("useCase3"),
      description: t("useCase3Desc"),
    },
    {
      icon: Zap,
      title: t("useCase4"),
      description: t("useCase4Desc"),
    },
  ]

  const differentials = [
    t("diff1"),
    t("diff2"),
    t("diff3"),
    t("diff4"),
    t("diff5"),
    t("diff6"),
    t("diff7"),
    t("diff8"),
  ]

  /* ─── Inner Components ─── */

  function HeroRotatingWord() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % heroWords.length)
      }, 2500)
      return () => clearInterval(interval)
    }, [])

    return (
      <span className="inline-block relative">
        <AnimatePresence mode="wait">
          <motion.span
            key={heroWords[index].text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block font-semibold"
            style={{ color: heroWords[index].color }}
          >
            {heroWords[index].text}
          </motion.span>
        </AnimatePresence>
      </span>
    )
  }

  function ProductCard({
    product,
    index,
  }: {
    product: (typeof platformCategories)[0]["products"][0]
    index: number
  }) {
    const Icon = product.icon
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        className="group bg-white border border-gray-200 hover:border-gray-300 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col"
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
          style={{ backgroundColor: `${product.color}12` }}
        >
          <Icon className="w-6 h-6" style={{ color: product.color }} />
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
          {product.description}
        </p>
        <ul className="space-y-2 mb-6">
          {product.features.map((feat) => (
            <li
              key={feat}
              className="flex items-center gap-2 text-gray-500 text-xs"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              {feat}
            </li>
          ))}
        </ul>
        <Link
          href={product.href}
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors group-hover:gap-2.5"
          style={{ color: product.color }}
        >
          {t("explore")}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    )
  }
  return (
    <section className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero Section ── */}
      <div className="relative overflow-hidden bg-gray-50">
        {/* Subtle glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "1200px",
            height: "800px",
            background:
              "radial-gradient(ellipse at center, rgba(43, 54, 61, 0.03) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-300 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#2b363d] animate-pulse" />
              <span className="text-gray-500 text-xs">
                {t("badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-medium text-gray-900 leading-[1.1] max-w-3xl"
              style={{
                letterSpacing: "-0.0325em",
                fontVariationSettings: '"opsz" 28',
              }}
            >
              {t("title")}
              <br />
              {t("titleConnector")} <HeroRotatingWord />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed"
            >
              {t("description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#produtos"
                className="px-5 py-2.5 bg-[#2b363d] text-white font-medium rounded-lg hover:bg-[#1e272e] transition-colors text-sm"
              >
                {t("exploreProducts")}
              </a>
              <a
                href="#lead-capture"
                className="px-5 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors text-sm"
              >
                {t("talkSpecialist")}
              </a>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Product Categories ── */}
      <div id="produtos" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium mb-3 tracking-wide uppercase text-[#2b363d]">
              {t("productsLabel")}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-gray-900 tracking-tight mb-4">
              {t("productsHeading")}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {t("productsDesc")}
            </p>
          </motion.div>

          {/* Categories */}
          {platformCategories.map((category) => (
            <div key={category.id} className="mb-20 last:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-3"
              >
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3 className="text-xl font-medium text-gray-900">
                  {category.title}
                </h3>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-500 text-sm mb-8 ml-4"
              >
                {category.subtitle}
              </motion.p>

              <div
                className={`grid gap-5 ${
                  category.products.length === 3
                    ? "grid-cols-1 md:grid-cols-3"
                    : "grid-cols-1 md:grid-cols-2"
                }`}
              >
                {category.products.map((product, i) => (
                  <ProductCard key={product.name} product={product} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Use Cases ── */}
      <div className="px-6 py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-medium mb-3 tracking-wide uppercase text-[#2b363d]">
              {t("useCasesLabel")}
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-4">
              {t("useCasesHeading")}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {t("useCasesDesc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {useCases.map((uc, i) => {
              const Icon = uc.icon
              return (
                <motion.div
                  key={uc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2b363d]/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#2b363d]" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium mb-1.5">
                        {uc.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {uc.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Why ERA (Differentials) ── */}
      <div className="px-6 py-20 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-medium mb-3 tracking-wide uppercase text-[#2b363d]">
                {t("whyLabel")}
              </p>
              <h2
                className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-5"
                style={{ lineHeight: 1.15 }}
              >
                {t("whyHeading1")}
                <br />
                {t("whyHeading2")}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                {t("whyDesc")}
              </p>
              <a
                href="#lead-capture"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2b363d] text-white font-medium rounded-lg hover:bg-[#1e272e] transition-colors text-sm"
              >
                {tCta("start")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Right — checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              {differentials.map((diff, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2b363d] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{diff}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Ecosystem Visual ── */}
      <div className="px-6 py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium mb-3 tracking-wide uppercase text-[#2b363d]">
              {t("ecoLabel")}
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-4">
              {t("ecoHeading")}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-12">
              {t("ecoDesc")}
            </p>
          </motion.div>

          {/* Ecosystem grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: "Chat", icon: MessageSquare, color: "#22c55e" },
                { name: "Voz", icon: Phone, color: "#3b82f6" },
                { name: "Mensageria", icon: Layers, color: "#a855f7" },
                { name: "WabaHub", icon: Send, color: "#22c55e" },
                { name: "AppComHub", icon: Workflow, color: "#f59e0b" },
                { name: "AppComm Chat", icon: Headphones, color: "#6366f1" },
                { name: "CoreMetrics", icon: BarChart3, color: "#cfff00" },
                { name: "Studio Pro", icon: Palette, color: "#14b8a6" },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                    className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:shadow-md transition-all"
                  >
                    <Icon
                      className="w-6 h-6 mx-auto mb-2"
                      style={{ color: item.color }}
                    />
                    <p className="text-gray-900 text-xs font-medium">
                      {item.name}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            {/* Center label */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
              <Database className="w-4 h-4 text-[#2b363d]" />
              <span className="text-gray-600 text-xs font-medium">
                {t("dataShared")}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Social Proof ── */}
      <div className="px-6 py-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-16"
          >
            {t("trustHeading")}
          </motion.h2>

          <div className="flex flex-wrap items-center justify-center gap-12 mb-16">
            {[
              "decathlon",
              "cobasi",
              "pizzahut",
              "unifique",
              "sicoob",
              "puc-campinas",
              "cultura-inglesa",
              "unimed",
            ].map((name) => (
              <div key={name} className="h-14 w-36 flex items-center justify-center">
                <Image
                  src={`/images/customers/${name}.png`}
                  alt={name}
                  width={140}
                  height={56}
                  className="w-auto h-10 object-contain opacity-40 hover:opacity-80 transition-opacity grayscale"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="flex items-center gap-4">
              <Image
                src="/images/selo-gptw.png"
                alt="Selo GPTW"
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
              />
              <div className="text-left">
                <p className="text-gray-900 font-medium text-sm">
                  {t("gptwTitle")}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  {t("gptwSub")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/selo-google.png"
                alt="Selo Google"
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
              />
              <div className="text-left">
                <p className="text-gray-900 font-medium text-sm">
                  {t("googleTitle")}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">{t("googleSub")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Lead Capture ── */}
      <LeadCaptureSection />

      {/* ── Final CTA ── */}
      <div className="px-6 py-24 bg-[#2b363d]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-[42px] font-medium text-white tracking-tight mb-5"
          >
            {t("finalHeading")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 mb-8 max-w-xl mx-auto"
          >
            {t("finalDesc")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-3"
          >
            <a
              href="#lead-capture"
              className="px-5 py-2.5 font-medium rounded-lg text-white transition-all hover:brightness-110 text-sm"
              style={{ backgroundColor: "#cfff00" }}
            >
              {tCta("sales")}
            </a>
            <a
              href="#lead-capture"
              className="px-5 py-2.5 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors text-sm"
            >
              {tCta("start")}
            </a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </section>
  )
}
