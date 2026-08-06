"use client";

import React from "react";
import { Star, ShieldCheck, CheckCircle, UserCheck } from "lucide-react";

export default function ApplicantCard({ applicant, onSelect }) {
  const { name, role, rating, completedProjects, experience, rate } =
    applicant || {
      name: "Abebe Kebede",
      role: "Fleet Manager",
      rating: 4.9,
      completedProjects: 24,
      experience: "8 Yrs Exp",
      rate: "15,000 ETB / Trip",
    };

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-all">
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between mb-3">
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
            {role}
          </span>
          <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
            <span>{rating}</span>
          </div>
        </div>

        {/* Name & Experience */}
        <h3 className="text-lg font-bold text-slate-900">{name}</h3>
        <p className="text-xs text-slate-500 mt-0.5">
          {experience} • {completedProjects} Projects Completed
        </p>

        {/* Verification Tag */}
        <div className="mt-3 bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 w-fit">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Verified C-TMS Credentials</span>
        </div>
      </div>

      {/* Footer Rate & Action */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Bid Rate
          </p>
          <p className="text-sm font-bold text-slate-900">{rate}</p>
        </div>

        <button
          onClick={onSelect}
          className="bg-[#009B64] hover:bg-emerald-700 text-white font-medium text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors"
        >
          <UserCheck className="w-4 h-4" />
          Approve & Select
        </button>
      </div>
    </div>
  );
}
