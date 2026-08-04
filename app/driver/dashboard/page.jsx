"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Truck,
  MapPin,
  Clock,
  Package,
  CheckCircle2,
  Play,
  Navigation,
  FileSignature,
  AlertTriangle,
} from "lucide-react";

export default function DriverDashboard() {
  // Mock data for assigned trip
  const [activeTrip, setActiveTrip] = useState({
    id: "TRIP-801",
    origin: "Central Batching Plant #3 (Gotera)",
    destination: "Lideta Hub Construction Site",
    material: "Ready-Mix Concrete (C-30)",
    tonnage: "25.5 Tons",
    status: "In-Transit", // Assigned, En-Route, Delivered
    assignedTime: "10:30 AM",
    estArrival: "11:15 AM",
  });

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Top Banner / Welcome */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-5 md:p-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-1">
            <Truck size={16} /> Vehicle: AA-3-9821 (Cement Mixer)
          </div>
          <h2 className="text-xl md:text-2xl font-bold">
            Driver Duty Dashboard
          </h2>
          <p className="text-slate-400 text-xs md:text-sm mt-0.5">
            Review active dispatches, navigation routes, and material handovers.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 self-start md:self-auto">
          <div className="text-right">
            <p className="text-[10px] text-slate-400 uppercase font-bold">
              Shift Status
            </p>
            <p className="text-xs font-bold text-emerald-400">Active Shift</p>
          </div>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Active Trip Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6 shadow-sm space-y-5">
            {/* Header / Trip Status */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  Active Dispatch #{activeTrip.id}
                </span>
                <h3 className="text-lg font-bold text-slate-800 mt-2">
                  Material Transport Delivery
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                🚚 {activeTrip.status}
              </span>
            </div>

            {/* Route Timeline */}
            <div className="space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1.5 bg-emerald-100 text-emerald-700 rounded-full">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase">
                    Origin Location
                  </p>
                  <p className="text-sm font-bold text-slate-800">
                    {activeTrip.origin}
                  </p>
                </div>
              </div>

              <div className="ml-4 border-l-2 border-dashed border-slate-300 h-6"></div>

              <div className="flex items-start gap-3">
                <div className="mt-1 p-1.5 bg-blue-100 text-blue-700 rounded-full">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase">
                    Destination Construction Site
                  </p>
                  <p className="text-sm font-bold text-slate-800">
                    {activeTrip.destination}
                  </p>
                </div>
              </div>
            </div>

            {/* Cargo Payload Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-3">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <Package size={18} />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-bold uppercase">
                    Cargo Type
                  </p>
                  <p className="text-xs font-bold text-slate-800">
                    {activeTrip.material}
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-3">
                <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-bold uppercase">
                    Est. Arrival
                  </p>
                  <p className="text-xs font-bold text-slate-800">
                    {activeTrip.estArrival}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Trip Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/driver/navigation"
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow-sm"
              >
                <Navigation size={18} />
                <span>Open Navigation Map</span>
              </Link>

              <Link
                href="/driver/epod"
                className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow-sm"
              >
                <FileSignature size={18} />
                <span>Capture e-POD Sign-off</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Stats & Safety/Maintenance Widget */}
        <div className="space-y-6">
          {/* Driver Quick Actions Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">
              Driver Terminal Actions
            </h3>

            <div className="space-y-2.5">
              <Link
                href="/driver/maintenance"
                className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-100 text-amber-700 rounded-lg">
                    <AlertTriangle size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-800">
                      Report Truck Fault
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Log mechanical issues
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-400">→</span>
              </Link>
            </div>
          </div>

          {/* Today Summary Stats */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-sm space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Shift Metrics
            </h3>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-slate-800/70 p-3 rounded-xl border border-slate-700/50">
                <p className="text-2xl font-bold text-blue-400">3</p>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Trips Completed
                </p>
              </div>

              <div className="bg-slate-800/70 p-3 rounded-xl border border-slate-700/50">
                <p className="text-2xl font-bold text-emerald-400">76.5T</p>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Total Tonnage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
