"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Truck,
  MapPin,
  Clock,
  Search,
  Filter,
  Radio,
  AlertCircle,
  CheckCircle2,
  ArrowLeft,
  PhoneCall,
  Navigation,
} from "lucide-react";

export default function ManagerDispatches() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // Mock list of active dispatches heading to Lideta Hub
  const [dispatches] = useState([
    {
      id: "TRIP-801",
      truckNo: "AA-3-9821",
      driverName: "Dereje Sebsibe",
      driverPhone: "+251 911 000 111",
      material: "Ready-Mix Concrete (C-30)",
      quantity: "25.5 Tons",
      origin: "Gotera Batching Plant #3",
      status: "Geofence Triggered", // Geofence Triggered, En-Route, At Site, Completed
      eta: "8 mins",
      distance: "3.2 km",
      speed: "38 km/h",
      lastPing: "Just now",
    },
    {
      id: "TRIP-804",
      truckNo: "AA-3-4112",
      driverName: "Bekele Tadesse",
      driverPhone: "+251 912 333 444",
      material: "Aggregate Grade 2",
      quantity: "30.0 Tons",
      origin: "Kality Quarry Yard",
      status: "En-Route",
      eta: "22 mins",
      distance: "11.5 km",
      speed: "45 km/h",
      lastPing: "2 mins ago",
    },
    {
      id: "TRIP-799",
      truckNo: "AA-3-7720",
      driverName: "Alula Yohannes",
      driverPhone: "+251 913 555 666",
      material: "Reinforcement Steel Rebar",
      quantity: "18.0 Tons",
      origin: "Akaki Storage Depot",
      status: "At Site",
      eta: "Arrived",
      distance: "0.0 km",
      speed: "0 km/h",
      lastPing: "1 min ago",
    },
  ]);

  // Filter logic
  const filteredDispatches = dispatches.filter((dispatch) => {
    const matchesSearch =
      dispatch.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispatch.truckNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispatch.driverName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispatch.material.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      filterStatus === "All" || dispatch.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Top Header / Back Button */}
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
              Active Dispatches & Geofence Tracker
            </h2>
            <p className="text-xs text-slate-500">
              Live position telemetry for vehicles bound for Lideta Hub Site
            </p>
          </div>
        </div>

        {/* Telemetry Status Badge */}
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-semibold self-start sm:self-auto">
          <Radio size={14} className="animate-pulse text-emerald-600" />
          <span>3 Telemetry Feeds Active</span>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col md:flex-row gap-3 justify-between items-center">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search trip ID, truck #, or driver..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-4 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Status Filter Buttons */}
        <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <Filter size={14} className="text-slate-400 mr-1 hidden sm:block" />
          {["All", "Geofence Triggered", "En-Route", "At Site"].map(
            (status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  filterStatus === status
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {status}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Active Dispatches List */}
      <div className="space-y-4">
        {filteredDispatches.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-2">
            <Truck size={32} className="mx-auto text-slate-300" />
            <p className="text-sm font-bold text-slate-700">
              No matching dispatches found
            </p>
            <p className="text-xs text-slate-400">
              Try adjusting your search terms or status filters.
            </p>
          </div>
        ) : (
          filteredDispatches.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl border transition-all p-5 shadow-sm space-y-4 ${
                item.status === "Geofence Triggered"
                  ? "border-amber-300 ring-2 ring-amber-500/10"
                  : "border-slate-200"
              }`}
            >
              {/* Card Top Banner / Status Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-blue-600 font-mono bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {item.id}
                  </span>
                  <h3 className="text-base font-bold text-slate-800">
                    {item.truckNo}
                  </h3>
                  <span className="text-[11px] text-slate-400 font-semibold">
                    • {item.origin}
                  </span>
                </div>

                {/* Status Indicator Pill */}
                <div className="flex items-center gap-2">
                  {item.status === "Geofence Triggered" && (
                    <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300 animate-pulse">
                      <AlertCircle size={14} /> 5 km Geofence Triggered
                    </span>
                  )}

                  {item.status === "En-Route" && (
                    <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      <Truck size={14} /> En-Route
                    </span>
                  )}

                  {item.status === "At Site" && (
                    <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      <CheckCircle2 size={14} /> Arrived At Site
                    </span>
                  )}
                </div>
              </div>

              {/* Vehicle Telemetry Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">
                    Cargo Payload
                  </p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">
                    {item.material}
                  </p>
                  <p className="text-[11px] font-semibold text-blue-600">
                    {item.quantity}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">
                    Assigned Driver
                  </p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">
                    {item.driverName}
                  </p>
                  <a
                    href={`tel:${item.driverPhone}`}
                    className="text-[11px] font-semibold text-slate-500 hover:text-blue-600 flex items-center gap-1 mt-0.5"
                  >
                    <PhoneCall size={11} /> {item.driverPhone}
                  </a>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">
                    Distance & Speed
                  </p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">
                    {item.distance} remaining
                  </p>
                  <p className="text-[11px] font-semibold text-emerald-600">
                    {item.speed}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">
                    Estimated Arrival
                  </p>
                  <p className="text-xs font-bold text-blue-600 mt-0.5 flex items-center gap-1">
                    <Clock size={13} /> {item.eta}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Updated: {item.lastPing}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-1">
                <Link
                  href="/manager/epod"
                  className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors shadow-sm"
                >
                  <CheckCircle2 size={15} />
                  <span>Prepare Offloading e-POD</span>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
