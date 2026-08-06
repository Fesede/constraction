import { redirect } from "next/navigation";

export default function ManagerPage() {
  // Automatically redirect /manager to /manager/dashboard
  redirect("/manager/dashboard");
}
