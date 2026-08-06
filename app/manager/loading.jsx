"use client";

import { ShieldCheck, Loader2 } from "lucide-react";

export default function ManagerLoading() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6 text-center space-y-5">
      {/* Animated Executive Icon */}
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 bg-blue-100 rounded-full animate-ping opacity-75"></div>
        <div className="relative w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center text-blue-400 shadow-xl border border-slate-800">
          <ShieldCheck size={40} className="animate-pulse" />
        </div>
      </div>

      {/* Loading Status Text */}
      <div className="space-y-1.5">
        <h3 className="text-lg font-bold text-slate-800 flex items-center justify-center gap-2">
          <span>Initializing Manager Portal</span>
          <Loader2 size={18} className="animate-spin text-blue-600" />
        </h3>
        <p className="text-xs text-slate-500 font-medium max-w-sm">
          Loading executive dashboard, operational metrics, and site clearance
          controls...
        </p>
      </div>

      {/* Skeleton Card Placeholders */}
      <div className="w-full max-w-md space-y-3 pt-4">
        <div className="h-12 bg-slate-200/80 rounded-xl w-full animate-pulse"></div>
        <div className="grid grid-cols-2 gap-3">
          <div className="h-20 bg-slate-200/80 rounded-xl animate-pulse"></div>
          <div className="h-20 bg-slate-200/80 rounded-xl animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
