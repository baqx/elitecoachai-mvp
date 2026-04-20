import Link from "next/link";
import { BookOpen, Trophy, Clock, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { MOCK_COURSES, MOCK_USER_PROFILE } from "@/lib/mock";

export default function DashboardPage() {
  const profile = MOCK_USER_PROFILE;
  
  // Find course details for enrollments
  const activeCourses = profile.enrollments.map(en => ({
    ...en,
    course: MOCK_COURSES.find(c => c.id === en.courseId)!
  }));

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-2xl font-bold text-slate-900">Welcome back, {profile.name}</h1>
        <p className="text-slate-500 mt-1">Here's your progress on the {profile.learningPathName}</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-5 border border-slate-200 rounded-lg shadow-sm flex items-start gap-4 animate-fade-in-up delay-100">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-md">
            <Trophy size={20} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Overall Progress</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{profile.completionOverall}%</p>
          </div>
        </div>
        <div className="bg-white p-5 border border-slate-200 rounded-lg shadow-sm flex items-start gap-4 animate-fade-in-up delay-200">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-md">
            <BookOpen size={20} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Active Courses</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{activeCourses.length}</p>
          </div>
        </div>
        <div className="bg-white p-5 border border-slate-200 rounded-lg shadow-sm flex items-start gap-4 animate-fade-in-up delay-300">
          <div className="p-3 bg-green-50 text-green-600 rounded-md">
            <Clock size={20} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Learning Hours</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">14.5h</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Active Courses */}
        <div className="lg:col-span-2 space-y-6 animate-fade-in-up delay-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Your Active Courses</h2>
            <Link href="/courses" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
              Browse Catalog <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-4">
            {activeCourses.map((item) => (
              <div key={item.id} className="bg-white border border-slate-200 rounded-lg shadow-sm p-5 flex flex-col sm:flex-row gap-5">
                <div className="w-full sm:w-48 h-32 bg-slate-100 rounded-md flex-shrink-0 flex items-center justify-center">
                  <BookOpen size={32} className="text-slate-300" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600">{item.course.domain}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg leading-tight mb-2">{item.course.title}</h3>
                    <p className="text-sm text-slate-500 line-clamp-2">{item.course.description}</p>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between text-xs font-medium mb-1.5">
                        <span className="text-slate-600">{item.progressPct}% Complete</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-blue-600 h-full rounded-full" 
                          style={{ width: `${item.progressPct}%` }}
                        />
                      </div>
                    </div>
                    <Link 
                      href={`/courses/${item.courseId}`}
                      className="flex-shrink-0 bg-slate-900 hover:bg-slate-800 text-white rounded-md px-4 py-2 text-sm font-medium flex items-center gap-2 transition-colors"
                    >
                      <Play size={16} /> Resume
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: Path Milestones & Nudges */}
        <div className="space-y-6 animate-fade-in-up delay-300">
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 bg-slate-50">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Path Milestones</h2>
            </div>
            <div className="p-5">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-0.5"><CheckCircle2 size={18} className="text-green-500" /></div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 line-through text-slate-400">Complete Onboarding</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-0.5 w-[18px] h-[18px] rounded-full border-2 border-blue-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Finish AI Fundamentals</p>
                    <p className="text-xs text-slate-500 mt-0.5">Focus for this week</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-0.5 w-[18px] h-[18px] rounded-full border-2 border-slate-200"></div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">Start Leadership Course</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-0.5 w-[18px] h-[18px] rounded-full border-2 border-slate-200"></div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">Earn Certification</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
