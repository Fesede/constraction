"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Navigation,
  FileSignature,
  Wrench,
  RefreshCw,
  Truck,
  LogOut,
  X,
} from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();
  const [isSyncing, setIsSyncing] = useState(false);

  // Core Pages Navigation Structure
  const navItems = [
    {
      name: "Dashboard & Trips",
      href: "/driver/dashboard",
      icon: Home,
    },
    {
      name: "Live Navigation",
      href: "/driver/navigation",
      icon: Navigation,
    },
    {
      name: "e-POD Sign-Off",
      href: "/driver/epod",
      icon: FileSignature,
    },
    {
      name: "Maintenance Log",
      href: "/driver/maintenance",
      icon: Wrench,
    },
  ];

  const handleManualSync = () => {
    setIsSyncing(true);
    // Simulate offline cached delivery sign-offs syncing with server
    setTimeout(() => {
      setIsSyncing(false);
    }, 1500);
  };

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
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        {/* Sidebar Header */}
        <div className="p-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <Truck size={20} />
            </div>
            <div>
              <h2 className="font-bold text-base text-slate-100">
                C-TMS Logistics
              </h2>
              <p className="text-xs text-slate-400">Driver Terminal</p>
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
            Driver Pages
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
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-900/40"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
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

        {/* Offline Sync Action & Vehicle Details */}
        <div className="p-4 border-t border-slate-800 space-y-3 bg-slate-950/50">
          <button
            onClick={handleManualSync}
            disabled={isSyncing}
            className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-slate-200 text-xs font-semibold py-2.5 px-3 rounded-lg border border-slate-700 transition-colors"
          >
            <RefreshCw
              size={14}
              className={
                isSyncing ? "animate-spin text-blue-400" : "text-slate-400"
              }
            />
            <span>
              {isSyncing ? "Syncing Local Cache..." : "Sync Offline Receipts"}
            </span>
          </button>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
            <div>
              <p className="text-[10px] uppercase text-slate-500 font-bold">
                Assigned Vehicle
              </p>
              <p className="font-mono text-slate-200 font-semibold">
                AA-3-9821
              </p>
            </div>

            <button
              className="text-red-400 hover:text-red-300 hover:bg-red-950/30 p-1.5 rounded-md transition-colors flex items-center gap-1"
              title="Logout from Vehicle"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
