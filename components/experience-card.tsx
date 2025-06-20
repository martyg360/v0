"use client"

import { useCyberpunkTheme } from "@/components/theme-context"
import { useCyberpunkFont } from "@/components/font-context"
import { cn } from "@/lib/utils"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export function ExperienceCard({ title, company, period, description, technologies }: ExperienceCardProps) {
  const { theme } = useCyberpunkTheme()
  const { font } = useCyberpunkFont()

  return (
    <div className="relative">
      <div
        className="absolute top-0 left-6 bottom-0 w-px"
        style={{ background: `linear-gradient(to bottom, ${theme.primary}, transparent)` }}
      ></div>
      <div className="relative pl-12">
        <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center">
          <div
            className="absolute w-4 h-4 rounded-full"
            style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
          ></div>
          <div
            className="absolute w-4 h-4 rounded-full animate-ping opacity-75"
            style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
          ></div>
        </div>

        <div className={cn("bg-black/30 border rounded-lg p-6", theme.border)}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className={cn("text-xl font-bold text-white", font.headingClass)}>{title}</h3>
            <span className={cn("text-sm mt-1 md:mt-0", font.monoClass)} style={{ color: theme.primary }}>
              {period}
            </span>
          </div>
          <h4 className={cn("text-lg text-gray-300 mb-4", font.bodyClass)}>{company}</h4>
          <p className={cn("text-gray-400 mb-4", font.bodyClass)}>{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={cn("px-2 py-1 text-xs rounded-full border", font.monoClass, theme.bg, theme.border)}
                style={{ color: theme.primary }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
