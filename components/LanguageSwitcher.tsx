"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"
import { locales } from "@/i18n/config"
import { useState, useRef, useEffect } from "react"

const localeLabels: Record<string, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
}

const localeNames: Record<string, string> = {
  pt: "Portugues",
  en: "English",
  es: "Espanol",
}

function Flag({ locale, className }: { locale: string; className?: string }) {
  const flags: Record<string, React.ReactNode> = {
    pt: (
      <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <path fill="#229e45" d="M0 0h640v480H0z"/>
        <path fill="#f8e509" d="M321.4 36.2L572.1 240 321.4 443.8 70.7 240z"/>
        <circle fill="#2b49a3" cx="321.4" cy="240" r="113.4"/>
        <path fill="#fff" d="M195.6 272.3c0-50.4 36.2-92.5 84.1-101.5a113.3 113.3 0 0 0-41.7 57.8c31.5-4.5 66.8-2.2 105.3 7.5 38.5 9.7 69.6 24 92.2 40.7a113.2 113.2 0 0 0 0-12.8c0-5-.3-9.9-.9-14.7-25.7-19.5-60.4-35.7-103.5-46.5-43.1-10.8-82.7-13.2-117-8.1a113.6 113.6 0 0 0-18.5 77.6z"/>
      </svg>
    ),
    en: (
      <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <path fill="#012169" d="M0 0h640v480H0z"/>
        <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
        <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
        <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
        <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
      </svg>
    ),
    es: (
      <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
        <path fill="#AA151B" d="M0 0h640v480H0z"/>
        <path fill="#F1BF00" d="M0 120h640v240H0z"/>
      </svg>
    ),
  }
  return <>{flags[locale] || null}</>
}

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale as any })
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors text-xs font-medium"
      >
        <Flag locale={locale} className="w-4 h-3 rounded-[2px] object-cover flex-shrink-0" />
        {localeLabels[locale]}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[140px] z-50">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`w-full text-left px-3 py-2 text-xs hover:bg-gray-50 transition-colors flex items-center gap-2.5 ${
                l === locale
                  ? "text-gray-900 font-medium bg-gray-50"
                  : "text-gray-500"
              }`}
            >
              <Flag locale={l} className="w-5 h-3.5 rounded-[2px] object-cover flex-shrink-0" />
              {localeNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
