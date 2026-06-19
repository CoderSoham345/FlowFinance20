import React, { useState } from "react";
import { Check, ShieldAlert, Cpu, Award, Zap, Compass } from "lucide-react";
import { useApp } from "../components/AppContext";

export default function DistributionStrategy() {
  const { addNotification } = useApp();
  const [activeStage, setActiveStage] = useState<string>("top");

  const stages = [
    {
      id: "top",
      title: "1. Brand Awareness & Discovery",
      volume: "850,000 Impressions",
      channels: "Organic SEO, Free calculators (GST, Runway), Fintech blogs",
      description: "Organic microservices capture high-intent seed founders looking up quick GST calculators or runway calculations.",
      optimized: true
    },
    {
      id: "ambassador",
      title: "2. Campus Ambassador Cells",
      volume: "12,000 Active Student Referrals",
      channels: "Tier-1 tech schools (IIT, BITS, SINE), Local business clubs",
      description: "University ambassadors run local sandbox workshops and refer student startup groups directly for seed credits.",
      optimized: true
    },
    {
      id: "ca",
      title: "3. Chartered Accountant Channel",
      volume: "650 Core CA Networks",
      channels: "ICAI chapters regional associations, Professional consultants",
      description: "Connecting directly with CAs offering a free co-branded billing suite. CAs push our tool to their portfolio clients in bulk.",
      optimized: true
    },
    {
      id: "bottom",
      title: "4. Premium License Activation",
      volume: "1,250 Connected Businesses",
      channels: "ARR Subscription licencing models, Scenario sandboxes",
      description: "Users convert from basic ledger tracking to premium automated scenario forecasting packages.",
      optimized: false
    }
  ];

  const handleStageSelect = (id: string) => {
    setActiveStage(id);
    addNotification(`Distribution channel focus adjusted: "${stages.find(s=>s.id === id)?.title}"`);
  };

  const current = stages.find(s => s.id === activeStage) || stages[0];

  return (
    <div className="space-y-8 font-sans">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-display tracking-tight">Distribution Strategy Funnel</h2>
        <p className="text-xs text-slate-500">
          The structural channel pipelines scaling FlowFinance from student cells to CA portfolios in India.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Interactive Funnel Left Side */}
        <div className="lg:col-span-6 space-y-4">
          <span className="block text-[10px] uppercase font-mono font-bold text-slate-400">Interactive Pipeline Funnel (Select stage)</span>
          
          <div className="space-y-3">
            
            {stages.map((stage, idx) => {
              const isSelected = stage.id === activeStage;
              
              // Custom widths for visual funnel styling
              let widthClass = "w-full";
              if (idx === 1) widthClass = "w-[92%] mx-auto";
              if (idx === 2) widthClass = "w-[84%] mx-auto";
              if (idx === 3) widthClass = "w-[76%] mx-auto";

              return (
                <button
                  key={stage.id}
                  onClick={() => handleStageSelect(stage.id)}
                  className={`block text-left rounded-2xl border p-4.5 transition-all text-xs cursor-pointer shadow-sm ${widthClass} ${
                    isSelected 
                      ? "bg-slate-900 border-slate-900 text-white dark:bg-slate-800 dark:border-slate-800 scale-[1.01] ring-4 ring-blue-500/10" 
                      : "bg-white border-slate-200/80 text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900"
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold block tracking-tight font-display">{stage.title}</span>
                    <span className={`text-[9px] font-bold font-mono px-2 py-0.5 rounded-full ${isSelected ? "bg-blue-500/20 text-blue-400" : "bg-slate-100 text-slate-500"}`}>
                      {stage.volume}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 truncate mt-1">Channels: {stage.channels}</p>
                </button>
              );
            })}

          </div>
        </div>

        {/* Selected Stage Detail Panel Right */}
        <div className="lg:col-span-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-md space-y-6">
          
          <div className="flex justify-between items-start border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block">Focused Funnel stage</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-display mt-0.5">{current.title}</h3>
            </div>
            
            <span className={`px-2.5 py-0.5 rounded-full font-bold font-mono text-[9px] uppercase ${
              current.optimized 
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" 
                : "bg-amber-500/10 text-amber-500/80"
            }`}>
              {current.optimized ? "Optimized" : "Slight Friction"}
            </span>
          </div>

          <div className="space-y-4 text-xs font-semibold">
            
            <div className="space-y-1.5">
              <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block">Strategic Core Channels</span>
              <div className="text-slate-850 dark:text-slate-200 leading-relaxed font-sans font-medium">
                {current.channels}
              </div>
            </div>

            <div className="space-y-1.5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80">
              <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block">Consultant Diagnostic</span>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-sans font-medium">
                {current.description}
              </p>
            </div>

          </div>

          {/* Quick diagnostic recommendations checklist */}
          <div className="bg-slate-50 p-4 rounded-xl dark:bg-slate-950/20 border border-slate-150 dark:border-slate-850 text-xs">
            <span className="font-bold text-slate-800 dark:text-slate-200 block mb-2.5">Strategic Action steps:</span>
            
            <div className="space-y-2 text-[11px] font-medium text-slate-500">
              <div className="flex items-center space-x-2">
                <Check className="h-3.5 w-3.5 text-emerald-500 stroke-[3px]" />
                <span>Publish 12 additional custom GST estimation scripts to SEO nodes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-3.5 w-3.5 text-emerald-500 stroke-[3px]" />
                <span>Onboard 150 Chartered Accountant offices this semester</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-3.5 w-3.5 text-emerald-500 stroke-[3px]" />
                <span>Decompress sandboxed walkthrough triggers to boost conversion by 14%</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
