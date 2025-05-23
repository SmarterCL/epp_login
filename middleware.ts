import { clerkMiddleware } from "@clerk/nextjs/server"

export default clerkMiddleware()

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next|[^?]*\\.(jpg|jpeg|gif|png|svg|ico|css|js|woff|woff2)).*)",
    // Always run for API routes
    "/api/(.*)",
  ],
}
