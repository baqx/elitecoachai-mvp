"use client";

import { Bell, Search, ChevronDown, LayoutGrid, ShieldCheck, Headphones, Zap, Star } from "lucide-react";
import { MOCK_USER_PROFILE } from "@/lib/mock";
import { useState, useRef, useEffect } from "react";
import { Role } from "@/lib/navigation";

interface TopbarProps {
  currentMode: Role;
  onModeChange: (mode: Role) => void;
}

export function Topbar({ currentMode, onModeChange }: TopbarProps) {
  const profile = MOCK_USER_PROFILE;
  const [showModeSwitcher, setShowModeSwitcher] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowModeSwitcher(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const modes: { name: Role; icon: any; desc: string; color: string }[] = [
    { name: "Learner", icon: LayoutGrid, desc: "Personal learning path", color: "text-blue-500" },
    { name: "Admin",   icon: ShieldCheck, desc: "Enterprise management", color: "text-indigo-500" },
    { name: "Tutor",   icon: Headphones,  desc: "Student support queue", color: "text-emerald-500" },
  ];

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0 shadow-sm z-30">
      {/* ── Left: Search ────────────────────────────── */}
      <div className="relative hidden md:flex items-center">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />
        <input
          type="text"
          placeholder="Search modules..."
          className="pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white w-80 lg:w-96 transition-all"
        />
      </div>

      <div className="md:hidden" /> {/* Spacer for mobile */}

      {/* ── Right side ──────────────────────────────── */}
      <div className="flex items-center gap-4">
        
        {/* XP / Streak (Learner only indicator) */}
        {currentMode === "Learner" && (
          <div className="hidden lg:flex items-center gap-3 mr-2 animate-fade-in">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 border border-amber-100 rounded-full text-amber-700 shadow-sm">
              <Zap size={14} className="fill-amber-500 text-amber-500" />
              <span className="text-xs font-bold tracking-tight">{profile.xpPoints.toLocaleString()} XP</span>
            </div>
          </div>
        )}

        <div className="h-6 w-px bg-slate-200 hidden sm:block" />

        {/* Perspective Switcher */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setShowModeSwitcher(!showModeSwitcher)}
            className="flex items-center gap-2.5 px-3 py-2 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-slate-100 group active:scale-95"
          >
            <div className={`w-2 h-2 rounded-full ${currentMode === 'Learner' ? 'bg-blue-500' : currentMode === 'Admin' ? 'bg-indigo-500' : 'bg-emerald-500'} animate-pulse`} />
            <span className="text-sm font-semibold text-slate-700">{currentMode} Perspective</span>
            <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${showModeSwitcher ? 'rotate-180' : ''}`} />
          </button>

          {showModeSwitcher && (
            <div className="absolute top-full right-0 mt-3 w-72 bg-white border border-slate-200 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-2.5 animate-fade-in-up z-50">
              <div className="px-3 py-3 border-b border-slate-50 mb-1">
                <p className="text-xs font-semibold text-slate-400 leading-none">Switch Enterprise View</p>
              </div>
              <div className="space-y-1">
                {modes.map((m) => (
                  <button
                    key={m.name}
                    onClick={() => {
                        onModeChange(m.name);
                        setShowModeSwitcher(false);
                    }}
                    className={`w-full flex items-center gap-3.5 p-3 rounded-xl transition-all text-left active:scale-[0.98]
                      ${currentMode === m.name ? 'bg-blue-50' : 'hover:bg-slate-50'}`}
                  >
                    <div className={`p-2.5 rounded-xl bg-white border shadow-sm ${m.color} ${currentMode === m.name ? 'border-blue-100' : 'border-slate-100'}`}>
                      <m.icon size={18} />
                    </div>
                    <div className="flex-1">
                      <p className={`text-xs font-bold ${currentMode === m.name ? 'text-blue-700' : 'text-slate-900'} leading-none`}>{m.name} Portal</p>
                      <p className="text-[10px] font-medium text-slate-500 mt-1.5 leading-none">{m.desc}</p>
                    </div>
                    {currentMode === m.name && (
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-lg shadow-blue-400" />
                    )}
                  </button>
                ))}
              </div>
              
              <div className="mt-3 pt-3 border-t border-slate-50 px-2 pb-2">
                 <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-2.5">
                    <Star size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-[10px] text-amber-800 leading-relaxed font-semibold">
                       You have multi-role access as an <span className="font-bold underline">Enterprise Partner</span>.
                    </p>
                 </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button className="relative p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-slate-500 hover:text-slate-900 border border-transparent hover:border-slate-100 active:scale-95">
            <Bell size={18} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
          </button>

          <div className="h-8 w-px bg-slate-200 mx-1 hidden sm:block" />

          {/* Profile Click Target */}
          <div className="flex items-center gap-3 pl-1 group cursor-pointer transition-all hover:bg-slate-50 p-1.5 rounded-xl active:scale-95">
           
            <div style={{borderRadius:"50%"}} className="w-10 h-10 bg-slate-900 flex items-center justify-center text-white font-bold text-xs shadow-xl shadow-slate-200 group-hover:shadow-blue-200 group-hover:bg-blue-600 transition-all">
              {profile.initials}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
