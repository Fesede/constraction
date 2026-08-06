"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Truck,
  FileCheck2,
  ClipboardList,
  BarChart3,
  Building2,
  X,
  LogOut,
  Briefcase,
} from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  // Core Site Manager Pages Navigation Structure
  const navItems = [
    {
      name: "Site Overview",
      href: "/manager/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Apply Project",
      href: "/manager/ApplyProject",
      icon: Briefcase,
    },
    {
      name: "Active Dispatches",
      href: "/manager/dispatches",
      icon: Truck,
    },
    {
      name: "Material e-POD Review",
      href: "/manager/epod",
      icon: FileCheck2,
    },
    {
      name: "Quality & Slump Logs",
      href: "/manager/qc-logs",
      icon: ClipboardList,
    },
    {
      name: "Reports & Analytics",
      href: "/manager/reports",
      icon: BarChart3,
    },
  ];

  return (
    <>
      {/* Mobile Drawer Overlay / Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Navigation Drawer */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-slate-900 text-slate-100 flex flex-col transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:z-auto lg:h-full
        `}
      >
        {/* Sidebar Header */}
        <div className="p-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <Building2 size={20} />
            </div>
            <div>
              <h2 className="font-bold text-base text-slate-100">
                C-TMS Manager
              </h2>
              <p className="text-xs text-slate-400">Site Operations Panel</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="lg:hidden text-slate-400 hover:text-white p-1 rounded-md"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Primary Page Navigation */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">
            Management Pages
          </p>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-900/40 border-l-4 border-blue-300"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white hover:translate-x-1"
                  }
                `}
              >
                <Icon
                  size={18}
                  className={isActive ? "text-white" : "text-slate-400"}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Site Metrics Quick Summary */}
        <div className="p-4 border-t border-slate-800 space-y-3 bg-slate-950/50">
          <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Today&apos;s Received:</span>
              <span className="font-bold text-emerald-400">142.5 Tons</span>
            </div>
            <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[70%] rounded-full"></div>
            </div>
            <p className="text-[10px] text-slate-400 text-right">
              70% of target load
            </p>
          </div>

          {/* Active Site & Logout Footer */}
          <div className="pt-1 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
            <div>
              <p className="text-[10px] uppercase text-slate-500 font-bold">
                Active Station
              </p>
              <p className="font-semibold text-slate-200 truncate max-w-[130px]">
                Lideta Hub Site
              </p>
            </div>

            <button
              className="text-red-400 hover:text-red-300 hover:bg-red-950/30 p-1.5 rounded-md transition-colors flex items-center gap-1"
              title="Logout Session"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
