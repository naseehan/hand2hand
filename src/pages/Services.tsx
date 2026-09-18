import { useState } from "react";
import { 
  Smartphone, 
  Battery, 
  Wrench, 
  Droplets, 
  Cpu, 
  Camera, 
  Tablet, 
  Laptop, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  PhoneCall, 
  Sparkles,
  Info
} from "lucide-react";
import SEO from "../components/common/SEO";
import { BUSINESS_CONFIG, getServiceQuoteWhatsAppUrl, getWhatsAppUrl } from "../config/business";

interface ServicesProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Repair Services" },
    { id: "smartphones", label: "Smartphone & iPhone" },
    { id: "specialized", label: "Water Damage & Motherboard" },
    { id: "tablets", label: "iPads & Tablets" },
    { id: "laptops", label: "MacBooks & Laptops" },
  ];

  const filteredServices = activeCategory === "all"
    ? BUSINESS_CONFIG.services
    : BUSINESS_CONFIG.services.filter(s => s.category === activeCategory);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "screen-replacement":
        return <Smartphone className="w-8 h-8 text-blue-600" />;
      case "battery-replacement":
        return <Battery className="w-8 h-8 text-emerald-600" />;
      case "charging-port":
        return <Wrench className="w-8 h-8 text-amber-600" />;
      case "water-damage":
        return <Droplets className="w-8 h-8 text-cyan-600" />;
      case "motherboard-repair":
        return <Cpu className="w-8 h-8 text-purple-600" />;
      case "camera-backglass":
        return <Camera className="w-8 h-8 text-rose-600" />;
      case "ipad-tablet":
        return <Tablet className="w-8 h-8 text-blue-600" />;
      case "laptop-macbook":
        return <Laptop className="w-8 h-8 text-indigo-600" />;
      default:
        return <Wrench className="w-8 h-8 text-blue-600" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Repair Services & Pricing"
        description="Comprehensive device repair services at Hand2Hand Mobiles Pallickal. Screen replacements, battery fixes, water damage recovery, motherboard soldering, and laptop repairs with 90-day warranty."
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-blue-900 via-indigo-900 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-500/20 px-3.5 py-1.5 rounded-full border border-blue-400/30">
            Professional Device Servicing
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4 tracking-tight">
            Our Repair Services & Pricing
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            All repairs are performed with high-grade genuine and OEM components, backed by our 90-day comprehensive warranty and free diagnostic check.
          </p>

          {/* Quick Stats Strip */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs sm:text-sm text-blue-200">
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>90-Day Warranty</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>Express 30–45 Min Service</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Free Upfront Diagnosis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Services Catalog */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-gray-100">
                    {getServiceIcon(service.id)}
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase text-gray-400 block">Starting From</span>
                    <span className="text-xl sm:text-2xl font-black text-blue-600">₹{service.startingPrice}</span>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md">
                    {service.deviceTypes}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="bg-slate-50/70 rounded-2xl p-4 border border-slate-100 mb-6 space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Service Inclusions
                  </div>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer & Action Buttons */}
              <div className="pt-4 border-t border-gray-100 space-y-4">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-3.5 h-3.5 text-blue-500 mr-1" />
                    <span>Est. Time: <strong className="text-gray-800">{service.duration}</strong></span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 mr-1" />
                    <span>Warranty: <strong className="text-gray-800">{service.warranty}</strong></span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-sm flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <Wrench className="w-4 h-4 text-blue-200" />
                    <span>Book Repair</span>
                  </button>

                  <a
                    href={getServiceQuoteWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold py-3 px-4 rounded-xl text-sm transition-all flex items-center justify-center space-x-1.5 border border-emerald-200"
                  >
                    <MessageSquare className="w-4 h-4 fill-current text-emerald-600" />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Free Diagnostics Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-200 bg-white/10 px-3 py-1 rounded-full">
              No Hidden Charges
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold">
              Need a Diagnosis or Custom Repair Quote?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Don't know what caused your phone to stop working? Bring your phone, tablet, or laptop to our Pallickal service centre. We provide a 100% free physical diagnostic check and explain everything before you spend a single rupee.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => onOpenBooking("Free Complete Diagnostics")}
                className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
              >
                Schedule Free Diagnosis
              </button>
              <a
                href={getWhatsAppUrl("Hi Hand2Hand Mobiles, I need a free diagnosis for my device")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat with Technician</span>
              </a>
              <a
                href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                className="border border-white/40 hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-sm flex items-center justify-center space-x-1.5"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Shop</span>
              </a>
            </div>
          </div>
        </div>

        {/* Pricing Transparency & Quality Notice */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xs flex items-start space-x-4">
          <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl shrink-0 mt-1">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-sm text-gray-600">
            <h4 className="font-bold text-gray-900 text-base">
              Transparent Pricing & Parts Assurance
            </h4>
            <p className="leading-relaxed">
              * Exact repair costs may vary depending on the specific phone brand, model, and display technology (LCD, OLED, AMOLED, or 120Hz ProMotion). All replacement screens and battery cells are factory-tested before installation. Every completed hardware service includes our 90-day warranty coverage.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
