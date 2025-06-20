"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Code, Cpu, Globe, Zap } from "lucide-react"
import { CyberHeading } from "@/components/cyber-heading"
import { useCyberpunkTheme } from "@/components/theme-context"
import { useCyberpunkFont } from "@/components/font-context"
import { cn } from "@/lib/utils"

export function ThemedAboutSection() {
  const { theme } = useCyberpunkTheme()
  const { font } = useCyberpunkFont()

  return (
    <section id="about" className={cn("relative py-20 border-t", theme.border)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CyberHeading className="mb-12 text-center">About Me</CyberHeading>

        <div
          className={cn(
            "bg-white/50 dark:bg-black/30 backdrop-blur-xs border rounded-xl overflow-hidden",
            theme.border,
          )}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left column - Image */}
            <div className="relative h-full min-h-[300px] lg:min-h-[400px]">
              <div className="absolute inset-0 bg-linear-to-br from-blue-900/30 to-cyan-900/30 dark:from-blue-400/30 dark:to-cyan-400/30"></div>
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Developer Portrait"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black to-transparent lg:bg-linear-to-r dark:from-gray-900 dark:to-transparent"></div>

              {/* Decorative elements */}
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
              ></div>
              <div className="absolute bottom-0 left-0 w-1 h-full bg-linear-to-b from-blue-600 to-transparent dark:from-gray-900 dark:to-transparent hidden lg:block"></div>

              {/* Floating icons */}
              <div
                className={cn(
                  "absolute top-6 right-6 w-12 h-12 rounded-full border flex items-center justify-center",
                  theme.bg,
                  theme.border,
                )}
              >
                <Code className="w-6 h-6" style={{ color: theme.primary }} />
              </div>
              <div
                className={cn(
                  "absolute bottom-6 left-6 w-12 h-12 rounded-full border flex items-center justify-center",
                  theme.bg,
                  theme.border,
                )}
              >
                <Cpu className="w-6 h-6" style={{ color: theme.secondary }} />
              </div>
            </div>

            {/* Right column - Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <h3
                className={cn("text-2xl font-bold mb-6 text-transparent bg-clip-text", font.headingClass)}
                style={{ backgroundImage: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
              >
                Full-Stack Developer & Digital Artist
              </h3>

              <div className={cn("space-y-4 text-gray-700 dark:text-gray-300", font.bodyClass)}>
                <p>
                  I'm a full-stack developer with a passion for creating immersive digital experiences at the
                  intersection of technology and art.
                </p>
                <p>
                  With over 8 years of experience, I specialize in building applications that push the boundaries of
                  what's possible on the web using React, Next.js, Three.js, and WebGL.
                </p>
              </div>

              {/* Skills */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full border flex items-center justify-center mr-3",
                      theme.bg,
                      theme.border,
                    )}
                  >
                    <Code className="w-4 h-4" style={{ color: theme.primary }} />
                  </div>
                  <span className={cn("text-gray-700 dark:text-gray-300", font.bodyClass)}>Frontend Development</span>
                </div>
                <div className="flex items-center">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full border flex items-center justify-center mr-3",
                      theme.bg,
                      theme.border,
                    )}
                  >
                    <Cpu className="w-4 h-4" style={{ color: theme.secondary }} />
                  </div>
                  <span className={cn("text-gray-700 dark:text-gray-300", font.bodyClass)}>Backend Systems</span>
                </div>
                <div className="flex items-center">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full border flex items-center justify-center mr-3",
                      theme.bg,
                      theme.border,
                    )}
                  >
                    <Globe className="w-4 h-4" style={{ color: theme.primary }} />
                  </div>
                  <span className={cn("text-gray-700 dark:text-gray-300", font.bodyClass)}>3D & WebGL</span>
                </div>
                <div className="flex items-center">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full border flex items-center justify-center mr-3",
                      theme.bg,
                      theme.border,
                    )}
                  >
                    <Zap className="w-4 h-4" style={{ color: theme.secondary }} />
                  </div>
                  <span className={cn("text-gray-700 dark:text-gray-300", font.bodyClass)}>UI/UX Design</span>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  className={cn(
                    "text-white border-0",
                    font.bodyClass,
                    theme.gradient,
                    theme.gradientHover.replace("from-", "hover:from-").replace("to-", "hover:to-"),
                  )}
                >
                  <Link href="/about">More About Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
