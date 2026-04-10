import { OnboardingQuiz } from "@/components/onboarding/OnboardingQuiz";

export default function OnboardingPage() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Let's Personalize Your Experience</h1>
        <p className="text-slate-500 mt-2">Answer a few questions to help us tailor Elite Coach AI to you.</p>
      </div>

      <OnboardingQuiz />
    </div>
  );
}
