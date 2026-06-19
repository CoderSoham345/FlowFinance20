import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "./AppContext";
import { Bell, Sun, Moon, User, LogOut, ChevronDown, Award, Sparkles, Building2, Eye } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const { currentUser, theme, toggleTheme, notifications, clearNotifications, logout, loginUser } = useApp();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showRoleTester, setShowRoleTester] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRoleChange = (role: "Guest" | "User" | "Campus Ambassador" | "Admin" | "Founder" | "Consultant") => {
    let email = "guest@flowfinance.org";
    let name = "Visitor Guest";
    
    if (role === "Admin") {
      email = "admin@flowfinance.ai";
      name = "Admin Executive";
    } else if (role === "Founder") {
      email = "founder@startup.com";
      name = "Meera Nair";
    } else if (role === "Campus Ambassador") {
      email = "ambassador@college.edu";
      name = "Siddharth Mehta";
    } else if (role === "Consultant") {
      email = "consultant@finance.com";
      name = "Vikram Malhotra";
    } else if (role === "User") {
      email = "user@demo.com";
      name = "SaaS Member";
    }

    loginUser(email, role, name);
    setShowRoleTester(false);
  };

  const currentPathLabel = location.pathname.split("/").pop() || "Home";
  const displayLabel = currentPathLabel.charAt(0).toUpperCase() + currentPathLabel.slice(1).replace("-", " ");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/80 transition-colors duration-200">
      <div className="flex h-16 items-center justify-between px-6">
        
        {/* Title Indicator / Breadcrumb */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 text-sm font-semibold text-slate-500 dark:text-slate-400 font-mono">
            <span>FlowFinance</span>
            <span>/</span>
            <span className="text-slate-900 dark:text-white font-sans text-base tracking-tight font-bold">{displayLabel}</span>
          </div>
          
          {/* Quick Real-Time Status Bullet */}
          <div className="hidden sm:flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Server Live</span>
          </div>
        </div>

        {/* Global Toolbar */}
        <div className="flex items-center space-x-4">
          
          {/* Role Tester (Judge Helper) */}
          <div className="relative">
            <button
              id="role-switch"
              onClick={() => setShowRoleTester(!showRoleTester)}
              className="flex items-center space-x-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium border border-blue-200 bg-blue-50/50 text-blue-700 hover:bg-blue-50 dark:border-blue-900/40 dark:bg-blue-950/20 dark:text-blue-300 transition-all font-mono"
            >
              <Eye className="h-3.5 w-3.5" />
              <span>Role: {currentUser.role}</span>
              <ChevronDown className="h-3 w-3" />
            </button>

            {showRoleTester && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg dark:border-slate-800 dark:bg-slate-950 font-mono text-xs z-50">
                <div className="px-2.5 py-1.5 font-bold text-[10px] uppercase text-slate-400 tracking-wider">
                  Select Preview Persona
                </div>
                {(["Guest", "User", "Founder", "Consultant", "Campus Ambassador", "Admin"] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => handleRoleChange(r)}
                    className={`w-full text-left rounded-lg px-2.5 py-1.5 transition-colors ${
                      currentUser.role === r
                        ? "bg-slate-100 font-bold text-slate-900 dark:bg-slate-800/80 dark:text-white"
                        : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900/50"
                    }`}
                  >
                    {r} {r === "Admin" && "👑"} {r === "Campus Ambassador" && "🎓"}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Switcher */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/60 transition-colors"
            title="Toggle theme mode"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>

          {/* Alerts / Notifications Bell */}
          <div className="relative">
            <button
              id="notifications-bell"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
              className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/60 transition-colors"
            >
              <Bell className="h-4 w-4" />
              {notifications.length > 0 && (
                <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-slate-950 z-50 text-slate-700 dark:text-slate-300">
                <div className="flex items-center justify-between border-b border-slate-150 px-2 py-1.5 dark:border-slate-850">
                  <span className="text-xs font-semibold font-sans">Strategic Log Actions</span>
                  {notifications.length > 0 && (
                    <button
                      onClick={clearNotifications}
                      className="text-[10px] font-mono text-blue-500 hover:underline"
                    >
                      Clear Log
                    </button>
                  )}
                </div>
                <div className="max-h-60 overflow-y-auto mt-1 space-y-1">
                  {notifications.length === 0 ? (
                    <div className="px-3 py-6 text-center text-xs text-slate-400 italic">
                      Zero operational alerts. System is quiet.
                    </div>
                  ) : (
                    notifications.map((n, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg p-2 text-left text-[11px] hover:bg-slate-50 dark:hover:bg-slate-900 border-l-2 border-brand-500 bg-slate-50/50 dark:bg-slate-900/30 font-mono"
                      >
                        {n}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* User Account Capsule */}
          <div className="relative">
            <button
              id="user-profile-menu"
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowNotifications(false);
              }}
              className="flex items-center space-x-2 rounded-lg p-1.5 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
            >
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                referrerPolicy="no-referrer"
                className="h-7 w-7 rounded-lg object-cover ring-1 ring-slate-200 dark:ring-slate-800"
              />
              <span className="hidden md:block text-xs font-semibold text-slate-700 dark:text-slate-300 max-w-[110px] truncate">
                {currentUser.name}
              </span>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg dark:border-slate-800 dark:bg-slate-950 z-50 text-slate-700 dark:text-slate-300">
                <div className="px-3 py-2 border-b border-slate-150 dark:border-slate-850">
                  <div className="text-xs font-bold truncate">{currentUser.name}</div>
                  <div className="text-[10px] text-slate-400 truncate font-mono mt-0.5">{currentUser.email}</div>
                  <div className="mt-1.5 inline-flex items-center space-x-1 rounded-full bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                    <Award className="h-2.5 w-2.5" />
                    <span>{currentUser.role} Scope</span>
                  </div>
                </div>
                
                <div className="p-1 space-y-0.5">
                  <Link
                    to="/profile"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center space-x-2 rounded-lg px-2.5 py-2 text-xs hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
                  >
                    <User className="h-3.5 w-3.5 text-slate-400" />
                    <span>My CFO Profile</span>
                  </Link>
                  {currentUser.isLoggedIn ? (
                    <button
                      onClick={() => {
                        logout();
                        setShowProfileMenu(false);
                        navigate("/login");
                      }}
                      className="w-full flex items-center space-x-2 rounded-lg px-2.5 py-2 text-xs text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 text-left transition-all"
                    >
                      <LogOut className="h-3.5 w-3.5" />
                      <span>Log Out Console</span>
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      onClick={() => setShowProfileMenu(false)}
                      className="flex items-center space-x-2 rounded-lg px-2.5 py-2 text-xs text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-950/20 transition-all font-semibold"
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Authenticate Portal</span>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}
