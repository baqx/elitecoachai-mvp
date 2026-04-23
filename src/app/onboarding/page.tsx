import { OnboardingQuiz } from "@/components/onboarding/OnboardingQuiz";
import { Sparkles } from "lucide-react";

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto w-full py-12 px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100 shadow-sm">
            <Sparkles size={12} /> Personalized Learning
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Tailor Your Elite Experience
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our AI engine uses your background and goals to generate a custom 16-week path specifically for Nigerian professionals.
          </p>
        </div>

        <OnboardingQuiz />
      </div>
    </div>
  );
}
