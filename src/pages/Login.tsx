import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../components/AppContext";
import { Sparkles, Mail, Lock, Shield, ArrowRight, Chrome, Github, Eye, EyeOff, Check, UserCheck } from "lucide-react";
import { motion } from "motion/react";

export default function Login() {
  const { loginUser, addNotification } = useApp();
  const navigate = useNavigate();
  
  // Login form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [showDemoAccounts, setShowDemoAccounts] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Pre-configured demo accounts requested
  const demoAccounts = [
    {
      email: "admin@flowfinance.ai",
      password: "Admin@123",
      role: "Admin" as const,
      displayName: "Administrator",
      name: "Admin Executive",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
      badgeColor: "bg-red-500/10 text-red-500 border-red-500/20"
    },
    {
      email: "founder@startup.com",
      password: "Founder@123",
      role: "Founder" as const,
      displayName: "Founder",
      name: "Meera Nair",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
    },
    {
      email: "ambassador@college.edu",
      password: "Ambassador@123",
      role: "Campus Ambassador" as const,
      displayName: "Campus Ambassador",
      name: "Siddharth Mehta",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
      email: "consultant@finance.com",
      password: "Consultant@123",
      role: "Consultant" as const,
      displayName: "Consultant",
      name: "Vikram Malhotra",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
      badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    }
  ];

  // Manual username password verification
  const handleManualLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email) {
      setErrorMsg("Please enter email address");
      return;
    }

    // Check if it matches any of the demo accounts
    const match = demoAccounts.find(acc => acc.email.toLowerCase() === email.toLowerCase());
    
    if (match) {
      if (password === match.password || password === "•••••••••" || !password) {
        // Authenticate with specific info
        loginUser(match.email, match.role, match.name);
        addNotification(`Authenticated as ${match.displayName}: ${match.email}`);
        navigate("/dashboard");
        return;
      } else {
        setErrorMsg("Incorrect password. Try clicking 'Try Demo Account' for instant autologin.");
        return;
      }
    }

    // Default general login if doesn't match predefined demo
    loginUser(email, "User", email.split("@")[0]);
    addNotification(`Authenticated successfully: ${email}`);
    navigate("/dashboard");
  };

  const handleDemoAutologin = (acc: typeof demoAccounts[0]) => {
    loginUser(acc.email, acc.role, acc.name);
    addNotification(`Demo One-Click Login enabled as ${acc.displayName}`);
    navigate("/dashboard");
  };

  const handleOAuthLogin = (provider: "Google" | "GitHub") => {
    const mockEmail = provider === "Google" ? "sohamgonbhare13@gmail.com" : "soham.dev@github.com";
    loginUser(mockEmail, "User", provider === "Google" ? "Soham Gonbhare" : "Soham Github");
    addNotification(`${provider} secure authentication completed successfully`);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-md space-y-6">
        
        {/* Header decoration */}
        <div className="text-center space-y-2">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-500 font-bold border border-blue-500/20">
            🔒
          </div>
          <h2 className="text-2xl font-bold font-display tracking-tight text-slate-800 dark:text-white">
            Access FlowFinance Console
          </h2>
          <p className="text-xs text-slate-500 max-w-xs mx-auto font-sans leading-relaxed">
            Enter your credentials or click on the demo accounts panel below to verify role-based layouts immediately.
          </p>
        </div>

        {/* Credentials Form Box */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-850 dark:bg-slate-900 transition-all duration-250">
          
          {errorMsg && (
            <div className="mb-4 text-xs font-mono font-bold text-rose-500 bg-rose-500/10 p-3 rounded-lg border border-rose-500/20">
              ⚠️ {errorMsg}
            </div>
          )}

          <form onSubmit={handleManualLogin} className="space-y-4">
            
            {/* Field: Email */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                Business Email address
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent py-2.5 pl-9 pr-3 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="name@company.com"
                />
                <Mail className="absolute left-3 top-3 h-3.5 w-3.5 text-slate-400" />
              </div>
            </div>

            {/* Field: Password */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Password Key
                </label>
                <Link
                  to="/forgot-password"
                  className="text-[10px] font-mono text-blue-500 hover:underline"
                >
                  Forgot Key?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent py-2.5 pl-9 pr-10 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="••••••••"
                />
                <Lock className="absolute left-3 top-3 h-3.5 w-3.5 text-slate-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Remember me and Reset Links */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 font-medium cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-slate-350 accent-blue-500 h-3.5 w-3.5"
                />
                <span>Remember me on this tool</span>
              </label>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-blue-600 hover:bg-blue-500 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/25 transition-all text-center flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <span>Authenticate and Proceed</span>
              <ArrowRight className="h-4 w-4" />
            </button>

          </form>

          {/* TRY DEMO ACCOUNTS ONE-CLICK AUTOACTION */}
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
            <button
              type="button"
              onClick={() => setShowDemoAccounts(!showDemoAccounts)}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-orange-500/10 hover:bg-orange-500/15 border border-orange-500/20 text-orange-500 font-bold text-xs transition-all tracking-tight cursor-pointer"
            >
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>Try Demo Account</span>
            </button>

            {/* Simulated interactive grid */}
            {showDemoAccounts && (
              <div className="mt-4 text-left grid grid-cols-1 gap-2.5 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-150 dark:border-slate-850 animate-fadeIn">
                <span className="block text-[10px] uppercase font-mono font-bold text-slate-400 mb-1">
                  Select a live demo persona to login instantly:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {demoAccounts.map((acc) => (
                    <button
                      key={acc.email}
                      type="button"
                      onClick={() => handleDemoAutologin(acc)}
                      className="group flex flex-col justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-orange-500/50 dark:hover:border-orange-500/50 text-left transition-all hover:scale-[1.02]"
                    >
                      <div className="flex items-center space-x-2">
                        <img
                          src={acc.avatar}
                          alt={acc.name}
                          className="h-8 w-8 rounded-full object-cover border border-slate-100 dark:border-slate-800"
                        />
                        <div>
                          <span className="block text-[11px] font-bold text-slate-800 dark:text-slate-200 line-clamp-1">
                            {acc.name}
                          </span>
                          <span className={`inline-block text-[9px] font-bold font-mono px-1.5 py-0.5 rounded border ${acc.badgeColor} mt-0.5`}>
                            {acc.displayName}
                          </span>
                        </div>
                      </div>
                      <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col font-mono text-[9px] text-slate-400">
                        <span className="truncate">Email: {acc.email}</span>
                        <span>Pass: {acc.password}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Social OAuth sections */}
          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <span className="block text-center text-[10px] uppercase font-mono font-bold text-slate-400">
              Or quick access via Social API (Simulated OAuth)
            </span>
            
            <div className="grid grid-cols-2 gap-3 text-xs">
              <button
                type="button"
                onClick={() => handleOAuthLogin("Google")}
                className="flex items-center justify-center space-x-2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors font-medium text-slate-600 dark:text-slate-400 cursor-pointer"
              >
                <Chrome className="h-4 w-4 text-rose-500" />
                <span>Google</span>
              </button>
              
              <button
                type="button"
                onClick={() => handleOAuthLogin("GitHub")}
                className="flex items-center justify-center space-x-2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors font-medium text-slate-600 dark:text-slate-400 cursor-pointer"
              >
                <Github className="h-4 w-4 text-slate-700 dark:text-white" />
                <span>GitHub</span>
              </button>
            </div>
          </div>

        </div>

        {/* Create account foot links */}
        <p className="text-center text-xs text-slate-500">
          Don't have a strategy profile?{" "}
          <Link to="/signup" className="font-bold text-blue-500 hover:underline">
            Register Workspace
          </Link>
        </p>

      </div>
    </div>
  );
}
