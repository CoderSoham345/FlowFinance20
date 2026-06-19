import { Partner, BlogArticle, GrowthReport, Persona } from "./types";

export const USER_PERSONAS: Persona[] = [
  {
    id: "1",
    title: "Startup Founder (Tech-focused)",
    role: "Pranav Goel, Founder & CEO of NextGen Logistics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    painPoints: [
      "Extremely manual, high-latency financial forecasting and run-rate calculations.",
      "High costs of hiring full-time CFO services during early Seed/Series A cycles.",
      "Fragmented data across isolated invoicing, banking APIs, and credit accounts.",
      "Complex and repetitive investor metric reporting (LTV, CAC, Web churn cohorts)."
    ],
    needs: [
      "An automated system to sync real-time banking metrics with cash runway alerts.",
      "One-click investor report exporting functionality to simplify quarterly updates.",
      "Automated forecast simulations to model hiring plans and market expansions."
    ],
    buyingTriggers: [
      "Upcoming board meeting requiring clean, dynamic treasury flow charts.",
      "When burn rate approaches critical levels (less than 6 months of runway)."
    ],
    expectedLtv: "₹1,80,000/year (SaaS subscription + Premium Investor Connector)",
    quote: "FlowFinance is my auxiliary CFO. It transformed how our board conceives our cash expansion."
  },
  {
    id: "2",
    title: "SMB Owner (Retail/Manufacturing)",
    role: "Ramesh Iyer, Proprietor at Iyer Agro Industries",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    painPoints: [
      "Fragmented, low-integrity manual paper ledgers and complex GST reporting.",
      "Severe working capital constraints due to delayed customer invoicing.",
      "Lack of cash visibility leading to accidental overdrafts and high interest fees."
    ],
    needs: [
      "A simple, WhatsApp-compatible invoicing and payment reminder system.",
      "Instant multi-account bank-statement reconciliation automated by AI.",
      "Local language visual charts that show cash flow peaks and troughs clearly."
    ],
    buyingTriggers: [
      "Tax audit season stress or major inventory purchase credit shortages.",
      "Losing money on unpaid receivables due to lack of standard follow-ups."
    ],
    expectedLtv: "₹54,000/year (Business Tier with Automated SMS reminders)",
    quote: "I always felt in the dark about our factory's raw cash capacity until FlowFinance unified our bank feeds."
  },
  {
    id: "3",
    title: "Finance Consultant & CA",
    role: "Sunita Deshmukh, Senior Managing Partner at Deshmukh & Associates",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    painPoints: [
      "Inordinate manual time spent compiling and cleansing client raw books CSVs.",
      "Excessive client communication loops just to classify transaction items.",
      "Difficulty scaling high-margin strategy advisory work due to accounting overhead."
    ],
    needs: [
      "A central partner dashboard to manage multiple client workspaces from one login.",
      "AI-driven auto-categorization of expenses with over 95% accuracy.",
      "White-labelled reporting tools to deliver premium advisory boards to clients."
    ],
    buyingTriggers: [
      "Clients demanding real-time analytics instead of lagging monthly reports.",
      "Seeking to automate transactional work to take on double the advisory clients."
    ],
    expectedLtv: "₹4,20,000/year (Enterprise Multi-Client Portal with Premium Support)",
    quote: "By automating manual bookkeeping for 40+ of our accounts, FlowFinance lets us consult instead of reconciliate."
  }
];

export const COMPETITOR_DATA = [
  {
    name: "FlowFinance",
    pricing: "₹1,499/mo standard (SaaS)",
    ai: "Generative forecasting, auto subledger categorizations",
    analytics: "Real-time, interactive, investor-ready desks",
    features: "Integrations with GST and 15+ Indian commercial banks",
    forecasting: "Dynamic modeling & sandbox simulations",
    score: 9.8
  },
  {
    name: "Zoho Books",
    pricing: "₹2,499/mo (enterprise features)",
    ai: "Rule-based only (No Generative Predictions)",
    analytics: "Static tabular reporting with basic charts",
    features: "Great invoice templates, multi-region compliance",
    forecasting: "None (Manual export to Excel required)",
    score: 7.9
  },
  {
    name: "QuickBooks",
    pricing: "₹4,000/mo (No local UPI integration)",
    ai: "Very basic matchings",
    analytics: "Standard compliance accounting files",
    features: "US-centric interface, rigid configurations",
    forecasting: "Requires high-tier third-party plugins",
    score: 5.5
  },
  {
    name: "Vyapar",
    pricing: "₹299/mo (Only basic desktop app)",
    ai: "None",
    analytics: "Strictly cash billing statements",
    features: "Offline accounting focusing on retail counters",
    forecasting: "None",
    score: 6.2
  },
  {
    name: "RazorpayX",
    pricing: "Volume-based banking fees",
    ai: "Transaction routing AI only",
    analytics: "Corporate payout metrics logs",
    features: "Direct payee transaction processing and payout links",
    forecasting: "Short-term payout projections only",
    score: 8.1
  }
];

