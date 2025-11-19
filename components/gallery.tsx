"use client"

import { useState } from "react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { title: "Commercial Building", desc: "High-rise window cleaning", image: "/commercial-skyscraper-windows.jpg" },
    { title: "Residential Home", desc: "Beautiful home exterior", image: "/residential-home-windows.jpg" },
    { title: "Gutter Cleaning", desc: "Clean gutters for drainage", image: "/house-gutter-cleaning.jpg" },
    { title: "Pressure Washing", desc: "Patio before and after", image: "/clean-patio-before-after.jpg" },
    { title: "Solar Panels", desc: "Efficient solar panels", image: "/clean-solar-panels-roof.jpg" },
    { title: "Window Details", desc: "Crystal clear results", image: "/sparkly-clean-window-glass.jpg" },
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-pink-600">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">See our quality work from recent projects</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer group h-64"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                <div className="p-4 w-full text-white">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-pink-400"
              >
                ✕
              </button>
              <img
                src={images[selectedImage].image || "/placeholder.svg"}
                alt={images[selectedImage].title}
                className="w-full h-auto rounded-lg"
              />
              <div className="text-white text-center mt-4">
                <h3 className="text-2xl font-bold">{images[selectedImage].title}</h3>
                <p className="text-gray-300">{images[selectedImage].desc}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
