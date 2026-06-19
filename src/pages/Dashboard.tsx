import React, { useState } from "react";
import { useApp } from "../components/AppContext";
import { 
  TrendingUp, TrendingDown, Landmark, Sparkles, Plus, Wallet, 
  ArrowUpRight, ArrowDownRight, CreditCard, Calendar, Activity, ChevronRight,
  Sparkle, Award, Users, Share2, ShieldCheck, CheckCircle2, AlertTriangle, AlertCircle
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { currentUser, bookings, partners, ambassadors, referrals } = useApp();
  const [activeTab, setActiveTab] = useState<"all" | "ai" | "growth">("all");

  // Sample data requested exactly:
  const revenueValue = "₹12,50,000";
  const monthlyGrowth = "18%";
  const totalCustomers = 245;
  const mrrValue = "₹1,80,000";
  const runwayValue = "16 Months";
  const cashFlowValue = "Positive";
  const healthScore = 93; // out of 100

  const performanceTrends = [
    { name: "Jan 26", Revenue: 750000, Expenses: 580000, MRR: 110000 },
    { name: "Feb 26", Revenue: 890000, Expenses: 640000, MRR: 130000 },
    { name: "Mar 26", Revenue: 1040000, Expenses: 680000, MRR: 155000 },
    { name: "Apr 26", Revenue: 1120000, Expenses: 720000, MRR: 170000 },
    { name: "May 26", Revenue: 1210000, Expenses: 790000, MRR: 175000 },
    { name: "Jun 26", Revenue: 1250000, Expenses: 810000, MRR: 180000 },
  ];

  const recentTransactions = [
    { id: "tx1", desc: "GST Invoicing Payout - ZetaTech", date: "Jun 18, 2026", amt: "+ ₹84,500", type: "inflow", status: "Reconciled" },
    { id: "tx2", desc: "ICICI Server Hosting Autopay", date: "Jun 16, 2026", amt: "- ₹12,400", type: "outflow", status: "Reconciled" },
    { id: "tx3", desc: "Ambassador Commission - Siddharth M", date: "Jun 15, 2026", amt: "- ₹11,000", type: "outflow", status: "Auto-Match" },
    { id: "tx4", desc: "SINE Incubator Grants Credit", date: "Jun 12, 2026", amt: "+ ₹2,50,000", type: "inflow", status: "Manual Match" }
  ];

  return (
    <div className="space-y-8 font-sans">
      
      {/* Welcome Heading Banner */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-linear-to-r from-slate-900 to-slate-950 p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl"></div>
        <div className="absolute left-1/3 bottom-0 translate-y-12 h-48 w-48 rounded-full bg-emerald-600/5 blur-3xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5 animate-pulse text-blue-400" />
              <span>FlowFinance Intelligence System</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-white leading-tight">
              Welcome back, <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-teal-300 font-extrabold">{currentUser.name || "Executive"}</span>
            </h2>
            
            <p className="text-xs text-slate-400 max-w-xl font-sans font-medium">
              Your strategy modeler is synched with active role: <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 font-mono font-bold text-[11px] uppercase border border-blue-500/10">{currentUser.role}</span>. Feel free to pivot metrics or customize dummy user views in real-time.
            </p>
          </div>

          <div className="flex items-center justify-start gap-4">
            {/* Health circular graph indicator */}
            <div className="relative shrink-0 flex items-center justify-center h-20 w-20 rounded-full border-4 border-slate-800 bg-slate-900/60 shadow-lg">
              <span className="absolute inset-1 rounded-full border-2 border-emerald-500/20"></span>
              <div className="text-center">
                <span className="block text-xl font-black font-mono text-emerald-400 leading-none">{healthScore}</span>
                <span className="text-[8px] text-slate-400 uppercase tracking-widest font-bold">HEALTH</span>
              </div>
            </div>
            <div className="space-y-1 text-xs">
              <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider">FINANCIAL STABILITY</span>
              <span className="block font-bold text-emerald-400 text-sm">Excellent Index Score</span>
              <span className="block text-[10px] text-slate-500 font-mono">16 Months Extended Runway</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: 6 Critical Metric Cards requested exactly */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        
        {/* Revenue Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm transition-all hover:shadow-md">
          <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Total Revenue</span>
          <div className="mt-2.5 flex items-baseline justify-between">
            <span className="text-xl font-bold font-display text-slate-900 dark:text-white">{revenueValue}</span>
            <span className="text-xs font-mono font-semibold text-emerald-600 flex items-center">
              <ArrowUpRight className="h-3 w-3" />
              <span>+{monthlyGrowth}</span>
            </span>
          </div>
          <span className="block text-[10px] text-slate-500 mt-2 font-mono">Cumulative Gross (INR)</span>
        </div>

        {/* Growth Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm transition-all hover:shadow-md">
          <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">MRR</span>
          <div className="mt-2.5 flex items-baseline justify-between">
            <span className="text-xl font-bold font-display text-slate-900 dark:text-white">{mrrValue}</span>
            <span className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-emerald-550/10 text-emerald-500 border border-emerald-500/10">18% YoY</span>
          </div>
          <span className="block text-[10px] text-slate-500 mt-2 font-mono">Monthly Recurring Rate</span>
        </div>

        {/* Customers Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm transition-all hover:shadow-md">
          <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Paid Customers</span>
          <div className="mt-2.5 flex items-baseline justify-between">
            <span className="text-xl font-bold font-display text-slate-900 dark:text-white">{totalCustomers}</span>
            <span className="text-xs font-mono font-semibold text-emerald-600 flex items-center">
              <span>+14 this week</span>
            </span>
          </div>
          <span className="block text-[10px] text-slate-500 mt-2 font-mono">Verified Active Accounts</span>
        </div>

        {/* Growth Multiplier */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm transition-all hover:shadow-md">
          <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Monthly Growth</span>
          <div className="mt-2.5 flex items-baseline justify-between">
            <span className="text-xl font-bold font-display text-slate-900 dark:text-white">{monthlyGrowth}</span>
            <span className="text-xs font-mono font-semibold text-emerald-600 flex items-center">
              <TrendingUp className="h-4 w-4" />
            </span>
          </div>
          <span className="block text-[10px] text-slate-500 mt-2 font-mono">Average expansion speed</span>
        </div>

        {/* Cash Flow status */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm transition-all hover:shadow-md">
          <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Cash Flow Index</span>
          <div className="mt-2.5 flex items-baseline justify-between">
            <span className="text-xl font-bold font-display text-emerald-600 dark:text-emerald-400">{cashFlowValue}</span>
            <span className="text-[10px] font-mono font-semibold text-slate-500">Reconciled</span>
          </div>
          <span className="block text-[10px] text-slate-500 mt-2 font-mono">Net inflow exceeding out</span>
        </div>

        {/* Runway Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm transition-all hover:shadow-md">
          <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">SaaS Runway</span>
          <div className="mt-2.5 flex items-baseline justify-between">
            <span className="text-xl font-bold font-display text-slate-900 dark:text-white">{runwayValue}</span>
            <span className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500">Stable</span>
          </div>
          <span className="block text-[10px] text-slate-500 mt-2 font-mono">At current Burn Multiplier</span>
        </div>

      </div>

      {/* Role Adaptive Section: Dynamic Info Panel for active Role */}
      {currentUser.role === "Campus Ambassador" && (
        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 dark:bg-blue-950/20 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-xs">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 font-bold">
                🎓
              </div>
              <div>
                <span className="block font-bold text-slate-800 dark:text-white font-display text-sm">Campus Ambassador Operations Active</span>
                <span className="block text-slate-500 text-[10px] font-mono">Referrals dashboard synched with local conversion ratios.</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Link to="/campus-ambassador" className="rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2 text-xs font-bold text-white transition-all">
                Access Ambassador Board
              </Link>
              <Link to="/referrals" className="rounded-xl border border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 transition-all">
                QR Link Maker
              </Link>
            </div>
          </div>
        </div>
      )}

      {currentUser.role === "Admin" && (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5 dark:bg-red-950/20 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-xs">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-red-500/10 text-red-500 font-bold">
                👑
              </div>
              <div>
                <span className="block font-bold text-slate-800 dark:text-white font-display text-sm">Administrative CFO Command Active</span>
                <span className="block text-slate-500 text-[10px] font-mono">Full capabilities to view users, approve ambassadors, and manage partnerships.</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Link to="/admin" className="rounded-xl bg-red-600 hover:bg-red-500 px-4 py-2 text-xs font-bold text-white transition-all">
                Enter Platform Command Room
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Grid: Revenue & Cash Flow Dashboards + health metrics chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Interactive Revenue & Cash Flow visual graphs */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div>
              <h3 className="text-sm font-bold text-slate-850 dark:text-white font-display">Revenue & Expense Cash Flow Dashboard</h3>
              <p className="text-[10px] text-slate-400 font-sans mt-0.5">Rolling metric projection from January to June 2026 (INR)</p>
            </div>
            
            {/* Tab switch logic */}
            <div className="flex items-center space-x-1 p-1 bg-slate-50 dark:bg-slate-950 rounded-xl max-w-fit border border-slate-150 dark:border-slate-850">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1 text-[10px] font-bold uppercase font-mono rounded-lg transition-colors ${activeTab === "all" ? "bg-white dark:bg-slate-850 text-blue-500 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
              >
                Cash flow analysis
              </button>
              <button
                onClick={() => setActiveTab("growth")}
                className={`px-3 py-1 text-[10px] font-bold uppercase font-mono rounded-lg transition-colors ${activeTab === "growth" ? "bg-white dark:bg-slate-850 text-blue-500 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
              >
                Growth MRR Grid
              </button>
            </div>
          </div>

          <div className="h-72 w-full">
            {activeTab === "all" ? (
              <ResponsiveContainer width="100%" height="105%">
                <AreaChart data={performanceTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.08}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.08)" vertical={false} />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 9, fill: "#94a3b8", fontFamily: "monospace" }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 9, fill: "#94a3b8", fontFamily: "monospace" }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "8px", fontSize: "11px", color: "#fff" }}
                    itemStyle={{ color: "#fff" }}
                  />
                  <Legend verticalAlign="top" height={32} iconType="circle" wrapperStyle={{ fontSize: "10px", fontFamily: "monospace", display: "flex", justifyContent: "flex-end" }} />
                  <Area type="monotone" name="Revenue Inflow" dataKey="Revenue" stroke="#2563eb" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRevenue)" />
                  <Area type="monotone" name="Expense Outflow" dataKey="Expenses" stroke="#ef4444" strokeWidth={1.5} fillOpacity={1} strokeDasharray="3 3" fill="url(#colorExpense)" />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <ResponsiveContainer width="100%" height="105%">
                <BarChart data={performanceTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.08)" vertical={false} />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 9, fill: "#94a3b8", fontFamily: "monospace" }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 9, fill: "#94a3b8", fontFamily: "monospace" }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "8px", fontSize: "11px", color: "#fff" }}
                  />
                  <Legend verticalAlign="top" height={32} iconType="circle" wrapperStyle={{ fontSize: "10px", fontFamily: "monospace", display: "flex", justifyContent: "flex-end" }} />
                  <Bar name="Monthly Recurring Rev (MRR)" dataKey="MRR" fill="#06b6d4" radius={[4, 4, 0, 0]} maxBarSize={45} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Right 1 Col: AI Recommendations & Growth insights */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-2">
                <div className="h-7 w-7 rounded-lg bg-indigo-500/10 text-indigo-500 dark:bg-indigo-900/20 dark:text-indigo-400 flex items-center justify-center">
                  <Sparkle className="h-4 w-4 animate-spin-slow" />
                </div>
                <h3 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider font-mono">AI Strategy Advisor Insights</h3>
              </div>
              <span className="text-[9px] bg-emerald-500/10 text-emerald-600 px-2.5 py-0.5 rounded-full font-bold font-mono">SYSTEM READY</span>
            </div>

            {/* AI Recommendation Loop */}
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-150 dark:border-slate-850 space-y-1">
                <span className="inline-block text-[9px] font-bold font-mono text-emerald-500 bg-emerald-500/10 px-1.5 rounded uppercase">Optimization</span>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-205">Ambassador CAC reduction of 24.5%</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  By routing student signups directly through automated UPI QR codes, the customer acquisition cost dropped to ₹450 per lead.
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-150 dark:border-slate-850 space-y-1">
                <span className="inline-block text-[9px] font-bold font-mono text-blue-500 bg-blue-500/10 px-1.5 rounded uppercase">Runway Expansion</span>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-205">Incubator co-marketing grant approved</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  Secured ₹2.5 Lakhs from SINE Cell partners, preserving 1.2 months of direct software platform burn rate.
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-150 dark:border-slate-850 space-y-1">
                <span className="inline-block text-[9px] font-bold font-mono text-purple-500 bg-purple-500/10 px-1.5 rounded uppercase">Partnership Signal</span>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-205">Identify 3 high-leverage college nodes</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  Delhi University and bits-pilani clusters are driving 62% of free trials this month. Prioritize cash bonuses.
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/ai-growth-advisor"
            className="mt-5 w-full text-center rounded-xl bg-slate-900 hover:bg-slate-850 dark:bg-slate-800 dark:hover:bg-slate-750 text-white py-2.5 text-xs font-bold transition-colors flex items-center justify-center space-x-1 shrink-0"
          >
            <span>Consult AI Strategy Chatbot</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>

      </div>

      {/* Referral Statistics Section & Demo Booking slots */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Col 1 & 2: Referral Statistics (Request item) */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-5">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-850 dark:text-white font-display">Campus Ambassador Referral statistics</h3>
              <p className="text-[10px] text-slate-400 font-sans mt-0.5">Performance tracking of affiliate links and conversions</p>
            </div>
            <Award className="h-4 w-4 text-orange-500" />
          </div>

          {/* Quick Metrics display requested: Clicks 245, Trials 58, Conversions 11, Commission ₹11,000, Rank #3 */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            
            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-150 dark:border-slate-850 text-center">
              <span className="block text-[9px] uppercase font-mono font-bold text-slate-450">Active Clicks</span>
              <span className="block text-2xl font-black font-mono text-blue-600 dark:text-blue-400 tracking-tight mt-1">245</span>
              <span className="text-[8px] text-emerald-500 font-mono font-bold font-semibold block mt-0.5">85% organic</span>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-150 dark:border-slate-850 text-center">
              <span className="block text-[9px] uppercase font-mono font-bold text-slate-450">Free Trials</span>
              <span className="block text-2xl font-black font-mono text-indigo-500 tracking-tight mt-1">58</span>
              <span className="text-[8px] text-slate-400 font-mono font-bold block mt-0.5">23% conversion</span>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-150 dark:border-slate-850 text-center">
              <span className="block text-[9px] uppercase font-mono font-bold text-slate-450 font-bold">Conversions</span>
              <span className="block text-2xl font-black font-mono text-emerald-600 tracking-tight mt-1">11</span>
              <span className="text-[8px] text-emerald-500 font-mono font-bold block mt-0.5">Paid Subscribed</span>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-150 dark:border-slate-850 text-center">
              <span className="block text-[9px] uppercase font-mono font-bold text-slate-450 text-amber-500 font-bold">Commission</span>
              <span className="block text-lg font-bold font-mono text-slate-900 dark:text-white mt-1.5">₹11,000</span>
              <span className="text-[8px] text-slate-400 font-mono font-bold block mt-0.5">Paid Direct UPI</span>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-150 dark:border-slate-850 text-center col-span-2 sm:col-span-1">
              <span className="block text-[9px] uppercase font-mono font-bold text-slate-450">Leaderboard Rank</span>
              <span className="block text-2xl font-black font-mono text-orange-500 mt-1">#3</span>
              <span className="text-[8px] text-slate-400 font-mono font-bold block mt-0.5">Top 5% of India</span>
            </div>

          </div>

          <div className="p-3.5 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between text-xs font-mono gap-3.5">
            <div>
              <span className="block text-blue-400 text-[10px] font-bold">Share Referral Code Link:</span>
              <span className="block text-slate-350 select-all font-semibold">https://app.flowfinance.ai/ref/FLOW-IITB-SID</span>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText("https://app.flowfinance.ai/ref/FLOW-IITB-SID");
                alert("Referral link copied to clipboard successfully!");
              }}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-[10px] uppercase transition-colors shrink-0 flex items-center space-x-1 cursor-pointer"
            >
              <Share2 className="h-3 w-3" />
              <span>Copy Link</span>
            </button>
          </div>
        </div>

        {/* Col 3: Strategic Bookings (Quick glance) */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider font-mono">Active consultations</h3>
              <span className="text-[9px] bg-indigo-500/10 text-indigo-550 px-2.5 py-0.5 rounded-full font-mono font-bold uppercase">Sync</span>
            </div>

            <div className="space-y-2.5 overflow-y-auto max-h-56">
              {bookings.map((booking) => (
                <div key={booking.id} className="rounded-xl border border-slate-150 dark:border-slate-850 p-3 bg-slate-50/20 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-850 dark:text-white">{booking.name}</span>
                    <span className="text-[9px] bg-emerald-500/15 text-emerald-600 px-2 rounded font-bold">{booking.status}</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">{booking.company}</div>
                  <div className="text-[10px] text-blue-500 font-bold font-mono mt-1">{booking.date} at {booking.time}</div>
                </div>
              ))}
            </div>
          </div>

          <Link to="/contact" className="mt-4 ring-1 ring-slate-200 dark:ring-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/60 p-2 text-center rounded-xl text-xs font-bold transition-all block text-slate-700 dark:text-slate-300">
            Configure consultation calendar
          </Link>
        </div>

      </div>

      {/* Database ledger section for CFO matching validation */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="text-sm font-bold text-slate-850 dark:text-white font-display">Real-Time Sync Subledger</h3>
            <p className="text-[10px] text-slate-400 font-sans">Simulating bank feed connections through Open Banking APIs (ICICI & YES bank)</p>
          </div>
          <Link to="/customer-acquisition" className="text-[11px] font-bold text-blue-500 hover:underline">
            Check Customer Metrics →
          </Link>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left font-sans text-xs">
            <thead>
              <tr className="text-[10px] uppercase text-slate-400 font-mono tracking-wider font-bold pb-2">
                <th className="py-2 px-3">Transaction details</th>
                <th className="py-2 px-3">Valuation (INR)</th>
                <th className="py-2 px-3">Date</th>
                <th className="py-2 px-3 text-center">Status Index</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50 font-medium text-[11px]">
              {recentTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-55/40 dark:hover:bg-slate-950/20 text-slate-600 dark:text-slate-400 transition-colors">
                  <td className="py-3 px-3 text-slate-900 dark:text-white font-bold">{tx.desc}</td>
                  <td className={`py-3 px-3 font-mono font-bold ${tx.type === "inflow" ? "text-emerald-500" : "text-slate-800 dark:text-slate-200"}`}>{tx.amt}</td>
                  <td className="py-3 px-3 font-mono text-[10px]">{tx.date}</td>
                  <td className="py-3 px-3 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold ${tx.status === "Reconciled" ? "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400" : "bg-blue-500/10 text-blue-500"}`}>{tx.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}
