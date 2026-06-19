import React, { useState } from "react";
import { COMPETITOR_DATA } from "../data";
import { ArrowUpDown, Star, Shield, Cpu, Scale, Check, ChevronDown } from "lucide-react";

export default function InteractiveCompetitorTable() {
  const [filterQuery, setFilterQuery] = useState("");
  const [sortField, setSortField] = useState<"name" | "score">("score");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const handleSort = (field: "name" | "score") => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const filteredData = COMPETITOR_DATA.filter((item) => {
    const matchesQuery = 
      item.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      item.features.toLowerCase().includes(filterQuery.toLowerCase()) ||
      item.ai.toLowerCase().includes(filterQuery.toLowerCase());
    return matchesQuery;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    let checkA = a[sortField];
    let checkB = b[sortField];

    if (sortDirection === "asc") {
      return checkA > checkB ? 1 : -1;
    } else {
      return checkA < checkB ? 1 : -1;
    }
  });

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md dark:border-slate-800/80 dark:bg-slate-900 transition-colors duration-200">
      
      {/* Header and Filter Action */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-5 mb-5">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white font-display">
            Competitor Intelligence Matrix
          </h3>
          <p className="text-xs text-slate-500 font-sans mt-0.5">
            Compare FlowFinance side-by-side with India's leading fintech tools.
          </p>
        </div>
        
        {/* Real-Time Filter Input */}
        <div className="w-full md:w-72">
          <input
            type="text"
            placeholder="Search pricing, AI, features..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-1.5 text-xs focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 font-sans"
          />
        </div>
      </div>

      {/* Grid Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-xs font-sans">
          
          {/* Table Headers */}
          <thead>
            <tr className="border-b border-slate-100 text-[10px] font-bold uppercase text-slate-400 font-mono tracking-wider dark:border-slate-800/60 pb-3">
              <th className="py-3 px-4">
                <button onClick={() => handleSort("name")} className="flex items-center space-x-1 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <span>Product</span>
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
              <th className="py-3 px-4">Pricing structure</th>
              <th className="py-3 px-4">AI Capability scope</th>
              <th className="py-3 px-4">Key Integrations</th>
              <th className="py-3 px-4">Scenario Forecasting</th>
              <th className="py-3 px-4 text-center">
                <button onClick={() => handleSort("score")} className="flex items-center justify-center space-x-1 hover:text-slate-900 dark:hover:text-white mx-auto transition-colors">
                  <span>Score Index</span>
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
            </tr>
          </thead>

          {/* Table Body rows */}
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
            {sortedData.map((co) => {
              const isFlow = co.name === "FlowFinance";
              return (
                <tr
                  key={co.name}
                  className={`transition-colors duration-150 ${
                    isFlow 
                      ? "bg-blue-500/5 hover:bg-blue-500/10 font-semibold" 
                      : "hover:bg-slate-50/50 dark:hover:bg-slate-950/20"
                  }`}
                >
                  <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white flex items-center space-x-1.5">
                    {isFlow && <Cpu className="h-3.5 w-3.5 text-blue-500" />}
                    <span>{co.name}</span>
                  </td>
                  <td className="py-3.5 px-4">{co.pricing}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                      isFlow 
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" 
                        : "bg-slate-100 text-slate-500 dark:bg-slate-900/60 dark:text-slate-400"
                    }`}>
                      {co.ai}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">{co.features}</td>
                  <td className="py-3.5 px-4">
                    <span className="flex items-center space-x-1 text-slate-800 dark:text-slate-200">
                      {isFlow ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-blue-500 stroke-[3px]" />
                          <span>Fully automated sandbox</span>
                        </>
                      ) : (
                        <span>{co.forecasting}</span>
                      )}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <div className="flex items-center justify-center space-x-1 text-amber-500 mx-auto bg-amber-500/5 px-2 py-0.5 rounded-full w-14 border border-amber-500/10 font-bold font-mono">
                      <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                      <span>{co.score}</span>
                    </div>
                  </td>
                </tr>
              );
            })}

            {sortedData.length === 0 && (
              <tr>
                <td colSpan={6} className="py-8 text-center text-slate-400 italic font-medium">
                  No products matched your search filters.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

      {/* Feature Drill-down Section summary */}
      <div className="mt-5 p-4 rounded-xl border border-slate-100 bg-slate-50/50 dark:border-slate-800/80 dark:bg-slate-950/20 text-[11px] leading-relaxed text-slate-500 font-medium">
        <span className="font-bold text-slate-800 dark:text-slate-200">Consultant analysis:</span> FlowFinance represents a fundamental pivot from **lagging, passive book-keepers** like Zoho Books or traditional Excel sheets towards **proactive financial advice**. Zoho Books and Vyapar focus exclusively on filing historical tax compliance forms; FlowFinance actively predicts future cash peaks and alerts executives to make capital decisions *before* crisis events occur, proving a 4x improvement in customer value score.
      </div>

    </div>
  );
}
