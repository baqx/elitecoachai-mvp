"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, User, AlertCircle, Eye, EyeOff, Building2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function SignupForm() {
  const router = useRouter();
  const [name,     setName]     = useState("");
  const [org,      setOrg]      = useState("");
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [showPwd,  setShowPwd]  = useState(false);
  const [errors,   setErrors]   = useState<{
    name?: string; org?: string; email?: string; password?: string;
  }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!name)    e.name    = "Full name is required";
    if (!email)   e.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = "Invalid email address";
    if (!password)              e.password = "Password is required";
    else if (password.length < 8) e.password = "At least 8 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) router.push("/onboarding");
  };

  const inputBase =
    "w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all";

  const Field = ({
    icon: Icon,
    label,
    error,
    children,
  }: {
    icon: React.ElementType;
    label: string;
    error?: string;
    children: React.ReactNode;
  }) => (
    <div className="space-y-1.5">
      <label className="text-sm font-semibold text-slate-700">{label}</label>
      <div className="relative">
        <Icon
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
        {children}
      </div>
      {error && (
        <p className="text-red-500 text-xs flex items-center gap-1">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field icon={User} label="Full name" error={errors.name}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Amaka Okonkwo"
            className={`${inputBase} ${errors.name ? "border-red-400" : "border-slate-200"}`}
          />
        </Field>

        <Field icon={Building2} label="Organisation (optional)" error={errors.org}>
          <input
            type="text"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            placeholder="Access Bank, KPMG..."
            className={`${inputBase} border-slate-200`}
          />
        </Field>

        <Field icon={Mail} label="Work email" error={errors.email}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className={`${inputBase} ${errors.email ? "border-red-400" : "border-slate-200"}`}
          />
        </Field>

        <Field icon={Lock} label="Password" error={errors.password}>
          <input
            type={showPwd ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Min. 8 characters"
            className={`${inputBase} pr-10 ${errors.password ? "border-red-400" : "border-slate-200"}`}
          />
          <button
            type="button"
            onClick={() => setShowPwd(!showPwd)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </Field>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 transition-all text-sm mt-2"
        >
          Create Account — Free
        </button>
      </form>

      <p className="mt-4 text-center text-xs text-slate-400">
        By signing up you agree to our{" "}
        <a href="#" className="text-blue-600 hover:underline">Terms</a> and{" "}
        <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
      </p>

      <div className="mt-6 flex items-center gap-3">
        <div className="h-px bg-slate-200 flex-1" />
        <span className="text-xs font-medium text-slate-400">or sign up with</span>
        <div className="h-px bg-slate-200 flex-1" />
      </div>

      <div className="mt-5 space-y-3">
        <button className="w-full flex items-center justify-center gap-3 py-3 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-sm transition-colors shadow-sm">
          <svg className="w-4 h-4 text-[#00a4ef]" viewBox="0 0 21 21">
            <path fill="currentColor" d="M10 0H0v10h10V0zM21 0H11v10h10V0zM10 11H0v10h10V11zm11 0H11v10h10V11z" />
          </svg>
          Sign up with Microsoft / SAML
        </button>
        <button className="w-full flex items-center justify-center gap-3 py-3 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-sm transition-colors shadow-sm">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign up with Google
        </button>
      </div>

      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-blue-600 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
