import React from "react";
import InteractiveCompetitorTable from "../components/InteractiveCompetitorTable";

export default function CompetitorAnalysis() {
  return (
    <div className="space-y-8 font-sans">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-display tracking-tight">Competitor Intelligence Analysis</h2>
        <p className="text-xs text-slate-500">
          Comparing FlowFinance's AI-powered cash forecasting model directly against passive traditional ledgers.
        </p>
      </div>

      {/* Embedded Table Component */}
      <InteractiveCompetitorTable />

    </div>
  );
}
