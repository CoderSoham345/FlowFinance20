import React, { useState } from "react";
import { useApp } from "../components/AppContext";
import CommissionCalculator from "../components/CommissionCalculator";
import { Award, Star, Download, Sparkles, GraduationCap, Trophy, ChevronRight, User } from "lucide-react";

export default function CampusAmbassador() {
  const { ambassadors, addNotification } = useApp();
  
  // Certificate states
  const [studName, setStudName] = useState("Siddharth Dev");
  const [univ, setUniv] = useState("IIT Bombay (SINE Cell)");
  const [certGenerated, setCertGenerated] = useState(false);

  const handleGenerateCert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studName) return;
    setCertGenerated(true);
    addNotification(`Official promotion credentials designed for: ${studName}`);
  };

  const handleDownloadStub = () => {
    // Generate text/plain matching a genuine verified certificate credentials manifest
    const certificateText = `
========================================
     FLOWFINANCE GROWTH PLATFORM
      CAMPUS AMBASSADOR CREDENTIAL
========================================

Holder Name:     ${studName}
Institution:     ${univ}
Award Date:      June 19, 2026
Verified Hash:   F-FF-${Math.floor(100000 + Math.random() * 900000)}

This official document certifies that the individual named 
above has successfully completed high-level growth promotion 
and sub-ledger audit operations for FlowFinance.

Signed,
Ananya Roy, CFO Executive, FlowFinance
Soham Gonbhare, Platform Strategy, FlowFinance

========================================
    SIMULATED SECURITY AUDIT VERIFIED
========================================
`;
    const element = document.createElement("a");
    const file = new Blob([certificateText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${studName.replace(/\s+/g, "_")}_FlowFinance_Certificate.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    addNotification("Downloaded verified student certificate file successfully.");
  };

  return (
    <div className="space-y-8 font-sans">
      
      {/* Page Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-display tracking-tight">University Ambassador Hub</h2>
          <p className="text-xs text-slate-500">
            Managing campus business cells, ranking lists, referral conversions, and rewards checklists in India.
          </p>
        </div>
        <div className="text-[10px] bg-blue-500/10 text-blue-500 border border-blue-500/20 px-3 py-1 rounded-full font-mono font-bold uppercase tracking-wider">
          Student Portal Active
        </div>
      </div>

      {/* COMPACT ACTIVE DECO STATS WINDOW requested exactly */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
        <div>
          <h3 className="text-xs font-bold text-slate-800 dark:text-white uppercase font-mono tracking-wider">Active Campus Metrics</h3>
          <p className="text-[10px] text-slate-400 mt-1">Live tracking of your student lead conversions under standard commission codes.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-center">
            <span className="block text-[9px] uppercase font-mono font-bold text-slate-400">Total Clicks</span>
            <span className="block text-xl font-black font-mono text-blue-500 mt-1">245</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-center">
            <span className="block text-[9px] uppercase font-mono font-bold text-slate-400">Free Trials</span>
            <span className="block text-xl font-black font-mono text-purple-500 mt-1">58</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-center">
            <span className="block text-[9px] uppercase font-mono font-bold text-slate-400">Paid Conversions</span>
            <span className="block text-xl font-black font-mono text-emerald-500 mt-1">11</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-center">
            <span className="block text-[9px] uppercase font-mono font-bold text-slate-400">Commission Earned</span>
            <span className="block text-lg font-bold font-mono text-slate-850 dark:text-white mt-1.5">₹11,000</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-center col-span-2 md:col-span-1">
            <span className="block text-[9px] uppercase font-mono font-bold text-slate-400">Leaderboard Rank</span>
            <span className="block text-xl font-black font-mono text-orange-400 mt-1">#3</span>
          </div>
        </div>

        <div className="p-3.5 bg-slate-900 text-white rounded-xl flex flex-col md:flex-row items-center justify-between text-xs font-mono gap-3.5">
          <div>
            <span className="block text-blue-400 text-[10px] font-bold">Your Unique Referral Link:</span>
            <span className="block text-slate-300 font-semibold select-all">https://app.flowfinance.ai/ref/FLOW-IITB-SID</span>
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText("https://app.flowfinance.ai/ref/FLOW-IITB-SID");
              alert("Referral link copied to clipboard successfully!");
            }}
            className="w-full md:w-auto px-4 py-1.5 rounded-lg bg-blue-650 hover:bg-blue-550 text-white font-bold text-[10px] uppercase transition-colors text-center cursor-pointer"
          >
            Copy Link
          </button>
        </div>
      </div>

      {/* Grid: Rankings and Commission Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Performance Board */}
        <div className="lg:col-span-7 space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-850 dark:text-white font-display">University leaderboard Rankings</h3>
                <p className="text-[10px] text-slate-400 font-sans mt-0.5">Top performing student cells this semester</p>
              </div>
              <Trophy className="h-5 w-5 text-amber-500" />
            </div>

            <div className="space-y-3 font-medium text-xs">
              {ambassadors.map((am, idx) => (
                <div 
                  key={am.id}
                  className="rounded-xl border border-slate-150 p-3.5 bg-slate-50/30 dark:border-slate-850 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3.5">
                    <span className="font-mono font-bold text-slate-400">0{idx + 1}</span>
                    <div>
                      <span className="block font-bold text-slate-800 dark:text-slate-200">{am.college}</span>
                      <span className="block text-[10px] text-slate-400">Ambassador coordinator: {am.name}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className="block font-bold font-mono text-blue-500">{am.referrals} conversions</span>
                    <span className="block text-[9px] text-slate-400">{am.score}% retention rate</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Calculator imported */}
          <CommissionCalculator />
        </div>

        {/* Right Side: Certificate Generator */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-md space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-1.5 font-mono text-[10px] font-bold uppercase text-blue-500 bg-blue-500/5 px-2.5 py-1 rounded w-fit">
              <Award className="h-4 w-4 text-blue-500" />
              <span>Verified Certificate Creator</span>
            </div>

            <p className="text-xs text-slate-500 font-sans leading-relaxed">
              Design a co-signed FlowFinance promotion credential for campus portfolios. Input student coordinates to customize.
            </p>

            <form onSubmit={handleGenerateCert} className="space-y-3.5 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-600 dark:text-slate-400 font-mono text-[10px] uppercase">Student Name</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={studName}
                    onChange={(e) => setStudName(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent py-2 pl-9 pr-3 text-slate-800 dark:text-slate-200 focus:outline-[#0a84ff]"
                    placeholder="e.g. Siddharth Dev"
                  />
                  <User className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-600 dark:text-slate-400 font-mono text-[10px] uppercase">Collegiate Institution</label>
                <select
                  value={univ}
                  onChange={(e) => setUniv(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-805 bg-white dark:bg-slate-900 px-3 py-1.5 text-slate-850 dark:text-slate-200 focus:outline-none"
                >
                  <option value="IIT Bombay (SINE Incubator)">IIT Bombay (SINE Incubator)</option>
                  <option value="BITS Pilani (BITS Spark Cell)">BITS Pilani (BITS Spark Cell)</option>
                  <option value="SRCC Delhi (Finance Cell)">SRCC Delhi (Finance Cell)</option>
                  <option value="Symbiosis Pune (MBA Finance)">Symbiosis Pune (MBA Finance)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 transition-colors tracking-tight text-xs cursor-pointer dark:bg-slate-800 dark:hover:bg-slate-750"
              >
                Draft Official Certificate Details
              </button>
            </form>

            {/* Generated Visual preview node */}
            {certGenerated && (
              <div className="mt-4 p-4 rounded-xl border border-dashed border-rose-500/30 bg-rose-500/5 space-y-4 font-mono text-[10px] text-slate-600 dark:text-slate-350">
                <div className="text-center font-bold text-xs uppercase tracking-widest text-slate-800 dark:text-white border-b border-rose-500/10 pb-2">
                  🎖️ Certificate Designed
                </div>
                <div>ID Ref: F-FF-{Math.floor(100000 + Math.random() * 900000)}</div>
                <div>Approved Coordinator: <b className="text-slate-800 dark:text-white select-all">{studName}</b></div>
                <div>Branch Alliance: <b>{univ}</b></div>
                <div className="text-[9px] text-slate-400 leading-snug">
                  *This profile is authorized under FlowFinance Strategic Consulting Regulations of 2026.
                </div>
              </div>
            )}
          </div>

          {certGenerated && (
            <button
              onClick={handleDownloadStub}
              className="mt-6 w-full rounded-xl bg-blue-600 hover:bg-blue-500 py-3 text-xs font-bold text-white shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>Download Signed Credentials (.TXT)</span>
            </button>
          )}
        </div>

      </div>

    </div>
  );
}
