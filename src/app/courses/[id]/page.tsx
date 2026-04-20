import Link from "next/link";
import { ArrowLeft, PlayCircle, FileText, CheckCircle2, MessageSquare } from "lucide-react";
import { MOCK_COURSES } from "@/lib/mock";

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = MOCK_COURSES.find(c => c.id === params.id) || MOCK_COURSES[0];

  // Mock modules
  const modules = [
    { id: 1, title: "Introduction to Concepts", type: "video", duration: "12 min", completed: true },
    { id: 2, title: "Core Principles", type: "text", duration: "8 min", completed: true },
    { id: 3, title: "Practical Application", type: "video", duration: "15 min", completed: false },
    { id: 4, title: "Knowledge Check", type: "quiz", duration: "5 min", completed: false },
    { id: 5, title: "Advanced Techniques", type: "text", duration: "10 min", completed: false },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link href="/courses" className="text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div className="h-6 w-px bg-slate-200"></div>
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block leading-none mb-1">{course.domain}</span>
            <h1 className="text-sm font-bold text-slate-900 leading-none">{course.title}</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-xs font-medium text-slate-500 mr-2 hidden sm:block">40% Complete</div>
          <Link 
            href="/tutor"
            className="bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 rounded-md px-3 py-1.5 text-sm font-medium flex items-center gap-2 transition-colors shadow-sm"
          >
            <MessageSquare size={16} /> <span className="hidden sm:inline">Ask AI Tutor</span>
          </Link>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
        {/* Main Content Area (Player) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-white">
          <div className="max-w-3xl mx-auto py-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Practical Application</h2>
            
            {/* Video Placeholder */}
            <div className="w-full aspect-video bg-slate-900 rounded-lg shadow-sm flex flex-col items-center justify-center text-white mb-8 border border-slate-800">
              <PlayCircle size={64} className="text-white/80 mb-4" />
              <p className="font-medium text-white/80">Video Player Placeholder</p>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                In this module, we will explore how to apply the core principles we discussed previously to real-world scenarios. You will learn to identify key patterns and implement basic solutions.
              </p>
              
              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Key Takeaways</h3>
              <ul className="space-y-2 mb-8 text-slate-600 list-disc pl-5">
                <li>Identify the primary constraints of your system before beginning design.</li>
                <li>Leverage existing patterns rather than reinventing the wheel.</li>
                <li>Test assumptions early through rapid prototyping.</li>
              </ul>

              {/* Inline Knowledge Check Prompt */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-10">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 text-blue-700 rounded-md shrink-0">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Stuck on a concept?</h4>
                    <p className="text-sm text-slate-600 mb-4">
                      The AI Tutor has been trained on this exact module. Ask it to explain constraints in simpler terms or provide more examples.
                    </p>
                    <Link href="/tutor" className="inline-flex bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-md px-4 py-2 text-sm font-medium transition-colors shadow-sm">
                      Start Tutoring Session
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-6 border-t border-slate-200 flex justify-between items-center">
              <button className="text-slate-500 hover:text-slate-900 font-medium text-sm transition-colors">
                Previous: Core Principles
              </button>
              <button className="bg-slate-900 hover:bg-slate-800 text-white rounded-md px-6 py-2.5 text-sm font-medium transition-colors shadow-sm">
                Next: Knowledge Check
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Outline */}
        <div className="w-full md:w-80 lg:w-96 border-l border-slate-200 bg-slate-50 overflow-y-auto hidden md:block">
          <div className="p-5 border-b border-slate-200 bg-white">
            <h3 className="font-bold text-slate-900">Course Outline</h3>
            <p className="text-xs text-slate-500 mt-1">{modules.length} Modules &bull; {course.durationHours}h Total</p>
          </div>
          <div className="p-3">
            <div className="space-y-1">
              {modules.map((mod) => (
                <div 
                  key={mod.id}
                  className={`
                    p-3 flex items-start gap-3 rounded-md cursor-pointer transition-colors
                    ${mod.id === 3 ? 'bg-blue-50 border border-blue-100 shadow-sm' : 'hover:bg-slate-100 border border-transparent'}
                  `}
                >
                  <div className="mt-0.5">
                    {mod.completed ? (
                      <CheckCircle2 size={18} className="text-green-500" />
                    ) : mod.id === 3 ? (
                      <div className="w-[18px] h-[18px] rounded-full border-2 border-blue-600 flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                    ) : (
                      <div className="w-[18px] h-[18px] rounded-full border-2 border-slate-300"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${mod.id === 3 ? 'text-blue-900' : 'text-slate-700'}`}>{mod.title}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                      {mod.type === 'video' && <PlayCircle size={12} />}
                      {mod.type === 'text' && <FileText size={12} />}
                      {mod.type === 'quiz' && <CheckCircle2 size={12} />}
                      <span>{mod.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
