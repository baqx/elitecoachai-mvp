import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex bg-slate-50 items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-8 bg-white shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-100">
        <div className="mb-8 text-center">
          <div className="w-12 h-12 mx-auto rounded-xl bg-green-600 flex items-center justify-center text-white font-bold text-xl mb-4 tracking-tight shadow-md shadow-green-500/20">E</div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Welcome Back</h2>
          <p className="text-sm text-slate-500 mt-2">Sign in to your Elite Coach AI account</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
