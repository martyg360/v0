import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CyberpunkThemeProvider } from "@/components/theme-context"
import { FontProvider } from "@/components/font-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Orbitron, Rajdhani, Space_Mono, Exo_2, Audiowide, Electrolize, Michroma } from "next/font/google"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
})

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo",
  display: "swap",
})

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-audiowide",
  display: "swap",
})

const electrolize = Electrolize({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-electrolize",
  display: "swap",
})

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
  display: "swap",
})

export const metadata = {
  title: "Marty - Digital Portfolio & Blog",
  description: "Personal portfolio and blog showcasing web development, UI/UX design, and digital art projects.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-gray-50 dark:bg-black font-sans antialiased ${orbitron.variable} ${rajdhani.variable} ${spaceMono.variable} ${exo2.variable} ${audiowide.variable} ${electrolize.variable} ${michroma.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CyberpunkThemeProvider>
            <FontProvider>
              <div className="flex flex-col min-h-screen">
                <Header />
                <div className="grow">{children}</div>
                <Footer />
              </div>
            </FontProvider>
          </CyberpunkThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
