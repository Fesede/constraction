"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Truck,
  PackageCheck,
  FileCheck2,
  AlertTriangle,
  MapPin,
  Clock,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export default function ManagerDashboard() {
  // Mock data for incoming dispatches
  const [incomingTrucks] = useState([
    {
      id: "TRIP-801",
      truckNo: "AA-3-9821",
      driver: "Dereje Sebsibe",
      material: "Ready-Mix Concrete (C-30)",
      qty: "25.5 Tons",
      eta: "8 mins (3.2 km)",
      status: "Geofence Approaching",
    },
    {
      id: "TRIP-804",
      truckNo: "AA-3-4112",
      driver: "Bekele Tadesse",
      material: "Aggregate Grade 2",
      qty: "30.0 Tons",
      eta: "22 mins (11.5 km)",
      status: "En-Route",
    },
  ]);

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-5 md:p-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-1">
            <MapPin size={16} /> Site Station: Lideta Hub Construction Site
          </div>
          <h2 className="text-xl md:text-2xl font-bold">
            Site Operations Overview
          </h2>
          <p className="text-slate-400 text-xs md:text-sm mt-0.5">
            Monitor incoming aggregate deliveries, authorize material e-PODs,
            and track daily site volume.
          </p>
        </div>

        <Link
          href="/manager/epod"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm self-start md:self-auto"
        >
          <FileCheck2 size={16} />
          <span>Review Pending e-PODs</span>
        </Link>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">
              Today&apos;s Received
            </p>
            <p className="text-2xl font-extrabold text-slate-800 mt-1">
              142.5 T
            </p>
            <p className="text-[10px] text-emerald-600 font-semibold mt-0.5 flex items-center gap-0.5">
              <ArrowUpRight size={12} /> +18% vs yesterday
            </p>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <PackageCheck size={22} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">
              Active Dispatches
            </p>
            <p className="text-2xl font-extrabold text-blue-600 mt-1">
              4 Trucks
            </p>
            <p className="text-[10px] text-slate-500 font-semibold mt-0.5">
              2 within 5 km zone
            </p>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <Truck size={22} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">
              Pending Sign-Offs
            </p>
            <p className="text-2xl font-extrabold text-amber-600 mt-1">
              3 Receipts
            </p>
            <p className="text-[10px] text-amber-600 font-semibold mt-0.5">
              Requires manager pin
            </p>
          </div>
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
            <FileCheck2 size={22} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">
              Quality Approvals
            </p>
            <p className="text-2xl font-extrabold text-slate-800 mt-1">
              100% Passed
            </p>
            <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">
              Slump test cleared
            </p>
          </div>
          <div className="p-3 bg-slate-100 text-slate-700 rounded-xl">
            <CheckCircle2 size={22} />
          </div>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Arriving Trucks Feed */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-800">
                  Incoming Deliveries & Geofence Live Map
                </h3>
                <p className="text-xs text-slate-500">
                  Trucks approaching Lideta Hub receiving station
                </p>
              </div>
              <Link
                href="/manager/dispatches"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                View All <ChevronRight size={14} />
              </Link>
            </div>

            <div className="space-y-3">
              {incomingTrucks.map((truck) => (
                <div
                  key={truck.id}
                  className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-blue-600 font-mono bg-blue-50 px-2 py-0.5 rounded-md">
                        {truck.id}
                      </span>
                      <span className="text-xs font-bold text-slate-800">
                        {truck.truckNo}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                        {truck.status}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-slate-700">
                      {truck.material} •{" "}
                      <strong className="text-slate-900">{truck.qty}</strong>
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Driver: {truck.driver}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 border-slate-200 pt-2 sm:pt-0">
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <Clock size={13} /> {truck.eta}
                    </span>
                    <Link
                      href="/manager/epod"
                      className="text-xs font-bold text-blue-600 hover:text-blue-800 mt-1"
                    >
                      Prepare Receipt →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Quick Site Actions & QC Warning Widget */}
        <div className="space-y-6">
          {/* Quick Manager Actions */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">
              Site Control Actions
            </h3>

            <div className="space-y-2.5">
              <Link
                href="/manager/qc-logs"
                className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-800">
                      Record Slump / QC Test
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Log concrete temperature & slump
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-400">→</span>
              </Link>

              <Link
                href="/manager/reports"
                className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                    <PackageCheck size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-800">
                      Daily Volume Report
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Export material intake logs
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-400">→</span>
              </Link>
            </div>
          </div>

          {/* Quality Assurance Card */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
              <AlertTriangle size={16} /> QC Compliance Rule
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              All Ready-Mix Concrete (C-30) deliveries must complete a slump
              test within 15 minutes of arriving at Lideta Hub site before
              offloading clearance is granted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
