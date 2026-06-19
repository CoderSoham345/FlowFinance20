import React, { useState } from "react";
import { useApp } from "../components/AppContext";
import { GROWTH_REPORTS } from "../data";
import { 
  ShieldCheck, Users, HeartHandshake, FileText, BarChart3, Check, X,
  Trash2, Plus, Calendar, Sparkles, TrendingUp, DollarSign, Award, ArrowUpRight, Search, CheckCircle2
} from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, Cell, PieChart, Pie } from "recharts";

export default function Admin() {
  const { 
    bookings, 
    addNotification, 
    currentUser, 
    ambassadors, 
    updateAmbassadorStatus,
    partners,
    updatePartnerStatus
  } = useApp();

  const [activeTab, setActiveTab] = useState<"users" | "ambassadors" | "partners" | "analytics" | "reports">("users");

  // Simulated list of users for administration
  const [users, setUsers] = useState([
    { id: "u1", name: "Admin Executive", email: "admin@flowfinance.ai", role: "Admin", status: "Active" },
    { id: "u2", name: "Meera Nair", email: "founder@startup.com", role: "Founder", status: "Active" },
    { id: "u3", name: "Siddharth Mehta", email: "ambassador@college.edu", role: "Campus Ambassador", status: "Active" },
    { id: "u4", name: "Vikram Malhotra", email: "consultant@finance.com", role: "Consultant", status: "Active" },
    { id: "u5", name: "Ananya Sharma", email: "ananya@flowfinance.org", role: "Admin", status: "Active" },
    { id: "u6", name: "Rohan Das", email: "rohan@startupindia.org", role: "User", status: "Pending Guidance" }
  ]);

  const [reports, setReports] = useState(GROWTH_REPORTS);

  const [newReportTitle, setNewReportTitle] = useState("");
  const [newReportCat, setNewReportCat] = useState<"Growth Reports" | "Market Reports" | "Strategy Reports">("Growth Reports");

  // New report creation handler
  const handleCreateReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReportTitle) return;
    
    const newRep = {
      id: "rep_custom_" + (reports.length + 1),
      title: newReportTitle,
      category: newReportCat,
      summary: "Simulated administrative report drafted instantly via CFO Panel dashboard.",
      author: currentUser.name,
      date: new Date().toISOString().split("T")[0],
      size: "2.4 MB",
      readTime: "8 min read",
      content: "This report provides comprehensive, mock analytical trends for optimization strategies in the India startup fintech space."
    };

    setReports([newRep, ...reports]);
    setNewReportTitle("");
    addNotification(`Operational Report created: "${newReportTitle}"`);
  };

  const handleDeleteReport = (id: string, name: string) => {
    setReports(reports.filter(r => r.id !== id));
    addNotification(`Report deleted successfully: "${name}"`);
  };

  // User list action handlers
  const toggleUserStatus = (id: string) => {
    setUsers(prev => prev.map(u => {
      if (u.id === id) {
        const newStatus = u.status === "Active" ? "Suspended" : "Active";
        addNotification(`User ${u.email} status set to: ${newStatus}`);
        return { ...u, status: newStatus };
      }
      return u;
    }));
  };

  const handleUpdateUserRole = (id: string, newRole: any) => {
    setUsers(prev => prev.map(u => {
      if (u.id === id) {
        addNotification(`Promoted user ${u.name} to: ${newRole}`);
        return { ...u, role: newRole };
      }
      return u;
    }));
  };

  // Analytics helper datasets
  const revenueMetrics = [
    { month: "Jan", MRR: 110000, TotalGross: 750000, CAC: 540 },
    { month: "Feb", MRR: 130000, TotalGross: 890000, CAC: 490 },
    { month: "Mar", MRR: 155000, TotalGross: 1040000, CAC: 480 },
    { month: "Apr", MRR: 170000, TotalGross: 1120000, CAC: 450 },
    { month: "May", MRR: 175000, TotalGross: 1210000, CAC: 420 },
    { month: "Jun", MRR: 180000, TotalGross: 1250000, CAC: 390 }
  ];

  const roleDistribution = [
    { name: "Admin", value: 3 },
    { name: "Founder", value: 45 },
    { name: "Campus Ambassador", value: 12 },
    { name: "Consultant", value: 8 },
    { name: "Registered User", value: 115 }
  ];

  const COLORS = ["#3b82f6", "#10b981", "#ef4444", "#8b5cf6", "#f59e0b"];

  // Blocking access guard for non-Admin views
  if (currentUser.role !== "Admin") {
    return (
      <div className="rounded-2xl border border-rose-500/10 bg-rose-500/5 p-8 space-y-5 max-w-xl mx-auto font-sans text-center mt-12 shadow-2xl">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/10 text-rose-500 text-2xl font-bold animate-pulse">
          ⚠️
        </div>
        <h3 className="text-base font-extrabold text-slate-800 dark:text-white font-display">Administrative Clearance Required</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
          Your current session role is <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 font-mono text-[11px] font-bold">{currentUser.role}</span>. To access this Superuser Command Portal immediately:
        </p>

        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl space-y-2.5 text-xs text-left">
          <p className="font-semibold text-slate-700 dark:text-slate-350">Option A: Switch Active Session Persona</p>
          <span className="block text-slate-500 text-[11px] leading-snug">
            Click the **"Role: {currentUser.role}"** switcher button in the upper-right corner of the Navbar, then select **"Admin"** to preview complete features instantly!
          </span>
          <div className="h-px bg-slate-200 dark:bg-slate-800 my-2"></div>
          <p className="font-semibold text-slate-700 dark:text-slate-350">Option B: Lock Out and Log in as Pre-Configured Demo admin</p>
          <span className="block text-slate-500 text-[11px] leading-snug">
            Log out and use credentials: **admin@flowfinance.ai** / pass: **Admin@123**.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 font-sans">
      
      {/* Title block */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="inline-block p-1.5 rounded-lg bg-red-500/10 text-red-500 font-bold">
              👑
            </span>
            <h2 className="text-2xl font-bold text-slate-805 dark:text-white font-display tracking-tight">CFO Administration Board</h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Superuser view: Perform instant reviews on users, approve student applications, discuss strategic partners, and monitor CAC/revenue.
          </p>
        </div>

        <span className="text-[10px] bg-red-500/10 text-red-500 border border-red-500/20 px-3 py-1 rounded-full font-mono font-bold uppercase tracking-wider animate-pulse">
          Admin Console Active
        </span>
      </div>

      {/* Tabs navigation */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-slate-200 dark:border-slate-805 pb-px font-bold text-xs select-none">
        <button
          onClick={() => setActiveTab("users")}
          className={`px-4 py-2.5 border-b-2 font-display transition-colors flex items-center space-x-1.5 ${activeTab === "users" ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400" : "border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-200"}`}
        >
          <Users className="h-4 w-4" />
          <span>View Users ({users.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("ambassadors")}
          className={`px-4 py-2.5 border-b-2 font-display transition-colors flex items-center space-x-1.5 ${activeTab === "ambassadors" ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400" : "border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-200"}`}
        >
          <Award className="h-4 w-4" />
          <span>Approve Ambassadors ({ambassadors.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("partners")}
          className={`px-4 py-2.5 border-b-2 font-display transition-colors flex items-center space-x-1.5 ${activeTab === "partners" ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400" : "border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-200"}`}
        >
          <HeartHandshake className="h-4 w-4" />
          <span>Strategic Partnerships ({partners.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("analytics")}
          className={`px-4 py-2.5 border-b-2 font-display transition-colors flex items-center space-x-1.5 ${activeTab === "analytics" ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400" : "border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-200"}`}
        >
          <BarChart3 className="h-4 w-4" />
          <span>Analytics & Revenue</span>
        </button>

        <button
          onClick={() => setActiveTab("reports")}
          className={`px-4 py-2.5 border-b-2 font-display transition-colors flex items-center space-x-1.5 ${activeTab === "reports" ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400" : "border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-200"}`}
        >
          <FileText className="h-4 w-4" />
          <span>Manage Reports ({reports.length})</span>
        </button>
      </div>

      {/* Tab Panels content */}
      <div className="space-y-6">

        {/* TAB 1: USERS PANEL */}
        {activeTab === "users" && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
            <div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-white uppercase font-mono tracking-wider">Registered System Users</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">Edit operational settings, modify roles, or terminate sessions easily.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse font-medium">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-400 font-mono text-[10px] uppercase font-bold tracking-wider">
                    <th className="py-2.5 px-3">Full User Name</th>
                    <th className="py-2.5 px-3">Email Address</th>
                    <th className="py-2.5 px-3 font-semibold">User Role</th>
                    <th className="py-2.5 px-3">Status</th>
                    <th className="py-2.5 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800/60 text-[11px] text-slate-650 dark:text-slate-405">
                  {users.map((u) => (
                    <tr key={u.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-colors">
                      <td className="py-3 px-3 text-slate-800 dark:text-white font-bold">{u.name}</td>
                      <td className="py-3 px-3 font-mono text-[10px]">{u.email}</td>
                      <td className="py-3 px-3">
                        <select
                          value={u.role}
                          onChange={(e) => handleUpdateUserRole(u.id, e.target.value as any)}
                          className="rounded border border-slate-200 dark:border-slate-800 bg-transparent px-2 py-0.5 text-[10px] focus:outline-none focus:border-blue-500"
                        >
                          <option value="Admin">Admin 👑</option>
                          <option value="Founder">Founder 🚀</option>
                          <option value="Consultant">Consultant 💬</option>
                          <option value="Campus Ambassador">Ambassador 🎓</option>
                          <option value="User">SaaS User 💻</option>
                        </select>
                      </td>
                      <td className="py-3 px-3">
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold font-mono ${u.status === "Active" ? "bg-emerald-500/10 text-emerald-600" : "bg-rose-500/10 text-rose-500"}`}>
                          {u.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={() => toggleUserStatus(u.id)}
                          className={`rounded px-2.5 py-1 text-[9px] font-bold uppercase transition-all ${
                            u.status === "Active" 
                              ? "bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white" 
                              : "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white"
                          }`}
                        >
                          {u.status === "Active" ? "Suspend user" : "Re-activate"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: AMBASSADORS APPROVALS */}
        {activeTab === "ambassadors" && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
            <div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-white uppercase font-mono tracking-wider">Campus Ambassador Applications</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">Audit verified university nodes, authorize UPI payout multipliers, or ban registrations.</p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {ambassadors.map((am) => (
                <div 
                  key={am.id}
                  className="p-4 rounded-xl border border-slate-150 dark:border-slate-800 bg-slate-50/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <b className="font-bold text-slate-800 dark:text-white text-xs">{am.name}</b>
                      <span className="text-[10px] text-slate-400">•</span>
                      <span className="text-[10px] text-slate-400 font-bold">{am.university}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold ${
                        am.status === "Active" || am.status === "Approved"
                          ? "bg-emerald-500/10 text-emerald-600" 
                          : "bg-amber-500/10 text-amber-500"
                      }`}>
                        {am.status}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-500 flex items-center space-x-4 font-mono">
                      <span>Conversions: <b className="text-blue-500">{am.conversions}</b></span>
                      <span>Total Referrals: <b className="text-indigo-500">{am.referrals}</b></span>
                      <span>Earned: <b className="text-emerald-500">₹{am.commission.toLocaleString()}</b></span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {am.status !== "Active" && am.status !== "Approved" ? (
                      <button
                        onClick={() => {
                          updateAmbassadorStatus(am.id, "Active");
                          addNotification(`Approved campus node: ${am.name}`);
                        }}
                        className="rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold py-1.5 px-3 text-[10px] cursor-pointer flex items-center space-x-1"
                      >
                        <Check className="h-3 w-3 stroke-[3.5]" />
                        <span>Verify Node</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          updateAmbassadorStatus(am.id, "Suspended");
                          addNotification(`Suspended campus node: ${am.name}`);
                        }}
                        className="rounded-lg bg-orange-500/10 hover:bg-orange-500/15 text-orange-500 font-mono font-bold py-1.5 px-3 text-[10px] cursor-pointer flex items-center space-x-1"
                      >
                        <X className="h-3 w-3" />
                        <span>Deactivate Code</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: STRATEGIC PARTNERSHIPS */}
        {activeTab === "partners" && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
            <div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-white uppercase font-mono tracking-wider">Strategic Partner Listings</h3>
              <p className="text-[10px] text-slate-400 mt-0.5">Toggle active statuses for co-branding incubator hubs, accelerators or networks across India.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {partners.map((p) => (
                <div 
                  key={p.id}
                  className="p-4 rounded-xl border border-slate-150 dark:border-slate-850 bg-slate-50/20 flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <b className="font-extrabold text-slate-850 dark:text-white text-sm">{p.name}</b>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold font-mono ${
                        p.status === "Active" 
                          ? "bg-blue-500/10 text-blue-500" 
                          : p.status === "In Discussion" 
                            ? "bg-amber-500/10 text-amber-500" 
                            : "bg-slate-120 text-slate-400"
                      }`}>
                        {p.status}
                      </span>
                    </div>
                    <span className="text-[9px] font-bold text-blue-500 font-mono block">{p.type} • Impact Potential: {p.impact}</span>
                    <p className="text-[10px] text-slate-500 pt-1 leading-snug">{p.potential || p.description}</p>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-805 flex items-center justify-end space-x-2">
                    <button
                      onClick={() => updatePartnerStatus(p.id, "Active")}
                      className="rounded bg-blue-600 hover:bg-blue-500 text-white font-bold px-2.5 py-1 text-[10px]"
                    >
                      Authorize discussion
                    </button>
                    <button
                      onClick={() => updatePartnerStatus(p.id, "In Discussion")}
                      className="rounded border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-500 font-semibold px-2.5 py-1 text-[10px]"
                    >
                      Schedule Session
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: ANALYTICS & REVENUE METRICS */}
        {activeTab === "analytics" && (
          <div className="space-y-6">
            
            {/* Core analytics review metrics display */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl border border-indigo-500/15 bg-indigo-550/5 shadow-sm text-xs">
                <span className="block text-slate-400 uppercase font-mono text-[10px] font-bold tracking-wider">Gross run rate (YTD)</span>
                <span className="block text-2xl font-black font-mono text-slate-900 dark:text-white mt-1">₹12,50,000</span>
                <span className="text-emerald-500 font-mono font-bold block mt-1">+18% Month-over-Month</span>
              </div>

              <div className="p-5 rounded-2xl border border-blue-500/15 bg-blue-550/5 shadow-sm text-xs">
                <span className="block text-slate-400 uppercase font-mono text-[10px] font-bold tracking-wider">MRR Breakdown</span>
                <span className="block text-2xl font-black font-mono text-slate-900 dark:text-white mt-1">₹1,80,000</span>
                <span className="text-blue-500 font-mono font-bold block mt-1">From 245 active Saas accounts</span>
              </div>

              <div className="p-5 rounded-2xl border border-purple-500/15 bg-purple-550/5 shadow-sm text-xs border-dashed">
                <span className="block text-slate-400 uppercase font-mono text-[10px] font-bold tracking-wider">Aggregated CAC</span>
                <span className="block text-2xl font-black font-mono text-emerald-500 mt-1">₹390 / customer</span>
                <span className="text-slate-400 font-mono block mt-1">Decreasing due to Ambassador program</span>
              </div>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Barchart of MRR and GROSS */}
              <div className="lg:col-span-8 p-6 rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase font-mono tracking-wider">Historical Revenue Expansion</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 font-sans">Gross run-rate trajectory matched with recurring software billings (INR)</p>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueMetrics} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.08)" />
                      <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 9, fill: "#94a3b8", fontFamily: "monospace" }} />
                      <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 9, fill: "#94a3b8", fontFamily: "monospace" }} />
                      <Tooltip contentStyle={{ backgroundColor: "#111827", border: "none", borderRadius: "8px", color: "#fff", fontSize: "11px" }} />
                      <Legend verticalAlign="top" height={32} iconType="circle" wrapperStyle={{ fontSize: "10px", fontFamily: "monospace" }} />
                      <Line type="monotone" name="Total Gross (INR)" dataKey="TotalGross" stroke="#3b82f6" strokeWidth={3} activeDot={{ r: 6 }} />
                      <Line type="monotone" name="SaaS MRR (INR)" dataKey="MRR" stroke="#10b981" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Right circular chart of User Role distribution */}
              <div className="lg:col-span-4 p-5 rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white uppercase font-mono tracking-wider">User role Segmentation</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Distribution of platform licenses</p>
                </div>

                {/* Pie chart representing database role proportions */}
                <div className="h-44 w-full flex items-center justify-center relative my-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={roleDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={45}
                        outerRadius={65}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        {roleDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute text-center mt-[-4px]">
                    <span className="block text-xl font-mono font-black text-slate-800 dark:text-white">183</span>
                    <span className="text-[8px] text-slate-500 uppercase tracking-widest font-bold font-sans">LICENSES</span>
                  </div>
                </div>

                {/* Legend list */}
                <div className="space-y-1.5 text-[10px] font-mono leading-none">
                  {roleDistribution.map((r, index) => (
                    <div key={r.name} className="flex items-center justify-between text-slate-500">
                      <div className="flex items-center space-x-1.5">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: COLORS[index] }}></span>
                        <span className="text-slate-600 dark:text-slate-400 truncate max-w-[120px]">{r.name}</span>
                      </div>
                      <span className="font-bold text-slate-800 dark:text-slate-200 font-mono">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 5: STRATEGY REPORTS MANAGEMENT */}
        {activeTab === "reports" && (
          <div className="space-y-6">
            
            {/* Create new report form panel */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-850 dark:bg-slate-900 shadow-sm space-y-4">
              <div>
                <h3 className="text-xs font-bold text-slate-850 dark:text-white uppercase font-mono tracking-wider">Draft Strategy Insight Report</h3>
                <p className="text-[10px] text-slate-400">Instantly append simulated PDFs or documentation guidelines to the customer's portal.</p>
              </div>

              <form onSubmit={handleCreateReport} className="flex flex-col sm:flex-row gap-3 text-xs">
                <input
                  type="text"
                  required
                  placeholder="e.g. FY26 Q4 SaaS expansion in Pune & Hyderabad hubs"
                  value={newReportTitle}
                  onChange={(e) => setNewReportTitle(e.target.value)}
                  className="flex-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent px-3.5 py-2 text-slate-850 dark:text-slate-200 focus:outline-none"
                />
                
                <select
                  value={newReportCat}
                  onChange={(e: any) => setNewReportCat(e.target.value)}
                  className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-slate-800 focus:outline-none"
                >
                  <option value="Growth Reports">Growth Reports</option>
                  <option value="Market Reports">Market Reports</option>
                  <option value="Strategy Reports">Strategy Reports</option>
                </select>

                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 hover:bg-blue-500 font-bold px-4 py-2 text-white shrink-0 cursor-pointer text-center flex items-center justify-center space-x-1"
                >
                  <Plus className="h-4 w-4" />
                  <span>Draft Report</span>
                </button>
              </form>
            </div>

            {/* List of reports */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-4">
              <h4 className="text-xs font-bold text-slate-850 dark:text-white uppercase font-mono tracking-wider">Available files in database</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reports.map((rep) => (
                  <div 
                    key={rep.id}
                    className="p-4 rounded-xl border border-slate-150 dark:border-slate-850 bg-slate-50/20 text-xs flex flex-col justify-between hover:border-blue-500/30 transition-all group"
                  >
                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <span className="text-[9px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-mono font-bold text-blue-500 uppercase">{rep.category}</span>
                        <button
                          onClick={() => handleDeleteReport(rep.id, rep.title)}
                          className="opacity-20 group-hover:opacity-100 text-rose-500 hover:bg-rose-500/10 p-1 rounded transition-opacity"
                          title="Delete report"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <b className="block font-extrabold text-slate-850 dark:text-white text-sm pt-1 leading-snug">{rep.title}</b>
                      <p className="text-[10px] text-slate-450 leading-relaxed pt-1 line-clamp-2">{rep.summary}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-805 flex items-center justify-between font-mono text-[9px] text-slate-400 leading-none">
                      <span>Author: {rep.author}</span>
                      <span>{rep.size} • {rep.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
