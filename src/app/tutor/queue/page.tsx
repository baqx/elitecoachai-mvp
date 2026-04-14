"use client";

import { useState } from "react";
import { MessageSquare, Clock, CheckCircle, Video, FileText, User, ShieldCheck, AlertTriangle } from "lucide-react";
import ReactMarkdown from "react-markdown";

type TranscriptMessage = {
  role: "user" | "ai" | "system";
  content: string;
  escalated?: boolean;
};

type Ticket = {
  id: number;
  name: string;
  course: string;
  wait: string;
  module: string;
  transcript: TranscriptMessage[];
};

const MOCK_TICKETS: Ticket[] = [
  { 
    id: 1, 
    name: "Alex Johnson", 
    course: "Advanced Prompt Engineering", 
    wait: "14m", 
    module: "Module 2",
    transcript: [
      { role: "ai", content: "Hello! I'm your AI Tutor. Need help understanding context windows?" },
      { role: "user", content: "Hi tutor, I'm stuck on module 2. Why does the model forget my instructions even when I place them at the very start of the prompt if the context window isn't full yet? Is there a degradation problem?" },
      { role: "ai", content: "That's a great question! Here's a brief breakdown:\n\n* **Token limit:** Ensures compute stays bounded.\n* **Attention Mechanism:** Focuses on the most relevant tokens inside the active window.\n\nKeep in mind that early context rules supreme!" },
      { role: "user", content: "I still don't understand, can I talk to a human tutor please?" },
      { role: "ai", content: "I understand you're still having trouble. I have escalated this question to a **Human Tutor**.", escalated: true },
      { role: "system", content: "Ticket #4029 generated. Waiting for an available Human Tutor..." }
    ]
  },
  { 
    id: 2, 
    name: "Samantha Lee", 
    course: "Data Science 101", 
    wait: "32m", 
    module: "Module 5",
    transcript: [
      { role: "user", content: "Why do my Pandas dataframes index completely wrong when merging?" },
      { role: "ai", content: "When you merge DataFrames, Pandas can reset or preserve indexes depending on your `how` parameter and whether you merge on index or columns." },
      { role: "user", content: "Can a human review my code file? The AI output isn't helping me fix the error." },
      { role: "ai", content: "I am escalating your request along with your code logs to a Human Tutor right now.", escalated: true },
      { role: "system", content: "Ticket #4030 generated. Waiting for an available Human Tutor..." }
    ]
  },
  { 
    id: 3, 
    name: "David Kim", 
    course: "React Patterns", 
    wait: "1h 5m", 
    module: "Module 8",
    transcript: [
      { role: "user", content: "It says I have too many re-renders. Help!" },
      { role: "ai", content: "A \"too many re-renders\" error usually happens if you incorrectly call a setState function immediately inside your component body instead of inside a `useEffect` or an event handler." },
      { role: "user", content: "I swear I'm not doing that. This is too frustrating, get me a real tutor." },
      { role: "ai", content: "I'll connect you right away to a Human Tutor.", escalated: true },
      { role: "system", content: "Ticket #4031 generated. Waiting for an available Human Tutor..." }
    ]
  }
];

