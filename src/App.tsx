import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import DiscoveryModal from "./components/DiscoveryModal";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedPrefill, setSelectedPrefill] = useState<string | undefined>(undefined);

  const handleOpenBooking = (prefillServiceId?: string) => {
    setSelectedPrefill(prefillServiceId);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setSelectedPrefill(undefined);
  };

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Sleek Interface Ambient Background Globs Container to prevent layout height calculation issues */}
      <div className="absolute inset-x-0 top-0 h-full overflow-hidden pointer-events-none -z-10 bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] opacity-40 -translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Structural sticky header elements */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="relative z-10">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <TrustedBy />
        <Services onOpenBooking={handleOpenBooking} />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <Stats />
        <Testimonials />
      </main>

      {/* Structural Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Custom Scoping Wizard dialogue popup overlay representation */}
      <DiscoveryModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
