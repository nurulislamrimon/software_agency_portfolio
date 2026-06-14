import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { TRUSTED_COMPANIES } from "../data";

export default function TrustedBy() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
          Trusted by elite engineering and venture-backed squads
        </span>

        {/* Scrolling continuous strip */}
        <div className="relative w-full flex items-center justify-center pt-2">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 max-w-4xl mx-auto">
            {TRUSTED_COMPANIES.map((company, index) => {
              // Dynamically resolve icon from lucide
              const IconComponent = (Icons as any)[company.icon] || Icons.Code;
              return (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition duration-300"
                >
                  <div className="p-1.5 rounded-lg bg-slate-200/50 mt-0.5">
                    <IconComponent size={16} className="stroke-[1.8]" />
                  </div>
                  <span className="text-xs font-semibold font-display tracking-wide">{company.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
