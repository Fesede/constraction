"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Navigation,
  MapPin,
  Compass,
  AlertCircle,
  Radio,
  CheckCircle2,
  PhoneCall,
  ArrowLeft,
} from "lucide-react";

export default function DriverNavigation() {
  const [isSimulatingGPS, setIsSimulatingGPS] = useState(true);
  const [distanceRemaining, setDistanceRemaining] = useState("4.2 km");
  const [eta, setEta] = useState("12 mins");
  const [isGeofenceTriggered, setIsGeofenceTriggered] = useState(true); // 5km trigger active

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Top Header / Back Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/driver/dashboard"
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Live Turn-by-Turn Navigation
            </h2>
            <p className="text-xs text-slate-500">
              Trip #TRIP-801 • Destination: Lideta Hub Site
            </p>
          </div>
        </div>

        {/* Live GPS Streaming Badge */}
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-semibold">
          <Radio size={14} className="animate-pulse text-emerald-600" />
          <span>GPS Telemetry Active</span>
        </div>
      </div>

      {/* Main Grid: Map View & Turn Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Simulated Interactive Map Interface */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-md h-[420px] flex flex-col justify-between p-4">
            {/* Map Overlay Top Info Bar */}
            <div className="z-10 flex items-center justify-between bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 text-white">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-600 rounded-lg text-white">
                  <Navigation size={20} className="transform rotate-45" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase">
                    Next Turn (500m)
                  </p>
                  <p className="text-sm font-bold">
                    Turn Right onto Ras Abebe Aregay St
                  </p>
                </div>
              </div>
            </div>

            {/* Simulated GPS Map Graphic Canvas Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]">
              <div className="text-center space-y-2">
                <div className="inline-flex p-4 bg-blue-600/30 text-blue-400 rounded-full animate-ping">
                  <Compass size={32} />
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  Simulating Vehicle GPS Route Engine...
                </p>
              </div>
            </div>

            {/* Geofence Alert Trigger Banner */}
            {isGeofenceTriggered && (
              <div className="z-10 bg-amber-500/90 backdrop-blur-md text-slate-950 px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-between border border-amber-400/50 shadow-lg">
                <div className="flex items-center gap-2">
                  <AlertCircle size={16} />
                  <span>
                    5 km Site Geofence Triggered! Site Manager notified for
                    offloading.
                  </span>
                </div>
                <CheckCircle2 size={16} className="text-slate-900" />
              </div>
            )}

            {/* Map Overlay Bottom Controls */}
            <div className="z-10 flex items-center justify-between bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 text-white">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold">
                  Target Destination
                </p>
                <p className="text-xs font-bold text-slate-200">
                  Lideta Hub Construction Site
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-400 uppercase font-bold">
                  Current Speed
                </p>
                <p className="text-xs font-bold text-emerald-400">38 km/h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Route Details & Destination Actions */}
        <div className="space-y-6">
          {/* Trip Distance & Time Stats */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">
              Route Telemetry Summary
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <p className="text-[10px] text-slate-400 uppercase font-bold">
                  Distance Left
                </p>
                <p className="text-xl font-extrabold text-slate-800">
                  {distanceRemaining}
                </p>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <p className="text-[10px] text-slate-400 uppercase font-bold">
                  Est. Arrival Time
                </p>
                <p className="text-xl font-extrabold text-blue-600">{eta}</p>
              </div>
            </div>

            {/* Site Contact Card */}
            <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 space-y-2">
              <p className="text-[11px] font-bold text-blue-900 uppercase">
                Site Manager Contact
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-800">
                    Site Engineer Manager
                  </p>
                  <p className="text-[11px] text-slate-500">+251 911 234 567</p>
                </div>
                <a
                  href="tel:+251911234567"
                  className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <PhoneCall size={16} />
                </a>
              </div>
            </div>

            {/* Direct Proceed to e-POD Button */}
            <Link
              href="/driver/epod"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow-sm"
            >
              <span>Arrived at Site? Open e-POD</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
