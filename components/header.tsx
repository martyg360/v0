"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Cpu, Menu, X, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { ThemeSelector } from "@/components/theme-selector"
import { FontSelector } from "@/components/font-selector"
import { useCyberpunkTheme } from "@/components/theme-context"
import { useCyberpunkFont } from "@/components/font-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme: darkTheme, setTheme } = useTheme()
  const { theme } = useCyberpunkTheme()
  const { font } = useCyberpunkFont()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleTheme = () => {
    setTheme(darkTheme === "dark" ? "light" : "dark")
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xs bg-white/80 dark:bg-black/80",
          theme.border,
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <div
                  className="relative w-8 h-8 mr-2 rounded"
                  style={{ background: `linear-gradient(to bottom right, ${theme.primary}, ${theme.secondary})` }}
                >
                  <Cpu className="absolute inset-0 m-auto text-white w-5 h-5" />
                </div>
                <span
                  className={cn("text-xl font-bold tracking-wider text-transparent bg-clip-text", font.headingClass)}
                  style={{ backgroundImage: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
                >
                  MARTY
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <nav className="hidden md:block mr-4">
                <ul className="flex space-x-8">
                  <li>
                    <Link
                      href="/"
                      className={cn(
                        "text-gray-700 dark:text-gray-300 transition-colors",
                        font.bodyClass,
                        `hover:${theme.textHover} dark:hover:${theme.textHover}`,
                      )}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className={cn(
                        "text-gray-700 dark:text-gray-300 transition-colors",
                        font.bodyClass,
                        `hover:${theme.textHover} dark:hover:${theme.textHover}`,
                      )}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className={cn(
                        "text-gray-700 dark:text-gray-300 transition-colors",
                        font.bodyClass,
                        `hover:${theme.textHover} dark:hover:${theme.textHover}`,
                      )}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className={cn(
                        "text-gray-700 dark:text-gray-300 transition-colors",
                        font.bodyClass,
                        `hover:${theme.textHover} dark:hover:${theme.textHover}`,
                      )}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className={cn(
                        "text-gray-700 dark:text-gray-300 transition-colors",
                        font.bodyClass,
                        `hover:${theme.textHover} dark:hover:${theme.textHover}`,
                      )}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <ThemeSelector />
              <FontSelector />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className={cn(
                  "text-gray-700 dark:text-gray-300 transition-colors",
                  `hover:${theme.textHover} dark:hover:${theme.textHover}`,
                  theme.bgHover,
                )}
              >
                {darkTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "text-gray-700 dark:text-gray-300 transition-colors md:hidden",
                  `hover:${theme.textHover} dark:hover:${theme.textHover}`,
                  theme.bgHover,
                )}
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className="h-16"></div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full p-6 pt-20">
          <nav className="grow">
            <ul className="space-y-6">
              <li>
                <Link
                  href="/"
                  className={cn(
                    "text-2xl font-bold text-gray-900 dark:text-white transition-colors",
                    font.headingClass,
                    `hover:${theme.textHover} dark:hover:${theme.textHover}`,
                  )}
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className={cn(
                    "text-2xl font-bold text-gray-900 dark:text-white transition-colors",
                    font.headingClass,
                    `hover:${theme.textHover} dark:hover:${theme.textHover}`,
                  )}
                  onClick={toggleMobileMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={cn(
                    "text-2xl font-bold text-gray-900 dark:text-white transition-colors",
                    font.headingClass,
                    `hover:${theme.textHover} dark:hover:${theme.textHover}`,
                  )}
                  onClick={toggleMobileMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={cn(
                    "text-2xl font-bold text-gray-900 dark:text-white transition-colors",
                    font.headingClass,
                    `hover:${theme.textHover} dark:hover:${theme.textHover}`,
                  )}
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={cn(
                    "text-2xl font-bold text-gray-900 dark:text-white transition-colors",
                    font.headingClass,
                    `hover:${theme.textHover} dark:hover:${theme.textHover}`,
                  )}
                  onClick={toggleMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex gap-2 mb-4">
              <ThemeSelector />
              <FontSelector />
            </div>
            <Button
              onClick={toggleTheme}
              variant="outline"
              className={cn("w-full flex items-center justify-center gap-2", theme.border, font.bodyClass)}
            >
              {darkTheme === "dark" ? (
                <>
                  <Sun className="h-4 w-4" /> Switch to Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4" /> Switch to Dark Mode
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
