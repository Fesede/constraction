"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ClipboardList,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Plus,
  Search,
  ArrowLeft,
  Thermometer,
  Ruler,
  Building2,
} from "lucide-react";

export default function ManagerQCLogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Form State
  const [truckNo, setTruckNo] = useState("AA-3-9821");
  const [material, setMaterial] = useState("Ready-Mix Concrete (C-30)");
  const [slumpValue, setSlumpValue] = useState("110");
  const [temperature, setTemperature] = useState("24");
  const [cubeBatchId, setCubeBatchId] = useState("CB-2026-088");
  const [status, setStatus] = useState("Passed");
  const [remarks, setRemarks] = useState(
    "Optimal workability and slump retention.",
  );

  // Mock QC Records
  const [qcLogs, setQcLogs] = useState([
    {
      id: "QC-104",
      truckNo: "AA-3-9821",
      material: "Ready-Mix Concrete (C-30)",
      slumpValue: "110 mm",
      temperature: "24 °C",
      cubeBatchId: "CB-2026-088",
      status: "Passed",
      tester: "Engineer Samuel",
      timestamp: "2026-08-06 09:30 AM",
      remarks: "Optimal workability and slump retention.",
    },
    {
      id: "QC-103",
      truckNo: "AA-3-4112",
      material: "Ready-Mix Concrete (C-30)",
      slumpValue: "165 mm",
      temperature: "31 °C",
      cubeBatchId: "CB-2026-087",
      status: "Rejected",
      tester: "Engineer Samuel",
      timestamp: "2026-08-05 03:15 PM",
      remarks:
        "Excessive slump and high temperature exceeding mix specification limits.",
    },
  ]);

  const handleCreateQCLog = (e) => {
    e.preventDefault();
    const newLog = {
      id: `QC-${Math.floor(100 + Math.random() * 900)}`,
      truckNo,
      material,
      slumpValue: `${slumpValue} mm`,
      temperature: `${temperature} °C`,
      cubeBatchId,
      status,
      tester: "Site Engineer",
      timestamp: new Date().toISOString().replace("T", " ").substring(0, 16),
      remarks,
    };

    setQcLogs([newLog, ...qcLogs]);
    setShowModal(false);
  };

  const filteredLogs = qcLogs.filter(
    (log) =>
      log.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.truckNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.cubeBatchId.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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
              Quality Control & Slump Testing Logs
            </h2>
            <p className="text-xs text-slate-500">
              Log slump tests, temperature checks, and concrete batch samples
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm self-start sm:self-auto"
        >
          <Plus size={16} />
          <span>Record New Slump Test</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search QC #, truck #, or cube ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-4 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Building2 size={15} className="text-blue-600" />
          <span>Site Spec Range: 100 mm - 140 mm</span>
        </div>
      </div>

      {/* QC Logs Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <ClipboardList size={16} className="text-blue-600" /> Tested
            Concrete Batches
          </h3>
          <span className="text-xs text-slate-500 font-semibold">
            {filteredLogs.length} Records
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {filteredLogs.map((log) => (
            <div
              key={log.id}
              className="p-4 md:p-5 hover:bg-slate-50/80 transition-colors space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-blue-600 font-mono bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                    {log.id}
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    Vehicle: {log.truckNo}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    Cube Batch: {log.cubeBatchId}
                  </span>
                </div>

                <span
                  className={`text-[11px] font-bold px-3 py-1 rounded-full self-start sm:self-auto ${
                    log.status === "Passed"
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}
                >
                  {log.status === "Passed"
                    ? "✓ Spec Approved"
                    : "✕ Batch Rejected"}
                </span>
              </div>

              {/* Metrics Breakdown */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1">
                    <Ruler size={12} /> Measured Slump
                  </p>
                  <p className="font-bold text-slate-800 mt-0.5">
                    {log.slumpValue}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1">
                    <Thermometer size={12} /> Temperature
                  </p>
                  <p className="font-bold text-slate-800 mt-0.5">
                    {log.temperature}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">
                    Inspector
                  </p>
                  <p className="font-semibold text-slate-700 mt-0.5">
                    {log.tester}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">
                    Timestamp
                  </p>
                  <p className="font-semibold text-slate-700 mt-0.5">
                    {log.timestamp}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 italic">
                <strong>Remarks:</strong> {log.remarks}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* New QC Log Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                <ClipboardList size={18} className="text-blue-600" /> Log
                Quality Inspection
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateQCLog} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">
                    Truck #
                  </label>
                  <input
                    type="text"
                    value={truckNo}
                    onChange={(e) => setTruckNo(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-bold text-slate-800"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">
                    Cube Batch ID
                  </label>
                  <input
                    type="text"
                    value={cubeBatchId}
                    onChange={(e) => setCubeBatchId(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-bold text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">
                    Slump Value (mm)
                  </label>
                  <input
                    type="number"
                    value={slumpValue}
                    onChange={(e) => setSlumpValue(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-bold text-slate-800"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">
                    Temp (°C)
                  </label>
                  <input
                    type="number"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-bold text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">
                  Inspection Status
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setStatus("Passed")}
                    className={`py-2 rounded-xl font-bold border ${
                      status === "Passed"
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-slate-50 text-slate-700"
                    }`}
                  >
                    Passed (Approve Pour)
                  </button>
                  <button
                    type="button"
                    onClick={() => setStatus("Rejected")}
                    className={`py-2 rounded-xl font-bold border ${
                      status === "Rejected"
                        ? "bg-red-600 text-white border-red-600"
                        : "bg-slate-50 text-slate-700"
                    }`}
                  >
                    Rejected (Reject Batch)
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">
                  Remarks
                </label>
                <textarea
                  rows={3}
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-slate-800"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-xl font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-xl shadow-sm"
                >
                  Save QC Test Log
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
