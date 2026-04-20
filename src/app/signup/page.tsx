import { SignupForm } from "@/components/auth/SignupForm";
import { Sparkles } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Left side: Form */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center px-8 sm:px-16 lg:px-24 bg-white z-10 border-r border-slate-200 shadow-[4px_0_24px_rgba(0,0,0,0.02)] py-10 overflow-y-auto">
        <div className="w-full max-w-sm mx-auto my-auto">
          <div className="mb-10">
            <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl mb-6 tracking-tight shadow-sm">E</div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Create Account</h2>
            <p className="text-sm text-slate-500 mt-2 font-medium">Join Elite Coach AI and start your journey.</p>
          </div>
          <SignupForm />
        </div>
      </div>
      
      {/* Right side: Visual Pattern & Layout */}
      <div className="hidden lg:flex lg:w-[55%] bg-slate-900 bg-grid-pattern relative flex-col justify-between p-12 lg:p-24 overflow-hidden">
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
        
        <div className="relative z-10">
          <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            EliteCoach<span className="text-blue-400">.ai</span>
          </h1>
        </div>
        
        <div className="relative z-10 max-w-lg mb-12">
          <div className="mb-6 flex items-center gap-2 text-blue-400 font-semibold tracking-widest uppercase text-xs">
            <Sparkles size={16} /> Data-Driven Learning
          </div>
          <h2 className="text-4xl font-semibold leading-tight text-white mb-6">
            Scale your organization's intelligence in 16 weeks or less.
          </h2>
          <div className="grid grid-cols-2 gap-6 mt-12 border-t border-slate-800 pt-8">
            <div>
              <p className="text-3xl font-bold text-white mb-1">85%</p>
              <p className="text-sm font-medium text-slate-400">Increase in concept retention over 30 days</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1"><span className="text-blue-400">&lt;</span> 2.5s</p>
              <p className="text-sm font-medium text-slate-400">Average AI Tutor response latency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
