"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  Truck,
  ShieldCheck,
  MapPin,
  FileCheck,
  Wrench,
  Users,
  Database,
  Mail,
  Building2,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  const systemSpecs = {
    name: "C-TMS ERP Core",
    version: "1.0.0",
    status: "Executive Functional Specification",
    date: "July 2026",
  };

  const authors = [
    {
      name: "Dereje Sebsibe",
      email: "deregood29@gmail.com",
      role: "Lead System Architect",
      initials: "DS",
    },
    {
      name: "Bemnet Gudisa",
      email: "gbeimnt@gmail.com",
      role: "Enterprise Systems Engineer",
      initials: "BG",
    },
  ];

  const rbacMatrix = [
    {
      role: "Fleet Manager",
      access: "Admin / Back-Office",
      badgeStyle: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      duties:
        "Vehicle assignment, dispatch scheduling, GPS telemetry monitoring, maintenance review.",
    },
    {
      role: "Site Manager",
      access: "Field Supervisor",
      badgeStyle: "bg-blue-500/10 text-blue-300 border-blue-500/30",
      duties:
        "Material receiving signoff, digital e-POD signature capture, site inventory confirmation.",
    },
    {
      role: "Truck Driver",
      access: "Mobile Client App",
      badgeStyle: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      duties:
        "Route navigation, pre-trip inspections, offline signature sync, issue logging.",
    },
  ];

  const features = [
    {
      code: "FR-1.0",
      title: "Dispatch & Geofencing",
      description:
        "Automated trip assignment matching Mixer, Flatbed, and Dump Truck payloads. Features live GPS updates and 5 km geofence triggers.",
      icon: MapPin,
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      code: "FR-2.0",
      title: "Field Operations & e-POD",
      description:
        "Touch-screen digital delivery verification with real-time inventory updates and offline device caching for remote sites.",
      icon: FileCheck,
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      code: "FR-3.0",
      title: "Maintenance & Analytics",
      description:
        "Mobile driver ticketing for mechanical fault reporting with severity ratings and performance telemetry dashboards.",
      icon: Wrench,
      iconColor: "text-amber-400",
      iconBg: "bg-amber-500/10 border-amber-500/20",
    },
  ];

  const entities = [
    {
      name: "User Accounts Entity",
      desc: "Stores account records, roles (Fleet/Site Manager, Driver), contact info, and security credentials.",
    },
    {
      name: "Vehicle Fleet Entity",
      desc: "Tracks heavy vehicle profiles, license plates, load capacities (tonnage), vehicle type, and availability.",
    },
    {
      name: "Trips & Dispatches Entity",
      desc: "Manages trip scheduling, driver and truck pairings, origin points, site coordinates, and delivery statuses.",
    },
    {
      name: "Delivery Receipts (e-POD)",
      desc: "Captures digital touch signatures, material volumes delivered, timestamps, and network sync statuses.",
    },
    {
      name: "Maintenance Logs Entity",
      desc: "Maintains driver-reported mechanical issues, fault severity levels, inspection histories, and repair tracking.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0b1329] text-slate-100 transition-colors overflow-x-hidden">
      {/* --- HEADER --- */}
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-[#0b1329] border-b border-slate-800/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400 backdrop-blur-md mb-6 uppercase tracking-wider">
              <Building2 className="h-3.5 w-3.5 text-blue-400" />
              <span>{systemSpecs.status}</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Construction Building{" "}
              <span className="text-blue-500">Transport System</span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed sm:text-xl">
              C-TMS ERP Core is an enterprise-grade logistics module engineered
              to eliminate heavy material transit delays, optimize fleet
              telemetry, and deliver offline digital proof of delivery.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400 border-t border-slate-800/80 pt-6">
              <span>
                <strong className="text-slate-200">System:</strong>{" "}
                {systemSpecs.name} v{systemSpecs.version}
              </span>
              <span>
                <strong className="text-slate-200">Release Date:</strong>{" "}
                {systemSpecs.date}
              </span>
              <span>
                <strong className="text-slate-200">Framework:</strong> Next.js
                App Router
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CORE SRS FUNCTIONAL REQUIREMENTS --- */}
      <section className="py-20 bg-[#0b1329]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4">
              <Truck className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Core SRS Functional Requirements
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Purpose-built software requirements designed for field conditions
              and back-office fleet management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.code}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="rounded-2xl border border-slate-800/80 bg-[#101b3a] p-8 shadow-lg hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-3 rounded-xl border ${feature.iconBg} ${feature.iconColor}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold bg-slate-900/60 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
                      {feature.code}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-xl mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- ROLE-BASED ACCESS CONTROL (RBAC) --- */}
      <section className="bg-[#0e1732] border-y border-slate-800/80 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Role-Based Access Control (RBAC)
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Enforcing operational domain boundaries across back-office, site
              supervision, and mobile apps.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl border border-slate-800/80 bg-[#101b3a] shadow-xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-[#142247] text-white font-semibold border-b border-slate-800 uppercase tracking-wider text-xs">
                  <tr>
                    <th className="px-6 py-4">System Role</th>
                    <th className="px-6 py-4">Access Level</th>
                    <th className="px-6 py-4">Primary Responsibilities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {rbacMatrix.map((row) => (
                    <tr
                      key={row.role}
                      className="hover:bg-slate-800/40 transition-colors"
                    >
                      <td className="px-6 py-5 font-bold text-white">
                        {row.role}
                      </td>
                      <td className="px-6 py-5">
                        <span
                          className={`px-3 py-1 rounded-full font-semibold text-xs border ${row.badgeStyle}`}
                        >
                          {row.access}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-slate-400 leading-relaxed">
                        {row.duties}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- DATABASE DOMAIN ENTITIES --- */}
      <section className="py-20 bg-[#0b1329]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4">
              <Database className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Primary Database Domain Entities
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Core relational data structures supporting enterprise logistics
              workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {entities.map((entity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-[#101b3a] rounded-2xl border border-slate-800/80 shadow-md hover:border-slate-700 transition-all"
              >
                <h3 className="font-bold text-white text-base mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                  {entity.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-7">
                  {entity.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ARCHITECTURE & SYSTEM CONTACTS --- */}
      <section className="pb-20 bg-[#0b1329]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-slate-800/80 bg-[#101b3a] p-8 sm:p-12 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Architecture & System Contacts
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {authors.map((author) => (
                <motion.div
                  key={author.email}
                  whileHover={{ y: -3 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#142247] border border-slate-800/80 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center shrink-0 text-base shadow-lg shadow-blue-600/30">
                    {author.initials}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-white text-lg">
                      {author.name}
                    </h4>
                    <p className="text-xs font-medium text-blue-400">
                      {author.role}
                    </p>
                    <a
                      href={`mailto:${author.email}`}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 transition-colors pt-1"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-400" />{" "}
                      {author.email}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}
