import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../components/AppContext";
import { 
  Compass, BarChart3, Users, Network, TrendingUp, Sparkles, 
  ArrowRight, Landmark, Calendar, CheckCircle2, Bookmark, ExternalLink 
} from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  const { addBooking, addNotification, currentUser } = useApp();
  const navigate = useNavigate();
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", note: "" });

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      addBooking(formData.name, formData.company || "Self", formData.email, "2026-06-25", "10:00 AM");
      setShowDemoModal(false);
      setFormData({ name: "", email: "", company: "", note: "" });
      alert("Consultation Demo confirmed successfully! Checked your simulated mail.");
    }
  };

  const overviewCards = [
    {
      title: "Market Opportunity",
      metric: "63 Million MSMEs",
      desc: "An underserved credit gap of over $230B due to legacy invoice reconciliation structures. FlowFinance automates this.",
      color: "border-blue-500 bg-blue-500/5",
      icon: Landmark
    },
    {
      title: "GTM Growth Strategy",
      metric: "Multi-Hub Alliance",
      desc: "Scaling via double-sided Chartered Accountant systems and local student university ambassador cells globally.",
      color: "border-emerald-500 bg-emerald-500/5",
      icon: Compass
    },
    {
      title: "Customer Acquisition",
      metric: "PLG Loop Catalyst",
      desc: "Acquiring users with free micro-tools (runway index, GST trackers) and converting to paid subscriptions automatically.",
      color: "border-indigo-500 bg-indigo-500/5",
      icon: BarChart3
    },
    {
      title: "Strategic Partnerships",
      metric: "Platform Integrations",
      desc: "Direct read-only statement sharing integrations with national banking APIs (ICICI, HDFC) and incubators.",
      color: "border-amber-500 bg-amber-500/5",
      icon: Network
    },
    {
      title: "Revenue Expansion",
      metric: "Upsells & Forecasting",
      desc: "Transitioning users from basic accounting ledgers into premium forecasting scenario panels and portfolio metrics.",
      color: "border-rose-500 bg-rose-500/5",
      icon: TrendingUp
    },
    {
      title: "Ambassador Ecosystem",
      metric: "Tier-1 Academic Cells",
      desc: "Placing active student leaders in premium management cells with bonuses up to ₹11,000 for local traction.",
      color: "border-purple-500 bg-purple-500/5",
      icon: Users
    }
  ];

  return (
    <div className="space-y-12">
      
      {/* Strategic consulting Hero Section */}
      <section className="relative rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16 border border-slate-200 bg-slate-900 text-white dark:border-slate-800 transition-colors duration-200 shadow-xl">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 text-xs font-semibold text-blue-400 font-mono"
          >
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>Strategic Investor Blueprint 2026</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-[1.05]"
          >
            FlowFinance Growth Blueprint
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed"
          >
            A comprehensive GTM roadmap, collaborative partnership interface, campus ambassador engine, and real-time revenue intelligence platform designed to scale FlowFinance across India.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-4.5"
          >
            <Link
              to="/gtm-strategy"
              className="rounded-xl bg-blue-600 hover:bg-blue-500 px-5.5 py-3 text-xs font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-150 flex items-center space-x-2"
            >
              <span>Explore Strategy</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <Link
              to="/dashboard"
              className="rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 px-5.5 py-3 text-xs font-bold text-slate-200 transition-all flex items-center space-x-2"
            >
              <span>View CFO Dashboard</span>
            </Link>

            <Link
              to="/campus-ambassador"
              className="rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 px-5.5 py-3 text-xs font-bold text-slate-300 hover:text-white transition-all flex items-center space-x-2"
            >
              <span>Join Ambassador Portal</span>
            </Link>

            <button
              onClick={() => setShowDemoModal(true)}
              className="rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5.5 py-3 text-xs font-bold text-white transition-all flex items-center space-x-2 cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Strategy Demo</span>
            </button>
          </motion.div>
        </div>

        {/* Live Market Counter Indicators */}
        <div className="mt-16 pt-10 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-center">
          <div className="space-y-1">
            <span className="block text-2xl md:text-4xl font-bold font-display text-blue-400">63 Million+</span>
            <span className="block text-[10px] md:text-xs text-slate-400 font-semibold uppercase tracking-wider">Indian MSMEs</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl md:text-4xl font-bold font-display text-emerald-400">100K+</span>
            <span className="block text-[10px] md:text-xs text-slate-400 font-semibold uppercase tracking-wider">Active Tech Startups</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl md:text-4xl font-bold font-display text-indigo-400">₹500 Crore+</span>
            <span className="block text-[10px] md:text-xs text-slate-400 font-semibold uppercase tracking-wider">Market SAM Reach</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl md:text-4xl font-bold font-display text-purple-400">98% Accuracy</span>
            <span className="block text-[10px] md:text-xs text-slate-400 font-semibold uppercase tracking-wider">AI Treasury Forecasting</span>
          </div>
        </div>
      </section>

      {/* Executive Summary Grid Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white font-display">
            Executive Summary Blueprint
          </h2>
          <p className="text-xs text-slate-500 font-sans mt-0.5">
            Six pillars constructing FlowFinance's enterprise expansion ecosystem. Click a pillar card to access strategic sections directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {overviewCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className={`flex flex-col justify-between rounded-2xl border p-5 shadow-sm transition-all duration-200 hover:scale-[1.015] hover:shadow-md ${card.color} dark:bg-slate-900/40`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400">PILLAR 0{idx + 1}</span>
                    <div className="rounded-lg bg-slate-100 p-2 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-800 dark:text-white font-display tracking-tight">
                      {card.title}
                    </h3>
                    <div className="text-[11px] font-bold text-blue-500 font-mono mt-1">
                      {card.metric}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-2.5 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-150 dark:border-slate-850 pt-3.5 flex items-center justify-between text-[11px] font-semibold text-blue-500 hover:underline cursor-pointer">
                  <span>View Details</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Structured Consulting Narrative Panel */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 transition-colors duration-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-4.5">
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest font-mono">
              The Strategic Paradigm
            </span>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white font-display leading-tight">
              Fusing Historical Ledger Audits With Dynamic Runway Simulation
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
              For decades, accounting tools like Zoho and Tally operated on **historical registries** — file tax forms 30 days after transactions finalize. However, premature business failure stems from **forward runway exhaustion**, not lack of tax filing. 
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
              FlowFinance connects directly with Indian banking APIs to fetch raw transactions instantly. It processes them through LLM categorization models to instantly construct **forward liquidity scenarios**. Founders gain complete visibility of cash flow peaks and capital requirements three months *before* they manifest.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center space-x-1.5 text-xs text-slate-700 dark:text-slate-300 font-semibold font-sans">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>RBI compliant API channels</span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-slate-700 dark:text-slate-300 font-semibold font-sans">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Live multi-scenario sandbox</span>
              </div>
            </div>
          </div>

          {/* Quick Stats sidebar info */}
          <div className="lg:col-span-4 rounded-xl bg-slate-50 p-5 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 flex flex-col justify-between">
            <div className="space-y-4 text-xs">
              <div className="font-bold text-slate-700 dark:text-slate-300 font-mono tracking-wider uppercase text-[10px]">
                Strategic Expected Impact
              </div>
              <div className="space-y-3.5">
                <div className="flex justify-between border-b border-slate-200/50 pb-2">
                  <span className="text-slate-500">Acquisition CAC target:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200 font-mono text-emerald-600">₹900 (Industry low)</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/50 pb-2">
                  <span className="text-slate-500">Churn prevention improvement:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200 font-mono text-blue-500">32% YoY uptick</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/50 pb-2">
                  <span className="text-slate-500">Expected Ambassador reach:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200 font-mono">120+ top tier campuses</span>
                </div>
              </div>
            </div>
            
            <Link
              to="/ai-growth-advisor"
              className="mt-6 w-full text-center rounded-lg bg-blue-600 hover:bg-blue-500 py-2.5 text-xs font-bold text-white transition-all font-sans"
            >
              Consult AI Advisor Now
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Booking Modal overlay */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white font-display">Schedule CFO Strategy Consultation</h3>
                <p className="text-xs text-slate-500 font-sans mt-1">
                  Book a strategic demo of FlowFinance's forecasting capabilities with our team.
                </p>
              </div>
              <button 
                onClick={() => setShowDemoModal(false)}
                className="text-slate-400 hover:text-slate-600 text-lg font-mono"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleDemoSubmit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-600 dark:text-slate-400">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Siddharth Dev"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent px-3 py-2 text-slate-800 dark:text-slate-200"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-600 dark:text-slate-400">Business Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. sid@nextcorp.org"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent px-3 py-2 text-slate-800 dark:text-slate-200"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-600 dark:text-slate-400">Company Name</label>
                <input 
                  type="text"
                  placeholder="e.g. NextGen Inc."
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent px-3 py-2 text-slate-800 dark:text-slate-200"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-600 dark:text-slate-400">Strategic notes (optional)</label>
                <textarea 
                  rows={2}
                  placeholder="e.g. We want to investigate runway dashboards."
                  value={formData.note}
                  onChange={(e) => setFormData({...formData, note: e.target.value})}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent px-3 py-2 text-slate-800 dark:text-slate-200"
                />
              </div>

              <button 
                type="submit"
                className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 py-3 text-xs font-bold text-white shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
              >
                Schedule Simulated Consultation Slot
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
