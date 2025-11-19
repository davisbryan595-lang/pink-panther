"use client"

import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 relative overflow-hidden flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/crystal-clear-windows-building.jpg')"
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Content */}
        <div className="space-y-8">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Crystal Clear <span className="text-pink-400">Windows</span>
            </h1>
            <p className="text-xl text-gray-100 mb-6">
              Professional window cleaning, gutter cleaning, and home maintenance services for Mississauga and the
              Greater Toronto Area.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 group">
              Get Free Quote
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="border-2 border-pink-400 text-pink-400 hover:bg-pink-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">500+</div>
              <div className="text-sm text-gray-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">15+</div>
              <div className="text-sm text-gray-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">5★</div>
              <div className="text-sm text-gray-200">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-pink-400" size={32} />
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </section>
  )
}
