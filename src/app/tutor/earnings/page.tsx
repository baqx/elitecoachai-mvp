import { DollarSign, TrendingUp, Calendar } from "lucide-react";

export default function TutorEarningsPage() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Your Earnings</h1>
        <p className="text-slate-500">Track your compensation and review payout history</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-2xl shadow-md text-white">
          <div className="flex items-center gap-2 text-green-100 mb-4 font-medium">
            <DollarSign size={18} /> Available Balance
          </div>
          <p className="text-4xl font-bold tracking-tight mb-2">$1,240.50</p>
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-green-500/30">
            <span className="text-sm text-green-100">Next payout: Nov 1</span>
            <button className="px-4 py-1.5 bg-white text-green-700 text-sm font-bold rounded-lg shadow-sm hover:bg-green-50 transition-colors">
              Withdraw
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-2 text-slate-500 mb-4 font-medium">
             <TrendingUp size={18} /> This Month
          </div>
          <p className="text-3xl font-bold text-slate-800 mb-2">$850.00</p>
          <p className="text-sm font-medium text-green-600 flex items-center gap-1">
            <TrendingUp size={14} /> +12% from last month
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-2 text-slate-500 mb-4 font-medium">
             <Calendar size={18} /> Hours Logged
          </div>
          <p className="text-3xl font-bold text-slate-800 mb-2">42.5 hrs</p>
          <p className="text-sm text-slate-500 mt-1">Average hourly rate: <span className="font-semibold text-slate-700">$20/hr</span></p>
        </div>
      </div>

      <h2 className="text-lg font-bold text-slate-800 mb-4">Payout History</h2>
      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="divide-y divide-slate-100">
          {[
            { date: "Oct 15, 2023", amount: "$640.00", status: "Completed", method: "Bank Transfer (••• 4211)" },
            { date: "Oct 1, 2023", amount: "$580.00", status: "Completed", method: "Bank Transfer (••• 4211)" },
            { date: "Sep 15, 2023", amount: "$720.50", status: "Completed", method: "Bank Transfer (••• 4211)" },
          ].map((tx, i) => (
            <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
               <div>
                 <p className="font-bold text-slate-800">{tx.amount}</p>
                 <p className="text-xs text-slate-500 mt-0.5">{tx.date} • {tx.method}</p>
               </div>
               <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                 {tx.status}
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
