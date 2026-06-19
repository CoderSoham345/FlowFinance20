import React, { createContext, useContext, useState, useEffect } from "react";
import { DashboardUser, Partner, Ambassador, BlogArticle, GrowthReport, UserRole } from "../types";
import { INITIAL_PARTNERS } from "../data";

interface AppContextType {
  currentUser: DashboardUser;
  setCurrentUser: (user: DashboardUser) => void;
  partners: Partner[];
  addPartner: (partner: Omit<Partner, "id" | "impact" | "status">) => void;
  updatePartnerStatus: (id: string, status: Partner["status"]) => void;
  ambassadors: Ambassador[];
  addAmbassador: (name: string, university: string) => void;
  updateAmbassadorStatus: (id: string, status: string) => void;
  bookings: Array<{ id: string; name: string; company: string; email: string; date: string; time: string; status: string }>;
  addBooking: (name: string, company: string, email: string, date: string, time: string) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
  referrals: Array<{ id: string; code: string; clicks: number; trials: number; conversions: number; revenue: number; date: string }>;
  generateReferral: (customCode?: string) => string;
  bookmarks: string[]; // Report and blog IDs
  toggleBookmark: (id: string) => void;
  notifications: string[];
  addNotification: (text: string) => void;
  clearNotifications: () => void;
  logout: () => void;
  loginUser: (email: string, role: UserRole, name?: string) => void;
}

