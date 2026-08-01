import Link from "next/link";
import Image from "next/image";
import Header from "./../components/Header"; // <--- FIXED RELATIVE PATH
import Footer from "./../components/Footer"; // <--- ADDED FOOTER IMPORT
import {
  ArrowRight,
  CheckCircle2,
  Database,
  FileCheck2,
  MapPin,
  Navigation,
  RefreshCw,
  Smartphone,
  Truck,
  Wrench,
} from "lucide-react";

const services = [
  {
    id: "dispatch-tracking",
    title: "Automated Dispatch & Live Telemetry",
    subtitle: "FR-1.1 & FR-1.2 Core Modules",
    description:
      "Intelligent fleet routing and real-time GPS tracking engineered specifically for heavy construction transport.",
    icon: Navigation,
    features: [
      "Automated payload capacity matching (Mixers, Dump Trucks, Flatbeds)",
      "Real-time continuous GPS telemetry & live route mapping",
      "Driver availability and active trip status tracking",
      "Reduced idle time and optimized fuel consumption",
    ],
  },
  {
    id: "geofence-alerts",
    title: "Geofenced Site Perimeter Alerts",
    subtitle: "FR-1.3 Automated Logistics",
    description:
      "Automated proximity detection to streamline site receiving and prevent delivery bottlenecks.",
    icon: MapPin,
    features: [
      "Automated 5 km perimeter breach detection",
      "Instant SMS & push notifications to field Site Managers",
      "Pre-arrival prep for material receiving teams",
      "Eliminates site congestion and queue delays",
    ],
  },
  {
    id: "epod-inventory",
    title: "Digital e-POD & Inventory Sync",
    subtitle: "FR-2.1, FR-2.2 & FR-2.3 Field Operations",
    description:
      "Paperless delivery verification and instant site inventory reconciliation with offline resilience.",
    icon: FileCheck2,
    features: [
      "Touch-screen digital signature capture on material arrival",
      "Immutable e-POD record generation for audit compliance",
      "Real-time material ledger updates directly to site inventory",
      "Offline local caching with auto-sync upon network reconnection",
    ],
  },
  {
    id: "maintenance-analytics",
    title: "Fleet Maintenance & Driver Analytics",
    subtitle: "FR-3.1 & FR-3.2 Vehicle Management",
    description:
      "Proactive mechanical logging and driver performance metrics to maximize fleet uptime.",
    icon: Wrench,
    features: [
      "Mobile pre-trip inspection and mechanical issue reporting",
      "Fault severity rating & instant maintenance ticketing",
      "Driver efficiency monitoring (fuel, speed, on-time rates)",
      "Historical maintenance logs and resolution tracking",
    ],
  },
];

const integrations = [
  {
    title: "GPS Telemetry Service",
    description:
      "Real-time streaming interface for live vehicle positioning and mobile app telemetry.",
    icon: Smartphone,
  },
  {
    title: "Mobile Sync Protocol",
    description:
      "Secure transmission channel for field delivery receipts and offline data synchronization.",
    icon: RefreshCw,
  },
  {
    title: "ERP Accounting Connector",
    description:
      "Bridges fuel consumption, driver hours, and material quantities with core financial systems.",
    icon: Database,
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* --- HEADER --- */}
      <Header />
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://img.magnific.com/free-photo/illustration-construction-site_23-2151850238.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Construction Transport Background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-md mb-6">
            <Truck className="h-3.5 w-3.5 text-sky-400" />
            <span>C-TMS ERP Core Architecture</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Enterprise Logistics for{" "}
            <span className="text-sky-400">Heavy Material Transport</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed sm:text-xl">
            Eliminate site delays, eliminate paper delivery receipts, and
            streamline fleet management with our integrated software modules.
          </p>
        </div>
      </section>
      {/* --- CORE SERVICES / MODULES GRID --- */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Core System Modules
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Tailored functional modules for Fleet Managers, Site Supervisors,
              and Truck Drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 px-3 py-1 rounded-full border border-sky-200 dark:border-sky-900">
                        {service.subtitle}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                        Key Capabilities
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
                          >
                            <CheckCircle2 className="h-4 w-4 text-sky-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* --- SYSTEM INTEGRATIONS --- */}
      <section className="bg-slate-100 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Enterprise Integration Points
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Seamless connection between real-time field operations and core
              accounting systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrations.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* --- CTA SECTION --- */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 px-6 py-16 text-center text-white shadow-xl sm:px-12 lg:px-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Upgrade Your Transport Logistics?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Consult with our engineering leads to review the functional
              specification and implement C-TMS ERP Core.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-sky-500 active:scale-95 transition-all"
              >
                Schedule Technical Review
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* --- FOOTER --- */}
      <Footer /> {/* <--- ADDED HERE */}
    </div>
  );
}
