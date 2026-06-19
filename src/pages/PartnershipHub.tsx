import React, { useState } from "react";
import { useApp } from "../components/AppContext";
import { Network, Plus, CheckCircle2, Star, Mail, Briefcase, Sparkles, Building, Landmark, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function PartnershipHub() {
  const { partners, addPartner, addNotification } = useApp();
  
  // Submit prop Form states
  const [showAddForm, setShowAddForm] = useState(false);
  const [pName, setPName] = useState("");
  const [pCategory, setPCategory] = useState("Banking API Gateways");
  const [pOrg, setPOrg] = useState("");
  const [pSummary, setPSummary] = useState("");

  const handlePropose = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pName || !pOrg) return;

    addPartner(pName, pCategory, pOrg, pSummary || "Integrated statement synchronization gateway");
    setPName("");
    setPOrg("");
    setPSummary("");
    setShowAddForm(false);
    addNotification(`Proposed alliance registered: ${pName} (${pOrg})`);
    alert(`Proposed partner alliance for ${pName} submitted successfully!`);
  };

  return (
    <div className="space-y-8 font-sans">
      
      {/* Upper header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-display tracking-tight">Ecosystem Partnership-Hub</h2>
          <p className="text-xs text-slate-500">
            Alliance portfolios linking Indian banks, startup incubators (SINE IIT), and top tier accounting firms.
          </p>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="rounded-xl bg-blue-600 hover:bg-blue-500 px-4.5 py-2.5 text-xs font-bold text-white shadow-md flex items-center space-x-1.5 transition-colors cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          <span>Propose Strategic Union</span>
        </button>
      </div>

      {/* Alliance Submission Overlay Card */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 space-y-4"
          >
            <div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-white flex items-center space-x-1.5">
                <Sparkles className="h-4 w-4 text-blue-500" />
                <span>Submit Partnership Alliance Intent</span>
              </h3>
              <p className="text-[11px] text-slate-500 mt-1">
                Enter simulated partnership parameters under standard compliance protocols. This updates global memory registries immediately.
              </p>
            </div>

            <form onSubmit={handlePropose} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold">
              <div className="space-y-1">
                <label className="text-slate-500">Alliance Contact Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ICICI Corporate Lead"
                  value={pName}
                  onChange={(e) => setPName(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-slate-800 dark:text-slate-200"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-500">Institution / Organization</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ICICI Bank Ltd"
                  value={pOrg}
                  onChange={(e) => setPOrg(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-slate-800 dark:text-slate-200"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-500">Partnership Category</label>
                <select
                  value={pCategory}
                  onChange={(e) => setPCategory(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-805 bg-white dark:bg-slate-900 px-3 py-1.5 text-slate-850 dark:text-slate-200"
                >
                  <option value="Banking API Gateways">Banking API Gateway</option>
                  <option value="Startup Incubators">SINE Startup Incubator Alliance</option>
                  <option value="Accounting Regional Offices">Regional CA Chapter</option>
                  <option value="Corporate Tech Alliances">Corporate SaaS Extension</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-slate-500">Scope Summary</label>
                <input
                  type="text"
                  placeholder="e.g. Automated read-only accounting subledgers statement sync."
                  value={pSummary}
                  onChange={(e) => setPSummary(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-slate-800 dark:text-slate-200"
                />
              </div>

              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 hover:bg-blue-500 px-5 py-2 text-xs font-bold text-white transition-all cursor-pointer"
                >
                  Submit Active Proposal to Board Registry
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid listing Partners */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((pt) => {
          
          // Determine visuals based on category
          let icon = Building;
          if (pt.category.includes("Bank")) icon = Landmark;
          if (pt.category.includes("Incubat")) icon = Network;
          const Icon = icon;

          return (
            <div
              key={pt.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm transition-all hover:scale-[1.01] hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="rounded bg-slate-50 p-2 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold font-mono tracking-wide ${
                    pt.status === "Authorized Integration" 
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" 
                      : "bg-blue-500/10 text-blue-500"
                  }`}>
                    {pt.status}
                  </span>
                </div>

                <div className="space-y-1 text-xs">
                  <b className="font-bold text-slate-900 dark:text-white text-sm font-display tracking-tight block">
                    {pt.org}
                  </b>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block font-mono">
                    {pt.category}
                  </span>
                  <p className="text-slate-500 dark:text-slate-400 font-medium text-[11px] leading-relaxed pt-2.5">
                    {pt.summary}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between text-[10px] font-mono font-bold text-slate-400">
                <span>Representative: {pt.name}</span>
                <ChevronRight className="h-3 w-3 text-slate-300" />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
