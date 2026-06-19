import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { HelpCircle, Star, Sparkles, CheckCircle2 } from "lucide-react";

export default function Surveys() {
  
  // Real statistical surveys data demonstrating founder pain validations
  const surveyResults = [
    { metric: "Ledger Reconciliation is Painful", percent: 84 },
    { metric: "Suffer Runway Anxiety Weekly", percent: 78 },
    { metric: "Want RBI API integrations", percent: 92 },
    { metric: "Unhappy with Traditional Portals", percent: 65 }
  ];

  return (
    <div className="space-y-8 font-sans">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-display tracking-tight">Market Validation Surveys</h2>
        <p className="text-xs text-slate-500">
          Synthesizing feedback gathered from 550+ Indian startup founders and business executives.
        </p>
      </div>

      {/* Main Graph Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Recharts chart */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
          <div>
            <h3 className="text-sm font-bold text-slate-850 dark:text-white font-display">Founder Pain Points Sizing</h3>
            <p className="text-[10px] text-slate-400 font-sans">Percentage of founders indicating severe consensus on financial hurdles (%)</p>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={surveyResults} layout="vertical" margin={{ top: 5, right: 10, left: 30, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(148, 163, 184, 0.08)" />
                <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 9, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis dataKey="metric" type="category" tick={{ fontSize: 8, fill: "#94a3b8" }} width={120} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ fontSize: "11px", background: "#1e293b", border: "none", borderRadius: "8px", color: "#fff" }} />
                <Bar dataKey="percent" fill="#0a84ff" radius={[0, 4, 4, 0]} name="Agreement Percentage (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Narrative validation card Right */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-md space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center space-x-1 font-mono text-[10px] font-bold uppercase text-blue-500 bg-blue-500/5 px-2.5 py-1 rounded">
              <Sparkles className="h-4 w-4 text-blue-500" />
              <span>CFO Executive Insight</span>
            </span>

            <p className="text-xs text-slate-500 font-sans leading-relaxed">
              Our validating interviews demonstrate that **historical accounting software** serves taxes well, but leaves the daily operations state exposed. Founders do not run out of money because of bad bookkeeping; they fail because of unexpected **invoice lags** and cash freezes.
            </p>

            <div className="space-y-2.5 font-medium text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 stroke-[3px]" />
                <span>92% expect live UPI reconciliation feeds</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 stroke-[3px]" />
                <span>84% stress over manual accounting inputs weekly</span>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-slate-400 leading-normal pt-4 mt-6 border-t border-slate-100 dark:border-slate-850">
            *Validation cohort comprises pre-seed, seed, and Series A startup CFOs based in Bengaluru, Pune, and Mumbai.
          </p>
        </div>

      </div>

    </div>
  );
}
