"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Calendar,
  DollarSign,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  ShieldCheck,
  Clock,
  UserCheck,
  FileCheck2,
  Phone,
  Mail,
  HardHat,
} from "lucide-react";

// Mock project details for the site manager context
const mockProject = {
  id: "PRJ-2026-089",
  title: "Bole Commercial Complex Earthwork & Haulage",
  clientName: "Apex Construction PLC",
  location: "Addis Ababa, Bole Sub-City",
  duration: "45 Days",
  budgetRange: "$12,000 - $15,000",
  deadline: "Aug 20, 2026",
  description:
    "Excavation, gravel haulage, and site clearance for a 12-story commercial building. We require a dedicated Site Manager to oversee receiving logs, coordinate heavy machinery on-site, enforce safety protocols, and maintain daily excavation shift reports.",
};

// Inline Footer component for Site Managers
function SiteManagerFooter() {
  return (
    <footer className="bg-[#070e20] border-t border-slate-800 mt-auto py-8 px-6 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <HardHat className="w-4 h-4 text-amber-400" />
          <span className="font-bold text-slate-200">
            C-TMS Site Management Ops
          </span>
          <span className="text-slate-600">|</span>
          <span>Field Terminal v2.4</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 hover:text-slate-200 cursor-pointer">
            <Phone className="w-3.5 h-3.5 text-amber-400" /> Site Operations
            Line
          </span>
          <span className="flex items-center gap-1.5 hover:text-slate-200 cursor-pointer">
            <Mail className="w-3.5 h-3.5 text-amber-400" /> Compliance Desk
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
    rateType: "monthly",
    availableStartDate: "",
    proposalMessage: "",
    certifications: "",
    supervisedProjectsCount: "",
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
        applicantRole: "SiteManager",
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
        text: "Site Manager proposal submitted successfully! The project team will review your supervisory credentials.",
      });

      setFormData({
        proposedRate: "",
        rateType: "monthly",
        availableStartDate: "",
        proposalMessage: "",
        certifications: "",
        supervisedProjectsCount: "",
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
            href="/manager/dashboard"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Site Manager Terminal
          </Link>

          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#0b1329] border border-slate-700">
            <HardHat className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs text-slate-400">Applying as:</span>
            <span className="text-xs font-bold text-amber-400">
              Civil Site Manager
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
              <span>Supervisory Role Overview</span>
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
                  Verified Manager Profile Attached
                </p>
                <p className="text-slate-400 mt-0.5 text-[11px] leading-relaxed">
                  Your professional civil engineering profile, safety
                  accreditations, and verification badges will be attached
                  automatically.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: SITE MANAGER APPLICATION FORM */}
        <div className="lg:col-span-7 bg-[#070e20] p-6 lg:p-8 rounded-2xl border border-slate-800 space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-amber-400" />
              <h2 className="text-xl font-bold text-white tracking-tight">
                Submit Manager Proposal
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Provide your management rates, site supervision certifications,
              and past experience.
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
            {/* Compensation & Billing Structure */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Proposed Compensation / Fee{" "}
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
                    placeholder="e.g. 4500"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0b1329] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Compensation Type
                </label>
                <select
                  name="rateType"
                  value={formData.rateType}
                  onChange={handleChange}
                  className="w-full py-3 px-3 rounded-xl bg-[#0b1329] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                >
                  <option value="monthly">Monthly Salary / Fee</option>
                  <option value="daily">Daily Site Supervision Rate</option>
                  <option value="total">Total Project Contract</option>
                </select>
              </div>
            </div>

            {/* Certifications & Management Experience */}
            <div className="p-4 rounded-xl bg-[#0b1329] border border-slate-800 space-y-4">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <FileCheck2 className="w-4 h-4" /> Certifications &
                Qualifications <span className="text-amber-500">*</span>
              </label>

              <div>
                <input
                  type="text"
                  name="certifications"
                  required
                  value={formData.certifications}
                  onChange={handleChange}
                  placeholder="e.g. BSc Civil Engineering, OSHA 30-Hour Construction Safety"
                  className="w-full px-4 py-3 rounded-xl bg-[#070e20] border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 placeholder:text-slate-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Total Site Experience (Years){" "}
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
                    placeholder="e.g. 8"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070e20] border border-slate-700 text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/50 placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Completed Projects Supervised{" "}
                    <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="supervisedProjectsCount"
                    required
                    min="0"
                    value={formData.supervisedProjectsCount}
                    onChange={handleChange}
                    placeholder="e.g. 12"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070e20] border border-slate-700 text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/50 placeholder:text-slate-600"
                  />
                </div>
              </div>
            </div>

            {/* Availability */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Earliest Availability Date{" "}
                <span className="text-amber-500">*</span>
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
                Cover Note / Management Strategy{" "}
                <span className="text-amber-500">*</span>
              </label>
              <textarea
                name="proposalMessage"
                required
                rows={4}
                value={formData.proposalMessage}
                onChange={handleChange}
                placeholder="Highlight relevant commercial building supervision experience, earthwork management, receiving log workflows, or safety protocols..."
                className="w-full px-4 py-3 rounded-xl bg-[#0b1329] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all placeholder:text-slate-600"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3.5 px-6 rounded-xl text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
            >
              {loading ? (
                <span>Submitting Manager Proposal...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Manager Application</span>
                </>
              )}
            </button>
          </form>
        </div>
      </main>

      <SiteManagerFooter />
    </div>
  );
}
