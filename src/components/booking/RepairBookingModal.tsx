import { useState, useEffect } from "react";
import { X, Wrench, CheckCircle2, MessageSquare, PhoneCall, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "../../config/business";

interface RepairBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialBrand?: string;
}

export default function RepairBookingModal({
  isOpen,
  onClose,
  initialService = "",
  initialBrand = ""
}: RepairBookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [brand, setBrand] = useState(initialBrand || "Apple");
  const [model, setModel] = useState("");
  const [issue, setIssue] = useState(initialService || "Screen & Display Replacement");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) setIssue(initialService);
    if (initialBrand) setBrand(initialBrand);
  }, [initialService, initialBrand]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim() || name.trim().length < 2) {
      errs.name = "Please enter your name (at least 2 characters).";
    }
    const cleanPhone = phone.replace(/[\s\-()]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!brand) {
      errs.brand = "Please select your device brand.";
    }
    if (!issue) {
      errs.issue = "Please select the type of repair needed.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const message = [
      `*🛠️ NEW REPAIR INQUIRY — Hand2Hand Mobiles*`,
      `---------------------------------`,
      `👤 *Customer:* ${name.trim()}`,
      `📞 *Phone:* ${phone.trim()}`,
      `📱 *Device Brand:* ${brand}`,
      model.trim() ? `📟 *Model:* ${model.trim()}` : null,
      `🔧 *Repair Needed:* ${issue}`,
      description.trim() ? `📝 *Details:* ${description.trim()}` : null,
      `---------------------------------`,
      `📍 *Location:* Pallickal Shop`,
      `Please provide an estimate and turnaround time.`
    ].filter(Boolean).join("\n");

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    }, 400);
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setModel("");
    setDescription("");
    setErrors({});
    setSubmitted(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-2 text-blue-200 text-sm font-semibold tracking-wide uppercase mb-1">
            <Wrench className="w-4 h-4" />
            <span>Fast Estimate & Booking</span>
          </div>
          <h2 id="booking-modal-title" className="text-2xl font-bold">
            Book a Device Repair
          </h2>
          <p className="text-blue-100 text-sm mt-1">
            Same-day service, 90-day warranty & free diagnostics at Pallickal.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Inquiry Sent Successfully!
              </h3>
              <p className="text-gray-600 text-sm max-w-sm mx-auto mb-6">
                Your repair details have been formatted for our technicians. WhatsApp chat has opened with your request.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-left mb-6 space-y-2 text-sm text-gray-700">
                <div className="flex items-center text-blue-900 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-blue-600 mr-2" />
                  What happens next?
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Our master technician will review your device details, confirm component availability, and reply with an exact cost estimate and turnaround time.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-blue-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Done
                </button>
                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                  className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  <PhoneCall className="w-4 h-4 mr-2 text-blue-600" />
                  Call Shop: {BUSINESS_CONFIG.contact.phoneDisplay}
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppBooking} className="space-y-4">
              {/* Brand & Model Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-brand" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Device Brand *
                  </label>
                  <select
                    id="modal-brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white transition-all"
                  >
                    {BUSINESS_CONFIG.supportedBrands.map((b) => (
                      <option key={b.name} value={b.name}>{b.name}</option>
                    ))}
                    <option value="iPad / Tablet">iPad / Tablet</option>
                    <option value="MacBook / Laptop">MacBook / Laptop</option>
                    <option value="Other Brand">Other Brand</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="modal-model" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Model Name / Number
                  </label>
                  <input
                    type="text"
                    id="modal-model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="e.g. iPhone 13, Galaxy S21"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Repair Issue Select */}
              <div>
                <label htmlFor="modal-issue" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Repair Required *
                </label>
                <select
                  id="modal-issue"
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white transition-all"
                >
                  <option value="Screen & Display Replacement">Screen & Display Replacement (Cracked / Black / Touch)</option>
                  <option value="Battery Health Replacement">Battery Replacement (Draining / Swollen / Shutdowns)</option>
                  <option value="Charging Port & Mic Repair">Charging Port / Mic Issue (Slow / No Charge / Audio)</option>
                  <option value="Water & Liquid Damage Recovery">Water / Liquid Damage Treatment (Dead / Corrosion)</option>
                  <option value="Motherboard & Chip-Level Repair">Motherboard & Micro-Soldering (No Power / IC)</option>
                  <option value="Camera & Back Glass Repair">Camera & Rear Glass Panel Replacement</option>
                  <option value="iPad / Tablet Repair">iPad / Tablet Service</option>
                  <option value="MacBook & Laptop Servicing">MacBook & Laptop Servicing</option>
                  <option value="Free Complete Diagnostics">Free Complete Diagnosis (Issue Unknown)</option>
                  <option value="Other Repair Service">Other Problem</option>
                </select>
              </div>

              {/* Customer Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    placeholder="e.g. Rahul Nair"
                    className={`w-full px-3 py-2.5 border rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all ${
                      errors.name ? "border-red-400 bg-red-50/30" : "border-gray-300"
                    }`}
                  />
                  {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                    }}
                    placeholder="e.g. 9876543210"
                    className={`w-full px-3 py-2.5 border rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all ${
                      errors.phone ? "border-red-400 bg-red-50/30" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Problem Description */}
              <div>
                <label htmlFor="modal-desc" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Problem Description (Optional)
                </label>
                <textarea
                  id="modal-desc"
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe any specific symptoms (e.g. dropped in water, lines on display)..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              {/* Guarantees bar */}
              <div className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 text-xs text-gray-600">
                <div className="flex items-center">
                  <ShieldCheck className="w-4 h-4 text-green-600 mr-1.5" />
                  <span>90-Day Warranty</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-blue-600 mr-1.5" />
                  <span>30-Min Fast Turnaround</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 text-base disabled:opacity-75 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>{isSubmitting ? "Connecting to WhatsApp..." : "Get Instant Quote on WhatsApp"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center pt-1">
                <p className="text-xs text-gray-500">
                  Prefer a direct phone call?{" "}
                  <a
                    href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Call {BUSINESS_CONFIG.contact.phoneDisplay}
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
