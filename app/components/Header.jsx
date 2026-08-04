import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LOGO & BRAND NAME */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden">
            <Image
              src="/logo.png"
              alt="ConstructCo Logo"
              width={36}
              height={36}
              priority
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Construct<span className="text-sky-500">Co</span>
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

        {/* AUTH & CTA BUTTONS */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Log In Link */}
          <Link
            href="/login"
            className="text-sm font-semibold text-slate-300 hover:text-white transition-colors px-2 py-1"
          >
            Log in
          </Link>

          {/* Sign Up Button */}
          <Link
            href="/signup"
            className="rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-600 active:scale-95 transition-all"
          >
            Sign up
          </Link>

          {/* Get a Quote Button */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 active:scale-95 transition-all"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
