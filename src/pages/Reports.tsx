import React, { useState } from "react";
import { GROWTH_REPORTS } from "../data";
import { useApp } from "../components/AppContext";
import { FileText, Search, Bookmark, Download, FolderOpen, RefreshCw, ChevronRight } from "lucide-react";

export default function Reports() {
  const { addNotification } = useApp();
  const [filterType, setFilterType] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  const handleBookmark = (id: string, title: string) => {
    setBookmarkedIds((prev) => {
      const isBookmarked = prev.includes(id);
      if (isBookmarked) {
        addNotification(`Removed booklet bookmark: "${title}"`);
        return prev.filter((item) => item !== id);
      } else {
        addNotification(`Bookmarked consulting report: "${title}"`);
        return [...prev, id];
      }
    });
  };

  const handleDownload = (title: string) => {
    // Simulated PDF downloader manifest
    const stubText = `
=========================================
     FLOWFINANCE STRATEGIC INTELLIGENCE
        CONSULTING REPORT COMPLIANCE
=========================================

Title:       ${title}
Scope:       Indian MSME Fintech Integration
Category:    Investor Ready
Security:    Simulated General Distribution

Thank you for downloading this strategic blueprint. For custom queries 
or investor relations portals, consult our AI Strategy Advisor console.

FlowFinance Growth Intelligence Group, 2026.
=========================================
`;
    const element = document.createElement("a");
    const file = new Blob([stubText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${title.replace(/\s+/g, "_")}_Executive_Briefing.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    addNotification(`Downloaded simulated PDF briefing file for "${title}"`);
  };

  // Filter & Search Logic
  const filteredReports = GROWTH_REPORTS.filter((rep) => {
    const matchesType = filterType === "All" || rep.category === filterType;
    const matchesSearch = 
      rep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rep.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="space-y-8 font-sans">
      
      {/* Upper action details */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-display tracking-tight">Reports & Briefings Library</h2>
          <p className="text-xs text-slate-500">
            Consulting documents, market briefs, investor decks, and campus ambassador playbooks.
          </p>
        </div>

        {/* Categories filters */}
        <div className="flex items-center space-x-2 text-xs shrink-0 bg-slate-50 p-1 rounded-xl dark:bg-slate-950 border border-slate-150 dark:border-slate-850">
          {["All", "GTM Strategy", "Market Opportunity", "Partnerships", "Ambassador Program"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilterType(cat);
                addNotification(`Briefings categorized: "${cat}"`);
              }}
              className={`rounded-lg px-3 py-1 font-bold ${
                filterType === cat 
                  ? "bg-slate-900 text-white dark:bg-slate-850" 
                  : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              } transition-colors cursor-pointer text-[10px] uppercase`}
            >
              {cat.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Search Input bar */}
      <div className="relative max-w-md text-xs font-semibold">
        <input
          type="text"
          placeholder="Search briefings summary topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-2.5 pl-9 pr-3 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 text-xs"
        />
        <Search className="absolute left-3 top-3 h-3.5 w-3.5 text-slate-400" />
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReports.map((r) => {
          const isBookmarked = bookmarkedIds.includes(r.id);
          return (
            <div
              key={r.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm flex flex-col justify-between hover:scale-[1.01] transition-transform"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="rounded bg-slate-50 p-2 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    <FileText className="h-4.5 w-4.5" />
                  </div>
                  
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[9px] font-mono font-bold bg-slate-50 dark:bg-slate-950 text-slate-500 px-2 py-0.5 rounded border border-slate-150 dark:border-slate-850">
                      {r.readTime}
                    </span>
                    
                    <button
                      onClick={() => handleBookmark(r.id, r.title)}
                      className={`p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-all ${
                        isBookmarked ? "text-amber-500" : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`} />
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs">
                  <b className="font-bold text-slate-900 dark:text-white text-sm font-display tracking-tight block">
                    {r.title}
                  </b>
                  <span className="text-[10px] text-blue-500 font-bold uppercase tracking-wider block font-mono">
                    {r.category}
                  </span>
                  <p className="text-slate-500 dark:text-slate-400 font-medium text-[11px] leading-relaxed pt-2">
                    {r.summary}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between">
                <button
                  onClick={() => handleDownload(r.title)}
                  className="rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-755 text-slate-800 dark:text-slate-200 font-bold py-1.5 px-3.5 flex items-center space-x-1.5 text-[10px] transition-colors cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download simulated PDF (.TXT)</span>
                </button>
                <ChevronRight className="h-4 w-4 text-slate-300" />
              </div>
            </div>
          );
        })}

        {filteredReports.length === 0 && (
          <div className="md:col-span-2 text-center py-12 text-slate-400 italic">
            No consulting papers matching your search filters.
          </div>
        )}
      </div>

    </div>
  );
}
