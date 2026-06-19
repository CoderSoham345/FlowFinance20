import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  app.use(express.json());

  const PORT = 3000;

  // Initialize Gemini client lazily to prevent crashing on startup if key is missing
  let ai: GoogleGenAI | null = null;
  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
    try {
      ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
      console.log("Gemini AI Client initialized successfully.");
    } catch (err) {
      console.error("Error initializing Gemini AI Client:", err);
    }
  } else {
    console.warn("GEMINI_API_KEY environment variable is not configured. Falling back to built-in consulting system.");
  }

  // AI Growth Advisor API
  app.post("/api/advisor", async (req, res) => {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const lowerMsg = message.toLowerCase();

    // High quality tailored professional responses for fallback & offline demonstration
    const fallbackConsultingData: { [key: string]: string } = {
      customers: `### FlowFinance Customer Acquisition Playbook 2026:
We recommend a targeted, multi-channel growth funnel:
1. **ICAI & CA Partner Network Program**: Build certified integrations with trusted chartered accounting networks across India. By offering CAs dedicated audit dashboards, they will naturally onboard their 20+ startup clients.
2. **Founder SEO Content Hub**: Create automated tools like \"IRS & GST Tax Estimators\" or \"Startup Runway Calculators\". High-intent organic search drives traffic with a 75% lower customer acquisition cost (CAC).
3. **The Tier-1 University Campus Ambassador Network**: Propagate FlowFinance among startup inkubators & active student cells in major national colleges. We have mapped out 5-10-15 ambassador commission structures.`,
      partnerships: `### FlowFinance Top Partnerships Strategy:
1. **Startup India & MeitY**: Onboard as an premium finance workspace resource under the Startup India Hub, offering discounted pricing or 6-month free tiers for newly registered companies.
2. **Incubator Co-Working Systems (e.g. T-Hub, 91springboard)**: Integrate directly inside registration bundles to automate financial forecasting for cohort groups.
3. **Bank & API Gateways (e.g., Yes Bank, ICICI, Razorpay)**: Power real-time multi-account treasury aggregation directly in FlowFinance dashboards.`,
      cac: `### CAC Reduction Playbook:
1. **Inbound Automated Diagnostics**: Instead of outbound sales reps, offer automated financial health scores. Users connect read-only statements to get a free report, converting at 4x the rate of cold outreach.
2. **Double-Sided Referrals**: Award active CFOs and founders a 10% monthly rebate of SaaS subscription costs for each validated signup.
3. **Campus Ambassador Leverage**: Scale local workshops across 80+ universities using custom student ambassadors where standard CAC is minimal.`,
      retention: `### FlowFinance Lifetime Value (LTV) & Retention Blueprint:
1. **Proactive Cash Flow Alerts**: Send automated WhatsApp or Telegram notifications when a startup's cash runway drops below 6 months, offering instant scenario-modelling.
2. **Investor Portal Connectivity**: Make it simple for founders to export investor relations decks in one click. If we become their standard report system, switching costs become insurmountable.
3. **Automated Subledger Reconciliation**: By syncing instantly with GST portals, founders save 8+ hours of monthly manual reconciliation, securing a 96% annual retention rate.`
    };

    let responseText = "";

    // If AI is configured, let's call the real model!
    if (ai) {
      const systemInstruction = `You are the lead Executive growth strategy, GTM consulting, partnership intelligence, and market expert for FlowFinance, an AI-powered financial platform tailored to MSMEs & startups in India.
Your tone is consulting-level, professional, highly analytical, clear, and investor-ready. Avoid fluff. Provide concrete numbers, strategies, and steps.
Always include visual Markdown (tables, lists, and bold callouts).`;

      const modelsToTry = [
        "gemini-3.5-flash",
        "gemini-flash-latest",
        "gemini-3.1-flash-lite"
      ];

      let lastError = null;

      for (const modelName of modelsToTry) {
        try {
          console.log(`Executing Gemini API call with model: ${modelName}`);
          const response = await ai.models.generateContent({
            model: modelName,
            contents: message,
            config: {
              systemInstruction: systemInstruction,
              temperature: 0.7,
            }
          });

          if (response && response.text) {
            responseText = response.text;
            console.log(`Successfully generated content using model: ${modelName}`);
            lastError = null;
            break;
          } else {
            throw new Error(`Empty response returned from model: ${modelName}`);
          }
        } catch (err: any) {
          console.warn(`Model ${modelName} call failed. Error:`, err.message || err);
          lastError = err;
          // Short pause before attempting the fallback model
          await new Promise((resolve) => setTimeout(resolve, 300));
        }
      }

      // If all models failed, use local strategic consulting dataset
      if (lastError) {
        console.error("All Gemini models failed, falling back to local consulting intelligence...", lastError);
        if (lowerMsg.includes("acquire") || lowerMsg.includes("customer")) {
          responseText = fallbackConsultingData.customers;
        } else if (lowerMsg.includes("partnership") || lowerMsg.includes("partner")) {
          responseText = fallbackConsultingData.partnerships;
        } else if (lowerMsg.includes("cac") || lowerMsg.includes("cost")) {
          responseText = fallbackConsultingData.cac;
        } else if (lowerMsg.includes("retention") || lowerMsg.includes("retain")) {
          responseText = fallbackConsultingData.retention;
        } else {
          responseText = "### Consulting Advisor Recommendation:\nFlowFinance should focus on automating sub-ledger reconciliations, integrating local banking partners via APIs, and deploying the Campus Ambassador program. " + 
                         "Please clarify if you want us to investigate specific CAC models, expansion spreadsheets, or CA partner contracts.";
        }
      }
    } else {
      // Offline/fallback engine when no key is configured
      if (lowerMsg.includes("acquire") || lowerMsg.includes("customer")) {
        responseText = fallbackConsultingData.customers;
      } else if (lowerMsg.includes("partnership") || lowerMsg.includes("partner")) {
        responseText = fallbackConsultingData.partnerships;
      } else if (lowerMsg.includes("cac") || lowerMsg.includes("cost")) {
        responseText = fallbackConsultingData.cac;
      } else if (lowerMsg.includes("retention") || lowerMsg.includes("retain")) {
        responseText = fallbackConsultingData.retention;
      } else {
        responseText = `### Strategic AI Advisor Response:
FlowFinance's core opportunity lies in dominating the ₹500 Million Indian MSME market.
We recommend exploring options like:
- **Increasing local campus outreach** and ambassador referrals
- **Integrating with local CA (ICAI) and founder networks**
- **Triggering real-time cash flow alerts** to drive organic customer actions.

*Please feel free to ask specifically about CAC reduction, partnership lists, or Ambassador referral cash rewards!*`;
      }
    }

    return res.json({ text: responseText });
  });

  // Mock database persistence for Demo/Simulation purposes (Simulates full state updates)
  const mockDB = {
    users: [
      { id: "1", name: "Ananya Sharma", email: "ananya@flowfinance.org", role: "Admin", company: "FlowFinance VC" },
      { id: "2", name: "Siddharth Mehta", email: "sid@mehtapartners.com", role: "Campus Ambassador", company: "IIT Bombay Campus" },
      { id: "3", name: "Meera Nair", email: "meera@startupventures.in", role: "User", company: "ZetaTech Labs" },
    ],
    ambassadors: [
      { id: "1", name: "Siddharth Mehta", university: "IIT Bombay", referrals: 12, conversions: 8, commission: 8000, status: "Active" },
      { id: "2", name: "Vikram Malhotra", university: "Delhi University", referrals: 8, conversions: 5, commission: 4000, status: "Active" },
      { id: "3", name: "Pooja Roy", university: "IIM Ahmedabad", referrals: 15, conversions: 11, commission: 11000, status: "Active" }
    ],
    partners: [
      { id: "p1", name: "Startup India Hub", type: "Incubators", impact: "High", potential: "35% CAC reduction", status: "Active", description: "Direct dashboard access provided to certified incubators." },
      { id: "p2", name: "ICAI Regional Chapters", type: "CA Networks", impact: "Very High", potential: "₹2.4M ARR referral", status: "In Discussion", description: "Integration training sessions conducted for CAs." },
      { id: "p3", name: "BITS Pilani Center", type: "Universities", impact: "Medium", potential: "80+ Ambassador applicants", status: "Active", description: "Incubation workspace trial sandbox provided." }
    ],
    bookings: [
      { id: "b1", name: "Rajesh Kapoor", company: "AeroDrones India", email: "rajesh@aerodrones.in", date: "2026-07-10", time: "11:00 AM", status: "Scheduled" }
    ]
  };

  app.get("/api/mockdb", (req, res) => {
    res.json(mockDB);
  });

  app.post("/api/bookings", (req, res) => {
    const { name, company, email, date, time } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }
    const newBooking = { id: "b" + (mockDB.bookings.length + 1), name, company, email, date, time, status: "Confirmed" };
    mockDB.bookings.push(newBooking);
    res.json({ success: true, booking: newBooking });
  });

  app.post("/api/ambassadors/apply", (req, res) => {
    const { name, email, university, collegeYear, bio } = req.body;
    if (!name || !email || !university) {
      return res.status(400).json({ error: "All active fields are required" });
    }
    const newAmbassador = { id: String(mockDB.ambassadors.length + 1), name, university, referrals: 0, conversions: 0, commission: 0, status: "Pending Verification" };
    mockDB.ambassadors.push(newAmbassador);
    res.json({ success: true, ambassador: newAmbassador });
  });

  app.post("/api/partners/propose", (req, res) => {
    const { name, type, description, potential } = req.body;
    if (!name || !type) {
      return res.status(400).json({ error: "Partner name and category type is required" });
    }
    const newPartner = { id: "p" + (mockDB.partners.length + 1), name, type, impact: "Calculated", potential: potential || "Awaiting evaluation", status: "Pending Proposal", description };
    mockDB.partners.push(newPartner);
    res.json({ success: true, partner: newPartner });
  });

  // Vite Integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express and Vite Server running on http://localhost:${PORT}`);
  });
}

startServer();
