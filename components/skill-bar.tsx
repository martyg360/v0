"use client"

import { useCyberpunkTheme } from "@/components/theme-context"
import { useCyberpunkFont } from "@/components/font-context"
import { cn } from "@/lib/utils"

interface SkillBarProps {
  skill: string
  percentage: number
}

export function SkillBar({ skill, percentage }: SkillBarProps) {
  const { theme } = useCyberpunkTheme()
  const { font } = useCyberpunkFont()

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className={cn("text-white", font.bodyClass)}>{skill}</span>
        <span className={cn(font.monoClass)} style={{ color: theme.primary }}>
          {percentage}%
        </span>
      </div>
      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full rounded-full"
          style={{
            width: `${percentage}%`,
            background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`,
          }}
        >
          <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
