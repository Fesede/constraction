"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Calendar,
  DollarSign,
  Truck,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  ShieldCheck,
  Clock,
  UserCheck,
  FileText,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";

// Mock project details tailored for the driver context
const mockProject = {
  id: "PRJ-2026-089",
  title: "Bole Commercial Complex Earthwork & Haulage",
  clientName: "Apex Construction PLC",
  location: "Addis Ababa, Bole Sub-City",
  duration: "45 Days",
  budgetRange: "$12,000 - $15,000",
  deadline: "Aug 20, 2026",
  description:
    "Excavation, gravel haulage, and site clearance for a 12-story commercial building. We require reliable heavy dump truck drivers for 40+ daily material transport trips between site and dumping location.",
};

// Driver-focused Inline Footer component to resolve missing import dependencies
function DriverFooter() {
  return (
    <footer className="bg-[#070e20] border-t border-slate-800 mt-auto py-8 px-6 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-amber-400" />
          <span className="font-bold text-slate-200">C-TMS Driver Network</span>
          <span className="text-slate-600">|</span>
          <span>Logistics Terminal v2.4</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 hover:text-slate-200 cursor-pointer">
            <Phone className="w-3.5 h-3.5 text-amber-400" /> Dispatch Support
          </span>
          <span className="flex items-center gap-1.5 hover:text-slate-200 cursor-pointer">
            <Mail className="w-3.5 h-3.5 text-amber-400" /> Safety Operations
          </span>
        </div>

        <p className="text-slate-500 text-[11px]">
          &copy; {new Date().getFullYear()} C-TMS Logistics. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default function ApplyProjectPage() {
  const [formData, setFormData] = useState({
    proposedRate: "",
    rateType: "per_trip",
    availableStartDate: "",
    proposalMessage: "",
    vehicleDetails: "",
    licenseCategory: "",
    experienceYears: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    try {
      const payload = {
        projectId: mockProject.id,
        applicantRole: "Driver",
        ...formData,
      };

      const res = await fetch("/api/projects/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Application submission failed.");
      }

      setStatusMessage({
        type: "success",
        text: "Driver application submitted successfully! The client will review your vehicle details and profile.",
      });

      setFormData({
        proposedRate: "",
        rateType: "per_trip",
        availableStartDate: "",
        proposalMessage: "",
        vehicleDetails: "",
        licenseCategory: "",
        experienceYears: "",
      });
    } catch (err) {
      setStatusMessage({
        type: "error",
        text:
          err.message || "An error occurred while submitting your application.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#030712] text-slate-100 font-sans">
      {/* Top Header Bar */}
      <header className="bg-[#070e20] border-b border-slate-800 px-6 py-4 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/driver/dashboard"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Driver Terminal
          </Link>

          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#0b1329] border border-slate-700">
            <Truck className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs text-slate-400">Applying as:</span>
            <span className="text-xs font-bold text-amber-400">
              Heavy Truck Driver
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT PANEL: PROJECT SUMMARY */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-[#070e20] border border-slate-800 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Driver Job Details</span>
            </div>

            <div>
              <span className="text-[10px] font-mono text-slate-500">
                {mockProject.id}
              </span>
              <h1 className="text-xl font-bold text-white mt-1 leading-snug">
                {mockProject.title}
              </h1>
              <p className="text-xs text-amber-400 font-medium mt-1">
                Posted by {mockProject.clientName}
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed border-t border-b border-slate-800/80 py-4">
              {mockProject.description}
            </p>

            {/* Key Project Specs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">
                    Location
                  </p>
                  <p className="text-xs font-semibold text-slate-200">
                    {mockProject.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">
                    Duration
                  </p>
                  <p className="text-xs font-semibold text-slate-200">
                    {mockProject.duration}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <DollarSign className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">
                    Est. Budget
                  </p>
                  <p className="text-xs font-semibold text-slate-200">
                    {mockProject.budgetRange}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">
                    Apply Deadline
                  </p>
                  <p className="text-xs font-semibold text-slate-200">
                    {mockProject.deadline}
                  </p>
                </div>
              </div>
            </div>

            {/* Verification Notice */}
            <div className="p-4 rounded-xl bg-[#0b1329] border border-slate-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <p className="font-bold text-slate-200">
                  Verified Driver Credentials
                </p>
                <p className="text-slate-400 mt-0.5 text-[11px] leading-relaxed">
                  Your registered driver license, vehicle documents, and
                  verification profile will automatically be attached to this
                  application.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: DRIVER APPLICATION FORM */}
        <div className="lg:col-span-7 bg-[#070e20] p-6 lg:p-8 rounded-2xl border border-slate-800 space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-amber-400" />
              <h2 className="text-xl font-bold text-white tracking-tight">
                Submit Driver Proposal
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Provide your truck specifications, availability, and rates for
              this transport contract.
            </p>
          </div>

          {/* Alert Box */}
          {statusMessage.text && (
            <div
              className={`p-4 rounded-xl flex items-center gap-3 text-xs font-medium ${
                statusMessage.type === "success"
                  ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                  : "bg-rose-500/10 border border-rose-500/30 text-rose-400"
              }`}
            >
              {statusMessage.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 shrink-0" />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Bid Amount & Rate Structure */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Proposed Rate / Bid Amount{" "}
                  <span className="text-amber-500">*</span>
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
                  <input
                    type="number"
                    name="proposedRate"
                    required
                    min="1"
                    value={formData.proposedRate}
                    onChange={handleChange}
                    placeholder="e.g. 1200"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0b1329] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Billing Unit
                </label>
                <select
                  name="rateType"
                  value={formData.rateType}
                  onChange={handleChange}
                  className="w-full py-3 px-3 rounded-xl bg-[#0b1329] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                >
                  <option value="per_trip">Per Trip Rate</option>
                  <option value="daily">Per Day Rate</option>
                  <option value="total">Total Fixed Bid</option>
                </select>
              </div>
            </div>

            {/* Vehicle & License Info */}
            <div className="p-4 rounded-xl bg-[#0b1329] border border-slate-800 space-y-4">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Truck className="w-4 h-4" /> Vehicle & Equipment Specs{" "}
                <span className="text-amber-500">*</span>
              </label>

              <div>
                <input
                  type="text"
                  name="vehicleDetails"
                  required
                  value={formData.vehicleDetails}
                  onChange={handleChange}
                  placeholder="e.g. Sino Truck 15m³ Dump Truck, Plate: AA-3-9876"
                  className="w-full px-4 py-3 rounded-xl bg-[#070e20] border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 placeholder:text-slate-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Driving License Level{" "}
                    <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="licenseCategory"
                    required
                    value={formData.licenseCategory}
                    onChange={handleChange}
                    placeholder="e.g. Grade 5 / Heavy Duty"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070e20] border border-slate-700 text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/50 placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Driving Experience (Years){" "}
                    <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="experienceYears"
                    required
                    min="0"
                    max="50"
                    value={formData.experienceYears}
                    onChange={handleChange}
                    placeholder="e.g. 6"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070e20] border border-slate-700 text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/50 placeholder:text-slate-600"
                  />
                </div>
              </div>
            </div>

            {/* Availability */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Earliest Start Date <span className="text-amber-500">*</span>
              </label>
              <input
                type="date"
                name="availableStartDate"
                required
                value={formData.availableStartDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#0b1329] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
              />
            </div>

            {/* Cover Note */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Cover Note / Additional Details{" "}
                <span className="text-amber-500">*</span>
              </label>
              <textarea
                name="proposalMessage"
                required
                rows={4}
                value={formData.proposalMessage}
                onChange={handleChange}
                placeholder="Mention past haulage experience, site familiarity, or availability for shift work..."
                className="w-full px-4 py-3 rounded-xl bg-[#0b1329] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all placeholder:text-slate-600"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3.5 px-6 rounded-xl text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
            >
              {loading ? (
                <span>Submitting Driver Proposal...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Driver Application</span>
                </>
              )}
            </button>
          </form>
        </div>
      </main>

      <DriverFooter />
    </div>
  );
}
