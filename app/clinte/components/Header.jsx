"use client";

import React from "react";
import { ChevronDown, Bell, User } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-[#101726] border-b border-slate-800 text-white px-6 flex items-center justify-between sticky top-0 z-20">
      {/* Project Switcher */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Active Project:
        </span>
        <button className="flex items-center gap-2 bg-[#1E293B] hover:bg-slate-800 text-white text-sm font-semibold py-1.5 px-3 rounded-lg border border-slate-700/60 transition-colors">
          <span>Lideta Hub Construction</span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-400 hover:text-white rounded-lg hover:bg-[#1E293B] transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs text-white">
            CL
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-semibold text-white">Project Client</p>
            <p className="text-[10px] text-slate-400">client@c-tms.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
