import { redirect } from "next/navigation";

export default function DriverPage() {
  // Automatically redirect /driver to /driver/dashboard
  redirect("/driver/dashboard");
}
