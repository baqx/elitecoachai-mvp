import Link from "next/link";
import { ArrowLeft, PlayCircle, FileText, CheckCircle2, MessageSquare, ChevronRight, Clock, Star } from "lucide-react";
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
    <div className="flex flex-col h-screen bg-white">
      {/* ── Player Header ───────────────────────────── */}
      <header className="h-16 border-b border-slate-200 flex items-center justify-between px-6 bg-white z-20 flex-shrink-0">
        <div className="flex items-center gap-5">
          <Link href="/courses" className="text-slate-400 hover:text-slate-900 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div className="h-6 w-px bg-slate-200" />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 leading-none">
                {course.domain}
              </span>
              <span className="text-slate-300">&bull;</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                Module 03
              </span>
            </div>
            <h1 className="text-sm font-bold text-slate-900 mt-1 truncate max-w-[200px] sm:max-w-md">
              {course.title}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end mr-4">
             <div className="flex justify-between w-32 text-[10px] font-bold text-slate-500 mb-1">
               <span>40% Complete</span>
             </div>
             <div className="w-32 bg-slate-100 h-1.5 rounded-full overflow-hidden">
               <div className="progress-gradient h-full rounded-full" style={{ width: '40%' }} />
             </div>
          </div>
          <Link 
            href="/tutor"
            className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-4 py-2 text-xs font-bold flex items-center gap-2 transition-all shadow-md shadow-slate-200 active:scale-[0.98]"
          >
            <MessageSquare size={14} /> <span>Open AI Tutor</span>
          </Link>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* ── Sidebar Outline ────────────────────────── */}
        <div className="w-80 border-r border-slate-200 bg-slate-50 flex flex-col hidden xl:flex">
          <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-white">
            <h3 className="font-bold text-slate-900 text-sm">Course Content</h3>
            <span className="text-[10px] font-bold text-slate-400">{modules.length} Lessons</span>
          </div>
          <div className="flex-1 overflow-y-auto py-2">
            {modules.map((mod) => (
              <div 
                key={mod.id}
                className={`
                  px-5 py-4 border-l-4 transition-all cursor-pointer group
                  ${mod.id === 3 
                    ? 'bg-blue-50/50 border-blue-600' 
                    : 'border-transparent hover:bg-slate-100'}
                `}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {mod.completed ? (
                      <div className="bg-green-100 p-0.5 rounded-full">
                        <CheckCircle2 size={16} className="text-green-600" />
                      </div>
                    ) : (
                      <div className={`w-4 h-4 rounded-full border-2 mt-0.5 ${mod.id === 3 ? 'border-blue-600' : 'border-slate-300'}`}>
                        {mod.id === 3 && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full m-auto mt-[1px]" />}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`text-xs font-bold leading-snug ${mod.id === 3 ? 'text-blue-900' : 'text-slate-700'}`}>
                      {mod.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5 text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                      {mod.type === 'video' && <PlayCircle size={12} />}
                      {mod.type === 'text' && <FileText size={12} />}
                      {mod.type === 'quiz' && <CheckCircle2 size={12} />}
                      <span>{mod.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main Viewport ──────────────────────────── */}
        <div className="flex-1 overflow-y-auto bg-white p-6 sm:p-10">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Player/Hero Area */}
            <div className="space-y-6">
              <div className="aspect-video w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group">
                {/* Simulated dynamic background */}
                <div className="absolute inset-0 bg-dot-pattern opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-900/50 cursor-pointer group-hover:scale-110 transition-transform">
                  <PlayCircle size={40} fill="white" />
                </div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                   <div className="px-3 py-1 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg text-white font-bold text-[10px] uppercase tracking-widest">
                     HD 1080p
                   </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">3. Practical Application</h2>
                  <p className="text-slate-500 mt-1 font-medium italic">Master the bridge between theory and industrial execution.</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">
                        U
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-2">
                    +42 others watching
                  </span>
                </div>
              </div>
            </div>

            {/* Reading Content */}
            <div className="prose prose-slate max-w-none prose-headings:font-bold prose-p:text-slate-600 prose-p:leading-relaxed">
              <p className="text-lg">
                In this segment, we transition from theoretical frameworks to <strong>real-world enterprise implementation</strong>. As a professional in the Nigerian market, understanding how to apply global AI standards within local logistical and infrastructural constraints is key.
              </p>
              
              <h3 className="text-xl font-bold flex items-center gap-2">
                <div className="w-2 h-8 progress-gradient rounded-full" />
                Strategy Checklist
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 list-none pl-0">
                {[
                  "Identify system bottlenecks before deployment",
                  "Leverage existing open-source RAG patterns",
                  "Test assumptions early through rapid prototyping",
                  "Scale logic horizontally across department silos"
                ].map((item, i) => (
                  <li key={i} className="m-0 p-4 rounded-xl border border-slate-100 bg-slate-50 flex gap-3 items-start">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {/* AI Contextual CTA */}
              <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-blue-300 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                    <Star size={14} className="fill-blue-300" /> Lesson Support
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Finding this module complex?</h4>
                  <p className="text-slate-300 text-sm max-w-xl mb-8 leading-relaxed">
                    Our AI Tutor is currently indexed on this exact strategy framework. Ask it to explain the "Checklist" using Nigerian retail case studies for better contextual clarity.
                  </p>
                  <Link 
                    href="/tutor"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-blue-900/40 active:scale-[0.98]"
                  >
                    Discuss with AI Tutor <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="pt-10 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
              <button className="flex items-center gap-3 text-slate-500 hover:text-slate-900 group font-bold">
                <div className="p-2 border border-slate-200 rounded-lg group-hover:bg-slate-50 transition-colors">
                  <ArrowLeft size={16} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400">Previous</p>
                  <p className="text-sm">2. Core Principles</p>
                </div>
              </button>
              
              <button className="flex items-center gap-3 text-right group font-bold">
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-blue-400">Next Lesson</p>
                  <p className="text-sm">4. Knowledge Check</p>
                </div>
                <div className="p-3 bg-blue-600 text-white rounded-lg shadow-lg shadow-blue-200 group-hover:bg-blue-700 transition-all">
                  <ChevronRight size={20} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
