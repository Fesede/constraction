"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  FlaskConical,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Search,
  Filter,
  Plus,
  Calendar,
  Thermometer,
  Droplets,
  FileSpreadsheet,
  Building2,
} from "lucide-react";

// Sample mock quality test logs
const mockQualityLogs = [
  {
    id: "QUAL-1088",
    epodId: "EPOD-9041",
    dispatchId: "TRIP-803",
    batchPlant: "Gotera Plant #3",
    material: "Ready-Mix Concrete (C-25)",
    slumpMM: 110,
    slumpTarget: "100 - 120 mm",
    wcRatio: 0.45,
    tempCelsius: 24,
    status: "Passed",
    testedBy: "Kassahun Worku (Site Supervisor)",
    timestamp: "10:50 AM, Today",
    notes:
      "Slump within optimal range. Temperature within normal placing threshold.",
  },
  {
    id: "QUAL-1087",
    epodId: "EPOD-9042",
    dispatchId: "TRIP-800",
    batchPlant: "Gotera Plant #3",
    material: "Ready-Mix Concrete (C-30)",
    slumpMM: 125,
    slumpTarget: "100 - 130 mm",
    wcRatio: 0.42,
    tempCelsius: 26,
    status: "Passed",
    testedBy: "Kassahun Worku (Site Supervisor)",
    timestamp: "09:20 AM, Today",
    notes:
      "Core sample cylinders taken for 7-day and 28-day compression testing.",
  },
  {
    id: "QUAL-1086",
    epodId: "EPOD-9039",
    dispatchId: "TRIP-795",
    batchPlant: "Central Batching #1",
    material: "Ready-Mix Concrete (C-30)",
    slumpMM: 155,
    slumpTarget: "100 - 130 mm",
    wcRatio: 0.54,
    tempCelsius: 29,
    status: "Rejected",
    testedBy: "Amanuel Girma (QA Inspector)",
    timestamp: "Yesterday, 02:15 PM",
    notes:
      "High slump due to excess water addition during transit. Batch rejected for structural pour.",
  },
  {
    id: "QUAL-1085",
    epodId: "EPOD-9035",
    dispatchId: "TRIP-788",
    batchPlant: "Akaki Batching Station",
    material: "Ready-Mix Concrete (C-25)",
    slumpMM: 95,
    slumpTarget: "100 - 120 mm",
    wcRatio: 0.48,
    tempCelsius: 22,
    status: "Warning",
    testedBy: "Kassahun Worku (Site Supervisor)",
    timestamp: "Yesterday, 11:00 AM",
    notes:
      "Slightly low workability. Permitted with placement vibration adjustments.",
  },
];

