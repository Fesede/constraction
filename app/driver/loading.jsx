"use client";

import { Navigation, Loader2 } from "lucide-react";

export default function DriverLoading() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center space-y-4">
      <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700 shadow-xl">
        <Navigation size={32} className="text-blue-400 animate-spin" />
      </div>

      <div className="space-y-1">
        <p className="text-sm font-bold text-slate-200">
          Connecting Driver Console
        </p>
        <p className="text-xs text-slate-400">
          Syncing active route data and delivery manifests...
        </p>
      </div>
    </div>
  );
}
