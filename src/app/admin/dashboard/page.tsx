import {
  Users,
  BookOpen,
  AlertCircle,
  BarChart3,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  Download,
  UserPlus,
  Send,
} from "lucide-react";

const stats = [
  {
    name: "Total Learners",
    value: "842",
    change: "+12%",
    up: true,
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    accentColor: "border-l-blue-500",
  },
  {
    name: "Active Enrollments",
    value: "1,204",
    change: "+5%",
    up: true,
    icon: BookOpen,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    accentColor: "border-l-indigo-500",
  },
  {
    name: "Avg. Completion",
    value: "68%",
    change: "+2%",
    up: true,
    icon: BarChart3,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    accentColor: "border-l-emerald-500",
  },
  {
    name: "Open Escalations",
    value: "14",
    change: "-4",
    up: false,
    icon: AlertCircle,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    accentColor: "border-l-rose-500",
  },
];

const atRisk = [
  { name: "Sarah O.", org: "Access Bank", issue: "10 Days Inactive",  last: "Oct 12",    severity: "red",    action: "Send Nudge"   },
  { name: "Michael B.", org: "KPMG Africa", issue: "Low Score (45%)", last: "Yesterday", severity: "orange", action: "Assign Tutor" },
  { name: "David M.", org: "MTN Nigeria",  issue: "Failed Exam x2",   last: "Today",     severity: "red",    action: "View Logs"    },
];

const quickActions = [
  { label: "Import Users (CSV)",  sub: "Bulk invite enterprise cohort",   icon: UserPlus   },
  { label: "Assign Course",       sub: "Enroll teams or individuals",      icon: BookOpen   },
  { label: "Send Broadcast",      sub: "WhatsApp / Email an org update",   icon: Send       },
  { label: "Export Report",       sub: "PDF / Excel compliance report",    icon: Download   },
];

const sevClass: Record<string, string> = {
  red:    "bg-red-50 text-red-700 border border-red-200",
  orange: "bg-orange-50 text-orange-700 border border-orange-200",
};

export default function AdminDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Platform Overview</h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Enterprise administration and high-level metrics.
          </p>
        </div>
        <div className="flex gap-2">
          <select className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm">
            <option>All Organisations</option>
            <option>KPMG Africa</option>
            <option>Access Bank</option>
            <option>MTN Nigeria</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg px-4 py-2 transition-colors shadow-sm shadow-blue-200 flex items-center gap-2">
            <Download size={15} /> Export
          </button>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.name}
            className={`bg-white rounded-xl border-l-4 ${s.accentColor} border border-slate-200 shadow-sm p-5`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${s.iconBg}`}>
                <s.icon size={18} className={s.iconColor} />
              </div>
              <span
                className={`text-xs font-bold flex items-center gap-1 ${
                  s.up ? "text-emerald-600" : "text-rose-600"
                }`}
              >
                {s.up ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
                {s.change}
              </span>
            </div>
            <p className="text-3xl font-bold text-slate-900">{s.value}</p>
            <p className="text-xs font-medium text-slate-500 mt-1">{s.name}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* At-risk table */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-slate-900">Learners at Risk</h2>
              <p className="text-xs text-slate-500 mt-0.5">Needs immediate attention</p>
            </div>
            <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
              View all <ArrowUpRight size={13} />
            </button>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-xs text-slate-500 uppercase font-semibold tracking-wide">
                <th className="px-5 py-3 text-left">Learner</th>
                <th className="px-5 py-3 text-left">Organisation</th>
                <th className="px-5 py-3 text-left">Issue</th>
                <th className="px-5 py-3 text-left">Last Active</th>
                <th className="px-5 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {atRisk.map((r) => (
                <tr key={r.name} className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-3.5 font-semibold text-slate-900">{r.name}</td>
                  <td className="px-5 py-3.5 text-slate-500">{r.org}</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${sevClass[r.severity]}`}>
                      {r.issue}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-slate-500 text-xs">{r.last}</td>
                  <td className="px-5 py-3.5 text-right">
                    <button className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                      {r.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick actions */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100">
            <h2 className="text-sm font-bold text-slate-900">Quick Actions</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {quickActions.map((qa) => (
              <button
                key={qa.label}
                className="w-full flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors text-left group"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center flex-shrink-0 transition-colors">
                  <qa.icon size={16} className="text-slate-500 group-hover:text-blue-600 transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors leading-tight">
                    {qa.label}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{qa.sub}</p>
                </div>
                <ArrowUpRight
                  size={15}
                  className="ml-auto text-slate-300 group-hover:text-blue-500 transition-colors flex-shrink-0"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
