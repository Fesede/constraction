"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  FileCheck2,
  CheckCircle2,
  XCircle,
  Search,
  Clock,
  User,
  FileText,
  Scale,
  AlertCircle,
  Download,
} from "lucide-react";

// Sample mock e-POD receipt data
const mockReceipts = [
  {
    id: "EPOD-9041",
    dispatchId: "TRIP-803",
    driver: "Dawit Solomon",
    vehicle: "AA-2-1109",
    material: "Ready-Mix Concrete (C-25)",
    quantityDelivered: "9.0 m³",
    slumpTestResult: "110 mm (Passed)",
    timestamp: "10:45 AM, Today",
    status: "Verified",
    supervisorSignature: "Kassahun Worku",
    deliveryNotes: "Discharged without issue. Batch quality verified on site.",
  },
  {
    id: "EPOD-9042",
    dispatchId: "TRIP-800",
    driver: "Mulugeta Tadesse",
    vehicle: "AA-3-9821",
    material: "Ready-Mix Concrete (C-30)",
    quantityDelivered: "8.5 m³",
    slumpTestResult: "125 mm (Passed)",
    timestamp: "09:15 AM, Today",
    status: "Verified",
    supervisorSignature: "Kassahun Worku",
    deliveryNotes: "Smooth pour at Block B foundation zone.",
  },
  {
    id: "EPOD-9043",
    dispatchId: "TRIP-798",
    driver: "Yared Berhanu",
    vehicle: "AA-3-4412",
    material: "Crushed Aggregate (20mm)",
    quantityDelivered: "15.8 Tons",
    slumpTestResult: "N/A (Aggregate)",
    timestamp: "Yesterday, 04:30 PM",
    status: "Disputed",
    supervisorSignature: "Pending Verification",
    deliveryNotes: "Shortfall detected: 0.2 tons below weight ticket manifest.",
  },
];

export default function EPODReceiptsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [receipts, setReceipts] = useState(mockReceipts);
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  const filteredReceipts = receipts.filter((receipt) => {
    const matchesStatus =
      statusFilter === "All" || receipt.status === statusFilter;
    const matchesSearch =
      receipt.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      receipt.dispatchId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      receipt.driver.toLowerCase().includes(searchTerm.toLowerCase()) ||
      receipt.material.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

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

        <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-md border border-emerald-100 flex items-center gap-1.5">
          <FileCheck2 className="w-4 h-4 text-emerald-600" />
          Digital e-POD Verification Active
        </span>
      </div>

      {/* Page Title Banner */}
      <div className="bg-[#101726] text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Material Acceptance & Audit Trail
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1">
            Electronic Proof of Delivery (e-POD)
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Inspect digital delivery receipts, verify site slump test results,
            validate weight manifests, and resolve load discrepancies.
          </p>
        </div>

        <div className="bg-[#1E293B] border border-slate-700/60 rounded-xl p-4 text-right shrink-0">
          <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
            Verified Total
          </p>
          <p className="text-2xl font-extrabold text-emerald-400">
            {receipts.filter((r) => r.status === "Verified").length} /{" "}
            {receipts.length} Direct
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          {["All", "Verified", "Disputed"].map((status) => (
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
            placeholder="Search e-POD ID, material, driver..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#F8FAFC] border border-slate-200 pl-10 pr-4 py-2 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Receipts List */}
      <div className="space-y-4">
        {filteredReceipts.map((receipt) => (
          <div
            key={receipt.id}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-blue-200 transition-all space-y-4"
          >
            {/* Header Info */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-md">
                  {receipt.id}
                </span>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  Trip: #{receipt.dispatchId}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {receipt.timestamp}
                </span>
              </div>

              {/* Status Badge */}
              <div>
                {receipt.status === "Verified" ? (
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified & Approved
                  </span>
                ) : (
                  <span className="bg-rose-100 text-rose-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> Load Disputed
                  </span>
                )}
              </div>
            </div>

            {/* Receipt Main Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-[#F8FAFC] p-4 rounded-xl border border-slate-100">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Material Grade
                </p>
                <p className="text-xs font-bold text-slate-800 mt-0.5">
                  {receipt.material}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Delivered Volume
                </p>
                <p className="text-xs font-bold text-slate-800 mt-0.5">
                  {receipt.quantityDelivered}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Slump Test Result
                </p>
                <p
                  className={`text-xs font-bold mt-0.5 ${receipt.slumpTestResult.includes("Passed") ? "text-emerald-600" : "text-slate-700"}`}
                >
                  {receipt.slumpTestResult}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Driver & Truck
                </p>
                <p className="text-xs font-bold text-slate-800 mt-0.5">
                  {receipt.driver} ({receipt.vehicle})
                </p>
              </div>
            </div>

            {/* Delivery Notes */}
            <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span className="font-bold text-slate-700">Site Notes: </span>
              {receipt.deliveryNotes}
            </div>

            {/* Actions Bar */}
            <div className="flex items-center justify-between pt-1">
              <div className="text-xs text-slate-500">
                Supervisor Sign-off:{" "}
                <span className="font-semibold text-slate-800">
                  {receipt.supervisorSignature}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedReceipt(receipt)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-3 py-2 rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  View Slip
                </button>

                <button className="bg-[#101726] hover:bg-slate-800 text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition-colors flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5" />
                  PDF Audit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for viewing details */}
      {selectedReceipt && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-5 border border-slate-200 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                Digital e-POD Slip #{selectedReceipt.id}
              </h3>
              <button
                onClick={() => setSelectedReceipt(null)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Dispatch Reference</span>
                <span className="font-bold">{selectedReceipt.dispatchId}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Material Specification</span>
                <span className="font-bold">{selectedReceipt.material}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Net Quantity Received</span>
                <span className="font-bold text-emerald-600">
                  {selectedReceipt.quantityDelivered}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Slump Test Reading</span>
                <span className="font-bold">
                  {selectedReceipt.slumpTestResult}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Assigned Driver</span>
                <span className="font-bold">{selectedReceipt.driver}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedReceipt(null)}
                className="bg-[#1D63FF] text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors"
              >
                Close Slip
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
