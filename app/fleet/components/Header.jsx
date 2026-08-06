"use client";

import { useState } from "react";
import { Menu, Truck, Bell, ShieldCheck, User, Radio } from "lucide-react";

export default function Header({ onMenuToggle }) {
  const [activeRegion, setActiveRegion] = useState("Addis Ababa Central Depot");
  const [activeAlerts, setActiveAlerts] = useState(2);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between shadow-sm">
      {/* Left: Mobile Sidebar Toggle & Fleet Dispatch Info */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle Navigation Menu"
        >
          <Menu size={22} />
        </button>

        <div className="hidden sm:flex items-center gap-2">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg border border-blue-100">
            <Truck size={18} />
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-800">
              C-TMS Fleet Control Panel
            </h1>
            <p className="text-[11px] text-slate-500">
              Live Logistics & Vehicle Telemetry
            </p>
          </div>
        </div>
      </div>

      {/* Center/Right Controls: Depot Selector, Active Fleet Count, Alerts & User Profile */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Depot Location Selector */}
        <div className="relative hidden md:block">
          <select
            value={activeRegion}
            onChange={(e) => setActiveRegion(e.target.value)}
            className="text-xs font-semibold bg-slate-100 border border-slate-300 text-slate-800 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="Addis Ababa Central Depot">
              📍 Central Depot (HQ)
            </option>
            <option value="Gotera Plant Terminal">📍 Gotera Terminal</option>
            <option value="Kality Heavy Vehicle Yard">📍 Kality Yard</option>
          </select>
        </div>

        {/* Live GPS Telemetry Indicator */}
        <div className="hidden xs:flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border bg-emerald-50 text-emerald-700 border-emerald-200">
          <Radio size={14} className="animate-pulse text-emerald-600" />
          <span>GPS Telemetry Active</span>
        </div>

        {/* Fleet Alert Badge */}
        <button
          className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          title={`${activeAlerts} Active Vehicle Alerts`}
        >
          <Bell size={18} />
          {activeAlerts > 0 && (
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
              {activeAlerts}
            </span>
          )}
        </button>

        {/* Fleet Manager Profile Icon */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
            <User size={16} />
          </div>
          <div className="hidden lg:block text-left">
            <p className="text-xs font-bold text-slate-800">Fleet Dispatcher</p>
            <p className="text-[10px] text-slate-500">Logistics Control</p>
          </div>
        </div>
      </div>
    </header>
  );
}
