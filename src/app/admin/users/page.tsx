// app/admin/users/page.tsx
import { Search, Filter, MoreVertical, Edit2, Trash2 } from "lucide-react";

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">User Management</h1>
          <p className="text-slate-500">Manage learners, tutors, and admin accounts</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search users..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
            />
          </div>
          <button className="p-2 border border-slate-200 bg-white rounded-lg text-slate-600 hover:bg-slate-50 flex-shrink-0">
            <Filter size={20} />
          </button>
          <button className="px-4 py-2 bg-slate-900 border border-slate-900 text-white rounded-lg hover:bg-slate-800 text-sm font-medium flex-shrink-0">
            Add User
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden text-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-semibold uppercase tracking-wider text-xs border-b border-slate-200">
                <th className="px-6 py-4">Name / Email</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-slate-200 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-slate-800">Sarah Jenkins</p>
                        <p className="text-xs text-slate-500">sarah.j@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-semibold">Tutor</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-green-500" /> Active
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Oct 24, 2023</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <button className="p-1.5 text-slate-400 hover:text-slate-700 rounded transition-colors"><Edit2 size={16} /></button>
                       <button className="p-1.5 text-slate-400 hover:text-red-600 rounded transition-colors"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <p>Showing 1 to 5 of 24,592 entries</p>
          <div className="flex gap-1">
            <button className="px-2 py-1 border border-slate-200 rounded hover:bg-slate-50">Prev</button>
            <button className="px-2 py-1 border border-slate-200 rounded hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
