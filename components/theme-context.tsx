"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { cyberpunkThemes, type ThemeName } from "@/lib/themes"

interface ThemeContextType {
  currentTheme: ThemeName
  setTheme: (theme: ThemeName) => void
  theme: typeof cyberpunkThemes.neon
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function CyberpunkThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>("neon")

  useEffect(() => {
    const saved = localStorage.getItem("cyberpunk-theme") as ThemeName
    if (saved && cyberpunkThemes[saved]) {
      setCurrentTheme(saved)
    }
  }, [])

  const setTheme = (theme: ThemeName) => {
    setCurrentTheme(theme)
    localStorage.setItem("cyberpunk-theme", theme)
  }

  const theme = cyberpunkThemes[currentTheme]

  return <ThemeContext.Provider value={{ currentTheme, setTheme, theme }}>{children}</ThemeContext.Provider>
}

export function useCyberpunkTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useCyberpunkTheme must be used within a CyberpunkThemeProvider")
  }
  return context
}
