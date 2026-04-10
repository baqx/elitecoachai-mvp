// app/admin/reports/page.tsx
import { DownloadCloud } from "lucide-react";

export default function AdminReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Reports & Analytics</h1>
          <p className="text-slate-500">Generate and export system reports</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm">
          <DownloadCloud size={18} /> Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-4">
          <h2 className="font-bold text-slate-800 mb-3">Available Reports</h2>
          {["User Engagement Completion", "Revenue Analytics", "Tutor Performance Rates", "Quiz & Assessment Averages"].map((report, i) => (
            <div key={i} className={`p-4 rounded-xl border cursor-pointer transition-colors
              ${i === 0 ? "border-green-500 bg-green-50/50 shadow-sm" : "border-slate-200 bg-white hover:border-slate-300"}`}
            >
              <h3 className={`font-bold ${i === 0 ? "text-green-800" : "text-slate-700"}`}>{report}</h3>
              <p className={`text-xs mt-1 ${i === 0 ? "text-green-600" : "text-slate-500"}`}>Last generated: 2 days ago</p>
            </div>
          ))}
        </div>
        <div className="md:col-span-2">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 h-full min-h-[400px]">
            <h3 className="font-bold text-slate-800 mb-6">User Engagement Completion</h3>
            <div className="h-64 bg-slate-50 rounded-xl border border-dashed border-slate-200 flex items-center justify-center">
              <p className="text-slate-400 font-medium">Chart visualization rendering area</p>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button className="px-4 py-2 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 font-medium transition-colors">
                Regenerate Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
