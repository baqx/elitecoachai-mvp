"use client";

import { useState } from "react";
import { PlayCircle, ChevronLeft, ChevronRight, MessageSquare, CheckCircle2 } from "lucide-react";
import { AITutorChat } from "./AITutorChat";

export function ModuleViewer({ courseId, moduleId }: { courseId: string; moduleId: string }) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Knowledge check data mockup
  const question = "When defining a context window in a Large Language Model, what happens if the input exceeds the maximum token limit?";
  const options = [
    "The model compresses the text automatically to retain all meaning.",
    "The model truncates or ignores the text beyond the limit.",
    "The model expands its memory dynamically.",
    "The model immediately throws a syntax error."
  ];
  const correctAnswer = 1;

  const handleKnowledgeSubmit = () => {
    if (selectedAnswer !== null) setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col xl:flex-row gap-8 pb-12 w-full">
      {/* Left Column: Main Content Area */}
      <div className="flex-1 space-y-8 min-w-0">
        
        {/* Video Player Placeholder */}
        <div className="aspect-video bg-slate-900 rounded-3xl flex flex-col items-center justify-center relative shadow-xl shadow-slate-900/10 overflow-hidden border border-slate-800 group cursor-pointer hover:shadow-2xl transition-all">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/40" />
          <PlayCircle size={80} className="text-white/80 group-hover:text-green-400 group-hover:scale-110 transition-all duration-500 relative z-10 drop-shadow-lg" />
          <div className="absolute bottom-6 left-8 z-10">
             <div className="text-white font-bold text-xl md:text-2xl mb-1 drop-shadow-md">Module {moduleId}: Advanced Context Management</div>
             <div className="text-slate-300 font-medium text-sm flex items-center gap-2 drop-shadow">14:52 • Technical Deep Dive</div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-800/80">
             <div className="h-full bg-green-500 w-[60%]" />
          </div>
        </div>
        
        {/* Text-based Lesson Area */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm prose prose-slate max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-800">
          <h2 className="text-2xl font-bold mb-4">Understanding Context Limitations</h2>
          <p className="mb-4">
            Large Language Models (LLMs) operate on a fixed architectural boundary known as the <strong>context window</strong>. 
            This limits exactly how many tokens the model can process at a given time across both the prompt and the generated response.
          </p>
          <p className="mb-6">
            When utilizing advanced prompt engineering techniques, understanding where your most critical instructions are placed is paramount due to the "Lost in the Middle" phenomenon. 
            Models are statistically much more likely to accurately recall information placed at the absolute beginning or the absolute end of the prompt window.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl not-prose flex gap-4 items-start">
             <div className="text-blue-500 mt-0.5">💡</div>
             <p className="text-blue-900 font-medium text-sm leading-relaxed">
               <strong>Pro Tip:</strong> Always inject your most critical system prompts at the top, and re-emphasize the immediate action required at the very end of the user prompt to maximize model retention.
             </p>
          </div>
        </div>

        {/* Inline Knowledge Check */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden border-t-4 border-t-green-500">
           <div className="bg-slate-50 px-8 py-5 border-b border-slate-100 flex items-center gap-3">
             <div className="bg-green-100 p-1.5 rounded-lg text-green-700">
               <CheckCircle2 size={24} strokeWidth={2.5} />
             </div>
             <h3 className="font-bold text-slate-800 text-lg uppercase tracking-wider text-sm">Knowledge Check</h3>
           </div>
           
           <div className="p-8">
             <p className="font-bold text-slate-800 text-lg mb-6 leading-relaxed">{question}</p>
             <div className="space-y-3 mb-8">
               {options.map((opt, i) => {
                 const isSelected = selectedAnswer === i;
                 let optionStyle = "border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700";
                 
                 if (isSubmitted) {
                   if (i === correctAnswer) optionStyle = "border-green-500 bg-green-50 text-green-800 shadow-sm";
                   else if (isSelected) optionStyle = "border-red-500 bg-red-50 text-red-800";
                   else optionStyle = "border-slate-200 bg-slate-50 text-slate-400 opacity-50";
                 } else if (isSelected) {
                   optionStyle = "border-blue-500 ring-1 ring-blue-500 bg-blue-50 text-blue-800 shadow-sm";
                 }

                 return (
                   <div 
                     key={i} 
                     onClick={() => !isSubmitted && setSelectedAnswer(i)}
                     className={`p-4 md:p-5 border-2 rounded-xl cursor-pointer transition-all ${optionStyle} ${isSubmitted ? 'cursor-default' : 'hover:-translate-y-0.5'}`}
                   >
                     <div className="flex gap-4 items-center">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors
                           ${isSubmitted && i === correctAnswer ? 'border-green-500 bg-green-500' : ''}
                           ${isSubmitted && isSelected && i !== correctAnswer ? 'border-red-500 bg-red-500' : ''}
                           ${!isSubmitted && isSelected ? 'border-blue-500 bg-blue-500' : ''}
                           ${!isSubmitted && !isSelected ? 'border-slate-300' : ''}
                        `}>
                          {(isSubmitted && i === correctAnswer) && <CheckCircle2 size={14} className="text-white" strokeWidth={3} />}
                        </div>
                        <span className="font-medium text-sm md:text-base">{opt}</span>
                     </div>
                   </div>
                 );
               })}
             </div>
             
             <button 
               onClick={handleKnowledgeSubmit}
               disabled={selectedAnswer === null || isSubmitted}
               className={`w-full py-4 rounded-xl font-bold transition-all shadow-sm text-lg
                  ${isSubmitted ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 
                   selectedAnswer !== null ? 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-md' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
             >
               {isSubmitted ? (selectedAnswer === correctAnswer ? "Correct! Great job." : "Incorrect - Review the lesson") : "Check Answer"}
             </button>
           </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="flex-1 flex items-center justify-center gap-3 px-6 py-4 md:py-5 bg-white border border-slate-200 text-slate-700 rounded-2xl hover:bg-slate-50 font-bold transition-all shadow-sm hover:shadow hover:-translate-y-0.5">
            <ChevronLeft size={20} /> Previous Module
          </button>
          <button className="flex-1 flex items-center justify-center gap-3 px-6 py-4 md:py-5 bg-green-600 text-white rounded-2xl hover:bg-green-700 font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Next Module <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Right Column: AI Tutor Sticky Sidebar */}
      <div className="w-full xl:w-[400px] flex-shrink-0">
        <div className="sticky top-6 h-[calc(100vh-6rem)] min-h-[500px] bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col">
          {/* Chat Header */}
          <div className="bg-slate-900 p-5 border-b border-slate-800 flex items-center gap-4 relative overflow-hidden">
             <div className="absolute right-0 top-0 w-32 h-32 bg-green-500 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
             <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-inner relative z-10">
               <MessageSquare size={22} className="text-white" />
             </div>
             <div className="relative z-10">
               <h3 className="font-bold text-white text-lg leading-tight">Ask AI Tutor</h3>
               <div className="flex items-center gap-1.5 mt-0.5">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <p className="text-slate-400 text-xs font-medium">Online & ready to help</p>
               </div>
             </div>
          </div>
          
          <div className="flex-1 overflow-hidden">
            <AITutorChat />
          </div>
        </div>
      </div>
    </div>
  );
}
