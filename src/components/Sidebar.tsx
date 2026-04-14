"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  BarChart, 
  ListOrdered, 
  DollarSign,
  Menu,
  X
} from "lucide-react";

export type Role = "Learner" | "Admin" | "Tutor";

export function Sidebar() {
  const [role, setRole] = useState<Role>("Learner");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linksByRole = {
    Learner: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "Courses", href: "/courses", icon: BookOpen },
    ],
    Admin: [
      { name: "Admin Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
      { name: "Users", href: "/admin/users", icon: Users },
      { name: "Reports", href: "/admin/reports", icon: BarChart },
    ],
    Tutor: [
      { name: "Queue", href: "/tutor/queue", icon: ListOrdered },
      { name: "Earnings", href: "/tutor/earnings", icon: DollarSign },
    ],
  };

  const currentLinks = linksByRole[role];

  return (
    <>
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md text-slate-700"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed top-0 left-0 h-screen w-64 bg-white border-r border-slate-200 z-40 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:flex md:flex-col shadow-sm md:shadow-none
      `}>
        <div className="p-6 border-b border-slate-100">
          <Link href="/dashboard" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold tracking-tight">E</div>
            <h1 className="text-xl font-bold tracking-tight text-slate-800">
              EliteCoach<span className="text-blue-600">.ai</span>
            </h1>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          <div className="mb-4">
            <p className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              Menu
            </p>
          </div>
          {currentLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
            return (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive 
                    ? "bg-blue-50 text-blue-700 shadow-sm shadow-green-100/50" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}
                `}
              >
                <Icon size={18} className={isActive ? "text-blue-600" : "text-slate-400"} />
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-5 border-t border-slate-100 bg-slate-50/50">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 block">
            Demo User Role
          </label>
          <div className="flex bg-slate-200/60 p-1 rounded-lg">
            {(["Learner", "Admin", "Tutor"] as Role[]).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`
                  flex-1 text-[11px] py-1.5 font-semibold rounded-md transition-all duration-200
                  ${role === r 
                    ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-900/5" 
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"}
                `}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
