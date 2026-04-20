import { LoginForm } from "@/components/auth/LoginForm";
import { Sparkles, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Left side: Form */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center px-8 sm:px-16 lg:px-24 bg-white z-10 border-r border-slate-200 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="w-full max-w-sm mx-auto">
          <div className="mb-10">
            <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl mb-6 tracking-tight shadow-sm">E</div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Welcome Back</h2>
            <p className="text-sm text-slate-500 mt-2 font-medium">Please enter your details to sign in.</p>
          </div>
          <LoginForm />
        </div>
      </div>
      
      {/* Right side: Visual Pattern & Quote */}
      <div className="hidden lg:flex lg:w-[55%] bg-slate-900 bg-grid-pattern relative flex-col justify-between p-12 lg:p-24 overflow-hidden">
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="relative z-10">
          <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            EliteCoach<span className="text-blue-400">.ai</span>
          </h1>
        </div>
        
        <div className="relative z-10 max-w-lg mb-12">
          <div className="mb-6 flex items-center gap-2 text-blue-400 font-semibold tracking-widest uppercase text-xs">
            <Sparkles size={16} /> Enterprise Platform
          </div>
          <h2 className="text-4xl font-semibold leading-tight text-white mb-6">
            Master the skills of tomorrow, guided by the intelligence of today.
          </h2>
          <p className="text-lg text-slate-300 font-medium border-l-2 border-blue-500 pl-4 py-1">
            "The personalized learning path adapted perfectly to my busy schedule while maintaining rigorous academic standards."
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-slate-300 text-sm">
              JD
            </div>
            <div>
              <p className="text-sm font-bold text-white">John Doe</p>
              <p className="text-xs text-slate-400">Product Manager, KPMG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
