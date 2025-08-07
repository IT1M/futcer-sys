import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_Arabic } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Sidebar } from "@/components/sidebar"
import "./globals.css"

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-arabic",
  display: "swap",
})

export const metadata: Metadata = {
  title: "نظام إدارة الموارد البشرية",
  description: "نظام شامل لإدارة الموارد البشرية باللغة العربية",
  keywords: ["موارد بشرية", "إدارة", "موظفين", "رواتب", "إجازات"],
  authors: [{ name: "فريق التطوير" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={notoSansArabic.variable}>
      <body className="font-arabic antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex h-screen bg-gray-50">
            <Sidebar />
            <main className="flex-1 overflow-auto">{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
