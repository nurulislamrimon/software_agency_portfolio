import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, CheckCircle2, ChevronRight, MessageSquare, Laptop, Lightbulb, Users, DollarSign, Clock } from "lucide-react";
import { SERVICES } from "../data";

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BUDGET_OPTIONS = [
  { label: "$10k - $25k", description: "Startup MVP / Core feature set" },
  { label: "$25k - $50k", description: "Standard custom SaaS / Mobile App" },
  { label: "$50k - $100k", description: "Enterprise System / Complex AI integrations" },
  { label: "$100k+", description: "Advanced Custom Multi-platform Build" },
];

const TIME_SLOTS = [
  { day: "Mon", date: "Jun 15", times: ["10:00 AM", "2:00 PM", "4:30 PM"] },
  { day: "Tue", date: "Jun 16", times: ["9:00 AM", "11:30 AM", "3:00 PM"] },
  { day: "Wed", date: "Jun 17", times: ["1:00 PM", "3:30 PM", "5:00 PM"] },
];

export default function DiscoveryModal({ isOpen, onClose }: DiscoveryModalProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);
  const [selectedBudget, setSelectedBudget] = useState(BUDGET_OPTIONS[1].label);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step < 4) setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please enter both your name and email address to proceed.");
      return;
    }
    setIsSubmitting(true);
    // Simulate API storage
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedService(SERVICES[0].id);
    setSelectedBudget(BUDGET_OPTIONS[1].label);
    setSelectedDay(0);
    setSelectedTime("");
    setFormData({ name: "", email: "", company: "", description: "" });
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        {/* Modal Shell */}
        <motion.div
          id="discovery-modal-container"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl overflow-hidden rounded-[24px] bg-white shadow-2xl border border-slate-100 flex flex-col md:flex-row max-h-[90vh] md:max-h-[680px]"
        >
          {/* Side Banner with Value Props */}
          <div className="hidden md:flex md:w-1/3 bg-slate-950 p-6 text-white flex-col justify-between relative overflow-hidden shrink-0">
            {/* Background glowing blobs */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

            {/* Content info */}
            <div className="relative z-10 space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">Discovery System</span>
                <h4 className="mt-2 text-xl font-medium font-display leading-tight">Fast Track Your Roadmap</h4>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-white/10 text-blue-400 mt-0.5 shrink-0">
                    <Laptop size={14} />
                  </div>
                  <p className="text-xs text-slate-300">Technical assessment with our Principal Solution Architects.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-white/10 text-blue-400 mt-0.5 shrink-0">
                    <Lightbulb size={14} />
                  </div>
                  <p className="text-xs text-slate-300">Tailored UI/UX blueprints & technology suggestion report.</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-white/10 text-blue-400 mt-0.5 shrink-0">
                    <Users size={14} />
                  </div>
                  <p className="text-xs text-slate-300">Detailed scoping including delivery milestones & quote.</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
              <Clock size={12} className="text-blue-500" />
              <span>Response in less than 24 hours</span>
            </div>
          </div>

          {/* Core Booking Fields */}
          <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  {isSubmitted ? "Complete" : `Step ${step} of 4`}
                </span>
              </div>
              <button
                id="close-discovery-btn"
                onClick={onClose}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Inside Content */}
            <div className="py-6 flex-1 min-h-[340px]">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-medium font-display text-slate-900">Discovery Proposal Logged!</h3>
                    <p className="mt-2 text-sm text-slate-600 max-w-sm">
                      Thank you, <strong className="text-slate-800">{formData.name}</strong>. We've registered your project interest.
                    </p>
                    {selectedTime && (
                      <div className="mt-4 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-center gap-2">
                        <Calendar size={14} className="text-blue-500" />
                        <span>Slot: <strong className="text-slate-800">{TIME_SLOTS[selectedDay].date} @ {selectedTime}</strong></span>
                      </div>
                    )}
                    <button
                      id="reset-discovery-modal-btn"
                      onClick={handleReset}
                      className="mt-6 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium cursor-pointer transition shadow"
                    >
                      Done & Close
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-4"
                      >
                        <div>
                          <h3 className="text-lg font-medium font-display text-slate-900">What services fits your requirements?</h3>
                          <p className="text-xs text-slate-500">Pick the core solution pathway you'd like to explore.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                          {SERVICES.map((srv) => (
                            <button
                              key={srv.id}
                              type="button"
                              onClick={() => setSelectedService(srv.id)}
                              className={`p-3 rounded-xl text-left border flex items-start gap-3 transition cursor-pointer ${
                                selectedService === srv.id
                                  ? "bg-blue-50/50 border-blue-500 ring-1 ring-blue-500/30"
                                  : "border-slate-100 bg-white hover:border-slate-300"
                              }`}
                            >
                              <div className={`p-1.5 rounded-lg shrink-0 ${selectedService === srv.id ? "bg-blue-500 text-white" : "bg-slate-50 text-slate-500"}`}>
                                <CheckCircle2 size={12} className={selectedService === srv.id ? "opacity-100" : "opacity-30"} />
                              </div>
                              <div>
                                <h4 className="text-xs font-medium text-slate-800">{srv.title}</h4>
                                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{srv.deliveryTime} turnaround</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-4"
                      >
                        <div>
                          <h3 className="text-lg font-medium font-display text-slate-900">What is your project's estimated budget?</h3>
                          <p className="text-xs text-slate-500">Helps us scope the team resources matches needed.</p>
                        </div>
                        <div className="space-y-2 pt-2">
                          {BUDGET_OPTIONS.map((opt) => (
                            <button
                              key={opt.label}
                              type="button"
                              onClick={() => setSelectedBudget(opt.label)}
                              className={`w-full p-3 rounded-xl text-left border flex items-center justify-between transition cursor-pointer ${
                                selectedBudget === opt.label
                                  ? "bg-blue-50/50 border-blue-500 ring-1 ring-blue-500/30"
                                  : "border-slate-100 bg-white hover:border-slate-200"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <DollarSign size={16} className={selectedBudget === opt.label ? "text-blue-500" : "text-slate-400"} />
                                <div>
                                  <h4 className="text-xs font-semibold text-slate-800">{opt.label}</h4>
                                  <p className="text-[11px] text-slate-500 mt-0.5">{opt.description}</p>
                                </div>
                              </div>
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                selectedBudget === opt.label ? "bg-blue-500 border-blue-500 text-white" : "border-slate-300"
                              }`}>
                                {selectedBudget === opt.label && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                              </div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-4"
                      >
                        <div>
                          <h3 className="text-lg font-medium font-display text-slate-900">Schedule video scoping call (Optional)</h3>
                          <p className="text-xs text-slate-500">Pick a time to meet our Solution Architects live.</p>
                        </div>
                        <div className="space-y-3 pt-1">
                          <div className="flex gap-2.5">
                            {TIME_SLOTS.map((slot, index) => (
                              <button
                                key={slot.date}
                                type="button"
                                onClick={() => {
                                  setSelectedDay(index);
                                  setSelectedTime("");
                                }}
                                className={`flex-1 p-2.5 rounded-xl border text-center transition cursor-pointer ${
                                  selectedDay === index
                                    ? "bg-blue-500 text-white border-blue-500"
                                    : "bg-slate-50 text-slate-600 border-slate-100 hover:border-slate-300"
                                }`}
                              >
                                <span className="block text-[11px] uppercase tracking-wider opacity-80">{slot.day}</span>
                                <span className="block text-xs font-semibold">{slot.date}</span>
                              </button>
                            ))}
                          </div>

                          <div className="space-y-1">
                            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">Available Slots</span>
                            <div className="grid grid-cols-3 gap-2">
                              {TIME_SLOTS[selectedDay].times.map((t) => (
                                <button
                                  key={t}
                                  type="button"
                                  onClick={() => setSelectedTime(t)}
                                  className={`p-2 rounded-lg text-xs font-medium border text-center transition cursor-pointer ${
                                    selectedTime === t
                                      ? "bg-blue-50 border-blue-500 text-blue-600 ring-1 ring-blue-500/20"
                                      : "bg-white border-slate-100 text-slate-700 hover:border-slate-300"
                                  }`}
                                >
                                  {t}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 p-2 rounded-lg bg-yellow-50/50 border border-yellow-100 text-[10px] text-yellow-800">
                            <span>💡 No slots work? Leave this blank and we will coordinate custom times in callback.</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-3"
                      >
                        <div>
                          <h3 className="text-base font-medium font-display text-slate-900">Your Project & Contact Information</h3>
                          <p className="text-xs text-slate-500">Provide direct communication metrics so we can verify files specs.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-3">
                          <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <label className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase">Your Name *</label>
                              <input
                                type="text"
                                name="name"
                                required
                                placeholder="Sarah Jenkins"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 outline-none focus:border-blue-500 transition bg-slate-50/50 focus:bg-white"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase">Work Email *</label>
                              <input
                                type="email"
                                name="email"
                                required
                                placeholder="sarah@apex.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 outline-none focus:border-blue-500 transition bg-slate-50/50 focus:bg-white"
                              />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase">Company Name</label>
                            <input
                              type="text"
                              name="company"
                              placeholder="Apex Capital Partners"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 outline-none focus:border-blue-500 transition bg-slate-50/50 focus:bg-white"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase">Brief description of the challenge</label>
                            <textarea
                              name="description"
                              rows={2}
                              placeholder="Building an internal system that integrates telemetry reports real-time..."
                              value={formData.description}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 outline-none focus:border-blue-500 transition bg-slate-50/50 focus:bg-white resize-none"
                            />
                          </div>
                        </form>
                      </motion.div>
                    )}
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Actions Footer */}
            {!isSubmitted && (
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  id="prev-discovery-btn"
                  type="button"
                  onClick={handleBack}
                  disabled={step === 1}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                    step === 1 ? "text-slate-300 cursor-not-allowed" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Previous
                </button>

                {step < 4 ? (
                  <button
                    id="next-discovery-btn"
                    type="button"
                    onClick={handleNext}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1 cursor-pointer transition shadow"
                  >
                    <span>Next</span>
                    <ChevronRight size={14} />
                  </button>
                ) : (
                  <button
                    id="submit-discovery-btn"
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData.name || !formData.email}
                    className="px-6 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 disabled:opacity-50 text-white text-xs font-semibold cursor-pointer transition shadow-xl"
                  >
                    {isSubmitting ? "Securing Blueprint..." : "Complete Booking"}
                  </button>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
