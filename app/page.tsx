import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer"; // <--- ADD THIS IMPORT
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  HardHat,
  Ruler,
  ShieldCheck,
  Truck,
} from "lucide-react";

// Construction Services & Features
const features = [
  {
    icon: Building2,
    title: "Commercial Construction",
    description:
      "Delivering modern office complexes, retail centers, and industrial facilities on time and within budget.",
  },
  {
    icon: HardHat,
    title: "Residential Building",
    description:
      "Custom homes, luxury apartments, and residential developments built with precision and modern craftsmanship.",
  },
  {
    icon: Ruler,
    title: "Architectural & Structural Design",
    description:
      "End-to-end planning, structural engineering, and 3D modeling tailored to safety and local standards.",
  },
  {
    icon: ShieldCheck,
    title: "Renovation & Restoration",
    description:
      "Comprehensive structural upgrades, interior remodeling, and historic building restorations.",
  },
];

// Construction Company Stats
const stats = [
  { label: "Completed Projects", value: "250+" },
  { label: "Years of Experience", value: "15+" },
  { label: "Skilled Engineers & Workers", value: "180+" },
  { label: "Safety Compliance", value: "100%" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* --- HEADER --- */}
      <Header />
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden py-24 lg:py-36 min-h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.magnific.com/free-photo/illustration-construction-site_23-2151850238.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Construction Site Hero Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[1px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-md mb-6">
              <Truck className="h-3.5 w-3.5 text-sky-400" />
              <span>Licensed & Certified General Contractors</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building strong foundations{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                for tomorrow.
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed sm:text-xl">
              We specialize in high-quality commercial, residential, and
              infrastructure construction with modern engineering standards and
              structural excellence.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-600/30 hover:bg-sky-500 active:scale-95 transition-all"
              >
                Request a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 backdrop-blur-md px-6 py-3.5 text-base font-semibold text-white hover:bg-slate-800/80 transition-all"
              >
                Explore Our Portfolio
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-sky-400" />
                On-Time Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-sky-400" />
                Strict Safety Protocol
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-sky-400" />
                Transparent Pricing
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* --- STATS SECTION --- */}
      <section className="border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold tracking-tight text-sky-600 dark:text-sky-400 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- SERVICES SECTION --- */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Comprehensive Construction Services
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              From site planning and architectural drafting to structural
              assembly and final handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* --- CALL TO ACTION SECTION --- */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-slate-800 px-6 py-16 text-center text-white shadow-xl sm:px-12 lg:px-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Have a construction project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Consult with our structural engineering team today to review
              blueprints, timelines, and cost estimations.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="rounded-xl bg-sky-600 px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-sky-500 active:scale-95 transition-all"
              >
                Get a Consulted Estimate
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
