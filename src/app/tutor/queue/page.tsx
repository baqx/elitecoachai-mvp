import { Search, Filter, AlertCircle, Clock, CheckCircle } from "lucide-react";

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
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Escalation Queue</h1>
          <p className="text-slate-500 mt-1">Review sessions handed off by the AI Tutor.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-slate-100 p-3 rounded-lg border border-slate-200 text-center px-6">
            <p className="text-2xl font-bold text-slate-900">3</p>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Open</p>
          </div>
          <div className="bg-slate-100 p-3 rounded-lg border border-slate-200 text-center px-6">
            <p className="text-2xl font-bold text-slate-900">14</p>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Resolved</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg shadow-sm">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-4 justify-between bg-slate-50 rounded-t-lg">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by learner or course..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 bg-white hover:bg-slate-50 rounded-md text-sm font-medium text-slate-700 shadow-sm transition-colors">
              <Filter size={16} /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 bg-white hover:bg-slate-50 rounded-md text-sm font-medium text-slate-700 shadow-sm transition-colors">
              Sort by: Newest
            </button>
          </div>
        </div>

        {/* List */}
        <div className="divide-y divide-slate-100">
          {escalations.map((item) => (
            <div key={item.id} className="p-5 flex flex-col sm:flex-row gap-4 justify-between hover:bg-slate-50 transition-colors">
              <div className="flex gap-4">
                 <div className="mt-1">
                   {item.status === 'resolved' 
                    ? <CheckCircle size={20} className="text-green-500" />
                    : <AlertCircle size={20} className={item.priority === 'high' ? 'text-red-500' : item.priority === 'medium' ? 'text-orange-500' : 'text-blue-500'} />
                   }
                 </div>
                 <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-slate-900">{item.learner}</h3>
                      <span className="text-xs text-slate-400">&bull;</span>
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{item.course}</span>
                    </div>
                    <p className="text-sm font-medium text-slate-800 mb-2">{item.reason}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Clock size={14} /> {item.time}</span>
                      <span>ID: {item.id}</span>
                    </div>
                 </div>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 shrink-0">
                {item.status === 'open' ? (
                  <>
                    <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm transition-colors">
                      Review Transcript
                    </button>
                  </>
                ) : (
                  <button className="border border-slate-300 hover:bg-slate-100 text-slate-700 px-4 py-2 rounded-md text-sm font-medium shadow-sm transition-colors">
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
