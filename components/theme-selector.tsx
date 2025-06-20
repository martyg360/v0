"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Palette } from "lucide-react"
import { useCyberpunkTheme } from "@/components/theme-context"
import { cyberpunkThemes, type ThemeName } from "@/lib/themes"
import { cn } from "@/lib/utils"

export function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentTheme, setTheme, theme } = useCyberpunkTheme()

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-950/30",
          `hover:${theme.textHover} dark:hover:${theme.textHover}`,
        )}
      >
        <Palette className="h-4 w-4" />
        <span className="hidden sm:inline">{theme.name}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 z-50 w-48 bg-white/95 dark:bg-black/95 backdrop-blur-xs border border-gray-200 dark:border-blue-900/50 rounded-lg shadow-lg overflow-hidden">
            {Object.entries(cyberpunkThemes).map(([key, themeOption]) => (
              <button
                key={key}
                onClick={() => {
                  setTheme(key as ThemeName)
                  setIsOpen(false)
                }}
                className={cn(
                  "w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors flex items-center gap-3",
                  currentTheme === key && "bg-gray-100 dark:bg-gray-800/50",
                )}
              >
                {/* Color preview */}
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: themeOption.primary }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: themeOption.secondary }} />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{themeOption.name}</span>
                {currentTheme === key && <div className="ml-auto w-2 h-2 rounded-full bg-current" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
