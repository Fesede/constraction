"use client";

import React, { useState } from "react";

export default function SingleFileContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Fleet Manager",
    category: "System Support",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Example API call to Next.js route handler (/api/contact)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          role: "Fleet Manager",
          category: "System Support",
          message: "",
        });
      } else {
        const data = await res.json();
        setErrorMessage(data.message || "Failed to submit request.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error occurred. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100 font-sans text-slate-800 antialiased">
      {/* ================= HEADER COMPONENT ================= */}
      <header className="bg-slate-900 text-white shadow-md border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Title */}
            <div className="flex items-center space-x-3">
              <div className="bg-amber-500 text-slate-900 font-black px-2.5 py-1 rounded-lg text-lg tracking-wider">
                C-TMS
              </div>
              <div>
                <h1 className="text-base font-bold leading-tight">
                  Building Logistics ERP
                </h1>
                <p className="text-xs text-slate-400">
                  Construction Transport System
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6 text-sm font-medium">
              <a
                href="#"
                className="text-slate-300 hover:text-amber-400 transition"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-amber-400 transition"
              >
                Dispatches
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-amber-400 transition"
              >
                Fleet
              </a>
              <a
                href="#"
                className="text-amber-400 font-semibold border-b-2 border-amber-400 pb-1"
              >
                Contact
              </a>
            </nav>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="hidden sm:flex flex-col text-right">
                <span className="text-xs font-semibold text-slate-200">
                  Dereje Sebsibe
                </span>
                <span className="text-[10px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full self-end">
                  Fleet Manager
                </span>
              </div>
              <div className="h-8 w-8 rounded-full bg-slate-700 border border-amber-500/50 flex items-center justify-center font-bold text-amber-400 text-xs">
                DS
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900">
              C-TMS System Support & Contact
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Need technical assistance, fleet telemetry support, or ERP module
              customization?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Info Side Card */}
            <div className="bg-slate-900 text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-amber-400 mb-4">
                  Project Leads
                </h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-slate-200">
                      Dereje Sebsibe
                    </p>
                    <a
                      href="mailto:deregood29@gmail.com"
                      className="text-xs text-amber-300 hover:underline block"
                    >
                      deregood29@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-200">
                      Bemnet Gudisa
                    </p>
                    <a
                      href="mailto:gbeimnt@gmail.com"
                      className="text-xs text-amber-300 hover:underline block"
                    >
                      gbeimnt@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-400">
                <p className="font-semibold text-slate-300 mb-1">
                  Status Report
                </p>
                <p>C-TMS Specification — July 2026</p>
              </div>
            </div>

            {/* Form Section */}
            <div className="md:col-span-2 bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200">
              {status === "success" ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-center py-10">
                  <h4 className="text-lg font-bold mb-2">
                    Message Dispatched!
                  </h4>
                  <p className="text-xs text-emerald-700">
                    Your issue or inquiry has been received. Our team will get
                    back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded hover:bg-emerald-700 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-md text-xs text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="e.g. Dereje Sebsibe"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="e.g. user@construction.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                        RBAC Role
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                      >
                        <option value="Fleet Manager">
                          Fleet Manager (Admin)
                        </option>
                        <option value="Site Manager">
                          Site Manager (Field Supervisor)
                        </option>
                        <option value="Truck Driver">
                          Truck Driver (Mobile App)
                        </option>
                        <option value="System Architect">
                          System Architect / Dev
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                        Inquiry Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                      >
                        <option value="System Support">
                          System Support & Bug Report
                        </option>
                        <option value="GPS & Telemetry">
                          GPS & Geofence Telemetry
                        </option>
                        <option value="e-POD Integration">
                          e-POD & Offline Sync Issue
                        </option>
                        <option value="ERP Core Accounting">
                          ERP Accounting Connector
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                      Message Detail
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Describe your issue or specification inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-900 font-bold rounded-lg shadow transition duration-150 text-sm"
                  >
                    {status === "loading"
                      ? "Submitting Ticket..."
                      : "Submit Support Ticket"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* ================= FOOTER COMPONENT ================= */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="text-white font-bold mb-2">C-TMS ERP Core</h3>
              <p className="text-slate-400 leading-relaxed">
                Enterprise-grade heavy material logistics and fleet dispatch
                module built for construction operations.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">Quick Modules</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Offline e-POD Logs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    5km Geofence Engine
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400">
                    Driver Maintenance Logging
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">System Leads</h4>
              <p>
                Dereje Sebsibe —{" "}
                <a
                  href="mailto:deregood29@gmail.com"
                  className="text-amber-400 hover:underline"
                >
                  deregood29@gmail.com
                </a>
              </p>
              <p className="mt-1">
                Bemnet Gudisa —{" "}
                <a
                  href="mailto:gbeimnt@gmail.com"
                  className="text-amber-400 hover:underline"
                >
                  gbeimnt@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-[11px]">
            <p>© 2026 C-TMS ERP Core. All rights reserved.</p>
            <div className="flex items-center space-x-2 mt-2 sm:mt-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-300">
                GPS Telemetry Engine: Operational
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
