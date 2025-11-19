export default function About() {
  const features = [
    { icon: "🔍", title: "Crystal Clear Results", desc: "Streak-free, spotless windows every time" },
    { icon: "⚡", title: "Fast & Efficient", desc: "Quick service without compromising quality" },
    { icon: "🛡️", title: "Insured & Bonded", desc: "Your safety and property protected" },
    { icon: "🌱", title: "Eco-Friendly", desc: "Safe products for your family and planet" },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-pink-600">Pink Panther?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've been serving Mississauga and the GTA with professional, reliable window cleaning services for over 15
            years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img
              src="/professional-window-cleaner-using-squeegee-on-buil.jpg"
              alt="Professional window cleaning"
              className="rounded-lg shadow-xl w-full object-cover h-96"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Trusted by Thousands</h3>
            <p className="text-gray-600 leading-relaxed">
              Our team of certified professionals uses state-of-the-art equipment and eco-friendly cleaning solutions to
              deliver exceptional results every time.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-pink-600 text-2xl">✓</span>
                <span className="text-gray-700">Licensed and insured technicians</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-600 text-2xl">✓</span>
                <span className="text-gray-700">Guaranteed satisfaction or your money back</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-600 text-2xl">✓</span>
                <span className="text-gray-700">Available 7 days a week</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-pink-600 text-2xl">✓</span>
                <span className="text-gray-700">Same-day booking available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-blue-50 p-6 rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-2 border border-pink-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
