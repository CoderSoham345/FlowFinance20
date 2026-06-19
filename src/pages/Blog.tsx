import React from "react";
import { BLOG_POSTS } from "../data";
import { BookOpen, Calendar, ChevronRight, Sparkles } from "lucide-react";
import { useApp } from "../components/AppContext";

export default function Blog() {
  const { addNotification } = useApp();

  return (
    <div className="space-y-8 font-sans">
      
      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white font-display tracking-tight">Growth & Strategy Insights</h2>
        <p className="text-xs text-slate-500">
          Professional research articles explaining our market penetration, cash flow science, and SME trends in India.
        </p>
      </div>

      {/* Blog listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            className="group rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 overflow-hidden shadow-sm flex flex-col justify-between hover:scale-[1.01] transition-transform"
          >
            <div>
              {/* Decorative cover bar image placeholder using canvas vector */}
              <div className="h-32 bg-slate-900 border-b border-slate-100 p-4.5 flex flex-col justify-between dark:border-slate-800">
                <span className="text-[9px] uppercase font-mono font-bold tracking-widest text-blue-400">Blueprint Editorial</span>
                <span className="text-white font-display text-xs font-bold leading-tight truncate">{post.title}</span>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono font-bold uppercase">
                  <span className="inline-flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </span>
                  <span>{post.author}</span>
                </div>

                <div className="space-y-1 text-xs">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-snug group-hover:text-blue-500 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed pt-2 text-[11px] font-medium">
                    {post.summary}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-5 pb-5 pt-3 border-t border-slate-50 dark:border-slate-850 flex items-center justify-between text-[11px] font-bold text-blue-500 group-hover:underline cursor-pointer">
              <span>Read briefing</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
