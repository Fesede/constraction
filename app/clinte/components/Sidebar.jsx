"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FolderKanban,
  Users,
  PlusCircle,
  Truck,
  FileCheck,
  ClipboardCheck,
  BarChart3,
} from "lucide-react";

const navItems = [
  { name: "Projects Overview", href: "/clinte", icon: FolderKanban },
  { name: "Commission Project", href: "/clinte/create", icon: PlusCircle },
  { name: "Applicants Bidding", href: "/clinte/applicants", icon: Users },
  { name: "Active Dispatches", href: "/clinte/dispatches", icon: Truck },
  { name: "e-POD Sign-offs", href: "/clinte/epod", icon: FileCheck },
  { name: "Quality Log", href: "/clinte/quality-log", icon: ClipboardCheck },
  { name: "Reports & Analytics", href: "/clinte/reports", icon: BarChart3 },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#101726] border-r border-slate-800 text-white min-h-screen flex flex-col justify-between p-4">
      <div className="space-y-6">
        {/* Brand Header */}
        <div className="px-2 py-3 flex items-center gap-2 border-b border-slate-800">
          <div className="p-1.5 bg-[#1D63FF] rounded-lg">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-base font-bold tracking-wide">C-TMS Portal</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">
              Client Panel
            </p>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#1D63FF] text-white font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-[#1E293B]"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer / Status */}
      <div className="bg-[#1E293B] rounded-xl p-3 border border-slate-800 text-xs text-slate-400">
        <p className="font-semibold text-slate-200">Client Account</p>
        <p className="text-[10px] text-emerald-400 mt-0.5">
          ● Active Bidding Session
        </p>
      </div>
    </aside>
  );
}
