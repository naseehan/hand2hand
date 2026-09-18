import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MobileStickyBar from "./components/layout/MobileStickyBar";
import RepairBookingModal from "./components/booking/RepairBookingModal";
import LoadingSpinner from "./components/common/LoadingSpinner";

// Lazy-loaded page components for optimal bundle performance & code-splitting
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Process = lazy(() => import("./pages/Process"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");

  const handleOpenBooking = (serviceTitle?: string, brandName?: string) => {
    if (serviceTitle) setSelectedService(serviceTitle);
    if (brandName) setSelectedBrand(brandName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService("");
    setSelectedBrand("");
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900 antialiased">
        
        {/* Global Header */}
        <Header onOpenBooking={() => handleOpenBooking()} />

        {/* Main Routed Content with Suspense Loading Fallback */}
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
              <Route path="/services" element={<Services onOpenBooking={handleOpenBooking} />} />
              <Route path="/about" element={<About onOpenBooking={handleOpenBooking} />} />
              <Route path="/process" element={<Process onOpenBooking={handleOpenBooking} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Mobile Fixed Sticky Quick Action Bar */}
        <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

        {/* Global Repair Booking Modal */}
        <RepairBookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          initialService={selectedService}
          initialBrand={selectedBrand}
        />

      </div>
    </Router>
  );
}
