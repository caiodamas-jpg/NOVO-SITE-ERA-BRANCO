"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import Image from "next/image"

interface YouTubeVideo {
  id: string
  title: string
}

function useLatestYouTubeVideo(channelId: string) {
  const [video, setVideo] = useState<YouTubeVideo | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLatestVideo() {
      try {
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
        const proxies = [
          `https://corsproxy.io/?${encodeURIComponent(rssUrl)}`,
          `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`,
        ]
        let text = ""
        for (const proxyUrl of proxies) {
          try {
            const res = await fetch(proxyUrl, { signal: AbortSignal.timeout(5000) })
            if (res.ok) {
              text = await res.text()
              break
            }
          } catch {
            continue
          }
        }
        if (!text) {
          setLoading(false)
          return
        }

        const parser = new DOMParser()
        const xml = parser.parseFromString(text, "text/xml")
        const entries = xml.querySelectorAll("entry")

        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i]
          const videoId = entry.querySelector("yt\\:videoId, videoId")?.textContent || ""
          const title = entry.querySelector("title")?.textContent || ""
          const link = entry.querySelector("link")?.getAttribute("href") || ""

          if (link.includes("/shorts/")) continue

          try {
            const oembedRes = await fetch(
              `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
            )
            const oembed = await oembedRes.json()
            if (oembed.width && oembed.height && oembed.height > oembed.width) continue
          } catch {
            // Accept video if oEmbed fails
          }

          setVideo({ id: videoId, title })
          break
        }
      } catch {
        // Silent fallback
      } finally {
        setLoading(false)
      }
    }

    fetchLatestVideo()
  }, [channelId])

  return { video, loading }
}

function YouTubeLite({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    )
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="relative w-full h-full bg-white group cursor-pointer"
      aria-label={`Assistir: ${title}`}
    >
      {/* YouTube thumbnail - loaded lazily */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
        <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play className="w-6 h-6 text-gray-900 ml-1" fill="white" />
        </div>
      </div>
    </button>
  )
}

export function PodcastSection() {
  const CHANNEL_ID = "UC2mgTHTnSv3jklOue2sS70A"
  const { video, loading } = useLatestYouTubeVideo(CHANNEL_ID)

  const videoId = video?.id || "CTYAxDjPU-4"
  const videoTitle = video?.title || "Era Uma Vez Podcast"

  return (
    <section className="relative" style={{ backgroundColor: "#000000" }}>
      <div className="relative w-full">
        <Image
          src="/images/era-uma-vez-podcast-banner.png"
          alt="Era Uma Vez Podcast"
          width={1920}
          height={480}
          className="w-full h-auto object-contain"
          sizes="100vw"
          loading="lazy"
        />

        <div className="absolute top-1/2 right-4 md:right-8 lg:right-16 -translate-y-1/2 w-[45%] md:w-[40%] lg:w-[35%]">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {loading ? (
              <div className="w-full aspect-video rounded-xl bg-gray-100 animate-pulse flex items-center justify-center">
                <Play className="w-10 h-10 text-gray-500" />
              </div>
            ) : (
              <div className="w-full aspect-video rounded-xl overflow-hidden border-2 border-[#cfff00]/30 shadow-2xl shadow-black/50">
                <YouTubeLite videoId={videoId} title={videoTitle} />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
