import { Search, Filter, MoreVertical, Edit2, Trash2, UserPlus, Shield, User, Headphones } from "lucide-react";

export default function AdminUsersPage() {
  const users = [
    { name: "Sarah Jenkins", email: "sarah.j@example.com", role: "Tutor", status: "Active", joined: "Oct 24, 2023", initials: "SJ" },
    { name: "John Adebayo", email: "john.a@kpmg.com", role: "Learner", status: "Active", joined: "Oct 22, 2023", initials: "JA" },
    { name: "Funke Akindele", email: "funke.a@mtn.ng", role: "Admin", status: "Active", joined: "Sep 15, 2023", initials: "FA" },
    { name: "Bolu Otunla", email: "bolu.o@accessbank.com", role: "Learner", status: "Inactive", joined: "Aug 12, 2023", initials: "BO" },
    { name: "James Williams", email: "james.w@example.com", role: "Tutor", status: "Active", joined: "Jul 05, 2023", initials: "JW" },
  ];

  const roleStyles: Record<string, string> = {
    Tutor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    Learner: "bg-blue-50 text-blue-700 border-blue-100",
    Admin: "bg-indigo-50 text-indigo-700 border-indigo-100",
  };

  const roleIcons: Record<string, any> = {
    Tutor: Headphones,
    Learner: User,
    Admin: Shield,
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">User Management</h1>
          <p className="text-slate-500 text-sm mt-0.5">Manage enterprise learners, tutors, and platform administrators.</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-3">
          <div className="relative w-full md:w-72 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500" size={16} />
            <input 
              type="text" 
              placeholder="Search by name, email, or org..." 
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm transition-all shadow-sm"
            />
          </div>
          <button className="p-3 border border-slate-200 bg-white rounded-xl text-slate-600 hover:bg-slate-50 shadow-sm active:scale-95 transition-all">
            <Filter size={18} />
          </button>
          <button className="px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-black text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-slate-200 transition-all active:scale-95">
            <UserPlus size={16} /> Add User
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden animate-fade-in-up">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] border-b border-slate-100">
                <th className="px-8 py-5">Profile Identity</th>
                <th className="px-8 py-5">System Role</th>
                <th className="px-8 py-5">Operational Status</th>
                <th className="px-8 py-5">Registration Date</th>
                <th className="px-8 py-5 text-right">Management</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {users.map((user, i) => {
                const Icon = roleIcons[user.role];
                return (
                  <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs shadow-inner">
                          {user.initials}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm">{user.name}</p>
                          <p className="text-xs text-slate-400 font-medium">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-4">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[10px] font-bold uppercase tracking-widest ${roleStyles[user.role]}`}>
                        <Icon size={12} /> {user.role}
                      </div>
                    </td>
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-2 text-xs font-bold">
                        <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-slate-300'}`} />
                        <span className={user.status === 'Active' ? 'text-slate-900' : 'text-slate-400'}>{user.status}</span>
                      </div>
                    </td>
                    <td className="px-8 py-4 text-xs font-semibold text-slate-500">{user.joined}</td>
                    <td className="px-8 py-4 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                         <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"><Edit2 size={16} /></button>
                         <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 size={16} /></button>
                         <button className="p-2 text-slate-400 hover:text-slate-900 rounded-lg transition-all"><MoreVertical size={16} /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="px-8 py-6 border-t border-slate-50 bg-slate-50/30 flex items-center justify-between">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Showing top performers & priority users</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 shadow-sm transition-all active:scale-95">Previous</button>
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 shadow-sm transition-all active:scale-95">Next Page</button>
          </div>
        </div>
      </div>
    </div>
  );
}
