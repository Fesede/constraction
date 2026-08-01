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

        {/* CTA BUTTON */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 active:scale-95 transition-all"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
