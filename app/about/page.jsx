import React from "react";
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

// Next.js Metadata for SEO
export const metadata = {
  title: "About | C-TMS ERP Core Specification",
  description:
    "Executive Functional Specification for Construction Building Transport Management System.",
};

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
      badgeStyle: "bg-purple-100 text-purple-800 border-purple-200",
      duties:
        "Vehicle assignment, dispatch scheduling, GPS telemetry monitoring, maintenance review.",
    },
    {
      role: "Site Manager",
      access: "Field Supervisor",
      badgeStyle: "bg-blue-100 text-blue-800 border-blue-200",
      duties:
        "Material receiving signoff, digital e-POD signature capture, site inventory confirmation.",
    },
    {
      role: "Truck Driver",
      access: "Mobile Client App",
      badgeStyle: "bg-emerald-100 text-emerald-800 border-emerald-200",
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
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
    },
    {
      code: "FR-2.0",
      title: "Field Operations & e-POD",
      description:
        "Touch-screen digital delivery verification with real-time inventory updates and offline device caching for remote sites.",
      icon: <FileCheck className="w-5 h-5 text-emerald-600" />,
    },
    {
      code: "FR-3.0",
      title: "Maintenance & Analytics",
      description:
        "Mobile driver ticketing for mechanical fault reporting with severity ratings and performance telemetry dashboards.",
      icon: <Wrench className="w-5 h-5 text-amber-600" />,
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
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Hero Header */}
      <header className="bg-slate-900 text-white py-16 px-6 sm:px-12 border-b border-slate-800">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border border-blue-500/30">
            <Building2 className="w-3.5 h-3.5" /> {systemSpecs.status}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Construction Building Transport Management System
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            C-TMS ERP Core is an enterprise-grade logistics module engineered to
            eliminate heavy material transit delays, optimize fleet telemetry,
            and deliver offline digital proof of delivery.
          </p>
          <div className="pt-4 flex flex-wrap gap-6 text-sm text-slate-400 border-t border-slate-800/80">
            <span>
              <strong>System:</strong> {systemSpecs.name} v{systemSpecs.version}
            </span>
            <span>
              <strong>Release Date:</strong> {systemSpecs.date}
            </span>
            <span>
              <strong>Framework:</strong> Next.js App Router
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 sm:px-12 py-12 space-y-16">
        {/* Core Capabilities */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Truck className="w-6 h-6 text-blue-600" /> Core SRS Functional
              Requirements
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Purpose-built software requirements designed for field conditions
              and back-office fleet management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.code}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-slate-100">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">
                    {feature.code}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Role-Based Access Control (RBAC) */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" /> Role-Based Access
              Control (RBAC)
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Enforcing operational domain boundaries across back-office, site
              supervision, and mobile apps.
            </p>
          </div>

          <div className="overflow-x-auto bg-white border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-100 text-slate-900 font-semibold border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">System Role</th>
                  <th className="px-6 py-4">Access Level</th>
                  <th className="px-6 py-4">Primary Responsibilities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {rbacMatrix.map((row) => (
                  <tr key={row.role} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      {row.role}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-md font-medium text-xs border ${row.badgeStyle}`}
                      >
                        {row.access}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{row.duties}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Database Domain Entities */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Database className="w-6 h-6 text-blue-600" /> Primary Database
              Domain Entities
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Core relational data structures supporting enterprise logistics
              workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {entities.map((entity, i) => (
              <div
                key={i}
                className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm"
              >
                <h3 className="font-semibold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  {entity.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {entity.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Author Contact Cards */}
        <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" /> Architecture &
            System Contacts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {authors.map((author) => (
              <div
                key={author.email}
                className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100"
              >
                <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center shrink-0 text-sm">
                  {author.initials}
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-slate-900">
                    {author.name}
                  </h4>
                  <p className="text-xs text-slate-500">{author.role}</p>
                  <a
                    href={`mailto:${author.email}`}
                    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" /> {author.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
