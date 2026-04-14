import { CourseCard } from "@/components/dashboard/CourseCard";
import { Target, Flame, Clock, Trophy } from "lucide-react";

export default function DashboardPage() {
  const weeklyHours = 6.5;
  const weeklyGoal = 10;
  const weeklyProgress = (weeklyHours / weeklyGoal) * 100;

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12 w-full">
      {/* Header section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-gradient-to-br from-blue-900 to-blue-800 p-8 md:p-10 rounded-[2rem] text-white shadow-xl shadow-green-900/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="relative z-10 w-full md:w-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-blue-100 text-lg">You're making great progress in your Tech learning path.</p>
        </div>
        <button className="relative z-10 w-full md:w-auto bg-white text-blue-900 hover:bg-blue-50 px-8 py-3.5 rounded-xl font-bold transition-all shadow-sm flex items-center justify-center gap-2 border border-blue-50/50 hover:scale-[1.02]">
           Resume Learning
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Progress Widget */}
        <div className="col-span-1 lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-8 text-slate-50 group-hover:text-blue-50 transition-colors duration-500 pointer-events-none">
             <Target size={140} className="opacity-40" />
          </div>
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2">
               <Target className="text-blue-600" size={24} /> Weekly Progress
            </h2>
            
            <div className="flex items-end gap-3 mb-5">
              <span className="text-6xl font-black text-slate-900 tracking-tighter leading-none">{weeklyHours}</span>
              <span className="text-xl font-bold text-slate-500 mb-1">/ {weeklyGoal} hrs</span>
            </div>
            
            <div className="w-full bg-slate-100/80 rounded-full h-5 shadow-inner mb-5 overflow-hidden relative border border-slate-200/50">
              <div 
                className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.5)] transition-all duration-1000 ease-out"
                style={{ width: `${weeklyProgress}%` }}
              />
            </div>
            
            <p className="text-slate-600 font-medium text-sm flex items-center gap-2 bg-slate-50 w-fit px-4 py-2 rounded-lg border border-slate-100">
               <Flame className="text-orange-500" size={18} /> You're on a <strong className="text-slate-800 text-base">4-week</strong> streak! Keep it up.
            </p>
          </div>
        </div>

        {/* Quick Stats Widget */}
        <div className="col-span-1 border border-slate-100 bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-center gap-8">
          <div className="flex items-center gap-5">
             <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
               <Clock size={28} />
             </div>
             <div>
               <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Total Time</p>
               <p className="text-3xl font-black text-slate-800 tracking-tight">42 Hours</p>
             </div>
          </div>
          <div className="w-full h-px bg-slate-100" />
          <div className="flex items-center gap-5">
             <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 border border-indigo-100">
                <Trophy size={28} />
             </div>
             <div>
               <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Certificates</p>
               <p className="text-3xl font-black text-slate-800 tracking-tight">3 Earned</p>
             </div>
          </div>
        </div>
      </div>

      {/* My Learning Path */}
      <div className="pt-4">
        <div className="flex justify-between items-center mb-6 px-1">
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">My Learning Path</h2>
          <button className="text-blue-600 font-bold hover:text-blue-700 px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors text-sm border-2 border-transparent hover:border-blue-100">
            View Syllabus
          </button>
        </div>
        
        <div className="relative">
          {/* Connector Line for visual 'path' effect */}
          <div className="absolute top-1/2 left-0 w-full h-[6px] bg-slate-100 -translate-y-1/2 z-0 hidden md:block rounded-full" />
          <div className="absolute top-1/2 left-0 w-1/3 h-[6px] bg-gradient-to-r from-blue-500 to-transparent -translate-y-1/2 z-0 hidden md:block rounded-full" />
          
          <div className="flex overflow-x-auto gap-8 pb-10 pt-2 snap-x relative z-10 px-4 -mx-4 hide-scrollbar items-center">
            <div className="snap-center shrink-0 hover:-translate-y-2 transition-transform duration-300">
               <CourseCard 
                 title="Python Fundamentals"
                 domain="Engineering"
                 difficulty="Beginner"
                 completion={100}
                 completedModules={12}
                 totalModules={12}
               />
            </div>
            
            <div className="snap-center shrink-0 relative hover:-translate-y-2 transition-transform duration-300">
               <CourseCard 
                 title="Machine Learning Foundations"
                 domain="AI & Data"
                 difficulty="Intermediate"
                 completion={65}
                 completedModules={8}
                 totalModules={12}
                 milestone={true}
               />
            </div>

            <div className="snap-center shrink-0 opacity-80 hover:opacity-100 hover:-translate-y-2 transition-all duration-300">
               <CourseCard 
                 title="Advanced Deep Learning"
                 domain="AI & Data"
                 difficulty="Advanced"
                 completion={0}
                 completedModules={0}
                 totalModules={15}
               />
            </div>
            
            <div className="snap-center shrink-0 opacity-50 hover:opacity-100 hover:-translate-y-2 transition-all duration-300">
               <CourseCard 
                 title="MLOps & LLM Deployment"
                 domain="Engineering"
                 difficulty="Advanced"
                 completion={0}
                 completedModules={0}
                 totalModules={10}
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
