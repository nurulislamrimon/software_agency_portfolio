import React, { useState } from "react";
import { Laptop, ArrowRight, Github, Twitter, Linkedin, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    // Simulate endpoint registry
    setIsSubscribed(true);
    setNewsletterEmail("");
    setTimeout(() => {
      setIsSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden border-t border-slate-900">
      {/* Abstract dark graphics */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        {/* FINAL GRAND CTA BLOCK */}
        <div className="p-8 md:p-12 rounded-[32px] bg-gradient-to-tr from-slate-900 via-slate-950 to-blue-950/20 border border-white/5 text-center space-y-6 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
          {/* Subtle line background layout */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.1)_0%,transparent_100%)] pointer-events-none" />

          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">Interactive Setup</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight leading-tight">
              Let's Build Something Great Together
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Unlock immediate digital transformation capability. Book custom blueprint consultations with our Principal Solution Architects to draft high-fidelity specs today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 max-w-sm mx-auto">
            <button
              id="footer-final-cta-booking"
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-white text-slate-950 font-bold hover:bg-slate-100 cursor-pointer shadow-md transition duration-200 text-xs flex items-center justify-center gap-1.5"
            >
              <span>Book Discovery Call</span>
              <ArrowRight size={14} />
            </button>
            <button
              id="footer-secondary-scroll-portfolio"
              onClick={() => {
                const el = document.getElementById("portfolio");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 font-bold border border-white/5 transition duration-200 text-xs"
            >
              Examine Work Samples
            </button>
          </div>
        </div>

        {/* SITE MAP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-10 border-t border-white/5">
          {/* Column 1: Brand details */}
          <div className="md:col-span-5 space-y-4 text-left">
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-black text-sm">
                A
              </div>
              <span className="font-display font-black text-base tracking-tight text-white leading-none">
                Aura Labs
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Next-generation software engineering agency delivering pixel-perfect, scalable web interfaces, offline-capable mobile components, and cognitive AI workflows.
            </p>

            {/* Social linkages indicators */}
            <div className="flex gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition"
              >
                <Github size={14} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition"
              >
                <Twitter size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-blue-400 transition">Our Core Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-blue-400 transition">Case Studies Gallery</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-blue-400 transition">Proven Advantages</a>
              </li>
              <li>
                <a href="#process" className="hover:text-blue-400 transition">Delivery Framework</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400 transition">Client Reviews</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Newsletter Capture */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-300">
              Connect Channels
            </h4>

            {/* Newsletter input */}
            <div className="space-y-2">
              <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                Weekly Tech Roadmap Report
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-1.5">
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/5 rounded-xl px-3 py-2 text-xs outline-none text-white focus:border-blue-500 transition focus:bg-white/10"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shrink-0 transition"
                >
                  Join
                </button>
              </form>

              {isSubscribed && (
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 mt-1 animate-in fade-in duration-200">
                  <CheckCircle2 size={12} />
                  <span>Success! You are enrolled.</span>
                </div>
              )}
            </div>

            {/* Physical Contact pointers */}
            <div className="space-y-2 pt-2 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <Mail size={12} className="text-blue-500 shrink-0" />
                <span>hello@aurajs-agency.io</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={12} className="text-blue-500 shrink-0" />
                <span>One Sansome Suite 3200, San Francisco CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-blue-500 shrink-0" />
                <span>+1 (415) 801-4422</span>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT AND LEGAL FOOTNOTE */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <span>
            © {new Date().getFullYear()} Aura Labs, Inc. All rights reserved.
          </span>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-slate-300 transition">Terms of Delivery</span>
            <span className="cursor-pointer hover:text-slate-300 transition">Confidentiality Protocol</span>
            <span className="cursor-pointer hover:text-slate-300 transition">SOC2 Blueprint specs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
