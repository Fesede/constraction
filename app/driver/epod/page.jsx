"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  FileSignature,
  CheckCircle2,
  RotateCcw,
  Wifi,
  WifiOff,
  ArrowLeft,
  Building2,
  PackageCheck,
} from "lucide-react";

export default function DriverEPOD() {
  const [deliveredQty, setDeliveredQty] = useState("25.5");
  const [siteManagerName, setSiteManagerName] = useState("");
  const [isSigned, setIsSigned] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  // Simulated Canvas for Digital Signature
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#0f172a";
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
    setIsSigned(true);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setIsSigned(false);
  };

  const handleSubmitEPOD = (e) => {
    e.preventDefault();
    if (!siteManagerName || !isSigned) return;

    // Process form submission (handles local cache if offline)
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Header / Back Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/driver/dashboard"
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Digital Proof of Delivery (e-POD)
            </h2>
            <p className="text-xs text-slate-500">
              Trip #TRIP-801 • Material Handover Sign-off
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsOffline(!isOffline)}
          className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border transition-colors ${
            !isOffline
              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
              : "bg-amber-50 text-amber-700 border-amber-200"
          }`}
        >
          {!isOffline ? <Wifi size={14} /> : <WifiOff size={14} />}
          <span>{!isOffline ? "Online Mode" : "Offline Cache Mode"}</span>
        </button>
      </div>

      {isSubmitted ? (
        /* Confirmation Screen */
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={36} />
          </div>
          <h3 className="text-xl font-bold text-slate-800">
            Delivery Sign-Off Completed!
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            {isOffline
              ? "Receipt captured successfully! Saved to offline storage and will sync automatically when online."
              : "e-POD receipt uploaded to central C-TMS server."}
          </p>
          <div className="pt-4">
            <Link
              href="/driver/dashboard"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      ) : (
        /* Main e-POD Offloading Form */
        <form
          onSubmit={handleSubmitEPOD}
          className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6 shadow-sm space-y-6"
        >
          {/* Site & Material Details */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mt-0.5">
                <Building2 size={18} />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-bold uppercase">
                  Delivery Destination
                </p>
                <p className="text-sm font-bold text-slate-800">
                  Lideta Hub Construction Site
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg mt-0.5">
                <PackageCheck size={18} />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-bold uppercase">
                  Material Cargo
                </p>
                <p className="text-sm font-bold text-slate-800">
                  Ready-Mix Concrete (C-30)
                </p>
              </div>
            </div>
          </div>

          {/* Offloaded Quantity & Receiver Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Verified Quantity (Tons / m³)
              </label>
              <input
                type="number"
                step="0.1"
                value={deliveredQty}
                onChange={(e) => setDeliveredQty(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Site Manager Name
              </label>
              <input
                type="text"
                placeholder="Enter receiving engineer's full name"
                value={siteManagerName}
                onChange={(e) => setSiteManagerName(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Digital Signature Pad */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1.5">
                <FileSignature size={15} /> Site Manager Digital Signature
              </label>
              <button
                type="button"
                onClick={clearSignature}
                className="text-xs text-slate-500 hover:text-red-600 flex items-center gap-1 transition-colors"
              >
                <RotateCcw size={12} /> Clear Canvas
              </button>
            </div>

            <div className="border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 overflow-hidden touch-none relative">
              <canvas
                ref={canvasRef}
                width={600}
                height={160}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                className="w-full h-40 cursor-crosshair"
              />
              {!isSigned && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-slate-400 text-xs">
                  Sign here using touch or mouse
                </div>
              )}
            </div>
          </div>

          {/* Submit e-POD Button */}
          <button
            type="submit"
            disabled={!siteManagerName || !isSigned}
            className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 px-4 rounded-xl text-sm transition-colors shadow-sm ${
              siteManagerName && isSigned
                ? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
          >
            <CheckCircle2 size={18} />
            <span>Confirm & Submit e-POD Sign-Off</span>
          </button>
        </form>
      )}
    </div>
  );
}
