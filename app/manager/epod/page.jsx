"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileCheck2,
  CheckCircle2,
  XCircle,
  Search,
  Filter,
  ArrowLeft,
  Building2,
  PackageCheck,
  UserCheck,
  FileText,
  AlertCircle,
} from "lucide-react";

export default function ManagerEPOD() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  // Mock list of e-POD receipts received from drivers
  const [receipts, setReceipts] = useState([
    {
      id: "EPOD-901",
      tripId: "TRIP-801",
      truckNo: "AA-3-9821",
      driverName: "Dereje Sebsibe",
      material: "Ready-Mix Concrete (C-30)",
      dispatchedQty: "25.5 Tons",
      offloadedQty: "25.5 Tons",
      siteName: "Lideta Hub Construction Site",
      signedBy: "Manager Dereje",
      timestamp: "2026-08-06 09:15 AM",
      status: "Pending Verification",
      signatureUrl:
        "https://placehold.co/300x100/e2e8f0/0f172a?text=Manager+Signature",
    },
    {
      id: "EPOD-884",
      tripId: "TRIP-788",
      truckNo: "AA-3-4112",
      driverName: "Bekele Tadesse",
      material: "Aggregate Grade 2",
      dispatchedQty: "30.0 Tons",
      offloadedQty: "29.8 Tons",
      siteName: "Lideta Hub Construction Site",
      signedBy: "Engineer Samuel",
      timestamp: "2026-08-05 04:30 PM",
      status: "Verified & Approved",
      signatureUrl:
        "https://placehold.co/300x100/e2e8f0/0f172a?text=Approved+Signature",
    },
  ]);

  const handleApprove = (id) => {
    setReceipts(
      receipts.map((item) =>
        item.id === id ? { ...item, status: "Verified & Approved" } : item,
      ),
    );
    setSelectedReceipt(null);
  };

  const filteredReceipts = receipts.filter((receipt) => {
    const matchesSearch =
      receipt.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      receipt.tripId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      receipt.truckNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      receipt.driverName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      filterStatus === "All" || receipt.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Top Header */}
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
              Material e-POD Sign-Off & Verification
            </h2>
            <p className="text-xs text-slate-500">
              Authorize offloaded materials and approve digital signatures
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold self-start sm:self-auto">
          <FileCheck2 size={14} />
          <span>Lideta Hub Station</span>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col md:flex-row gap-3 justify-between items-center">
        <div className="relative w-full md:w-80">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search e-POD #, Trip ID, or driver..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-4 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <Filter size={14} className="text-slate-400 mr-1 hidden sm:block" />
          {["All", "Pending Verification", "Verified & Approved"].map(
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

      {/* Receipts Table / List */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <FileText size={16} className="text-blue-600" /> Submitted Proof of
            Deliveries
          </h3>
          <span className="text-xs text-slate-500 font-semibold">
            {filteredReceipts.length} total records
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {filteredReceipts.length === 0 ? (
            <div className="p-8 text-center space-y-2">
              <FileCheck2 size={32} className="mx-auto text-slate-300" />
              <p className="text-sm font-bold text-slate-700">
                No e-POD records found
              </p>
              <p className="text-xs text-slate-400">
                Try adjusting your search criteria.
              </p>
            </div>
          ) : (
            filteredReceipts.map((item) => (
              <div
                key={item.id}
                className="p-4 md:p-5 hover:bg-slate-50/80 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-blue-600 font-mono bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                      {item.id}
                    </span>
                    <span className="text-xs font-bold text-slate-700 font-mono">
                      {item.tripId} ({item.truckNo})
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        item.status === "Verified & Approved"
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                          : "bg-amber-100 text-amber-800 border border-amber-200"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="text-xs font-bold text-slate-800">
                    {item.material} •{" "}
                    <span className="text-blue-600">
                      {item.offloadedQty} Offloaded
                    </span>
                  </p>

                  <div className="flex items-center gap-4 text-[11px] text-slate-500 flex-wrap">
                    <span>
                      Driver:{" "}
                      <strong className="text-slate-700">
                        {item.driverName}
                      </strong>
                    </span>
                    <span>
                      Received By:{" "}
                      <strong className="text-slate-700">
                        {item.signedBy}
                      </strong>
                    </span>
                    <span>{item.timestamp}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end md:self-center">
                  {item.status === "Pending Verification" ? (
                    <button
                      onClick={() => setSelectedReceipt(item)}
                      className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors shadow-sm"
                    >
                      <UserCheck size={15} />
                      <span>Review & Approve</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                      <CheckCircle2 size={15} />
                      <span>Sign-off Complete</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Verification Modal */}
      {selectedReceipt && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 animate-scaleUp">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                <FileCheck2 size={18} className="text-blue-600" /> Verify e-POD
                Handover
              </h3>
              <button
                onClick={() => setSelectedReceipt(null)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl space-y-3 border border-slate-100">
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">
                    Receipt ID
                  </p>
                  <p className="font-bold text-slate-800">
                    {selectedReceipt.id}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">
                    Vehicle ID
                  </p>
                  <p className="font-bold text-slate-800">
                    {selectedReceipt.truckNo}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">
                    Dispatched Qty
                  </p>
                  <p className="font-bold text-slate-800">
                    {selectedReceipt.dispatchedQty}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">
                    Offloaded Qty
                  </p>
                  <p className="font-bold text-blue-600">
                    {selectedReceipt.offloadedQty}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">
                  Captured Site Manager Signature
                </p>
                <div className="border border-slate-200 rounded-lg p-2 bg-white flex items-center justify-center">
                  <img
                    src={selectedReceipt.signatureUrl}
                    alt="Digital Signature"
                    className="h-16 object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedReceipt(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleApprove(selectedReceipt.id)}
                className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors shadow-sm"
              >
                <CheckCircle2 size={16} />
                <span>Grant Final Sign-Off Clearance</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
