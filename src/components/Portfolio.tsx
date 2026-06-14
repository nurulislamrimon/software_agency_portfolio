import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, CheckSquare, Target, Laptop, BarChart2, MessageSquare, Compass, PhoneCall } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Live simulation states for FinTech interactive chart
  const [financeSelectedYear, setFinanceSelectedYear] = useState<"2023" | "2024" | "2025">("2025");
  // Live simulation states for AI Chat
  const [aiChatMessages, setAiChatMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([
    { sender: "bot", text: "Hello! I am the automated support assistant. How can I resolve your logistics payload today?" }
  ]);
  const [aiInputText, setAiInputText] = useState("");
  const [cellularOffline, setCellularOffline] = useState(false);

  const handleSendAiMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiInputText.trim()) return;

    const userMsg = aiInputText;
    setAiChatMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setAiInputText("");

    setTimeout(() => {
      // Intelligent mock replies
      let reply = "I have recognized your token. Re-routing cargo cache logs... Resolved! Refund credited to balance.";
      if (userMsg.toLowerCase().includes("status") || userMsg.toLowerCase().includes("track")) {
        reply = "Logistics state: Dispatch active, Node-G package scheduled for Mon 10:00 AM. Driver matched.";
      } else if (userMsg.toLowerCase().includes("hello") || userMsg.toLowerCase().includes("hi")) {
        reply = "Hi there! Feel free to ask about return clearances, custom schedules, or route diagnostics.";
      }
      setAiChatMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 900);
  };

  const categories = ["All", "Web Application", "AI Automation", "Mobile App Development", "UI/UX & Brand Design"];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === "All") return true;
    return proj.category.toLowerCase().includes(filter.toLowerCase().substring(0, 10));
  });

  return (
    <section id="portfolio" className="py-24 bg-slate-50 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Headings */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-3 max-w-xl text-left">
            <span className="sleek-badge">
              Featured Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 tracking-tight leading-tight">
              Crafting Outstanding Operations for Top Brands
            </h2>
          </div>

          {/* Filter badging row */}
          <div className="flex flex-wrap gap-1.5 bg-slate-200/50 p-1 rounded-2xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium cursor-pointer transition ${
                  filter === cat
                    ? "bg-white text-blue-600 shadow-sm font-bold"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, index) => {
              // Custom color mapping for glowing cards
              const themeColor =
                proj.colorTheme === "indigo"
                  ? "from-indigo-500/10 to-indigo-600/5 hover:border-indigo-400"
                  : proj.colorTheme === "emerald"
                  ? "from-emerald-500/10 to-emerald-600/5 hover:border-emerald-400"
                  : proj.colorTheme === "cyan"
                  ? "from-cyan-500/10 to-cyan-600/5 hover:border-cyan-400"
                  : "from-violet-500/10 to-violet-600/5 hover:border-violet-400";

              return (
                <motion.div
                  key={proj.id}
                  layoutId={`portfolio-card-container-${proj.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => setSelectedProject(proj)}
                  className={`group block p-6 rounded-3xl bg-white border border-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                >
                  {/* Glowing background gradient block */}
                  <div className={`absolute inset-0 bg-gradient-to-tr ${themeColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10`} />

                  {/* Card category flag */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                      {proj.category}
                    </span>
                    <span className="text-[10px] text-slate-400 bg-slate-100/80 px-2 py-0.5 rounded-full font-mono">
                      {proj.client}
                    </span>
                  </div>

                  {/* Title & brief */}
                  <div className="mt-4 space-y-2 text-left">
                    <h3 className="text-xl font-bold text-slate-950 font-display group-hover:text-blue-600 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {proj.description}
                    </p>
                  </div>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-100/80 mt-6 md:mt-8">
                    {proj.metrics.slice(0, 3).map((metric) => (
                      <div key={metric.label}>
                        <span className="block text-lg font-black text-slate-900 font-display tracking-tight">
                          {metric.value}
                        </span>
                        <span className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies row & interaction cue */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-6 mt-6 border-t border-slate-100/80">
                    <div className="flex flex-wrap gap-1">
                      {proj.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[9px] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                      {proj.tags.length > 3 && (
                        <span className="text-[9px] text-slate-400 font-bold px-1 mt-0.5">
                          +{proj.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Explore Case Study</span>
                      <span>→</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dynamic Empty State if filter does not match anything */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center text-slate-400 bg-white border border-dashed rounded-3xl">
            <Search className="mx-auto text-slate-300 mb-2" />
            <p className="text-sm">No specific works fit the chosen tag segment currently.</p>
          </div>
        )}
      </div>

      {/* Case Study Details Popup (AnimatePresence) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              layoutId={`portfolio-card-container-${selectedProject.id}`}
              className="relative w-full max-w-4xl max-h-[92vh] md:max-h-[750px] overflow-y-auto md:overflow-hidden rounded-[24px] bg-white shadow-2xl border border-slate-100 flex flex-col md:flex-row"
            >
              {/* Left Column: Interactive Simulation Mockup */}
              <div className="w-full md:w-5/12 bg-slate-950 p-6 md:p-8 text-white flex flex-col justify-between relative overflow-hidden shrink-0">
                {/* Glowing decorative effects */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Interactive Sandbox</span>
                    <h3 className="text-lg font-bold font-display text-white mt-1">Live Software Simulator</h3>
                    <p className="text-[10px] text-slate-400 leading-relaxed mt-0.5">Explore a real interactive replica representing the custom solutions deployed.</p>
                  </div>

                  {/* ACTIVE SIMULATOR RENDERING BASED ON PROJECT DESIGN */}
                  <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 min-h-[260px] flex flex-col justify-between">
                    {/* DASHBOARD TYPE: Apex FinTech or Design Overhaul */}
                    {selectedProject.mockupType === "dashboard" && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-white/5 pb-2">
                          <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                            <BarChart2 size={12} className="text-indigo-400" />
                            <span>Apex-Engine core.srv</span>
                          </span>
                          <div className="flex rounded-md overflow-hidden bg-slate-900 p-0.5 border border-white/5">
                            {(["2023", "2024", "2025"] as const).map((yr) => (
                              <button
                                key={yr}
                                type="button"
                                onClick={() => setFinanceSelectedYear(yr)}
                                className={`px-1.5 py-0.5 text-[8px] font-bold rounded ${financeSelectedYear === yr ? "bg-indigo-500 text-white" : "text-slate-400"}`}
                              >
                                {yr}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Chart Simulation */}
                        <div className="h-24 flex items-end justify-between gap-1.5 pt-2">
                          {financeSelectedYear === "2023" && (
                            <>
                              <div className="w-full bg-indigo-500/20 h-8 rounded-sm text-center text-[7px] text-slate-400">Q1</div>
                              <div className="w-full bg-indigo-500/30 h-12 rounded-sm text-center text-[7px] text-slate-400">Q2</div>
                              <div className="w-full bg-indigo-500/50 h-16 rounded-sm text-center text-[7px] text-slate-400">Q3</div>
                              <div className="w-full bg-indigo-500 h-20 rounded-sm text-center text-[7px] text-slate-400">Q4</div>
                            </>
                          )}
                          {financeSelectedYear === "2024" && (
                            <>
                              <div className="w-full bg-indigo-500/40 h-14 rounded-sm text-center text-[7px] text-zinc-400">Q1</div>
                              <div className="w-full bg-indigo-500/60 h-16 rounded-sm text-center text-[7px] text-zinc-400">Q2</div>
                              <div className="w-full bg-indigo-500/80 h-24 rounded-sm text-center text-[7px] text-zinc-400">Q3</div>
                              <div className="w-full bg-indigo-500 h-12 rounded-sm text-center text-[7px] text-zinc-400 font-bold text-white">Q4</div>
                            </>
                          )}
                          {financeSelectedYear === "2025" && (
                            <>
                              <div className="w-full bg-indigo-500/60 h-20 rounded-sm text-center text-[7px]">Q1</div>
                              <div className="w-full bg-indigo-500/70 h-22 rounded-sm text-center text-[7px]">Q2</div>
                              <div className="w-full bg-indigo-500/90 h-24 rounded-sm text-center text-[7px]">Q3</div>
                              <div className="w-full bg-emerald-500 h-28 rounded-sm text-center text-[7px] font-bold text-white animate-pulse">Q4</div>
                            </>
                          )}
                        </div>

                        <div className="text-[9px] text-slate-500 font-mono text-center flex justify-between">
                          <span>Volume index: {financeSelectedYear === "2025" ? "$2.4B" : "$1.1B"}</span>
                          <span className={financeSelectedYear === "2025" ? "text-emerald-400" : "text-indigo-400"}>
                            {financeSelectedYear === "2025" ? "LATENCY: 140ms" : "LATENCY: 310ms"}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* AI CHAT TYPE: Nova AI or Custom automation */}
                    {selectedProject.mockupType === "ai-chat" && (
                      <div className="flex flex-col h-full justify-between gap-2.5">
                        <div className="text-[9px] font-bold text-emerald-400 flex items-center justify-between border-b border-white/5 pb-1">
                          <span>COGNITIVE DIALOGUE AGENT</span>
                          <span>ACTIVE WORKFLOW</span>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 space-y-1.5 overflow-y-auto max-h-[140px] pr-1.5 text-[9px] scrollbar-thin">
                          {aiChatMessages.map((msg, idx) => (
                            <div
                              key={idx}
                              className={`p-2 rounded-xl border ${
                                msg.sender === "user"
                                  ? "bg-slate-900 border-slate-800 text-slate-300 ml-6 text-right"
                                  : "bg-blue-950/30 border-blue-900/30 text-blue-200 mr-6"
                              }`}
                            >
                              {msg.text}
                            </div>
                          ))}
                        </div>

                        {/* Interactive presets footer */}
                        <div className="space-y-1.5">
                          <span className="block text-[8px] text-slate-500 uppercase tracking-widest font-black">Pre-fitted Presets</span>
                          <div className="flex gap-1">
                            <button
                              type="button"
                              onClick={() => setAiInputText("Verify status order #420")}
                              className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-[8px] hover:bg-white/10"
                            >
                              Check order
                            </button>
                            <button
                              type="button"
                              onClick={() => setAiInputText("Request replacement refund")}
                              className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-[8px] hover:bg-white/10"
                            >
                              Request refund
                            </button>
                          </div>

                          <form onSubmit={handleSendAiMessage} className="flex gap-1 pt-1">
                            <input
                              type="text"
                              value={aiInputText}
                              onChange={(e) => setAiInputText(e.target.value)}
                              placeholder="Type query tags..."
                              className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-[10px] outline-none text-white focus:border-blue-500"
                            />
                            <button
                              type="submit"
                              className="px-2.5 py-1 bg-blue-500 hover:bg-blue-600 rounded-lg text-[10px] font-bold"
                            >
                              Send
                            </button>
                          </form>
                        </div>
                      </div>
                    )}

                    {/* MOBILE SIMULATOR TYPE: Velo logistics */}
                    {selectedProject.mockupType === "mobile" && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] font-mono">
                          <span className="flex items-center gap-1">
                            <Compass size={12} className="text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
                            <span>Velo Mobile Client v1.3</span>
                          </span>
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        </div>

                        {/* Styled Mobile interface mapping */}
                        <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2.5">
                          <div className="flex justify-between items-center text-[9px]">
                            <span className="text-slate-400">COURIER: Alex Carter</span>
                            <span className={cellularOffline ? "text-amber-400 font-bold" : "text-slate-400"}>
                              {cellularOffline ? "📶 OFFLINE LOGS" : "BATTERY: 94%"}
                            </span>
                          </div>

                          <div className="p-2 bg-slate-950 rounded-lg border border-white/5 space-y-1">
                            <span className="block text-[8px] text-slate-500 font-bold">ROUTE TARGET</span>
                            <div className="flex justify-between items-center text-[10px]">
                              <span className="text-white">Highrise Suite 42-C</span>
                              <span className={cellularOffline ? "text-amber-400 font-bold" : "text-cyan-400 font-bold"}>
                                {cellularOffline ? "Offline Syncing" : "ETA: 4m"}
                              </span>
                            </div>
                          </div>

                          {/* Interactive maps mock selector */}
                          <div className={`h-[45px] rounded-lg relative flex items-center justify-center overflow-hidden transition-colors duration-300 ${cellularOffline ? "bg-amber-950/20 border border-amber-900/40" : "bg-indigo-950/20 border border-indigo-900/40"}`}>
                            <div className="absolute inset-x-0 h-0.5 bg-white/10 top-1/2" />
                            <div className="absolute inset-y-0 w-0.5 bg-white/10 left-1/3" />
                            {!cellularOffline ? (
                              <>
                                <div className="w-3.5 h-3.5 bg-cyan-400 border border-white rounded-full animate-ping absolute top-1/3 left-1/3" />
                                <div className="w-2.5 h-2.5 bg-cyan-400 border border-white rounded-full absolute top-1/3 left-1/3" />
                                <span className="text-[8px] text-slate-500 font-sans tracking-wide absolute bottom-1 right-2">GPS coverage OK</span>
                              </>
                            ) : (
                              <>
                                <div className="w-2.5 h-2.5 bg-amber-500 border border-white rounded-sm absolute top-1/3 left-1/3 animate-pulse" />
                                <span className="text-[8px] text-amber-500 font-sans tracking-wide font-medium absolute bottom-1 right-2">Local SQLite Backup Active</span>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="flex justify-center gap-2">
                          <button
                            type="button"
                            onClick={() => setCellularOffline(!cellularOffline)}
                            className={`px-3 py-1.5 rounded text-[8px] font-bold transition duration-200 border ${
                              cellularOffline
                                ? "bg-amber-600/10 border-amber-500/20 text-amber-300 hover:bg-amber-600/20"
                                : "bg-white/5 border-white/5 text-slate-300 hover:bg-white/10"
                            }`}
                          >
                            {cellularOffline ? "Reconnect Cellular (Sync Data)" : "Disconnect Cellular (Test Fallback)"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer specs inside left core */}
                <div className="relative z-10 pt-6 border-t border-slate-800 text-[10px] text-slate-500 flex items-center justify-between">
                  <span>DEPLOYED VIA CLOUD EDGE</span>
                  <span>SSL SECURE</span>
                </div>
              </div>

              {/* Right Column: Narrative details of the Case Study */}
              <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-between overflow-y-visible md:overflow-y-auto">
                <div className="space-y-6">
                  {/* Category badging */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Case Study Context
                    </span>
                    <button
                      id="close-case-study-btn"
                      onClick={() => setSelectedProject(null)}
                      className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* Title & Client details */}
                  <div className="text-left space-y-1.5">
                    <h3 className="text-2xl font-bold text-slate-950 font-display">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <span>Client Partner:</span>
                      <strong className="text-slate-800">{selectedProject.client}</strong>
                      <span className="text-slate-300">•</span>
                      <span>Deliverable:</span>
                      <strong className="text-slate-800">{selectedProject.category}</strong>
                    </div>
                  </div>

                  {/* Narrative details challenge/solution */}
                  <div className="space-y-4 text-left text-xs text-slate-600">
                    <div className="space-y-1.5">
                      <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-2">
                        <Target size={14} className="text-rose-500" />
                        <span>The Commercial Challenge</span>
                      </span>
                      <p className="leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-2">
                        <Laptop size={14} className="text-blue-500" />
                        <span>Our Customized Technical Solution</span>
                      </span>
                      <p className="leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results Bullet points checklist */}
                  <div className="space-y-2.5 text-left pt-2 border-t border-slate-100">
                    <span className="block text-[11px] font-bold text-slate-900 uppercase tracking-widest">
                      Proven Business Results
                    </span>
                    <ul className="space-y-2">
                      {selectedProject.results.map((res, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2.5">
                          <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 mt-0.5 shrink-0 border border-emerald-100">
                            <CheckSquare size={12} className="stroke-[2.5]" />
                          </div>
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Stats Highlight inside case study */}
                <div className="pt-6 border-t border-slate-100 mt-6 grid grid-cols-3 gap-2">
                  {selectedProject.metrics.map((m) => (
                    <div key={m.label} className="text-left bg-slate-50 p-2 rounded-xl border border-slate-100">
                      <span className="block text-base font-black text-slate-950 font-display">
                        {m.value}
                      </span>
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
