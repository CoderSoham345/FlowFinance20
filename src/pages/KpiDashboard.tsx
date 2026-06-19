import React, { useState } from "react";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { DollarSign, Percent, TrendingUp, Sparkles, Filter, ChevronDown, RefreshCw } from "lucide-react";
import { useApp } from "../components/AppContext";

export default function KpiDashboard() {
  const { addNotification } = useApp();
  const [selectedSegment, setSelectedSegment] = useState("All India");

  const arrData = [
    { month: "Jan 26", ARR: 18000000, Target: 15000000 },
    { month: "Feb 26", ARR: 22000000, Target: 18000000 },
    { month: "Mar 26", ARR: 29000000, Target: 24000000 },
    { month: "Apr 26", ARR: 35000000, Target: 30000000 },
    { month: "May 26", ARR: 41000000, Target: 36000000 },
    { month: "Jun 26", ARR: 54000000, Target: 42000000 },
  ];

  const cohortData = [
    { category: "Founder Direct", LTV: 180000, CAC: 5400 },
    { category: "Ambassador Univ", LTV: 154000, CAC: 4000 },
    { category: "CA Partner Net", LTV: 420000, CAC: 12000 },
    { category: "Organic Free", LTV: 98000, CAC: 950 }
  ];

  const handleRefresh = () => {
    addNotification("Re-calculated real-time SaaS performance indexes");
    alert("Enterprise performance cache recalculated!");
  };

  return (
    <div className="space-y-8 font-sans">
      
      {/* Top action grid */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-display tracking-tight">Enterprise KPI Dashboard</h2>
          <p className="text-xs text-slate-500">
            Performance analytics, dynamic segment cohorts, and financial runway benchmarks.
          </p>
        </div>

        <div className="flex items-center space-x-3 text-xs w-full sm:w-auto">
          {/* Segment Selector */}
          <div className="relative shrink-0">
            <select
              value={selectedSegment}
              onChange={(e) => {
                setSelectedSegment(e.target.value);
                addNotification(`KPI charts filtered for: "${e.target.value}"`);
              }}
              className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 py-1.5 font-medium text-slate-700 dark:text-slate-300 focus:outline-none"
            >
              <option value="All India">All India Cohorts</option>
              <option value="Tier 1 Metros">Tier 1 Metros</option>
              <option value="Startups SINE/Incubators">SINE Incubator Cells</option>
              <option value="CA Networks Only">CA Networks</option>
            </select>
          </div>

          <button
            onClick={handleRefresh}
            className="flex items-center space-x-1.5 rounded-lg border border-slate-200 dark:border-slate-800 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 font-bold transition-all text-slate-700 dark:text-slate-300 shrink-0 cursor-pointer"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Recalculate Indices</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Grid - HubSpot / Ramp Professional Design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Metric 1 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
          <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Monthly Recurring Revenue</span>
          <div className="mt-3.5 space-y-1">
            <span className="block text-2xl font-bold font-sans text-slate-900 dark:text-white">₹45,00,000</span>
            <div className="flex justify-between text-[10px] font-mono font-semibold">
              <span className="text-emerald-500">+12% MRR MoM Increase</span>
              <span className="text-slate-400">ARR Equiv: ₹5.4 Cr</span>
            </div>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
          <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Customer Acquisition Cost</span>
          <div className="mt-3.5 space-y-1">
            <span className="block text-2xl font-bold font-sans text-slate-900 dark:text-white">₹5,410</span>
            <div className="flex justify-between text-[10px] font-mono font-semibold">
              <span className="text-emerald-500">22% fall vs last quarter</span>
              <span className="text-slate-400">Target CAC: ₹4,500</span>
            </div>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
          <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Lifetime Value Cap</span>
          <div className="mt-3.5 space-y-1">
            <span className="block text-2xl font-bold font-sans text-slate-900 dark:text-white">₹49,700</span>
            <div className="flex justify-between text-[10px] font-mono font-semibold">
              <span className="text-amber-500">LTV : CAC ratio: 9.2x</span>
              <span className="text-slate-400">Industry Avg: 3.0x</span>
            </div>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
          <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Annual Churn Prevention</span>
          <div className="mt-3.5 space-y-1">
            <span className="block text-2xl font-bold font-sans text-slate-900 dark:text-white">1.8% annual</span>
            <div className="flex justify-between text-[10px] font-mono font-semibold">
              <span className="text-emerald-500">Highly cohesive locking</span>
              <span className="text-slate-400">Runway Alerts Driven</span>
            </div>
          </div>
        </div>

      </div>

      {/* Analytics Recharts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Chart 1: Annual ARR Runrate Trajectory */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-white font-display">ARR Runrate Expansion trajectory</h3>
            <p className="text-[10px] text-slate-400 font-sans">Scaled projection vs investor performance target bounds (INR)</p>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={arrData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorARR" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.25}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.08)" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 9, fill: "#94a3b8", fontFamily: "monospace" }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 9, fill: "#94a3b8", fontFamily: "monospace" }} />
                <Tooltip contentStyle={{ background: "#1e293b", border: "none", borderRadius: "8px", color: "#fff", fontSize: "11px", fontFamily: "sans-serif" }} />
                <Area type="monotone" dataKey="ARR" stroke="#10b981" strokeWidth={2.5} fillOpacity={1} fill="url(#colorARR)" name="Realized ARR" />
                <Line type="monotone" dataKey="Target" stroke="#3b82f6" strokeWidth={1} strokeDasharray="4 4" name="Target Track" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Segment Unit Economics Comparison */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-white font-display">Unit Economics: Segment CAC vs LTV</h3>
            <p className="text-[10px] text-slate-400 font-sans">Comparative breakdown illustrating channel efficiency parameters (INR)</p>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cohortData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.08)" />
                <XAxis dataKey="category" tickLine={false} axisLine={false} tick={{ fontSize: 9, fill: "#94a3b8" }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 9, fill: "#94a3b8" }} />
                <Tooltip contentStyle={{ background: "#1e293b", border: "none", borderRadius: "8px", color: "#fff", fontSize: "11px" }} />
                <Legend iconSize={8} wrapperStyle={{ fontSize: "10px" }} />
                <Bar dataKey="LTV" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Expected LTV" />
                <Bar dataKey="CAC" fill="#fb7185" radius={[4, 4, 0, 0]} name="Acquisition CAC" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Granular financial Category Ledger Table */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <h3 className="text-sm font-bold text-slate-850 dark:text-white font-display mb-4">Enterprise channel Performance Matrices</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-slate-150 text-[10px] font-bold uppercase text-slate-400 font-mono dark:border-slate-800 pb-2.5">
                <th className="py-2.5 px-3">Acquisition Channel</th>
                <th className="py-2.5 px-3">Lead Conversion Ratio</th>
                <th className="py-2.5 px-3">Est. CAC (INR)</th>
                <th className="py-2.5 px-3">Modelled LTV (INR)</th>
                <th className="py-2.5 px-3">Payback Period</th>
                <th className="py-2.5 px-3">LTV / CAC Multiplier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800/60 font-medium text-[11px] text-slate-600 dark:text-slate-400">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-colors">
                <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">Chartered Accountants (CAs)</td>
                <td className="py-3 px-3">18.5%</td>
                <td className="py-3 px-3">₹12,000</td>
                <td className="py-3 px-3">₹4,20,000</td>
                <td className="py-3 px-3">2.8 Months</td>
                <td className="py-3 px-3"><span className="text-emerald-500 font-bold font-mono">35.0x</span></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-colors">
                <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">University Campus Ambassadors</td>
                <td className="py-3 px-3">8.4%</td>
                <td className="py-3 px-3">₹4,000</td>
                <td className="py-3 px-3">₹1,54,000</td>
                <td className="py-3 px-3">1.5 Months</td>
                <td className="py-3 px-3"><span className="text-emerald-500 font-bold font-mono">38.5x</span></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-colors">
                <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">Founder SEO Content hubs</td>
                <td className="py-3 px-3">4.2%</td>
                <td className="py-3 px-3">₹950</td>
                <td className="py-3 px-3">₹98,000</td>
                <td className="py-3 px-3">0.6 Months</td>
                <td className="py-3 px-3"><span className="text-emerald-500 font-bold font-mono">103.1x</span></td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-colors">
                <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">Paid Brand Campaigns</td>
                <td className="py-3 px-3">2.1%</td>
                <td className="py-3 px-3">₹38,000</td>
                <td className="py-3 px-3">₹1,80,000</td>
                <td className="py-3 px-3">9.5 Months</td>
                <td className="py-3 px-3"><span className="text-amber-500 font-bold font-mono">4.7x</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}
