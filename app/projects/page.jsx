import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ArrowRight,
  Building,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  ShieldCheck,
  Truck,
} from "lucide-react";

// Featured Realized & In-Progress Projects
const projects = [
  {
    id: "ctms-erp-deployment",
    title: "C-TMS ERP Fleet Integration",
    category: "Software & Heavy Fleet",
    status: "In Progress",
    date: "July 2026",
    location: "Addis Ababa, Ethiopia",
    description:
      "Deploying full GPS telemetry, automated dispatching, geofencing (5km), and offline e-POD signature sync across heavy transport fleets.",
    image:
      "https://img.magnific.com/free-photo/illustration-construction-site_23-2151850238.jpg?semt=ais_hybrid&w=740&q=80",
    tags: ["C-TMS Core", "GPS Telemetry", "e-POD Sync", "Fleet Management"],
    specs: [
      "Mixer, Flatbed & Dump Truck Support",
      "5 km Geofence Auto Notifications",
      "Offline-First Signature Caching",
    ],
  },
  {
    id: "commercial-tower",
    title: "Skyline Heights Commercial Center",
    category: "Commercial Construction",
    status: "Completed",
    date: "March 2026",
    location: "Bole District, Addis Ababa",
    description:
      "A 14-story mixed-use commercial center engineered with modern structural concrete standards and integrated smart building logistics.",
    image:
      "https://img.freepik.com/free-photo/construction-site-with-cranes-building_23-2148281146.jpg",
    tags: ["Structural Steel", "Concrete Core", "Commercial"],
    specs: [
      "14 Stories / 2-Level Basement",
      "Integrated Logistics Hub",
      "Full Safety Compliance",
    ],
  },
  {
    id: "industrial-warehouse",
    title: "Logistics Park & Material Warehouse",
    category: "Industrial Engineering",
    status: "Completed",
    date: "January 2026",
    location: "Kality Industrial Zone",
    description:
      "Large-scale material handling warehouse equipped with heavy vehicle loading docks, material weighing stations, and site automated inventories.",
    image:
      "https://img.freepik.com/free-photo/warehouse-building-construction_1127-3211.jpg",
    tags: ["Warehouse", "Loading Docks", "Heavy Material"],
    specs: [
      "12,000 sq. meters Covered Area",
      "Automated Inventory Integration",
      "Heavy Axle Pavement",
    ],
  },
  {
    id: "residential-complex",
    title: "Grand Horizon Residential Villas",
    category: "Residential Development",
    status: "Completed",
    date: "November 2025",
    location: "CMC, Addis Ababa",
    description:
      "Luxury residential gated community featuring custom architectural design, reinforced structural framing, and eco-friendly utility networks.",
    image:
      "https://img.freepik.com/free-photo/modern-residential-building-construction_23-2149122421.jpg",
    tags: ["Residential", "Architectural Design", "Urban Housing"],
    specs: [
      "24 Premium Villa Units",
      "3D Structural Modeling",
      "On-Time Delivery",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* --- HEADER --- */}
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://img.freepik.com/free-photo/construction-site-with-cranes-building_23-2148281146.jpg"
            alt="Construction Projects Background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-md mb-6">
            <Building className="h-3.5 w-3.5 text-sky-400" />
            <span>Proven Engineering & System Track Record</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Our Featured{" "}
            <span className="text-sky-400">Projects & ERP Deployments</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed sm:text-xl">
            From heavy commercial infrastructure to integrated transport
            logistics systems, discover how ConstructCo delivers excellence
            across site and software.
          </p>
        </div>
      </section>

      {/* --- PROJECTS GRID SECTION --- */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Engineering & Logistics Portfolio
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Delivering high-value construction developments and cutting-edge
              C-TMS ERP logistics integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all"
              >
                {/* Image Banner */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${
                        project.status === "Completed"
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                          : "bg-sky-500/10 border-sky-500/30 text-sky-400"
                      }`}
                    >
                      {project.status === "Completed" ? (
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      ) : (
                        <Clock className="h-3.5 w-3.5" />
                      )}
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-slate-900/80 border border-slate-700/60 px-3 py-1 rounded-full text-xs font-medium text-slate-300 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Location & Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-xs text-sky-400 mb-1">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Specs List */}
                    <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mb-6">
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        Key Project Specifications
                      </h4>
                      <ul className="space-y-2">
                        {project.specs.map((spec, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                          >
                            <ShieldCheck className="h-4 w-4 text-sky-500 shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tags & Date */}
                  <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 text-xs px-2.5 py-1 rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 shrink-0">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 px-6 py-16 text-center text-white shadow-xl sm:px-12 lg:px-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Have an Upcoming Project or ERP Requirement?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Contact our engineering management team to discuss custom
              construction builds, C-TMS logistics deployment, or structural
              planning.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-sky-500 active:scale-95 transition-all"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}
