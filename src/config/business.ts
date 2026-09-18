import { useState, useEffect } from "react";

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  isClosed?: boolean;
}

export interface ServiceItem {
  id: string;
  category: 'smartphones' | 'tablets' | 'laptops' | 'specialized';
  title: string;
  deviceTypes: string;
  description: string;
  startingPrice: number;
  duration: string;
  warranty: string;
  popular?: boolean;
  features: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  device: string;
  serviceType: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'warranty' | 'data';
}

export interface SupportedBrand {
  name: string;
  category: 'smartphones' | 'tablets' | 'laptops';
  popularModels: string[];
}

export const BUSINESS_CONFIG = {
  name: "Hand2Hand Mobiles",
  legalName: "Hand2Hand Mobiles Repair & Service Centre",
  tagline: "Your Trusted Device Repair Specialists",
  shortDescription: "Professional smartphone, tablet, and laptop repairs with genuine parts, express 30-minute service, and a 90-day warranty in Pallickal, Kerala.",
  
  contact: {
    phone: "+91 94973 32980",
    phoneDisplay: "+91 94973 32980",
    phoneRaw: "+919497332980",
    whatsappNumber: "919497332980",
    email: "info@hand2handmobiles.com",
    address: {
      street: "Parippally Road",
      locality: "Pallickal",
      city: "Kollam / Thiruvananthapuram Border",
      district: "Kerala",
      pincode: "695604",
      state: "Kerala",
      country: "India",
      full: "Parippally Road, Pallickal, Kerala 695604",
      mapsQueryUrl: "https://maps.google.com/?q=Parippally+road,+Pallickal,+Kerala+695604",
      googleMapsEmbedQuery: "Parippally+Road,+Pallickal,+Kerala+695604"
    }
  },

  stats: {
    yearsInBusiness: "2+",
    devicesRepaired: "1,000+",
    successRate: "98%",
    averageRating: "4.9",
    totalReviews: "500+",
    turnaroundTime: "30 Mins"
  },

  guarantees: [
    {
      title: "90-Day Warranty",
      description: "Complete peace of mind on all replacement parts and labor."
    },
    {
      title: "Same-Day Express Service",
      description: "Most screen and battery replacements done in 30–45 minutes."
    },
    {
      title: "100% Genuine & OEM Parts",
      description: "High-grade certified parts that restore original performance."
    },
    {
      title: "Transparent & Upfront Pricing",
      description: "Free diagnosis with no hidden charges or surprise costs."
    }
  ],

  hours: [
    { day: "Monday", open: "09:00", close: "21:00" },
    { day: "Tuesday", open: "09:00", close: "21:00" },
    { day: "Wednesday", open: "09:00", close: "21:00" },
    { day: "Thursday", open: "09:00", close: "21:00" },
    { day: "Friday", open: "09:00", close: "21:00" },
    { day: "Saturday", open: "09:00", close: "21:00" },
    { day: "Sunday", open: "09:00", close: "21:00" }
  ] as BusinessHours[],

  supportedBrands: [
    {
      name: "Apple",
      category: "smartphones",
      popularModels: ["iPhone 15 / 15 Pro", "iPhone 14 / 14 Pro", "iPhone 13 / 13 Pro", "iPhone 12 / 11", "iPhone SE / XR / X"]
    },
    {
      name: "Samsung",
      category: "smartphones",
      popularModels: ["Galaxy S24 / S23 / S22", "Galaxy A Series", "Galaxy M Series", "Galaxy Z Fold / Flip", "Galaxy Note Series"]
    },
    {
      name: "OnePlus",
      category: "smartphones",
      popularModels: ["OnePlus 12 / 11 / 10", "OnePlus Nord Series", "OnePlus 9 / 8 / 7 Series"]
    },
    {
      name: "Xiaomi / Redmi",
      category: "smartphones",
      popularModels: ["Redmi Note Series", "Xiaomi 13 / 12 Series", "POCO X / M / F Series"]
    },
    {
      name: "Vivo",
      category: "smartphones",
      popularModels: ["Vivo V Series", "Vivo X Series", "Vivo T / Y Series", "iQOO Series"]
    },
    {
      name: "Oppo",
      category: "smartphones",
      popularModels: ["Oppo Reno Series", "Oppo F Series", "Oppo A Series"]
    },
    {
      name: "Realme",
      category: "smartphones",
      popularModels: ["Realme Pro Series", "Realme GT Series", "Realme C / Narzo Series"]
    },
    {
      name: "Google Pixel",
      category: "smartphones",
      popularModels: ["Pixel 8 / 8 Pro", "Pixel 7 / 7a", "Pixel 6 / 6a"]
    }
  ] as SupportedBrand[],

  services: [
    {
      id: "screen-replacement",
      category: "smartphones",
      title: "Screen & Display Replacement",
      deviceTypes: "iPhones & All Android Devices",
      description: "Fix cracked glass, unresponsive touch, black screens, OLED bleeding, or flickering displays.",
      startingPrice: 500,
      duration: "30–45 Mins",
      warranty: "90 Days",
      popular: true,
      features: [
        "Factory-calibrated color accuracy",
        "Smooth multi-touch response",
        "Original refresh rate support (90Hz / 120Hz)",
        "Same-day installation"
      ]
    },
    {
      id: "battery-replacement",
      category: "smartphones",
      title: "Battery Health Replacement",
      deviceTypes: "iPhones, Android, iPads",
      description: "Restore battery life, resolve rapid draining, sudden shutdowns, or swollen battery hazards.",
      startingPrice: 600,
      duration: "30 Mins",
      warranty: "90 Days",
      popular: true,
      features: [
        "High-capacity certified cells",
        "Overheating & surge protection",
        "Battery health calibration",
        "Safe eco-friendly disposal"
      ]
    },
    {
      id: "charging-port",
      category: "smartphones",
      title: "Charging Port & Mic Repair",
      deviceTypes: "Type-C, Lightning & Micro-USB",
      description: "Fix loose cables, slow charging, zero power intake, or muffled microphone audio issues.",
      startingPrice: 350,
      duration: "30 Mins",
      warranty: "90 Days",
      features: [
        "Fast-charging circuit validation",
        "Microphone sound clarity test",
        "Clean dust & lint extraction",
        "Board-level pin soldering"
      ]
    },
    {
      id: "water-damage",
      category: "specialized",
      title: "Water & Liquid Damage Recovery",
      deviceTypes: "All Smartphones & Laptops",
      description: "Ultrasonic chemical cleaning, corrosion removal, short-circuit diagnostics, and data preservation.",
      startingPrice: 800,
      duration: "2–4 Hours",
      warranty: "Tested on Delivery",
      popular: true,
      features: [
        "Ultrasonic PCB bath cleaning",
        "Component-level short detection",
        "Data safety priority",
        "Complete power sequence diagnostics"
      ]
    },
    {
      id: "motherboard-repair",
      category: "specialized",
      title: "Motherboard & Micro-Soldering",
      deviceTypes: "Smartphones, Tablets & MacBooks",
      description: "Complex chip-level repairs including dead power ICs, network baseband, audio IC, and Face ID recovery.",
      startingPrice: 1200,
      duration: "24–48 Hours",
      warranty: "90 Days",
      features: [
        "High-precision microscope work",
        "BGA chip reballing & replacement",
        "No-power / dead device recovery",
        "Schematic trace diagnostics"
      ]
    },
    {
      id: "camera-backglass",
      category: "smartphones",
      title: "Camera & Back Glass Repair",
      deviceTypes: "iPhone & Flagship Androids",
      description: "Replace shattered rear glass panels, cracked lens protectors, or blurry/shaking camera modules.",
      startingPrice: 700,
      duration: "1–2 Hours",
      warranty: "90 Days",
      features: [
        "Precision laser back-glass removal",
        "Original OIS optical stabilization check",
        "Lens scratch & dust clearing",
        "Flush OEM-finish fitment"
      ]
    },
    {
      id: "ipad-tablet",
      category: "tablets",
      title: "iPad & Android Tablet Repair",
      deviceTypes: "iPad Air/Pro/Mini, Galaxy Tab",
      description: "Touch digitizer replacements, LCD glass lamination, charging issues, and battery renewal.",
      startingPrice: 2000,
      duration: "1–2 Days",
      warranty: "90 Days",
      features: [
        "Apple Pencil / Stylus touch accuracy",
        "Clean bezel alignment",
        "High-capacity tablet battery cells",
        "Adhesive heat-curing seal"
      ]
    },
    {
      id: "laptop-macbook",
      category: "laptops",
      title: "MacBook & Laptop Servicing",
      deviceTypes: "Apple MacBook, Dell, HP, Lenovo, ASUS",
      description: "Screen panel replacement, keyboard/trackpad swaps, thermal paste overhaul, and logic board fixes.",
      startingPrice: 5000,
      duration: "1–3 Days",
      warranty: "90 Days",
      features: [
        "Retina & IPS display panels",
        "Mechanical & chiclet keyboard fixes",
        "Thermal heat-sink de-dusting",
        "RAM & SSD storage upgrades"
      ]
    }
  ] as ServiceItem[],

  reviews: [
    {
      id: "rev-1",
      name: "Rema Devi",
      rating: 5,
      date: "Verified Customer",
      text: "Amazing service! Fixed my Redmi screen in just 20 minutes. Professional, extremely affordable, and very courteous.",
      device: "Xiaomi Redmi Note",
      serviceType: "Screen Replacement",
      verified: true
    },
    {
      id: "rev-2",
      name: "Ajmal Khan",
      rating: 5,
      date: "Verified Customer",
      text: "My Samsung phone was completely dead after a fall, but they brought it back to life. Honest diagnosis and fast turnaround. Highly recommend!",
      device: "Samsung Galaxy Series",
      serviceType: "Motherboard & Power Fix",
      verified: true
    },
    {
      id: "rev-3",
      name: "Arun Pradeep",
      rating: 5,
      date: "Verified Customer",
      text: "Great customer service and honest pricing. They explained everything clearly before starting the repair and gave a 90-day warranty.",
      device: "Apple iPhone 12",
      serviceType: "Battery Replacement",
      verified: true
    }
  ] as ReviewItem[],

  faqs: [
    {
      id: "faq-1",
      question: "How long does a typical phone repair take?",
      answer: "Most routine repairs — such as screen replacements, battery changes, and charging port fixes — are completed in 30 to 45 minutes right in our shop. For complex motherboard micro-soldering or iPads, it typically takes 24 to 48 hours to ensure proper curing and quality testing.",
      category: "general"
    },
    {
      id: "faq-2",
      question: "Do you use genuine and high-quality parts?",
      answer: "Yes, we exclusively source premium OEM-grade and genuine parts that adhere to strict manufacturer specifications. Every screen, battery, and replacement component is rigorously benchmarked before installation.",
      category: "general"
    },
    {
      id: "faq-3",
      question: "What is covered under your 90-Day Warranty?",
      answer: "Our 90-day warranty covers the specific replacement parts installed and our workmanship. If the replacement screen or battery exhibits any defect or unresponsiveness during normal use within 90 days, we repair or replace it free of charge (physical breakage or subsequent liquid damage excluded).",
      category: "warranty"
    },
    {
      id: "faq-4",
      question: "Will my photos, messages, and personal data be safe?",
      answer: "In over 99% of hardware repairs (screens, batteries, ports, cameras), your device data remains completely intact and untouched. As a best practice, we always recommend taking a backup before any technical servicing whenever possible.",
      category: "data"
    },
    {
      id: "faq-5",
      question: "Do you offer free diagnosis and price estimates?",
      answer: "Absolutely! We provide a 100% free physical inspection and diagnostic check. We inform you of the exact fault and provide a transparent, upfront price quote before doing any work. There are never any surprise charges.",
      category: "pricing"
    },
    {
      id: "faq-6",
      question: "Do I need to book an appointment in advance?",
      answer: "Walk-ins are always welcome during business hours at our Pallickal location! However, you can also send us a quick message on WhatsApp to reserve your parts in advance for an even faster express turnaround.",
      category: "general"
    }
  ] as FAQItem[]
};

