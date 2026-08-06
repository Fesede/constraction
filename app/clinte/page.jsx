"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import {
  PlusCircle,
  Search,
  Filter,
  FolderKanban,
  Users,
  Truck,
  CheckCircle2,
} from "lucide-react";

// Sample dummy data for initial layout rendering
const initialProjects = [
  {
    id: "PRJ-101",
    title: "Lideta Hub Foundation Concrete Pouring",
    location: "Lideta, Addis Ababa",
    deadline: "Aug 15, 2026",
    applicantsCount: 12,
    status: "Open for Bids",
  },
  {
    id: "PRJ-102",
    title: "Gotera Batching Plant Material Supply",
    location: "Gotera Site #3, Addis Ababa",
    deadline: "Aug 20, 2026",
    applicantsCount: 8,
    status: "Open for Bids",
  },
  {
    id: "PRJ-103",
    title: "Bole Road Expansion Aggregate Transport",
    location: "Bole, Addis Ababa",
    deadline: "Sep 01, 2026",
    applicantsCount: 4,
    status: "In Progress",
  },
];

export default function ProjectsOverviewPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = initialProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Top Banner & Action */}
      <div className="bg-[#101726] text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Client Bidding Portal
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1">
            Commissioned Projects Overview
          </h1>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Post project requirements, review applications from registered site
            managers, fleet managers, and drivers, and monitor dispatch
            handovers.
          </p>
        </div>

        <Link
          href="/projects/create"
          className="bg-[#1D63FF] hover:bg-blue-600 text-white font-medium px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shrink-0 text-sm"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Commission New Project</span>
        </Link>
      </div>

      {/* Metric Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <FolderKanban className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-extrabold text-slate-900">3</p>
            <p className="text-xs text-slate-500 font-medium">
              Active Projects
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-extrabold text-slate-900">24</p>
            <p className="text-xs text-slate-500 font-medium">Pending Bids</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-extrabold text-slate-900">18</p>
            <p className="text-xs text-slate-500 font-medium">
              Active Dispatches
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-extrabold text-slate-900">142</p>
            <p className="text-xs text-slate-500 font-medium">Signed e-PODs</p>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search projects by title or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 pl-10 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors self-start sm:self-auto">
          <Filter className="w-4 h-4 text-slate-500" />
          <span>Filter Status</span>
        </button>
      </div>

      {/* Project Grid Feed */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
