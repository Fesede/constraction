"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import {
  User,
  Mail,
  Phone,
  ShieldCheck,
  Truck,
  Building2,
  HardHat,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const roles = [
  {
    id: "Driver",
    title: "Truck Driver",
    desc: "Freight transit & delivery access",
    icon: Truck,
  },
  {
    id: "SiteManager",
    title: "Site Manager",
    desc: "Material receiving & e-POD verification",
    icon: Building2,
  },
  {
    id: "FleetManager",
    title: "Fleet Manager",
    desc: "Full system & dispatch administration",
    icon: HardHat,
  },
];

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    role: "Driver", // Default matching user_role ENUM
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleSelect = (roleId) => {
    setFormData((prev) => ({ ...prev, role: roleId }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    try {
      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed.");
      }

      setStatusMessage({
        type: "success",
        text: "Account created successfully! Redirecting to dashboard...",
      });

      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        role: "Driver",
      });
    } catch (err) {
      setStatusMessage({
        type: "error",
        text: err.message || "An unexpected error occurred.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#030712] text-slate-100">
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-80px)]">
        {/* --- LEFT HERO/BRANDING PANEL --- */}
        <div className="lg:col-span-5 bg-[#070e20] border-r border-slate-800/80 p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-8">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>C-TMS Access Control</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Streamline Construction <br />
              <span className="text-amber-500">Logistics & Fleet Ops.</span>
            </h2>

            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Create your profile to access automated dispatching, e-POD
              verification, real-time fleet telemetry, and material site
              logistics.
            </p>
          </div>

          <div className="my-10 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300">
                Role-based access matching system constraints.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300">
                Seamless integration with driver mobile signature collection.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 text-xs text-slate-500">
            Internal Operations Platform &bull; C-TMS ERP 2026
          </div>
        </div>

        {/* --- RIGHT FORM PANEL --- */}
        <div className="lg:col-span-7 bg-[#030712] p-8 lg:p-12 flex items-center justify-center">
          <div className="max-w-xl w-full space-y-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Create System Credentials
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                Fill in the details to register in PostgreSQL database tables.
              </p>
            </div>

            {/* Status Notifications */}
            {statusMessage.text && (
              <div
                className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
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
              {/* Custom Interactive Role Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Select Account Role <span className="text-amber-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {roles.map((item) => {
                    const Icon = item.icon;
                    const isSelected = formData.role === item.id;
                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => handleRoleSelect(item.id)}
                        className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                          isSelected
                            ? "bg-amber-500/10 border-amber-500 text-white shadow-lg shadow-amber-500/10"
                            : "bg-[#0b1329] border-slate-800 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 mb-3 ${isSelected ? "text-amber-400" : "text-slate-500"}`}
                        />
                        <div>
                          <p
                            className={`text-xs font-bold ${isSelected ? "text-amber-400" : "text-slate-200"}`}
                          >
                            {item.title}
                          </p>
                          <p className="text-[10px] text-slate-500 mt-1 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Input Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Full Name <span className="text-amber-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
                    <input
                      type="text"
                      name="full_name"
                      required
                      maxLength={100}
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="e.g. Dereje Sebsibe"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0b1329] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Email Address <span className="text-amber-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
                    <input
                      type="email"
                      name="email"
                      required
                      maxLength={100}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="user@ctms.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0b1329] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
                    <input
                      type="tel"
                      name="phone_number"
                      maxLength={20}
                      value={formData.phone_number}
                      onChange={handleChange}
                      placeholder="+251 91 234 5678"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0b1329] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3.5 px-6 rounded-xl text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
              >
                {loading ? (
                  <span>Saving to Database...</span>
                ) : (
                  <>
                    <span>Complete Registration</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="pt-4 border-t border-slate-800/80 text-center">
              <p className="text-xs text-slate-400">
                Already registered in C-TMS?{" "}
                <Link
                  href="/login"
                  className="text-amber-400 hover:underline font-semibold"
                >
                  Sign in to your account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
