import { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Flame, Scale, Check, X, Sparkles, Building, Layers, Zap, Users, Shield } from "lucide-react";
import { WHY_CHOOSE_US } from "../data";

export default function WhyChooseUs() {
  const [comparisonActive, setComparisonActive] = useState<"legacy" | "aura">("aura");

  return (
    <section id="why-choose-us" className="py-24 bg-white relative">
      {/* Absolute blur graphics */}
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-blue-100/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Detail text */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="sleek-badge">
            Aura Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 tracking-tight leading-tight">
            Designed for Reliability, Engineered for Absolute Scale
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            We abandon the outdated agency mechanics. No visual bloat, no outsourced development pipelines, no missing milestones.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            // Icon mapping representing values
            const Icon =
              index === 0
                ? Building
                : index === 1
                ? Zap
                : index === 2
                ? Users
                : index === 3
                ? Layers
                : Shield;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-5 rounded-3xl bg-slate-50 border border-slate-100/80 flex flex-col justify-between text-left h-full group hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-white text-slate-700 shadow-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-950 font-display">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/50 mt-6 flex justify-between items-baseline">
                  <span className="text-2xl font-black font-display text-blue-600">
                    {item.value}
                  </span>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                    {item.suffix}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium Comparison Interactive Grid Dashboard */}
        <div className="p-6 md:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 relative overflow-hidden max-w-4xl mx-auto shadow-2xl">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Heading */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/5 relative z-10">
            <div className="text-left">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Model Benchmark</span>
              <h3 className="text-lg font-bold font-display text-white mt-0.5">Structural Comparison Analysis</h3>
              <p className="text-xs text-slate-400 mt-0.5">Why fast-moving companies avoid traditional agencies in favor of Aura Labs.</p>
            </div>

            {/* Model Toggle Switch Button */}
            <div className="flex bg-white/5 rounded-full p-1 border border-white/5 shrink-0">
              <button
                type="button"
                onClick={() => setComparisonActive("aura")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition ${
                  comparisonActive === "aura" ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:text-white"
                }`}
              >
                Aura Agile Sprint Model
              </button>
              <button
                type="button"
                onClick={() => setComparisonActive("legacy")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition ${
                  comparisonActive === "legacy" ? "bg-rose-500/80 text-white shadow" : "text-slate-400 hover:text-white"
                }`}
              >
                Traditional Agency Model
              </button>
            </div>
          </div>

          {/* Comparative Metrics Panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left relative z-10">
            {comparisonActive === "aura" ? (
              <>
                <motion.div
                  key="aura-cost"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Financial Structure</span>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-400" />
                    <span>Fixed-Scope Modular Sprints</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Transparent, milestone-based budget buckets. You only budget for active code delivered, preventing project cost-creeps.
                  </p>
                </motion.div>

                <motion.div
                  key="aura-talent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Engineering Crew</span>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-400" />
                    <span>In-House Elite Senior Staff</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Zero outsourcing. Your platform is engineered by product builders who came from peak enterprise software companies.
                  </p>
                </motion.div>

                <motion.div
                  key="aura-delivery"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Development Velocity</span>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-400" />
                    <span>Launch inside 6 - 8 Weeks</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Weekly continuous integration builds. Real, functional previews deployed to sandbox environments, from the very first week.
                  </p>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  key="legacy-cost"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Financial Structure</span>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <X size={14} className="text-rose-500" />
                    <span>Overestimated Bloated Proposals</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Heavy setup overhead costs, opaque project margins, and constant upsells on minor revisions or changes.
                  </p>
                </motion.div>

                <motion.div
                  key="legacy-talent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Engineering Crew</span>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <X size={14} className="text-rose-500" />
                    <span>Outsourced Junior Staff</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Projects handed off to interns or secondary contractors with zero architectural experience, leading to technical debt.
                  </p>
                </motion.div>

                <motion.div
                  key="legacy-delivery"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Development Velocity</span>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <X size={14} className="text-rose-500" />
                    <span>6 to 12 Months Lag</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Endless static diagrams, slide decks, and status reports but no real clickable code. Overdue deadlines and broken APIs.
                  </p>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
