import React, { useState } from "react";
import { ROADMAP_PHASES } from "../data";
import { Milestone, Compass, Sparkles, Target, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useApp } from "../components/AppContext";

export default function GtmStrategy() {
  const { addNotification } = useApp();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (idx: number) => {
    setActiveStep(idx);
    addNotification(`Roadmap phase focus adjusted to: Phase ${idx + 1}`);
  };

  const selectedPhase = ROADMAP_PHASES[activeStep];

  return (
    <div className="space-y-8 font-sans">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-display tracking-tight">Interactive GTM Roadmap 2026-2027</h2>
        <p className="text-xs text-slate-500">
          The sequential stages scaling FlowFinance from organic launch to enterprise VC dashboards in India.
        </p>
      </div>

      {/* Horizontal Interactive Step Bar */}
      <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white dark:border-slate-800 shadow-md">
        
        {/* Step dots line progress */}
        <div className="relative flex justify-between items-center max-w-3xl mx-auto py-4">
          {/* Progress connector line */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>
          {/* Active progress color */}
          <div 
            className="absolute left-0 top-1/2 h-0.5 bg-blue-500 -translate-y-1/2 z-0 transition-all duration-300"
            style={{ width: `${(activeStep / (ROADMAP_PHASES.length - 1)) * 100}%` }}
          ></div>

          {ROADMAP_PHASES.map((ph, idx) => {
            const isCompleted = idx < activeStep;
            const isActive = idx === activeStep;

            return (
              <button
                key={idx}
                onClick={() => handleStepClick(idx)}
                className="relative z-10 flex flex-col items-center group cursor-pointer"
              >
                <div 
                  className={`h-9 w-9 rounded-full flex items-center justify-center font-bold font-mono text-xs border transition-all ${
                    isActive
                      ? "bg-blue-600 border-blue-500 text-white ring-4 ring-blue-500/10 scale-110"
                      : isCompleted
                      ? "bg-blue-500/10 border-blue-500 text-blue-400"
                      : "bg-slate-950 border-slate-800 text-slate-500 group-hover:text-slate-300"
                  }`}
                >
                  {idx + 1}
                </div>
                <span className="hidden md:block absolute top-10 text-[10px] uppercase font-mono font-bold text-slate-500 tracking-wider whitespace-nowrap">
                  Phase {idx + 1}
                </span>
              </button>
            );
          })}
        </div>

        {/* Short-cut description of progress */}
        <div className="text-center font-mono text-[10px] text-slate-500 mt-12">
          Current Focus: <span className="text-blue-400 font-bold">{selectedPhase.phase.split(":")[0]}</span> ({selectedPhase.period})
        </div>

      </div>

      {/* Detailed Animated Timeline View - Motion container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs font-semibold"
        >
          
          {/* Main narrative card Left */}
          <div className="lg:col-span-8 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-5">
            <div className="flex justify-between items-start border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-mono text-blue-500 uppercase font-bold tracking-widest">{selectedPhase.period}</span>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white font-display mt-0.5">{selectedPhase.phase}</h3>
              </div>
              <div className="rounded bg-sky-500/10 p-2 text-sky-500">
                <Compass className="h-4 w-4" />
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed font-sans mt-2">
              {selectedPhase.description}
            </p>

            {/* Core Channels details */}
            <div className="space-y-3.5">
              <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">Strategic Acquisition Channels</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedPhase.channels.map((ch, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-150 bg-slate-50/40 p-4 dark:border-slate-850">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 stroke-[3px] mb-2" />
                    <div className="text-slate-800 dark:text-slate-200 font-bold">{ch}</div>
                    <p className="text-[10px] text-slate-400 mt-1 leading-snug">Channel activation node</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Metric KPI validation summary Right */}
          <div className="lg:col-span-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-1 font-mono text-[10px] font-bold uppercase text-blue-500 bg-blue-500/5 px-2 py-0.5 rounded">
                <Target className="h-3.5 w-3.5" />
                <span>Success Index Target</span>
              </span>

              <div>
                <div className="text-2xl font-bold font-display text-slate-900 dark:text-white leading-tight">
                  {selectedPhase.metrics.split(",")[0]}
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed font-sans">
                  Target criteria for phase completion and sequence gate unlock.
                </p>
              </div>

              {selectedPhase.metrics.split(",")[1] && (
                <div className="border-t border-slate-150 dark:border-slate-850 pt-3 flex items-center space-x-2 text-slate-600 dark:text-slate-400 text-xs font-semibold">
                  <TrendingUp className="h-4 w-4 text-blue-500" />
                  <span>{selectedPhase.metrics.split(",")[1].trim()}</span>
                </div>
              )}
            </div>

            <div className="mt-8">
              <button
                onClick={() => {
                  if (activeStep < ROADMAP_PHASES.length - 1) {
                    setActiveStep(activeStep + 1);
                    addNotification(`Roadmap timeline advanced to: Phase ${activeStep + 2}`);
                  } else {
                    addNotification("Timeline complete! FlowFinance is fully scaled.");
                    alert("Growth Blueprint at absolute capacity! Full market scale achieved.");
                  }
                }}
                className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 py-3 text-xs font-bold text-white shadow-md text-center flex items-center justify-center space-x-1 cursor-pointer"
              >
                <span>Advance to Next Phase</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </motion.div>
      </AnimatePresence>

    </div>
  );
}
