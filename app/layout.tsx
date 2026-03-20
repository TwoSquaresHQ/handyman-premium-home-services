import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Oakwell House Care | Premium Handyman Template",
  description:
    "Premium handyman website template for residential maintenance, polished local trust, and higher-quality home-service presentation.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

