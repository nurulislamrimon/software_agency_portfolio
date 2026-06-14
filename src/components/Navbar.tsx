import { useState, useEffect } from "react";
import { Laptop, ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

const MENU_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Advantages", href: "#why-choose-us" },
  { label: "Our Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
];

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 30);

      // Simple active anchor observer
      const scrollPosition = window.scrollY + 120;
      for (const item of MENU_ITEMS) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.clientHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        hasScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/15 group-hover:scale-105 transition-transform duration-300 shrink-0">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold font-display text-slate-900 tracking-tight leading-none">Aura Labs</span>
            <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase mt-0.5">Software Agency</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
          {MENU_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                activeSection === item.href
                  ? "bg-white text-blue-600 shadow-sm font-semibold"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="navbar-secondary-portfolio-btn"
            onClick={() => {
              const el = document.getElementById("portfolio");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
          >
            Check Work
          </button>
          <button
            id="navbar-booking-btn"
            onClick={onOpenBooking}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs font-semibold transition-colors shadow-lg shadow-slate-200/60 duration-250 flex items-center gap-1 group active:scale-95"
          >
            <span>Book a Discovery Call</span>
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile controls */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5 md:hidden text-slate-700 hover:bg-slate-100 rounded-lg transition"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full inset-x-0 bg-white border-b border-slate-100 shadow-xl px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-3 duration-250">
          <div className="flex flex-col gap-3">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
              >
                {item.label}
              </a>
            ))}
          </div>
          <hr className="border-slate-100" />
          <div className="flex flex-col gap-3">
            <button
              id="mobile-drawer-booking-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold text-center cursor-pointer transition shadow"
            >
              Book a Discovery Call
            </button>
            <button
              id="mobile-drawer-portfolio-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById("portfolio");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold text-center transition"
            >
              View Featured Work
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
