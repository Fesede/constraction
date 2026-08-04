"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  HardHat,
  Ruler,
  ShieldCheck,
  Truck,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Commercial Logistics",
    description:
      "Delivering heavy equipment, transit logistics, and site raw materials safely, on time, and within budget.",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: HardHat,
    title: "Fleet Operations Management",
    description:
      "Custom truck tracking, telemetry data, and site operations built with precision and modern engineering.",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: Ruler,
    title: "Dispatch & Site Planning",
    description:
      "End-to-end trip assignment, structural engineering logistics, and geofence tracking tailored to safety standards.",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: ShieldCheck,
    title: "e-POD Verification & Safety",
    description:
      "Touch-screen digital delivery signatures, offline caching, and instant material audit controls.",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
];

const stats = [
  { label: "Active Fleet Vehicles", value: "250+" },
  { label: "Completed Dispatches", value: "1,500+" },
  { label: "Registered Site Managers", value: "180+" },
  { label: "Safety Compliance Rate", value: "100%" },
];

// Motion animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#030712] text-slate-100 transition-colors overflow-x-hidden">
      {/* --- HEADER --- */}
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden py-24 lg:py-36 min-h-[85vh] flex items-center justify-center border-b border-slate-800/80">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.magnific.com/free-photo/illustration-construction-site_23-2151850238.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Construction Site Hero Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-[#030712]/95 to-[#030712]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-400 backdrop-blur-md mb-6 uppercase tracking-wider">
              <Truck className="h-3.5 w-3.5 text-amber-400" />
              <span>Certified Fleet & Transit ERP</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building strong foundations{" "}
              <span className="text-amber-500">for tomorrow.</span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed sm:text-xl">
              C-TMS ERP Core is an enterprise-grade logistics module engineered
              to eliminate heavy material transit delays, optimize fleet
              telemetry, and deliver offline digital proof of delivery.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 active:scale-95 transition-all"
              >
                Request Support
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/dispatches"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-800 bg-[#0b1329] px-6 py-3.5 text-base font-semibold text-white hover:bg-slate-800/80 transition-all"
              >
                Explore Active Fleet
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="border-b border-slate-800/80 bg-[#070e20] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <p className="text-3xl font-bold tracking-tight text-amber-500 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-20 lg:py-28 bg-[#030712]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Comprehensive Logistics & Fleet Services
            </h2>
            <p className="mt-4 text-slate-400">
              From automated trip scheduling to real-time e-POD receipt
              generation and heavy machinery maintenance.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="rounded-2xl border border-slate-800/90 bg-[#0b1329] p-6 shadow-lg hover:border-slate-700 transition-all"
                >
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${feature.bg} ${feature.color} mb-5`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}
