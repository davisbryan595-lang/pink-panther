"use client"

import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-pink-50 to-white relative overflow-hidden flex items-center justify-center"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Crystal Clear <span className="text-pink-600">Windows</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Professional window cleaning, gutter cleaning, and home maintenance services for Mississauga and the
              Greater Toronto Area.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 group">
              Get Free Quote
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="border-2 border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">5★</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-96 md:h-full flex items-center justify-center">
          <div className="relative w-full max-w-sm">
            <img
              src="/images/pink.jpg"
              alt="Pink Panther Mascot"
              className="w-full h-auto drop-shadow-2xl animate-bounce-slow"
            />
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-pink-600" size={32} />
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
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
