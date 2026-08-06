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
  Building2,
  HardHat,
  LogOut,
  X,
  ChevronDown,
  FilePlus,
} from "lucide-react";

const roleConfigs = {
  driver: {
    roleName: "Truck Driver",
    terminalLabel: "Driver Terminal",
    icon: Truck,
    navItems: [
      { name: "Dashboard & Trips", href: "/driver/dashboard", icon: Home },
      { name: "Live Navigation", href: "/driver/navigation", icon: Navigation },
      { name: "e-POD Sign-Off", href: "/driver/epod", icon: FileSignature },
      { name: "Maintenance Log", href: "/driver/maintenance", icon: Wrench },
      {
        name: "Apply for Project",
        href: "/driver/ApplyProject",
        icon: FilePlus,
      },
    ],
    infoLabel: "Assigned Vehicle",
    infoValue: "AA-3-9821",
    syncText: "Sync Offline Receipts",
  },
  siteManager: {
    roleName: "Site Manager",
    terminalLabel: "Site Terminal",
    icon: Building2,
    navItems: [
      { name: "Site Overview", href: "/site-manager/dashboard", icon: Home },
      {
        name: "Material Receipts",
        href: "/site-manager/epod",
        icon: FileSignature,
      },
      {
        name: "Dispatches & Inspections",
        href: "/site-manager/inspections",
        icon: Wrench,
      },
      {
        name: "Apply for Project",
        href: "/driver/ApplyProject?role=SiteManager",
        icon: FilePlus,
      },
    ],
    infoLabel: "Active Location",
    infoValue: "Lideta Hub - Site A",
    syncText: "Sync Site Logs",
  },
  fleetManager: {
    roleName: "Fleet Manager",
    terminalLabel: "Fleet Operations",
    icon: HardHat,
    navItems: [
      { name: "Fleet Control", href: "/fleet-manager/dashboard", icon: Home },
      {
        name: "Driver Assignments",
        href: "/fleet-manager/drivers",
        icon: Navigation,
      },
      {
        name: "Vehicle Maintenance",
        href: "/fleet-manager/maintenance",
        icon: Wrench,
      },
      {
        name: "Apply for Project",
        href: "/driver/ApplyProject?role=FleetManager",
        icon: FilePlus,
      },
    ],
    infoLabel: "Active Fleet",
    infoValue: "18 Vehicles Active",
    syncText: "Sync Fleet Status",
  },
};

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();
  const [isSyncing, setIsSyncing] = useState(false);
  const [currentRole, setCurrentRole] = useState("driver");
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

  const activeRoleConfig = roleConfigs[currentRole];
  const HeaderIcon = activeRoleConfig.icon;

  const handleManualSync = () => {
    setIsSyncing(true);
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
        <div className="p-4 border-b border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                <HeaderIcon size={20} />
              </div>
              <div>
                <h2 className="font-bold text-base text-slate-100">
                  C-TMS Logistics
                </h2>
                <p className="text-xs text-blue-400 font-medium">
                  {activeRoleConfig.terminalLabel}
                </p>
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

          {/* Role Panel Switching Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
              className="w-full flex items-center justify-between bg-slate-800 hover:bg-slate-700/80 px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-semibold text-slate-200 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                {activeRoleConfig.roleName} Panel
              </span>
              <ChevronDown size={14} className="text-slate-400" />
            </button>

            {isRoleDropdownOpen && (
              <div className="absolute left-0 right-0 mt-1 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-10 overflow-hidden text-xs">
                {Object.entries(roleConfigs).map(([key, role]) => {
                  const RoleIcon = role.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setCurrentRole(key);
                        setIsRoleDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-left transition-colors ${
                        currentRole === key
                          ? "bg-blue-600 text-white font-semibold"
                          : "text-slate-300 hover:bg-slate-700 hover:text-white"
                      }`}
                    >
                      <RoleIcon size={14} />
                      <span>{role.roleName}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Primary Page Navigation */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">
            {activeRoleConfig.roleName} Pages
          </p>

          {activeRoleConfig.navItems.map((item) => {
            const Icon = item.icon;
            const basePath = item.href.split("?")[0];
            const isActive = pathname === basePath;

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

        {/* Offline Sync Action & Details */}
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
              {isSyncing ? "Syncing Local Cache..." : activeRoleConfig.syncText}
            </span>
          </button>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
            <div>
              <p className="text-[10px] uppercase text-slate-500 font-bold">
                {activeRoleConfig.infoLabel}
              </p>
              <p className="font-mono text-slate-200 font-semibold">
                {activeRoleConfig.infoValue}
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
