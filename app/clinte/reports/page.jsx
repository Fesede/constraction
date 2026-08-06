"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  TrendingUp,
  Clock,
  Truck,
  CheckCircle2,
  AlertTriangle,
  Download,
  Calendar,
  Building2,
  PackageCheck,
  Zap,
} from "lucide-react";

export default function LogisticsReportsPage() {
  const [timeRange, setTimeRange] = useState("7d");

  return (
    <div className="space-y-6">
      {/* Top Header & Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects Overview</span>
        </Link>

        <div className="flex items-center gap-2">
          <button className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5 shadow-sm">
            <Download className="w-3.5 h-3.5" />
            Export CSV
          </button>
          <button className="bg-[#101726] text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1.5 shadow-sm">
            <Download className="w-3.5 h-3.5" />
            PDF Executive Brief
          </button>
        </div>
      </div>

      {/* Page Title Banner */}
      <div className="bg-[#101726] text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5" />
            Project Analytics (#PRJ-101)
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1">
            Logistics & Delivery Performance Report
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Real-time telemetry reports covering material volumetric throughput,
            cycle times, batching plant latency, and site offloading efficiency.
          </p>
        </div>

        {/* Time Range Switcher */}
        <div className="bg-[#1E293B] border border-slate-700/60 p-1 rounded-xl flex items-center gap-1 shrink-0">
          {[
            { label: "Today", value: "24h" },
            { label: "7 Days", value: "7d" },
            { label: "30 Days", value: "30d" },
          ].map((range) => (
            <button
              key={range.value}
              onClick={() => setTimeRange(range.value)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                timeRange === range.value
                  ? "bg-[#1D63FF] text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Top Level Metric Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[10px] font-bold uppercase tracking-wider">
              Total Volume Delivered
            </span>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <PackageCheck className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-900">428.5 m³</p>
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>85.7% of Project Target (500 m³)</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[10px] font-bold uppercase tracking-wider">
              Avg. Turnaround Time
            </span>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-900">42 Mins</p>
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>-6 Mins vs Target Cycle Time</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[10px] font-bold uppercase tracking-wider">
              Dispatches Completed
            </span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <Truck className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-900">51 Trips</p>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <span>0 On-Site Accidents Logged</span>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[10px] font-bold uppercase tracking-wider">
              Quality Approval Rate
            </span>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-900">97.8%</p>
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
            <span>1 Batch Rejected (QUAL-1086)</span>
          </div>
        </div>
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Breakdown */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              Volume Delivered vs. Target Mix
            </h3>
            <span className="text-xs text-slate-500">Updated 10 Mins Ago</span>
          </div>

          {/* Concrete Type Progress Stack */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-slate-800">
                  Ready-Mix Concrete C-30 (Structural Pour)
                </span>
                <span className="text-blue-600">280 m³ / 300 m³ (93%)</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#1D63FF] h-full rounded-full"
                  style={{ width: "93%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-slate-800">
                  Ready-Mix Concrete C-25 (Blinding & Slabs)
                </span>
                <span className="text-emerald-600">110 m³ / 150 m³ (73%)</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full"
                  style={{ width: "73%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-slate-800">
                  Crushed Aggregate (20mm Backfill)
                </span>
                <span className="text-amber-600">
                  38.5 Tons / 50 Tons (77%)
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-amber-500 h-full rounded-full"
                  style={{ width: "77%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Operational Bottlenecks Log */}
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-100 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
              Site Congestion & Bottleneck Analysis
            </h4>
            <p className="text-xs text-slate-600">
              Peak driver wait time detected between{" "}
              <span className="font-bold text-slate-800">
                10:00 AM - 11:30 AM
              </span>{" "}
              due to pump truck position repositioning at Block A. Recommend
              staggering batch plant dispatches by 15 minutes.
            </p>
          </div>
        </div>

        {/* Fleet Performance & Drivers */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            Top Performing Carriers
          </h3>

          <div className="space-y-4 text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <p className="font-bold text-slate-800">
                  Abebe Kebede Logistics
                </p>
                <p className="text-slate-400">
                  8 Mixers Active • 99.1% On-Time
                </p>
              </div>
              <span className="font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                28 Trips
              </span>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <p className="font-bold text-slate-800">
                  Tewodros Transport Fleet
                </p>
                <p className="text-slate-400">
                  5 Mixers Active • 94.5% On-Time
                </p>
              </div>
              <span className="font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                17 Trips
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-800">Mulugeta Independent</p>
                <p className="text-slate-400">1 Heavy Tipper • 100% On-Time</p>
              </div>
              <span className="font-extrabold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                6 Trips
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
