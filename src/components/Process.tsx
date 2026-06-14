import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ChevronRight, Compass, PencilRuler, Code, Rocket, Calendar } from "lucide-react";
import { PROCESS_STEPS } from "../data";

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);

  // Map step icon index
  const getStepIcon = (num: number) => {
    if (num === 1) return Compass;
    if (num === 2) return PencilRuler;
    if (num === 3) return Code;
    return Rocket;
  };

  return (
    <section id="process" className="py-24 bg-slate-50 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Headings */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="sleek-badge">
            Our Strategy Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 tracking-tight leading-tight">
            How We Translate Complex Ideas to Clickable Code
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            A precise, structured deployment blueprint designed to maximize performance quality and minimize time-to-market.
          </p>
        </div>

        {/* Stepper Selection row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Timeline side checkpoints (Column Span 5) */}
          <div className="lg:col-span-5 space-y-3">
            {PROCESS_STEPS.map((step) => {
              const StepIcon = getStepIcon(step.number);
              const isActive = activeStep === step.number;

              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(step.number)}
                  className={`w-full p-4 rounded-2xl border text-left flex items-start gap-4 transition-all duration-350 cursor-pointer ${
                    isActive
                      ? "bg-white border-blue-500 shadow-md ring-1 ring-blue-500/20"
                      : "bg-white/40 border-slate-100 hover:border-slate-350"
                  }`}
                >
                  {/* Step active styling */}
                  <div className={`p-2.5 rounded-xl shrink-0 mt-0.5 transition-colors duration-300 ${
                    isActive ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                    <StepIcon size={18} />
                  </div>

                  <div className="space-y-1 select-none flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Phase {step.number}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                        <Calendar size={10} />
                        <span>{step.duration}</span>
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {step.title}
                    </h3>
                  </div>

                  <div className={`text-slate-300 self-center transition-transform duration-300 ${
                    isActive ? "translate-x-1 text-blue-500" : ""
                  }`}>
                    <ChevronRight size={16} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details canvas representing active step (Column Span 7) */}
          <div className="lg:col-span-7 h-full">
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm min-h-[380px] flex flex-col justify-between text-left relative overflow-hidden">
              {/* Internal glow blobs */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {PROCESS_STEPS.map((step) => {
                  if (step.number !== activeStep) return null;
                  const StepIcon = getStepIcon(step.number);

                  return (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 flex-1 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        {/* Title of Phase */}
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                            <StepIcon size={22} />
                          </div>
                          <div>
                            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                              Pipeline Milestone {step.number}
                            </span>
                            <h4 className="text-lg font-bold font-display text-slate-900 leading-tight">
                              {step.title}
                            </h4>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                          {step.description}
                        </p>
                      </div>

                      {/* Deliverables checklists Checklist */}
                      <div className="space-y-3 pt-6 border-t border-slate-100 h-full flex-1">
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          Contractual Artifacts Received
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-lg">
                          {step.outcomes.map((itm) => (
                            <div key={itm} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium flex items-center gap-2.5">
                              <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                              <span className="truncate">{itm}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mini dynamic progression bar of pipeline */}
                      <div className="pt-6 border-t border-slate-100 space-y-1.5 mt-auto">
                        <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono uppercase font-bold">
                          <span>Workflow speed: 100% Optimized</span>
                          <span>Phase Progress {activeStep * 25}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${activeStep * 25}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
