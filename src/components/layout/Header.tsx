import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Wrench, Phone, MessageSquare, Menu, X, Clock, MapPin, Sparkles } from "lucide-react";
import { BUSINESS_CONFIG, useStoreStatus, getWhatsAppUrl } from "../../config/business";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const storeStatus = useStoreStatus();

  // Close mobile menu upon navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Repair Process", path: "/process" },
    { name: "Contact & Location", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      {/* Top Announcement & Quick Contact Bar (Desktop) */}
      <div className="hidden lg:block bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{BUSINESS_CONFIG.contact.address.full}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>All Days: 9:00 AM – 9:00 PM</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className={`inline-block w-2 h-2 rounded-full ${storeStatus.isOpen ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
              <span className="font-semibold text-white">{storeStatus.statusText}</span>
              <span className="text-slate-400">({storeStatus.nextTimeText})</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-300 font-medium">90-Day Warranty on All Repairs</span>
            <span className="text-slate-600">|</span>
            <a
              href={getWhatsAppUrl("Hi Hand2Hand Mobiles, I need an express quote")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center space-x-1 font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group py-2" aria-label="Hand2Hand Mobiles Home">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Wrench className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="ml-3">
              <span className="text-xl font-extrabold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors block leading-none">
                Hand<span className="text-blue-600">2</span>Hand
              </span>
              <span className="text-[11px] font-semibold text-gray-500 tracking-wider uppercase block mt-0.5">
                Mobiles & Repair
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors relative ${
                    active
                      ? "text-blue-600 bg-blue-50/80 font-bold"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg text-sm font-semibold transition-colors group"
              title="Call Hand2Hand Mobiles"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left leading-tight">
                <span className="block text-[10px] uppercase text-gray-400 font-bold">Call Now</span>
                <span className="text-sm font-bold text-gray-900">{BUSINESS_CONFIG.contact.phoneDisplay}</span>
              </div>
            </a>

            <button
              onClick={onOpenBooking}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4.5 py-2.5 rounded-xl shadow-md hover:shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Book Repair</span>
            </button>
          </div>

          {/* Mobile Menu Button & Quick Call */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
              className="p-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              aria-label="Call Shop"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {/* Mobile store status ribbon */}
          <div className="bg-slate-900 text-white px-4 py-2 text-xs flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${storeStatus.isOpen ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
              <span className="font-semibold">{storeStatus.statusText}</span>
              <span className="text-slate-400">({storeStatus.nextTimeText})</span>
            </div>
            <span className="text-blue-300 text-[11px] font-medium">90-Day Warranty</span>
          </div>

          <div className="px-4 pt-3 pb-6 space-y-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    active
                      ? "text-blue-600 bg-blue-50 font-bold"
                      : "text-gray-800 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-gray-100 space-y-2.5">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-center flex items-center justify-center space-x-2 shadow-md shadow-blue-600/20"
              >
                <Wrench className="w-5 h-5 text-blue-200" />
                <span>Book a Device Repair</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                  className="flex items-center justify-center space-x-1.5 py-2.5 px-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-semibold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call Us</span>
                </a>
                <a
                  href={getWhatsAppUrl("Hi Hand2Hand Mobiles, I need an inquiry")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 py-2.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl font-semibold text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 text-center text-xs text-gray-500">
                <p>{BUSINESS_CONFIG.contact.address.full}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
