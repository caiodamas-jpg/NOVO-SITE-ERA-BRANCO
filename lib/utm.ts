export interface UTMData {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  gclid?: string
  pageUrl: string
  landingPage: string
}

export const mapSourceId = (source?: string): string => {
  if (!source) return "UC_JR5LKO"
  const s = source.toLowerCase()
  if (s.includes("youtube")) return "UC_H7X5M3"
  if (s.includes("google")) return "CALL"
  if (s.includes("meta") || s.includes("facebook")) return "UC_8YSJXW"
  if (s.includes("instagram")) return "UC_3SWS17"
  if (s.includes("email")) return "UC_D5FW00"
  return "UC_JR5LKO"
}

export function getStoredUTMData(): UTMData {
  if (typeof window === "undefined") {
    return { pageUrl: "", landingPage: "" }
  }
  return {
    utm_source: localStorage.getItem("era_utm_source") || undefined,
    utm_medium: localStorage.getItem("era_utm_medium") || undefined,
    utm_campaign: localStorage.getItem("era_utm_campaign") || undefined,
    gclid: localStorage.getItem("era_gclid") || undefined,
    pageUrl: window.location.href,
    landingPage: localStorage.getItem("era_landing_page") || window.location.href,
  }
}
