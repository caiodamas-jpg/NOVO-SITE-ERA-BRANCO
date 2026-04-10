import type { MetadataRoute } from 'next'

const BASE_URL = 'https://eracx.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['pt', 'en', 'es']
  const now = new Date()

  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/era-chat', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/era-chat/whatsapp', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/era-chat/redes-sociais', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/era-chat/chatbot', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/era-chat/ia-generativa', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/era-chat/livechat', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/era-chat/marketplace', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/era-chat/disparos', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/era-chat/sms', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/era-chat/rcs', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/era-chat/email', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/era-voz', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/era-voz/pabx', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/era-voz/telefonia', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/era-voz/ura', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/era-voz/call-center', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/era-voz/discador', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/era-voz/monitoramento', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/era-voz/relatorios', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/era-voz/cti', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/era-voz/campanhas', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/era-omni', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/era-omni/atendimento-unificado', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/era-omni/dashboard', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/era-omni/gestao-equipes', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/era-omni/ia-analise', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/era-omni/canais', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/era-omni/enterprise', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/plataforma/flows', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/plataforma/crm', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/plataforma/tickets', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/plataforma/api', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/plataforma/marketplace', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/plataforma/analytics', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/plataforma/surveys', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/pricing', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/integrations', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/platform', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/institutional/cvv', priority: 0.6, changeFrequency: 'yearly' as const },
    { path: '/politica-de-privacidade', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const entries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      })
    }
  }

  return entries
}
