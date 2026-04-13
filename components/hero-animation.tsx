"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import "./hero-animation.css"

const WAVEFORM_BARS = [30, 55, 80, 45, 90, 60, 35, 75, 50, 85, 40, 65, 25, 70, 55, 80, 35]
const ANALYTICS_BARS = [25, 50, 75, 100, 60, 90, 45, 80, 55, 70]

/* ─── SVG Icons ─── */
const WaPhoneSvg = () => (
  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.57-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/></svg>
)

const PersonSvg = () => (
  <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
)

const PhoneCallSvg = () => (
  <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
)

const PhoneHangUpSvg = () => (
  <svg viewBox="0 0 24 24"><path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08a.956.956 0 010-1.36C3.42 8.65 7.46 7 12 7s8.58 1.65 11.71 4.72c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.1-.7-.28-.79-.74-1.68-1.36-2.66-1.85a.993.993 0 01-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z"/></svg>
)

const InstagramSvg = () => (
  <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
)

const MessengerSvg = () => (
  <svg viewBox="0 0 24 24"><path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.2 5.42 3.15 7.2.16.15.26.36.27.58l.05 1.82c.02.56.6.93 1.11.7l2.03-.9c.17-.08.36-.1.55-.06.93.25 1.92.39 2.84.39 5.64 0 10-4.13 10-9.7C22 6.13 17.64 2 12 2zm5.89 7.55l-2.88 4.57c-.46.73-1.44.91-2.12.39l-2.29-1.72a.6.6 0 00-.72 0l-3.09 2.34c-.41.31-.95-.17-.67-.6l2.88-4.57c.46-.73 1.44-.91 2.12-.39l2.29 1.72a.6.6 0 00.72 0l3.09-2.34c.41-.31.95.17.67.6z"/></svg>
)

const TelegramSvg = () => (
  <svg viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
)

type CSSVars = React.CSSProperties & {
  "--depth"?: number
  "--del"?: string
  "--dur"?: string
}

const CANVAS_W = 1100
const CANVAS_H = 440

