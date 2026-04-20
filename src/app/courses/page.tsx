import Link from "next/link";
import { BookOpen, Clock, BarChart, ArrowRight, Play } from "lucide-react";
import { MOCK_COURSES, MOCK_USER_PROFILE } from "@/lib/mock";

export default function CoursesPage() {
  const profile = MOCK_USER_PROFILE;
  
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Course Catalog</h1>
        <p className="text-slate-500 mt-1">Explore available courses to advance your AI and business skills.</p>
      </div>

      {/* Recommended Filter/Tags (Static for mock) */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {["All Courses", "Technology", "Data Analytics", "Leadership", "Finance"].map((tag, idx) => (
          <button 
            key={tag}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border
              ${idx === 0 
                ? 'bg-slate-900 text-white border-slate-900' 
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'}`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_COURSES.map((course) => {
          const enrollment = profile.enrollments.find(e => e.courseId === course.id);
          
          return (
            <div key={course.id} className="bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col overflow-hidden transition-all hover:border-slate-300 hover:shadow-md">
              <div className="h-40 bg-slate-100 flex items-center justify-center border-b border-slate-100 relative">
                <BookOpen size={40} className="text-slate-300" />
                {enrollment && (
                  <div className="absolute top-3 right-3 bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-md">
                    Enrolled
                  </div>
                )}
              </div>
              
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">{course.domain}</span>
                  <h3 className="font-bold text-slate-900 text-lg leading-tight mt-1">{course.title}</h3>
                </div>
                
                <p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-1">
                  {course.description}
                </p>
                
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-5">
                  <div className="flex items-center gap-1.5"><Clock size={14} /> {course.durationHours}h</div>
                  <div className="flex items-center gap-1.5"><BookOpen size={14} /> {course.modulesCount} Modules</div>
                  <div className="flex items-center gap-1.5"><BarChart size={14} /> {course.difficulty}</div>
                </div>

                {enrollment ? (
                  <div className="mt-auto">
                    <div className="flex justify-between text-xs font-medium mb-1.5 text-slate-600">
                      <span>{enrollment.progressPct}% Complete</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-4">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: `${enrollment.progressPct}%` }} />
                    </div>
                    <Link 
                      href={`/courses/${course.id}`}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-md px-4 py-2.5 text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      <Play size={16} /> Resume Learning
                    </Link>
                  </div>
                ) : (
                  <Link 
                    href={`/courses/${course.id}`}
                    className="mt-auto w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 rounded-md px-4 py-2.5 text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
