import {
  Truck,
  ShieldCheck,
  Clock,
  HardHat,
  TrendingUp,
  MapPin,
  Wrench,
} from "lucide-react";

export const metadata = {
  title: "About | C-TMS ERP Core Logistics",
  description:
    "Enterprise-grade heavy material logistics ERP engineered for construction fleet dispatch, geofenced alerts, and offline e-POD.",
};

export default function AboutPage() {
  const stats = [
    { label: "Active Job Sites", value: "1,200+" },
    { label: "On-Time Deliveries", value: "98.4%" },
    { label: "Geofence Alerts / Mo", value: "150K+" },
    { label: "Heavy Fleet Vehicles", value: "8,500+" },
  ];

  const features = [
    {
      icon: <Truck className="w-5 h-5 text-sky-400" />,
      title: "Automated Dispatching",
      description:
        "Matches payload requirements (Dump Truck, Cement Mixer, Flatbed) with driver availability and tonnage limits.",
    },
    {
      icon: <MapPin className="w-5 h-5 text-sky-400" />,
      title: "Geofence Alerts",
      description:
        "Automated 5 km perimeter alerts notify Site Managers as incoming trucks approach job site gates.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-sky-400" />,
      title: "Offline e-POD Verification",
      description:
        "Touchscreen digital signatures auto-sync material receipts when drivers reconnect from low-network zones.",
    },
    {
      icon: <Wrench className="w-5 h-5 text-sky-400" />,
      title: "Maintenance Logging",
      description:
        "In-cab mobile ticketing allowing drivers to flag mechanical faults with severity ratings directly to Fleet Managers.",
    },
  ];

  const roles = [
    {
      title: "Fleet Manager",
      access: "Admin / Back-Office",
      tasks:
        "Vehicle assignment, automated dispatch, live telemetry tracking, and maintenance triage.",
    },
    {
      title: "Site Manager",
      access: "Field Supervisor",
      tasks:
        "Gate clearance, material inspection, e-POD digital signature capture, and inventory logging.",
    },
    {
      title: "Truck Driver",
      access: "Mobile Client App",
      tasks:
        "GPS navigation, pre-trip vehicle checks, offline delivery sign-offs, and mechanical issue reports.",
    },
  ];

  return (
    <main className="bg-[#070A12] text-slate-100 min-h-screen font-sans selection:bg-sky-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-sky-950/60 text-sky-400 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border border-sky-800/40 tracking-wide uppercase">
          <HardHat className="w-4 h-4 text-sky-400" /> C-TMS ERP Core
          Specification
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          Construction Transport Management System
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
          Integrating real-time GPS telemetry, geofenced site alerts, offline
          e-POD, and driver diagnostics into a single enterprise platform.
        </p>
      </section>

      {/* Core Software Features (Matches Your Image Card Style) */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Software Requirements Specification (SRS)
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Core system capabilities supporting back-office dispatchers and site
            field crews.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#111726] border border-slate-800/80 p-6 rounded-2xl hover:border-sky-500/40 transition-colors duration-200"
            >
              {/* Cyan Icon Box from design */}
              <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-800/30 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="bg-[#111726] border border-slate-800/80 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <div className="text-3xl md:text-4xl font-extrabold text-sky-400">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RBAC Roles Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Target Users & Access Control (RBAC)
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Operational roles and security permission levels across C-TMS
            module.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="bg-[#111726] border border-slate-800/80 p-6 rounded-2xl"
            >
              <span className="text-[11px] font-semibold text-sky-400 bg-sky-950/80 border border-sky-800/30 px-3 py-1 rounded-md uppercase tracking-wider">
                {role.access}
              </span>
              <h3 className="text-lg font-bold text-white mt-5 mb-2">
                {role.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {role.tasks}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Document Footer */}
      <footer className="border-t border-slate-800/80 py-8 px-6 text-center text-xs text-slate-500">
        <p>
          C-TMS ERP Core • Executive Functional Specification • Prepared by
          Dereje Sebsibe & Bemnet Gudisa (July 2026)
        </p>
      </footer>
    </main>
  );
}