export function HeroAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const [scale, setScale] = useState(1)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width
      setScale(Math.min(w / CANVAS_W, 1))
    })
    ro.observe(wrapper)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const el = canvasRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = canvasRef.current
    if (!el) return
    requestAnimationFrame(() => {
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      el.style.setProperty("--mx", x.toFixed(3))
      el.style.setProperty("--my", y.toFixed(3))
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = canvasRef.current
    if (!el) return
    el.style.setProperty("--mx", "0")
    el.style.setProperty("--my", "0")
  }, [])

  const cls = `hero-canvas ${isVisible ? "is-visible" : ""}`

  return (
    <div ref={wrapperRef} className="hero-animation-wrapper" style={{ height: CANVAS_H * scale }}>
      <div
        className={cls}
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `scale(${scale})` }}
      >

      {/* 1. CODE TERMINAL */}
      <div className="hero-parallax" style={{ "--depth": 3, zIndex: 2 } as CSSVars}>
        <div className="hero-entrance slide-up" style={{ "--del": "0s", "--dur": "0.9s" } as CSSVars}>
          <div className="code-terminal">
            <div className="code-header">
              <span className="code-dot" /><span className="code-dot" /><span className="code-dot" />
            </div>
            <div className="code-body">
              <span className="kw">const</span>{" "}<span className="prop">opcoesDeChamada</span>{" = {\n"}
              {"  "}<span className="prop">numeroOrigem</span>{": "}<span className="str">{`'+5511987654321'`}</span>{", "}<span className="cmt">{"// Seu numero que"}</span>{"\n"}
              {"  "}<span className="cmt">iniciara a chamada</span>{"\n"}
              {"  "}<span className="prop">numeroDestino</span>{": "}<span className="str">{`'+5511998765432'`}</span>{", "}<span className="cmt">{"// Numero do"}</span>{"\n"}
              {"  "}<span className="cmt">destinatario da chamada</span>{"\n"}
              {"  "}<span className="prop">urlWebhook</span>{": "}<span className="str">{`'https://meuservidor.com/webhook'`}</span>{" "}<span className="cmt">{"// URL para"}</span>{"\n"}
              {"  "}<span className="cmt">receber eventos da chamada</span>{"\n"}
              {"};\n\n"}
              <span className="kw">function</span>{" "}<span className="fn">iniciarChamada</span>{"(opcoes) {\n"}
              {"  vozClient.chamadas.criar(opcoes)\n"}
              {"    .then(resposta => {"}
            </div>
          </div>
        </div>
      </div>

      {/* 2. AUDIO PLAYER */}
      <div className="hero-parallax" style={{ "--depth": 5, zIndex: 6 } as CSSVars}>
        <div className="hero-entrance fade-slide-down" style={{ "--del": "0.5s", "--dur": "0.7s" } as CSSVars}>
          <div className="audio-player">
            <div className="play-btn" />
            <div className="waveform">
              {WAVEFORM_BARS.map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
            </div>
          </div>
        </div>
      </div>

      {/* 3. FLOWCHART */}
      <div className="hero-parallax" style={{ "--depth": 2, zIndex: 3 } as CSSVars}>
        <div className="hero-entrance scale-up" style={{ "--del": "1.1s", "--dur": "0.8s" } as CSSVars}>
          <div className="flowchart-card">
            <div className="flow-titlebar" />
            <div className="flow-grid">
              <div className="flow-node flow-node-wa"><WaPhoneSvg /></div>
              <div className="flow-connector flow-connector-h" />
              <div className="flow-node flow-node-instagram"><InstagramSvg /></div>

              <div className="flow-connector flow-connector-v" />
              <div className="flow-connector flow-connector-cross" />
              <div className="flow-connector flow-connector-v" />

              <div className="flow-node flow-node-telegram"><TelegramSvg /></div>
              <div className="flow-connector flow-connector-h" />
              <div className="flow-node flow-node-messenger"><MessengerSvg /></div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. WHATSAPP CARD */}
      <div className="hero-parallax" style={{ "--depth": 8, zIndex: 8 } as CSSVars}>
        <div className="hero-entrance drop-bounce" style={{ "--del": "1.7s", "--dur": "0.7s" } as CSSVars}>
          <div className="whatsapp-card card">
            <div className="wa-label">WhatsApp</div>
            <div className="wa-row">
              <div className="wa-icon"><WaPhoneSvg /></div>
              <span className="wa-number">347892</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. EMAIL CARD */}
      <div className="hero-parallax" style={{ "--depth": 7, zIndex: 7 } as CSSVars}>
        <div className="hero-entrance slide-right" style={{ "--del": "2.1s", "--dur": "0.7s" } as CSSVars}>
          <div className="email-section">
            <div className="email-top">
              <span className="email-dot" />
              <span>login@minhaera.com</span>
            </div>
            <div className="email-card">
              <div className="email-avatar"><PersonSvg /></div>
              <div className="email-name">Ola Marina!</div>
              <span className="email-cta">Experimente gratis</span>
            </div>
          </div>
        </div>
      </div>

      {/* 6. CHAT NOTIFICATIONS */}
      <div className="hero-parallax" style={{ "--depth": 4, zIndex: 1 } as CSSVars}>
        <div className="hero-entrance cascade-down" style={{ "--del": "2.6s", "--dur": "0.85s" } as CSSVars}>
          <div className="notifications-stack">
            <div className="notif-card">
              <div className="notif-icon notif-whatsapp"><WaPhoneSvg /></div>
              <div className="notif-lines"><span /><span /></div>
            </div>
            <div className="notif-card">
              <div className="notif-icon notif-instagram"><InstagramSvg /></div>
              <div className="notif-lines"><span /><span /></div>
            </div>
            <div className="notif-card">
              <div className="notif-icon notif-messenger"><MessengerSvg /></div>
              <div className="notif-lines"><span /><span /></div>
            </div>
            <div className="notif-card">
              <div className="notif-icon notif-telegram"><TelegramSvg /></div>
              <div className="notif-lines"><span /><span /></div>
            </div>
            <div className="notif-card">
              <div className="notif-icon notif-whatsapp"><WaPhoneSvg /></div>
              <div className="notif-lines"><span /><span /></div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. ANALYTICS */}
      <div className="hero-parallax" style={{ "--depth": 6, zIndex: 4 } as CSSVars}>
        <div className="hero-entrance slide-up" style={{ "--del": "3.2s", "--dur": "0.7s" } as CSSVars}>
          <div className="analytics-section">
            <div className="analytics-labels"><span /><span style={{ width: "18%" }} /></div>
            <div className="analytics-bars">
              {ANALYTICS_BARS.map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
            </div>
          </div>
        </div>
      </div>

      {/* 8. FORM / INPUT */}
      <div className="hero-parallax" style={{ "--depth": 6, zIndex: 5 } as CSSVars}>
        <div className="hero-entrance slide-up" style={{ "--del": "3.6s", "--dur": "0.7s" } as CSSVars}>
          <div className="form-card card">
            <div className="form-title-lines"><span /><span /></div>
            <div className="form-input">+55 X XXXX-XXXX</div>
            <div className="form-subtitle" />
            <div className="form-tags">
              <div className="form-tag"><span className="form-tag-dot green" /><span className="form-tag-line" /></div>
              <div className="form-tag"><span className="form-tag-dot gray" /><span className="form-tag-line" /></div>
              <div className="form-tag"><span className="form-tag-dot green" /><span className="form-tag-line" /></div>
            </div>
          </div>
        </div>
      </div>

      {/* 9. MOBILE PHONE — GRAND FINALE */}
      <div className="hero-parallax" style={{ "--depth": 12, zIndex: 9 } as CSSVars}>
        <div className="hero-entrance slide-right-grand" style={{ "--del": "4.2s", "--dur": "1.0s" } as CSSVars}>
          <div className="phone-wrapper">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="phone-notch" />
                <div className="phone-call-label">Chamada Recebida</div>
                <div className="phone-call-sub">ERA</div>
                <div className="phone-avatar"><PersonSvg /></div>
                <div className="phone-actions">
                  <div className="phone-action-btn small"><PersonSvg /></div>
                  <div className="phone-action-btn small"><PersonSvg /></div>
                  <div className="phone-action-btn decline"><PhoneHangUpSvg /></div>
                  <div className="phone-action-btn accept"><PhoneCallSvg /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}
