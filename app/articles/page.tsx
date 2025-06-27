"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { User, Calendar } from "lucide-react"

const featuredArticles = [
  {
    id: 1,
    title: "The Sacred Geometry of Modern Consciousness",
    excerpt:
      "Exploring how ancient Indian mathematical principles illuminate contemporary spiritual awakening and digital mindfulness practices.",
    author: "Dr. Kavitha Menon",
    date: "Dec 15, 2024",
    category: "Philosophy",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "12 min read",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 2,
    title: "Raga in the Age of AI: Music's Eternal Soul",
    excerpt:
      "How classical Indian music theory provides a framework for understanding artificial intelligence and human creativity.",
    author: "Maestro Ravi Shankar Jr.",
    date: "Dec 12, 2024",
    category: "Arts & Technology",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "15 min read",
    color: "from-indigo-600 to-purple-700",
  },
  {
    id: 3,
    title: "The Quantum Vedanta: Science Meets Spirituality",
    excerpt: "Bridging ancient Vedantic wisdom with quantum physics to understand consciousness in the 21st century.",
    author: "Prof. Ananda Krishnan",
    date: "Dec 10, 2024",
    category: "Science & Spirituality",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "18 min read",
    color: "from-emerald-500 to-teal-600",
  },
]

export default function ArticlesPage() {
  return (
    <div className="py-32 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-500"></div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-amber-700 to-slate-800 bg-clip-text text-transparent font-serif">
              All Illuminations
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            A comprehensive collection of transformative narratives and profound insights
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { name: "All", sanskrit: "सर्व", color: "from-slate-600 to-slate-700" },
            { name: "Philosophy", sanskrit: "दर्शन", color: "from-amber-600 to-orange-600" },
            { name: "Science & Spirituality", sanskrit: "विज्ञान", color: "from-indigo-600 to-purple-600" },
            { name: "Arts & Culture", sanskrit: "कला", color: "from-rose-600 to-pink-600" },
            { name: "Consciousness", sanskrit: "चेतना", color: "from-emerald-600 to-teal-600" },
            { name: "Innovation", sanskrit: "नवाचार", color: "from-blue-600 to-cyan-600" },
          ].map((category) => (
            <Button
              key={category.name}
              variant="outline"
              className={`group hover:bg-gradient-to-r hover:${category.color} hover:text-white bg-transparent border-2 border-slate-200 hover:border-transparent transition-all duration-300 px-6 py-3 rounded-full`}
            >
              <span className="font-medium">{category.name}</span>
              <span className="ml-2 text-xs opacity-70 font-serif">{category.sanskrit}</span>
            </Button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...featuredArticles, ...featuredArticles].map((article, index) => (
            <Card
              key={`${article.id}-${index}`}
              className="group hover:shadow-2xl transition-all duration-700 border-0 bg-white overflow-hidden relative hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${article.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
              >
                <div className="absolute inset-[2px] bg-white rounded-lg"></div>
              </div>
              <div className="relative z-10">
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`bg-gradient-to-r ${article.color} text-white border-0 shadow-lg`}>
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-700 transition-colors font-serif">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3 font-light">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full flex items-center justify-center">
                        <User className="h-3 w-3 text-white" />
                      </div>
                      <span className="font-medium">{article.author}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <span className="text-amber-600 font-medium">{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 