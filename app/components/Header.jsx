import {
  Truck,
  ShieldCheck,
  Clock,
  HardHat,
  TrendingUp,
  MapPin,
  Wrench,
  Smartphone,
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
      icon: <Truck className="w-8 h-8 text-amber-500" />,
      title: "Automated Dispatching (FR-1.1)",
      description:
        "Matches payload requirements (Dump Truck, Cement Mixer, Flatbed) with driver availability and tonnage limits.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-amber-500" />,
      title: "Geofence Alerts (FR-1.3)",
      description:
        "Automated 5 km perimeter alerts notify Site Managers as incoming trucks approach job site gates.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
      title: "Offline e-POD (FR-2.1 / 2.3)",
      description:
        "Touchscreen digital signatures auto-sync material receipts when drivers reconnect from low-network zones.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-amber-500" />,
      title: "Maintenance Logging (FR-3.1)",
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
    <main className="bg-slate-900 text-slate-100 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-20 px-6 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-amber-500/20">
          <HardHat className="w-4 h-4" /> C-TMS ERP Core Specification
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Enterprise Logistics Built for <br />
          <span className="text-amber-500">Heavy Construction Fleets</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Integrating real-time GPS telemetry, geofenced site alerts, offline
          e-POD, and driver diagnostics to eliminate project delays and paper
          workflows.
        </p>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-800/50 border-y border-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-amber-500">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* System Purpose & Mission */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            System Purpose & Strategy
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            The Construction Building Transport Management System (C-TMS) is an
            enterprise ERP module engineered to solve critical heavy logistics
            bottlenecks on active job sites.
          </p>
          <p className="text-slate-300 leading-relaxed">
            By replacing error-prone paper manifests with automated dispatching
            and offline-first mobile sync, C-TMS ensures materials hit site
            gates right when build crews are ready.
          </p>
        </div>
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700/50">
          <h3 className="text-xl font-bold text-amber-500 mb-4">
            Core Operational Gains
          </h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">✓</span>{" "}
              <strong className="text-white">Zero Gate Congestion:</strong>{" "}
              Automated 5 km geofence alerts notify site leads before trucks
              arrive.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">✓</span>{" "}
              <strong className="text-white">Offline Verification:</strong>{" "}
              Sign-offs cache locally in remote zones and sync automatically.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">✓</span>{" "}
              <strong className="text-white">Proactive Fleet Health:</strong>{" "}
              In-cab ticketing catches mechanical faults before breakdowns
              occur.
            </li>
          </ul>
        </div>
      </section>

      {/* Functional Requirements Grid */}
      <section className="py-16 bg-slate-950 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">
              Core Software Requirements (SRS)
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              Functional capabilities serving back-office dispatchers and field
              crews alike.
            </p>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            C-<span className="text-sky-500">TMS</span>
          </span>
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-sky-400 transition-colors">
            Home
          </Link>
          <Link
            href="/services"
            className="hover:text-sky-400 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="hover:text-sky-400 transition-colors"
          >
            Projects
          </Link>
          <Link href="/about" className="hover:text-sky-400 transition-colors">
            About Us
          </Link>
          <Link
            href="/contact"
            className="hover:text-sky-400 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA BUTTON */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 active:scale-95 transition-all"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Document Meta Footer */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center text-xs text-slate-500">
        <p>
          C-TMS ERP Core • Executive Functional Specification • Prepared by
          Dereje Sebsibe & Bemnet Gudisa (July 2026)
        </p>
      </footer>
    </main>
  );
}
