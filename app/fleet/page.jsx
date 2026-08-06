"use client";

import Link from "next/link";
import {
  Truck,
  Send,
  MapPin,
  Wrench,
  ShieldAlert,
  CheckCircle2,
  Clock,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  Fuel,
} from "lucide-react";

export default function FleetDashboard() {
  // Key Operational Indicators
  const stats = [
    {
      title: "Active Dispatches",
      value: "18",
      change: "+3 today",
      icon: Send,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Vehicles En-Route",
      value: "12",
      change: "GPS tracking active",
      icon: MapPin,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Maintenance Due",
      value: "3",
      change: "Scheduled checks",
      icon: Wrench,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      title: "Fleet Availability",
      value: "88%",
      change: "22/25 trucks ready",
      icon: Truck,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
  ];

  // Live Dispatches Overview
  const recentDispatches = [
    {
      id: "DSP-8801",
      driver: "Dereje Sebsibe",
      truck: "AA-3-9821",
      destination: "Lideta Hub Site",
      material: "Ready-Mix Concrete",
      status: "En-Route",
      eta: "8 mins",
    },
    {
      id: "DSP-8802",
      driver: "Bekele Tadesse",
      truck: "AA-3-4112",
      destination: "Gotera Terminal Yard",
      material: "Aggregate Grade 2",
      status: "Loading",
      eta: "25 mins",
    },
    {
      id: "DSP-8803",
      driver: "Alula Yohannes",
      truck: "AA-3-7720",
      destination: "Bole Terminal Site",
      material: "Reinforcement Steel",
      status: "En-Route",
      eta: "14 mins",
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Welcome & Quick Action Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
            Operational Overview
          </span>
          <h2 className="text-2xl font-black mt-1">
            Lideta Fleet Control Center
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Monitor real-time haulage dispatches, heavy vehicle telemetry, and
            driver logs.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <Link
            href="/fleet/dispatches"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm"
          >
            <Send size={15} />
            <span>New Dispatch</span>
          </Link>
        </div>
      </div>

      {/* Primary KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase">
                  {stat.title}
                </span>
                <div className={`p-2 rounded-xl ${stat.bg} ${stat.color}`}>
                  <Icon size={18} />
                </div>
              </div>
              <p className="text-2xl font-extrabold text-slate-800">
                {stat.value}
              </p>
              <p className="text-[10px] font-semibold text-slate-500">
                {stat.change}
              </p>
            </div>
          );
        })}
      </div>

      {/* Main Operational Split Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Dispatches Ledger (2 Columns) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <Clock size={16} className="text-blue-600" /> Active Dispatches
            </h3>
            <Link
              href="/fleet/dispatches"
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              View All <ChevronRight size={14} />
            </Link>
          </div>

          <div className="divide-y divide-slate-100 flex-1">
            {recentDispatches.map((item) => (
              <div
                key={item.id}
                className="p-4 hover:bg-slate-50/80 transition-colors flex items-center justify-between gap-4 text-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold font-mono text-slate-800">
                      {item.id}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {item.truck}
                    </span>
                  </div>
                  <p className="font-bold text-slate-700">
                    {item.driver} •{" "}
                    <span className="font-normal text-slate-500">
                      {item.material}
                    </span>
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Destination: {item.destination}
                  </p>
                </div>

                <div className="text-right space-y-1 shrink-0">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full border inline-block ${
                      item.status === "En-Route"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-amber-50 text-amber-700 border-amber-200"
                    }`}
                  >
                    {item.status}
                  </span>
                  <p className="text-[10px] font-bold text-blue-600">
                    ETA: {item.eta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Navigation Cards & Telemetry Alert (1 Column) */}
        <div className="space-y-4">
          {/* Geofence / Telemetry Banner */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-600">
              <ShieldAlert size={18} />
              <h4 className="text-xs font-bold uppercase tracking-wider">
                Maintenance Notice
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Vehicle{" "}
              <span className="font-mono font-bold text-slate-800">
                AA-3-4112
              </span>{" "}
              has exceeded its 188,000 km oil change milestone. Scheduled for
              Kality workshop inspection today.
            </p>
            <Link
              href="/fleet/vehicles"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 pt-1"
            >
              Open Maintenance Logs <ArrowRight size={14} />
            </Link>
          </div>

          {/* Module Navigation Cards */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Quick Modules
            </p>

            <Link
              href="/fleet/tracking"
              className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-400 transition-all text-xs font-bold text-slate-800 shadow-sm"
            >
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-600" />
                Live GPS Map Tracking
              </span>
              <ChevronRight size={14} className="text-slate-400" />
            </Link>

            <Link
              href="/fleet/reports"
              className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-400 transition-all text-xs font-bold text-slate-800 shadow-sm"
            >
              <span className="flex items-center gap-2">
                <Fuel size={16} className="text-amber-600" />
                Fleet Analytics & Fuel Reports
              </span>
              <ChevronRight size={14} className="text-slate-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
