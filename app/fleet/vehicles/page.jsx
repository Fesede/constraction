"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Truck,
  Wrench,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Plus,
  ArrowLeft,
  Search,
  ShieldAlert,
  Calendar,
  X,
} from "lucide-react";

export default function FleetVehicles() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Vehicle registry mock data
  const [vehicles, setVehicles] = useState([
    {
      id: "AA-3-9821",
      type: "Concrete Mixer Truck",
      makeModel: "Mercedes-Benz Actros 3340",
      status: "Operational",
      assignedDriver: "Dereje Sebsibe",
      odometer: "142,500 km",
      nextService: "145,000 km",
      lastInspection: "2026-07-20",
      healthScore: "98%",
    },
    {
      id: "AA-3-4112",
      type: "Heavy Dump Truck",
      makeModel: "Volvo FMX 440",
      status: "Maintenance Due",
      assignedDriver: "Bekele Tadesse",
      odometer: "189,200 km",
      nextService: "188,000 km",
      lastInspection: "2026-06-15",
      healthScore: "74%",
    },
    {
      id: "AA-3-7720",
      type: "Flatbed Heavy Hauler",
      makeModel: "MAN TGS 33.400",
      status: "Operational",
      assignedDriver: "Alula Yohannes",
      odometer: "96,100 km",
      nextService: "100,000 km",
      lastInspection: "2026-07-28",
      healthScore: "95%",
    },
    {
      id: "AA-3-5501",
      type: "Bulk Cement Tanker",
      makeModel: "Scania R500",
      status: "In Workshop",
      assignedDriver: "Unassigned",
      odometer: "215,800 km",
      nextService: "Immediate",
      lastInspection: "2026-08-01",
      healthScore: "62%",
    },
  ]);

  // Form state for adding new vehicle
  const [newVehicle, setNewVehicle] = useState({
    id: "",
    type: "Concrete Mixer Truck",
    makeModel: "",
    assignedDriver: "Unassigned",
    odometer: "",
  });

  const handleAddVehicle = (e) => {
    e.preventDefault();
    const entry = {
      id: newVehicle.id || `AA-3-${Math.floor(1000 + Math.random() * 9000)}`,
      type: newVehicle.type,
      makeModel: newVehicle.makeModel || "Standard Hauler",
      status: "Operational",
      assignedDriver: newVehicle.assignedDriver,
      odometer: `${newVehicle.odometer || "0"} km`,
      nextService: "5,000 km",
      lastInspection: new Date().toISOString().split("T")[0],
      healthScore: "100%",
    };
    setVehicles([entry, ...vehicles]);
    setIsModalOpen(false);
  };

  const filteredVehicles = vehicles.filter((v) => {
    const matchesSearch =
      v.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.makeModel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.assignedDriver.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = filterStatus === "All" || v.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

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
              Vehicle Registry & Maintenance
            </h2>
            <p className="text-xs text-slate-500">
              Manage heavy transport fleet inventory, service schedules, and
              health diagnostics
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm self-start sm:self-auto"
        >
          <Plus size={16} />
          <span>Register New Vehicle</span>
        </button>
      </div>

      {/* Fleet Fleet Status Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">
              Active Operational Vehicles
            </p>
            <p className="text-2xl font-extrabold text-emerald-600 mt-1">
              {vehicles.filter((v) => v.status === "Operational").length} Units
            </p>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <CheckCircle2 size={22} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">
              Service / Checks Due
            </p>
            <p className="text-2xl font-extrabold text-amber-600 mt-1">
              {vehicles.filter((v) => v.status === "Maintenance Due").length}{" "}
              Vehicles
            </p>
          </div>
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
            <Clock size={22} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase">
              In Workshop Repair
            </p>
            <p className="text-2xl font-extrabold text-red-600 mt-1">
              {vehicles.filter((v) => v.status === "In Workshop").length} Units
            </p>
          </div>
          <div className="p-3 bg-red-50 text-red-600 rounded-xl">
            <Wrench size={22} />
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search
            size={16}
            className="absolute left-3 top-2.5 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search by plate no, model, or driver..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500">
            Filter Status:
          </span>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="All">All Vehicles</option>
            <option value="Operational">Operational</option>
            <option value="Maintenance Due">Maintenance Due</option>
            <option value="In Workshop">In Workshop</option>
          </select>
        </div>
      </div>

      {/* Vehicles Table / Grid */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <Truck size={16} className="text-blue-600" /> Managed Vehicles
            Registry
          </h3>
          <span className="text-xs font-semibold text-slate-400">
            Showing {filteredVehicles.length} Vehicles
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px]">
                <th className="p-3.5 pl-4">Vehicle Plate & Model</th>
                <th className="p-3.5">Assigned Driver</th>
                <th className="p-3.5">Odometer</th>
                <th className="p-3.5">Next Service</th>
                <th className="p-3.5">Health Score</th>
                <th className="p-3.5 pr-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filteredVehicles.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50/80 transition-colors"
                >
                  <td className="p-3.5 pl-4">
                    <p className="font-bold text-slate-800 font-mono text-xs">
                      {item.id}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {item.makeModel} •{" "}
                      <span className="text-slate-400">{item.type}</span>
                    </p>
                  </td>
                  <td className="p-3.5 font-semibold text-slate-700">
                    {item.assignedDriver}
                  </td>
                  <td className="p-3.5 text-slate-600">{item.odometer}</td>
                  <td className="p-3.5 text-slate-600">{item.nextService}</td>
                  <td className="p-3.5 font-bold text-blue-600">
                    {item.healthScore}
                  </td>
                  <td className="p-3.5 pr-4 text-right">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                        item.status === "Operational"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : item.status === "Maintenance Due"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-red-50 text-red-700 border-red-200"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal: New Vehicle Registration */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-800">
                  Register Heavy Vehicle
                </h3>
                <p className="text-xs text-slate-500">
                  Add a new transport unit to the fleet directory
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAddVehicle} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Plate Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. AA-3-9988"
                    value={newVehicle.id}
                    onChange={(e) =>
                      setNewVehicle({ ...newVehicle, id: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-semibold text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Vehicle Category
                  </label>
                  <select
                    value={newVehicle.type}
                    onChange={(e) =>
                      setNewVehicle({ ...newVehicle, type: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-semibold text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="Concrete Mixer Truck">
                      Concrete Mixer Truck
                    </option>
                    <option value="Heavy Dump Truck">Heavy Dump Truck</option>
                    <option value="Flatbed Heavy Hauler">
                      Flatbed Heavy Hauler
                    </option>
                    <option value="Bulk Cement Tanker">
                      Bulk Cement Tanker
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Make & Model
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mercedes-Benz Actros 3340"
                  value={newVehicle.makeModel}
                  onChange={(e) =>
                    setNewVehicle({ ...newVehicle, makeModel: e.target.value })
                  }
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Current Odometer (km)
                  </label>
                  <input
                    type="number"
                    placeholder="120000"
                    value={newVehicle.odometer}
                    onChange={(e) =>
                      setNewVehicle({ ...newVehicle, odometer: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Assign Driver
                  </label>
                  <select
                    value={newVehicle.assignedDriver}
                    onChange={(e) =>
                      setNewVehicle({
                        ...newVehicle,
                        assignedDriver: e.target.value,
                      })
                    }
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-semibold text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="Unassigned">Unassigned</option>
                    <option value="Dereje Sebsibe">Dereje Sebsibe</option>
                    <option value="Bekele Tadesse">Bekele Tadesse</option>
                    <option value="Alula Yohannes">Alula Yohannes</option>
                  </select>
                </div>
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
                  <Truck size={15} />
                  <span>Add Vehicle</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
