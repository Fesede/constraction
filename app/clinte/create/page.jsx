"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  MapPin,
  Package,
  Calendar,
  CheckCircle,
  Layers,
} from "lucide-react";

export default function CreateProjectPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    origin: "",
    destination: "",
    cargoType: "Ready-Mix Concrete (C-30)",
    estimatedTonnage: "",
    startDate: "",
    completionDate: "",
    budget: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle project creation (e.g., save state or send payload)
    console.log("Submitted Project Data:", formData);
    router.push("/projects");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Header & Back Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects Overview</span>
        </Link>

        <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-md">
          New Project Bidding Draft
        </span>
      </div>

      {/* Main Form Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Banner Section */}
        <div className="bg-[#101726] text-white p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-600 text-white rounded-xl">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">
                Commission New Construction Project
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Define site locations, material specifications, and project
                timeline to open applications for Fleet Managers, Drivers, and
                Site Supervisors.
              </p>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
          {/* Section 1: Project Identity */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              1. Project Overview & Scope
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Project Title *
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="e.g., Lideta Hub Foundation Concrete Pouring Phase 1"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Project Description & Special Instructions
                </label>
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Specify key access rules, preferred dispatch times, or site safety protocols..."
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                />
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section 2: Logistics & Locations */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              2. Logistics & Route Specs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Origin Location / Batching Plant *
                </label>
                <input
                  type="text"
                  name="origin"
                  required
                  placeholder="e.g., Central Batching Plant #3 (Gotera)"
                  value={formData.origin}
                  onChange={handleChange}
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Destination Construction Site *
                </label>
                <input
                  type="text"
                  name="destination"
                  required
                  placeholder="e.g., Lideta Commercial Hub Site A"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section 3: Material & Quantity Requirements */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Package className="w-4 h-4 text-blue-600" />
              3. Cargo & Material Specifications
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Cargo Type / Grade *
                </label>
                <select
                  name="cargoType"
                  value={formData.cargoType}
                  onChange={handleChange}
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                >
                  <option value="Ready-Mix Concrete (C-30)">
                    Ready-Mix Concrete (C-30)
                  </option>
                  <option value="Ready-Mix Concrete (C-25)">
                    Ready-Mix Concrete (C-25)
                  </option>
                  <option value="Aggregate / Crushed Stone">
                    Aggregate / Crushed Stone
                  </option>
                  <option value="Reinforcement Steel Bars">
                    Reinforcement Steel Bars
                  </option>
                  <option value="Bulk Cement Powder">Bulk Cement Powder</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Estimated Total Tonnage / Volume *
                </label>
                <input
                  type="text"
                  name="estimatedTonnage"
                  required
                  placeholder="e.g., 500 Tons or 150 m³"
                  value={formData.estimatedTonnage}
                  onChange={handleChange}
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section 4: Schedule & Budget */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              4. Target Timeline & Budget
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Target Start Date *
                </label>
                <input
                  type="date"
                  name="startDate"
                  required
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Est. Completion Date *
                </label>
                <input
                  type="date"
                  name="completionDate"
                  required
                  value={formData.completionDate}
                  onChange={handleChange}
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Budget Allocation (ETB)
                </label>
                <input
                  type="text"
                  name="budget"
                  placeholder="e.g., 250,000 ETB"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
            <Link
              href="/projects"
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="bg-[#1D63FF] hover:bg-blue-600 text-white font-semibold text-sm px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-md"
            >
              <CheckCircle className="w-4 h-4" />
              Publish Project for Bidding
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
