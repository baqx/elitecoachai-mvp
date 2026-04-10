import { BookOpen, Trophy } from "lucide-react";

interface CourseCardProps {
  title: string;
  domain: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  completion: number;
  totalModules: number;
  completedModules: number;
  milestone?: boolean;
}

export function CourseCard({ title, domain, difficulty, completion, totalModules, completedModules, milestone }: CourseCardProps) {
  const difficultyColors = {
    Beginner: "bg-emerald-100 text-emerald-700",
    Intermediate: "bg-blue-100 text-blue-700",
    Advanced: "bg-purple-100 text-purple-700"
  };

  return (
    <div className={`w-[320px] bg-white rounded-3xl border ${milestone ? 'border-green-400 shadow-lg shadow-green-100/50' : 'border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200'} p-7 flex flex-col transition-all duration-300 relative overflow-hidden group`}>
      {milestone && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-bl-2xl shadow-sm flex items-center gap-1.5">
          <Trophy size={14} /> Milestone Area
        </div>
      )}
      
      <div className="mb-5 flex flex-wrap gap-2 pt-1">
         <span className="text-[11px] font-black text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg uppercase tracking-wider">{domain}</span>
         <span className={`text-[11px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider ${difficultyColors[difficulty]}`}>{difficulty}</span>
      </div>
      
      <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-green-700 transition-colors">
        {title}
      </h3>
      
      <div className="flex items-center gap-2 text-slate-500 font-medium text-sm mb-8 flex-1">
        <BookOpen size={16} /> 
        <span>{completedModules} of {totalModules} Modules</span>
      </div>

      <div>
        <div className="flex justify-between items-center text-sm mb-3">
          <span className="font-bold text-slate-600 text-xs uppercase tracking-wider">Progress</span>
          <span className="font-extrabold text-slate-900">{completion}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-3 shadow-inner relative overflow-hidden">
          <div 
            className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out ${completion === 100 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gradient-to-r from-blue-500 to-cyan-400'}`} 
            style={{ width: `${completion}%` }} 
          />
        </div>
      </div>
    </div>
  );
}
