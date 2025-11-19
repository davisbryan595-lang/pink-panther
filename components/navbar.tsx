"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Pricing", id: "pricing" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("home")}>
            <img
              src="/images/pink.jpg"
              alt="Pink Panther"
              className="h-14 w-14 rounded-lg shadow-md hover:scale-110 transition-transform"
            />
            <span className="text-xl font-bold text-pink-600 hidden sm:inline">Pink Panther</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full mt-2 mx-4 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-all"
            >
              Get Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
