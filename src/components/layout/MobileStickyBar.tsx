import { Phone, MessageSquare, Wrench } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "../../config/business";

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export default function MobileStickyBar({ onOpenBooking }: MobileStickyBarProps) {
  return (
    <aside 
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-gray-200/80 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[calc(0.625rem+env(safe-area-inset-bottom))]"
      aria-label="Quick Mobile Actions"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call Now Button */}
        <a
          href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gray-100 active:bg-gray-200 text-gray-800 font-semibold text-xs transition-colors shadow-xs"
          aria-label="Call Hand2Hand Mobiles"
        >
          <Phone className="w-4 h-4 text-blue-600 mb-0.5" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppUrl("Hi Hand2Hand Mobiles, I need an urgent device repair")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 active:bg-emerald-100 text-emerald-800 font-semibold text-xs transition-colors shadow-xs"
          aria-label="WhatsApp Hand2Hand Mobiles"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 fill-current mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book Repair Modal Button */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-blue-600 active:bg-blue-700 text-white font-bold text-xs transition-colors shadow-sm shadow-blue-600/30"
          aria-label="Book a device repair"
        >
          <Wrench className="w-4 h-4 text-blue-100 mb-0.5" />
          <span>Book Repair</span>
        </button>
      </div>
    </aside>
  );
}
