"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { BottomNav } from "./BottomNav";
import { Role } from "@/lib/navigation";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [role, setRole] = useState<Role>("Learner");

  const handleRoleChange = (newRole: Role) => {
    setRole(newRole);
    
    // Auto-redirect to the primary entry point for each role
    if (newRole === "Admin") {
      router.push("/admin/dashboard");
    } else if (newRole === "Tutor") {
      router.push("/tutor/queue");
    } else {
      router.push("/dashboard");
    }
  };

  const publicRoutes = ["/login", "/signup", "/onboarding"];
  const isPublicRoute =
    publicRoutes.includes(pathname) ||
    pathname?.startsWith("/verify-certificate");

  if (isPublicRoute) {
    return <main className="bg-slate-50 min-h-screen">{children}</main>;
  }

  return (
    <div className="flex h-screen bg-white overflow-hidden w-full">
      <Sidebar role={role} />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Topbar currentMode={role} onModeChange={handleRoleChange} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 pb-20 md:pb-8 relative">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
        <BottomNav role={role} />
      </div>
    </div>
  );
}