export const ROADMAP_PHASES = [
  {
    phase: "Phase 1: Awareness & Organic Traction",
    period: "Q1-Q2 2026",
    channels: ["SEO Core Growth Tools", "LinkedIn Authority Building", "WhatsApp Founder Circles"],
    metrics: "10K+ unique organic visitors, 500+ trials",
    description: "Build trust by launching functional free calculators (GST, Runway, Valuation calculators) with elegant styling and SEO-friendly interactive design."
  },
  {
    phase: "Phase 2: Product-Led Growth & Onboarding",
    period: "Q3 2026",
    channels: ["In-app Freemium Tier", "CFO Masterclass Webinars", "Startup Cell Workshops"],
    metrics: "2.5K active trial accounts, 8% conversion to Paid",
    description: "Launch direct read-only bank feeds and quick-sync spreadsheets. Automate immediate bookkeeping value inside the first 5 minutes of sign-up."
  },
  {
    phase: "Phase 3: The ICAI & CA Network Engine",
    period: "Q4 2026",
    channels: ["CA Multi-Client Portal", "Continuing Professional Education Credits", "Direct Revenue Sharing"],
    metrics: "400+ Certified CA firms onboarded, 4,000+ client installs",
    description: "Partner with regional CA chapters in Mumbai, Bengaluru, and Pune. Empower them with tools to consult more clients using FlowFinance automated ledgers."
  },
  {
    phase: "Phase 4: Scaling Campus Ambassador Loops",
    period: "Q1 2027",
    channels: ["Tier-1 Engineering & Management Colleges", "Incubator Workshops", "Performance Rewards"],
    metrics: "500+ Campus Ambassadors active, ₹5L generated in Referrals",
    description: "Appoint campus representatives across premium schools (IITs, IIMs, NITs) running startup incubation hubs. Support them with real commissions and certifications."
  },
  {
    phase: "Phase 5: Enterprise and Treasury Accounts",
    period: "Q2 2027",
    channels: ["White-labelled Boards", "Venture Capital Portfolio Panels", "Custom Aggregations"],
    metrics: "₹2.5 Crore Annual Recurring Revenue (ARR)",
    description: "Create premium portfolios for VCs to monitor and forecast cash pathways of their 100+ investee startups from a single dashboard."
  }
];

export const INITIAL_PARTNERS: Partner[] = [
  {
    id: "p1",
    name: "Startup India Hub",
    type: "Incubators",
    impact: "High",
    potential: "35% CAC Reduction via cohort onboarding",
    status: "Active",
    description: "Platform available inside registered national sandbox and digital toolkits for new Indian entrepreneurs.",
    logoUrl: "🇮🇳"
  },
  {
    id: "p2",
    name: "ICAI Regional Chapters",
    type: "CA Networks",
    impact: "Very High",
    potential: "₹24 Lakhs ARR referral pipelines",
    status: "In Discussion",
    description: "Partnering to train accounting graduates in Generative AI advisory services powered by FlowFinance.",
    logoUrl: "💼"
  },
  {
    id: "p3",
    name: "T-Hub Hyderabad",
    type: "Accelerators",
    impact: "Very High",
    potential: "120+ SaaS account conversions",
    status: "Active",
    description: "Default automated treasury platform for cohort startups receiving strategic seed fund allocations.",
    logoUrl: "🚀"
  },
  {
    id: "p4",
    name: "IIT Bombay Incubator (SINE)",
    type: "Universities",
    impact: "High",
    potential: "80+ Campus Ambassador signups",
    status: "Active",
    description: "Enables student entrepreneurs to access student grants with automated invoice reporting audit rails.",
    logoUrl: "🎓"
  },
  {
    id: "p5",
    name: "SaaS Insider India",
    type: "Startup Communities",
    impact: "Medium",
    potential: "8% reduction in global churn rates",
    status: "In Discussion",
    description: "Collaborative growth strategy webinars targeting Indian SaaS scaling concerns.",
    logoUrl: "🌐"
  },
  {
    id: "p6",
    name: "ICICI API Banking Portal",
    type: "Corporate Partners",
    impact: "Very High",
    potential: "Real-time bank statement synchronization",
    status: "Active",
    description: "Instant read-only API connection allowing users to securely link business ledger cards.",
    logoUrl: "🏦"
  }
];

