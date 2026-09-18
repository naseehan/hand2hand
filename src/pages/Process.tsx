import { useState } from "react";
import { 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  MessageSquare, 
  HelpCircle, 
  Smartphone, 
  HardDrive 
} from "lucide-react";
import SEO from "../components/common/SEO";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "../config/business";

interface ProcessProps {
  onOpenBooking: () => void;
}

export default function Process({ onOpenBooking }: ProcessProps) {
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>("all");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const steps = [
    {
      step: "01",
      title: "Device Drop-Off or Inquiry",
      desc: "Walk directly into our shop on Parippally Road, Pallickal, or send us a message on WhatsApp with your phone model and problem.",
      time: "Immediate"
    },
    {
      step: "02",
      title: "100% Free Diagnosis",
      desc: "Our master technician inspects your device hardware, runs power/display diagnostics, and gives you a clear, fixed quote before doing any work.",
      time: "5–10 Mins"
    },
    {
      step: "03",
      title: "Express Precision Repair",
      desc: "We perform the repair using OEM-grade components, ESD-safe equipment, and cleanroom adhesive seals.",
      time: "30–45 Mins (Screens/Battery)"
    },
    {
      step: "04",
      title: "Testing & 90-Day Warranty Handover",
      desc: "We thoroughly test touch responsiveness, battery health, cameras, and network before handing back your device with a 90-day warranty receipt.",
      time: "Final Handover"
    }
  ];

  const turnaroundEstimates = [
    { service: "Screen & Display Replacement", time: "30 – 45 Minutes", warranty: "90 Days" },
    { service: "Battery Health Replacement", time: "30 Minutes", warranty: "90 Days" },
    { service: "Charging Port & Mic Repair", time: "30 – 45 Minutes", warranty: "90 Days" },
    { service: "Camera & Back Glass Panel", time: "1 – 2 Hours", warranty: "90 Days" },
    { service: "Water Damage Chemical Recovery", time: "2 – 4 Hours", warranty: "Tested on Delivery" },
    { service: "Motherboard & Micro-Soldering", time: "24 – 48 Hours", warranty: "90 Days" },
    { service: "iPad & Tablet Repairs", time: "1 – 2 Days", warranty: "90 Days" },
    { service: "MacBook & Laptop Servicing", time: "1 – 3 Days", warranty: "90 Days" },
  ];

  const checklistItems = [
    "Backup your important device data (iCloud / Google Drive / PC) where possible.",
    "Remove your SIM card and external micro-SD memory card for personal safekeeping.",
    "Know your screen unlock passcode so we can test cameras, mic, and touch after repair.",
    "No appointment needed for standard repairs — walk-ins welcome all 7 days (9:00 AM – 9:00 PM)."
  ];

  const filteredFaqs = activeFaqCategory === "all"
    ? BUSINESS_CONFIG.faqs
    : BUSINESS_CONFIG.faqs.filter(f => f.category === activeFaqCategory);

  return (
    <div className="bg-white">
      <SEO
        title="Repair Process, Turnaround & Warranty"
        description="Learn how Hand2Hand Mobiles repairs your device in 4 simple steps. Express 30-minute repairs, 90-day warranty, transparent pricing, and frequently asked questions."
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-blue-900 via-indigo-900 to-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-500/20 px-3.5 py-1.5 rounded-full border border-blue-400/30">
            Transparent & Fast Service
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4 tracking-tight">
            How It Works & Warranty Policy
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Our 4-step repair journey guarantees rapid turnaround, genuine parts, and total peace of mind for every customer in Pallickal.
          </p>
        </div>
      </section>

      {/* 4-Step Timeline Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Step-by-Step Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Our 4-Step Repair Journey
            </h2>
            <p className="text-gray-600 text-base mt-2">
              From arrival to completed repair in as little as 30 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-black text-blue-600">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full flex items-center">
                      <Clock className="w-3 h-3 mr-1 text-blue-500" />
                      {step.time}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <div className="text-xs font-semibold text-emerald-600 flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    <span>Quality Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenBooking}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-md transition-all text-sm cursor-pointer"
            >
              Book Your Repair Today
            </button>
          </div>

        </div>
      </section>

      {/* Turnaround & Warranty Guide Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
            
            {/* Left: Turnaround Table */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Expected Timelines
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
                  Repair Duration by Service
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Average turnaround times for in-stock models at our Pallickal workshop.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 border-b border-gray-200 text-gray-700 font-bold">
                    <tr>
                      <th className="py-3 px-4">Repair Service</th>
                      <th className="py-3 px-4">Est. Duration</th>
                      <th className="py-3 px-4">Warranty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    {turnaroundEstimates.map((item, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-gray-900 flex items-center space-x-2">
                          <Smartphone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span>{item.service}</span>
                        </td>
                        <td className="py-3 px-4 text-blue-600 font-medium">{item.time}</td>
                        <td className="py-3 px-4">
                          <span className="inline-block bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-xs">
                            {item.warranty}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Device Preparation Checklist & 90-Day Policy */}
            <div className="lg:col-span-5 space-y-6 mt-10 lg:mt-0">
              
              {/* Checklist Box */}
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center space-x-2 text-blue-600">
                  <HardDrive className="w-5 h-5" />
                  <h3 className="font-bold text-gray-900 text-lg">
                    Before Bringing Your Device
                  </h3>
                </div>
                <div className="space-y-3">
                  {checklistItems.map((item, idx) => (
                    <div key={idx} className="flex items-start text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warranty Guarantee Box */}
              <div className="bg-blue-600 text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-3">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-6 h-6 text-blue-200" />
                  <h3 className="font-bold text-xl">Our 90-Day Warranty</h3>
                </div>
                <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                  Every replacement part and workmanship comes with 90 days of coverage. If the screen touch or battery exhibits any defect under standard usage, we will fix or replace it free of charge.
                </p>
                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl("Hi Hand2Hand Mobiles, I have a question regarding your 90-day warranty")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-white bg-white/20 hover:bg-white/30 px-3.5 py-2 rounded-lg transition-colors"
                  >
                    <span>Ask about warranty coverage</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Everything you need to know about our repair procedures and parts.
            </p>
          </div>

          {/* FAQ Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {[
              { id: "all", label: "All Questions" },
              { id: "general", label: "General & Timing" },
              { id: "warranty", label: "Warranty & Coverage" },
              { id: "data", label: "Data Safety" },
              { id: "pricing", label: "Pricing & Diagnostics" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFaqCategory(tab.id);
                  setOpenFaqIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeFaqCategory === tab.id
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-6 py-4.5 text-left flex justify-between items-center gap-4 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-gray-900 text-sm sm:text-base">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still Have Questions Bar */}
          <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 text-center space-y-4 shadow-xs">
            <HelpCircle className="w-10 h-10 text-blue-600 mx-auto" />
            <h3 className="font-bold text-gray-900 text-lg">
              Have a specific question not listed here?
            </h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              Our technician is always happy to answer your questions and give advice on the phone or WhatsApp.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <a
                href={getWhatsAppUrl("Hi Hand2Hand Mobiles, I have a specific question about repairing my device")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors flex items-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Ask on WhatsApp</span>
              </a>
              <a
                href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                className="border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors flex items-center space-x-1.5"
              >
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>Call {BUSINESS_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
