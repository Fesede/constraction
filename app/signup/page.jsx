"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import {
  User,
  Mail,
  Phone,
  ShieldCheck,
  Truck,
  Building2,
  HardHat,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Upload,
  Image as ImageIcon,
  X,
} from "lucide-react";

// Role configurations for the bidding marketplace
const roleConfigs = {
  Driver: {
    id: "Driver",
    title: "Truck Driver",
    desc: "Apply to project transport & haulage listings",
    icon: Truck,
    requiredUploads: [
      { key: "vehicle_photo", label: "Car / Vehicle Photo", required: true },
      { key: "person_photo", label: "Driver Person Photo", required: true },
    ],
  },
  SiteManager: {
    id: "SiteManager",
    title: "Site Manager",
    desc: "Apply to manage receiving & site operations",
    icon: Building2,
    requiredUploads: [
      {
        key: "person_photo",
        label: "Site Manager Person Photo",
        required: true,
      },
    ],
  },
  FleetManager: {
    id: "FleetManager",
    title: "Fleet Manager",
    desc: "Apply to dispatch fleets & oversee logistics",
    icon: HardHat,
    requiredUploads: [
      {
        key: "person_photo",
        label: "Fleet Manager Person Photo",
        required: true,
      },
    ],
  },
  Client: {
    id: "Client",
    title: "Project Client",
    desc: "Post construction projects & select applicants",
    icon: Briefcase,
    requiredUploads: [
      {
        key: "person_photo",
        label: "Client / Representative Photo",
        required: true,
      },
    ],
  },
};

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    role: "Driver",
  });

  const [uploadedPhotos, setUploadedPhotos] = useState({});
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleSelect = (roleId) => {
    setFormData((prev) => ({ ...prev, role: roleId }));
  };

  const handlePhotoUpload = (key, event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setStatusMessage({
        type: "error",
        text: "Please upload a valid image file (PNG, JPG, WEBP).",
      });
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    setUploadedPhotos((prev) => ({
      ...prev,
      [key]: {
        file,
        previewUrl,
        name: file.name,
      },
    }));
  };

  const handleRemovePhoto = (key) => {
    setUploadedPhotos((prev) => {
      const updated = { ...prev };
      if (updated[key]?.previewUrl) {
        URL.revokeObjectURL(updated[key].previewUrl);
      }
      delete updated[key];
      return updated;
    });
  };

  const currentRole = roleConfigs[formData.role] || roleConfigs.Driver;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    // Validate that required photos are attached
    for (const slot of currentRole.requiredUploads) {
      if (slot.required && !uploadedPhotos[slot.key]) {
        setStatusMessage({
          type: "error",
          text: `Please upload the required photo: ${slot.label}`,
        });
        setLoading(false);
        return;
      }
    }

    try {
      const submissionData = new FormData();
      submissionData.append("full_name", formData.full_name);
      submissionData.append("email", formData.email);
      submissionData.append("phone_number", formData.phone_number);
      submissionData.append("role", formData.role);

      Object.keys(uploadedPhotos).forEach((key) => {
        if (uploadedPhotos[key]?.file) {
          submissionData.append(key, uploadedPhotos[key].file);
        }
      });

      const res = await fetch("/api/users/signup", {
        method: "POST",
        body: submissionData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed.");
      }

      setStatusMessage({
        type: "success",
        text: "Registration successful! You can now participate in project postings and applications.",
      });

      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        role: "Driver",
      });
      setUploadedPhotos({});
    } catch (err) {
      setStatusMessage({
        type: "error",
        text: err.message || "An error occurred during submission.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#030712] text-slate-100">
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-80px)]">
        {/* --- LEFT PANEL --- */}
        <div className="lg:col-span-5 bg-[#070e20] border-r border-slate-800/80 p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-8">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Project Marketplace Portal</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Post Projects & <br />
              <span className="text-amber-500">Apply for Work.</span>
            </h2>

            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Clients post construction contracts; Site Managers, Fleet
              Managers, and Drivers upload credentials and submit applications
              for selection.
            </p>
          </div>

          <div className="my-10 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300">
                <strong className="text-white">Clients:</strong> Post
                construction tasks and review applicant profiles.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300">
                <strong className="text-white">Drivers:</strong> Upload vehicle
                and driver photo proof to apply.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300">
                <strong className="text-white">Managers:</strong> Upload profile
                photos to apply for site and fleet management.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 text-xs text-slate-500">
            Internal Operations Platform &bull; C-TMS ERP 2026
          </div>
        </div>

        {/* --- RIGHT FORM PANEL --- */}
        <div className="lg:col-span-7 bg-[#030712] p-8 lg:p-12 flex items-center justify-center">
          <div className="max-w-xl w-full space-y-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Self-Registration
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                Select your platform role and upload the required photo
                verification files.
              </p>
            </div>

            {/* Status Alert */}
            {statusMessage.text && (
              <div
                className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
                  statusMessage.type === "success"
                    ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                    : "bg-rose-500/10 border border-rose-500/30 text-rose-400"
                }`}
              >
                {statusMessage.type === "success" ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Role Selection Grid */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Select Your Role <span className="text-amber-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.values(roleConfigs).map((item) => {
                    const Icon = item.icon;
                    const isSelected = formData.role === item.id;
                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => handleRoleSelect(item.id)}
                        className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between relative overflow-hidden ${
                          isSelected
                            ? "bg-amber-500/10 border-amber-500 text-white shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/50"
                            : "bg-[#0b1329] border-slate-800 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <Icon
                              className={`w-5 h-5 ${
                                isSelected ? "text-amber-400" : "text-slate-500"
                              }`}
                            />
                            <p
                              className={`text-xs font-bold ${
                                isSelected ? "text-amber-400" : "text-slate-200"
                              }`}
                            >
                              {item.title}
                            </p>
                          </div>
                          <p className="text-[10px] text-slate-500 leading-snug mb-3">
                            {item.desc}
                          </p>
                        </div>

                        <div className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800/80 text-amber-400 border border-slate-700 w-fit">
                          Requires {item.requiredUploads.length} Photo{" "}
                          {item.requiredUploads.length > 1
                            ? "Uploads"
                            : "Upload"}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Upload Input Fields */}
              <div className="p-4 rounded-xl bg-[#070e20] border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-amber-400" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      Required Photos for {currentRole.title}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentRole.requiredUploads.map((uploadSlot) => {
                    const uploaded = uploadedPhotos[uploadSlot.key];

                    return (
                      <div
                        key={uploadSlot.key}
                        className="p-3 rounded-lg bg-[#0b1329] border border-slate-800 flex flex-col justify-between"
                      >
                        <p className="text-xs font-semibold text-slate-300 mb-2">
                          {uploadSlot.label}{" "}
                          <span className="text-amber-500">*</span>
                        </p>

                        {uploaded ? (
                          <div className="relative group rounded-lg overflow-hidden border border-slate-700 aspect-video bg-slate-900 flex items-center justify-center">
                            <img
                              src={uploaded.previewUrl}
                              alt={uploadSlot.label}
                              className="w-full h-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => handleRemovePhoto(uploadSlot.key)}
                              className="absolute top-2 right-2 p-1.5 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-all shadow-md"
                              title="Remove photo"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                            <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 px-2 py-1 text-[10px] text-slate-300 truncate">
                              {uploaded.name}
                            </div>
                          </div>
                        ) : (
                          <label className="border-2 border-dashed border-slate-700 hover:border-amber-500/60 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-all bg-[#070e20]/50 hover:bg-[#070e20]">
                            <Upload className="w-5 h-5 text-amber-400 mb-1" />
                            <span className="text-xs font-semibold text-slate-300">
                              Upload Photo File
                            </span>
                            <span className="text-[10px] text-slate-500 mt-0.5">
                              PNG, JPG, WEBP
                            </span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) =>
                                handlePhotoUpload(uploadSlot.key, e)
                              }
                              className="hidden"
                            />
                          </label>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Text Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Full Name <span className="text-amber-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
                    <input
                      type="text"
                      name="full_name"
                      required
                      maxLength={100}
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0b1329] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Email Address <span className="text-amber-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
                    <input
                      type="email"
                      name="email"
                      required
                      maxLength={100}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@ctms.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0b1329] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
                    <input
                      type="tel"
                      name="phone_number"
                      maxLength={20}
                      value={formData.phone_number}
                      onChange={handleChange}
                      placeholder="+251 91 234 5678"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0b1329] border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3.5 px-6 rounded-xl text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
              >
                {loading ? (
                  <span>Submitting Registration...</span>
                ) : (
                  <>
                    <span>Submit Registration</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="pt-4 border-t border-slate-800/80 text-center">
              <p className="text-xs text-slate-400">
                Already registered?{" "}
                <Link
                  href="/login"
                  className="text-amber-400 hover:underline font-semibold"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
