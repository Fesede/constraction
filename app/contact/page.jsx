"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Truck,
  FileText,
  Users,
} from "lucide-react";

// Import your custom Header and Footer components
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Fleet Manager",
    category: "System Support & Bug Report",
    message: "",
  });

  const [status, setStatus] = useState({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Support ticket submitted successfully!",
        });
        setFormData({
          name: "",
          email: "",
          role: "Fleet Manager",
          category: "System Support & Bug Report",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to send request.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between">
      {/* 1. Header Component */}
      <Header />

      {/* 2. Main Contact Page Content */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold mb-4 uppercase tracking-wider">
              <Truck className="w-4 h-4 animate-pulse" /> C-TMS ERP System[cite:
              1]
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              C-TMS System Support & Contact
            </h1>
            <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Need technical assistance, fleet telemetry support, or ERP module
              customization?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project Leads & Spec Info Sidebar */}
            <motion.div
              className="bg-slate-800/60 rounded-2xl p-8 border border-slate-700/60 flex flex-col justify-between backdrop-blur-sm shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div>
                <h2 className="text-xl font-bold text-amber-400 mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5" /> Project Leads[cite: 1]
                </h2>

                <div className="space-y-6">
                  <div className="border-b border-slate-700/60 pb-4">
                    <h3 className="font-semibold text-white">
                      Dereje Sebsibe[cite: 1]
                    </h3>
                    <a
                      href="mailto:deregood29@gmail.com"
                      className="text-amber-400 hover:underline text-sm flex items-center gap-1.5 mt-1"
                    >
                      <Mail className="w-3.5 h-3.5" />{" "}
                      deregood29@gmail.com[cite: 1]
                    </a>
                  </div>

                  <div className="border-b border-slate-700/60 pb-4">
                    <h3 className="font-semibold text-white">
                      Bemnet Gudisa[cite: 1]
                    </h3>
                    <a
                      href="mailto:gbeimnt@gmail.com"
                      className="text-amber-400 hover:underline text-sm flex items-center gap-1.5 mt-1"
                    >
                      <Mail className="w-3.5 h-3.5" /> gbeimnt@gmail.com[cite:
                      1]
                    </a>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    System Modules Supported
                  </h4>
                  <ul className="text-xs text-slate-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400" /> GPS &
                      Geofencing (5km)[cite: 1]
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400" /> Offline
                      e-POD & Signatures[cite: 1]
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400" />{" "}
                      Maintenance & Analytics[cite: 1]
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/60">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" /> Status Report[cite: 1]
                  </span>
                  <span className="text-amber-400 font-medium">
                    C-TMS Specification — July 2026[cite: 1]
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Support Ticket Form */}
            <motion.div
              className="lg:col-span-2 bg-slate-800/40 rounded-2xl p-8 border border-slate-700/60 shadow-xl backdrop-blur-sm"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Submit a Support Request
              </h2>

              {/* Notification Banner with AnimatePresence */}
              <AnimatePresence mode="wait">
                {status.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`mb-6 p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
                      status.type === "success"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                    )}
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase text-slate-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Dereje Sebsibe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase text-slate-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. user@construction.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-xs font-bold uppercase text-slate-300 mb-2"
                    >
                      RBAC Role[cite: 1]
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-sm transition-all"
                    >
                      <option value="Fleet Manager">
                        Fleet Manager (Admin)[cite: 1]
                      </option>
                      <option value="Site Manager">
                        Site Manager (Field Supervisor)[cite: 1]
                      </option>
                      <option value="Truck Driver">
                        Truck Driver (Mobile Client App)[cite: 1]
                      </option>
                      <option value="System Administrator">
                        System Administrator
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="block text-xs font-bold uppercase text-slate-300 mb-2"
                    >
                      Inquiry Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-sm transition-all"
                    >
                      <option value="System Support & Bug Report">
                        System Support & Bug Report
                      </option>
                      <option value="GPS Telemetry & Geofence Issue">
                        GPS Telemetry & Geofence Issue[cite: 1]
                      </option>
                      <option value="e-POD & Offline Sync Query">
                        e-POD & Offline Sync Query[cite: 1]
                      </option>
                      <option value="Custom Module / Feature Request">
                        Custom Module / Feature Request
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase text-slate-300 mb-2"
                  >
                    Message Detail
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your issue or specification inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-sm transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-bold rounded-xl text-slate-900 bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-amber-500/20"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4 text-slate-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting Ticket...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Support Ticket
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* 3. Footer Component */}
      <Footer />
    </div>
  );
}
