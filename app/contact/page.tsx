"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CyberHeading } from "@/components/cyber-heading"
import { Github, Twitter, Linkedin, Mail, Send, CheckCircle } from "lucide-react"
import { useCyberpunkTheme } from "@/components/theme-context"
import { useCyberpunkFont } from "@/components/font-context"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const { theme } = useCyberpunkTheme()
  const { font } = useCyberpunkFont()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
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

    if (!formState.subject.trim()) {
      newErrors.subject = "Subject is required"
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
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen">
      {/* Light mode background */}
      <div className="fixed inset-0 z-0 dark:hidden">
        <div className="absolute inset-0 bg-gray-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmMWY1ZjkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-50"></div>
      </div>

      {/* Dark mode background */}
      <div className="fixed inset-0 z-0 hidden dark:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(4,92,180,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.8)_70%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTMzNTciIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <main className="relative z-10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <CyberHeading>Get In Touch</CyberHeading>
              <p className={cn("mt-4 text-xl text-gray-600 dark:text-gray-400", font.bodyClass)}>
                Have a project in mind or want to collaborate? Drop me a message.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div
                  className={cn("bg-white/50 dark:bg-black/30 backdrop-blur-xs border rounded-xl p-6", theme.border)}
                >
                  <h3
                    className={cn("text-xl font-bold mb-6 text-transparent bg-clip-text", font.headingClass)}
                    style={{ backgroundImage: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
                  >
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full border flex items-center justify-center mr-4",
                          theme.bg,
                          theme.border,
                        )}
                      >
                        <Mail className="h-5 w-5" style={{ color: theme.primary }} />
                      </div>
                      <div>
                        <h4 className={cn("text-sm font-medium text-gray-500 dark:text-gray-400", font.bodyClass)}>
                          Email
                        </h4>
                        <a
                          href="mailto:contact@neo.dev"
                          className={cn(
                            "transition-colors",
                            font.bodyClass,
                            theme.text,
                            theme.textHover.replace("text-", "hover:text-"),
                          )}
                        >
                          contact@neo.dev
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full border flex items-center justify-center mr-4",
                          theme.bg,
                          theme.border,
                        )}
                      >
                        <Linkedin className="h-5 w-5" style={{ color: theme.primary }} />
                      </div>
                      <div>
                        <h4 className={cn("text-sm font-medium text-gray-500 dark:text-gray-400", font.bodyClass)}>
                          LinkedIn
                        </h4>
                        <a
                          href="#"
                          className={cn(
                            "transition-colors",
                            font.bodyClass,
                            theme.text,
                            theme.textHover.replace("text-", "hover:text-"),
                          )}
                        >
                          linkedin.com/in/neocybernetic
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full border flex items-center justify-center mr-4",
                          theme.bg,
                          theme.border,
                        )}
                      >
                        <Github className="h-5 w-5" style={{ color: theme.primary }} />
                      </div>
                      <div>
                        <h4 className={cn("text-sm font-medium text-gray-500 dark:text-gray-400", font.bodyClass)}>
                          GitHub
                        </h4>
                        <a
                          href="#"
                          className={cn(
                            "transition-colors",
                            font.bodyClass,
                            theme.text,
                            theme.textHover.replace("text-", "hover:text-"),
                          )}
                        >
                          github.com/neocybernetic
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full border flex items-center justify-center mr-4",
                          theme.bg,
                          theme.border,
                        )}
                      >
                        <Twitter className="h-5 w-5" style={{ color: theme.primary }} />
                      </div>
                      <div>
                        <h4 className={cn("text-sm font-medium text-gray-500 dark:text-gray-400", font.bodyClass)}>
                          Twitter
                        </h4>
                        <a
                          href="#"
                          className={cn(
                            "transition-colors",
                            font.bodyClass,
                            theme.text,
                            theme.textHover.replace("text-", "hover:text-"),
                          )}
                        >
                          @neocybernetic
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className={cn("mt-8 pt-8 border-t", theme.border)}>
                    <h4 className={cn("text-lg font-medium mb-4", font.headingClass)}>Working Hours</h4>
                    <p className={cn("text-gray-500 dark:text-gray-400", font.bodyClass)}>Monday - Friday: 9am - 6pm</p>
                    <p className={cn("text-gray-500 dark:text-gray-400", font.bodyClass)}>Weekend: By appointment</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
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
                        <h3 className={cn("text-2xl font-bold mb-2", font.headingClass)}>Message Sent!</h3>
                        <p className={cn("text-gray-500 dark:text-gray-400 text-center mb-6", font.bodyClass)}>
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
                            htmlFor="name"
                            className={cn(
                              "block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1",
                              font.bodyClass,
                            )}
                          >
                            Name
                          </label>
                          <Input
                            id="name"
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
                          {errors.name && (
                            <p className={cn("mt-1 text-sm text-red-500", font.bodyClass)}>{errors.name}</p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className={cn(
                              "block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1",
                              font.bodyClass,
                            )}
                          >
                            Email
                          </label>
                          <Input
                            id="email"
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
                            htmlFor="subject"
                            className={cn(
                              "block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1",
                              font.bodyClass,
                            )}
                          >
                            Subject
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            className={cn(
                              "bg-white/50 dark:bg-black/50 border text-gray-900 dark:text-white",
                              font.bodyClass,
                              errors.subject ? "border-red-500" : theme.border,
                              `focus:${theme.borderHover.replace("border-", "border-")}`,
                            )}
                            placeholder="What is this regarding?"
                          />
                          {errors.subject && (
                            <p className={cn("mt-1 text-sm text-red-500", font.bodyClass)}>{errors.subject}</p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className={cn(
                              "block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1",
                              font.bodyClass,
                            )}
                          >
                            Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            className={cn(
                              "bg-white/50 dark:bg-black/50 border text-gray-900 dark:text-white min-h-[150px]",
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
                            "w-full text-white border-0 py-6",
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

            {/* Map or Location Section */}
            <div className="mt-20">
              <div className="relative">
                <div
                  className="absolute -inset-0.5 rounded-xl blur-sm opacity-30"
                  style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
                ></div>
                <div
                  className={cn(
                    "relative bg-white/50 dark:bg-black/30 backdrop-blur-xs border rounded-xl overflow-hidden",
                    theme.border,
                  )}
                >
                  <div className="aspect-21/9 w-full relative">
                    <div className="absolute inset-0 bg-blue-100/20 dark:bg-blue-900/20 flex items-center justify-center">
                      <div className="text-center p-8">
                        <h3 className={cn("text-2xl font-bold mb-2", font.headingClass)}>Night City, CA</h3>
                        <p className={cn("text-gray-500 dark:text-gray-400", font.bodyClass)}>
                          Located in the heart of the tech district, my studio is where innovation meets design.
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMzQjgyRjYiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>

                    {/* Cyberpunk city silhouette */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-100 dark:from-black to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-24">
                      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
                        <path
                          d="M0,0 L50,10 L100,0 L150,20 L200,10 L250,30 L300,0 L350,40 L400,10 L450,30 L500,20 L550,40 L600,30 L650,10 L700,40 L750,20 L800,30 L850,10 L900,40 L950,20 L1000,30 L1050,10 L1100,40 L1150,0 L1200,20 L1200,120 L0,120 Z"
                          fill="#f3f4f6"
                          className="dark:fill-black"
                        ></path>
                      </svg>
                    </div>

                    {/* Glowing dots representing city lights */}
                    <div className="absolute inset-0">
                      <div
                        className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full animate-pulse"
                        style={{ backgroundColor: theme.primary }}
                      ></div>
                      <div
                        className="absolute top-1/3 left-1/2 w-1 h-1 rounded-full animate-pulse"
                        style={{ backgroundColor: theme.secondary }}
                      ></div>
                      <div
                        className="absolute top-1/2 left-1/3 w-1 h-1 rounded-full animate-pulse"
                        style={{ backgroundColor: theme.primary }}
                      ></div>
                      <div
                        className="absolute top-2/3 left-3/4 w-1 h-1 rounded-full animate-pulse"
                        style={{ backgroundColor: theme.secondary }}
                      ></div>
                      <div
                        className="absolute top-3/4 left-1/5 w-1 h-1 rounded-full animate-pulse"
                        style={{ backgroundColor: theme.primary }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
