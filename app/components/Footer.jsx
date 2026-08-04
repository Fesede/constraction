import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ShieldCheck, Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        {/* TOP ROW: BRAND & NAVIGATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info (Spans 2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="ConstructCo Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Construct<span className="text-sky-500">Co</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Enterprise construction logistics and C-TMS ERP core engineering.
              Streamlining heavy material transport, automated dispatch, and
              field e-POD synchronization.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-sky-400 bg-sky-950/40 border border-sky-800/50 px-3 py-1.5 rounded-lg w-fit">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>C-TMS ERP Core Architecture Compliant</span>
            </div>
          </div>

          {/* Column 1: Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-sky-400 transition-colors"
                >
                  Services & ERP
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-sky-400 transition-colors"
                >
                  Projects Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-sky-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-sky-400 transition-colors"
                >
                  Contact & Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: C-TMS Core Modules */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              C-TMS Modules
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services#dispatch-tracking"
                  className="hover:text-sky-400 transition-colors"
                >
                  Automated Dispatch
                </Link>
              </li>
              <li>
                <Link
                  href="/services#geofence-alerts"
                  className="hover:text-sky-400 transition-colors"
                >
                  Geofenced Alerts
                </Link>
              </li>
              <li>
                <Link
                  href="/services#epod-inventory"
                  className="hover:text-sky-400 transition-colors"
                >
                  Digital e-POD
                </Link>
              </li>
              <li>
                <Link
                  href="/services#maintenance-analytics"
                  className="hover:text-sky-400 transition-colors"
                >
                  Driver Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Contact & Support
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-sky-400 shrink-0" />
                <a
                  href="mailto:deregood29@gmail.com"
                  className="hover:text-sky-400 transition-colors"
                >
                  deregood29@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-sky-400 shrink-0" />
                <span>+251 900 000 000</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW: COPYRIGHT & SPEC RECOGNITION */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} ConstructCo & C-TMS System. All rights
            reserved.
          </p>
          <p className="text-slate-500">
            Engineered for Heavy Material Transport & Logistics
          </p>
        </div>
      </div>
    </footer>
  );
}
