import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "THR APP — Две стороны. Одна история.",
  description: "Откройте общий мир фракций Тедкарей и Хижаков. Скачайте THR APP для Android и продолжите историю по-своему.",
  applicationName: "THR APP",
  openGraph: {
    title: "THR APP — Две стороны. Одна история.",
    description: "Общий мир фракций Тедкарей и Хижаков — скачайте приложение для Android.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#10110f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>
}
