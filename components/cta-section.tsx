"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

export function CTASection() {
  const t = useTranslations("cta")
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: "#2b363d" }}>
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(34, 197, 94, 0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-white tracking-tight mb-[30px]">
          {t("heading")}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-12">
          {/* GPTW */}
          <div className="flex items-center gap-5">
            <Image
              src="/images/selo-gptw.png"
              alt="Selo GPTW"
              width={80}
              height={80}
              className="w-20 h-20 object-contain"
            />
            <div className="text-left">
              <p className="text-white font-medium text-sm">{t("gptw")}</p>
              <p className="text-white/50 text-xs mt-0.5">{t("gptwSub")}</p>
            </div>
          </div>

          {/* Google */}
          <div className="flex items-center gap-5">
            <Image
              src="/images/selo-google.png"
              alt="Selo Google 4.9"
              width={80}
              height={80}
              className="w-20 h-20 object-contain"
            />
            <div className="text-left">
              <p className="text-white font-medium text-sm">{t("google")}</p>
              <p className="text-white/50 text-xs mt-0.5">{t("googleSub")}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <a href="#lead-capture" className="px-4 py-2 md:px-5 md:py-2.5 font-medium rounded-lg text-[#1a2429] transition-all hover:brightness-110 text-xs md:text-sm" style={{ backgroundColor: "#cfff00" }}>
            {t("sales")}
          </a>
          <a href="#lead-capture" className="px-4 py-2 md:px-5 md:py-2.5 font-medium rounded-lg hover:opacity-90 transition-opacity text-xs md:text-sm bg-white text-gray-900">
            {t("start")}
          </a>
        </div>
      </div>
    </section>
  )
}
