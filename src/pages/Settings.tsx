import React from "react";
import { useApp } from "../components/AppContext";
import { Settings as SettingsIcon, Moon, Sun, Bell, ShieldAlert, RefreshCw } from "lucide-react";

export default function Settings() {
  const { theme, toggleTheme, addNotification } = useApp();

  const handleTestNotification = () => {
    addNotification("Test dynamic notification alerted successfully");
    alert("Simulation notification broadcasted!");
  };

  return (
    <div className="space-y-8 font-sans max-w-3xl mx-auto">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-display tracking-tight font-bold">Workspace Settings</h2>
        <p className="text-xs text-slate-500">
          Tailor active theme parameters, notification logs, and workspace preferences.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-6">
        
        {/* Theme configuration */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-100 dark:border-slate-800/80">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-850 dark:text-white font-display flex items-center space-x-1.5 font-bold">
              <span>Visual interface Theme</span>
            </h3>
            <p className="text-[11px] text-slate-500 font-sans">Toggle between high contrast Light or investor ready Dark mode formats on-the-fly.</p>
          </div>

          <button
            onClick={toggleTheme}
            className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 px-3.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 font-bold flex items-center space-x-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            {theme === "light" ? (
              <>
                <Moon className="h-4 w-4" />
                <span>Switch to Dark Theme</span>
              </>
            ) : (
              <>
                <Sun className="h-4 w-4 text-amber-500" />
                <span>Switch to Light Theme</span>
              </>
            )}
          </button>
        </div>

        {/* Notifications and Testing alerts */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-100 dark:border-slate-800/80">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-850 dark:text-white font-display flex items-center space-x-1.5 font-bold">
              <span>Notification telemetry logs</span>
            </h3>
            <p className="text-[11px] text-slate-500 font-sans">Trigger mock toast messages inside the navigation bar to test telemetry signals on-the-fly.</p>
          </div>

          <button
            onClick={handleTestNotification}
            className="rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold px-3.5 py-1.5 text-xs shadow transition-colors cursor-pointer"
          >
            Test telemetry signal
          </button>
        </div>

        {/* Dynamic developer guidelines */}
        <div className="p-4 rounded-xl border border-dashed border-rose-500/20 bg-rose-500/5 text-xs space-y-2">
          <span className="font-bold text-rose-500 flex items-center space-x-1.5">
            <ShieldAlert className="h-4 w-4" />
            <span>Developer Sandbox Security</span>
          </span>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            FlowFinance utilizes direct server-side proxy routes matching port `3000` to mask sensitive integration secrets. Never paste raw credit keys into custom UI files directly.
          </p>
        </div>

      </div>

    </div>
  );
}
