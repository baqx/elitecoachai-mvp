"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";

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
    // Simulate generation delay
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
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

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      {/* Header & Progress */}
      <div className="bg-slate-50 p-6 border-b border-slate-100">
        <div className="flex justify-between text-sm font-semibold text-slate-500 mb-3">
          <span>Question {currentStep} of {totalSteps}</span>
          <span>{Math.round(progress)}% Completed</span>
        </div>
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-green-500 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 min-h-[320px] flex flex-col justify-center">
        {currentStep === 1 && (
          <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300 relative">
            <div>
              <span className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2 block">Background • 1/3</span>
              <h2 className="text-2xl font-bold text-slate-800">What is your current role or profession?</h2>
              <p className="text-slate-500 mt-2 text-sm">We'll tailor your vocabulary and examples accordingly.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Software Engineer", "Product Manager", "Data Analyst", "Student", "Educator", "Other"].map((role) => (
                <label 
                  key={role} 
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.role === role ? 'border-green-500 bg-green-50 text-green-800 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200 text-slate-700'}`}
                >
                  <input 
                    type="radio" 
                    className="hidden" 
                    checked={formData.role === role} 
                    onChange={() => updateFormData("role", role)} 
                  />
                  {formData.role === role && <CheckCircle2 size={18} className="text-green-600" />}
                  <span className="font-medium">{role}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
            <div>
               <span className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2 block">Background • 2/3</span>
              <h2 className="text-2xl font-bold text-slate-800">How many years of professional experience do you have?</h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {["Less than 1 year", "1-3 years", "3-5 years", "5+ years"].map((exp) => (
                <label 
                  key={exp} 
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.experience === exp ? 'border-green-500 bg-green-50 text-green-800 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200 text-slate-700'}`}
                >
                  <input 
                    type="radio" 
                    className="hidden" 
                    checked={formData.experience === exp} 
                    onChange={() => updateFormData("experience", exp)} 
                  />
                  {formData.experience === exp && <CheckCircle2 size={18} className="text-green-600" />}
                  <span className="font-medium">{exp}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
            <div>
              <span className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2 block">Background • 3/3</span>
              <h2 className="text-2xl font-bold text-slate-800">What is your primary learning goal?</h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                "Transitioning into a new AI role", 
                "Upskilling for my current job", 
                "Building my own AI projects", 
                "General curiosity and education"
              ].map((goal) => (
                <label 
                  key={goal} 
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.goal === goal ? 'border-green-500 bg-green-50 text-green-800 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200 text-slate-700'}`}
                >
                  <input 
                    type="radio" 
                    className="hidden" 
                    checked={formData.goal === goal} 
                    onChange={() => updateFormData("goal", goal)} 
                  />
                  {formData.goal === goal && <CheckCircle2 size={18} className="text-green-600" />}
                  <span className="font-medium">{goal}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">Skills • 1/2</span>
              <h2 className="text-2xl font-bold text-slate-800">How comfortable are you with Python?</h2>
              <p className="text-slate-500 mt-2 text-sm">Most AI logic involves Python ecosystems.</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                { level: "Beginner", desc: "I've never used it or only know basics like print statements" },
                { level: "Intermediate", desc: "I can write scripts, use loops, and build basic functions" },
                { level: "Advanced", desc: "I'm extremely comfortable with advanced logic, classes, and libraries" }
              ].map((skill) => (
                <label 
                  key={skill.level} 
                  className={`flex flex-col gap-1 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.pythonSkill === skill.level ? 'border-green-500 bg-green-50 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                >
                  <input 
                    type="radio" 
                    className="hidden" 
                    checked={formData.pythonSkill === skill.level} 
                    onChange={() => updateFormData("pythonSkill", skill.level)} 
                  />
                  <div className="flex items-center gap-2">
                    {formData.pythonSkill === skill.level && <CheckCircle2 size={16} className="text-green-600" />}
                    <span className={`font-bold ${formData.pythonSkill === skill.level ? 'text-green-800' : 'text-slate-800'}`}>{skill.level}</span>
                  </div>
                  <span className={`text-sm ml-[1.6rem] ${formData.pythonSkill === skill.level ? 'text-green-600' : 'text-slate-500'}`}>{skill.desc}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">Skills • 2/2</span>
              <h2 className="text-2xl font-bold text-slate-800">How would you rate your knowledge of ML concepts?</h2>
              <p className="text-slate-500 mt-2 text-sm">E.g. Neural Networks, Transformers, Prompt Engineering</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                { level: "None", desc: "What does ML stand for?" },
                { level: "Conceptual", desc: "I know what they are but have never built or tuned models" },
                { level: "Practical", desc: "I have used APIs and built some toy ML applications before" },
                { level: "Expert", desc: "I routinely fine-tune arrays, weights, and understand deeper logic" }
              ].map((skill) => (
                <label 
                  key={skill.level} 
                  className={`flex flex-col gap-1 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.mlSkill === skill.level ? 'border-green-500 bg-green-50 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                >
                  <input 
                    type="radio" 
                    className="hidden" 
                    checked={formData.mlSkill === skill.level} 
                    onChange={() => updateFormData("mlSkill", skill.level)} 
                  />
                  <div className="flex items-center gap-2">
                    {formData.mlSkill === skill.level && <CheckCircle2 size={16} className="text-green-600" />}
                    <span className={`font-bold ${formData.mlSkill === skill.level ? 'text-green-800' : 'text-slate-800'}`}>{skill.level}</span>
                  </div>
                  <span className={`text-sm ml-[1.6rem] ${formData.mlSkill === skill.level ? 'text-green-600' : 'text-slate-500'}`}>{skill.desc}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Controls */}
      <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-between items-center">
        <button 
          onClick={handlePrev}
          disabled={currentStep === 1 || isSubmitting}
          className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors
            ${currentStep === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-200'}`}
        >
          <ChevronLeft size={16} /> Back
        </button>

        {currentStep < totalSteps ? (
          <button 
            onClick={handleNext}
            disabled={!isCurrentStepValid()}
            className={`flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg shadow-sm transition-all
              ${!isCurrentStepValid() ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'}`}
          >
            Continue <ChevronRight size={16} />
          </button>
        ) : (
          <button 
            onClick={handleSubmit}
            disabled={!isCurrentStepValid() || isSubmitting}
            className={`flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-lg shadow-sm transition-all
              ${!isCurrentStepValid() ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}
          >
            {isSubmitting ? (
               <span className="flex items-center gap-2">
                 <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                 </svg>
                 Generating Path...
               </span>
            ) : "Generate My Learning Path"}
          </button>
        )}
      </div>
    </div>
  );
}
