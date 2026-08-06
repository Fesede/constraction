"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";

export default function ProjectCard({ project }) {
  const { id, title, location, deadline, applicantsCount, status } =
    project || {
      id: "PRJ-101",
      title: "Lideta Hub Foundation Concrete Pouring",
      location: "Lideta, Addis Ababa",
      deadline: "Aug 15, 2026",
      applicantsCount: 12,
      status: "Open for Bids",
    };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover:border-slate-300 transition-all">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
          #{id}
        </span>
        <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
          {status}
        </span>
      </div>

      <div>
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
          <MapPin className="w-3.5 h-3.5 text-slate-400" />
          <span>{location}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 bg-[#F8FAFC] p-3 rounded-xl border border-slate-100 text-xs">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-slate-400" />
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase">
              Target Date
            </p>
            <p className="font-semibold text-slate-700">{deadline}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-slate-400" />
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase">
              Applicants
            </p>
            <p className="font-semibold text-slate-700">
              {applicantsCount} Pending
            </p>
          </div>
        </div>
      </div>

      <Link
        href={`/projects/applicants?projectId=${id}`}
        className="w-full bg-[#101726] hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        <span>Review Applicants</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
