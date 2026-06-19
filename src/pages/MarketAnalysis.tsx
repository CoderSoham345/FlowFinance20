import React, { useState } from "react";
import { AreaChart, Area, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Landmark, Briefcase, Cpu, HelpCircle, Lightbulb, ShieldCheck } from "lucide-react";
import { useApp } from "../components/AppContext";

export default function MarketAnalysis() {
  const { addNotification } = useApp();
  const [percentSOM, setPercentSOM] = useState(13); // Default 13% of SAM represents our SOM strategy

  // TAM, SAM constant baselines representing Indian market statistics in INR
  const TAM_BASE_Cr = 15000;  // ₹15,000 Cr Total Indian MSME Fintech capacity (63M firms)
  const SAM_BASE_Cr = 500;    // ₹500 Cr Target Addressable Segment (Tech Startups & Proactive CAs)
  const SOM_Cr = parseFloat(((SAM_BASE_Cr * percentSOM) / 100).toFixed(1));

  const fintechGrowthData = [
    { year: "2022", marketSizeCr: 2100 },
    { year: "2023", marketSizeCr: 3800 },
    { year: "2024", marketSizeCr: 5900 },
    { year: "2025", marketSizeCr: 9400 },
    { year: "2026 (Est)", marketSizeCr: 15000 },
  ];

  return (
    <div className="space-y-8 font-sans">
      
      {/* Page Title */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-display tracking-tight">Market Analysis & Projections</h2>
        <p className="text-xs text-slate-500">
          Indian MSME fintech sizing, AI adoption velocities, and dynamic TAM-SAM-SOM forecasts.
        </p>
      </div>

      {/* Interactive TAM SAM SOM Slider Block */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h3 className="text-base font-bold text-slate-800 dark:text-white font-display">TAM / SAM / SOM Market Modeler</h3>
            <p className="text-xs text-slate-500 font-sans mt-0.5">Adjust target segment capture rates to recalculate SOM parameters.</p>
          </div>
          <div className="mt-2 sm:mt-0 px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold rounded-full text-xs">
            Simulation active
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls */}
          <div className="lg:col-span-7 space-y-5 flex flex-col justify-center">
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold font-mono uppercase text-slate-400">
                <span>Target SOM Capture Rate</span>
                <span className="text-blue-500 font-bold text-sm">{percentSOM}% of SAM</span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                value={percentSOM}
                onChange={(e) => {
                  setPercentSOM(Number(e.target.value));
                  addNotification(`Recalculated SOM projection to: ${e.target.value}% of SAM`);
                }}
                className="w-full h-2 rounded bg-slate-100 dark:bg-slate-850 cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[9px] font-mono text-slate-400">
                <span>2% entry segment</span>
                <span>15% mid tier</span>
                <span>30% limit projection</span>
              </div>
            </div>

            <div className="pt-2 text-xs leading-relaxed text-slate-500 font-medium">
              <span className="font-bold text-slate-800 dark:text-slate-200">TAM (Total Addressable Market):</span> Representing software licensing fees from the entire **63 Million Indian MSME** sector. Estimated baseline of ₹15,000 Crore.
              <br className="mb-1" />
              <span className="font-bold text-slate-800 dark:text-slate-200">SAM (Serviceable Addressable Market):</span> Our focused initial sweet-spot of high-intent tech startups and tech-savvy bookkeeping CA firms. Baseline: ₹500 Crore.
            </div>

          </div>

          {/* Sizing Visual Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            
            <div className="rounded-xl p-4 bg-slate-50/50 dark:bg-slate-950/40 border border-slate-150 dark:border-slate-850 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block">TAM (Total Indian Market)</span>
                <span className="text-xl font-bold text-slate-800 dark:text-white font-display">₹15,000 Crore</span>
              </div>
              <span className="text-xl">🇮🇳</span>
            </div>

            <div className="rounded-xl p-4 bg-slate-50/50 dark:bg-slate-950/40 border border-slate-150 dark:border-slate-850 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block">SAM (Focused Segment Market)</span>
                <span className="text-xl font-bold text-slate-800 dark:text-white font-display">₹500 Crore</span>
              </div>
              <span className="text-xl">🚀</span>
            </div>

            <div className="rounded-xl p-4 bg-blue-500/5 dark:bg-blue-950/20 border border-blue-500/20 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-mono text-blue-400 font-bold uppercase block">Calculated SOM Target (Runrate)</span>
                <span className="text-2xl font-bold text-blue-500 font-display">₹{SOM_Cr} Crore</span>
              </div>
              <span className="text-xl">🎯</span>
            </div>

          </div>

        </div>
      </div>

      {/* Market analysis growth factors & trends charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Growth Velocity chart */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-white font-display">Indian MSME Fintech Market Growth</h3>
            <p className="text-[10px] text-slate-400 font-sans">Compounded anual growth velocity (Cr INR)</p>
          </div>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={fintechGrowthData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.08)" />
                <XAxis dataKey="year" tick={{ fontSize: 9, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 9, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ fontSize: "11px", background: "#1e293b", border: "none", borderRadius: "8px", color: "#fff" }} />
                <Area type="monotone" dataKey="marketSizeCr" stroke="#3b82f6" strokeWidth={2} fill="url(#colorGrowth)" name="Market Volume (Cr)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Dynamic Trends bullet items */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-5">
          <h3 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider font-mono">Emerging Macro Vectors</h3>
          
          <div className="space-y-4 text-xs font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
            
            <div className="flex items-start space-x-3">
              <div className="rounded bg-slate-50 p-1.5 shrink-0 text-slate-600 dark:bg-slate-850 dark:text-slate-300">
                <Cpu className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <span className="font-bold text-slate-800 dark:text-white">Generative AI adoption velocity</span>
                <p className="text-[11px] text-slate-500">Over 70% of Seed/Series A CFOs indicate an intent to decommission manual spreadsheets, shifting towards auto subledger algorithms.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="rounded bg-slate-50 p-1.5 shrink-0 text-slate-600 dark:bg-slate-850 dark:text-slate-300">
                <Landmark className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <span className="font-bold text-slate-800 dark:text-white">Rigorous GST reconciliation standards</span>
                <p className="text-[11px] text-slate-500">Continuous updates from the Indian Tax council require instant, invoice-level reconciliation. This forces businesses to implement proactive matching.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="rounded bg-slate-50 p-1.5 shrink-0 text-slate-600 dark:bg-slate-850 dark:text-slate-300">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <span className="font-bold text-slate-800 dark:text-white">API Open banking enablement</span>
                <p className="text-[11px] text-slate-500">Major financial gateways (ICICI, HDFC, Razorpay) are opening read-only treasury feeds, giving SaaS platforms instant synchronization channels.</p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
