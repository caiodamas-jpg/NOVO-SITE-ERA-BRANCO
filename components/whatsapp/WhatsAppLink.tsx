"use client"

import { useWhatsAppGate } from "./WhatsAppGate"

interface WhatsAppLinkProps {
  children: React.ReactNode
  className?: string
  message?: string
  style?: React.CSSProperties
}

export function WhatsAppLink({ children, className, message, style }: WhatsAppLinkProps) {
  const { openWhatsAppGate } = useWhatsAppGate()

  return (
    <button
      onClick={() => openWhatsAppGate(message)}
      className={className}
      style={style}
    >
      {children}
    </button>
  )
}
