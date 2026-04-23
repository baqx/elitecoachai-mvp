"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, ChevronLeft, CheckCircle2, Star, Briefcase, Target, Code, Brain, Zap } from "lucide-react";

type QuizData = {
  role: string;
  experience: string;
  goal: string;
  pythonSkill: string;
  mlSkill: string;
};

export function OnboardingQuiz() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<QuizData>({
    role: "",
    experience: "",
    goal: "",
    pythonSkill: "",
    mlSkill: "",
  });

  const progress = (currentStep / totalSteps) * 100;

  const updateFormData = (key: keyof QuizData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  };

  const isCurrentStepValid = () => {
    switch (currentStep) {
      case 1: return !!formData.role;
      case 2: return !!formData.experience;
      case 3: return !!formData.goal;
      case 4: return !!formData.pythonSkill;
      case 5: return !!formData.mlSkill;
      default: return false;
    }
  };

  const CardOption = ({ label, description, value, current, onClick, icon: Icon }: any) => (
    <div 
      onClick={() => onClick(value)}
      className={`
        relative p-5 rounded-xl border-2 cursor-pointer transition-all duration-200
        ${current === value 
          ? 'border-blue-600 bg-blue-50 shadow-md ring-1 ring-blue-600/10' 
          : 'border-slate-100 bg-white hover:border-slate-300 hover:shadow-sm text-slate-700'}
      `}
    >
      <div className="flex items-start gap-4">
        <div className={`p-2 rounded-lg ${current === value ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
          <Icon size={20} />
        </div>
        <div className="flex-1">
          <p className={`font-bold text-base ${current === value ? 'text-blue-900' : 'text-slate-900'}`}>{label}</p>
          {description && <p className={`text-xs mt-1 leading-relaxed ${current === value ? 'text-blue-700/70' : 'text-slate-500'}`}>{description}</p>}
        </div>
        {current === value && (
          <div className="absolute top-4 right-4">
            <CheckCircle2 size={18} className="text-blue-600" />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden animate-fade-in">
      {/* Progress Bar */}
      <div className="p-1">
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div 
            className="progress-gradient h-full rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="px-8 py-10 min-h-[480px] flex flex-col">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              Step 0{currentStep}
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
          
          {currentStep === 1 && (
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-slate-900">What is your current role?</h2>
              <p className="text-slate-500 mt-2 text-sm leading-relaxed">This helps us customize the technical depth of your curriculum.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <CardOption icon={Code} label="Software Engineer" value="Software Engineer" current={formData.role} onClick={(v: string) => updateFormData("role", v)} />
                <CardOption icon={Briefcase} label="Product Manager" value="Product Manager" current={formData.role} onClick={(v: string) => updateFormData("role", v)} />
                <CardOption icon={Target} label="Data Analyst" value="Data Analyst" current={formData.role} onClick={(v: string) => updateFormData("role", v)} />
                <CardOption icon={Star} label="Enterprise Executive" value="Executive" current={formData.role} onClick={(v: string) => updateFormData("role", v)} />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-slate-900">Professional Experience</h2>
              <p className="text-slate-500 mt-2 text-sm">We adjust scenarios based on your seniority level.</p>
              <div className="space-y-3 mt-8">
                <CardOption icon={Star} label="Junior (0-2 years)" value="0-2" current={formData.experience} onClick={(v: string) => updateFormData("experience", v)} />
                <CardOption icon={Star} label="Mid-Level (3-5 years)" value="3-5" current={formData.experience} onClick={(v: string) => updateFormData("experience", v)} />
                <CardOption icon={Star} label="Senior (6+ years)" value="6+" current={formData.experience} onClick={(v: string) => updateFormData("experience", v)} />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-slate-900">Primary Learning Goal</h2>
              <p className="text-slate-500 mt-2 text-sm">Your milestone path will be oriented around this objective.</p>
              <div className="space-y-3 mt-8">
                <CardOption icon={Briefcase} label="Transition to AI-focused Role" description="Move from traditional PM/Eng to AI Product/ML Engineer" value="Transition" current={formData.goal} onClick={(v: string) => updateFormData("goal", v)} />
                <CardOption icon={Zap} label="Lead AI Strategy" description="Drive high-level AI implementation in your current organisation" value="Strategy" current={formData.goal} onClick={(v: string) => updateFormData("goal", v)} />
                <CardOption icon={CheckCircle2} label="Practical Skill Upskilling" description="Master specific tools like Python, RAG architectures, and fine-tuning" value="Upskill" current={formData.goal} onClick={(v: string) => updateFormData("goal", v)} />
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-slate-900">Python Proficiency</h2>
              <p className="text-slate-500 mt-2 text-sm">Most Elite Coach labs involve hands-on Python execution.</p>
              <div className="space-y-3 mt-8">
                <CardOption icon={Code} label="Beginner" description="I've never used it or only know the very basics" value="Beginner" current={formData.pythonSkill} onClick={(v: string) => updateFormData("pythonSkill", v)} />
                <CardOption icon={Code} label="Intermediate" description="I can write logic, handle dataframes, and use basic APIs" value="Intermediate" current={formData.pythonSkill} onClick={(v: string) => updateFormData("pythonSkill", v)} />
                <CardOption icon={Code} label="Advanced" description="I'm comfortable with complex architectures and libraries" value="Advanced" current={formData.pythonSkill} onClick={(v: string) => updateFormData("pythonSkill", v)} />
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold text-slate-900">ML Knowledge Level</h2>
              <p className="text-slate-500 mt-2 text-sm">How well do you understand models and training logic?</p>
              <div className="space-y-3 mt-8">
                <CardOption icon={Brain} label="Conceptual" description="I know what they are but have never built or tuned models" value="Conceptual" current={formData.mlSkill} onClick={(v: string) => updateFormData("mlSkill", v)} />
                <CardOption icon={Brain} label="Practical Practitioner" description="I have used APIs and built some toy ML apps" value="Practical" current={formData.mlSkill} onClick={(v: string) => updateFormData("mlSkill", v)} />
                <CardOption icon={Brain} label="Domain Expert" description="I fine-tune models and understand weight optimization" value="Expert" current={formData.mlSkill} onClick={(v: string) => updateFormData("mlSkill", v)} />
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto pt-8 flex items-center justify-between">
          <button 
            onClick={handlePrev}
            disabled={currentStep === 1 || isSubmitting}
            className={`flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl transition-all
              ${currentStep === 1 ? 'text-slate-300' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
          >
            <ChevronLeft size={18} /> Previous
          </button>

          {currentStep < totalSteps ? (
            <button 
              onClick={handleNext}
              disabled={!isCurrentStepValid()}
              className={`flex items-center gap-2 px-8 py-3 text-sm font-bold rounded-xl shadow-lg transition-all
                ${!isCurrentStepValid() 
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200 active:scale-[0.98]'}`}
            >
              Next Step <ChevronRight size={18} />
            </button>
          ) : (
            <button 
              onClick={handleSubmit}
              disabled={!isCurrentStepValid() || isSubmitting}
              className={`flex items-center gap-2 px-8 py-3 text-sm font-bold rounded-xl shadow-xl transition-all
                ${!isCurrentStepValid() || isSubmitting
                  ? 'bg-slate-100 text-slate-400' 
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-300 active:scale-[0.98]'}`}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Generating Path...
                </div>
              ) : (
                "Generate My Experience"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
