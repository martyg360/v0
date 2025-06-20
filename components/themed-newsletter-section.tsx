"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Send, CheckCircle } from "lucide-react"
import { useCyberpunkTheme } from "@/components/theme-context"
import { useCyberpunkFont } from "@/components/font-context"
import { cn } from "@/lib/utils"

export function ThemedNewsletterSection() {
  const { theme } = useCyberpunkTheme()
  const { font } = useCyberpunkFont()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <section className={cn("relative py-20 border-t", theme.border)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background with theme colors */}
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
          ></div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-10"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-40"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-50"></div>
          </div>

          <div className="relative py-16 px-8 md:py-24 md:px-12 text-center">
            <div className="max-w-3xl mx-auto">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-xs rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Heading */}
              <h2 className={cn("text-3xl md:text-4xl font-bold mb-6 text-white", font.headingClass)}>
                Subscribe to My Newsletter
              </h2>

              {/* Description */}
              <p className={cn("text-xl text-white/80 max-w-2xl mx-auto mb-8", font.bodyClass)}>
                Get the latest articles, project updates, and exclusive insights delivered straight to your inbox.
              </p>

              {/* Form or Success State */}
              {isSubmitted ? (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-xs rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={cn("text-2xl font-bold text-white mb-2", font.headingClass)}>
                    Thanks for subscribing!
                  </h3>
                  <p className={cn("text-white/80", font.bodyClass)}>You'll receive our latest updates soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={cn(
                          "bg-white/20 backdrop-blur-xs border-white/30 text-white placeholder-white/60 focus:bg-white/30 focus:border-white/50 transition-all duration-300",
                          font.bodyClass,
                        )}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "bg-white/20 hover:bg-white/30 backdrop-blur-xs text-white border border-white/30 hover:border-white/50 transition-all duration-300 px-8",
                        font.bodyClass,
                      )}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Subscribing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Subscribe
                        </span>
                      )}
                    </Button>
                  </div>

                  {/* Privacy note */}
                  <p className={cn("text-sm text-white/60 mt-4", font.bodyClass)}>
                    No spam, unsubscribe at any time. Your privacy is important to us.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
