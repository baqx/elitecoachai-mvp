"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Mock login handling
      router.push("/dashboard");
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5 text-left">
          <label className="text-sm font-semibold text-slate-700">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com" 
              className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-transparent'}`} 
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/>{errors.email}</p>}
        </div>
        
        <div className="space-y-1.5 text-left">
           <div className="flex justify-between items-center">
             <label className="text-sm font-semibold text-slate-700">Password</label>
             <a href="#" className="text-xs text-blue-600 font-medium hover:underline">Forgot password?</a>
           </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${errors.password ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-transparent'}`} 
            />
          </div>
          {errors.password && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/>{errors.password}</p>}
        </div>
        
        <button type="submit" className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-colors mt-4">
          Sign In
        </button>
      </form>

      <div className="mt-6 flex items-center gap-4">
        <div className="h-px bg-slate-200 flex-1"></div>
        <span className="text-xs font-medium text-slate-400 uppercase">Or continue with</span>
        <div className="h-px bg-slate-200 flex-1"></div>
      </div>

      <div className="mt-6 space-y-3">
        <button className="w-full flex items-center justify-center gap-3 py-2.5 border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors">
          <svg className="w-4 h-4 text-[#00a4ef]" viewBox="0 0 21 21"><path fill="currentColor" d="M10 0H0v10h10V0zM21 0H11v10h10V0zM10 11H0v10h10V11zm11 0H11v10h10V11z" /></svg>
          Login with Microsoft / SAML
        </button>
        <button className="w-full flex items-center justify-center gap-3 py-2.5 border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Login with Google
        </button>
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        Don't have an account? <Link href="/signup" className="text-blue-600 font-semibold hover:underline">Sign up</Link>
      </p>
    </div>
  );
}
