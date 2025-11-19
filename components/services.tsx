export default function Services() {
  const services = [
    {
      title: "Window Cleaning",
      desc: "Interior and exterior window cleaning for residential and commercial properties",
      image: "/crystal-clear-windows-building.jpg",
      icon: "🪟",
    },
    {
      title: "Gutter Cleaning",
      desc: "Keep your gutters flowing freely with our professional cleaning service",
      image: "/gutter-cleaning-service.jpg",
      icon: "🌧️",
    },
    {
      title: "Pressure Washing",
      desc: "Remove dirt, mold, and grime from any surface safely and effectively",
      image: "/pressure-washing-patio.jpg",
      icon: "💨",
    },
    {
      title: "Solar Panel Cleaning",
      desc: "Maximize energy efficiency with regular professional solar panel maintenance",
      image: "/solar-panels-on-roof.jpg",
      icon: "☀️",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-pink-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete home maintenance solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 group cursor-pointer"
            >
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <button className="text-pink-600 font-semibold hover:text-pink-700 group-hover:translate-x-1 transition-transform">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
