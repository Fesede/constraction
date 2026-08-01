import Link from "next/link";
import Header from "../components/Header";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  HardHat,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Contact Us | C-TMS ERP Core",
  description:
    "Get in touch with the C-TMS engineering and support team for technical inquiries and enterprise deployments.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#070A12] text-slate-100 min-h-screen flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative py-16 px-6 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-sky-950/60 text-sky-400 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border border-sky-800/40 tracking-wide uppercase">
            <MessageSquare className="w-4 h-4 text-sky-400" /> C-TMS Support &
            Logistics Inquiries
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Get in Touch with Our Team
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            Have questions about C-TMS dispatch integration, geofence setup, or
            custom enterprise ERP modules? Send us a message or reach out
            directly.
          </p>
        </section>

        {/* CONTACT GRID SECTION */}
        <section className="py-8 px-6 max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* LEFT COLUMN: CONTACT CARDS & INFO */}
            <div className="lg:col-span-1 space-y-6">
              {/* Direct Info Card */}
              <div className="bg-[#111726] border border-slate-800/80 p-6 rounded-2xl space-y-6">
                <h2 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-3">
                  Direct Contact
                </h2>

                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-800/40 flex items-center justify-center shrink-0 text-sky-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Email Us
                    </h3>
                    <p className="text-sm font-medium text-white">
                      deregood29@gmail.com
                    </p>
                    <p className="text-sm font-medium text-white">
                      gbeimnt@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-800/40 flex items-center justify-center shrink-0 text-sky-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Call Support
                    </h3>
                    <p className="text-sm font-medium text-white">
                      +251 (0) 911 000 000
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Mon–Fri, 8:00 AM – 6:00 PM EAT
                    </p>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-950/80 border border-sky-800/40 flex items-center justify-center shrink-0 text-sky-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Headquarters
                    </h3>
                    <p className="text-sm font-medium text-white">
                      Addis Ababa, Ethiopia
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      C-TMS ERP Core Engineering Office
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Specifications Callout */}
              <div className="bg-[#111726] border border-slate-800/80 p-6 rounded-2xl">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold mb-2">
                  <ShieldCheck className="w-4 h-4" /> System Availability
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Field e-POD and vehicle telemetry sync protocols operate 24/7
                  with offline fallback caching enabled across all active job
                  sites.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: CONTACT FORM */}
            <div className="lg:col-span-2">
              <div className="bg-[#111726] border border-slate-800/80 p-8 rounded-2xl">
                <h2 className="text-xl font-bold text-white mb-2">
                  Send a Message
                </h2>
                <p className="text-sm text-slate-400 mb-6">
                  Fill out the form below and our logistics support team will
                  respond within 24 hours.
                </p>

                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        className="w-full bg-[#070A12] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@construction.com"
                        required
                        className="w-full bg-[#070A12] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Role Selection */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                        Your Role
                      </label>
                      <select className="w-full bg-[#070A12] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors">
                        <option value="fleet_manager">Fleet Manager</option>
                        <option value="site_manager">Site Manager</option>
                        <option value="driver">Truck Driver</option>
                        <option value="other">Executive / Other</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="e-POD Sync Inquiry / Technical Issue"
                        required
                        className="w-full bg-[#070A12] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Describe your inquiry or site setup details..."
                      required
                      className="w-full bg-[#070A12] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

{
  /* REUSABLE FOOTER COMPONENT */
}
function Footer() {
  return (
    <footer className="bg-[#070A12] border-t border-slate-800/80 pt-12 pb-8 px-6 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Col 1: Brand Info */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2 text-lg font-extrabold text-white">
            <div className="w-8 h-8 rounded-xl bg-sky-950/80 border border-sky-800/40 flex items-center justify-center text-sky-400">
              <HardHat className="w-4 h-4" />
            </div>
            <span>
              C-<span className="text-sky-500">TMS</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Enterprise-grade heavy material logistics ERP built specifically for
            construction fleet dispatch, geofenced site alerts, and offline
            e-POD verification.
          </p>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>
              <Link href="/" className="hover:text-sky-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-sky-400 transition-colors"
              >
                About & Specs
              </Link>
            </li>
            <li>
              <Link
                href="/dispatch"
                className="hover:text-sky-400 transition-colors"
              >
                Dispatch Portal
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-sky-400 transition-colors"
              >
                Contact Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Modules */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
            C-TMS Modules
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>
              <span>GPS Fleet Telemetry (FR-1.2)</span>
            </li>
            <li>
              <span>5km Geofence Alerts (FR-1.3)</span>
            </li>
            <li>
              <span>Offline e-POD Receipts (FR-2.1)</span>
            </li>
            <li>
              <span>Maintenance Ticketing (FR-3.1)</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Specification Info */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
            System Spec
          </h4>
          <p className="text-xs text-slate-400 mb-2">C-TMS ERP Core</p>
          <p className="text-xs text-slate-400 mb-2">
            Status: Executive Functional Spec
          </p>
          <p className="text-xs text-sky-400 font-mono">July 2026 Edition</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© 2026 C-TMS ERP Core. All rights reserved.</p>
        <p>Prepared by Dereje Sebsibe & Bemnet Gudisa</p>
      </div>
    </footer>
  );
}
