"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Truck,
  MapPin,
  Clock,
  Package,
  Search,
  Filter,
  Navigation,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

// Sample live transit telemetry data
const mockDispatches = [
  {
    id: "TRIP-801",
    vehicle: "AA-3-9821 (Cement Mixer)",
    driver: "Mulugeta Tadesse",
    origin: "Central Batching Plant #3 (Gotera)",
    destination: "Lideta Hub Construction Site",
    cargo: "Ready-Mix Concrete (C-30)",
    volume: "8.5 m³",
    estArrival: "11:15 AM",
    status: "In-Transit",
    progress: 70, // percentage along route
  },
  {
    id: "TRIP-802",
    vehicle: "AA-3-4412 (Dump Truck)",
    driver: "Yared Berhanu",
    origin: "Akaki Quarry Site #2",
    destination: "Lideta Hub Construction Site",
    cargo: "Crushed Aggregate (20mm)",
    volume: "16.0 Tons",
    estArrival: "11:45 AM",
    status: "In-Transit",
    progress: 35,
  },
  {
    id: "TRIP-803",
    vehicle: "AA-2-1109 (Cement Mixer)",
    driver: "Dawit Solomon",
    origin: "Central Batching Plant #3 (Gotera)",
    destination: "Lideta Hub Construction Site",
    cargo: "Ready-Mix Concrete (C-25)",
    volume: "9.0 m³",
    estArrival: "10:45 AM",
    status: "Delivered",
    progress: 100,
  },
  {
    id: "TRIP-804",
    vehicle: "AA-3-7720 (Bulk Tanker)",
    driver: "Getachew Assefa",
    origin: "Mugher Cement Depot",
    destination: "Gotera Batching Plant #3",
    cargo: "Bulk Portland Cement",
    volume: "28.0 Tons",
    estArrival: "12:30 PM",
    status: "Delayed",
    progress: 20,
  },
];

export default function DispatchesTrackingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredDispatches = mockDispatches.filter((dispatch) => {
    const matchesStatus =
      statusFilter === "All" || dispatch.status === statusFilter;
    const matchesSearch =
      dispatch.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dispatch.vehicle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dispatch.driver.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Navigation & Header */}
      <div className="flex items-center justify-between">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects Overview</span>
        </Link>

        <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-md flex items-center gap-1.5">
          <Truck className="w-4 h-4 text-blue-500" />
          Live GPS Telemetry Active
        </span>
      </div>

      {/* Banner Card */}
      <div className="bg-[#101726] text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            Real-Time Logistics Telemetry
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1">
            Active Dispatches & Transit Tracking
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Monitor real-time transit status, estimated site arrival times, and
            vehicle progression from batching plants to delivery points.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-[#1E293B] border border-slate-700/60 rounded-xl p-3.5 text-center">
            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
              Active Trips
            </p>
            <p className="text-xl font-extrabold text-blue-400">2 In-Transit</p>
          </div>
          <div className="bg-[#1E293B] border border-slate-700/60 rounded-xl p-3.5 text-center">
            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
              Today's Tonnage
            </p>
            <p className="text-xl font-extrabold text-emerald-400">76.5 Tons</p>
          </div>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          {["All", "In-Transit", "Delivered", "Delayed"].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                statusFilter === status
                  ? "bg-[#1D63FF] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="relative max-w-xs w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search trip ID, driver, vehicle..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#F8FAFC] border border-slate-200 pl-10 pr-4 py-2 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Dispatch Cards List */}
      <div className="space-y-4">
        {filteredDispatches.map((dispatch) => (
          <div
            key={dispatch.id}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-blue-200 transition-all space-y-5"
          >
            {/* Top Row Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-md">
                  #{dispatch.id}
                </span>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {dispatch.vehicle}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Driver:{" "}
                    <span className="font-semibold text-slate-700">
                      {dispatch.driver}
                    </span>
                  </p>
                </div>
              </div>

              {/* Status Pill */}
              <div className="flex items-center gap-2">
                {dispatch.status === "In-Transit" && (
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5" /> In-Transit
                  </span>
                )}
                {dispatch.status === "Delivered" && (
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Delivered
                  </span>
                )}
                {dispatch.status === "Delayed" && (
                  <span className="bg-rose-100 text-rose-800 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" /> Traffic Delay
                  </span>
                )}
              </div>
            </div>

            {/* Route Map Visualiser & Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
              {/* Route Origin & Destination */}
              <div className="lg:col-span-2 bg-[#F8FAFC] p-4 rounded-xl border border-slate-100 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-emerald-100 text-emerald-600 rounded-full mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Origin Location
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      {dispatch.origin}
                    </p>
                  </div>
                </div>

                {/* Progress bar line */}
                <div className="pl-3.5 my-1">
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        dispatch.status === "Delivered"
                          ? "bg-emerald-500"
                          : "bg-[#1D63FF]"
                      }`}
                      style={{ width: `${dispatch.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-blue-100 text-blue-600 rounded-full mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Destination Construction Site
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      {dispatch.destination}
                    </p>
                  </div>
                </div>
              </div>

              {/* Cargo & Arrival Time Grid */}
              <div className="space-y-3">
                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-100 flex items-center gap-3">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    <Package className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Cargo & Payload
                    </p>
                    <p className="text-xs font-semibold text-slate-800">
                      {dispatch.cargo} ({dispatch.volume})
                    </p>
                  </div>
                </div>

                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-100 flex items-center gap-3">
                  <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Est. Arrival Time
                    </p>
                    <p className="text-xs font-semibold text-slate-800">
                      {dispatch.estArrival}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex justify-end">
              <button className="bg-[#101726] hover:bg-slate-800 text-white text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center gap-2 transition-colors">
                <Navigation className="w-3.5 h-3.5" />
                <span>Open Live Map View</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
