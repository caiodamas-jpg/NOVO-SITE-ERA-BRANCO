"use client"

import { useEffect } from "react"

export function useUTMCapture() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const params = new URLSearchParams(window.location.search)

    // GCLID — prioridade: URL > localStorage > referrer
    let gclid = params.get("gclid")
    if (!gclid) gclid = localStorage.getItem("era_gclid")
    if (!gclid && document.referrer) {
      try {
        const refParams = new URLSearchParams(new URL(document.referrer).search)
        gclid = refParams.get("gclid")
      } catch { /* referrer invalido */ }
    }
    if (gclid) localStorage.setItem("era_gclid", gclid)

    // Landing page — prioridade: localStorage > referrer > URL atual
    if (!localStorage.getItem("era_landing_page")) {
      const landing = document.referrer || window.location.origin
      localStorage.setItem("era_landing_page", landing)
    }

    // UTMs — prioridade: URL > localStorage (URL sobrescreve)
    const utmSource = params.get("utm_source")
    const utmMedium = params.get("utm_medium")
    const utmCampaign = params.get("utm_campaign")

    if (utmSource) localStorage.setItem("era_utm_source", utmSource)
    if (utmMedium) localStorage.setItem("era_utm_medium", utmMedium)
    if (utmCampaign) localStorage.setItem("era_utm_campaign", utmCampaign)
  }, [])
}
