import type { NextConfig } from "next";

/**
 * Content Security Policy.
 *
 * Everything this app loads is first-party: fonts are self-hosted by
 * next/font, images live in public/, and there are no third-party scripts.
 * That lets the policy stay tight — the only concession is 'unsafe-inline'
 * for styles, which Next's runtime style injection requires.
 *
 * React's dev overlay needs eval, so it is permitted in development only.
 */
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  process.env.NODE_ENV === "development"
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
    : "script-src 'self' 'unsafe-inline'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-DNS-Prefetch-Control", value: "off" },
];

const nextConfig: NextConfig = {
  // Emits .next/standalone with a self-contained server.js and only the
  // node_modules actually traced as reachable. This is what the Docker
  // runtime stage copies, and it's why the final image stays small.
  output: "standalone",
  reactStrictMode: true,
  // Don't advertise the framework version to attackers.
  poweredByHeader: false,
  images: {
    // Every asset is local, so no remote loader is allowed. This closes the
    // image-optimizer SSRF surface entirely.
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
