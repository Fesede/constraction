"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Wrench,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowLeft,
  Truck,
  History,
  Send,
} from "lucide-react";

export default function DriverMaintenance() {
  const [component, setComponent] = useState("Brakes");
  const [severity, setSeverity] = useState("Medium");
  const [description, setDescription] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mock maintenance history records
  const [maintenanceHistory, setMaintenanceHistory] = useState([
    {
      id: "FLT-102",
      component: "Cement Mixer Hydraulics",
      severity: "High",
      date: "2026-07-28",
      status: "Resolved",
    },
    {
      id: "FLT-089",
      component: "Tire Pressure (Rear Right)",
      severity: "Low",
      date: "2026-07-15",
      status: "Resolved",
    },
  ]);

  const handleSubmitFault = (e) => {
    e.preventDefault();
    if (!description) return;

    const newTicket = {
      id: `FLT-${Math.floor(100 + Math.random() * 900)}`,
      component,
      severity,
      date: new Date().toISOString().split("T")[0],
      status: "Pending Inspection",
    };

    setMaintenanceHistory([newTicket, ...maintenanceHistory]);
    setIsSubmitted(true);
    setDescription("");

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

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
              Vehicle Maintenance & Fault Reporting
            </h2>
            <p className="text-xs text-slate-500">
              Log mechanical issues and view vehicle health status
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full text-xs font-semibold">
          <Truck size={14} className="text-blue-600" />
          <span>Vehicle: AA-3-9821</span>
        </div>
      </div>

      {/* Grid Layout: Form & History */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Fault Submission Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6 shadow-sm space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                <AlertTriangle size={18} className="text-amber-500" /> Report
                Mechanical Fault
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Submit issues to the C-TMS fleet engineering team
              </p>
            </div>

            {isSubmitted && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-xs font-bold flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 size={18} className="text-emerald-600" />
                <span>
                  Fault ticket submitted successfully to fleet maintenance
                  staff.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmitFault} className="space-y-4">
              {/* Component Category */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Affected Truck Subsystem
                </label>
                <select
                  value={component}
                  onChange={(e) => setComponent(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Brakes">Brake System</option>
                  <option value="Tires">Tires & Suspension</option>
                  <option value="Engine">Engine & Transmission</option>
                  <option value="Hydraulics">Cement Mixer / Hydraulics</option>
                  <option value="Electrical">Lighting & Electrical</option>
                  <option value="Body">Cabin / Body Damage</option>
                </select>
              </div>

              {/* Severity Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Issue Severity Level
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {["Low", "Medium", "High", "Critical"].map((level) => {
                    const isSelected = severity === level;
                    return (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setSeverity(level)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                          isSelected
                            ? level === "Critical"
                              ? "bg-red-600 text-white border-red-600"
                              : level === "High"
                                ? "bg-amber-600 text-white border-amber-600"
                                : "bg-blue-600 text-white border-blue-600"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {level}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Detailed Description */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Fault Description / Observations
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe abnormal sounds, warnings, or mechanical failures..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!description}
                className={`w-full flex items-center justify-center gap-2 font-bold py-3 px-4 rounded-xl text-xs transition-colors shadow-sm ${
                  description
                    ? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                <Send size={15} />
                <span>Submit Maintenance Report</span>
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Past Maintenance History Log */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2">
              <History size={16} className="text-slate-500" /> Maintenance
              History Log
            </h3>

            <div className="space-y-3">
              {maintenanceHistory.map((item) => (
                <div
                  key={item.id}
                  className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                      {item.id}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.status === "Resolved"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="text-xs font-bold text-slate-800">
                    {item.component}
                  </p>

                  <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                    <span>
                      Severity:{" "}
                      <strong className="text-slate-700">
                        {item.severity}
                      </strong>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} /> {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
