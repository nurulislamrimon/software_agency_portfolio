import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Star, Quote, Search } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<"all" | "enterprise" | "startup">("all");

  const filteredReviews = TESTIMONIALS.filter((rev) => {
    if (activeTab === "all") return true;
    if (activeTab === "enterprise") return rev.company.includes("Apex") || rev.company.includes("Nova");
    return rev.company.includes("Velo") || rev.company.includes("Synthetix");
  });

  return (
    <section id="testimonials" className="py-24 bg-slate-50 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Headings */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-3 max-w-xl text-left">
            <span className="sleek-badge">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 tracking-tight leading-tight">
              What Elite Technology Leaders Say About Aura Labs
            </h2>
          </div>

          {/* Segment Toggle switches */}
          <div className="flex bg-slate-200/50 p-1 rounded-2xl border border-slate-200 shrink-0 self-start md:self-end">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-medium cursor-pointer transition ${
                activeTab === "all" ? "bg-white text-blue-600 shadow-sm" : "text-slate-600 hover:text-slate-950"
              }`}
            >
              All Partners
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("enterprise")}
              className={`px-4 py-2 rounded-xl text-xs font-medium cursor-pointer transition ${
                activeTab === "enterprise" ? "bg-white text-blue-600 shadow-sm" : "text-slate-600 hover:text-slate-950"
              }`}
            >
              Enterprise Clients
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("startup")}
              className={`px-4 py-2 rounded-xl text-xs font-medium cursor-pointer transition ${
                activeTab === "startup" ? "bg-white text-blue-600 shadow-sm" : "text-slate-600 hover:text-slate-950"
              }`}
            >
              Venture Startups
            </button>
          </div>
        </div>

        {/* Masonry or grid feedback panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((rev, index) => (
              <motion.div
                key={rev.id}
                layoutId={`review-panel-${rev.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200/60 flex flex-col justify-between text-left shadow-sm hover:shadow-xl transition-all duration-300 relative group"
              >
                {/* Decorative quote icon */}
                <div className="absolute right-6 top-6 text-blue-500/5 group-hover:text-blue-500/10 transition-colors pointer-events-none">
                  <Quote size={56} className="rotate-180 fill-current" />
                </div>

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 text-yellow-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic select-none">
                     "{rev.content}"
                  </p>
                </div>

                {/* Sender Avatar / branding card */}
                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatarUrl}
                      alt={rev.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-slate-100 shadow-sm shrink-0"
                    />
                    <div>
                      <span className="block text-xs font-bold text-slate-800 leading-tight">
                        {rev.name}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {rev.role} • <strong className="text-slate-700">{rev.company}</strong>
                      </span>
                    </div>
                  </div>

                  <span className="text-[9px] px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-bold uppercase tracking-wider font-mono">
                    Project Cleared
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