export function getWhatsAppUrl(customMessage?: string): string {
  const number = BUSINESS_CONFIG.contact.whatsappNumber;
  const defaultMsg = `Hi Hand2Hand Mobiles, I would like to inquire about repairing my device.`;
  const message = customMessage ? customMessage.trim() : defaultMsg;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getServiceQuoteWhatsAppUrl(serviceTitle: string, brand?: string, model?: string): string {
  let text = `Hi Hand2Hand Mobiles, I would like a quote for ${serviceTitle}`;
  if (brand && model) {
    text += ` on my ${brand} ${model}`;
  } else if (brand) {
    text += ` on my ${brand} device`;
  }
  text += `. Please let me know the price and turnaround time.`;
  return getWhatsAppUrl(text);
}

export function getStoreStatus(): { isOpen: boolean; statusText: string; nextTimeText: string } {
  try {
    // Precise India Standard Time (IST - Asia/Kolkata) conversion
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour12: false,
      hour: "numeric",
      minute: "numeric",
    });

    const parts = formatter.formatToParts(new Date());
    const hourPart = parts.find((p) => p.type === "hour")?.value ?? "0";
    const minutePart = parts.find((p) => p.type === "minute")?.value ?? "0";

    const hours = parseInt(hourPart, 10);
    const minutes = parseInt(minutePart, 10);
    const currentDecimalHour = hours + minutes / 60;

    // All 7 days (Monday to Sunday): 09:00 to 21:00 (9:00 AM to 9:00 PM IST)
    if (currentDecimalHour >= 9 && currentDecimalHour < 21) {
      return {
        isOpen: true,
        statusText: "Open Now",
        nextTimeText: "Closes at 9:00 PM"
      };
    } else {
      return {
        isOpen: false,
        statusText: "Closed",
        nextTimeText: currentDecimalHour < 9 ? "Opens Today at 9:00 AM" : "Opens Tomorrow at 9:00 AM"
      };
    }
  } catch {
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const istTime = new Date(utcTime + (3600000 * 5.5));
    const h = istTime.getHours() + istTime.getMinutes() / 60;
    const isOpen = h >= 9 && h < 21;
    return {
      isOpen,
      statusText: isOpen ? "Open Now" : "Closed",
      nextTimeText: isOpen ? "Closes at 9:00 PM" : (h < 9 ? "Opens Today at 9:00 AM" : "Opens Tomorrow at 9:00 AM")
    };
  }
}

/**
 * Custom React hook that automatically updates the store status every 30 seconds
 * without requiring the user to refresh their page.
 */
export function useStoreStatus() {
  const [status, setStatus] = useState(getStoreStatus());

  useEffect(() => {
    const update = () => setStatus(getStoreStatus());
    update();
    const interval = setInterval(update, 30000); // Live poll every 30s
    return () => clearInterval(interval);
  }, []);

  return status;
}
