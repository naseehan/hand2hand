import { Link } from "react-router-dom";
import { Wrench, Phone, MessageSquare, Mail, MapPin, Clock, Shield, CheckCircle2 } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "../../config/business";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-200 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-12 mb-12 border-b border-slate-800">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">90-Day Warranty</div>
              <div className="text-slate-400 text-xs">On parts & labor</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">30-Min Express</div>
              <div className="text-slate-400 text-xs">For screens & batteries</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Genuine & OEM Parts</div>
              <div className="text-slate-400 text-xs">Factory-tested grade</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Free Diagnostics</div>
              <div className="text-slate-400 text-xs">Transparent estimate</div>
            </div>
          </div>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Hand<span className="text-blue-500">2</span>Hand Mobiles
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your dependable neighborhood service center in Pallickal, Kerala. We specialize in precision smartphone, tablet, and laptop hardware & chip-level repairs.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-lg transition-colors shadow-sm"
              >
                <span>Book a Fast Repair</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>

          {/* Column 2: Repair Services */}
          <div>
            <h4 className="font-bold text-white text-base mb-4 tracking-wide">
              Repair Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2 text-blue-500 font-bold">&rsaquo;</span>
                  Screen & Display Replacement
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2 text-blue-500 font-bold">&rsaquo;</span>
                  Battery Health Replacement
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2 text-blue-500 font-bold">&rsaquo;</span>
                  Charging Port & Audio Fixes
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2 text-blue-500 font-bold">&rsaquo;</span>
                  Water Damage Ultrasonic Bath
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2 text-blue-500 font-bold">&rsaquo;</span>
                  Motherboard & Micro-Soldering
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2 text-blue-500 font-bold">&rsaquo;</span>
                  iPad & MacBook Servicing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation & Process */}
          <div>
            <h4 className="font-bold text-white text-base mb-4 tracking-wide">
              Company & Help
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  All Repair Services & Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About Our Service Centre
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-blue-400 transition-colors">
                  4-Step Repair Process & FAQ
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-blue-400 transition-colors">
                  90-Day Warranty Terms
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Contact & Shop Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div>
            <h4 className="font-bold text-white text-base mb-4 tracking-wide">
              Visit or Contact Us
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Shop Address:</span>
                  <span>{BUSINESS_CONFIG.contact.address.street}, {BUSINESS_CONFIG.contact.address.locality},</span>
                  <span className="block">{BUSINESS_CONFIG.contact.address.state} {BUSINESS_CONFIG.contact.address.pincode}</span>
                  <a
                    href={BUSINESS_CONFIG.contact.address.mapsQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:text-blue-300 underline mt-1 inline-block"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </li>

              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <div>
                  <span className="text-xs text-slate-500 block uppercase font-semibold">Direct Phone</span>
                  <a href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`} className="text-white hover:text-blue-400 font-semibold transition-colors">
                    {BUSINESS_CONFIG.contact.phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-xs text-slate-500 block uppercase font-semibold">WhatsApp Chat</span>
                  <a
                    href={getWhatsAppUrl("Hi Hand2Hand Mobiles, I need a repair consultation")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                  >
                    Instant WhatsApp Support
                  </a>
                </div>
              </li>

              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <div>
                  <span className="text-xs text-slate-500 block uppercase font-semibold">Email</span>
                  <a href={`mailto:${BUSINESS_CONFIG.contact.email}`} className="text-white hover:text-blue-400 transition-colors">
                    {BUSINESS_CONFIG.contact.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="border-t border-slate-800/80 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>
            &copy; {currentYear} {BUSINESS_CONFIG.name}. All rights reserved. Located on Parippally Road, Pallickal, Kerala.
          </p>
          <div className="flex space-x-6">
            <span>90-Day Limited Warranty</span>
            <span>&bull;</span>
            <span>Genuine & OEM Grade Parts</span>
            <span>&bull;</span>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">
              Store Timings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
