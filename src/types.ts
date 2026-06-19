/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type UserRole = "Guest" | "User" | "Campus Ambassador" | "Admin" | "Founder" | "Consultant";

export interface DashboardUser {
  name: string;
  email: string;
  role: UserRole;
  isLoggedIn: boolean;
  avatar?: string;
  university?: string;
  referralCode?: string;
}

export interface Partner {
  id: string;
  name: string;
  type: "Incubators" | "Accelerators" | "Universities" | "CA Networks" | "Startup Communities" | "Corporate Partners";
  impact: "High" | "Very High" | "Medium" | "Calculated";
  potential: string;
  status: "Active" | "In Discussion" | "Pending Proposal";
  description: string;
  logoUrl?: string;
}

export interface Ambassador {
  id: string;
  name: string;
  university: string;
  referrals: number;
  conversions: number;
  commission: number;
  status: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  summary: string;
  category: "Finance" | "Growth" | "Startups" | "Fundraising" | "AI" | "Forecasting";
  readTime: string;
  date: string;
  author: string;
  content: string;
}

export interface GrowthReport {
  id: string;
  title: string;
  category: "Growth Reports" | "Market Reports" | "Strategy Reports";
  summary: string;
  author: string;
  date: string;
  size: string;
  readTime: string;
  content: string;
}

export interface Persona {
  id: string;
  title: string;
  short?: string;
  role: string;
  avatar: string;
  painPoints: string[];
  needs: string[];
  buyingTriggers: string[];
  expectedLtv: string;
  quote: string;
}
