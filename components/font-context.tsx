"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { cyberpunkFonts, type FontName } from "@/lib/fonts"

interface FontContextType {
  currentFont: FontName
  setFont: (font: FontName) => void
  font: typeof cyberpunkFonts.default
}

const FontContext = createContext<FontContextType | undefined>(undefined)

export function FontProvider({ children }: { children: React.ReactNode }) {
  const [currentFont, setCurrentFont] = useState<FontName>("default")

  useEffect(() => {
    const saved = localStorage.getItem("cyberpunk-font") as FontName
    if (saved && cyberpunkFonts[saved]) {
      setCurrentFont(saved)
    }
  }, [])

  const setFont = (font: FontName) => {
    setCurrentFont(font)
    localStorage.setItem("cyberpunk-font", font)
  }

  const font = cyberpunkFonts[currentFont]

  return <FontContext.Provider value={{ currentFont, setFont, font }}>{children}</FontContext.Provider>
}

export function useCyberpunkFont() {
  const context = useContext(FontContext)
  if (context === undefined) {
    throw new Error("useCyberpunkFont must be used within a FontProvider")
  }
  return context
}
