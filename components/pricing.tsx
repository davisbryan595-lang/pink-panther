export default function Pricing() {
  const packages = [
    {
      name: "Basic",
      price: "$99",
      desc: "Perfect for small homes",
      features: ["Window cleaning (interior & exterior)", "Up to 20 windows", "One story only", "Basic gutter check"],
      icon: "🏠",
      popular: false,
    },
    {
      name: "Professional",
      price: "$199",
      desc: "Most popular choice",
      features: [
        "Window cleaning (interior & exterior)",
        "Up to 40 windows",
        "Multi-story safe",
        "Full gutter cleaning",
        "Screen cleaning",
        "Free pressure wash spot check",
      ],
      icon: "⭐",
      popular: true,
    },
    {
      name: "Premium",
      price: "$349",
      desc: "Complete home solution",
      features: [
        "Unlimited window cleaning",
        "Full property coverage",
        "Pressure washing included",
        "Gutter & downspout cleaning",
        "Solar panel inspection",
        "Priority scheduling",
      ],
      icon: "👑",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple & Transparent <span className="text-pink-600">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">No hidden fees. Get a free quote today.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition-all transform hover:-translate-y-4 ${
                pkg.popular ? "ring-2 ring-pink-600 shadow-2xl scale-105 bg-white" : "bg-white shadow-lg"
              }`}
            >
              {pkg.popular && <div className="bg-pink-600 text-white text-center py-2 font-bold">MOST POPULAR</div>}
              <div className="p-8">
                <div className="text-5xl mb-4">{pkg.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{pkg.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-pink-600">{pkg.price}</span>
                  <span className="text-gray-600"> per visit</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <span className="text-pink-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                    pkg.popular
                      ? "bg-pink-600 text-white hover:bg-pink-700"
                      : "border-2 border-pink-600 text-pink-600 hover:bg-pink-50"
                  }`}
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
