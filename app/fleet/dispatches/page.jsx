"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Send,
  Truck,
  User,
  MapPin,
  Package,
  Plus,
  CheckCircle2,
  Clock,
  ArrowLeft,
  X,
} from "lucide-react";

export default function FleetDispatches() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New dispatch form state
  const [formData, setFormData] = useState({
    truckNo: "AA-3-9821",
    driver: "Dereje Sebsibe",
    material: "Ready-Mix Concrete (C-30)",
    quantity: "25 Tons",
    destination: "Lideta Hub Construction Site",
    estimatedMinutes: "35",
  });

  // Mock list of active and recent dispatches
  const [dispatches, setDispatches] = useState([
    {
      id: "DISP-901",
      truckNo: "AA-3-9821",
      driver: "Dereje Sebsibe",
      material: "Ready-Mix Concrete (C-30)",
      quantity: "25 Tons",
      destination: "Lideta Hub Construction Site",
      status: "In Transit",
      dispatchedAt: "09:15 AM",
      eta: "09:50 AM",
    },
    {
      id: "DISP-902",
      truckNo: "AA-3-4112",
      driver: "Bekele Tadesse",
      material: "Aggregate Grade 2",
      quantity: "30 Tons",
      destination: "Gotera Terminal Expansion",
      status: "Loading at Quarry",
      dispatchedAt: "09:30 AM",
      eta: "10:15 AM",
    },
    {
      id: "DISP-903",
      truckNo: "AA-3-7720",
      driver: "Alula Yohannes",
      material: "Reinforcement Steel Rebar",
      quantity: "18 Tons",
      destination: "Bole Terminal Site",
      status: "Delivered",
      dispatchedAt: "08:00 AM",
      eta: "Completed",
    },
  ]);

  // Submit handler for new dispatch creation
  const handleCreateDispatch = (e) => {
    e.preventDefault();
    const newEntry = {
      id: `DISP-${Math.floor(100 + Math.random() * 900)}`,
      truckNo: formData.truckNo,
      driver: formData.driver,
      material: formData.material,
      quantity: formData.quantity,
      destination: formData.destination,
      status: "In Transit",
      dispatchedAt: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      eta: `${formData.estimatedMinutes} mins`,
    };

    setDispatches([newEntry, ...dispatches]);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/fleet/dashboard"
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Dispatch & Trip Planner
            </h2>
            <p className="text-xs text-slate-500">
              Create new haulage orders and assign available drivers and heavy
              vehicles
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm self-start sm:self-auto"
        >
          <Plus size={16} />
          <span>New Dispatch Order</span>
        </button>
      </div>

      {/* Dispatch Metrics Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">
              Active En-Route Trips
            </p>
            <p className="text-2xl font-extrabold text-blue-600 mt-1">
              {dispatches.filter((d) => d.status !== "Delivered").length}{" "}
              Dispatches
            </p>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <Send size={20} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">
              Completed Deliveries Today
            </p>
            <p className="text-2xl font-extrabold text-emerald-600 mt-1">
              {dispatches.filter((d) => d.status === "Delivered").length + 14}{" "}
              Trips
            </p>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <CheckCircle2 size={20} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">
              Available Drivers & Trucks
            </p>
            <p className="text-2xl font-extrabold text-slate-800 mt-1">
              3 Idle Units
            </p>
          </div>
          <div className="p-3 bg-slate-100 text-slate-600 rounded-xl">
            <Truck size={20} />
          </div>
        </div>
      </div>

      {/* Dispatches List */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <Truck size={16} className="text-blue-600" /> Active & Scheduled
            Haulage Orders
          </h3>
          <span className="text-xs font-semibold text-slate-400">
            Total: {dispatches.length} Orders
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {dispatches.map((item) => (
            <div
              key={item.id}
              className="p-4 hover:bg-slate-50/80 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-blue-600 font-mono bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                    {item.id}
                  </span>
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
                    <Truck size={14} className="text-slate-400" />{" "}
                    {item.truckNo}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <User size={13} className="text-slate-400" /> Driver:{" "}
                    <strong className="text-slate-700">{item.driver}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-700 font-semibold">
                  <span className="flex items-center gap-1">
                    <Package size={14} className="text-blue-500" />{" "}
                    {item.material} ({item.quantity})
                  </span>
                </div>

                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin size={13} className="text-slate-400" /> Destination:{" "}
                  <span className="font-semibold text-slate-700">
                    {item.destination}
                  </span>
                </p>
              </div>

              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 border-slate-100 pt-3 md:pt-0 gap-2">
                <span
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                    item.status === "Delivered"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-blue-50 text-blue-700 border-blue-200"
                  }`}
                >
                  {item.status}
                </span>

                <div className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                  <Clock size={12} className="text-slate-400" /> ETA: {item.eta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: New Dispatch Creation Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-800">
                  Dispatch New Haulage Trip
                </h3>
                <p className="text-xs text-slate-500">
                  Assign heavy transport vehicle and driver to site delivery
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateDispatch} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Vehicle Plate No.
                  </label>
                  <select
                    value={formData.truckNo}
                    onChange={(e) =>
                      setFormData({ ...formData, truckNo: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-semibold text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="AA-3-9821">AA-3-9821 (Mixer Truck)</option>
                    <option value="AA-3-4112">AA-3-4112 (Dump Truck)</option>
                    <option value="AA-3-7720">AA-3-7720 (Flatbed Rebar)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Assigned Driver
                  </label>
                  <select
                    value={formData.driver}
                    onChange={(e) =>
                      setFormData({ ...formData, driver: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-semibold text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="Dereje Sebsibe">Dereje Sebsibe</option>
                    <option value="Bekele Tadesse">Bekele Tadesse</option>
                    <option value="Alula Yohannes">Alula Yohannes</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Material Description
                </label>
                <input
                  type="text"
                  value={formData.material}
                  onChange={(e) =>
                    setFormData({ ...formData, material: e.target.value })
                  }
                  placeholder="e.g. Ready-Mix Concrete (C-30)"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Quantity / Weight
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    placeholder="e.g. 25 Tons"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Est. Transit Time (Mins)
                  </label>
                  <input
                    type="number"
                    value={formData.estimatedMinutes}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        estimatedMinutes: e.target.value,
                      })
                    }
                    placeholder="35"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Destination Site
                </label>
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) =>
                    setFormData({ ...formData, destination: e.target.value })
                  }
                  placeholder="e.g. Lideta Hub Construction Site"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-600 font-bold hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors"
                >
                  <Send size={15} />
                  <span>Confirm Dispatch</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
