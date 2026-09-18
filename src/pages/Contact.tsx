import { useState } from "react";
import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Navigation,
  ShieldCheck
} from "lucide-react";
import SEO from "../components/common/SEO";
import { BUSINESS_CONFIG, useStoreStatus, getWhatsAppUrl } from "../config/business";

export default function Contact() {
  const storeStatus = useStoreStatus();

  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [deviceType, setDeviceType] = useState("Apple iPhone");
  const [model, setModel] = useState("");
  const [issue, setIssue] = useState("Screen Replacement");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim() || name.trim().length < 2) {
      errs.name = "Please enter your name.";
    }
    const cleanPhone = phone.replace(/[\s\-()]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit phone number.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const formattedMessage = [
      `*📬 WEBSITE CONTACT ENQUIRY — Hand2Hand Mobiles*`,
      `---------------------------------`,
      `👤 *Name:* ${name.trim()}`,
      `📞 *Phone:* ${phone.trim()}`,
      `📱 *Device:* ${deviceType}${model ? ` (${model.trim()})` : ""}`,
      `🔧 *Issue:* ${issue}`,
      message.trim() ? `📝 *Message:* ${message.trim()}` : null,
      `---------------------------------`,
      `📍 *Inquiry from:* hand2handmobiles.com`,
      `Please provide an estimate and availability.`
    ].filter(Boolean).join("\n");

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(getWhatsAppUrl(formattedMessage), "_blank", "noopener,noreferrer");
    }, 400);
  };

  const quickTopics = [
    { label: "Broken Screen Quote", text: "Hi, I have a cracked screen and would like a quote" },
    { label: "Battery Replacement", text: "Hi, my device battery drains fast. How much to replace?" },
    { label: "Water Damage Recovery", text: "Hi, my phone fell in water. Need urgent repair advice" },
    { label: "Dead Phone / No Power", text: "Hi, my phone won't turn on. Do you offer free diagnosis?" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Contact Us & Store Location"
        description="Visit Hand2Hand Mobiles on Parippally Road, Pallickal, Kerala 695604. Call +91 94973 32980 or chat on WhatsApp for fast repair estimates and store directions."
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-blue-900 via-indigo-900 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-500/20 px-3.5 py-1.5 rounded-full border border-blue-400/30">
            We're Here to Help
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4 tracking-tight">
            Contact & Visit Our Service Centre
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Visit our repair shop in Pallickal, call our technician directly, or send an inquiry via WhatsApp for an immediate response.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Fast WhatsApp Topic Launchers */}
        <div className="mb-12">
          <div className="text-center mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Quick Inquiries via WhatsApp
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {quickTopics.map((topic, i) => (
              <a
                key={i}
                href={getWhatsAppUrl(topic.text)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-emerald-50 text-gray-800 hover:text-emerald-800 border border-gray-200 hover:border-emerald-300 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 fill-current" />
                <span>{topic.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Information & Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4">
                Service Centre Details
              </h2>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Shop Address</h3>
                  <p className="text-gray-600 text-sm mt-0.5 leading-relaxed">
                    {BUSINESS_CONFIG.contact.address.street},<br />
                    {BUSINESS_CONFIG.contact.address.locality},<br />
                    {BUSINESS_CONFIG.contact.address.state} {BUSINESS_CONFIG.contact.address.pincode}
                  </p>
                  <a
                    href={BUSINESS_CONFIG.contact.address.mapsQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-bold text-blue-600 hover:underline mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get GPS Directions &rarr;</span>
                  </a>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shrink-0 mt-0.5">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Call Us Directly</h3>
                  <a
                    href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                    className="text-base sm:text-lg font-extrabold text-blue-600 hover:underline block mt-0.5"
                  >
                    {BUSINESS_CONFIG.contact.phoneDisplay}
                  </a>
                  <span className="text-xs text-gray-500">Open 7 days (9:00 AM – 9:00 PM)</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0 mt-0.5">
                  <MessageSquare className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">WhatsApp Chat</h3>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-700 hover:underline block mt-0.5"
                  >
                    +91 94973 32980 (Instant Reply)
                  </a>
                  <span className="text-xs text-gray-500">Send photos of broken screens for fast quotes</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl shrink-0 mt-0.5">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Email Address</h3>
                  <a
                    href={`mailto:${BUSINESS_CONFIG.contact.email}`}
                    className="text-sm font-semibold text-gray-700 hover:text-blue-600 hover:underline block mt-0.5"
                  >
                    {BUSINESS_CONFIG.contact.email}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4 border-t border-gray-100 pt-5">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl shrink-0 mt-0.5">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 text-sm">Store Timings</h3>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${storeStatus.isOpen ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}>
                      {storeStatus.statusText}
                    </span>
                  </div>
                  <div className="mt-2 text-xs sm:text-sm text-gray-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Monday – Sunday:</span>
                      <span className="font-bold text-gray-900">9:00 AM – 9:00 PM</span>
                    </div>
                    <div className="text-emerald-700 font-medium text-xs pt-0.5">
                      Open 7 days a week (including Sundays)
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Send Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm relative">
              
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Send a Repair Inquiry
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Fill out your device details below. We'll format your inquiry directly for our technicians.
                </p>
              </div>

              {isSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Message Prepared!
                  </h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    Your inquiry details have been transmitted to our WhatsApp support line. Our technician will reply with price and parts availability.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSuccess(false);
                        setName("");
                        setPhone("");
                        setModel("");
                        setMessage("");
                      }}
                      className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl text-sm hover:bg-blue-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                      className="border border-gray-300 text-gray-700 font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-gray-50 transition-colors"
                    >
                      Call Shop
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors(prev => ({ ...prev, name: "" }));
                        }}
                        placeholder="e.g. Rahul Nair"
                        className={`w-full px-4 py-3 border rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all ${
                          errors.name ? "border-red-400 bg-red-50/30" : "border-gray-300"
                        }`}
                      />
                      {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors(prev => ({ ...prev, phone: "" }));
                        }}
                        placeholder="e.g. 98765 43210"
                        className={`w-full px-4 py-3 border rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all ${
                          errors.phone ? "border-red-400 bg-red-50/30" : "border-gray-300"
                        }`}
                      />
                      {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Device Brand & Model */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-device" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Device Brand *
                      </label>
                      <select
                        id="contact-device"
                        value={deviceType}
                        onChange={(e) => setDeviceType(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white transition-all"
                      >
                        <option value="Apple iPhone">Apple iPhone</option>
                        <option value="Samsung Galaxy">Samsung Galaxy</option>
                        <option value="OnePlus">OnePlus</option>
                        <option value="Xiaomi / Redmi">Xiaomi / Redmi</option>
                        <option value="Vivo / iQOO">Vivo / iQOO</option>
                        <option value="Oppo">Oppo</option>
                        <option value="Realme">Realme</option>
                        <option value="Google Pixel">Google Pixel</option>
                        <option value="iPad / Tablet">iPad / Tablet</option>
                        <option value="MacBook / Laptop">MacBook / Laptop</option>
                        <option value="Other Device">Other Brand</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-model" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Device Model (Optional)
                      </label>
                      <input
                        type="text"
                        id="contact-model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        placeholder="e.g. iPhone 13, Note 10 Pro"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Issue Type */}
                  <div>
                    <label htmlFor="contact-issue" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Type of Repair Needed *
                    </label>
                    <select
                      id="contact-issue"
                      value={issue}
                      onChange={(e) => setIssue(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white transition-all"
                    >
                      <option value="Screen Replacement">Screen & Display Replacement</option>
                      <option value="Battery Replacement">Battery Health & Power Replacement</option>
                      <option value="Charging Port / Mic Fix">Charging Port & Microphone Fix</option>
                      <option value="Water Damage Recovery">Water & Liquid Damage Chemical Bath</option>
                      <option value="Motherboard / Dead Phone">Motherboard & Micro-Soldering (Dead Device)</option>
                      <option value="Camera / Back Glass">Camera Lens & Rear Glass Repair</option>
                      <option value="Laptop / iPad Servicing">MacBook, Laptop or Tablet Servicing</option>
                      <option value="Free Diagnostic Check">Free Complete Diagnostic Inspection</option>
                      <option value="Other Issue">Other Issue</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-msg" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Describe the Problem (Optional)
                    </label>
                    <textarea
                      id="contact-msg"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please describe symptoms (e.g. lines on display, phone gets hot, no audio)..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 text-base cursor-pointer disabled:opacity-75"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? "Formatting Inquiry..." : "Submit Inquiry to WhatsApp"}</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 pt-1">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                    <span>Free diagnostics & 90-day warranty on all repairs.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </section>
    </div>
  );
}
