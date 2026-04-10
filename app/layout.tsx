import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Script from 'next/script'
import { GlobalProviders } from '@/components/GlobalProviders'
import './globals.css'

const geist = Geist({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: 'ERA — Plataforma de Comunicação Omnichannel | Chat, Voz e IA',
    template: '%s | ERA',
  },
  description: 'Plataforma omnichannel completa para atendimento ao cliente. WhatsApp Business API, PABX em nuvem, CRM, chatbot com IA, call center e +50 integrações. Usada por Decathlon, Cobasi, Unimed e +335 empresas.',
  keywords: ['atendimento omnichannel', 'WhatsApp Business API', 'PABX em nuvem', 'chatbot IA', 'call center', 'CRM', 'ERA', 'plataforma de comunicação'],
  authors: [{ name: 'ERA', url: 'https://eracx.com.br' }],
  creator: 'ERA',
  publisher: 'ERA',
  metadataBase: new URL('https://eracx.com.br'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt',
      'en': '/en',
      'es': '/es',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://eracx.com.br',
    siteName: 'ERA',
    title: 'ERA — Plataforma de Comunicação Omnichannel',
    description: 'Chat, Voz e IA em uma plataforma. WhatsApp Business API, PABX, CRM, chatbot e +50 integrações.',
    images: [{ url: '/images/og-era.png', width: 1200, height: 630, alt: 'ERA — Plataforma de Comunicação Omnichannel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERA — Plataforma de Comunicação Omnichannel',
    description: 'Chat, Voz e IA em uma plataforma. WhatsApp, PABX, CRM, chatbot e +50 integrações.',
    images: ['/images/og-era.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        {/* Organization JSON-LD with sameAs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ERA",
              url: "https://eracx.com.br",
              description: "ERA CX — Customer Engagement Platform",
              sameAs: [
                "https://blog.eracx.com.br",
                "https://www.instagram.com/era.com.br/",
                "https://www.youtube.com/@minhaeravideos",
                "https://www.linkedin.com/company/14838972",
              ],
            }),
          }}
        />
        {/* Google Tag Manager - deferred for performance */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5PV4P4FT');`}
        </Script>
        {/* Google Ads (gtag.js) - deferred */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17439731082"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('set', { cookie_domain: 'auto', cookie_flags: 'SameSite=None;Secure' });
gtag('config', 'AW-17439731082', { cookie_domain: 'auto', cookie_flags: 'SameSite=None;Secure' });
gtag('config', 'G-689V111CQ3', { cookie_domain: 'auto', cookie_flags: 'SameSite=None;Secure' });`}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5PV4P4FT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <GlobalProviders>
          {children}
        </GlobalProviders>
      </body>
    </html>
  )
}
