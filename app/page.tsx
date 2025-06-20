import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { ArticleCard } from "@/components/article-card"
import { CyberHeading } from "@/components/cyber-heading"
import { ContactSection } from "@/components/contact-section"
import { ThemedHeroSection } from "@/components/themed-hero-section"
import { ThemedAboutSection } from "@/components/themed-about-section"
import { ThemedNewsletterSection } from "@/components/themed-newsletter-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Animated background grid - visible only in dark mode */}
      <div className="fixed inset-0 z-0 hidden dark:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(4,92,180,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.8)_70%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTMzNTciIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      {/* Light mode subtle background */}
      <div className="fixed inset-0 z-0 dark:hidden">
        <div className="absolute inset-0 bg-gray-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmMWY1ZjkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-50"></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <ThemedHeroSection />

        {/* Featured Projects Section */}
        <section id="projects" className="relative py-20 border-t border-gray-200 dark:border-blue-900/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <CyberHeading>Featured Projects</CyberHeading>
              <Link
                href="/portfolio"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center group"
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Neural Interface"
                description="A brain-computer interface for controlling smart home devices with thoughts."
                image="/placeholder.svg?height=400&width=600"
                tags={["React", "TensorFlow.js", "WebGL"]}
                link="/portfolio/neural-interface"
              />
              <ProjectCard
                title="Quantum Marketplace"
                description="Decentralized marketplace for digital assets with quantum-resistant encryption."
                image="/placeholder.svg?height=400&width=600"
                tags={["Next.js", "Solidity", "IPFS"]}
                link="/portfolio/quantum-marketplace"
              />
              <ProjectCard
                title="Cybernetic Vision"
                description="AR application that enhances human vision with real-time data overlays."
                image="/placeholder.svg?height=400&width=600"
                tags={["Three.js", "WebXR", "TypeScript"]}
                link="/portfolio/cybernetic-vision"
              />
            </div>
          </div>
        </section>

        {/* Latest Articles Section */}
        <section id="blog" className="relative py-20 border-t border-gray-200 dark:border-blue-900/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <CyberHeading>Latest Articles</CyberHeading>
              <Link
                href="/blog"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center group"
              >
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ArticleCard
                title="The Future of Neural Interfaces"
                excerpt="Exploring how brain-computer interfaces will transform human-computer interaction in the next decade."
                date="2023-04-15"
                image="/placeholder.svg?height=400&width=600"
                category="Technology"
                slug="/blog/future-of-neural-interfaces"
              />
              <ArticleCard
                title="Quantum Computing: A Developer's Guide"
                excerpt="A practical introduction to quantum computing concepts for web developers."
                date="2023-03-22"
                image="/placeholder.svg?height=400&width=600"
                category="Development"
                slug="/blog/quantum-computing-guide"
              />
              <ArticleCard
                title="Ethical Considerations in AI Development"
                excerpt="Examining the ethical implications of artificial intelligence and how developers can address them."
                date="2023-02-10"
                image="/placeholder.svg?height=400&width=600"
                category="AI Ethics"
                slug="/blog/ethical-ai-development"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <ThemedAboutSection />

        {/* Newsletter Section */}
        <ThemedNewsletterSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </div>
  )
}
