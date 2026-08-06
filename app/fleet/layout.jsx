"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Send,
  MapPin,
  Truck,
  BarChart3,
  Bell,
  UserCircle,
} from "lucide-react";

export default function FleetLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/fleet/dashboard", icon: LayoutDashboard },
    { label: "Dispatches", href: "/fleet/dispatches", icon: Send },
    { label: "Live Tracking", href: "/fleet/tracking", icon: MapPin },
    { label: "Vehicles", href: "/fleet/vehicles", icon: Truck },
    { label: "Analytics", href: "/fleet/reports", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-xl text-white">
              <Truck size={20} />
            </div>
            <div>
              <h1 className="text-base font-bold leading-tight">
                Fleet Control Hub
              </h1>
              <p className="text-[10px] text-slate-400 font-mono">
                Lideta Heavy Transport System
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors">
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></span>
            </button>

            <div className="h-6 w-px bg-slate-800"></div>

            <div className="flex items-center gap-2 text-xs">
              <UserCircle size={24} className="text-slate-400" />
              <div className="hidden sm:block">
                <p className="font-bold text-slate-200">Dereje Sebsibe</p>
                <p className="text-[10px] text-slate-400">
                  Fleet Operations Lead
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main App Container */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 gap-6">
        {/* Desktop Sidebar Navigation */}
        <aside className="w-56 shrink-0 hidden md:block space-y-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
            Operations Menu
          </p>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex items-center justify-around p-2 z-40">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-bold ${
                isActive ? "text-blue-600" : "text-slate-500"
              }`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
