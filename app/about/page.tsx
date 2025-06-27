"use client"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Zap, Globe, Lotus, Sparkles, Heart } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-500"></div>
              <Badge className="bg-gradient-to-r from-amber-100 to-rose-100 text-amber-800 border-amber-200 px-4 py-2">
                About Tejasvinā
              </Badge>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-amber-700 to-slate-800 bg-clip-text text-transparent font-serif leading-tight">
              Where Ancient Wisdom Illuminates Modern Consciousness
            </h2>
            <p className="text-xl text-slate-600 mb-8 font-light">
              Tejasvinā Magazine is a confluence of timeless wisdom and contemporary brilliance, dedicated to fostering a global community of conscious creators, seekers, and visionaries.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                  2024
                </div>
                <div className="text-sm text-slate-500 font-medium">Established</div>
                <div className="text-xs text-amber-600 font-serif">स्थापित</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  75K+
                </div>
                <div className="text-sm text-slate-500 font-medium">Conscious Readers</div>
                <div className="text-xs text-indigo-600 font-serif">चेतन पाठक</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  40+
                </div>
                <div className="text-sm text-slate-500 font-medium">Wisdom Keepers</div>
                <div className="text-xs text-emerald-600 font-serif">ज्ञान रक्षक</div>
              </div>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-500"></div>
              <Badge className="bg-gradient-to-r from-amber-100 to-rose-100 text-amber-800 border-amber-200 px-4 py-2">
                Connect
              </Badge>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-full px-6 py-3" />
                <Input placeholder="Your Email" type="email" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-full px-6 py-3" />
              </div>
              <Input placeholder="Subject" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-full px-6 py-3" />
              <Textarea placeholder="Share your thoughts, ideas, or questions..." rows={5} className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-2xl px-6 py-4" />
              <Button className="w-full bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-600 hover:from-amber-700 hover:via-rose-700 hover:to-indigo-700 rounded-full py-4 text-lg font-medium">
                <Lotus className="mr-2 h-5 w-5" />
                Send Your Message
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
        {/* Philosophy Section */}
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-amber-300 via-rose-300 to-indigo-300 bg-clip-text text-transparent font-serif">
              Our Philosophy
              <br />
              <span className="text-2xl md:text-3xl text-amber-200 font-light">हमारा दर्शन</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <Lotus className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-200">सत्यम्</h3>
              <h4 className="text-xl font-semibold mb-4">Truth</h4>
              <p className="text-gray-300 leading-relaxed font-light">
                We seek the eternal truths that transcend time, culture, and circumstance, illuminating the path to authentic understanding.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-200">शिवम्</h3>
              <h4 className="text-xl font-semibold mb-4">Goodness</h4>
              <p className="text-gray-300 leading-relaxed font-light">
                Every story we share aims to elevate consciousness, inspire positive action, and contribute to the collective good of humanity.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-200">सुन्दरम्</h3>
              <h4 className="text-xl font-semibold mb-4">Beauty</h4>
              <p className="text-gray-300 leading-relaxed font-light">
                We celebrate the aesthetic dimension of existence, finding beauty in ideas, expressions, and the profound interconnectedness of all things.
              </p>
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-amber-50 to-rose-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-16 text-center">
              <div className="space-y-6 group">
                <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent transition-all duration-1000 group-hover:scale-105">
                  75K+
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="text-slate-600 font-medium">Conscious Readers</div>
                <div className="text-sm text-amber-600 font-serif opacity-70">चेतन पाठक</div>
              </div>
              <div className="space-y-6 group">
                <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent transition-all duration-1000 group-hover:scale-105">
                  300+
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="text-slate-600 font-medium">Illuminating Articles</div>
                <div className="text-sm text-indigo-600 font-serif opacity-70">प्रकाशमान लेख</div>
              </div>
              <div className="space-y-6 group">
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent transition-all duration-1000 group-hover:scale-105">
                  16
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="text-slate-600 font-medium">Seasonal Issues</div>
                <div className="text-sm text-emerald-600 font-serif opacity-70">ऋतु अंक</div>
              </div>
              <div className="space-y-6 group">
                <div className="text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent transition-all duration-1000 group-hover:scale-105">
                  40+
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="text-slate-600 font-medium">Wisdom Keepers</div>
                <div className="text-sm text-rose-600 font-serif opacity-70">ज्ञान रक्षक</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 