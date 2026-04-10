import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)

export const config = {
  matcher: [
    // Match all pathnames except for
    // - /api (API routes)
    // - /_next (Next.js internals)
    // - /icon.png, /images, /fonts (static files)
    "/((?!api|_next|icon\\.png|images|fonts|.*\\..*).*)",
  ],
}
