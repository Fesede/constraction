"use client";

import React from "react";
import { FileCheck, X, CheckCircle, MapPin, ShieldCheck } from "lucide-react";

export default function EPodViewer({ isOpen = false, onClose, podData }) {
  if (!isOpen) return null;

  const data = podData || {
    tripId: "TRIP-801",
    driver: "Mulugeta Tadesse",
    site: "Lideta Hub Construction Site",
    cargo: "Ready-Mix Concrete (C-30)",
    volume: "8.5 m³",
    signedBy: "Supervisor Kassahun",
    timestamp: "11:18 AM - Aug 6, 2026",
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl space-y-5 border border-slate-100 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
            <FileCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Digital e-POD Verification
            </h2>
            <p className="text-xs text-slate-500">Dispatch #{data.tripId}</p>
          </div>
        </div>

        {/* Handover Specifications */}
        <div className="bg-[#F8FAFC] rounded-xl p-4 border border-slate-100 space-y-3 text-sm">
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-xs text-slate-400 font-bold uppercase">
              Driver
            </span>
            <span className="font-semibold text-slate-800">{data.driver}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-xs text-slate-400 font-bold uppercase">
              Material Cargo
            </span>
            <span className="font-semibold text-slate-800">
              {data.cargo} ({data.volume})
            </span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="text-xs text-slate-400 font-bold uppercase">
              Delivery Site
            </span>
            <span className="font-semibold text-slate-800">{data.site}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-slate-400 font-bold uppercase">
              Timestamp
            </span>
            <span className="font-semibold text-slate-800">
              {data.timestamp}
            </span>
          </div>
        </div>

        {/* Signature Placeholder Card */}
        <div className="border border-dashed border-slate-300 rounded-xl p-4 text-center bg-slate-50 space-y-2">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Site Manager Signature
          </p>
          <p className="text-xl font-serif italic text-slate-700 font-bold">
            {data.signedBy}
          </p>
          <div className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Cryptographically Verified</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-[#009B64] hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Close Preview
        </button>
      </div>
    </div>
  );
}
