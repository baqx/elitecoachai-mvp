"use client";

import { useState } from "react";
import { Users, TrendingUp, AlertTriangle, DollarSign, Upload, Search, Filter, X, CheckSquare, Square, ChevronDown } from "lucide-react";

export default function EnterpriseAdminDashboard() {
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const mockUsers = [
    { id: 1, name: "Sarah Jenkins", email: "sarah.j@techcorp.com", course: "Advanced ML", progress: 68, lastActive: "2 hours ago", status: "Active" },
    { id: 2, name: "Michael Chen", email: "m.chen@techcorp.com", course: "Python Basics", progress: 14, lastActive: "4 days ago", status: "At-Risk" },
    { id: 3, name: "Jessica Taylor", email: "j.taylor@techcorp.com", course: "Cloud Architecture", progress: 92, lastActive: "Just now", status: "Active" },
    { id: 4, name: "David Rodriguez", email: "d.rod@techcorp.com", course: "Prompt Engineering", progress: 0, lastActive: "Never", status: "Not Started" },
    { id: 5, name: "Emily Watson", email: "e.watson@techcorp.com", course: "Advanced ML", progress: 41, lastActive: "1 day ago", status: "Active" },
  ];

  const handleSelectAll = () => {
    if (selectedUsers.length === mockUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(mockUsers.map(u => u.id));
    }
  }

  const handleSelectUser = (id: number) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter(userId => userId !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Enterprise Overview</h1>
          <p className="text-slate-500 font-medium mt-1">Manage organizational learning and track KPI metrics.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-3 rounded-xl font-bold shadow-sm hover:bg-slate-50 transition-colors flex">
             <Upload size={18} /> Bulk Import CSV
          </button>
          <button 
             onClick={() => setIsAssignModalOpen(true)}
             className="flex-1 md:flex-none bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-xl font-bold shadow-sm transition-colors"
          >
             Assign Course
          </button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Active Users", value: "2,459", sub: "+12% this month", icon: Users, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
          { label: "Completion Rate", value: "68.4%", sub: "+4% vs industry", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50", border: "border-green-100" },
          { label: "At-Risk Learners", value: "142", sub: "-8% from last week", icon: AlertTriangle, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
          { label: "Budget Spent", value: "$45.2k", sub: "64% of annual budget", icon: DollarSign, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className={`bg-white p-6 rounded-3xl border ${stat.border} shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow`}>
               <div className="flex justify-between items-start mb-6">
                 <div className={`p-3.5 rounded-2xl ${stat.bg} ${stat.color}`}>
                   <Icon size={26} strokeWidth={2.5} />
                 </div>
               </div>
               <p className="text-4xl font-black text-slate-800 tracking-tight mb-2">{stat.value}</p>
               <p className="text-sm font-bold text-slate-600 mb-1">{stat.label}</p>
               <p className="text-xs text-slate-400 font-medium">{stat.sub}</p>
            </div>
          )
        })}
      </div>

      {/* Data Table Area */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
         <div className="p-8 border-b border-slate-100 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 bg-slate-50/50">
            <h2 className="text-xl font-bold text-slate-800">Learner Roster</h2>
            
            <div className="flex gap-3 w-full xl:w-auto">
              <div className="relative flex-1 xl:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search learners by name or email..." 
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm font-medium bg-white shadow-sm"
                />
              </div>
              <button className="px-4 py-3 border border-slate-200 rounded-xl text-slate-600 bg-white hover:bg-slate-50 flex items-center justify-center flex-shrink-0 transition-colors shadow-sm">
                <Filter size={20} />
              </button>
            </div>
         </div>
         
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-white text-slate-400 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                  <th className="px-8 py-5 w-12 text-center">
                    <button onClick={handleSelectAll} className="text-slate-300 hover:text-slate-500 transition-colors mt-1">
                      {selectedUsers.length === mockUsers.length ? <CheckSquare size={20} className="text-slate-800" /> : <Square size={20} />}
                    </button>
                  </th>
                  <th className="px-6 py-5">Employee</th>
                  <th className="px-6 py-5">Assigned Path</th>
                  <th className="px-6 py-5">Progress</th>
                  <th className="px-6 py-5">Last Active</th>
                  <th className="px-8 py-5 text-right flex items-center justify-end gap-1">Status <ChevronDown size={14}/></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-8 py-5 text-center">
                      <button onClick={() => handleSelectUser(user.id)} className="text-slate-300 group-hover:text-slate-400 transition-colors mt-1">
                        {selectedUsers.includes(user.id) ? <CheckSquare size={20} className="text-slate-800" /> : <Square size={20} />}
                      </button>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex-shrink-0 flex items-center justify-center font-bold text-slate-500">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">{user.name}</p>
                          <p className="text-xs font-medium text-slate-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-bold text-slate-700">
                      {user.course}
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-full max-w-[120px] bg-slate-100 rounded-full h-2">
                          <div 
                            className={`h-full rounded-full ${user.status === 'At-Risk' ? 'bg-amber-500' : 'bg-green-500'}`} 
                            style={{ width: `${user.progress}%` }} 
                          />
                        </div>
                        <span className="text-xs font-bold text-slate-600 w-8">{user.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-slate-500 text-sm font-bold">
                      {user.lastActive}
                    </td>
                    <td className="px-8 py-5 text-right">
                       <span className={`inline-flex items-center justify-center px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider
                         ${user.status === 'Active' ? 'bg-green-50 text-green-700 border border-green-200' : ''}
                         ${user.status === 'At-Risk' ? 'bg-amber-50 text-amber-700 border border-amber-200' : ''}
                         ${user.status === 'Not Started' ? 'bg-slate-100 text-slate-500 border border-slate-200' : ''}
                       `}>
                         {user.status}
                       </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
         </div>
      </div>

      {/* Assign Course Modal Overlay */}
      {isAssignModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
           <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
             <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
               <h3 className="text-xl font-bold text-slate-800">Assign Learning Path</h3>
               <button 
                 onClick={() => setIsAssignModalOpen(false)}
                 className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-xl transition-colors"
               >
                 <X size={20} />
               </button>
             </div>
             
             <div className="p-8 space-y-6">
                <div>
                   <label className="text-sm font-bold text-slate-700 mb-2 block">Selected Learners</label>
                   <div className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600 font-bold">
                     {selectedUsers.length > 0 ? `${selectedUsers.length} Users Selected` : 'All Users (Enterprise Default)'}
                   </div>
                </div>

                <div>
                   <label className="text-sm font-bold text-slate-700 mb-2 block">Select Course or Path</label>
                   <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm font-bold text-slate-700 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207l5%205%205-5%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center]">
                     <option>Advanced Deep Learning Specialization</option>
                     <option>Prompt Engineering 101</option>
                     <option>AI for Product Managers</option>
                     <option>Ethics & Bias in Generative Tech</option>
                   </select>
                </div>

                <div>
                   <label className="text-sm font-bold text-slate-700 mb-2 block">Completion Deadline</label>
                   <input type="date" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm font-bold text-slate-700" />
                </div>
                
                <div className="flex items-center gap-3 pt-2">
                   <input type="checkbox" id="notify" className="w-5 h-5 rounded border-slate-300 text-slate-900 focus:ring-slate-900 cursor-pointer" defaultChecked />
                   <label htmlFor="notify" className="text-sm text-slate-600 font-bold cursor-pointer">Send automatic email notification to users</label>
                </div>
             </div>

             <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
               <button 
                 onClick={() => setIsAssignModalOpen(false)}
                 className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-sm"
               >
                 Cancel
               </button>
               <button 
                 onClick={() => setIsAssignModalOpen(false)}
                 className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-sm"
               >
                 Assign Course
               </button>
             </div>
           </div>
        </div>
      )}
    </div>
  );
}
