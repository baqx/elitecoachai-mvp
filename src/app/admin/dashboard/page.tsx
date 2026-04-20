import { Users, BookOpen, AlertCircle, BarChart3, ArrowUpRight } from "lucide-react";

export default function AdminDashboardPage() {
  const stats = [
    { name: "Total Supported Learners", value: "842", change: "+12%", trend: "up", icon: Users },
    { name: "Active Enrollments", value: "1,204", change: "+5%", trend: "up", icon: BookOpen },
    { name: "Avg. Completion Rate", value: "68%", change: "+2%", trend: "up", icon: BarChart3 },
    { name: "Open Escalations", value: "14", change: "-4", trend: "down", icon: AlertCircle },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Platform Overview</h1>
          <p className="text-slate-500 mt-1">Enterprise administration and high-level metrics.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <select className="bg-white border border-slate-300 text-slate-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-3 py-2 shadow-sm">
            <option>All Organizations</option>
            <option>KPMG Africa</option>
            <option>Access Bank</option>
            <option>MTN Nigeria</option>
          </select>
          <button className="bg-slate-900 hover:bg-slate-800 text-white rounded-md px-4 py-2 text-sm font-medium transition-colors shadow-sm">
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-5 border border-slate-200 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
                <stat.icon size={20} />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-md bg-slate-50 flex items-center gap-1 ${stat.trend === 'up' ? 'text-green-600' : 'text-blue-600'}`}>
                {stat.trend === 'up' && <ArrowUpRight size={14} className="text-green-500" />}
                {stat.change}
              </span>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-sm font-medium text-slate-500 mt-1">{stat.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* At Risk Table */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Learners At Risk</h2>
            <button className="text-xs font-medium text-blue-600 hover:text-blue-700">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-600">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50/50 border-b border-slate-100">
                <tr>
                  <th scope="col" className="px-5 py-3">Learner</th>
                  <th scope="col" className="px-5 py-3">Organization</th>
                  <th scope="col" className="px-5 py-3">Status</th>
                  <th scope="col" className="px-5 py-3">Last Active</th>
                  <th scope="col" className="px-5 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-slate-50 hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-slate-900">Sarah O.</td>
                  <td className="px-5 py-3 text-slate-500">Access Bank</td>
                  <td className="px-5 py-3">
                    <span className="bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded text-xs font-medium">10 Days Inactive</span>
                  </td>
                  <td className="px-5 py-3">Oct 12, 2026</td>
                  <td className="px-5 py-3 text-right">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-xs">Send Nudge</button>
                  </td>
                </tr>
                <tr className="bg-white border-b border-slate-50 hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-slate-900">Michael B.</td>
                  <td className="px-5 py-3 text-slate-500">KPMG Africa</td>
                  <td className="px-5 py-3">
                    <span className="bg-orange-50 text-orange-700 border border-orange-200 px-2 py-0.5 rounded text-xs font-medium">Low Score (45%)</span>
                  </td>
                  <td className="px-5 py-3">Yesterday</td>
                  <td className="px-5 py-3 text-right">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-xs">Assign Tutor</button>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-slate-900">David M.</td>
                  <td className="px-5 py-3 text-slate-500">MTN Nigeria</td>
                  <td className="px-5 py-3">
                    <span className="bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded text-xs font-medium">Failed Exam x2</span>
                  </td>
                  <td className="px-5 py-3">Today</td>
                  <td className="px-5 py-3 text-right">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-xs">View Logs</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm">
          <div className="px-5 py-4 border-b border-slate-100 bg-slate-50">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Quick Actions</h2>
          </div>
          <div className="p-2">
            <button className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-md transition-colors text-left group">
              <div>
                <p className="text-sm font-medium text-slate-900 group-hover:text-blue-700 transition-colors">Import Users (CSV)</p>
                <p className="text-xs text-slate-500 mt-0.5">Bulk invite enterprise cohort</p>
              </div>
              <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600" />
            </button>
            <div className="h-px bg-slate-100 mx-3"></div>
            <button className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-md transition-colors text-left group">
              <div>
                <p className="text-sm font-medium text-slate-900 group-hover:text-blue-700 transition-colors">Assign Courses</p>
                <p className="text-xs text-slate-500 mt-0.5">Enroll teams or individuals</p>
              </div>
              <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600" />
            </button>
             <div className="h-px bg-slate-100 mx-3"></div>
            <button className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-md transition-colors text-left group">
              <div>
                <p className="text-sm font-medium text-slate-900 group-hover:text-blue-700 transition-colors">Send Broadcast</p>
                <p className="text-xs text-slate-500 mt-0.5">WhatsApp / Email an update</p>
              </div>
              <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
