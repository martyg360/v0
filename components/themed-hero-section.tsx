"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye } from "lucide-react"
import { useCyberpunkTheme } from "@/components/theme-context"
import { useCyberpunkFont } from "@/components/font-context"
import { cn } from "@/lib/utils"

export function ThemedHeroSection() {
  const { theme } = useCyberpunkTheme()
  const { font } = useCyberpunkFont()

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Clean gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800"></div>

        {/* Theme-colored accents */}
        <div
          className="absolute inset-0 opacity-5 dark:opacity-10"
          style={{
            background: `radial-gradient(circle at 30% 70%, ${theme.primary}, transparent 50%), radial-gradient(circle at 70% 30%, ${theme.secondary}, transparent 50%)`,
          }}
        ></div>

        {/* Subtle grid pattern - better visibility in both modes */}
        <div className="absolute inset-0">
          {/* Light mode grid */}
          <div className="block dark:hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOWNhM2FmIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-60 w-full h-full"></div>

          {/* Dark mode grid */}
          <div className="hidden dark:block bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGI1NTYzIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-50 w-full h-full"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse opacity-40"
            style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className="absolute top-3/4 right-1/4 w-1 h-1 rounded-full animate-pulse opacity-30 animation-delay-1000"
            style={{ backgroundColor: theme.secondary }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full animate-pulse opacity-35 animation-delay-2000"
            style={{ backgroundColor: theme.primary }}
          ></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={cn("inline-block px-3 py-1 rounded-full border text-sm font-medium mb-6", font.monoClass)}
            style={{
              backgroundColor: `${theme.primary}20`,
              borderColor: `${theme.primary}50`,
              color: theme.primary,
            }}
          >
            Full-Stack Developer
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span
              className={cn("block text-transparent bg-clip-text glitch", font.headingClass)}
              style={{ backgroundImage: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
            >
              Marty Cybernetic
            </span>
            <span className={cn("block mt-2 text-gray-900 dark:text-white", font.headingClass)}>Digital Portfolio</span>
          </h1>
          <p className={cn("text-xl text-gray-700 dark:text-gray-300 mb-8", font.bodyClass)}>
            Crafting digital experiences at the intersection of design and technology. Specializing in web development,
            UI/UX, and digital art.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className={cn(
                "text-white border-0 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300",
                font.bodyClass,
                theme.gradient,
                theme.gradientHover.replace("from-", "hover:from-").replace("to-", "hover:to-"),
              )}
            >
              <Link href="/portfolio">
                <Eye className="mr-2 h-5 w-5" />
                View My Work
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className={cn(
                "text-lg px-8 py-6 border-2 bg-white/50 dark:bg-black/50 backdrop-blur-xs hover:bg-white/80 dark:hover:bg-black/80 transition-all duration-300",
                font.bodyClass,
              )}
              style={{
                borderColor: theme.primary,
                color: theme.primary,
              }}
            >
              <Link href="/contact">
                Let's Connect
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
