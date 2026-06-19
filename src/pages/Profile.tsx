import React from "react";
import { useApp } from "../components/AppContext";
import { Shield, Mail, Building, User, Key, KeyRound, CheckCircle2 } from "lucide-react";

export default function Profile() {
  const { currentUser } = useApp();

  return (
    <div className="space-y-8 font-sans max-w-3xl mx-auto">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-display tracking-tight font-bold">CFO Strategic Profile</h2>
        <p className="text-xs text-slate-500">
          Individual credentials, role authorizations, and API environment key variables.
        </p>
      </div>

      {/* Main settings grid */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-6">
        
        {/* Header avatar bar */}
        <div className="flex items-center space-x-4 border-b border-slate-100 dark:border-slate-800/80 pb-5">
          <div className="h-12 w-12 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center font-bold text-lg text-blue-500 font-mono">
            {currentUser.name[0]}
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white font-display">{currentUser.name}</h3>
            <span className="text-[10px] text-slate-400 font-mono">{currentUser.email}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-semibold text-slate-600 dark:text-slate-400">
          
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">Authorized Platform Role</span>
            <div className="flex items-center space-x-2 rounded-lg bg-slate-50 p-2.5 dark:bg-slate-950/40 text-slate-800 dark:text-slate-200">
              <Shield className="h-4 w-4 text-blue-500" />
              <span>{currentUser.role}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">Assigned Workspace Cluster</span>
            <div className="flex items-center space-x-2 rounded-lg bg-slate-50 p-2.5 dark:bg-slate-950/40 text-slate-800 dark:text-slate-200">
              <Building className="h-4 w-4 text-emerald-500" />
              <span>NextGen Tech Laboratories GTM</span>
            </div>
          </div>

        </div>

        {/* API Security checklists */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
          <h4 className="text-xs font-bold text-slate-850 dark:text-white uppercase tracking-wider font-mono">Simulated Developer Credentials</h4>
          
          <div className="space-y-3 font-medium text-xs">
            <div className="flex justify-between items-center rounded-lg border border-slate-150 p-3 bg-slate-50/20 dark:border-slate-850">
              <div className="flex items-center space-x-2.5">
                <KeyRound className="h-4 w-4 text-slate-400" />
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200 block">GEMINI_API_KEY</span>
                  <span className="text-[10px] text-slate-400">Validated for AI Chat strategy queries</span>
                </div>
              </div>
              <span className="text-[11px] text-emerald-500 font-bold font-mono">Configured</span>
            </div>

            <div className="flex justify-between items-center rounded-lg border border-slate-150 p-3 bg-slate-50/20 dark:border-slate-850">
              <div className="flex items-center space-x-2.5">
                <KeyRound className="h-4 w-4 text-slate-400" />
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200 block">ICICI_OPEN_BANK_TOKEN</span>
                  <span className="text-[10px] text-slate-400 font-mono">Auto sync cash inflow / outflow feeds</span>
                </div>
              </div>
              <span className="text-[11px] text-blue-500 font-bold font-mono">Sandboxed</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
