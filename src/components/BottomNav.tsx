"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_BY_ROLE, Role } from "@/lib/navigation";

interface BottomNavProps {
  role: Role;
}

export function BottomNav({ role }: BottomNavProps) {
  const pathname = usePathname();
  const sections = NAV_BY_ROLE[role];
  
  // Flatten all links from sections into one row for bottom nav
  const allLinks = sections.flatMap(s => s.links).slice(0, 5);

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 flex items-center justify-around px-2 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      {allLinks.map((link) => {
        const Icon = link.icon;
        const isActive =
          pathname === link.href ||
          (link.href !== "/" && pathname?.startsWith(link.href + "/"));
        
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`
              flex flex-col items-center justify-center gap-1 flex-1 py-1 px-2 rounded-xl transition-all active:scale-90
              ${isActive ? "text-blue-600" : "text-slate-400"}
            `}
          >
            <div className={`
              p-1 rounded-lg transition-colors
              ${isActive ? "bg-blue-50" : "bg-transparent"}
            `}>
              <Icon size={20} className={isActive ? "text-blue-600" : "text-slate-400"} />
            </div>
            <span className={`text-[10px] font-semibold ${isActive ? "text-blue-600" : "text-slate-500"}`}>
              {link.name.split(' ').pop()}
            </span>
            {isActive && (
              <div className="absolute top-0 w-8 h-1 bg-blue-600 rounded-b-full shadow-[0_2px_10px_rgba(37,99,235,0.4)]" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
