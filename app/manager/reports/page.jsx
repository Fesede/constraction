"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  Download,
  Calendar,
  ArrowLeft,
  TrendingUp,
  CheckCircle2,
  Building2,
  Package,
  FileText,
} from "lucide-react";

export default function ManagerReports() {
  const [dateRange, setDateRange] = useState("This Week");

  // Daily intake dataset
  const dailyIntake = [
    { day: "Mon", volume: 110.5, target: 120 },
    { day: "Tue", volume: 135.0, target: 120 },
    { day: "Wed", volume: 142.5, target: 120 },
    { day: "Thu", volume: 98.0, target: 120 },
    { day: "Fri", volume: 0.0, target: 120 },
  ];

  // Material summary breakdown
  const materialSummary = [
    {
      material: "Ready-Mix Concrete (C-30)",
      totalQty: "280.5 Tons",
      trips: 12,
      passRate: "100%",
    },
    {
      material: "Aggregate Grade 2",
      totalQty: "145.0 Tons",
      trips: 5,
      passRate: "100%",
    },
    {
      material: "Reinforcement Steel Rebar",
      totalQty: "60.5 Tons",
      trips: 3,
      passRate: "100%",
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/manager/dashboard"
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Site Material Reports & Analytics
            </h2>
            <p className="text-xs text-slate-500">
              Intake volume summaries, supplier performance, and compliance
              metrics
            </p>
          </div>
        </div>

        <button
          onClick={() =>
            alert("Exporting Site Material Intake Summary (PDF)...")
          }
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm self-start sm:self-auto"
        >
          <Download size={16} />
          <span>Export PDF Summary</span>
        </button>
      </div>

      {/* Date Filter & Overview Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col sm:flex-row gap-3 justify-between items-center">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <Building2 size={16} className="text-blue-600" />
          <span>Station: Lideta Hub Construction Site</span>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Calendar size={15} className="text-slate-400" />
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Today">Today&apos;s Intake</option>
            <option value="This Week">This Week</option>
            <option value="This Month">This Month</option>
          </select>
        </div>
      </div>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <p className="text-[11px] font-bold text-slate-400 uppercase">
            Total Material Volume Received
          </p>
          <p className="text-2xl font-extrabold text-slate-800">486.0 Tons</p>
          <p className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5">
            <TrendingUp size={12} /> +12.4% vs last week target
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <p className="text-[11px] font-bold text-slate-400 uppercase">
            Total Completed Dispatches
          </p>
          <p className="text-2xl font-extrabold text-blue-600">20 Trips</p>
          <p className="text-[10px] text-slate-500 font-semibold">
            100% Verified with e-POD
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <p className="text-[11px] font-bold text-slate-400 uppercase">
            Quality Pass Rate
          </p>
          <p className="text-2xl font-extrabold text-emerald-600">95.2%</p>
          <p className="text-[10px] text-slate-500 font-semibold">
            1 rejected batch logged
          </p>
        </div>
      </div>

      {/* Visual Volume Trend Bar Chart Component */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <BarChart3 size={16} className="text-blue-600" /> Daily Concrete &
            Material Delivery Trend (Tons)
          </h3>
          <span className="text-[11px] font-semibold text-slate-400">
            Target: 120 T/day
          </span>
        </div>

        <div className="pt-4 pb-2 flex items-end justify-between gap-4 h-48 border-b border-slate-100 px-4">
          {dailyIntake.map((item) => {
            const heightPercent = Math.min((item.volume / 160) * 100, 100);
            return (
              <div
                key={item.day}
                className="flex-1 flex flex-col items-center gap-2 h-full justify-end"
              >
                <span className="text-[11px] font-bold text-slate-700">
                  {item.volume > 0 ? `${item.volume}T` : "-"}
                </span>
                <div className="w-full max-w-[40px] bg-slate-100 rounded-t-lg h-full flex items-end overflow-hidden">
                  <div
                    style={{ height: `${heightPercent}%` }}
                    className={`w-full rounded-t-lg transition-all ${
                      item.volume >= item.target
                        ? "bg-blue-600"
                        : "bg-amber-500"
                    }`}
                  />
                </div>
                <span className="text-xs font-bold text-slate-600">
                  {item.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Material Breakdown Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <Package size={16} className="text-blue-600" /> Material Category
            Breakdown
          </h3>
        </div>

        <div className="divide-y divide-slate-100 text-xs">
          {materialSummary.map((row, index) => (
            <div
              key={index}
              className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50"
            >
              <div>
                <p className="font-bold text-slate-800">{row.material}</p>
                <p className="text-[11px] text-slate-500">
                  {row.trips} Dispatched Loads
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">
                    Volume
                  </p>
                  <p className="font-bold text-blue-600">{row.totalQty}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">
                    QC Compliance
                  </p>
                  <p className="font-bold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 size={13} /> {row.passRate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
