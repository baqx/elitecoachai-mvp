import { Search, Filter, AlertCircle, Clock, CheckCircle, ChevronRight, MessageSquare, History, Zap } from "lucide-react";

export default function TutorQueuePage() {
  const escalations = [
    {
      id: "esc-1",
      learner: "James T.",
      course: "Data Analytics with Python",
      reason: "Repeated Failures in Module 3 Knowledge Check",
      time: "20 mins ago",
      status: "open",
      priority: "high"
    },
    {
      id: "esc-2",
      learner: "Aisha F.",
      course: "Financial Modeling",
      reason: "Sentiment Flag: Frustration Detected",
      time: "1 hr ago",
      status: "open",
      priority: "medium"
    },
    {
      id: "esc-3",
      learner: "Bolu O.",
      course: "AI Fundamentals",
      reason: "Manual Request for Human Clarification",
      time: "3 hrs ago",
      status: "open",
      priority: "low"
    },
    {
      id: "esc-4",
      learner: "Sarah P.",
      course: "Executive Leadership",
      reason: "Pinecone Retrieval Error / Unknown Concept",
      time: "Yesterday",
      status: "resolved",
      priority: "medium"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Escalation Queue</h1>
          <p className="text-slate-500 text-sm mt-0.5 font-medium">Review and resolve sessions handed off by the Elite AI engine.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center px-8 flex items-center gap-4">
            <div>
                <p className="text-2xl font-bold text-slate-900 leading-none">3</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">Open Issues</p>
            </div>
            <div className="w-1.5 h-8 bg-blue-500 rounded-full" />
            <div>
                <p className="text-2xl font-bold text-slate-900 leading-none">14</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">Resolved</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden animate-fade-in-up">
        {/* Toolbar */}
        <div className="px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-white">
          <div className="relative w-full max-w-lg group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Search by learner, course, or issue ID..." 
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-sm transition-all"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-3 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-700 shadow-sm transition-all active:scale-[0.98]">
              <Filter size={14} /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-3 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-700 shadow-sm transition-all active:scale-[0.98]">
              <History size={14} /> Latest
            </button>
          </div>
        </div>

        {/* List */}
        <div className="divide-y divide-slate-100">
          {escalations.map((item) => (
            <div key={item.id} className="group p-6 flex flex-col sm:flex-row gap-6 justify-between hover:bg-slate-50/80 transition-all cursor-pointer">
              <div className="flex gap-5">
                 <div className={`mt-1 shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm border
                    ${item.status === 'resolved' 
                        ? 'bg-green-50 border-green-100 text-green-600' 
                        : item.priority === 'high' 
                            ? 'bg-red-50 border-red-100 text-red-600' 
                            : item.priority === 'medium' 
                                ? 'bg-orange-50 border-orange-100 text-orange-600' 
                                : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
                    {item.status === 'resolved' 
                        ? <CheckCircle size={20} />
                        : <AlertCircle size={20} />
                    }
                 </div>
                 <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.learner}</h3>
                      <div className="h-1 w-1 rounded-full bg-slate-300" />
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                        {item.course}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-700 mb-3 leading-relaxed">{item.reason}</p>
                    <div className="flex items-center gap-6">
                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <Clock size={14} /> {item.time}
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <Zap size={14} /> ID: {item.id}
                      </span>
                    </div>
                 </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 shrink-0">
                {item.status === 'open' ? (
                  <button className="bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest shadow-xl shadow-slate-200 transition-all active:scale-95 flex items-center gap-2">
                    <MessageSquare size={14} /> Review Transcript
                  </button>
                ) : (
                  <button className="border border-slate-200 hover:bg-white hover:border-slate-400 text-slate-600 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest shadow-sm transition-all active:scale-95">
                    View Resolution
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
