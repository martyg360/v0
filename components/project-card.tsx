"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { useCyberpunkTheme } from "@/components/theme-context"
import { useCyberpunkFont } from "@/components/font-context"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  const { theme } = useCyberpunkTheme()
  const { font } = useCyberpunkFont()

  return (
    <div className="group relative">
      <div
        className="absolute -inset-0.5 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition duration-300"
        style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
      ></div>
      <div
        className={cn(
          "relative flex flex-col h-full bg-white dark:bg-black border rounded-lg overflow-hidden transition-all duration-300",
          theme.border,
          theme.borderHover.replace("border-", "hover:border-"),
        )}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-gray-900 dark:from-black to-transparent opacity-60"></div>
          <div
            className="absolute top-0 left-0 w-full h-1"
            style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
          ></div>
        </div>
        <div className="grow p-6 flex flex-col">
          <h3 className={cn("text-xl font-bold mb-2 text-gray-900 dark:text-white", font.headingClass)}>{title}</h3>
          <p className={cn("text-gray-600 dark:text-gray-400 mb-4 grow", font.bodyClass)}>{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={cn("px-2 py-1 text-xs rounded-full border", font.monoClass, theme.bg, theme.border)}
                style={{ color: theme.primary }}
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={link}
            className={cn(
              "inline-flex items-center transition-colors",
              font.bodyClass,
              theme.text,
              theme.textHover.replace("text-", "hover:text-"),
            )}
          >
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
