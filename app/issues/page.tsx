"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, NotebookIcon as Lotus, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const issues = [
  {
    id: 1,
    title: "Śiśira 2024 - The Awakening Winter",
    subtitle: "शिशिर - The Season of Inner Fire",
    cover: "/placeholder.svg?height=400&width=300",
    description:
      "A profound exploration of consciousness, creativity, and the eternal dance between tradition and innovation.",
    articles: 16,
    featured: true,
    color: "from-rose-500 to-pink-600",
  },
  {
    id: 2,
    title: "Śarad 2024 - Autumn's Wisdom",
    subtitle: "शरद् - The Harvest of Knowledge",
    cover: "/placeholder.svg?height=400&width=300",
    description:
      "Stories of transformation, ancient wisdom meeting modern challenges, and the beauty of intellectual growth.",
    articles: 14,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 3,
    title: "Grīṣma 2024 - Summer's Radiance",
    subtitle: "ग्रीष्म - The Fire of Creation",
    cover: "/placeholder.svg?height=400&width=300",
    description: "Celebrating the luminous spirit of innovation, artistic expression, and cultural renaissance.",
    articles: 18,
    color: "from-yellow-500 to-amber-600",
  },
]

export default function IssuesPage() {
  return (
    <div className="py-32 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-500"></div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-amber-700 to-slate-800 bg-clip-text text-transparent font-serif">
              Seasonal Chronicles
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light mb-4">
            Each issue flows with the rhythm of nature, capturing the essence of seasons and consciousness
          </p>
          <p className="text-lg text-amber-600 font-serif">प्रत्येक अंक प्रकृति की लय के साथ बहता है</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {issues.map((issue, index) => (
            <Card
              key={issue.id}
              className="group hover:shadow-2xl transition-all duration-700 border-0 bg-white overflow-hidden relative hover:-translate-y-3"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {issue.featured && (
                <div className="absolute top-6 right-6 z-20">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white border-0 shadow-lg">
                    <Star className="h-3 w-3 mr-1" />
                    Latest
                  </Badge>
                </div>
              )}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${issue.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
              >
                <div className="absolute inset-[3px] bg-white rounded-lg"></div>
              </div>
              <div className="relative z-10">
                <div className="relative overflow-hidden">
                  <Image
                    src={issue.cover || "/placeholder.svg"}
                    alt={issue.title}
                    width={300}
                    height={400}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent`}
                  ></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <BookOpen className="h-4 w-4" />
                      <span>{issue.articles} Illuminations</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-700 transition-colors font-serif">
                      {issue.title}
                    </h3>
                    <p className="text-amber-600 font-serif text-sm">{issue.subtitle}</p>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed font-light">{issue.description}</p>
                  <Button
                    className={`w-full bg-gradient-to-r ${issue.color} hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-500 rounded-full font-medium`}
                  >
                    <Lotus className="mr-2 h-4 w-4" />
                    Explore Issue
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 