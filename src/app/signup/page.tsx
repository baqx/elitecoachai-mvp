import { SignupForm } from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <div className="flex bg-slate-50 items-center justify-center min-h-screen py-10">
      <div className="w-full max-w-sm p-8 bg-white shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-100 my-auto">
        <div className="mb-8 text-center">
          <div className="w-12 h-12 mx-auto rounded-xl bg-green-600 flex items-center justify-center text-white font-bold text-xl mb-4 tracking-tight shadow-md shadow-green-500/20">E</div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Create an Account</h2>
          <p className="text-sm text-slate-500 mt-2">Join Elite Coach AI today</p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
}
