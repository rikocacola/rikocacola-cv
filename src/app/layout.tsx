import type { Metadata, Viewport } from "next";
import { Kumbh_Sans } from "next/font/google";

import "@/app/globals.css";

/**
 * Self-hosted by next/font, so there's no third-party font origin to allow in
 * the CSP and no layout shift on first paint. Weights match the set the
 * previous site loaded from Google Fonts.
 */
const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-kumbh-sans",
});

export const metadata: Metadata = {
  // Resolves relative OG/icon URLs. Set NEXT_PUBLIC_SITE_URL in the deploy env.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Riko Chair Nugroho — Frontend Developer",
    template: "%s · Riko Chair Nugroho",
  },
  description:
    "Frontend developer in Jakarta. I lead frontend work on internal business applications, currently Astra International's sales operation platform.",
  applicationName: "Riko Chair Nugroho",
  authors: [{ name: "Riko Chair Nugroho" }],
  icons: {
    icon: [
      { url: "/rcn-icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/rcn-icon.png",
  },
  openGraph: {
    type: "profile",
    title: "Riko Chair Nugroho — Frontend Developer",
    description:
      "Frontend developer in Jakarta, leading frontend work on internal business applications.",
    images: ["/rcn-icon.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#24374a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={kumbhSans.variable}>
      <body>{children}</body>
    </html>
  );
}
