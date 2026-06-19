import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "./AppContext";
import { 
  Building2, LayoutDashboard, AreaChart, Users, FileBarChart, Milestone, 
  Settings, UserCheck, HeartHandshake, Award, QrCode, Calculator, Terminal, 
  HelpCircle, BookOpen, Newspaper, Server, Mail, ShieldAlert, AlignLeft, X 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Sidebar() {
  const { currentUser } = useApp();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuGroups = [
    {
      title: "Core Platform",
      items: [
        { path: "/home", label: "GTM Executive Portal", icon: Building2 },
        { path: "/dashboard", label: "SaaS Control Tower", icon: LayoutDashboard },
        { path: "/kpi-dashboard", label: "Enterprise KPIs", icon: FileBarChart },
      ]
    },
    {
      title: "Strategy & Modeling",
      items: [
        { path: "/market-analysis", label: "TAM SAM SOM Market", icon: AreaChart },
        { path: "/user-personas", label: "Interactive Personas", icon: Users },
        { path: "/competitor-analysis", label: "Competitor Matrix", icon: UserCheck },
      ]
    },
    {
      title: "GTM Roads & Metrics",
      items: [
        { path: "/gtm-strategy", label: "Animated Roadmaps", icon: Milestone },
        { path: "/customer-acquisition", label: "Acquisition Funnels", icon: Calculator },
        { path: "/distribution-strategy", label: "Distribution Paths", icon: FileBarChart },
      ]
    },
    {
      title: "Ambassador Ecosystem",
      items: [
        { path: "/partnership-hub", label: "Partner Hub", icon: HeartHandshake },
        { path: "/campus-ambassador", label: "Ambassador Board", icon: Award },
        { path: "/referrals", label: "Referrals & QR Maker", icon: QrCode },
        { path: "/revenue-expansion", label: "Revenue Simulator", icon: AreaChart },
      ]
    },
    {
      title: "SaaS Engine Utilities",
      items: [
        { path: "/ai-growth-advisor", label: "AI Advisor Chat", icon: Terminal, highlight: true },
        { path: "/surveys", label: "Market Validation", icon: HelpCircle },
        { path: "/reports", label: "Strategy Reports PDF", icon: BookOpen },
        { path: "/blog", label: "Fintech Business Blog", icon: Newspaper },
        { path: "/contact", label: "Support & Bookings", icon: Mail },
      ]
    },
    {
      title: "CFO Console Panels",
      items: [
        { path: "/profile", label: "My Profile Metrics", icon: Users },
        { path: "/settings", label: "Preferences", icon: Settings },
        { path: "/admin", label: "Platform Command", icon: ShieldAlert, adminOnly: true },
      ]
    }
  ];

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-slate-900 border-r border-slate-800 text-slate-300 w-64 md:w-72 font-sans transition-colors duration-200">
      
      {/* Brand & Identity Header */}
      <div className="flex h-16 items-center px-6 border-b border-slate-800 space-x-3 bg-slate-950/40">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-lg font-display shadow-md shadow-blue-500/15">
          F
        </div>
        <div>
          <span className="block font-bold text-sm tracking-tight text-white font-display uppercase">FlowFinance</span>
          <span className="block text-[10px] text-blue-400 font-mono tracking-widest leading-none">INTELLIGENCE</span>
        </div>
      </div>

      {/* Navigation Scrollable Panel */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        {menuGroups.map((group, gIdx) => {
          // Hide admin menus if not logged in as Admin
          const processedItems = group.items.filter((item: any) => {
            if (item.adminOnly && currentUser.role !== "Admin") return false;
            return true;
          });

          if (processedItems.length === 0) return null;

          return (
            <div key={gIdx} className="space-y-1.5">
              <span className="block px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                {group.title}
              </span>
              <ul className="space-y-0.5">
                {processedItems.map((item: any) => {
                  const isActive = location.pathname === item.path;
                  const Icon = item.icon;

                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={handleLinkClick}
                        className={`group flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-150 ${
                          isActive
                            ? "bg-slate-800 text-white border-l-4 border-blue-500"
                            : "hover:bg-slate-800/40 hover:text-white text-slate-400"
                        }`}
                      >
                        <div className="flex items-center space-x-2.5">
                          <Icon className={`h-4 w-4 transition-colors ${
                            isActive ? "text-blue-500" : "text-slate-500 group-hover:text-slate-300"
                          }`} />
                          <span className="tracking-tight">{item.label}</span>
                        </div>
                        {item.highlight && (
                          <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>

      {/* Compact Mini Account Drawer */}
      <div className="p-4 border-t border-slate-800 bg-slate-950/20 font-mono text-[10px] text-slate-500 flex flex-col space-y-1">
        <div className="flex items-center justify-between">
          <span>Active Role:</span>
          <span className="text-blue-400 font-bold">{currentUser.role}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Local Clock:</span>
          <span>00:41 UTC</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex h-14 items-center justify-between px-4 bg-slate-900 border-b border-slate-800 text-white z-50">
        <div className="flex items-center space-x-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold font-display">
            F
          </div>
          <span className="font-bold text-xs font-display tracking-widest uppercase">FLOWFINANCE HUB</span>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-1.5 border border-slate-800 text-slate-400 hover:text-white"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <AlignLeft className="h-5 w-5" />}
        </button>
      </div>

      {/* Desktop Permanent Sidebar */}
      <aside className="hidden md:block h-screen sticky top-0 shrink-0">
        {sidebarContent}
      </aside>

      {/* Mobile Slide-Out Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60"
            />

            {/* Sidebar window */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="relative z-50 flex flex-col h-full bg-slate-900 shadow-2xl"
            >
              {sidebarContent}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
