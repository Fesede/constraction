"use client";

import React, { useState } from "react";
import Link from "next/link";
import ApplicantCard from "../components/ApplicantCard";
import {
  ArrowLeft,
  Users,
  Filter,
  Search,
  CheckCircle2,
  ShieldCheck,
  Building2,
} from "lucide-react";

// Sample dummy applicant feed for testing
const mockApplicants = [
  {
    id: "APP-01",
    name: "Abebe Kebede",
    role: "Fleet Manager",
    rating: 4.9,
    completedProjects: 28,
    experience: "8 Yrs Exp",
    rate: "18,500 ETB / Day",
    status: "Pending",
    skills: ["Mixer Truck Fleet", "GPS Telemetry", "Heavy Transport Logistics"],
  },
  {
    id: "APP-02",
    name: "Mulugeta Tadesse",
    role: "Driver",
    rating: 4.8,
    completedProjects: 45,
    experience: "6 Yrs Exp",
    rate: "2,200 ETB / Trip",
    status: "Pending",
    skills: [
      "Ready-Mix Concrete",
      "Off-road Driving",
      "e-POD Digital Sign-off",
    ],
  },
  {
    id: "APP-03",
    name: "Kassahun Worku",
    role: "Site Manager",
    rating: 4.95,
    completedProjects: 19,
    experience: "10 Yrs Exp",
    rate: "25,000 ETB / Month",
    status: "Pending",
    skills: [
      "Slump Test Verification",
      "Site Safety Protocol",
      "Dispatch Routing",
    ],
  },
  {
    id: "APP-04",
    name: "Tewodros Alemu",
    role: "Fleet Manager",
    rating: 4.7,
    completedProjects: 14,
    experience: "5 Yrs Exp",
    rate: "16,000 ETB / Day",
    status: "Pending",
    skills: ["Cement Mixer Fleet", "Route Optimization"],
  },
  {
    id: "APP-05",
    name: "Yared Berhanu",
    role: "Driver",
    rating: 4.85,
    completedProjects: 32,
    experience: "4 Yrs Exp",
    rate: "2,000 ETB / Trip",
    status: "Pending",
    skills: ["Bulk Concrete", "Heavy Haulage"],
  },
];

export default function ApplicantsBiddingPage() {
  const [selectedRole, setSelectedRole] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [applicants, setApplicants] = useState(mockApplicants);
  const [approvedCandidate, setApprovedCandidate] = useState(null);

  // Filter logic
  const filteredApplicants = applicants.filter((app) => {
    const matchesRole = selectedRole === "All" || app.role === selectedRole;
    const matchesSearch =
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesRole && matchesSearch;
  });

  // Handle applicant selection
  const handleSelectApplicant = (applicant) => {
    setApprovedCandidate(applicant);
    setApplicants((prev) =>
      prev.map((a) =>
        a.id === applicant.id ? { ...a, status: "Selected" } : a,
      ),
    );
  };

  return (
    <div className="space-y-6">
      {/* Top Navigation & Status */}
      <div className="flex items-center justify-between">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects Overview</span>
        </Link>

        <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-md border border-emerald-100 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          Active Application Phase
        </span>
      </div>

      {/* Page Banner Header */}
      <div className="bg-[#101726] text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
            <Building2 className="w-4 h-4" />
            <span>
              Project: Lideta Hub Foundation Concrete Pouring (#PRJ-101)
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Applicant Bidding Feed
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Review profiles, verified C-TMS credentials, and bidding rates from
            registered Site Managers, Fleet Managers, and Drivers.
          </p>
        </div>

        <div className="bg-[#1E293B] border border-slate-700/60 rounded-xl p-4 text-right shrink-0">
          <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
            Total Applicants
          </p>
          <p className="text-2xl font-extrabold text-blue-400">
            {applicants.length} Candidates
          </p>
        </div>
      </div>

      {/* Selected Candidate Notification Bar */}
      {approvedCandidate && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center justify-between text-emerald-900 animate-fadeIn">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            <div>
              <p className="text-sm font-bold">
                Applicant Successfully Selected!
              </p>
              <p className="text-xs text-emerald-700">
                You approved{" "}
                <span className="font-bold">{approvedCandidate.name}</span> (
                {approvedCandidate.role}) for this project.
              </p>
            </div>
          </div>
          <button
            onClick={() => setApprovedCandidate(null)}
            className="text-xs font-semibold bg-emerald-600 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Search & Role Filter Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Role Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0">
          {["All", "Fleet Manager", "Driver", "Site Manager"].map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                selectedRole === role
                  ? "bg-[#1D63FF] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {role === "All" ? "All Roles" : `${role}s`}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative max-w-xs w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search candidate or skill..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#F8FAFC] border border-slate-200 pl-10 pr-4 py-2 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Applicants Grid Feed */}
      {filteredApplicants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredApplicants.map((applicant) => (
            <ApplicantCard
              key={applicant.id}
              applicant={applicant}
              onSelect={() => handleSelectApplicant(applicant)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-3">
          <Users className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            No Applicants Found
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            No candidates currently match the selected role filter or search
            term. Try resetting your search filter.
          </p>
        </div>
      )}
    </div>
  );
}
