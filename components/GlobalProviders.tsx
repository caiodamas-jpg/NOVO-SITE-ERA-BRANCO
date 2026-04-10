"use client"

import { usePathname } from "next/navigation"
import { useUTMCapture } from "@/hooks/useUTMCapture"
import { WhatsAppFloatingButton } from "./whatsapp/WhatsAppFloatingButton"
import { WhatsAppGateProvider } from "./whatsapp/WhatsAppGate"

export function GlobalProviders({ children }: { children: React.ReactNode }) {
  useUTMCapture()
  const pathname = usePathname()
  const hideWhatsApp = pathname === "/thanks"

  return (
    <WhatsAppGateProvider>
      {children}
      {!hideWhatsApp && <WhatsAppFloatingButton />}
    </WhatsAppGateProvider>
  )
}
