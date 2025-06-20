"use client"

import Link from "next/link"
import { Cpu, Github, Twitter, Linkedin, Mail } from "lucide-react"
import { useCyberpunkTheme } from "@/components/theme-context"
import { useCyberpunkFont } from "@/components/font-context"
import { cn } from "@/lib/utils"

export function Footer() {
  const { theme } = useCyberpunkTheme()
  const { font } = useCyberpunkFont()

  return (
    <footer className={cn("relative z-10 border-t py-12 bg-white/80 dark:bg-black/80 backdrop-blur-xs", theme.border)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4 group">
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
            <p className={cn("text-gray-600 dark:text-gray-400 mb-4", font.bodyClass)}>
              Crafting digital experiences at the intersection of design and technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className={cn("transition-colors", theme.text, theme.textHover.replace("text-", "hover:text-"))}
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className={cn("transition-colors", theme.text, theme.textHover.replace("text-", "hover:text-"))}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className={cn("transition-colors", theme.text, theme.textHover.replace("text-", "hover:text-"))}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className={cn("transition-colors", theme.text, theme.textHover.replace("text-", "hover:text-"))}
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className={cn("text-lg font-semibold mb-4 text-gray-900 dark:text-white", font.headingClass)}>
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className={cn(
                    "transition-colors",
                    font.bodyClass,
                    theme.text,
                    theme.textHover.replace("text-", "hover:text-"),
                  )}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className={cn(
                    "transition-colors",
                    font.bodyClass,
                    theme.text,
                    theme.textHover.replace("text-", "hover:text-"),
                  )}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={cn(
                    "transition-colors",
                    font.bodyClass,
                    theme.text,
                    theme.textHover.replace("text-", "hover:text-"),
                  )}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={cn(
                    "transition-colors",
                    font.bodyClass,
                    theme.text,
                    theme.textHover.replace("text-", "hover:text-"),
                  )}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={cn(
                    "transition-colors",
                    font.bodyClass,
                    theme.text,
                    theme.textHover.replace("text-", "hover:text-"),
                  )}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={cn("text-lg font-semibold mb-4 text-gray-900 dark:text-white", font.headingClass)}>
              Blog Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog/category/technology"
                  className={cn(
                    "transition-colors",
                    font.bodyClass,
                    theme.text,
                    theme.textHover.replace("text-", "hover:text-"),
                  )}
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/category/development"
                  className={cn(
                    "transition-colors",
                    font.bodyClass,
                    theme.text,
                    theme.textHover.replace("text-", "hover:text-"),
                  )}
                >
                  Development
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/category/design"
                  className={cn(
                    "transition-colors",
                    font.bodyClass,
                    theme.text,
                    theme.textHover.replace("text-", "hover:text-"),
                  )}
                >
                  Design
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/category/ai"
                  className={cn(
                    "transition-colors",
                    font.bodyClass,
                    theme.text,
                    theme.textHover.replace("text-", "hover:text-"),
                  )}
                >
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/category/tutorials"
                  className={cn(
                    "transition-colors",
                    font.bodyClass,
                    theme.text,
                    theme.textHover.replace("text-", "hover:text-"),
                  )}
                >
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={cn("text-lg font-semibold mb-4 text-gray-900 dark:text-white", font.headingClass)}>
              Contact
            </h3>
            <ul className="space-y-2">
              <li className={cn("text-gray-600 dark:text-gray-400", font.bodyClass)}>
                <span className="block">Email:</span>
                <a
                  href="mailto:contact@marty.dev"
                  className={cn("transition-colors", theme.text, theme.textHover.replace("text-", "hover:text-"))}
                >
                  contact@marty.dev
                </a>
              </li>
              <li className={cn("text-gray-600 dark:text-gray-400", font.bodyClass)}>
                <span className="block">Location:</span>
                <span>Night City, CA</span>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={cn(
                    "transition-colors",
                    font.bodyClass,
                    theme.text,
                    theme.textHover.replace("text-", "hover:text-"),
                  )}
                >
                  Send a message
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={cn("border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center", theme.border)}>
          <p className={cn("text-gray-500 dark:text-gray-500 text-sm", font.bodyClass)}>
            &copy; {new Date().getFullYear()} MARTY. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className={cn(
                    "transition-colors",
                    font.bodyClass,
                    theme.text,
                    theme.textHover.replace("text-", "hover:text-"),
                  )}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className={cn(
                    "transition-colors",
                    font.bodyClass,
                    theme.text,
                    theme.textHover.replace("text-", "hover:text-"),
                  )}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className={cn(
                    "transition-colors",
                    font.bodyClass,
                    theme.text,
                    theme.textHover.replace("text-", "hover:text-"),
                  )}
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