export default function QualityLogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [logs, setLogs] = useState(mockQualityLogs);
  const [showNewModal, setShowNewModal] = useState(false);

  // New Test Log Form State
  const [newLog, setNewLog] = useState({
    epodId: "",
    material: "Ready-Mix Concrete (C-30)",
    slumpMM: "",
    wcRatio: "0.45",
    tempCelsius: "24",
    status: "Passed",
    notes: "",
  });

  const filteredLogs = logs.filter((log) => {
    const matchesStatus = statusFilter === "All" || log.status === statusFilter;
    const matchesSearch =
      log.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.epodId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.testedBy.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleAddLog = (e) => {
    e.preventDefault();
    const createdEntry = {
      id: `QUAL-${Math.floor(1000 + Math.random() * 9000)}`,
      epodId: newLog.epodId || "EPOD-NEW",
      dispatchId: "TRIP-MANUAL",
      batchPlant: "Gotera Plant #3",
      material: newLog.material,
      slumpMM: Number(newLog.slumpMM),
      slumpTarget: "100 - 130 mm",
      wcRatio: Number(newLog.wcRatio),
      tempCelsius: Number(newLog.tempCelsius),
      status: newLog.status,
      testedBy: "Site Quality Supervisor",
      timestamp: "Just now",
      notes: newLog.notes || "Manual site inspection logged.",
    };

    setLogs([createdEntry, ...logs]);
    setShowNewModal(false);
    setNewLog({
      epodId: "",
      material: "Ready-Mix Concrete (C-30)",
      slumpMM: "",
      wcRatio: "0.45",
      tempCelsius: "24",
      status: "Passed",
      notes: "",
    });
  };

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

        <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-md border border-blue-100 flex items-center gap-1.5">
          <FlaskConical className="w-4 h-4 text-blue-600" />
          Material Compliance Protocol Active
        </span>
      </div>

      {/* Page Title Banner */}
      <div className="bg-[#101726] text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5" />
            Project: Lideta Hub Foundation Concrete Pouring (#PRJ-101)
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1">
            Site Quality & Slump Test Log
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Maintain site structural integrity by auditing fresh concrete
            workability, temperature, water-cement ratios, and slump test
            results.
          </p>
        </div>

        <button
          onClick={() => setShowNewModal(true)}
          className="bg-[#1D63FF] hover:bg-blue-600 text-white text-xs font-semibold px-4 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-md self-start md:self-auto shrink-0"
        >
          <Plus className="w-4 h-4" />
          Log Quality Test
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          {["All", "Passed", "Warning", "Rejected"].map((status) => (
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
            placeholder="Search log ID, e-POD, inspector..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#F8FAFC] border border-slate-200 pl-10 pr-4 py-2 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Quality Logs List */}
      <div className="space-y-4">
        {filteredLogs.map((log) => (
          <div
            key={log.id}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-blue-200 transition-all space-y-4"
          >
            {/* Header Line */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <span className="bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1 rounded-md">
                  {log.id}
                </span>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  Ref: {log.epodId}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {log.timestamp}
                </span>
              </div>

              {/* Status Badge */}
              <div>
                {log.status === "Passed" && (
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Passed Compliance
                  </span>
                )}
                {log.status === "Warning" && (
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> Tolerable Margin
                  </span>
                )}
                {log.status === "Rejected" && (
                  <span className="bg-rose-100 text-rose-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5" /> Load Rejected
                  </span>
                )}
              </div>
            </div>

            {/* Test Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-[#F8FAFC] p-4 rounded-xl border border-slate-100">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Slump Reading
                </p>
                <p
                  className={`text-base font-extrabold mt-0.5 ${log.status === "Rejected" ? "text-rose-600" : "text-slate-900"}`}
                >
                  {log.slumpMM} mm{" "}
                  <span className="text-[10px] font-normal text-slate-400">
                    ({log.slumpTarget})
                  </span>
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Droplets className="w-3 h-3 text-blue-500" />
                  Water / Cement Ratio
                </p>
                <p className="text-base font-extrabold text-slate-900 mt-0.5">
                  {log.wcRatio}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Thermometer className="w-3 h-3 text-amber-500" />
                  Concrete Temp
                </p>
                <p className="text-base font-extrabold text-slate-900 mt-0.5">
                  {log.tempCelsius} °C
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Batch Source
                </p>
                <p className="text-xs font-bold text-slate-800 mt-1">
                  {log.batchPlant}
                </p>
              </div>
            </div>

            {/* Notes & Inspector */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-xs">
              <p className="text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex-1">
                <span className="font-bold text-slate-700">
                  Inspector Observations:{" "}
                </span>
                {log.notes}
              </p>
              <p className="text-slate-400 text-right shrink-0">
                Audited by:{" "}
                <span className="font-semibold text-slate-700">
                  {log.testedBy}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Creating New Quality Log */}
      {showNewModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-5 border border-slate-200 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                Record Quality Test Entry
              </h3>
              <button
                onClick={() => setShowNewModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddLog} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Associated e-POD Reference *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., EPOD-9041"
                  value={newLog.epodId}
                  onChange={(e) =>
                    setNewLog({ ...newLog, epodId: e.target.value })
                  }
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Slump Test (mm) *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="e.g., 115"
                    value={newLog.slumpMM}
                    onChange={(e) =>
                      setNewLog({ ...newLog, slumpMM: e.target.value })
                    }
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Temperature (°C)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 25"
                    value={newLog.tempCelsius}
                    onChange={(e) =>
                      setNewLog({ ...newLog, tempCelsius: e.target.value })
                    }
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Water-Cement Ratio
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 0.45"
                    value={newLog.wcRatio}
                    onChange={(e) =>
                      setNewLog({ ...newLog, wcRatio: e.target.value })
                    }
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Compliance Status
                  </label>
                  <select
                    value={newLog.status}
                    onChange={(e) =>
                      setNewLog({ ...newLog, status: e.target.value })
                    }
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Passed">Passed</option>
                    <option value="Warning">Warning</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Inspector Notes & Remarks
                </label>
                <textarea
                  rows={3}
                  placeholder="Record slump cone notes, slump behavior, or core sample batch IDs..."
                  value={newLog.notes}
                  onChange={(e) =>
                    setNewLog({ ...newLog, notes: e.target.value })
                  }
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowNewModal(false)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#1D63FF] hover:bg-blue-600 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors"
                >
                  Save Quality Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
