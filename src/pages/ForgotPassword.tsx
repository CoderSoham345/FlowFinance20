import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, CheckCircle, ArrowLeft } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [complete, setComplete] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setComplete(true);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md space-y-6">
        
        <div className="text-center space-y-2">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 font-bold border border-orange-500/20">
            🔑
          </div>
          <h2 className="text-2xl font-bold font-display tracking-tight text-slate-800 dark:text-white">
            Recover Security Token
          </h2>
          <p className="text-xs text-slate-500 max-w-xs mx-auto">
            Input your registered email, and we will send instructions to reset your dynamic terminal passcode.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 transition-colors">
          {complete ? (
            <div className="text-center py-6 space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-800 dark:text-white">
                  Reset Reference Dispatched
                </h4>
                <p className="text-xs text-slate-500">
                  A simulated password recovery link has been configured for **{email}**. Please check your browser state log.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/reset-password"
                  className="inline-block rounded-lg bg-blue-600 hover:bg-blue-500 px-4 py-2 text-xs font-bold text-white transition-all"
                >
                  Protest with Reset Form
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Registered work email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="e.g. founder@flowfinance.org"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent py-2 pl-9 pr-3 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                  <Mail className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 py-2.5 text-xs font-bold text-white shadow-lg transition-all text-center cursor-pointer"
              >
                Dispatch Passcode Recovery Code
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-xs">
          <Link to="/login" className="inline-flex items-center space-x-1 font-bold text-slate-500 hover:text-blue-500 transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to console</span>
          </Link>
        </p>

      </div>
    </div>
  );
}
