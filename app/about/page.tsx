"use client"

import Image from "next/image"
import { CyberHeading } from "@/components/cyber-heading"
import { SkillBar } from "@/components/skill-bar"
import { ExperienceCard } from "@/components/experience-card"
import { useCyberpunkTheme } from "@/components/theme-context"
import { useCyberpunkFont } from "@/components/font-context"
import { cn } from "@/lib/utils"

export default function AboutPage() {
  const { theme } = useCyberpunkTheme()
  const { font } = useCyberpunkFont()

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
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
            {/* Hero Section */}
            <section className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h1 className={cn("text-4xl md:text-5xl font-bold mb-6", font.headingClass)}>
                    About{" "}
                    <span
                      className="text-transparent bg-clip-text"
                      style={{ backgroundImage: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
                    >
                      Me
                    </span>
                  </h1>
                  <p className={cn("text-xl text-gray-600 dark:text-gray-300 mb-6", font.bodyClass)}>
                    I'm a full-stack developer with a passion for creating immersive digital experiences at the
                    intersection of technology and art.
                  </p>
                  <p className={cn("text-gray-500 dark:text-gray-400 mb-4", font.bodyClass)}>
                    With over 8 years of experience in web development, I specialize in building applications that push
                    the boundaries of what's possible on the web. My expertise includes React, Next.js, Three.js, and
                    WebGL, allowing me to create both functional and visually stunning projects.
                  </p>
                  <p className={cn("text-gray-500 dark:text-gray-400", font.bodyClass)}>
                    When I'm not coding, you can find me exploring the latest in emerging technologies, contributing to
                    open-source projects, or creating digital art that blends the line between the virtual and the real.
                  </p>
                </div>
                <div className="relative order-1 lg:order-2">
                  <div
                    className="absolute -inset-0.5 rounded-full blur-lg opacity-75"
                    style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
                  ></div>
                  <div
                    className="relative rounded-full overflow-hidden border-2"
                    style={{ borderColor: theme.primary }}
                  >
                    <Image
                      src="/placeholder.svg?height=500&width=500"
                      alt="Profile"
                      width={500}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-20">
              <CyberHeading className="mb-12">Technical Skills</CyberHeading>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <h3 className={cn("text-xl font-semibold mb-6", font.headingClass)}>Frontend Development</h3>
                  <div className="space-y-6">
                    <SkillBar skill="React / Next.js" percentage={95} />
                    <SkillBar skill="TypeScript" percentage={90} />
                    <SkillBar skill="Three.js / WebGL" percentage={85} />
                    <SkillBar skill="CSS / Tailwind" percentage={92} />
                  </div>
                </div>

                <div>
                  <h3 className={cn("text-xl font-semibold mb-6", font.headingClass)}>Backend Development</h3>
                  <div className="space-y-6">
                    <SkillBar skill="Node.js" percentage={88} />
                    <SkillBar skill="GraphQL" percentage={80} />
                    <SkillBar skill="PostgreSQL" percentage={75} />
                    <SkillBar skill="AWS / Vercel" percentage={85} />
                  </div>
                </div>

                <div>
                  <h3 className={cn("text-xl font-semibold mb-6", font.headingClass)}>Design & Creative</h3>
                  <div className="space-y-6">
                    <SkillBar skill="UI/UX Design" percentage={82} />
                    <SkillBar skill="Figma / Adobe XD" percentage={78} />
                    <SkillBar skill="3D Modeling" percentage={70} />
                    <SkillBar skill="Motion Design" percentage={75} />
                  </div>
                </div>

                <div>
                  <h3 className={cn("text-xl font-semibold mb-6", font.headingClass)}>Other Skills</h3>
                  <div className="space-y-6">
                    <SkillBar skill="AR / VR Development" percentage={80} />
                    <SkillBar skill="Machine Learning" percentage={65} />
                    <SkillBar skill="Blockchain / Web3" percentage={72} />
                    <SkillBar skill="Technical Writing" percentage={85} />
                  </div>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="mb-20">
              <CyberHeading className="mb-12">Work Experience</CyberHeading>

              <div className="space-y-12">
                <ExperienceCard
                  title="Senior Frontend Developer"
                  company="TechFusion Labs"
                  period="2021 - Present"
                  description="Lead developer for immersive web experiences using React, Three.js, and WebGL. Architected and implemented real-time data visualization dashboards and AR web applications."
                  technologies={["React", "Next.js", "Three.js", "WebGL", "TypeScript"]}
                />

                <ExperienceCard
                  title="Full Stack Developer"
                  company="Digital Nexus"
                  period="2018 - 2021"
                  description="Developed and maintained full-stack web applications for enterprise clients. Implemented CI/CD pipelines and microservice architectures. Mentored junior developers."
                  technologies={["Node.js", "React", "PostgreSQL", "Docker", "AWS"]}
                />

                <ExperienceCard
                  title="Web Developer"
                  company="Creative Pulse"
                  period="2016 - 2018"
                  description="Created responsive websites and interactive experiences for clients in the entertainment and media industries. Collaborated with designers to implement pixel-perfect UIs."
                  technologies={["JavaScript", "HTML/CSS", "WordPress", "PHP", "GSAP"]}
                />
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-20">
              <CyberHeading className="mb-12">Education</CyberHeading>

              <div className="space-y-12">
                <ExperienceCard
                  title="MSc in Computer Science"
                  company="Tech University"
                  period="2014 - 2016"
                  description="Specialized in Human-Computer Interaction and Computer Graphics. Thesis on 'Immersive Web Experiences: Bridging Virtual and Physical Realities'."
                  technologies={["HCI", "Computer Graphics", "Machine Learning"]}
                />

                <ExperienceCard
                  title="BSc in Software Engineering"
                  company="Digital Institute"
                  period="2010 - 2014"
                  description="Graduated with honors. Focused on web technologies and interactive media. Led student team in developing an award-winning web application."
                  technologies={["Software Engineering", "Web Development", "UI/UX Design"]}
                />
              </div>
            </section>

            {/* Personal Projects Section */}
            <section>
              <CyberHeading className="mb-12">Personal Projects & Open Source</CyberHeading>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative">
                  <div
                    className="absolute -inset-0.5 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
                  ></div>
                  <div
                    className={cn(
                      "relative p-6 bg-white dark:bg-black border rounded-lg transition-all duration-300",
                      theme.border,
                      theme.borderHover.replace("border-", "hover:border-"),
                    )}
                  >
                    <h3 className={cn("text-xl font-bold mb-2", font.headingClass)}>WebXR Framework</h3>
                    <p className={cn("text-gray-500 dark:text-gray-400 mb-4", font.bodyClass)}>
                      An open-source framework for creating cross-platform XR experiences on the web. Used by over 500
                      developers worldwide.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={cn("px-2 py-1 text-xs rounded-full border", font.monoClass, theme.bg, theme.border)}
                        style={{ color: theme.primary }}
                      >
                        WebXR
                      </span>
                      <span
                        className={cn("px-2 py-1 text-xs rounded-full border", font.monoClass, theme.bg, theme.border)}
                        style={{ color: theme.primary }}
                      >
                        Three.js
                      </span>
                      <span
                        className={cn("px-2 py-1 text-xs rounded-full border", font.monoClass, theme.bg, theme.border)}
                        style={{ color: theme.primary }}
                      >
                        JavaScript
                      </span>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div
                    className="absolute -inset-0.5 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
                  ></div>
                  <div
                    className={cn(
                      "relative p-6 bg-white dark:bg-black border rounded-lg transition-all duration-300",
                      theme.border,
                      theme.borderHover.replace("border-", "hover:border-"),
                    )}
                  >
                    <h3 className={cn("text-xl font-bold mb-2", font.headingClass)}>Neural Audio Visualizer</h3>
                    <p className={cn("text-gray-500 dark:text-gray-400 mb-4", font.bodyClass)}>
                      A real-time audio visualization tool that uses machine learning to create unique visual patterns
                      based on music.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={cn("px-2 py-1 text-xs rounded-full border", font.monoClass, theme.bg, theme.border)}
                        style={{ color: theme.primary }}
                      >
                        Web Audio API
                      </span>
                      <span
                        className={cn("px-2 py-1 text-xs rounded-full border", font.monoClass, theme.bg, theme.border)}
                        style={{ color: theme.primary }}
                      >
                        TensorFlow.js
                      </span>
                      <span
                        className={cn("px-2 py-1 text-xs rounded-full border", font.monoClass, theme.bg, theme.border)}
                        style={{ color: theme.primary }}
                      >
                        Canvas
                      </span>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div
                    className="absolute -inset-0.5 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
                  ></div>
                  <div
                    className={cn(
                      "relative p-6 bg-white dark:bg-black border rounded-lg transition-all duration-300",
                      theme.border,
                      theme.borderHover.replace("border-", "hover:border-"),
                    )}
                  >
                    <h3 className={cn("text-xl font-bold mb-2", font.headingClass)}>Cyberpunk UI Kit</h3>
                    <p className={cn("text-gray-500 dark:text-gray-400 mb-4", font.bodyClass)}>
                      A comprehensive UI component library inspired by cyberpunk aesthetics. Features neon effects,
                      glitch animations, and futuristic elements.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={cn("px-2 py-1 text-xs rounded-full border", font.monoClass, theme.bg, theme.border)}
                        style={{ color: theme.primary }}
                      >
                        React
                      </span>
                      <span
                        className={cn("px-2 py-1 text-xs rounded-full border", font.monoClass, theme.bg, theme.border)}
                        style={{ color: theme.primary }}
                      >
                        Tailwind CSS
                      </span>
                      <span
                        className={cn("px-2 py-1 text-xs rounded-full border", font.monoClass, theme.bg, theme.border)}
                        style={{ color: theme.primary }}
                      >
                        Framer Motion
                      </span>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div
                    className="absolute -inset-0.5 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
                  ></div>
                  <div
                    className={cn(
                      "relative p-6 bg-white dark:bg-black border rounded-lg transition-all duration-300",
                      theme.border,
                      theme.borderHover.replace("border-", "hover:border-"),
                    )}
                  >
                    <h3 className={cn("text-xl font-bold mb-2", font.headingClass)}>Digital Art Collection</h3>
                    <p className={cn("text-gray-500 dark:text-gray-400 mb-4", font.bodyClass)}>
                      A series of generative art pieces created using custom algorithms and WebGL shaders. Exhibited in
                      virtual galleries.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={cn("px-2 py-1 text-xs rounded-full border", font.monoClass, theme.bg, theme.border)}
                        style={{ color: theme.primary }}
                      >
                        GLSL
                      </span>
                      <span
                        className={cn("px-2 py-1 text-xs rounded-full border", font.monoClass, theme.bg, theme.border)}
                        style={{ color: theme.primary }}
                      >
                        p5.js
                      </span>
                      <span
                        className={cn("px-2 py-1 text-xs rounded-full border", font.monoClass, theme.bg, theme.border)}
                        style={{ color: theme.primary }}
                      >
                        Generative Art
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
