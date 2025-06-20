"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CyberHeading } from "@/components/cyber-heading"
import { ArrowRight, Send, CheckCircle } from "lucide-react"
import { useCyberpunkTheme } from "@/components/theme-context"
import { useCyberpunkFont } from "@/components/font-context"
import { cn } from "@/lib/utils"

export function ContactSection() {
  const { theme } = useCyberpunkTheme()
  const { font } = useCyberpunkFont()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <section id="contact" className={cn("relative py-20 border-t", theme.border)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <CyberHeading>Get In Touch</CyberHeading>
          <Link
            href="/contact"
            className={cn(
              "flex items-center group transition-colors",
              font.bodyClass,
              theme.text,
              theme.textHover.replace("text-", "hover:text-"),
            )}
          >
            Full Contact Page
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text */}
          <div>
            <div
              className={cn("bg-white/50 dark:bg-black/30 backdrop-blur-xs border rounded-xl p-8 h-full", theme.border)}
            >
              <h3
                className={cn("text-2xl font-bold mb-4 text-transparent bg-clip-text", font.headingClass)}
                style={{ backgroundImage: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
              >
                Let's Work Together
              </h3>
              <p className={cn("text-gray-700 dark:text-gray-300 mb-6", font.bodyClass)}>
                Have a project in mind or want to collaborate? I'm always open to discussing new projects, creative
                ideas or opportunities to be part of your vision.
              </p>
              <div className={cn("space-y-4 text-gray-600 dark:text-gray-400", font.bodyClass)}>
                <p>
                  <span className="text-gray-900 dark:text-white font-medium">Email:</span>{" "}
                  <a
                    href="mailto:contact@marty.dev"
                    className={cn("transition-colors", theme.text, theme.textHover.replace("text-", "hover:text-"))}
                  >
                    contact@marty.dev
                  </a>
                </p>
                <p>
                  <span className="text-gray-900 dark:text-white font-medium">Location:</span> Night City, CA
                </p>
                <p>
                  <span className="text-gray-900 dark:text-white font-medium">Working Hours:</span> Monday - Friday, 9am
                  - 6pm
                </p>
              </div>
              <div className="mt-8">
                <Button
                  asChild
                  variant="outline"
                  className={cn("border", font.bodyClass, theme.border)}
                  style={{ borderColor: theme.primary, color: theme.primary }}
                >
                  <Link href="/contact">View Full Contact Details</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="relative">
              <div
                className="absolute -inset-0.5 rounded-xl blur-sm opacity-30"
                style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
              ></div>
              <div
                className={cn(
                  "relative bg-white/50 dark:bg-black/30 backdrop-blur-xs border rounded-xl p-6 md:p-8",
                  theme.border,
                )}
              >
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div
                      className={cn(
                        "w-16 h-16 rounded-full border flex items-center justify-center mb-6",
                        theme.bg,
                        theme.border,
                      )}
                    >
                      <CheckCircle className="h-8 w-8" style={{ color: theme.primary }} />
                    </div>
                    <h3 className={cn("text-2xl font-bold mb-2 text-gray-900 dark:text-white", font.headingClass)}>
                      Message Sent!
                    </h3>
                    <p className={cn("text-gray-600 dark:text-gray-400 text-center mb-6", font.bodyClass)}>
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className={cn(
                        "text-white border-0",
                        font.bodyClass,
                        theme.gradient,
                        theme.gradientHover.replace("from-", "hover:from-").replace("to-", "hover:to-"),
                      )}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="home-name"
                        className={cn(
                          "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                          font.bodyClass,
                        )}
                      >
                        Name
                      </label>
                      <Input
                        id="home-name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={cn(
                          "bg-white/50 dark:bg-black/50 border text-gray-900 dark:text-white",
                          font.bodyClass,
                          errors.name ? "border-red-500" : theme.border,
                          `focus:${theme.borderHover.replace("border-", "border-")}`,
                        )}
                        placeholder="Your name"
                      />
                      {errors.name && <p className={cn("mt-1 text-sm text-red-500", font.bodyClass)}>{errors.name}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="home-email"
                        className={cn(
                          "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                          font.bodyClass,
                        )}
                      >
                        Email
                      </label>
                      <Input
                        id="home-email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={cn(
                          "bg-white/50 dark:bg-black/50 border text-gray-900 dark:text-white",
                          font.bodyClass,
                          errors.email ? "border-red-500" : theme.border,
                          `focus:${theme.borderHover.replace("border-", "border-")}`,
                        )}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className={cn("mt-1 text-sm text-red-500", font.bodyClass)}>{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="home-message"
                        className={cn(
                          "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                          font.bodyClass,
                        )}
                      >
                        Message
                      </label>
                      <Textarea
                        id="home-message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        className={cn(
                          "bg-white/50 dark:bg-black/50 border text-gray-900 dark:text-white min-h-[120px]",
                          font.bodyClass,
                          errors.message ? "border-red-500" : theme.border,
                          `focus:${theme.borderHover.replace("border-", "border-")}`,
                        )}
                        placeholder="Your message here..."
                      />
                      {errors.message && (
                        <p className={cn("mt-1 text-sm text-red-500", font.bodyClass)}>{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full text-white border-0",
                        font.bodyClass,
                        theme.gradient,
                        theme.gradientHover.replace("from-", "hover:from-").replace("to-", "hover:to-"),
                      )}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-5 w-5" /> Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
