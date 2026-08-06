"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Truck,
  MapPin,
  Send,
  Wrench,
  AlertTriangle,
  Clock,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  Fuel,
} from "lucide-react";

export default function FleetDashboard() {
  // Mock data for active haulage trips
  const [activeTrips] = useState([
    {
      id: "TRIP-801",
      truckNo: "AA-3-9821",
      driver: "Dereje Sebsibe",
      material: "Ready-Mix Concrete (C-30)",
      destination: "Lideta Hub Construction Site",
      status: "In Transit",
      eta: "8 mins",
    },
    {
      id: "TRIP-804",
      truckNo: "AA-3-4112",
      driver: "Bekele Tadesse",
      material: "Aggregate Grade 2",
      destination: "Gotera Terminal Expansion",
      status: "Loading at Quarry",
      eta: "25 mins",
    },
    {
      id: "TRIP-805",
      truckNo: "AA-3-7720",
      driver: "Alula Yohannes",
      material: "Reinforcement Steel Rebar",
      destination: "Bole Terminal Site",
      status: "En-Route",
      eta: "40 mins",
    },
  ]);

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-5 md:p-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-1">
            <Truck size={16} /> Fleet Operations HQ: Addis Ababa Central Depot
          </div>
          <h2 className="text-xl md:text-2xl font-bold">
            Fleet Logistics Control
          </h2>
          <p className="text-slate-400 text-xs md:text-sm mt-0.5">
            Monitor active vehicle dispatches, heavy transport telemetry, and
            driver schedules in real time.
          </p>
        </div>

        <Link
          href="/fleet/dispatches"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm self-start md:self-auto"
        >
          <Send size={16} />
          <span>Dispatch New Trip</span>
        </Link>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">
              Active Dispatches
            </p>
            <p className="text-2xl font-extrabold text-blue-600 mt-1">
              12 Trucks
            </p>
            <p className="text-[10px] text-emerald-600 font-semibold mt-0.5 flex items-center gap-0.5">
              <ArrowUpRight size={12} /> 80% Fleet Utilization
            </p>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <Truck size={22} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">
              On-Time Deliveries
            </p>
            <p className="text-2xl font-extrabold text-slate-800 mt-1">96.8%</p>
            <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">
              Avg turnaround: 42 mins
            </p>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <CheckCircle2 size={22} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">
              Fleet Fuel Efficiency
            </p>
            <p className="text-2xl font-extrabold text-slate-800 mt-1">
              2.4 km/L
            </p>
            <p className="text-[10px] text-slate-500 font-semibold mt-0.5">
              Optimal heavy payload range
            </p>
          </div>
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
            <Fuel size={22} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">
              Maintenance Alerts
            </p>
            <p className="text-2xl font-extrabold text-red-600 mt-1">
              2 Vehicles
            </p>
            <p className="text-[10px] text-red-600 font-semibold mt-0.5">
              Requires oil/tyre service
            </p>
          </div>
          <div className="p-3 bg-red-50 text-red-600 rounded-xl">
            <Wrench size={22} />
          </div>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Active Vehicle Telemetry Feed */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-800">
                  Live Active Trips & Telemetry
                </h3>
                <p className="text-xs text-slate-500">
                  Real-time driver updates across regional destination sites
                </p>
              </div>
              <Link
                href="/fleet/tracking"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                Open Map <ChevronRight size={14} />
              </Link>
            </div>

            <div className="space-y-3">
              {activeTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-blue-600 font-mono bg-blue-50 px-2 py-0.5 rounded-md">
                        {trip.id}
                      </span>
                      <span className="text-xs font-bold text-slate-800">
                        {trip.truckNo}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                        {trip.status}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-slate-700">
                      {trip.material}
                    </p>
                    <p className="text-[11px] text-slate-500 flex items-center gap-1">
                      <MapPin size={12} className="text-slate-400" />{" "}
                      Destination:{" "}
                      <strong className="text-slate-700">
                        {trip.destination}
                      </strong>
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 border-slate-200 pt-2 sm:pt-0">
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <Clock size={13} /> ETA {trip.eta}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium mt-1">
                      Driver: {trip.driver}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Fleet Actions & Urgent Service Alerts */}
        <div className="space-y-6">
          {/* Quick Dispatch Actions */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2">
              Dispatch Control Quick Links
            </h3>

            <div className="space-y-2.5">
              <Link
                href="/fleet/tracking"
                className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                    <MapPin size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-800">
                      Fleet Live GPS Map
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Track all vehicles in transit
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-400">→</span>
              </Link>

              <Link
                href="/fleet/vehicles"
                className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 text-slate-700 rounded-lg">
                    <Wrench size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-800">
                      Vehicle Registry & Service
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Manage 15 heavy haulage trucks
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-400">→</span>
              </Link>
            </div>
          </div>

          {/* Urgent Vehicle Alert Card */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-red-400 text-xs font-bold">
              <AlertTriangle size={16} /> Maintenance Required
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Vehicle <strong className="text-white">AA-3-4112</strong> has
              reached its scheduled 10,000 km hydraulic check limit. Flagged for
              workshop review after current trip completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
