"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "./Sidebar";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Public routes where we don't want the sidebar
  const publicRoutes = ["/login", "/signup"];
  const isPublicRoute = publicRoutes.includes(pathname) || pathname?.startsWith("/verify-certificate");

  if (isPublicRoute) {
    return <main className="flex min-h-screen flex-col bg-slate-50">{children}</main>;
  }

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden w-full text-slate-900">
      <Sidebar />
      <main className="flex-1 overflow-y-auto mt-14 md:mt-0 p-4 md:p-8">
        <div className="max-w-6xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
