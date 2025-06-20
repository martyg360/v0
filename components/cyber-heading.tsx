"use client"

import type { ReactNode } from "react"
import { useCyberpunkTheme } from "@/components/theme-context"
import { useCyberpunkFont } from "@/components/font-context"
import { cn } from "@/lib/utils"

interface CyberHeadingProps {
  children: ReactNode
  className?: string
}

export function CyberHeading({ children, className = "" }: CyberHeadingProps) {
  const { theme } = useCyberpunkTheme()
  const { font } = useCyberpunkFont()

  return (
    <div className={`relative inline-block ${className}`}>
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold relative z-10 text-transparent bg-clip-text glitch",
          font.headingClass,
        )}
        style={{ backgroundImage: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
      >
        {children}
      </h2>
      <div
        className="absolute -bottom-1 left-0 w-full h-0.5"
        style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
      ></div>
      <div
        className="absolute -bottom-3 left-0 w-1/2 h-0.5"
        style={{ background: `linear-gradient(to right, ${theme.primary}80, transparent)` }}
      ></div>
    </div>
  )
}
