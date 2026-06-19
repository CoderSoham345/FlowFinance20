import React, { useState } from "react";
import { useApp } from "../components/AppContext";
import { Calendar, Mail, User, Building, Clock, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const { addBooking, addNotification } = useApp();
  
  // Slot booking states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("2026-06-25");
  const [time, setTime] = useState("10:00 AM");
  const [completed, setCompleted] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    addBooking(name, company || "NextEra Labs", email, date, time);
    addNotification(`CFO strategy slot booked for Ananya Sharma: ${time} on ${date}`);
    setCompleted(true);
    setName("");
    setEmail("");
    setCompany("");
  };

  return (
    <div className="space-y-8 font-sans max-w-4xl mx-auto">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-display tracking-tight">CFO Strategy Consultation</h2>
        <p className="text-xs text-slate-500">
          Select preferred slots to reserve a real-time portfolio audit with the FlowFinance consulting division.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Scheduler Form Left */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
          {completed ? (
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                <CheckCircle2 className="h-6 w-6 stroke-[3px]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-800 dark:text-white">Strategy Slot reserved!</h4>
                <p className="text-xs text-slate-500">
                  New appointment scheduled. Audit summaries will populate your active operations dashboard slot instantly.
                </p>
              </div>
              <button
                onClick={() => setCompleted(false)}
                className="rounded-lg border border-slate-200 dark:border-slate-800 px-4 py-2 hover:bg-slate-50 text-slate-705 dark:text-slate-350 cursor-pointer text-xs"
              >
                Schedule Another Slot
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-mono text-slate-400 font-bold block">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Siddharth Dev"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent py-2 pl-9 pr-3 text-slate-800 dark:text-slate-200 focus:outline-[#0a84ff]"
                    />
                    <User className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-mono text-slate-400 font-bold block">Business Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="e.g. sid@bits-alumni.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent py-2 pl-9 pr-3 text-slate-800 dark:text-slate-200 focus:outline-[#0a84ff]"
                    />
                    <Mail className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-mono text-slate-400 font-bold block">Company Name</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. NextGen Robotics Ltd"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent py-2 pl-9 pr-3 text-slate-800 dark:text-slate-200 focus:outline-[#0a84ff]"
                  />
                  <Building className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-mono text-slate-400 font-bold block">Consultation Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 dark:border-slate-805 bg-transparent py-2 pl-9 pr-3 text-slate-850 dark:text-slate-200 focus:outline-[#0a84ff]"
                    />
                    <Calendar className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-mono text-slate-400 font-bold block">Preferred Hour</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-805 bg-white dark:bg-slate-900 px-3 py-2 text-slate-850 dark:text-slate-200 focus:outline-none"
                  >
                    <option value="10:00 AM">10:00 AM (IST)</option>
                    <option value="02:00 PM">02:00 PM (IST)</option>
                    <option value="04:30 PM">04:30 PM (IST)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 text-xs shadow-lg shadow-blue-500/25 transition-all text-center cursor-pointer"
              >
                Reserve Audit Appointment Slot
              </button>

            </form>
          )}
        </div>

        {/* Corporate contact cards Right */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase">Executive Headquarters</span>
            
            <div className="space-y-3.5 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <div>
                <b className="text-slate-850 dark:text-white block font-display">Bengaluru Science Lab</b>
                <p className="text-[11px] text-slate-400 font-normal mt-0.5 leading-snug">
                  Block C, SINE Incubator Hub, Electronic City Phase 1, Bangalore, Karnataka.
                </p>
              </div>

              <div>
                <b className="text-slate-850 dark:text-white block font-display">Investor Relations</b>
                <span className="text-blue-500 font-mono text-[11px]">invest@flowfinance-gtm.org</span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-6 text-[10px] text-slate-400 leading-normal">
            *Upon reservation, our scheduling subledgers will dispatch mock calendar invitations straight to your mailbox registry.
          </div>
        </div>

      </div>

    </div>
  );
}
