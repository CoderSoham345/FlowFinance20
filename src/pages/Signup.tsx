import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../components/AppContext";
import { Mail, Lock, User, Building2, ArrowRight } from "lucide-react";

export default function Signup() {
  const { loginUser, addNotification } = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState<any>("User");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    loginUser(email, role, name);
    addNotification(`New SaaS profile registered: "${name}" as ${role}`);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-md space-y-6">
        
        {/* Header decoration */}
        <div className="text-center space-y-2">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-500 font-bold border border-emerald-500/20">
            ✨
          </div>
          <h2 className="text-2xl font-bold font-display tracking-tight text-slate-800 dark:text-white">
            Register FlowFinance Workspace
          </h2>
          <p className="text-xs text-slate-500 max-w-xs mx-auto">
            Boot up a strategic accounting portfolio and connect simulated UPI / bank ledgers instantly.
          </p>
        </div>

        {/* Form panel */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 transition-colors">
          
          <form onSubmit={handleRegister} className="space-y-4">
            
            {/* Name */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                Your Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Meera Nair"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent py-2 pl-9 pr-3 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                />
                <User className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                Work Email address
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="meera@zetatech.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent py-2 pl-9 pr-3 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                />
                <Mail className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
              </div>
            </div>

            {/* Company */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                Company / Incubation Org
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. ZetaTech Laboratories"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent py-2 pl-9 pr-3 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
                />
                <Building2 className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
              </div>
            </div>

            {/* Default Role Choice */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                Target Platform Role Scope
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as any)}
                className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent px-3 py-1.5 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
              >
                <option value="Founder">Founder (Business CEO & Financial modeler)</option>
                <option value="Consultant">Consultant (Strategic Advisor)</option>
                <option value="Campus Ambassador">Campus Ambassador (Student Promoter)</option>
                <option value="Admin">Admin Controller (Full Metrics Audit)</option>
                <option value="User">Registered SaaS User (Business Owner)</option>
              </select>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                Secure Password Key
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

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-blue-600 hover:bg-blue-500 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/25 transition-all text-center flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <span>Build My Board Access</span>
              <ArrowRight className="h-4 w-4" />
            </button>

          </form>

        </div>

        {/* Existing account foot links */}
        <p className="text-center text-xs text-slate-500">
          Already got a workspace profile?{" "}
          <Link to="/login" className="font-bold text-blue-500 hover:underline">
            Console Authentication
          </Link>
        </p>

      </div>
    </div>
  );
}
