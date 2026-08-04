"use client";

import { useState } from "react";
import { Menu, Wifi, WifiOff, Bell, User } from "lucide-react";

export default function Header({ onMenuToggle }) {
  const [isOnline, setIsOnline] = useState(true);
  const [driverStatus, setDriverStatus] = useState("In-Transit");

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between shadow-sm">
      {/* Left: Mobile Sidebar Toggle & Page Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle Navigation Menu"
        >
          <Menu size={22} />
        </button>

        <div className="hidden sm:block">
          <h1 className="text-base font-bold text-slate-800">
            C-TMS Driver Portal
          </h1>
          <p className="text-xs text-slate-500">Heavy Vehicle Field Terminal</p>
        </div>
      </div>

      {/* Right: Connectivity Status, Duty Switcher & Profile Quick Info */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Network Status Indicator */}
        <div
          className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${
            isOnline
              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
              : "bg-amber-50 text-amber-700 border-amber-200"
          }`}
          title={
            isOnline
              ? "Connected to C-TMS Server"
              : "Working Offline - Data will auto-sync when network recovers"
          }
        >
          {isOnline ? <Wifi size={14} /> : <WifiOff size={14} />}
          <span className="hidden xs:inline">
            {isOnline ? "Online" : "Offline Cache"}
          </span>
        </div>

        {/* Active Duty Status Selector */}
        <div className="relative">
          <select
            value={driverStatus}
            onChange={(e) => setDriverStatus(e.target.value)}
            className="text-xs font-semibold bg-slate-100 border border-slate-300 text-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="On Duty">🟢 On Duty</option>
            <option value="In-Transit">🚚 In-Transit</option>
            <option value="Off Duty">🔴 Off Duty</option>
          </select>
        </div>

        {/* User Badge Icon */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
            <User size={16} />
          </div>
        </div>
      </div>
    </header>
  );
}
