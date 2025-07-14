import { useState } from "react";
import {
  Phone,
  Smartphone,
  Tablet,
  Laptop,
  Shield,
  Clock,
  CheckCircle,
  Star,
  MapPin,
  Mail,
  PhoneCall,
  Menu,
  X,
  Wrench,
  Award,
  // Users,
  Zap,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "iPhone Repair",
      description: "Screen replacement, battery issues, water damage, and more",
      price: "Starting at ₹1000",
    },
    {
      icon: <Phone className="w-12 h-12 text-blue-600" />,
      title: "Android Repair",
      description:
        "All major Android brands including Samsung, Google, OnePlus",
      price: "Starting at ₹500",
    },
    {
      icon: <Tablet className="w-12 h-12 text-blue-600" />,
      title: "iPad Repair",
      description: "Screen repair, charging port, home button replacement",
      price: "Starting at ₹2000",
    },
    {
      icon: <Laptop className="w-12 h-12 text-blue-600" />,
      title: "MacBook Repair",
      description: "Keyboard, screen, battery, and logic board repairs",
      price: "Starting at ₹5000",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Bring Your Device",
      description: "Visit our shop or use our mail-in service",
    },
    {
      step: "2",
      title: "Free Diagnosis",
      description: "We'll examine your device and provide a quote",
    },
    {
      step: "3",
      title: "Quick Repair",
      description: "Most repairs completed within 30 minutes",
    },
    {
      step: "4",
      title: "Quality Check",
      description: "Every repair comes with a 90-day warranty",
    },
  ];

  const testimonials = [
    {
      name: "Rema Devi",
      text: "Amazing service! Fixed my Redmi screen in just 20 minutes. Professional and affordable.",
      rating: 5,
    },
    {
      name: "Ajmal Khan",
      text: "My samsung phone was completely dead, but they brought it back to life. Highly recommend!",
      rating: 5,
    },
    {
      name: "Arun Pradeep",
      text: "Great customer service and honest pricing. They explained everything clearly.",
      rating: 5,
    },
  ];

  const date = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Wrench className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  Hand2Hand Mobiles
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#process"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Process
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <span className="text-gray-700 font-medium">
                Call: (555) 123-TECH
              </span>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() =>
                  window.open(
                    `https://wa.me/919497332980?text=Hi, I need to fix my phone`
                  )
                }
              >
                Get Quote
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Services
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                About
              </a>
              <a
                href="#process"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Process
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <span className="text-gray-700 font-medium">
                  Call: (555) 123-TECH
                </span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Device.
                <span className="text-blue-600"> Fixed Fast.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional repair services for all your devices. Quick
                turnaround, competitive prices, and a 90-day warranty on all
                repairs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                  onClick={() =>
                    window.open(
                      `https://wa.me/919497332980?text=Hi, I need to fix my phone`
                    )
                  }
                >
                  Book Repair Now
                </button>
                <button
                  className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
                  onClick={() =>
                    window.open(
                      `https://wa.me/919497332980?text=Hi, I need to fix my phone`
                    )
                  }
                >
                  Get Free Quote
                </button>
              </div>
              <div className="flex items-center mt-8 space-x-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Same Day Service</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">90-Day Warranty</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Phone repair technician working"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="text-2xl font-bold text-blue-600 mr-2">
                    4.9
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  500+ Happy Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Repair Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We fix all major devices with high-quality parts and expert
              craftsmanship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl  border border-gray-100 hover:-translate-y-1 transition-transform"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-blue-600 font-semibold mb-4">
                  {service.price}
                </div>
                <button className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose TechFix Pro?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 2 years of experience in device repair, we've built a
                reputation for quality service and customer satisfaction. Our
                certified technicians use only genuine parts and the latest
                repair techniques.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    2+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    1000+
                  </div>
                  <div className="text-gray-600">Devices Repaired</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    98%
                  </div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    4.9
                  </div>
                  <div className="text-gray-600">Customer Rating</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Certified Technicians</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">90-Day Warranty</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Same-Day Service</span>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional repair workspace"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our simple 4-step process gets your device back to perfect
              condition
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Fix Your Device?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Visit our shop or contact us for a free quote. We're here to help!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Visit Our Shop
                    </div>
                    <div className="text-gray-600">
                      Parippally road, Pallickal, Kerala 695604
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <PhoneCall className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-gray-600">(555) 123-TECH</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-gray-600">info@techfixpro.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Hours</div>
                    <div className="text-gray-600">
                      Mon-Fri: 9AM-7PM, Sat: 10AM-6PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Quote
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Device Type
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>iPhone</option>
                    <option>Android Phone</option>
                    <option>iPad</option>
                    <option>MacBook</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issue Description
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                    placeholder="Describe the problem with your device..."
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Wrench className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">
                  Hand2Hand Mobiles
                </span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for all device repairs. Quality service,
                competitive prices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>iPhone Repair</li>
                <li>Android Repair</li>
                <li>iPad Repair</li>
                <li>MacBook Repair</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Warranty</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(555) 123-TECH</li>
                <li>info@techfixpro.com</li>
                <li>Parippally road, Pallickal</li>
                <li>Kerala 695604</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {date} TechFix Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
