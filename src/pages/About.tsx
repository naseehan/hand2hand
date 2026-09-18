import { 
  Heart, 
  PhoneCall, 
  Microscope,
  Layers,
  Flame,
  Shield
} from "lucide-react";
import SEO from "../components/common/SEO";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "../config/business";

interface AboutProps {
  onOpenBooking: () => void;
}

export default function About({ onOpenBooking }: AboutProps) {
  const workshopStandards = [
    {
      icon: <Microscope className="w-7 h-7 text-blue-600" />,
      title: "Digital Microscope & Micro-Soldering",
      desc: "High-magnification trinocular microscopes and precision soldering stations for complex BGA chip repairs, power ICs, and board traces."
    },
    {
      icon: <Layers className="w-7 h-7 text-indigo-600" />,
      title: "ESD-Safe Anti-Static Workstations",
      desc: "Grounded anti-static mats and wrist straps to protect delicate smartphone integrated circuits and processors from electrostatic damage."
    },
    {
      icon: <Flame className="w-7 h-7 text-amber-600" />,
      title: "Ultrasonic Cleaning & Heat Presses",
      desc: "Industrial ultrasonic chemical baths for liquid damage corrosion removal and temperature-controlled curing presses for flush screen seals."
    },
    {
      icon: <Shield className="w-7 h-7 text-emerald-600" />,
      title: "Factory-Grade Calibration Testers",
      desc: "Hardware battery health testing units, touch digitizer response testers, and display color gamut calibration for OEM-standard output."
    }
  ];

  const values = [
    {
      title: "Transparent & Honest Pricing",
      desc: "No hidden diagnosis fees. We explain the problem clearly, give you a fixed quote upfront, and only proceed after your explicit approval."
    },
    {
      title: "90-Day Full Warranty",
      desc: "Every screen, battery, and replacement hardware part is backed by our 90-day guarantee for maximum peace of mind."
    },
    {
      title: "Speed Without Cutting Corners",
      desc: "Most routine screen and battery repairs are delivered in 30–45 minutes, without compromising on adhesive curing or waterproof sealing."
    },
    {
      title: "E-Waste Reduction & Sustainability",
      desc: "By repairing rather than discarding broken devices, we extend device lifespans and keep toxic electronic waste out of our landfills."
    }
  ];

  return (
    <div className="bg-white">
      <SEO
        title="About Our Service Centre"
        description="Learn about Hand2Hand Mobiles in Pallickal, Kerala. With 2+ years of experience and 1,000+ repaired devices, our certified technicians deliver precision phone, tablet, and laptop repairs."
      />

      {/* Hero / About Banner */}
      <section className="bg-gradient-to-b from-blue-900 via-indigo-900 to-slate-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-500/20 px-3.5 py-1.5 rounded-full border border-blue-400/30">
                Pallickal's Trusted Repair Specialist
              </span>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Dedicated to Precision Device Repair & Honest Service
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Hand2Hand Mobiles was founded in Pallickal, Kerala with a straightforward mission: to provide dependable, affordable, and express gadget repair services that our local community can truly trust.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start">
                <button
                  onClick={onOpenBooking}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm cursor-pointer"
                >
                  Book a Repair
                </button>
                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                  className="inline-flex items-center space-x-2 border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-white font-semibold px-5 py-3.5 rounded-xl transition-all text-sm"
                >
                  <PhoneCall className="w-4 h-4 text-blue-400" />
                  <span>Call {BUSINESS_CONFIG.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 mt-10 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-950">
                <img
                  src="https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Precision repair laboratory workspace"
                  className="w-full h-80 sm:h-96 object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <span className="font-bold text-blue-400 block uppercase">Cleanroom Workshop</span>
                  <span>Equipped with precision testing instruments & ESD protection.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-black mb-1">{BUSINESS_CONFIG.stats.yearsInBusiness}</div>
              <div className="text-xs sm:text-sm font-semibold text-blue-100 uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black mb-1">{BUSINESS_CONFIG.stats.devicesRepaired}</div>
              <div className="text-xs sm:text-sm font-semibold text-blue-100 uppercase tracking-wider">Devices Repaired</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black mb-1">{BUSINESS_CONFIG.stats.successRate}</div>
              <div className="text-xs sm:text-sm font-semibold text-blue-100 uppercase tracking-wider">Repair Success Rate</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black mb-1">{BUSINESS_CONFIG.stats.averageRating} ★</div>
              <div className="text-xs sm:text-sm font-semibold text-blue-100 uppercase tracking-wider">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Core Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex p-3 bg-rose-50 text-rose-600 rounded-2xl">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Our Mission & Commitment
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            In a fast-paced digital world, a broken phone shouldn't bring your life to a halt or cost you the price of a brand new device. At Hand2Hand Mobiles, we believe in restoring your technology with factory precision, authentic parts, and full transparency.
          </p>
          <p className="text-base text-gray-500 leading-relaxed">
            From cracked smartphone screens and degraded batteries to complex micro-soldering and liquid damage recovery, our technicians treat every device with the highest care and skill.
          </p>
        </div>
      </section>

      {/* Workshop Standards & Equipment Excellence */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Technical Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Our Workshop Standards & Tooling
            </h2>
            <p className="text-gray-600 text-base mt-2">
              We invest in professional diagnostic equipment and ESD-safe tools to deliver reliable repairs every single time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshopStandards.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-5"
              >
                <div className="p-3 bg-slate-50 rounded-2xl shrink-0 border border-slate-100">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Core Values 4-Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Our Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Why Customers Rely on Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                  0{i + 1}
                </div>
                <h4 className="text-lg font-bold text-gray-900">
                  {v.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Visit Hand2Hand Mobiles Today
            </h3>
            <p className="text-slate-300 text-sm">
              Parippally Road, Pallickal, Kerala 695604 • Open All Days: 9:00 AM – 9:00 PM
            </p>
            <div className="pt-2 flex flex-wrap gap-3 justify-center">
              <button
                onClick={onOpenBooking}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm cursor-pointer"
              >
                Book Device Repair
              </button>
              <a
                href={getWhatsAppUrl("Hi Hand2Hand Mobiles, I have an inquiry about your services")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
