import { ArticleCard } from "@/components/article-card"
import { CyberHeading } from "@/components/cyber-heading"

// This would typically come from a CMS or database
const articles = [
  {
    title: "The Future of Neural Interfaces",
    excerpt: "Exploring how brain-computer interfaces will transform human-computer interaction in the next decade.",
    date: "2023-04-15",
    image: "/placeholder.svg?height=400&width=600",
    category: "Technology",
    slug: "/blog/future-of-neural-interfaces",
  },
  {
    title: "Quantum Computing: A Developer's Guide",
    excerpt: "A practical introduction to quantum computing concepts for web developers.",
    date: "2023-03-22",
    image: "/placeholder.svg?height=400&width=600",
    category: "Development",
    slug: "/blog/quantum-computing-guide",
  },
  {
    title: "Ethical Considerations in AI Development",
    excerpt: "Examining the ethical implications of artificial intelligence and how developers can address them.",
    date: "2023-02-10",
    image: "/placeholder.svg?height=400&width=600",
    category: "AI Ethics",
    slug: "/blog/ethical-ai-development",
  },
  {
    title: "The Rise of Decentralized Applications",
    excerpt: "How blockchain technology is enabling a new generation of decentralized applications.",
    date: "2023-01-28",
    image: "/placeholder.svg?height=400&width=600",
    category: "Blockchain",
    slug: "/blog/rise-of-dapps",
  },
  {
    title: "Designing for the Metaverse",
    excerpt: "Best practices for creating immersive user experiences in virtual worlds.",
    date: "2022-12-15",
    image: "/placeholder.svg?height=400&width=600",
    category: "Design",
    slug: "/blog/designing-for-metaverse",
  },
  {
    title: "WebAssembly: The Future of Web Performance",
    excerpt: "How WebAssembly is revolutionizing performance-critical applications on the web.",
    date: "2022-11-05",
    image: "/placeholder.svg?height=400&width=600",
    category: "Development",
    slug: "/blog/webassembly-future",
  },
]

export default function BlogPage() {
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
            <CyberHeading>The Blog</CyberHeading>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              Thoughts, tutorials, and insights on technology, design, and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                image={article.image}
                category={article.category}
                slug={article.slug}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
