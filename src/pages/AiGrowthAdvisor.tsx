import React, { useState } from "react";
import { Sparkles, Send, Command, RefreshCw, Cpu, BookOpen, AlertCircle } from "lucide-react";
import { useApp } from "../components/AppContext";

export default function AiGrowthAdvisor() {
  const { addNotification } = useApp();
  const [messages, setMessages] = useState<Array<{ sender: "user" | "ai"; text: string }>>([
    {
      sender: "ai",
      text: `### Strategic CFO Growth Advisor System
Welcome to the FlowFinance Revenue Consulting Terminal. I can formulate tailored forecasts and growth tactics. 

Select one of the quick prompts below or ask any direct questions about **reduction of CAC**, **distribution loops**, or **retention strategies**.`
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  const sampleQuestions = [
    "How to acquire customers & reduce CAC?",
    "What are our strategic partnerships with banks?",
    "How to leverage university ambassador programs?",
    "What is the Chartered Accountant bulk channel?"
  ];

  const triggerChat = async (queryText: string) => {
    if (!queryText.trim()) return;

    // Append user query
    const userMsg = { sender: "user" as const, text: queryText };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setLoading(true);

    try {
      const response = await fetch("/api/advisor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: queryText, history: [] })
      });

      if (!response.ok) {
        throw new Error("API Route did not respond correctly");
      }

      const data = await response.json();
      const aiResponse = { sender: "ai" as const, text: data.text || "No advice compiled." };
      setMessages((prev) => [...prev, aiResponse]);
      addNotification(`AI Advisor finalized response for query: "${queryText.substring(0, 20)}..."`);
    } catch (err) {
      console.error("AI error:", err);
      const errorResponse = {
        sender: "ai" as const,
        text: `### Communication Warning
The server experienced an issue processing your query or the API key is not set. 

Here is a static analytical response:
Our primary growth vector resides in our double-sided Chartered Accountant networks. By equipping 600+ CAs with bulk ledger matching controllers, we acquire up to 12,000 corporate accounts at zero direct advertising cost, ensuring a payback duration of less than 3 months.`
      };
      setMessages((prev) => [...prev, errorResponse]);
      addNotification("Retrieved static consulting fallback recommendations.");
    } finally {
      setLoading(false);
    }
  };

  const handleSendSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerChat(inputText);
  };

  return (
    <div className="space-y-8 font-sans max-w-5xl mx-auto h-[80vh] flex flex-col justify-between">
      
      {/* Upper info */}
      <div className="shrink-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-display tracking-tight">AI Strategy Advisor</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Interactive treasury counsel powered by enterprise intelligence and Gemini forecasting models.
          </p>
        </div>

        <div className="flex items-center space-x-2 font-mono text-[10px] bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full font-bold">
          <Cpu className="h-3.5 w-3.5 animate-spin" />
          <span>Gemini-3.5-Flash Active</span>
        </div>
      </div>

      {/* Main Conversation Canvas */}
      <div className="flex-1 min-h-0 bg-white rounded-2xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 overflow-hidden flex flex-col md:flex-row shadow-sm">
        
        {/* Main dialogue viewport left */}
        <div className="flex-1 flex flex-col bg-slate-50/40 dark:bg-slate-950/20">
          
          <div className="flex-1 overflow-y-auto p-5 space-y-4 text-xs font-semibold">
            {messages.map((m, idx) => {
              const isAi = m.sender === "ai";
              return (
                <div 
                  key={idx}
                  className={`flex ${isAi ? "justify-start" : "justify-end"}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl p-4 shadow-sm select-text whitespace-pre-wrap ${
                      isAi 
                        ? "bg-white border border-slate-150 text-slate-800 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200 leading-relaxed font-sans" 
                        : "bg-slate-900 text-white font-medium self-end flex-row-reverse"
                    }`}
                  >
                    {/* Render basic markdown headers by styling lines */}
                    {m.text.split("\n").map((line, lidx) => {
                      if (line.startsWith("### ")) {
                        return <h4 key={lidx} className="text-sm font-bold text-slate-900 dark:text-white font-display mt-3 mb-1">{line.replace("### ", "")}</h4>;
                      }
                      if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ")) {
                        return <div key={lidx} className="pl-2 mt-1.5 font-sans leading-relaxed text-slate-600 dark:text-slate-350">{line}</div>;
                      }
                      if (line.startsWith("- ")) {
                        return <div key={lidx} className="pl-4 mt-1 list-item list-inside text-slate-600 dark:text-slate-350">{line}</div>;
                      }
                      return <p key={lidx} className="leading-relaxed mt-1">{line}</p>;
                    })}
                  </div>
                </div>
              );
            })}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-150 rounded-2xl p-4 dark:bg-slate-900 dark:border-slate-800 text-slate-400 font-mono text-[10px] animate-pulse">
                  Advisor is synthesizing strategy briefs...
                </div>
              </div>
            )}
          </div>

          {/* Submission bar */}
          <form onSubmit={handleSendSubmit} className="p-4 border-t border-slate-150 bg-white dark:border-slate-850 dark:bg-slate-900 flex gap-3 shrink-0">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about reducing CAC, bank integrations, tax reconciliation..."
              className="w-full rounded-lg border border-slate-200 dark:border-slate-800 px-3.5 py-2 text-xs bg-transparent text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-600 hover:bg-blue-500 px-4 py-2 text-white font-bold text-xs flex items-center space-x-1.5 transition-colors cursor-pointer shrink-0"
              disabled={loading}
            >
              <Send className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Send Proposal</span>
            </button>
          </form>

        </div>

        {/* Action guidelines right side */}
        <div className="w-full md:w-64 border-t md:border-t-0 md:border-l border-slate-150 p-4 shrink-0 bg-white dark:bg-slate-900 dark:border-slate-850 space-y-4">
          <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">Example Inbound Prompts</span>
          
          <div className="space-y-2.5">
            {sampleQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => triggerChat(q)}
                className="w-full text-left rounded-xl border border-slate-100 bg-slate-50/50 p-3 hover:bg-slate-50 transition-all font-medium text-[11px] text-slate-600 hover:text-slate-900 dark:border-slate-800/60 dark:bg-slate-950/20 dark:text-slate-400 dark:hover:text-white cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 leading-normal">
            *Advisor requests are mapped through our secure Express `/api/advisor` routing channels to prevent API key leakages in public logs.
          </div>
        </div>

      </div>

    </div>
  );
}
