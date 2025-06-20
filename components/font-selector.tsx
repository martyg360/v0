"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Type } from "lucide-react"
import { useCyberpunkFont } from "@/components/font-context"
import { useCyberpunkTheme } from "@/components/theme-context"
import { cyberpunkFonts, type FontName } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export function FontSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentFont, setFont, font } = useCyberpunkFont()
  const { theme } = useCyberpunkTheme()

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
        <Type className="h-4 w-4" />
        <span className="hidden sm:inline">{font.name}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 z-50 w-56 bg-white/95 dark:bg-black/95 backdrop-blur-xs border border-gray-200 dark:border-blue-900/50 rounded-lg shadow-lg overflow-hidden">
            {Object.entries(cyberpunkFonts).map(([key, fontOption]) => (
              <button
                key={key}
                onClick={() => {
                  setFont(key as FontName)
                  setIsOpen(false)
                }}
                className={cn(
                  "w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors flex flex-col gap-1",
                  currentFont === key && "bg-gray-100 dark:bg-gray-800/50",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className={cn("text-sm font-medium text-gray-900 dark:text-white", fontOption.headingClass)}>
                    {fontOption.name}
                  </span>
                  {currentFont === key && <div className="w-2 h-2 rounded-full bg-current" />}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{fontOption.description}</span>
                {/* Font preview */}
                <div className={cn("text-xs text-gray-600 dark:text-gray-300 mt-1", fontOption.headingClass)}>
                  The quick brown fox jumps
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