export const BLOG_POSTS: BlogArticle[] = [
  {
    id: "b1",
    title: "Mastering Indian MSME Treasury: A CFO Guide for 2026",
    summary: "How modern cash managers navigate compliance updates, GST invoicing, and UPI ledger reconciliation automatically.",
    category: "Finance",
    readTime: "6 min read",
    date: "Jun 14, 2026",
    author: "Ananya Sharma, CFO advisor",
    content: `Running an Indian MSME comes with distinct treasury challenges in 2026. With invoice-level matches demanded by automated tax frameworks, manual excel updates are not only slow but legally risky.
    Our research shows that automating ledger category sorting using AI models reduces tax-season reconciliation cycles from 12 days down to under 3 hours. 

    #### Key Takeaways:
    - **Bank Feeds Integration**: Avoid static CSV uploads. Real-time API links provide visibility parameters that protect cash reserves.
    - **Runway Buffers**: Maintain a baseline of at least 4 months of certified operational expense capital.
    - **UPI reconciliation**: Configure automated SMS ledgers to handle high-frequency low-ticket payments.`
  },
  {
    id: "b2",
    title: "How Student Ambassadors Are Democratizing Fintech Across India",
    summary: "Discover how target referral programs in IIT and university incubation hubs are scaling cost-effective acquisition.",
    category: "Growth",
    readTime: "4 min read",
    date: "May 28, 2026",
    author: "Siddharth Mehta, Growth Lead",
    content: `Traditional digital ad channels have seen sky-rocketing customer acquisition costs (CAC). On platform ads, cost per click has increased by up to 45% year-on-year.
    The answer to scale for FlowFinance is the Campus Ambassador Program. By teaching student ambassadors to run cash-flow scenario games, we build a referral network that scales from the ground up.`
  },
  {
    id: "b3",
    title: "Demystifying generative AI forecasting for SaaS burn models",
    summary: "Why traditional statistical regressions fail during sudden market shifts and how Generative models maintain accuracy.",
    category: "AI",
    readTime: "8 min read",
    date: "Apr 15, 2026",
    author: "Dr. Sandeep Nair, AI Research",
    content: `Linear forecasting models assume future trends will always represent steady growth. Generative context engines, however, can simulate macro shifts like supply chain hiccups or VC funding winters. 
    By introducing custom variables like 'delayed receivables duration' or 'pivoted hire plans', FlowFinance gives founders real confidence in their cash runways.`
  },
  {
    id: "b4",
    title: "Early Stage Fundraising: The Dynamic Deck Edge",
    summary: "In a selective funding environment, investors demand continuous treasury visibility. Here is how to provide it.",
    category: "Fundraising",
    readTime: "5 min read",
    date: "Mar 10, 2026",
    author: "Rohan Khanna, Venture Partner",
    content: `Investors receive dozens of pitch decks daily. Static PDFs with outdated financial models no longer pass initial validation filters. 
    Using interactive financial dashboards, founders share real-time treasury health and track runway, presenting as professional, consulting-grade operations.`
  }
];

export const GROWTH_REPORTS: GrowthReport[] = [
  {
    id: "r1",
    title: "The Indian MSME Capital Report 2026",
    category: "Market Reports",
    summary: "A deep dive into the credit demand gaps, AI adoption bottlenecks, and transactional scaling challenges faced by 63M micro businesses.",
    author: "FlowFinance Market Research Team",
    date: "May 2026",
    size: "2.4 MB",
    readTime: "25 min to read",
    content: `### Executive Overview:
    The MSME segment is the back-bone of Indian industry. However, of the 63 Million registered micro-enterprises, over 85% struggle to obtain standard bank lines due to unstructured transaction data.
    
    ### Core Insights:
    - **Credit Underserved**: A credit gap of over $230 Billion exists due to missing formal statements.
    - **Unlocking Ledger Data**: Real-time invoice matching via GST systems immediately unlocks trust indexes for lenders.
    - **Generative Automation**: 72% of micro business leaders state they would transition to digital systems immediately if banking feeds were unified and automated.`
  },
  {
    id: "r2",
    title: "GTM Framework: From Seed to Series A SaaS in India",
    category: "Growth Reports",
    summary: "Strategic blueprint detailing targeted CA partnerships, regional community loops, and the low-CAC student ambassador fly-wheel.",
    author: "Consulting Strategy Division",
    date: "Apr 2026",
    size: "1.8 MB",
    readTime: "18 min to read",
    content: `### Strategic Recommendations:
    This playbook defines the definitive route-to-market structure of scaling financial fintech platforms.
    
    ### Distribution Phasing:
    1. **CA Integration Panels**: Onboard regional CA chapters, representing access to 5k+ prospective businesses.
    2. **University Incubator Nodes**: Active ambassador cells inside academic centers create high-intent organic trial loops.
    3. **Growth Diagnostics**: Offer free instant audit scorecards so founders seek upgrading of core modules themselves.`
  },
  {
    id: "r3",
    title: "AI Adoption and Fintech Regulations Blueprint 2026",
    category: "Strategy Reports",
    summary: "Comprehensive compliance guidelines regarding AI-driven automated bookkeeping, tax reconciliation, and personal data safety.",
    author: "Compliance & Security Hub",
    date: "Jan 2026",
    size: "3.1 MB",
    readTime: "30 min to read",
    content: `### Compliance Structure:
    The regulatory Fintech landscape in India requires absolute security of sensitive ledger information.
    
    ### Architectural Safeguards:
    - **Read-Only API Sync**: Financial APIs must only query transactions without transfer authorization triggers.
    - **Local Processing**: Secure tokens for banking details remain safely isolated in encryption sandboxes.
    - **Generative Auditability**: All AI-suggested taxonomy adjustments are fully auditable by licensed CAs.`
  }
];
