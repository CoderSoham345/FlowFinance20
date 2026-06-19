import React, { useState } from "react";
import { USER_PERSONAS } from "../data";
import { ChevronRight, ArrowUpDown, DollarSign, HelpCircle, ShieldAlert, Sparkles, MessageSquare } from "lucide-react";
import { useApp } from "../components/AppContext";

export default function UserPersonas() {
  const { addNotification } = useApp();
  const [activePersona, setActivePersona] = useState<string>("1");

  const clickPersona = (id: string) => {
    setActivePersona(id);
    addNotification(`Persona scope toggled to "${USER_PERSONAS.find((u) => u.id === id)?.title}"`);
  };

  const selected = USER_PERSONAS.find((p) => p.id === activePersona) || USER_PERSONAS[0];

  return (
    <div className="space-y-8 font-sans">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-display tracking-tight">Interactive User Personas</h2>
        <p className="text-xs text-slate-500">
          Target audience profiles, sub-ledger pain points, buying triggers, and expected LTV cohorts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Selector Panel Left */}
        <div className="lg:col-span-5 space-y-3.5">
          <span className="block text-[10px] uppercase font-mono font-bold text-slate-400">Select audience group</span>
          
          <div className="space-y-3">
            {USER_PERSONAS.map((p) => {
              const isActive = p.id === activePersona;
              return (
                <button
                  key={p.id}
                  onClick={() => clickPersona(p.id)}
                  className={`w-full text-left rounded-2xl border p-4.5 transition-all text-xs flex items-center justify-between shadow-sm cursor-pointer ${
                    isActive 
                      ? "bg-slate-900 border-slate-900 text-white dark:bg-slate-800 dark:border-slate-800" 
                      : "bg-white border-slate-200/80 text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900"
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <img 
                      src={p.avatar} 
                      alt={p.title} 
                      className="h-9 w-9 rounded-xl object-cover ring-2 ring-slate-100"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className={`block font-bold font-display ${isActive ? "text-white" : "text-slate-800 dark:text-slate-200"}`}>
                        {p.title}
                      </span>
                      <span className="block text-[10px] text-slate-400 font-mono mt-0.5 truncate max-w-[200px]">
                        {p.role}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? "text-blue-500 translate-x-1" : "text-slate-400"}`} />
                </button>
              );
            })}
          </div>

          <div className="p-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-[11px] leading-relaxed text-slate-500 font-medium">
            💡 <span className="font-bold text-slate-700 dark:text-slate-300">GTM Hack:</span> Chartered Accountant networks (Persona 3) operate as a major **distribution multiplier**. By selling to one CA, FlowFinance gains bulk access to all 30+ MSME accounts managed by their office, slashing direct acquisition overhead by 90%.
          </div>
        </div>

        {/* Dynamic Detail Card Right */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-md space-y-6">
          
          {/* Header */}
          <div className="flex justify-between items-start border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center space-x-3.5">
              <img 
                src={selected.avatar} 
                alt={selected.title} 
                className="h-12 w-12 rounded-xl object-cover ring-2 ring-slate-100"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">{selected.title}</h3>
                <p className="text-xs text-slate-500">{selected.role}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase">Estimated LTV</span>
              <span className="font-bold text-xs text-blue-500 font-mono">{selected.expectedLtv}</span>
            </div>
          </div>

          {/* Core content columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[160px] text-xs">
            
            {/* Pain Points */}
            <div className="space-y-2.5">
              <span className="inline-flex items-center space-x-1 font-mono text-[10px] font-bold uppercase text-rose-500 bg-rose-500/5 px-2 py-0.5 rounded">
                <ShieldAlert className="h-3 w-3" />
                <span>Primary Pain Points</span>
              </span>
              <ul className="space-y-1.5 list-disc list-inside text-slate-500 leading-relaxed font-sans px-1">
                {selected.painPoints.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>

            {/* Needs & Triggers */}
            <div className="space-y-4">
              
              <div className="space-y-2.5">
                <span className="inline-flex items-center space-x-1 font-mono text-[10px] font-bold uppercase text-emerald-500 bg-emerald-500/5 px-2 py-0.5 rounded">
                  <Sparkles className="h-3 w-3" />
                  <span>Targeted Features Needed</span>
                </span>
                <ul className="space-y-1.5 list-disc list-inside text-slate-500 leading-relaxed font-sans px-1">
                  {selected.needs.map((nd, idx) => (
                    <li key={idx}>{nd}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2.5">
                <span className="inline-flex items-center space-x-1 font-mono text-[10px] font-bold uppercase text-amber-500 bg-amber-500/5 px-2 py-0.5 rounded">
                  <ChevronRight className="h-3 w-3" />
                  <span>Conversion Triggers</span>
                </span>
                <ul className="space-y-1 text-slate-500 font-sans px-1 leading-relaxed">
                  {selected.buyingTriggers.map((tr, idx) => (
                    <li key={idx}>• {tr}</li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Quote Block */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-start space-x-3 bg-slate-50/50 dark:bg-slate-950/20 p-4.5 rounded-xl">
            <MessageSquare className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
            <p className="text-xs italic text-slate-500 leading-relaxed font-sans">
              "{selected.quote}"
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
