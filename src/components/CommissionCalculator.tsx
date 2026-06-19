import React, { useState } from "react";
import { DollarSign, Award, Target, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export default function CommissionCalculator() {
  const [conversions, setConversions] = useState(5);

  const calculateCommission = (conv: number) => {
    if (conv < 5) return conv * 600; // Rs. 600 per account below milestone 1
    if (conv < 7) return 4000;       // Rs. 4000 for 5 conversions
    if (conv < 10) return 7000;      // Rs. 7000 for 7 conversions
    if (conv < 15) return 11000;     // Rs. 11000 for 10 conversions
    // Custom incentive tier beyond 10!
    return 11000 + (conv - 10) * 1500; 
  };

  const getActiveMilestone = (conv: number) => {
    if (conv >= 10) return "Master Ambassador Tier (₹11,000 Payout + High-Performers Bonus)";
    if (conv >= 7) return "Professional Tier (₹7,000 Payout)";
    if (conv >= 5) return "Rising Star Tier (₹4,000 Payout)";
    return "Associate Tier (₹600 Base fee per conversion)";
  };

  const commission = calculateCommission(conversions);

  return (
    <div className="rounded-2xl p-6 border border-slate-200/80 bg-white shadow-md dark:border-slate-800/80 dark:bg-slate-900 transition-all duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white font-display">
            Ambassador Earnings Calculator
          </h3>
          <p className="text-xs text-slate-500 font-sans mt-0.5">
            Slide and simulate potential monthly payouts from FlowFinance referrals.
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Active Bonus Multipliers</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Slider & Input Inputs */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Simulated Paid Conversions
              </label>
              <span className="text-2xl font-bold font-display text-blue-500">
                {conversions} <span className="text-xs text-slate-400">Startups</span>
              </span>
            </div>
            
            <input
              type="range"
              min="1"
              max="25"
              value={conversions}
              onChange={(e) => setConversions(Number(e.target.value))}
              className="w-full h-2 rounded-lg bg-slate-100 dark:bg-slate-800 appearance-none cursor-pointer accent-blue-500"
            />
            
            <div className="flex justify-between text-[10px] font-mono text-slate-400 px-1">
              <span>1 Referral</span>
              <span>5 Rev (₹4,000)</span>
              <span>7 Rev (₹7,000)</span>
              <span>10 Rev (₹11,000)</span>
              <span>25 Max</span>
            </div>
          </div>

          {/* Quick Incrementor Shortcuts */}
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">Quick set:</span>
            {[5, 7, 10, 15].map((val) => (
              <button
                key={val}
                onClick={() => setConversions(val)}
                className={`rounded px-2.5 py-1 text-xs font-semibold font-mono border transition-all ${
                  conversions === val
                    ? "bg-blue-500 border-blue-500 text-white shadow-sm"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700"
                }`}
              >
                {val} Active
              </button>
            ))}
          </div>
        </div>

        {/* Calculated Reward Display Card */}
        <div className="lg:col-span-5 rounded-xl bg-slate-50/80 p-5 dark:bg-slate-950/40 border border-slate-150 dark:border-slate-850 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-1 text-slate-400 font-mono text-[10px] uppercase font-bold">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Calculated Reward</span>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">
                ₹{commission.toLocaleString()}{" "}
                <span className="text-xs font-normal text-slate-400">/ month</span>
              </div>
              <p className="text-[10px] text-blue-500 font-mono font-bold mt-1">
                {getActiveMilestone(conversions)}
              </p>
            </div>
          </div>

          <div className="mt-5 border-t border-slate-200/50 dark:border-slate-850 pt-4 space-y-2.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
            <div className="flex justify-between">
              <span>Average Startup ACV:</span>
              <span className="text-slate-800 dark:text-slate-200">₹1,499 / Month</span>
            </div>
            <div className="flex justify-between">
              <span>Platform Referral Bonus:</span>
              <span className="text-slate-800 dark:text-slate-200">Included</span>
            </div>
            <div className="flex justify-between font-semibold text-slate-800 dark:text-slate-200">
              <span>Estimated Annual Payout:</span>
              <span className="text-blue-500">₹{(commission * 12).toLocaleString()}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Structured Static Milestones Table Reference */}
      <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono mb-3">
          FlowFinance Official Milestone Tiers
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="rounded-lg p-3 border border-slate-150 bg-slate-50/30 dark:border-slate-800/80 dark:bg-slate-900/30">
            <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
              <span>Bronze Star (5 Sales)</span>
              <span className="text-blue-500">₹4,000 / mo</span>
            </div>
            <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
              Earn ₹600 base commission plus a ₹1,000 milestone bonus. Ideal for early university testers.
            </p>
          </div>
          <div className="rounded-lg p-3 border border-blue-100 bg-blue-50/20 dark:border-blue-950/40 dark:bg-blue-950/10">
            <div className="flex justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
              <span>Silver Leader (7 Sales)</span>
              <span className="text-blue-500">₹7,000 / mo</span>
            </div>
            <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
              Unlock a ₹2,800 bonus tier. CAs get direct certificate validation for summer management positions.
            </p>
          </div>
          <div className="rounded-lg p-3 border border-slate-150 bg-slate-50/30 dark:border-slate-800/80 dark:bg-slate-900/30">
            <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
              <span>Gold Veteran (10 Sales)</span>
              <span className="text-blue-500">₹11,000 / mo</span>
            </div>
            <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
              Top payout block with a ₹5,000 milestone bonus. Plus, earn an extra ₹1,500 for every account above 10.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
