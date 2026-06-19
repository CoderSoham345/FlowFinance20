import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider, useApp } from "./components/AppContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// Page Views
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import MarketAnalysis from "./pages/MarketAnalysis";
import UserPersonas from "./pages/UserPersonas";
import CompetitorAnalysis from "./pages/CompetitorAnalysis";
import GtmStrategy from "./pages/GtmStrategy";
import CustomerAcquisition from "./pages/CustomerAcquisition";
import DistributionStrategy from "./pages/DistributionStrategy";
import PartnershipHub from "./pages/PartnershipHub";
import CampusAmbassador from "./pages/CampusAmbassador";
import Referrals from "./pages/Referrals";
import RevenueExpansion from "./pages/RevenueExpansion";
import AiGrowthAdvisor from "./pages/AiGrowthAdvisor";
import KpiDashboard from "./pages/KpiDashboard";
import Surveys from "./pages/Surveys";
import Reports from "./pages/Reports";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin";

// Protected Route Guard
function ProtectedRoute({ children, requiredRoles }: { children: React.ReactNode; requiredRoles?: string[] }) {
  const { currentUser } = useApp();

  // If user is not authenticated, redirect to login
  if (!currentUser.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // If user role check is requested
  if (requiredRoles && !requiredRoles.includes(currentUser.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}

// Inner Application Layout Wrapper to Sync Dark Classes React state
function MainLayout() {
  const { theme } = useApp();

  return (
    <div className={`min-h-screen transition-colors duration-200 ${theme === "dark" ? "dark bg-slate-950 text-slate-100" : "bg-slate-50/50 text-slate-800"}`}>
      <div className="flex">
        
        {/* Navigation Sidebar */}
        <Sidebar aria-label="Main Navigation" id="main-sidebar" />
        
        {/* Core application view columns */}
        <div className="flex-1 flex flex-col min-h-screen">
          <Navbar id="main-navbar" />
          
          <main className="flex-1 p-6 max-w-7xl w-full mx-auto pb-16">
            <Routes>
              
              {/* Public Views */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />

              {/* Operations Tower views */}
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/kpi-dashboard" element={<ProtectedRoute><KpiDashboard /></ProtectedRoute>} />
              <Route path="/market-analysis" element={<ProtectedRoute><MarketAnalysis /></ProtectedRoute>} />
              <Route path="/user-personas" element={<ProtectedRoute><UserPersonas /></ProtectedRoute>} />
              <Route path="/competitor-analysis" element={<ProtectedRoute><CompetitorAnalysis /></ProtectedRoute>} />
              <Route path="/gtm-strategy" element={<ProtectedRoute><GtmStrategy /></ProtectedRoute>} />
              <Route path="/customer-acquisition" element={<ProtectedRoute><CustomerAcquisition /></ProtectedRoute>} />
              <Route path="/distribution-strategy" element={<ProtectedRoute><DistributionStrategy /></ProtectedRoute>} />
              <Route path="/partnership-hub" element={<ProtectedRoute><PartnershipHub /></ProtectedRoute>} />
              
              {/* Ambassador & Referrals Engine */}
              <Route path="/campus-ambassador" element={<ProtectedRoute><CampusAmbassador /></ProtectedRoute>} />
              <Route path="/referrals" element={<ProtectedRoute><Referrals /></ProtectedRoute>} />
              <Route path="/revenue-expansion" element={<ProtectedRoute><RevenueExpansion /></ProtectedRoute>} />
              
              {/* Intelligence System */}
              <Route path="/ai-growth-advisor" element={<ProtectedRoute><AiGrowthAdvisor /></ProtectedRoute>} />
              <Route path="/surveys" element={<ProtectedRoute><Surveys /></ProtectedRoute>} />
              <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
              <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
              <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
              
              {/* Administratives & Profile */}
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
              <Route path="/admin" element={<ProtectedRoute requiredRoles={["Admin"]}><Admin /></ProtectedRoute>} />

              {/* Fallback redirection */}
              <Route path="*" element={<Navigate to="/" replace />} />

            </Routes>
          </main>
        </div>

      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <MainLayout />
      </HashRouter>
    </AppProvider>
  );
}