const defaultUser: DashboardUser = {
  name: "Visitor Guest",
  email: "guest@flowfinance.org",
  role: "Guest",
  isLoggedIn: false,
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<DashboardUser>(() => {
    const saved = localStorage.getItem("flow_user");
    return saved ? JSON.parse(saved) : defaultUser;
  });

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("flow_theme");
    return (saved as "light" | "dark") || "dark";
  });

  const [partners, setPartners] = useState<Partner[]>(() => {
    const saved = localStorage.getItem("flow_partners");
    return saved ? JSON.parse(saved) : INITIAL_PARTNERS;
  });

  const [ambassadors, setAmbassadors] = useState<Ambassador[]>(() => {
    const saved = localStorage.getItem("flow_ambassadors");
    if (saved) return JSON.parse(saved);
    return [
      { id: "1", name: "Siddharth Mehta", university: "IIT Bombay", referrals: 18, conversions: 12, commission: 11000, status: "Active" },
      { id: "2", name: "Vikram Malhotra", university: "Delhi University", referrals: 10, conversions: 7, commission: 7000, status: "Active" },
      { id: "3", name: "Pooja Roy", university: "IIM Ahmedabad", referrals: 24, conversions: 15, commission: 15000, status: "Active" },
      { id: "4", name: "Aarushi Goel", university: "BITS Pilani", referrals: 6, conversions: 5, commission: 4000, status: "Active" }
    ];
  });

  const [bookings, setBookings] = useState<any[]>(() => {
    const saved = localStorage.getItem("flow_bookings");
    return saved ? JSON.parse(saved) : [
      { id: "b1", name: "Rajesh Kapoor", company: "AeroDrones India", email: "rajesh@aerodrones.in", date: "2026-07-15", time: "02:00 PM", status: "Scheduled" }
    ];
  });

  const [referrals, setReferrals] = useState<any[]>(() => {
    const saved = localStorage.getItem("flow_referrals");
    return saved ? JSON.parse(saved) : [
      { id: "ref1", code: "FLOW-IITB-SID", clicks: 124, trials: 45, conversions: 12, revenue: 18000, date: "2026-06-01" },
      { id: "ref2", code: "FLOW-DEL-VIK", clicks: 87, trials: 23, conversions: 7, revenue: 10500, date: "2026-06-05" }
    ];
  });

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem("flow_bookmarks");
    return saved ? JSON.parse(saved) : ["r1", "b1"];
  });

  const [notifications, setNotifications] = useState<string[]>([]);

  // Apply dark mode on mount / change
  useEffect(() => {
    localStorage.setItem("flow_theme", theme);
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem("flow_user", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem("flow_partners", JSON.stringify(partners));
  }, [partners]);

  useEffect(() => {
    localStorage.setItem("flow_ambassadors", JSON.stringify(ambassadors));
  }, [ambassadors]);

  useEffect(() => {
    localStorage.setItem("flow_bookings", JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem("flow_referrals", JSON.stringify(referrals));
  }, [referrals]);

  useEffect(() => {
    localStorage.setItem("flow_bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    addNotification(`Theme switched to ${theme === "light" ? "Dark" : "Light"} mode`);
  };

  const addNotification = (text: string) => {
    setNotifications((prev) => [text, ...prev.slice(0, 15)]);
  };

  const clearNotifications = () => setNotifications([]);

  const addPartner = (newP: Omit<Partner, "id" | "impact" | "status">) => {
    const partner: Partner = {
      ...newP,
      id: "p" + (partners.length + 1),
      impact: "Calculated",
      status: "Pending Proposal",
    };
    setPartners((prev) => [partner, ...prev]);
    addNotification(`Proposed strategic partnership with "${newP.name}"`);
  };

  const updatePartnerStatus = (id: string, status: Partner["status"]) => {
    setPartners((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status } : p))
    );
    addNotification(`Strategic partner status updated for ${id}`);
  };

  const addAmbassador = (name: string, university: string) => {
    const id = "amb" + (ambassadors.length + 1);
    const newAm: Ambassador = {
      id,
      name,
      university,
      referrals: 0,
      conversions: 0,
      commission: 0,
      status: "Pending Verification",
    };
    setAmbassadors((prev) => [newAm, ...prev]);
    addNotification(`New student ambassador application submitted by "${name}"`);
  };

  const updateAmbassadorStatus = (id: string, status: string) => {
    setAmbassadors((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
    addNotification(`Ambassador ${id} status updated to: ${status}`);
  };

  const addBooking = (name: string, company: string, email: string, date: string, time: string) => {
    const booking = {
      id: "b" + (bookings.length + 1),
      name,
      company,
      email,
      date,
      time,
      status: "Confirmed",
    };
    setBookings((prev) => [booking, ...prev]);
    addNotification(`Demo booked successfully for ${name} at ${time}`);
    
    // Attempt triggering mock backend server post
    fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, company, email, date, time }),
    }).catch((e) => console.log("Standard client persistence saved. API sync bypassed."));
  };

  const generateReferral = (customCode?: string) => {
    const code = customCode ? customCode.toUpperCase() : `FLOW-GEN-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const newRef = {
      id: "ref" + (referrals.length + 1),
      code,
      clicks: 0,
      trials: 0,
      conversions: 0,
      revenue: 0,
      date: new Date().toISOString().split("T")[0],
    };
    setReferrals((prev) => [newRef, ...prev]);
    addNotification(`Referral code generated: "${code}"`);
    return code;
  };

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => {
      const isBookmarked = prev.includes(id);
      const updated = isBookmarked ? prev.filter((b) => b !== id) : [...prev, id];
      addNotification(isBookmarked ? "Item removed from bookmarks" : "Bookmarked strategy item");
      return updated;
    });
  };

  const loginUser = (email: string, role: UserRole, name?: string) => {
    const generatedName = name || email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1);
    const user: DashboardUser = {
      name: generatedName,
      email,
      role,
      isLoggedIn: true,
      avatar: `https://images.unsplash.com/photo-${role === "Admin" ? "1472099645785-5658abf4ff4e" : "1534528741775-53994a69daeb"}?w=150&auto=format&fit=crop&q=80`,
      referralCode: role === "Campus Ambassador" ? "FLOW-CAMPUS-" + generatedName.substring(0, 3).toUpperCase() : undefined,
    };
    setCurrentUser(user);
    addNotification(`Welcome back, ${user.name}! Access role: ${user.role}`);
  };

  const logout = () => {
    setCurrentUser(defaultUser);
    localStorage.removeItem("flow_user");
    addNotification("Logged out safely from administrative console");
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        partners,
        addPartner,
        updatePartnerStatus,
        ambassadors,
        addAmbassador,
        updateAmbassadorStatus,
        bookings,
        addBooking,
        theme,
        toggleTheme,
        referrals,
        generateReferral,
        bookmarks,
        toggleBookmark,
        notifications,
        addNotification,
        clearNotifications,
        logout,
        loginUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used inside an AppProvider");
  }
  return context;
}
