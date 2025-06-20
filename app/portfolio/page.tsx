import { ProjectCard } from "@/components/project-card"
import { CyberHeading } from "@/components/cyber-heading"

// This would typically come from a CMS or database
const projects = [
  {
    title: "Neural Interface",
    description: "A brain-computer interface for controlling smart home devices with thoughts.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "TensorFlow.js", "WebGL"],
    link: "/portfolio/neural-interface",
  },
  {
    title: "Quantum Marketplace",
    description: "Decentralized marketplace for digital assets with quantum-resistant encryption.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Solidity", "IPFS"],
    link: "/portfolio/quantum-marketplace",
  },
  {
    title: "Cybernetic Vision",
    description: "AR application that enhances human vision with real-time data overlays.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Three.js", "WebXR", "TypeScript"],
    link: "/portfolio/cybernetic-vision",
  },
  {
    title: "Digital Twin",
    description: "Virtual replica of physical environments for simulation and analysis.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Unity", "C#", "Azure Digital Twins"],
    link: "/portfolio/digital-twin",
  },
  {
    title: "Neomorphic UI Kit",
    description: "Futuristic UI component library with cyberpunk-inspired design elements.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Styled Components", "Storybook"],
    link: "/portfolio/neomorphic-ui",
  },
  {
    title: "Synthetic Data Generator",
    description: "AI-powered tool for generating realistic synthetic datasets for machine learning.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "PyTorch", "FastAPI"],
    link: "/portfolio/synthetic-data",
  },
]

export default function PortfolioPage() {
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
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <CyberHeading>My Portfolio</CyberHeading>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              A showcase of my projects and creative work in web development, design, and digital art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
