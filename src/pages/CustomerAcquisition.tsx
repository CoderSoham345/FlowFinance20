import React, { useState } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Calculator, Sparkles, TrendingUp, DollarSign, HelpCircle } from "lucide-react";
import { useApp } from "../components/AppContext";

export default function CustomerAcquisition() {
  const { addNotification } = useApp();
  const [budget, setBudget] = useState(25000); // Default ₹25,000 marketing expense
  const [cpc, setCPC] = useState(45);          // Default Cost Per Click is ₹45
  const [convRate, setConvRate] = useState(6.5); // Default traffic-to-trial conversion rate is 6.5%

  // Calculations
  const estimatedClicks = Math.round(budget / cpc);
  const estimatedLeads = Math.round((estimatedClicks * convRate) / 100);
  const cac = estimatedLeads > 0 ? Math.round(budget / estimatedLeads) : 0;
  
  // ARPU baseline (₹1,499 / Month * 12 months = ₹17,988 annual value per business customer)
  const cohortLtv = 17988;
  const estimatedArrValue = estimatedLeads * cohortLtv;
  const roiMultiplier = budget > 0 ? parseFloat((estimatedArrValue / budget).toFixed(1)) : 0;

  const handleRecalculate = (e: React.FormEvent) => {
    e.preventDefault();
    addNotification(`Acquisition ROI model calculated: LTV ROI of ${roiMultiplier}x`);
  };

  const channelComparison = [
    { name: "Organic SEO", conversions: 4.8, CAC: 950 },
    { name: "Student Ambassador", conversions: 8.4, CAC: 4000 },
    { name: "Outbound Lead Gen", conversions: 5.2, CAC: 8500 },
    { name: "Paid Marketing", conversions: 2.1, CAC: 38000 }
  ];

  return (
    <div className="space-y-8 font-sans">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-display tracking-tight">Customer Acquisition Modeling</h2>
        <p className="text-xs text-slate-500">
          Interactive CAC projections, marketing ROI simulators, and performance channel statistics.
        </p>
      </div>

      {/* Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Modeler Inputs Card */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-5">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-slate-850 dark:text-white font-display">Acquisition Cost Modeler</h3>
            <span className="text-[10px] bg-blue-500/10 text-blue-500 px-2.5 py-0.5 rounded-full font-mono font-bold">INR bounds</span>
          </div>

          <form onSubmit={handleRecalculate} className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs text-slate-600 dark:text-slate-400">
            <div className="space-y-1.5">
              <label className="font-bold uppercase text-[9px] tracking-wider text-slate-400 font-mono">Monthly Budget (INR)</label>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent px-3 py-2 text-slate-800 dark:text-slate-200 focus:outline-[#0a84ff]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold uppercase text-[9px] tracking-wider text-slate-400 font-mono">Cost Per Click (₹)</label>
              <input
                type="number"
                value={cpc}
                onChange={(e) => setCPC(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent px-3 py-2 text-slate-800 dark:text-slate-200 focus:outline-[#0a84ff]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold uppercase text-[9px] tracking-wider text-slate-400 font-mono">Conversion Rate (%)</label>
              <input
                type="number"
                step="0.1"
                value={convRate}
                onChange={(e) => setConvRate(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent px-3 py-2 text-slate-800 dark:text-slate-200 focus:outline-[#0a84ff]"
              />
            </div>
          </form>

          {/* Quick Sliders */}
          <div className="space-y-4 pt-3.5 border-t border-slate-100 dark:border-slate-800">
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono text-slate-400 font-bold">
                <span>Budget Slider</span>
                <span className="text-slate-700 dark:text-slate-300">₹{budget.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="500000"
                step="5000"
                value={budget}
                onChange={(e) => {
                  setBudget(Number(e.target.value));
                  addNotification(`Interactive budget simulated at ₹${Number(e.target.value).toLocaleString()}`);
                }}
                className="w-full h-1.5 rounded bg-slate-100 dark:bg-slate-850 cursor-pointer accent-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Calculated Results Card */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center space-x-1 font-mono text-[10px] font-bold uppercase text-blue-500 bg-blue-500/5 px-2.5 py-1 rounded">
              <TrendingUp className="h-4 w-4" />
              <span>Investment Returns</span>
            </span>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block font-mono">Calculated CAC</span>
                <span className="text-xl font-bold text-slate-900 dark:text-white font-sans">₹{cac.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block font-mono">Resulting Leads</span>
                <span className="text-xl font-bold text-slate-900 dark:text-white font-sans">{estimatedLeads} Trialists</span>
              </div>
            </div>

            <div className="border-t border-slate-150 dark:border-slate-850 pt-3.5">
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block font-mono">Estimated Annual ROI Yield</span>
              <span className="text-2xl font-bold text-blue-500 font-display">₹{estimatedArrValue.toLocaleString()} ({roiMultiplier}x Yield)</span>
            </div>
          </div>

          <p className="text-[10px] text-slate-400 leading-relaxed font-sans pt-4 mt-5 border-t border-slate-100 dark:border-slate-850">
            *Based on standard LTV parameters of ₹17,988 per business user. Actual conversions can oscillate by region.
          </p>
        </div>

      </div>

      {/* Comparison segment graphics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Recharts chart */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
          <div>
            <h3 className="text-sm font-bold text-slate-850 dark:text-white font-display">Comparative Segment Conversion Rates</h3>
            <p className="text-[10px] text-slate-400 font-sans">Traffic to Trial conversions per acquisition channel (%)</p>
          </div>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channelComparison} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.08)" />
                <XAxis dataKey="name" tick={{ fontSize: 9, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 9, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ fontSize: "11px", background: "#1e293b", border: "none", borderRadius: "8px", color: "#fff" }} />
                <Bar dataKey="conversions" fill="#0a84ff" radius={[4, 4, 0, 0]} name="Conversions (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detailed channels bullet items */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
          <h3 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider font-mono">Segment ROI Analysis</h3>
          
          <div className="space-y-4 text-xs font-medium text-slate-600 dark:text-slate-400">
            <div className="rounded-xl border border-slate-100 p-3.5 bg-slate-50/20 dark:border-slate-800/80">
              <div className="flex justify-between font-bold text-slate-800 dark:text-white">
                <span>1. Organic Content Nodes</span>
                <span className="text-emerald-500 font-bold font-mono">₹950 CAC</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                By offering free estimation tools, we capture high-intent seed founders with continuous SEO organic value loops.
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 p-3.5 bg-slate-50/20 dark:border-slate-800/80">
              <div className="flex justify-between font-bold text-slate-800 dark:text-white">
                <span>2. CA Referral program</span>
                <span className="text-emerald-500 font-bold font-mono">₹12,000 CAC</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                CAs fetch high LTV clients (₹4.2L/yr). This results in a massive 35.0x economics multiplier, justifying onboarding costs.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
