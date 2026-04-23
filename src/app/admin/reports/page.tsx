import { DownloadCloud, BarChart3, PieChart, LineChart, FileText, Calendar, RefreshCw, ChevronRight } from "lucide-react";

export default function AdminReportsPage() {
  const reports = [
    { title: "User Engagement Completion", desc: "Detailed tracking of course progression", last: "2 days ago", icon: LineChart, active: true },
    { title: "Enterprise Revenue Analytics", desc: "Financial performance across sectors", last: "5 days ago", icon: BarChart3, active: false },
    { title: "Tutor Performance Rates", desc: "Response times and satisfaction scores", last: "1 week ago", icon: PieChart, active: false },
    { title: "Quiz & Assessment Averages", desc: "Competency trends across cohorts", last: "Yesterday", icon: FileText, active: false },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Intelligence & Analytics</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Extract actionable insights from platform data and learner performance.</p>
        </div>
        <button className="flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-blue-200 active:scale-95">
          <DownloadCloud size={16} /> Export Master CSV
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left: Report List */}
        <div className="lg:col-span-1 space-y-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Available Datasets</p>
          <div className="space-y-3">
            {reports.map((report, i) => (
              <div 
                key={i} 
                className={`p-5 rounded-2xl border transition-all cursor-pointer group relative
                  ${report.active 
                    ? "border-blue-600 bg-white shadow-xl ring-1 ring-blue-600/10" 
                    : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg"}`}
              >
                <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center transition-all
                  ${report.active ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500"}`}>
                  <report.icon size={20} />
                </div>
                <h3 className={`text-xs font-bold uppercase tracking-wider leading-snug ${report.active ? "text-slate-900" : "text-slate-700 group-hover:text-blue-600"}`}>
                  {report.title}
                </h3>
                <p className="text-[10px] text-slate-400 mt-2 font-bold flex items-center gap-1.5 uppercase hover:">
                  <Calendar size={12} /> Generated: {report.last}
                </p>
                {report.active && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <ChevronRight size={16} className="text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visualization Canvas */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col h-full min-h-[600px] animate-fade-in-up">
            {/* Viz Header */}
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-white relative z-10">
              <div>
                <h3 className="text-lg font-bold text-slate-900">User Engagement Completion</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">Tracking 12,402 active learner sessions from 54 organisations.</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all active:scale-95">
                  <RefreshCw size={14} /> Refresh Data
                </button>
              </div>
            </div>

            {/* Viz Content */}
            <div className="flex-1 p-8 relative flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] pointer-events-none" />
              
              {/* Mock Chart Area */}
              <div className="w-full h-80 bg-slate-50/50 rounded-2xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center p-12 text-center group">
                <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center text-blue-100 mb-6 group-hover:text-blue-500 transition-colors">
                  <BarChart3 size={40} />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2 uppercase tracking-widest">Neural Engine Vizualization</h4>
                <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-bold">
                  Charts are currently optimized for <span className="text-blue-600 underline">High Density Display</span>. Please integrate Recharts or D3 for production-ready SVG rendering.
                </p>
              </div>
              
              {/* Insights Row */}
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {[
                  { l: "Top Performing Org", v: "Access Bank", c: "text-blue-600" },
                  { l: "Avg. Daily Activity", v: "4.2 Hours", c: "text-indigo-600" },
                  { l: "Completion Forecast", v: "78% by Q4", c: "text-emerald-600" },
                ].map((ins, i) => (
                  <div key={i} className="p-5 bg-slate-50/50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{ins.l}</p>
                    <p className={`text-xl font-bold ${ins.c}`}>{ins.v}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Viz Footer */}
            <div className="px-8 py-5 border-t border-slate-100 bg-slate-50/30 flex justify-end">
              <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-black shadow-lg shadow-slate-200 transition-all active:scale-95">
                Download Granular Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
