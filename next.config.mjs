import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin({
  requestConfig: "./i18n/request.ts",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "blog.eracx.com.br",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
}

export default withNextIntl(nextConfig)
