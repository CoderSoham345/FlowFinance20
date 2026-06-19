import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../components/AppContext";
import { Lock, CheckCircle } from "lucide-react";

export default function ResetPassword() {
  const { addNotification } = useApp();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (password && password === confirmPassword) {
      setStatus("success");
      addNotification("Passcode credentials updated perfectly");
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md space-y-6">
        
        <div className="text-center space-y-2">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 font-bold border border-blue-500/20">
            🔐
          </div>
          <h2 className="text-2xl font-bold font-display tracking-tight text-slate-800 dark:text-white">
            Set New Password Key
          </h2>
          <p className="text-xs text-slate-500 max-w-xs mx-auto">
            Create an updated password configuration to secure your consulting workspace.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 transition-colors">
          {status === "success" ? (
            <div className="text-center py-6 space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-800 dark:text-white">
                  Passcode Reset Completed
                </h4>
                <p className="text-xs text-slate-500">
                  Your security key has been successfully adjusted. You can now authenticate with your updated passphrase.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/login"
                  className="rounded-xl bg-blue-600 hover:bg-blue-500 px-5 py-2.5 text-xs font-bold text-white transition-all inline-block"
                >
                  Return to Login
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleReset} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                  New Password Key
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent py-2 pl-9 pr-3 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                  <Lock className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Confirm Password Key
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent py-2 pl-9 pr-3 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                  <Lock className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 py-2.5 text-xs font-bold text-white shadow-lg transition-all text-center cursor-pointer"
              >
                Assemble Passcode Change
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
