import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Icons from "lucide-react";
import { SERVICES } from "../data";
import { Service } from "../types";

interface ServicesProps {
  onOpenBooking: (prefillService?: string) => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  
  // Interactive pricing tool states
  const [selectedServicesForQuote, setSelectedServicesForQuote] = useState<string[]>([SERVICES[0].id]);
  const [timelineSpeed, setTimelineSpeed] = useState<number>(2); // 1 = Speed, 2 = Standard, 3 = Extended

  const handleToggleQuoteService = (id: string) => {
    setSelectedServicesForQuote((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev; // Keep at least one selected
        return prev.filter((s) => s !== id);
      }
      return [...prev, id];
    });
  };

  const calculatedQuote = useMemo(() => {
    let baseCost = 0;
    
    // Core custom base prices for estimations
    selectedServicesForQuote.forEach((id) => {
      if (id === "web-dev") baseCost += 18000;
      if (id === "mobile-dev") baseCost += 24000;
      if (id === "ai-automation") baseCost += 15000;
      if (id === "ui-ux") baseCost += 10000;
      if (id === "cloud-infra") baseCost += 14000;
    });

    // Timeline modifiers
    let speedLabel = "Standard";
    let speedModifier = 1.0;
    if (timelineSpeed === 1) {
      speedLabel = "Express (Priority)";
      speedModifier = 1.35; // 35% premium for faster sprint speed
    } else if (timelineSpeed === 3) {
      speedLabel = "Flexible / Multi-stage";
      speedModifier = 0.9; // 10% discount for slower staging
    }

    const total = baseCost * speedModifier;
    const teamSize = Math.max(2, Math.ceil(selectedServicesForQuote.length * 1.5 - (timelineSpeed === 3 ? 1 : 0)));
    
    return {
      priceRange: `$${Math.round(total * 0.95).toLocaleString()} - $${Math.round(total * 1.15).toLocaleString()}`,
      speedLabel,
      teamSize,
      techLead: true,
      pm: selectedServicesForQuote.length > 2
    };
  }, [selectedServicesForQuote, timelineSpeed]);

  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Light glow pattern background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4/5 h-[400px] bg-blue-100/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="sleek-badge">
            Our Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 tracking-tight leading-tight">
            High-Performance Engineering & Futuristic Design
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            We operate at the convergence of fast edge technologies, structured design systems, and custom cognitive integration.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Service Cards (Column Span 7) */}
          <div className="md:col-span-7 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              {SERVICES.map((srv: Service) => {
                // Dynamically extract icon Component from Lucide
                const IconComponent = (Icons as any)[srv.iconName] || Icons.HelpCircle;
                const isSelected = selectedService === srv.id;

                return (
                  <div
                    key={srv.id}
                    onClick={() => setSelectedService(isSelected ? null : srv.id)}
                    className={`p-5 rounded-3xl border text-left cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? "bg-blue-50/20 border-blue-400 ring-1 ring-blue-400/20 shadow-md shadow-blue-500/5"
                        : "bg-slate-50 border-slate-100 hover:border-slate-200 hover:bg-slate-50/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-2.5 rounded-2xl ${isSelected ? "bg-blue-600 text-white" : "bg-white text-slate-600 shadow-sm"}`}>
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm font-bold text-slate-900">{srv.title}</h3>
                            {srv.status === "popular" && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 font-bold uppercase tracking-wider">
                                Most Popular
                              </span>
                            )}
                            {srv.status === "new" && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold uppercase tracking-wider">
                                New Addition
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500">Milestone timeframe: {srv.deliveryTime}</p>
                        </div>
                      </div>

                      {/* Dropdown chevron trigger indicator */}
                      <div className={`text-slate-400 transition-transform duration-300 ${isSelected ? "rotate-180 text-blue-500" : ""}`}>
                        <Icons.ChevronDown size={18} />
                      </div>
                    </div>

                    {/* Expandable Panel */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-slate-200/50 space-y-4">
                            <p className="text-slate-600 text-xs leading-relaxed">
                              {srv.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                              {/* Features checklist */}
                              <div className="space-y-1.5">
                                <span className="block text-[9px] font-bold tracking-wider text-slate-400 uppercase">
                                  Scope Deliverables
                                </span>
                                <ul className="space-y-1">
                                  {srv.features.map((feat) => (
                                    <li key={feat} className="text-[11px] text-slate-600 flex items-center gap-2.5">
                                      <Icons.CheckCircle2 size={12} className="text-blue-500 shrink-0" />
                                      <span className="truncate">{feat}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Tech Stack pills */}
                              <div className="space-y-1.5">
                                <span className="block text-[9px] font-bold tracking-wider text-slate-400 uppercase">
                                  Standard Technologies
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                  {srv.techStack.map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200/60 text-[10px] font-medium"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <button
                              id={`services-book-prefill-${srv.id}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenBooking(srv.id);
                              }}
                              className="mt-2 w-full py-2 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition cursor-pointer"
                            >
                              <span>Explore Blueprinting for {srv.title}</span>
                              <Icons.ArrowRight size={12} />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3.5 text-xs text-slate-600">
              <Icons.Sparkles size={18} className="text-blue-500" />
              <span>Need custom integrations not listed? We construct tailor-made solutions. Talk directly to architectures.</span>
            </div>
          </div>

          {/* Quick Quote Interactive Slider Widget (Column Span 5) */}
          <div className="md:col-span-5">
            <div className="relative md:sticky md:top-24 p-6 rounded-3xl bg-slate-950 text-white border border-slate-800 flex flex-col justify-between h-full min-h-[460px] overflow-hidden shadow-xl">
              {/* Background light shapes */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Interactive Calculator</span>
                  <h3 className="text-xl font-semibold font-display text-white mt-1">Estimate Project Blueprint</h3>
                  <p className="text-[11px] text-slate-400 mt-1">Select multiple services and timelines metrics to view estimated scope metrics.</p>
                </div>

                {/* Service Toggles */}
                <div className="space-y-2">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Select Requirements</span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {SERVICES.map((srv) => {
                      const isSelected = selectedServicesForQuote.includes(srv.id);
                      return (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => handleToggleQuoteService(srv.id)}
                          className={`p-2 rounded-xl text-left border text-[11px] font-medium transition cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? "bg-blue-600/35 border-blue-500 text-white"
                              : "bg-white/5 border-white/5 text-slate-300 hover:bg-white/10"
                          }`}
                        >
                          <span className="truncate">{srv.title}</span>
                          <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                            isSelected ? "bg-blue-500 border-blue-500 text-white" : "border-slate-600"
                          }`}>
                            {isSelected && <Icons.Check size={10} className="stroke-[3]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Timeline Slider Speed */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Delivery Timeline Speed</span>
                    <span className="text-xs font-bold text-blue-400">{calculatedQuote.speedLabel}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="3"
                    step="1"
                    value={timelineSpeed}
                    onChange={(e) => setTimelineSpeed(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                    <span>EXPRESS SPRINT</span>
                    <span>STANDARD MILESTONE</span>
                    <span>EXTENDED FLEXIBLE</span>
                  </div>
                </div>

                {/* Results Screen outputs */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-slate-400">Projected Turnaround Cost:</span>
                    <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-display">
                      {calculatedQuote.priceRange}
                    </span>
                  </div>

                  <div className="space-y-1 text-xs text-slate-400">
                    <div className="flex justify-between">
                      <span>Standard Dedicated Crew:</span>
                      <strong className="text-white">{calculatedQuote.teamSize} specialists</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Assigned Platform Lead:</span>
                      <strong className="text-emerald-400">Included (Senior architect)</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-4">
                <button
                  id="estimator-submit-btn"
                  onClick={() => onOpenBooking(selectedServicesForQuote[0])}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-blue-600/10 flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                >
                  <span>Submit Blueprint Scope</span>
                  <Icons.ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
