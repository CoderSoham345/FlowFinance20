import React, { useState } from "react";
import { Link2, Sparkles, Copy, Check, QrCode, ClipboardCheck } from "lucide-react";
import { useApp } from "../components/AppContext";

export default function Referrals() {
  const { addNotification } = useApp();
  const [slug, setSlug] = useState("sine-iitb");
  const [copied, setCopied] = useState(false);

  const fullPromoUrl = `https://flowfinance.org/join?ref=${slug}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(fullPromoUrl);
    setCopied(true);
    addNotification(`Referral promo copied: "${fullPromoUrl}"`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 font-sans">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-display tracking-tight">Referral & Invitation Suite</h2>
        <p className="text-xs text-slate-500">
          Design custom promotional handles, distribute automated links, and track referral conversions.
        </p>
      </div>

      {/* Main Suite Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* URL Creator card */}
        <div className="lg:col-span-8 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-sm space-y-6">
          
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex justify-between items-center">
            <div>
              <h3 className="text-sm font-bold text-slate-850 dark:text-white font-display">Promo Link Creator</h3>
              <p className="text-[10px] text-slate-400 font-sans mt-0.5">Define your unique identifier slug for web distributions</p>
            </div>
            
            <Link2 className="h-4.5 w-4.5 text-blue-500" />
          </div>

          <div className="space-y-4 text-xs font-semibold">
            
            {/* Slug input */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">Custom Handle / slug</label>
              <div className="flex rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden text-slate-800 dark:text-slate-200">
                <span className="bg-slate-50 dark:bg-slate-950 px-3.5 py-2 text-slate-400 text-xs border-r border-slate-200 dark:border-slate-800 font-mono">
                  flowfinance.org/join?ref=
                </span>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"))}
                  className="w-full bg-transparent px-3 py-2 focus:outline-none placeholder-slate-400 text-xs"
                  placeholder="e.g. bits-pilani"
                />
              </div>
              <p className="text-[9px] text-slate-400 mt-1">Lowercase strings and hyphens only.</p>
            </div>

            {/* Formulations */}
            <div className="pt-4 space-y-2">
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-mono">Your unique distribution link</span>
              
              <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200/80 p-3.5 dark:bg-slate-950/40 dark:border-slate-800/80">
                <span className="font-mono text-blue-600 dark:text-blue-400 font-bold truncate max-w-[70%] select-all">
                  {fullPromoUrl}
                </span>
                
                <button
                  onClick={handleCopyLink}
                  className="rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold py-1.5 px-3 flex items-center space-x-1.5 transition-colors cursor-pointer text-[10px]"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 stroke-[3px]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* MOCK QR CODE PANEL RIGHT */}
        <div className="lg:col-span-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-md flex flex-col items-center justify-between space-y-6">
          <div className="text-center space-y-1">
            <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase">Dynamic QR Code</span>
            <h4 className="text-xs font-bold text-slate-800 dark:text-white font-display">Scan with Android/iOS</h4>
          </div>

          {/* Styled vector QR simulation block representing Linear aesthetics */}
          <div className="h-36 w-36 rounded-2xl bg-slate-50 border-2 border-slate-100 p-2.5 dark:bg-slate-950 dark:border-slate-800 flex items-center justify-center relative group">
            <QrCode className="h-28 w-28 text-slate-800 dark:text-slate-200 stroke-[1.25px]" />
            <div className="absolute inset-0 bg-blue-600/5 backdrop-blur-[0.5px] opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
              <span className="bg-slate-900 text-white text-[8px] font-mono font-bold px-2 py-0.5 rounded uppercase">Verified match</span>
            </div>
          </div>

          <p className="text-[10px] text-slate-400 text-center leading-normal">
            Distribute this QR during group physical workshops, connecting trial enrollments directly with slug: <b className="text-blue-500 select-all font-mono">{slug}</b>.
          </p>
        </div>

      </div>

    </div>
  );
}
