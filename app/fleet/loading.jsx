"use client";

import { Truck, Loader2 } from "lucide-react";

export default function FleetLoading() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center p-6 text-center space-y-4">
      {/* Animated Fleet Icon Container */}
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full animate-ping opacity-75"></div>
        <div className="relative w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
          <Truck size={32} className="animate-pulse" />
        </div>
      </div>

      {/* Loading Status Text */}
      <div className="space-y-1">
        <h3 className="text-base font-bold text-slate-800 flex items-center justify-center gap-2">
          <span>Loading Fleet Hub</span>
          <Loader2 size={16} className="animate-spin text-blue-600" />
        </h3>
        <p className="text-xs text-slate-500 font-medium max-w-xs">
          Fetching GPS telemetry, vehicle logs, and driver dispatches...
        </p>
      </div>

      {/* Skeleton Cards Placeholder */}
      <div className="w-full max-w-md space-y-2 pt-4">
        <div className="h-3 bg-slate-200 rounded-full w-3/4 mx-auto animate-pulse"></div>
        <div className="h-3 bg-slate-200 rounded-full w-1/2 mx-auto animate-pulse"></div>
      </div>
    </div>
  );
}
