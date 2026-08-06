"use client";

import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function ClientPanelLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#F4F6F9] font-sans antialiased text-slate-900">
      {/* Shared Navigation Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        {/* Shared Top Header */}
        <Header />

        {/* Dynamic Page Content */}
        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
