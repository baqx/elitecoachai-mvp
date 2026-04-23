import { SignupForm } from "@/components/auth/SignupForm";
import { CheckCircle2 } from "lucide-react";

const perks = [
  "Personalized AI-driven learning path",
  "Access to 80+ expert-curated courses",
  "Auto-generated certificates with LinkedIn share",
  "Live human tutor escalation when you need it",
];

export default function SignupPage() {
  return (
    <div className="flex min-h-screen">
      {/* ── Left: Form ─────────────────────────────── */}
      <div className="w-full lg:w-[52%] flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-24 bg-white py-12 overflow-y-auto">
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
            Start learning today
          </h1>
          <p className="text-base text-slate-500 mb-8">
            Create your account and get placed on a path built for your goals.
          </p>

          <SignupForm />
        </div>
      </div>

      {/* ── Right: Hero Panel ──────────────────────── */}
      <div className="hidden lg:flex lg:w-[48%] relative overflow-hidden flex-col bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-900">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute -top-40 right-0 w-[480px] h-[480px] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-[360px] h-[360px] rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative z-10 flex flex-col justify-center h-full p-12 xl:p-16">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-4">
            Why EliteCoach.ai
          </p>
          <h2 className="text-4xl font-bold leading-tight text-white mb-8">
            Built for Nigerian
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
              professionals.
            </span>
          </h2>

          <ul className="space-y-4 mb-12">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={12} className="text-blue-300" />
                </div>
                <span className="text-sm text-slate-300 leading-relaxed">{perk}</span>
              </li>
            ))}
          </ul>

          {/* Metric tiles */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "500+", l: "Organisations trained" },
              { v: "85%",  l: "Average mastery score" },
              { v: "< 2.5s", l: "AI tutor response time" },
              { v: "₦5M+", l: "Monthly learner savings" },
            ].map((m) => (
              <div
                key={m.l}
                className="bg-white/8 backdrop-blur border border-white/10 rounded-xl p-4"
              >
                <p className="text-xl font-bold text-white">{m.v}</p>
                <p className="text-xs text-slate-400 mt-0.5">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
