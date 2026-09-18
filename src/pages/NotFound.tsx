import { Link } from "react-router-dom";
import { Wrench, Home, PhoneCall, ArrowLeft } from "lucide-react";
import SEO from "../components/common/SEO";
import { BUSINESS_CONFIG } from "../config/business";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center px-4 py-16">
      <SEO title="Page Not Found" description="The requested page could not be found." />
      
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Wrench className="w-8 h-8" />
        </div>
        
        <span className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-2 block">
          Error 404
        </span>
        
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
          Page Not Found
        </h1>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          The page you are looking for might have been moved, removed, or is temporarily unavailable. Let's get you back on track!
        </p>
        
        <div className="space-y-3">
          <Link
            to="/"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          
          <Link
            to="/services"
            className="w-full bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-all border border-gray-200 flex items-center justify-center space-x-2 text-sm"
          >
            <ArrowLeft className="w-4 h-4 text-gray-500" />
            <span>View Repair Services</span>
          </Link>
          
          <a
            href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
            className="inline-flex items-center text-xs text-blue-600 font-semibold hover:underline pt-2"
          >
            <PhoneCall className="w-3.5 h-3.5 mr-1.5" />
            Need help? Call {BUSINESS_CONFIG.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
