import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Shield, 
  Star, 
  Wrench, 
  Clock, 
  Smartphone, 
  PhoneCall, 
  MessageSquare, 
  ArrowRight, 
  MapPin, 
  Sparkles,
  ChevronRight,
  Cpu,
  Droplets,
  Battery,
  Laptop
} from "lucide-react";
import SEO from "../components/common/SEO";
import { BUSINESS_CONFIG, getWhatsAppUrl, useStoreStatus } from "../config/business";

interface HomeProps {
  onOpenBooking: (service?: string, brand?: string) => void;
}

export default function Home({ onOpenBooking }: HomeProps) {
  const storeStatus = useStoreStatus();

  const featuredServices = [
    {
      id: "screen",
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Screen & Display Replacement",
      desc: "Cracked glass, blank screens, touch issues, and OLED repairs.",
      price: "₹500",
      time: "30–45 Mins",
      badge: "Most Popular"
    },
    {
      id: "battery",
      icon: <Battery className="w-8 h-8 text-emerald-600" />,
      title: "Battery Health Replacement",
      desc: "Quick draining, sudden shutdowns, or swollen battery replacement.",
      price: "₹600",
      time: "30 Mins",
      badge: "Express"
    },
    {
      id: "charging",
      icon: <Wrench className="w-8 h-8 text-amber-600" />,
      title: "Charging Port & Mic Repair",
      desc: "Loose charger connection, slow charging, and muffled mic issues.",
      price: "₹350",
      time: "30 Mins",
      badge: "Same Day"
    },
    {
      id: "water",
      icon: <Droplets className="w-8 h-8 text-cyan-600" />,
      title: "Water & Liquid Damage Recovery",
      desc: "Ultrasonic PCB cleaning, short-circuit recovery, and data preservation.",
      price: "₹800",
      time: "2–4 Hours",
      badge: "Specialized"
    },
    {
      id: "motherboard",
      icon: <Cpu className="w-8 h-8 text-purple-600" />,
      title: "Motherboard & Micro-Soldering",
      desc: "Dead phones, power IC issues, network fault, and chip-level fixes.",
      price: "₹1,200",
      time: "24–48 Hours",
      badge: "Chip-Level"
    },
    {
      id: "laptop",
      icon: <Laptop className="w-8 h-8 text-indigo-600" />,
      title: "iPad, Tablet & Laptop Servicing",
      desc: "Screen replacements, keyboard fixes, hinges, and logic board servicing.",
      price: "₹2,000",
      time: "1–2 Days",
      badge: "Hardware"
    }
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Phone & Electronics Repair in Pallickal, Kerala"
        description="Fast, reliable phone, tablet, and laptop repair services in Pallickal, Kerala. Screen replacement in 30 mins, genuine parts, 90-day warranty, and free diagnostics."
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-white pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
        {/* Subtle background glow decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Trust Tag */}
              <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-100 shadow-xs">
                <span className="flex h-2 w-2 relative">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${storeStatus.isOpen ? "bg-emerald-400" : "bg-amber-400"}`} />
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${storeStatus.isOpen ? "bg-emerald-500" : "bg-amber-500"}`} />
                </span>
                <span className="text-xs font-bold text-gray-800">
                  {storeStatus.statusText} • Pallickal Service Centre
                </span>
                <span className="text-blue-600 text-xs font-semibold">&bull; 90-Day Warranty</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.12]">
                Your Device.{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Repaired Fast & Right.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Pallickal's trusted mobile repair centre. We repair smartphones, iPads, and laptops with genuine parts, express 30-minute turnaround, and transparent pricing.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
                <button
                  onClick={() => onOpenBooking()}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-xl hover:-translate-y-0.5 transition-all text-base flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 text-blue-200" />
                  <span>Book Repair Online</span>
                </button>

                <a
                  href={getWhatsAppUrl("Hi Hand2Hand Mobiles, I need an instant repair quote for my phone")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all text-base flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>WhatsApp Quote</span>
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                  className="bg-white hover:bg-gray-50 text-gray-800 font-bold px-5 py-3.5 rounded-xl border border-gray-200 hover:border-gray-300 transition-all text-base flex items-center justify-center space-x-2 shadow-xs"
                >
                  <PhoneCall className="w-4 h-4 text-blue-600" />
                  <span>Call Shop</span>
                </a>
              </div>

              {/* Key Trust Highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center space-x-2 text-xs font-semibold text-gray-700 bg-white/70 backdrop-blur-sm p-2 rounded-lg border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-gray-700 bg-white/70 backdrop-blur-sm p-2 rounded-lg border border-gray-100">
                  <Shield className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>90-Day Warranty</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-gray-700 bg-white/70 backdrop-blur-sm p-2 rounded-lg border border-gray-100 col-span-2 sm:col-span-1">
                  <Wrench className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Free Diagnosis</span>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 mt-12 lg:mt-0 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Card Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <img
                    src="https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Precision phone repair technician at work"
                    className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700 opacity-95"
                    loading="eager"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                      Hand2Hand Workshop
                    </div>
                    <div className="text-sm font-semibold text-slate-100">
                      ESD-safe workstations & micro-soldering precision
                    </div>
                  </div>
                </div>

                {/* Floating Rating Badge */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600 font-extrabold text-lg">
                    4.9
                  </div>
                  <div>
                    <div className="flex text-yellow-400 space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-xs font-bold text-gray-900 mt-0.5">
                      500+ Happy Customers
                    </div>
                    <div className="text-[11px] text-gray-500">
                      Across Pallickal & nearby areas
                    </div>
                  </div>
                </div>

                {/* Floating Express Badge */}
                <div className="absolute -top-4 -right-4 sm:-right-6 bg-blue-600 text-white py-2 px-3.5 rounded-xl shadow-lg flex items-center space-x-2 text-xs font-bold">
                  <Clock className="w-4 h-4 text-blue-200" />
                  <span>30-Min Fast Repair</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brands We Repair Section */}
      <section className="py-12 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Complete Brand Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              We Repair All Major Smartphone & Laptop Brands
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto mt-2">
              OEM and genuine replacement parts in stock for instant express turnaround.
            </p>
          </div>

          {/* Brand Pills Grid */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {BUSINESS_CONFIG.supportedBrands.map((brand) => (
              <button
                key={brand.name}
                onClick={() => onOpenBooking(undefined, brand.name)}
                className="group px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-blue-600 border border-slate-700/60 hover:border-blue-500 text-slate-200 hover:text-white transition-all text-sm font-semibold flex items-center space-x-2 shadow-xs cursor-pointer"
              >
                <span>{brand.name}</span>
                <span className="text-slate-500 group-hover:text-blue-200 text-xs transition-colors">
                  &rarr;
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Repair Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Expert Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                Popular Repair Services
              </h2>
              <p className="text-gray-600 text-base max-w-xl mt-2">
                Factory-grade diagnostics and repairs with clear upfront pricing and 90-day warranty.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Link
                to="/services"
                className="inline-flex items-center space-x-1 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>View Full Service Catalog</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-gray-50 group-hover:bg-blue-50 transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100/50">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-4">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-gray-400">Starting From</span>
                      <span className="text-base font-extrabold text-gray-900">{service.price}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] uppercase font-bold text-gray-400">Turnaround</span>
                      <span className="font-semibold text-gray-700 flex items-center justify-end">
                        <Clock className="w-3 h-3 mr-1 text-blue-500" />
                        {service.time}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenBooking(service.title)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-3 rounded-lg transition-colors text-center shadow-xs cursor-pointer"
                    >
                      Book Repair
                    </button>
                    <a
                      href={getWhatsAppUrl(`Hi Hand2Hand Mobiles, I need an inquiry for ${service.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold py-2.5 px-3 rounded-lg transition-colors text-center flex items-center justify-center space-x-1"
                    >
                      <MessageSquare className="w-3 h-3 fill-current text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Diagnosis Banner */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                100% Free Diagnostics
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Not sure what's wrong with your phone?
              </h3>
              <p className="text-blue-100 text-sm max-w-xl leading-relaxed">
                Bring your device to our Pallickal store. We will inspect it for free and give you an exact, transparent quote before fixing anything.
              </p>
            </div>
            
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenBooking("Free Complete Diagnostics")}
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm cursor-pointer"
              >
                Claim Free Diagnosis
              </button>
              <a
                href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                className="inline-flex items-center justify-center border border-white/40 hover:bg-white/10 text-white font-semibold px-5 py-3.5 rounded-xl transition-all text-sm"
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                <span>Call Technician</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Hand2Hand Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Why Customers Trust Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              High-Quality Workmanship & Guaranteed Results
            </h2>
            <p className="text-gray-600 text-base mt-2">
              With 2+ years of dedicated service in Pallickal, we prioritize honest repairs over selling unnecessary replacements.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="text-3xl sm:text-4xl font-black text-blue-600 mb-1">
                {BUSINESS_CONFIG.stats.yearsInBusiness}
              </div>
              <div className="text-xs font-bold text-gray-800 uppercase tracking-wider">Years Experience</div>
              <div className="text-[11px] text-gray-500 mt-0.5">In device servicing</div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="text-3xl sm:text-4xl font-black text-blue-600 mb-1">
                {BUSINESS_CONFIG.stats.devicesRepaired}
              </div>
              <div className="text-xs font-bold text-gray-800 uppercase tracking-wider">Devices Repaired</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Phones, tablets & laptops</div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="text-3xl sm:text-4xl font-black text-blue-600 mb-1">
                {BUSINESS_CONFIG.stats.successRate}
              </div>
              <div className="text-xs font-bold text-gray-800 uppercase tracking-wider">Success Rate</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Proven turnaround</div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="text-3xl sm:text-4xl font-black text-blue-600 mb-1">
                {BUSINESS_CONFIG.stats.averageRating}
              </div>
              <div className="text-xs font-bold text-gray-800 uppercase tracking-wider">Customer Rating</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Over 500+ reviews</div>
            </div>
          </div>

          {/* Guarantees 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_CONFIG.guarantees.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg mb-4">
                  {idx + 1}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Simple & Hassle-Free
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              How Our Repair Process Works
            </h2>
            <p className="text-gray-600 text-base mt-2">
              Fast, transparent, and seamless from drop-off to pickup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 shadow-md">
                1
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Visit Shop or Message</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Bring your device to Pallickal or message us on WhatsApp with the problem details.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 shadow-md">
                2
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Free Device Diagnosis</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Our technician checks the fault and gives you an upfront, fixed-cost estimate.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 shadow-md">
                3
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Express Repair</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Repairs are completed with genuine parts. Most screens and batteries take under 45 minutes.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 shadow-md">
                4
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Test & 90-Day Warranty</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                We test all device functions before handover, backed by our comprehensive 90-day warranty.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/process"
              className="inline-flex items-center space-x-1.5 text-sm font-bold text-blue-600 hover:text-blue-700"
            >
              <span>Read detailed warranty policy & FAQ</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Verified Customer Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Verified Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              What Our Customers Say
            </h2>
            <p className="text-slate-400 text-base mt-2">
              Real reviews from local smartphone owners in Kerala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BUSINESS_CONFIG.reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-800/90 rounded-2xl p-7 border border-slate-700/80 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1 text-yellow-400 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-sm">{rev.name}</div>
                    <div className="text-xs text-slate-400">{rev.device} • {rev.serviceType}</div>
                  </div>
                  <span className="text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Store Location & Hours Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Visit Our Repair Shop
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Convenient Location in Pallickal, Kerala
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Walk in anytime during working hours for immediate device testing and express servicing. No prior appointment required for most screen and battery replacements.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Address</div>
                    <div className="text-sm text-gray-600">{BUSINESS_CONFIG.contact.address.full}</div>
                    <a
                      href={BUSINESS_CONFIG.contact.address.mapsQueryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 font-bold hover:underline inline-block mt-1"
                    >
                      Open in Google Maps &rarr;
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Working Hours</div>
                    <div className="text-sm text-gray-600">
                      <div className="font-semibold text-gray-900">Monday – Sunday: 9:00 AM – 9:00 PM</div>
                      <div className="text-emerald-700 text-xs font-medium mt-0.5">Open all 7 days of the week</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href={BUSINESS_CONFIG.contact.address.mapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all text-sm shadow-md flex items-center space-x-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-5 py-3 rounded-xl transition-all text-sm flex items-center space-x-2"
                >
                  <PhoneCall className="w-4 h-4 text-blue-600" />
                  <span>Call {BUSINESS_CONFIG.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Map Placeholder / Card */}
            <div className="lg:col-span-6">
              <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center space-x-2">
                      <Wrench className="w-5 h-5 text-blue-400" />
                      <span className="font-bold text-white">Hand2Hand Mobiles</span>
                    </div>
                    <span className="text-xs bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-1 rounded-full">
                      Pallickal, Kerala
                    </span>
                  </div>

                  <div className="space-y-3 text-sm text-slate-300">
                    <p className="leading-relaxed">
                      📍 Located on <strong className="text-white">Parippally Road, Pallickal</strong> with easy roadside parking and quick pedestrian access.
                    </p>
                    <p className="leading-relaxed text-xs text-slate-400">
                      Directly reachable from Parippally, Kallambalam, Navaikulam, and surrounding Kollam/Trivandrum border regions.
                    </p>
                  </div>

                  <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Instant Contact Channels</div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">Direct Phone:</span>
                      <a href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`} className="text-blue-400 font-bold hover:underline">
                        {BUSINESS_CONFIG.contact.phoneDisplay}
                      </a>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">WhatsApp:</span>
                      <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">
                        +91 94973 32980
                      </a>
                    </div>
                  </div>

                  <a
                    href={BUSINESS_CONFIG.contact.address.mapsQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all text-center block shadow-lg text-sm"
                  >
                    Open in Google Maps Application &rarr;
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final Bottom Banner */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black max-w-2xl mx-auto leading-tight">
            Ready to Get Your Device Working Like New?
          </h2>
          <p className="text-blue-100 text-base max-w-xl mx-auto">
            Get an instant estimate in under 60 seconds on WhatsApp or book a priority repair slot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl shadow-xl transition-all text-base cursor-pointer"
            >
              Book Repair Now
            </button>
            <a
              href={getWhatsAppUrl("Hi Hand2Hand Mobiles, I would like to book a fast repair")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-xl transition-all text-base flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