export default function TutorQueuePage() {
  const [selectedTicketId, setSelectedTicketId] = useState<number>(MOCK_TICKETS[0].id);
  const selectedTicket = MOCK_TICKETS.find(t => t.id === selectedTicketId) || MOCK_TICKETS[0];

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-12 w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-end mb-4 px-1">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Support Queue</h1>
          <p className="text-slate-500 mt-1 font-medium">Learner escalations awaiting your review</p>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2.5 rounded-xl font-bold text-sm border border-blue-200/50 shadow-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse outline outline-2 outline-green-500/20" />
          Online & Accepting Queries
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 h-[calc(100vh-220px)] min-h-[700px]">
        {/* Queue List (Left Column) */}
        <div className="w-full xl:w-96 border border-slate-200 bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col shrink-0">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
             <h2 className="font-bold text-slate-800 text-lg">Open Tickets (3)</h2>
             <button className="text-xs text-blue-600 font-bold hover:underline transition-colors shrink-0">Refresh Sync</button>
          </div>
          <div className="overflow-y-auto flex-1 p-3 space-y-2">
            {MOCK_TICKETS.map((ticket) => (
              <div 
                key={ticket.id} 
                onClick={() => setSelectedTicketId(ticket.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  selectedTicketId === ticket.id 
                    ? "bg-blue-50/80 border-blue-200 shadow-sm" 
                    : "bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50"
                 }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider ${
                    selectedTicketId === ticket.id ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600"
                  }`}>
                    {ticket.module}
                  </span>
                  <span className={`text-xs font-bold flex items-center gap-1.5 ${
                     parseInt(ticket.wait) > 30 || ticket.wait.includes('h') ? 'text-red-500' : 'text-slate-400'
                  }`}>
                    <Clock size={14}/> {ticket.wait} wait
                  </span>
                </div>
                <h3 className="font-bold text-slate-800 mb-1 line-clamp-1">{ticket.name}</h3>
                <p className={`text-xs font-medium line-clamp-1 ${selectedTicketId === ticket.id ? 'text-blue-600/80' : 'text-slate-500'}`}>
                  {ticket.course}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Ticket Area (Right Column) */}
        <div className="flex-1 border border-slate-200 bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col min-w-0">
           {/* Ticket Context Header */}
           <div className="p-6 md:p-8 border-b border-slate-100 flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-white relative overflow-hidden">
             <div className="absolute right-0 top-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
             <div className="relative z-10">
               <h2 className="font-black text-slate-900 text-2xl tracking-tight mb-1">{selectedTicket.name}</h2>
               <p className="text-sm font-bold text-slate-500 flex items-center gap-2">
                 <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">{selectedTicket.course}</span> 
                 • Escalated {selectedTicket.wait} ago
               </p>
             </div>
             <button className="relative z-10 flex items-center justify-center gap-2 px-5 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 text-sm font-bold transition-all hover:-translate-y-0.5">
               <FileText size={18} /> View Learner Profile
             </button>
           </div>
           
           {/* Session Transcript Viewer */}
           <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-slate-50/50 border-b border-slate-200 space-y-6">
             <div className="mb-8 border-b border-slate-200/60 pb-4">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest text-center">--- AI Session Transcript Started ---</p>
             </div>

             {selectedTicket.transcript.map((msg, i) => (
                <div key={i} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  
                  {msg.role === "system" && (
                    <div className="w-full flex justify-center my-4">
                      <div className="bg-amber-50 border border-amber-200 text-amber-800 px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2.5 shadow-sm">
                        <AlertTriangle size={16} className="text-amber-600" />
                        {msg.content}
                      </div>
                    </div>
                  )}

                  {msg.role === "ai" && (
                    <div className="flex gap-4 max-w-[85%] sm:max-w-[70%]">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 shadow-inner mt-1 border border-slate-300">
                         <ShieldCheck size={20} className="text-slate-500" />
                      </div>
                      <div className={`p-5 rounded-2xl rounded-tl-sm text-sm border
                        ${msg.escalated ? 'bg-amber-50 border-amber-200 text-amber-900 shadow-sm' : 'bg-white border-slate-200 text-slate-700 shadow-sm'}
                      `}>
                        <div className="prose prose-sm prose-slate max-w-none">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  )}

                  {msg.role === "user" && (
                    <div className="flex gap-4 max-w-[85%] sm:max-w-[70%] flex-row-reverse">
                      <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center flex-shrink-0 shadow-inner mt-1">
                         <User size={20} className="text-blue-700" />
                      </div>
                      <div className="bg-slate-900 text-white p-5 rounded-2xl rounded-tr-sm text-sm shadow-md">
                        <p className="leading-relaxed">{msg.content}</p>
                      </div>
                    </div>
                  )}
                </div>
             ))}
           </div>

           {/* Resolution Action Area */}
           <div className="p-6 md:p-8 bg-white shrink-0">
             <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-4">Tutor Resolution Action</h3>
             <div className="relative mb-4">
               <textarea 
                 rows={4} 
                 placeholder="Draft your reply to the learner or enter internal resolution notes..." 
                 className="w-full pl-5 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm shadow-inner resize-none font-medium text-slate-700"
               />
             </div>
             <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-200 bg-white text-slate-700 rounded-xl hover:bg-slate-50 font-bold transition-all shadow-sm hover:-translate-y-0.5">
                  <Video size={18} /> Record Video Reply
                </button>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-bold transition-all shadow-md hover:-translate-y-0.5">
                  <CheckCircle size={18} /> Mark Ticket Resolved
                </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
