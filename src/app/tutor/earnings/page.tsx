import { Wallet, TrendingUp, Calendar, ArrowUpRight, DollarSign, Download, Clock, CreditCard, CheckCircle } from "lucide-react";

export default function TutorEarningsPage() {
  const payouts = [
    { date: "Oct 15, 2026", amount: "₦640,000.00", status: "Completed", method: "Bank Transfer (••• 4211)", id: "PAY-10492" },
    { date: "Oct 01, 2026", amount: "₦580,000.00", status: "Completed", method: "Bank Transfer (••• 4211)", id: "PAY-10381" },
    { date: "Sep 15, 2026", amount: "₦720,500.00", status: "Completed", method: "Bank Transfer (••• 4211)", id: "PAY-10270" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Earnings & Compensation</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Track your revenue from elite enterprise tutoring sessions.</p>
        </div>
        <button className="flex items-center justify-center gap-2.5 px-6 py-3 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-700 shadow-sm transition-all active:scale-95">
          <Download size={16} /> Download Statement
        </button>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           
           <div className="relative z-10">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
                <Wallet size={14} /> Available Funds
              </div>
              <p className="text-4xl font-bold text-white tracking-tight leading-none mb-2">₦1,240,500</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Global Payout Balance</p>
              
              <div className="mt-10 flex items-center justify-between">
                 <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">Next Payout</span>
                    <span className="text-xs font-bold text-white mt-1">Nov 01, 2026</span>
                 </div>
                 <button className="px-6 py-3 bg-white text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-xl shadow-lg hover:scale-105 transition-all active:scale-95">
                    Withdraw
                 </button>
              </div>
           </div>
        </div>

        <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl flex flex-col justify-between">
           <div>
              <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
                <TrendingUp size={14} className="text-indigo-500" /> Revenue Growth
              </div>
              <p className="text-3xl font-bold text-slate-900 tracking-tight leading-none mb-2">₦850,000</p>
              <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest">+12% vs Previous Month</p>
           </div>
           <div className="mt-8 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="bg-indigo-600 h-full rounded-full" style={{ width: '65%' }} />
           </div>
        </div>

        <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl flex flex-col justify-between">
           <div>
              <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
                <Clock size={14} className="text-emerald-500" /> Operational Depth
              </div>
              <p className="text-3xl font-bold text-slate-900 tracking-tight leading-none mb-2">42.5 hrs</p>
              <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">₦20,000 / Session Hour</p>
           </div>
           <div className="mt-8 flex gap-2">
              {[1,2,3,4,5,6,7].map(i => (
                 <div key={i} className={`flex-1 h-8 rounded shrink-0 ${i > 4 ? 'bg-slate-100' : 'bg-emerald-100 border border-emerald-200'}`} />
              ))}
           </div>
        </div>
      </div>

      {/* Payout history */}
      <div className="space-y-4">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Historical Settlements</h2>
        <div className="bg-white border border-slate-200 rounded-[2rem] shadow-xl overflow-hidden divide-y divide-slate-100">
          {payouts.map((tx, i) => (
            <div key={i} className="group p-6 flex flex-col sm:flex-row items-center justify-between gap-6 hover:bg-slate-50 transition-all cursor-pointer">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-blue-600 transition-all group-hover:scale-105 group-hover:shadow-md">
                     <CreditCard size={20} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900 leading-none">{tx.amount}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">
                      {tx.date} &bull; {tx.method}
                    </p>
                  </div>
               </div>
               
               <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                     <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest leading-none">Internal ID</p>
                     <p className="text-xs font-bold text-slate-500 mt-1">{tx.id}</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-xl text-[10px] font-bold uppercase tracking-widest">
                    <CheckCircle size={12} fill="currentColor" className="text-blue-500" />
                    {tx.status}
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
