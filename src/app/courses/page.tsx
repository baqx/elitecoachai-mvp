// app/courses/page.tsx
import { Search, Filter } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Browse Courses</h1>
          <p className="text-slate-500">Explore our catalog and start learning</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 flex-shrink-0">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((course) => (
          <div key={course} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all group flex flex-col cursor-pointer">
            <div className="h-40 bg-slate-200 relative overflow-hidden">
              {/* Image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
              <div className="absolute bottom-3 left-4 z-20 text-white font-bold text-xs px-2 py-1 bg-blue-500/90 rounded backdrop-blur-sm">
                Intermediate
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-bold text-slate-900 mb-1 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                AI Foundations: Building LLM Applications
              </h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-1">
                Learn the core concepts of Large Language Models and how to build production-ready applications.
              </p>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mt-auto pt-4 border-t border-slate-100">
                <span>12 Modules</span>
                <span>8 Hours</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
