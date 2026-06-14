import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Play, Server, Clock, ChevronUp, Bot, Sparkles, TrendingUp, CheckCircle, Smartphone } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

const METRICS_MOCK = [
  { item: "SaaS Platform v4.2", state: "Active", time: "2m ago", change: "+14.2%" },
  { item: "Cognitive AI Agent", state: "Routing", time: "Just now", change: "74% auto" },
  { item: "Edge Database Grid", state: "Optimized", time: "Syncing", change: "99.99%" },
];

export default function Hero({ onOpenBooking }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"sales" | "ai" | "infrastructure">("sales");
  const [revenue, setRevenue] = useState(128450);

  // Live counter animation to prove high fidelity
  useEffect(() => {
    const timer = setInterval(() => {
      setRevenue((prev) => prev + Math.floor(Math.random() * 25) + 5);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-white"
    >
      {/* Background Gradients inspired by Stripe/Framer */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-gradient-to-b from-blue-50/40 via-cyan-50/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-0 -z-10 w-[550px] h-[550px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 left-0 -z-10 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Columns: Core copy */}
        <div className="lg:col-span-7 space-y-8 flex flex-col justify-center text-left">
          {/* Animated Highlight Banner */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sleek-badge gap-2"
          >
            <Sparkles size={14} className="text-blue-500 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Award-Winning Premium Software Agency</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
          </motion.div>
 
          {/* Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[54px] font-bold font-sans text-slate-900 tracking-tight leading-[1.05]"
            >
              Building Scalable <br />
              <span className="text-blue-600">
                Digital Products
              </span>{" "}
              for <br />
              Modern Businesses.
            </motion.h1>
 
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed"
            >
              We craft high-fidelity software architectures, next-gen cloud structures, and agentic AI integrations that scale infinitely. Empowering elite businesses with digital transformation.
            </motion.p>
          </div>
 
          {/* Key Advantages Checklist */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-x-6 gap-y-2 max-w-md pt-1 text-slate-600"
          >
            <div className="flex items-center gap-2 text-xs">
              <CheckCircle size={14} className="text-blue-500" />
              <span>SLA Performance Guarantees</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <CheckCircle size={14} className="text-blue-500" />
              <span>Full Source Handoff</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <CheckCircle size={14} className="text-blue-500" />
              <span>Agentic AI Automation</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <CheckCircle size={14} className="text-blue-500" />
              <span>Sleek Polish Standards</span>
            </div>
          </motion.div>
 
          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <button
              id="hero-primary-cta"
              onClick={onOpenBooking}
              className="sleek-btn-primary flex items-center justify-center gap-2 group shadow-xl shadow-blue-200"
            >
              <span>Book a Discovery Call</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
 
            <button
              id="hero-secondary-cta"
              onClick={() => {
                const el = document.getElementById("portfolio");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="sleek-btn-secondary flex items-center justify-center gap-2 group"
            >
              <span>View Portfolio</span>
              <div className="w-6 h-6 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-blue-500 transition-colors">
                <Play size={10} className="fill-current" />
              </div>
            </button>
          </motion.div>
        </div>

        {/* Right Columns: Interactive Dashboard Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Subtle surrounding ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-blue-300/10 via-cyan-400/5 to-indigo-500/10 rounded-[32px] blur-2xl pointer-events-none" />

          {/* Device border frame */}
          <div className="relative w-full rounded-2xl bg-slate-950 p-3 shadow-2xl border border-slate-800">
            {/* Top Bar Mockup */}
            <div className="flex items-center justify-between pb-3 px-3 border-b border-white/5 text-slate-400 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-[10px] text-slate-500 font-sans font-medium">project-apex-console.aurajs</span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] text-emerald-400 uppercase font-semibold">Live System</span>
              </div>
            </div>

            {/* Dashboard Sidebar Tabs & Content layout */}
            <div className="pt-3 grid grid-cols-4 gap-3 min-h-[290px]">
              {/* Internal Sidebar */}
              <div className="col-span-1 border-r border-white/5 pr-1.5 flex flex-col gap-1.5">
                <button
                  type="button"
                  onClick={() => setActiveTab("sales")}
                  className={`px-2 py-1.5 rounded-lg text-left text-[11px] font-medium transition ${
                    activeTab === "sales" ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5"
                  }`}
                >
                  Overview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("ai")}
                  className={`px-2 py-1.5 rounded-lg text-left text-[11px] font-medium transition ${
                    activeTab === "ai" ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5"
                  }`}
                >
                  AI Cognitive
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("infrastructure")}
                  className={`px-2 py-1.5 rounded-lg text-left text-[11px] font-medium transition ${
                    activeTab === "infrastructure" ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5"
                  }`}
                >
                  Cluster OS
                </button>
                <div className="mt-auto p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-mono leading-tight">
                  CPU: 4.2% <br />
                  RAM: 1.8G
                </div>
              </div>

              {/* Inside Interactive Canvas */}
              <div className="col-span-3 flex flex-col justify-between">
                <div>
                  {activeTab === "sales" && (
                    <motion.div
                      key="salestab"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-400">Total Cleared Sales</span>
                        <div className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] flex items-center gap-1">
                          <TrendingUp size={10} />
                          <span>+24.1%</span>
                        </div>
                      </div>
                      <div className="text-2xl font-black font-display text-white">
                        ${revenue.toLocaleString()}
                      </div>
                      <div className="space-y-1.5">
                        <span className="text-[10px] text-slate-500 font-mono">Recent Operations</span>
                        <div className="space-y-1">
                          <div className="p-1 px-1.5 rounded bg-white/5 flex items-center justify-between text-[10px]">
                            <span className="text-white">Apex subscription flow</span>
                            <span className="text-emerald-400">+$2,450.00</span>
                          </div>
                          <div className="p-1 px-1.5 rounded bg-white/5 flex items-center justify-between text-[10px]">
                            <span className="text-white">Courier payload API</span>
                            <span className="text-emerald-400">+$124.20</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "ai" && (
                    <motion.div
                      key="aitab"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          <Bot size={12} className="text-blue-500 animate-pulse" />
                          <span>Cognitive Agentic Live</span>
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">Model: Gemini-3.5-Flash</span>
                      </div>

                      {/* Chat Bubbles */}
                      <div className="space-y-1.5 text-[10px]">
                        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                          <strong>Inbound:</strong> "My shipment failed to arrive at the high-rise suite. Can you reschedule?"
                        </div>
                        <div className="p-2 rounded-lg bg-blue-950/40 border border-blue-900/30 text-blue-200">
                          <strong>Aura Agent:</strong> "Checking logistics API... verified urban cache drop. Rescheduled for Mon 10:00 AM."
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "infrastructure" && (
                    <motion.div
                      key="infratab"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Server size={12} className="text-cyan-400" />
                        <span>Self-Healing Edge Routers</span>
                      </span>

                      {/* Stack Nodes visualization */}
                      <div className="grid grid-cols-3 gap-1.5">
                        <div className="p-1.5 rounded bg-white/5 border border-white/5 text-center">
                          <span className="block text-[8px] text-slate-500 font-mono">NODE A</span>
                          <span className="text-[10px] font-semibold text-emerald-400">99.98%</span>
                        </div>
                        <div className="p-1.5 rounded bg-white/5 border border-white/5 text-center">
                          <span className="block text-[8px] text-slate-500 font-mono">NODE B</span>
                          <span className="text-[10px] font-semibold text-emerald-400">99.99%</span>
                        </div>
                        <div className="p-1.5 rounded bg-white/5 border border-white/5 text-center font-semibold">
                          <span className="block text-[8px] text-slate-500 font-mono">NODE C</span>
                          <span className="text-[10px] text-emerald-400">100%</span>
                        </div>
                      </div>

                      <div className="text-[9px] font-mono text-slate-500 leading-snug">
                        ⚡ Global CDN Latency: <strong className="text-white">12ms</strong> <br />
                        🔑 Auth security rules: <strong className="text-emerald-400">Active (SOC2 compliant)</strong>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Simulated live status list at bottom */}
                <div className="mt-4 pt-2 border-t border-white/5 space-y-1">
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Process Monitors</span>
                  <div className="grid grid-cols-3 gap-2">
                    {METRICS_MOCK.map((metric, i) => (
                      <div key={i} className="text-[10px] flex flex-col">
                        <span className="text-slate-400 font-medium truncate">{metric.item}</span>
                        <div className="flex items-center justify-between text-[9px] text-slate-500">
                          <span>{metric.state}</span>
                          <span className="text-emerald-400">{metric.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small floating badges of visual quality */}
          <div className="hidden md:flex absolute -bottom-6 -left-6 bg-white/90 backdrop-blur border border-slate-100 p-3 rounded-2xl shadow-xl items-center gap-3 pointer-events-none">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle size={16} />
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 font-semibold uppercase">Velocity</span>
              <span className="text-xs font-bold text-slate-800">100% On-Time Delivery</span>
            </div>
          </div>
 
          <div className="hidden md:flex absolute -top-6 -right-6 bg-white/90 backdrop-blur border border-slate-100 p-3 rounded-2xl shadow-xl items-center gap-3 pointer-events-none">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Smartphone size={16} />
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 font-semibold uppercase">Coverage</span>
              <span className="text-xs font-bold text-slate-800">Multiplatform ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
