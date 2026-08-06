"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  TrendingUp,
  Fuel,
  Clock,
  CheckCircle2,
  ShieldCheck,
  ArrowLeft,
  Download,
  Calendar,
  Truck,
} from "lucide-react";

export default function FleetReports() {
  const [timeRange, setTimeRange] = useState("This Month");

  // Drivers performance ledger mock data
  const driverPerformance = [
    {
      id: "DRV-101",
      name: "Dereje Sebsibe",
      tripsCompleted: 48,
      onTimeRate: "98.2%",
      safetyScore: "96/100",
      fuelEfficiency: "2.6 km/L",
      status: "Excellent",
    },
    {
      id: "DRV-102",
      name: "Bekele Tadesse",
      tripsCompleted: 42,
      onTimeRate: "94.0%",
      safetyScore: "91/100",
      fuelEfficiency: "2.3 km/L",
      status: "Good",
    },
    {
      id: "DRV-103",
      name: "Alula Yohannes",
      tripsCompleted: 39,
      onTimeRate: "92.5%",
      safetyScore: "89/100",
      fuelEfficiency: "2.2 km/L",
      status: "Review",
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/fleet/dashboard"
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Fleet Analytics & Reports
            </h2>
            <p className="text-xs text-slate-500">
              Track key operational metrics, driver efficiency, and heavy
              haulage trends
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="relative">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="text-xs font-semibold bg-white border border-slate-200 text-slate-800 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-sm"
            >
              <option value="This Week">📅 This Week</option>
              <option value="This Month">📅 This Month</option>
              <option value="Last Quarter">📅 Last Quarter</option>
            </select>
          </div>

          <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-3 rounded-xl text-xs transition-colors shadow-sm">
            <Download size={15} />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Analytics Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[11px] font-bold uppercase">
              Total Deliveries
            </span>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Truck size={18} />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-800">342 Trips</p>
          <p className="text-[10px] font-semibold text-emerald-600 flex items-center gap-1">
            <TrendingUp size={12} /> +12.4% vs last period
          </p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[11px] font-bold uppercase">
              Average On-Time Rate
            </span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <CheckCircle2 size={18} />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-800">95.6%</p>
          <p className="text-[10px] font-semibold text-slate-500">
            Target: &gt;95.0%
          </p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[11px] font-bold uppercase">
              Avg Fuel Consumption
            </span>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
              <Fuel size={18} />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-800">2.4 km/L</p>
          <p className="text-[10px] font-semibold text-emerald-600 flex items-center gap-1">
            <TrendingUp size={12} /> +0.2 km/L improved
          </p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-[11px] font-bold uppercase">
              Safety Score Avg
            </span>
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <ShieldCheck size={18} />
            </div>
          </div>
          <p className="text-2xl font-extrabold text-slate-800">93 / 100</p>
          <p className="text-[10px] font-semibold text-indigo-600">
            Zero major incidents
          </p>
        </div>
      </div>

      {/* Main Breakdown Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Driver Performance Table (2 Columns) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck size={16} className="text-blue-600" /> Driver
              Performance Breakdown
            </h3>
            <span className="text-xs text-slate-400 font-semibold">
              {timeRange}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px]">
                  <th className="p-3 pl-4">Driver</th>
                  <th className="p-3">Trips</th>
                  <th className="p-3">On-Time %</th>
                  <th className="p-3">Fuel Avg</th>
                  <th className="p-3">Safety</th>
                  <th className="p-3 pr-4 text-right">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {driverPerformance.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="p-3 pl-4">
                      <p className="font-bold text-slate-800">{row.name}</p>
                      <p className="text-[10px] text-slate-400 font-mono">
                        {row.id}
                      </p>
                    </td>
                    <td className="p-3 text-slate-700 font-bold">
                      {row.tripsCompleted}
                    </td>
                    <td className="p-3 text-emerald-600 font-bold">
                      {row.onTimeRate}
                    </td>
                    <td className="p-3 text-slate-600">{row.fuelEfficiency}</td>
                    <td className="p-3 text-indigo-600 font-bold">
                      {row.safetyScore}
                    </td>
                    <td className="p-3 pr-4 text-right">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                          row.status === "Excellent"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : row.status === "Good"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : "bg-amber-50 text-amber-700 border-amber-200"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Operational Efficiency Card (1 Column) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">
            Haulage Telemetry Insights
          </h3>

          <div className="space-y-4 text-xs">
            <div>
              <div className="flex items-center justify-between font-semibold mb-1">
                <span className="text-slate-600">On-Time Fleet Dispatch</span>
                <span className="text-slate-800 font-bold">95.6%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[95.6%] rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between font-semibold mb-1">
                <span className="text-slate-600">Fleet Availability Ratio</span>
                <span className="text-slate-800 font-bold">80.0%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[80%] rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between font-semibold mb-1">
                <span className="text-slate-600">Route Deviation Margin</span>
                <span className="text-slate-800 font-bold">3.2%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full w-[3.2%] rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <p className="text-[11px] font-bold text-slate-800">
              💡 Optimization Recommendation
            </p>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Shifting departure windows for Kality-bound trips by 15 minutes
              avoids peak congestion along Gotera Interchange, saving ~12% fuel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
