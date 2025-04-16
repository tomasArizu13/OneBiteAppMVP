import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import InterestPopup from "@/components/interest-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OneBite - Premium Foodie Experience",
  description: "Exclusive access to premium dining experiences and curated recommendations for true food enthusiasts.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <InterestPopup />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'