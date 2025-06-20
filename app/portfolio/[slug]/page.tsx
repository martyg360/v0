import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { CyberHeading } from "@/components/cyber-heading"

// This would typically come from a CMS or database based on the slug
const project = {
  title: "Neural Interface",
  description: "A brain-computer interface for controlling smart home devices with thoughts.",
  fullDescription: `
    The Neural Interface project is a cutting-edge application that allows users to control smart home devices using only their thoughts. By leveraging advances in EEG technology and machine learning, this system can interpret neural signals and translate them into commands for various connected devices.
    
    The project consists of three main components:
    
    1. A hardware interface that captures brain activity using non-invasive EEG sensors
    2. A machine learning pipeline that processes and classifies neural signals
    3. A software application that translates classified signals into device commands
    
    The system currently supports basic commands such as turning lights on/off, adjusting thermostat settings, and controlling media playback. Future development will focus on expanding the command set and improving accuracy through personalized machine learning models.
  `,
  image: "/placeholder.svg?height=600&width=1200",
  gallery: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  technologies: ["React", "TensorFlow.js", "WebGL", "Node.js", "WebSockets", "Three.js"],
  liveUrl: "https://neural-interface.example.com",
  githubUrl: "https://github.com/example/neural-interface",
  features: [
    "Real-time neural signal processing",
    "Machine learning-based command classification",
    "3D visualization of brain activity",
    "Integration with popular smart home platforms",
    "User-friendly calibration process",
    "Personalized command profiles",
  ],
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      {/* Animated background grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(4,92,180,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.8)_70%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTMzNTciIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <main className="relative z-10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="relative mb-12">
            <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-pink-600 rounded-lg blur-sm opacity-50"></div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-gray-300 mb-8">{project.description}</p>

              <div className="mb-12 whitespace-pre-line text-gray-300">{project.fullDescription}</div>

              <div className="mb-12">
                <CyberHeading className="mb-6">Features</CyberHeading>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 h-2 w-2 bg-blue-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-12">
                <CyberHeading className="mb-6">Gallery</CyberHeading>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-pink-600 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition duration-300"></div>
                      <div className="relative rounded-lg overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} screenshot ${index + 1}`}
                          width={600}
                          height={400}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-black/50 backdrop-blur-xs border border-blue-900/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>

                  <div className="mb-6">
                    <h4 className="text-sm text-gray-400 uppercase mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button
                      asChild
                      className="w-full bg-linear-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white border-0"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Project
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-blue-500 text-blue-400 hover:bg-blue-950/30"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Source Code
                      </a>
                    </Button>
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
