"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Truck,
  Navigation,
  Radio,
  ArrowLeft,
  Search,
  Phone,
  AlertCircle,
  Gauge,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function FleetTracking() {
  const [selectedTruckId, setSelectedTruckId] = useState("AA-3-9821");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock list of active fleet vehicles carrying out deliveries
  const vehicles = [
    {
      id: "AA-3-9821",
      driver: "Dereje Sebsibe",
      material: "Ready-Mix Concrete (C-30)",
      destination: "Lideta Hub Site",
      speed: "42 km/h",
      fuel: "78%",
      status: "Moving",
      location: "Near Gotera Interchange",
      lat: "8.9806",
      lng: "38.7578",
      eta: "8 mins",
      telemetry: "Optimal",
    },
    {
      id: "AA-3-4112",
      driver: "Bekele Tadesse",
      material: "Aggregate Grade 2",
      destination: "Gotera Terminal Yard",
      speed: "0 km/h",
      fuel: "64%",
      status: "Stopped",
      location: "Kality Quarry Loading Dock",
      lat: "8.9211",
      lng: "38.7612",
      eta: "25 mins",
      telemetry: "Idling",
    },
    {
      id: "AA-3-7720",
      driver: "Alula Yohannes",
      material: "Reinforcement Steel Rebar",
      destination: "Bole Terminal Site",
      speed: "58 km/h",
      fuel: "85%",
      status: "Moving",
      location: "Bole Ring Road Expressway",
      lat: "8.9912",
      lng: "38.7890",
      eta: "14 mins",
      telemetry: "Optimal",
    },
  ];

  const activeVehicle =
    vehicles.find((v) => v.id === selectedTruckId) || vehicles[0];

  const filteredVehicles = vehicles.filter(
    (v) =>
      v.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.destination.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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
              Live GPS Tracking & Telemetry
            </h2>
            <p className="text-xs text-slate-500">
              Real-time vehicle position monitoring, speed controls, and
              geofence alerts
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border bg-emerald-50 text-emerald-700 border-emerald-200 shadow-sm">
            <Radio size={14} className="animate-pulse text-emerald-600" />
            <span>Telemetry Feed Active</span>
          </div>
        </div>
      </div>

      {/* Main Grid Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 1 Column: Active Vehicle Selection List */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-4 flex flex-col h-[620px]">
          {/* Search Bar */}
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-2.5 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search truck no., driver, site..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {filteredVehicles.map((truck) => {
              const isSelected = truck.id === selectedTruckId;
              return (
                <div
                  key={truck.id}
                  onClick={() => setSelectedTruckId(truck.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-blue-50/80 border-blue-500 shadow-sm"
                      : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <Truck
                        size={14}
                        className={
                          isSelected ? "text-blue-600" : "text-slate-400"
                        }
                      />
                      {truck.id}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        truck.status === "Moving"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-amber-50 text-amber-700 border-amber-200"
                      }`}
                    >
                      {truck.status}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-slate-700 mt-1.5">
                    {truck.driver}
                  </p>

                  <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 font-medium pt-2 border-t border-slate-100">
                    <span className="truncate max-w-[140px]">
                      {truck.destination}
                    </span>
                    <span className="font-bold text-blue-600 flex items-center gap-0.5">
                      ETA {truck.eta}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 2 Columns: Map View & Telemetry Control Box */}
        <div className="lg:col-span-2 space-y-4">
          {/* Simulated Map View Container */}
          <div className="relative bg-slate-900 rounded-2xl border border-slate-800 h-[380px] overflow-hidden shadow-inner flex flex-col justify-between p-4">
            {/* Grid Mesh Map Placeholder Graphic */}
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

            {/* Top Map Status Overlay */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-white flex items-center gap-2 text-xs">
                <MapPin size={14} className="text-blue-400 animate-bounce" />
                <span className="font-bold">{activeVehicle.id}</span>
                <span className="text-slate-400">
                  ({activeVehicle.location})
                </span>
              </div>

              <div className="bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-white text-xs font-mono">
                {activeVehicle.lat}° N, {activeVehicle.lng}° E
              </div>
            </div>

            {/* Simulated GPS Marker Node */}
            <div className="relative z-10 self-center my-auto flex flex-col items-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-16 h-16 bg-blue-500/20 rounded-full animate-ping"></div>
                <div className="w-10 h-10 bg-blue-600 rounded-full border-2 border-white text-white flex items-center justify-center shadow-lg">
                  <Navigation size={18} className="transform rotate-45" />
                </div>
              </div>
              <div className="mt-2 bg-slate-900/95 text-white text-[11px] font-bold px-3 py-1 rounded-lg border border-slate-700 shadow-md">
                {activeVehicle.driver} • {activeVehicle.speed}
              </div>
            </div>

            {/* Bottom Map Controls Overlay */}
            <div className="relative z-10 flex items-center justify-between text-xs text-slate-300">
              <span className="bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800">
                Route Corridor: Addis-Bole Sector
              </span>
              <span className="bg-emerald-950/80 text-emerald-400 font-semibold px-2.5 py-1 rounded-lg border border-emerald-800/60">
                Geofence Bound OK
              </span>
            </div>
          </div>

          {/* Active Vehicle Telemetry & Driver Comms */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-800">
                  Telemetry Details - {activeVehicle.id}
                </h3>
                <p className="text-xs text-slate-500">
                  Live CAN-bus sensor readouts and cabin status
                </p>
              </div>

              <button className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-xl transition-colors">
                <Phone size={14} />
                <span>Call Driver</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <p className="text-[10px] font-bold text-slate-400 uppercase">
                  Speed
                </p>
                <p className="text-lg font-extrabold text-slate-800 mt-0.5 flex items-center gap-1">
                  <Gauge size={16} className="text-blue-600" />{" "}
                  {activeVehicle.speed}
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <p className="text-[10px] font-bold text-slate-400 uppercase">
                  Fuel Tank
                </p>
                <p className="text-lg font-extrabold text-slate-800 mt-0.5">
                  {activeVehicle.fuel}
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <p className="text-[10px] font-bold text-slate-400 uppercase">
                  Est. Arrival
                </p>
                <p className="text-lg font-extrabold text-emerald-600 mt-0.5">
                  {activeVehicle.eta}
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <p className="text-[10px] font-bold text-slate-400 uppercase">
                  Diagnostics
                </p>
                <p className="text-lg font-extrabold text-indigo-600 mt-0.5 flex items-center gap-1">
                  <ShieldCheck size={16} /> {activeVehicle.telemetry}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
