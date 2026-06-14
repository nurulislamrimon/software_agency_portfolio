import { motion } from "motion/react";
import { Award, Compass, Heart, Globe, TrendingUp, CheckCircle } from "lucide-react";
import { STATS } from "../data";

export default function Stats() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-blue-100/10 via-cyan-100/5 to-indigo-100/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Headings */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="sleek-badge">
            Aura Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 tracking-tight leading-tight">
            Our Empirical Track Record Speaks Volumes
          </h2>
        </div>

        {/* Big visual number counters row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {STATS.map((stat, idx) => {
            // Icon mapping
            const Icon = idx === 0 ? Award : idx === 1 ? Heart : Globe;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between h-56 hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white text-slate-600 shadow-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 mt-4">
                    {stat.label}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 lines-clamp-2">
                    {stat.detail}
                  </p>
                </div>

                <div className="text-4xl lg:text-5xl font-black font-display text-slate-950 tracking-tight leading-none">
                  {stat.value}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Observability Graph mockup card */}
        <div className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center gap-8 text-left max-w-4xl mx-auto">
          <div className="space-y-4 md:w-1/2">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest flex items-center gap-1">
              <TrendingUp size={12} />
              <span>Observability Console</span>
            </span>
            <h3 className="text-xl font-bold font-display text-slate-900 leading-tight">
              Sustained Output & Zero Outages
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We monitor deployed service limits around the clock, mapping continuous builds, API response clusters, and visual up-times. Our client portals stay green.
            </p>

            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle size={14} className="text-emerald-500" />
                <span>99.99% Up-time SLA</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <CheckCircle size={14} className="text-emerald-500" />
                <span>SOC2 Security Standard</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-slate-950 rounded-2xl p-4 border border-slate-800 shrink-0 font-mono text-[9px] text-slate-400 space-y-3">
            <div className="flex justify-between border-b border-white/5 pb-1.5 text-slate-500">
              <span>AGENCY DELIVERIES GROWTH VELOCITY</span>
              <span className="text-emerald-400 font-bold">● ACTIVE CONNECT</span>
            </div>

            {/* Custom abstract vector layout lines representing progress velocity charts */}
            <div className="h-24 relative flex items-end">
              {/* grid lines */}
              <div className="absolute inset-x-0 h-px bg-white/5 top-0" />
              <div className="absolute inset-x-0 h-px bg-white/5 top-1/3" />
              <div className="absolute inset-x-0 h-px bg-white/5 top-2/3" />
              <div className="absolute inset-x-0 h-px bg-white/5 bottom-0" />

              {/* Graphic bars representing quarterly expansion */}
              <div className="w-full flex justify-between items-end gap-1 px-4 h-full relative z-10 select-none">
                <div className="h-1/5 w-4 bg-blue-600/50 rounded-t-sm" />
                <div className="h-1/3 w-4 bg-blue-600/60 rounded-t-sm" />
                <div className="h-1/2 w-4 bg-blue-600/70 rounded-t-sm" />
                <div className="h-2/3 w-4 bg-blue-500/80 rounded-t-sm" />
                <div className="h-3/4 w-4 bg-blue-500/90 rounded-t-sm" />
                <div className="h-[95%] w-4 bg-emerald-500 rounded-t-sm animate-pulse" />
              </div>
            </div>

            <div className="flex justify-between text-[8px] text-slate-500">
              <span>2021 (Launch)</span>
              <span>2023 (Expansion)</span>
              <span>2026 (Live Project-State)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
