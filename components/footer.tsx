export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/pink.jpg" alt="Pink Panther" className="h-10 w-10 rounded" />
              <span className="font-bold">Pink Panther</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional window cleaning and home maintenance services for Mississauga and GTA.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-pink-600 transition">
                  Window Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-600 transition">
                  Gutter Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-600 transition">
                  Pressure Washing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-600 transition">
                  Solar Panel Cleaning
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-pink-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-pink-600 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-pink-600 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-600 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm text-gray-400 mb-2">(905) 555-0100</p>
            <p className="text-sm text-gray-400 mb-2">info@pinkpantherwindows.ca</p>
            <p className="text-sm text-gray-400">Mon-Sun: 7AM-8PM</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Pink Panther Window Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
