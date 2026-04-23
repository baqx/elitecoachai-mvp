import { LoginForm } from "@/components/auth/LoginForm";
import { Shield, TrendingUp, Users } from "lucide-react";

const stats = [
  { label: "Active Learners",   value: "12,400+" },
  { label: "Courses Available", value: "80+"     },
  { label: "Completion Rate",   value: "71%"     },
];

const testimonial = {
  quote:
    "The AI-powered personalized path got me promoted in 4 months. Nothing compares to how targeted the learning felt.",
  author: "Femi Adesanya",
  title:  "Product Lead, Access Bank",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* ── Left: Form ─────────────────────────────── */}
      <div className="w-full lg:w-[48%] flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-24 bg-white py-12">
        <div className="w-full max-w-md mx-auto">
          {/* Brand mark */}
          <div className="flex items-center gap-2.5 mb-10">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-200">
              E
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              EliteCoach<span className="text-blue-600">.ai</span>
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
            Welcome back
          </h1>
          <p className="text-base text-slate-500 mb-8">
            Sign in to continue your learning journey.
          </p>

          <LoginForm />
        </div>
      </div>

      {/* ── Right: Hero Panel ──────────────────────── */}
      <div className="hidden lg:flex lg:w-[52%] relative overflow-hidden flex-col bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
        {/* dot texture */}
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />

        {/* Decorative orbs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-indigo-600/15 blur-3xl" />

        <div className="relative z-10 flex flex-col justify-between h-full p-12 xl:p-16">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 w-fit">
            <Shield size={14} className="text-blue-300" />
            <span className="text-xs font-semibold text-blue-200 tracking-wide">
              Nigeria&apos;s #1 Enterprise AI Learning Platform
            </span>
          </div>

          {/* Main copy */}
          <div>
            <h2 className="text-4xl xl:text-5xl font-bold leading-tight text-white mb-6">
              Master the skills
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                that move careers.
              </span>
            </h2>

            {/* Stats row */}
            <div className="flex gap-8 mb-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Testimonial card */}
            <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <p className="text-sm text-slate-300 leading-relaxed mb-4 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                  FA
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-slate-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
