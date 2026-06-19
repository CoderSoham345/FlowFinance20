import React, { useState } from "react";
import { useApp } from "../components/AppContext";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Sparkles, HelpCircle, ArrowUpRight, DollarSign } from "lucide-react";

export default function RevenueExpansion() {
  const { addNotification } = useApp();
  const [baseClients, setBaseClients] = useState(1250); // Starting business license count
  const [arpuPr, setArpuPr] = useState(1499);            // Monthly pricing: ₹1,499 base
  const [upsellPr, setUpsellPr] = useState(240);          // Upsell forecasting addon fee (average spend)

  // Calculations for ARR Runrates
  const monthlyBaseRev = baseClients * arpuPr;
  const monthlyUpsellRev = baseClients * upsellPr;
  const totalMonthlyRev = monthlyBaseRev + monthlyUpsellRev;
  const totalAnnualValue = totalMonthlyRev * 12;

  // Recharts simulation data
  const seriesData = [
    { year: "2024", ARR: 9800000 },
    { year: "2025", ARR: 24000000 },
    { year: "2026 (Modelled)", ARR: totalAnnualValue },
    { year: "2027 (Stretch)", ARR: totalAnnualValue * 1.5 },
  ];

  return (
    <div className="space-y-8 font-sans">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-display tracking-tight">Revenue Expansion Modeling</h2>
        <p className="text-xs text-slate-500">
          Visualizing ARR multipliers, upsell penetration, forecasting packages, and simulated performance metrics.
        </p>
      </div>

      {/* Main Simulation modulators */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sliders Inputs */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-5">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-slate-850 dark:text-white font-display">ARR Runrate Parameters</h3>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-600 px-2.5 py-0.5 rounded-full font-bold font-mono">Live Sync</span>
          </div>

          <div className="space-y-4 text-xs font-semibold">
            
            {/* Slider 1: Active Business users */}
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono font-bold text-slate-400">
                <span>Active Premium Business licenses</span>
                <span className="text-slate-700 dark:text-slate-300">{baseClients.toLocaleString()} Clients</span>
              </div>
              <input
                type="range"
                min="200"
                max="5000"
                step="50"
                value={baseClients}
                onChange={(e) => {
                  setBaseClients(Number(e.target.value));
                  addNotification(`Base clients scaled to ${Number(e.target.value)}`);
                }}
                className="w-full h-1.5 rounded bg-slate-100 dark:bg-slate-850 cursor-pointer accent-blue-500"
              />
            </div>

            {/* Slider 2: Monthly base subscription */}
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono font-bold text-slate-400">
                <span>Monthly Base Licensing Fee (INR)</span>
                <span className="text-slate-700 dark:text-slate-300">₹{arpuPr.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="999"
                max="4999"
                step="100"
                value={arpuPr}
                onChange={(e) => {
                  setArpuPr(Number(e.target.value));
                  addNotification(`Base subscription level adjusted to ₹${Number(e.target.value)}`);
                }}
                className="w-full h-1.5 rounded bg-slate-100 dark:bg-slate-850 cursor-pointer accent-blue-500"
              />
            </div>

            {/* Slider 3: Upsell add-on service fee */}
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono font-bold text-slate-400">
                <span>Average Upsell / Addon Spend (INR)</span>
                <span className="text-slate-700 dark:text-slate-300">₹{upsellPr.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={upsellPr}
                onChange={(e) => {
                  setUpsellPr(Number(e.target.value));
                  addNotification(`Strategic upsell index set to ₹${Number(e.target.value)}`);
                }}
                className="w-full h-1.5 rounded bg-slate-100 dark:bg-slate-850 cursor-pointer accent-blue-500"
              />
            </div>

          </div>
        </div>

        {/* Calculated Cash Outputs Right */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center space-x-1 font-mono text-[10px] font-bold uppercase text-emerald-500 bg-emerald-500/5 px-2.5 py-1 rounded">
              <Sparkles className="h-4 w-4 text-emerald-500" />
              <span>SaaS Revenue Projections</span>
            </span>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block font-mono">Monthly Runrate</span>
                <span className="text-xl font-bold text-slate-900 dark:text-white font-sans">₹{totalMonthlyRev.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block font-mono">Average LTV Yield</span>
                <span className="text-xl font-bold text-slate-900 dark:text-white font-sans">₹17,988 per firm</span>
              </div>
            </div>

            <div className="border-t border-slate-150 dark:border-slate-850 pt-4 mt-2">
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block font-mono font-semibold">Total Modelled ARR (Annual Runrate)</span>
              <span className="text-2xl font-bold text-blue-500 font-display">₹{totalAnnualValue.toLocaleString()}</span>
            </div>
          </div>

          <p className="text-[10px] text-slate-400 font-sans leading-normal pt-4 mt-6 border-t border-slate-100 dark:border-slate-850">
            *Licence conversions estimate a standard CAC ceiling of ₹5,410. Increasing upsell features by ₹150 boosts ARR runrate by over 11% without client overhead.
          </p>
        </div>

      </div>

      {/* Trajectory Area Graphic */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
        <div>
          <h3 className="text-sm font-bold text-slate-850 dark:text-white font-display">ARR Runrate expansion timeline</h3>
          <p className="text-[10px] text-slate-400 font-sans">Compounded Annual ARR trajectory scaled against strategic milestones (INR)</p>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={seriesData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorARRScale" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.25}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.08)" />
              <XAxis dataKey="year" tick={{ fontSize: 9, fill: "#94a3b8", fontFamily: "monospace" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 9, fill: "#94a3b8", fontFamily: "monospace" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: "11px", background: "#1e293b", border: "none", borderRadius: "8px", color: "#fff" }} />
              <Area type="monotone" dataKey="ARR" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorARRScale)" name="Expected ARR (INR)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
