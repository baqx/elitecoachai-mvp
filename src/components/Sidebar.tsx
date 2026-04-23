"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, Zap } from "lucide-react";
import { MOCK_USER_PROFILE } from "@/lib/mock";
import { NAV_BY_ROLE, Role } from "@/lib/navigation";

interface SidebarProps {
  role: Role;
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const profile = MOCK_USER_PROFILE;
  const sections = NAV_BY_ROLE[role];

  return (
    <aside
      className="hidden md:flex h-screen w-64 flex-col bg-slate-950 text-slate-100 border-r border-white/5 flex-shrink-0"
    >
      <div className="px-6 py-8">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 active:scale-[0.98] transition-transform"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-lg shadow-xl shadow-blue-500/20">
            E
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white leading-none">
              EliteCoach AI
            </span>
           
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-8 overflow-y-auto scrollbar-none">
        {sections.map((section) => (
          <div key={section.section}>
            <p className="px-3 text-[11px] font-semibold text-slate-500 mb-4">
              {section.section}
            </p>
            <div className="space-y-1">
              {section.links.map((link) => {
                const Icon = link.icon;
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname?.startsWith(link.href + "/"));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                      transition-all duration-200 group relative active:scale-[0.98]
                      ${isActive
                        ? "bg-white/10 text-white shadow-2xl"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      size={18}
                      className={isActive ? "text-blue-500" : "text-slate-500 group-hover:text-blue-500 transition-colors"}
                    />
                    {link.name}
                    {isActive && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-blue-500 rounded-l-full shadow-lg shadow-blue-500/50" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer: User Perspective */}
      <div className="mt-auto border-t border-white/5 p-4 space-y-2">
         <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-xs shadow-lg">
                {profile.initials}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white truncate">{profile.name}</p>
                <p className="text-[10px] font-medium text-slate-500 truncate">{role} View</p>
              </div>
            </div>
         </div>
         
         <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-all active:scale-[0.98]">
           <LogOut size={16} />
           Sign Out
         </button>
      </div>
    </aside>
  );
}
