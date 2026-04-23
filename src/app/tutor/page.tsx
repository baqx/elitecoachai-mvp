"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Send, User, Bot, Loader2, Sparkles, Brain, Info, History, Trash2, Maximize2 } from "lucide-react";
import { MOCK_USER_PROFILE, MOCK_COURSES } from "@/lib/mock";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
};

export default function TutorChatPage() {
  const profile = MOCK_USER_PROFILE;
  const course = MOCK_COURSES[1]; // Data Analytics with Python
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I am your Elite Coach AI tutor. We are currently working on your course 'Data Analytics with Python'. How can I help you today?",
      timestamp: "10:30 AM"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input, timestamp: time };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Mock API response delay
    setTimeout(() => {
      const botMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: "assistant", 
        content: "That's a great question. In pandas, `read_csv` is the function used to load data from a CSV file into a DataFrame. For example:\n\n`import pandas as pd`\n`df = pd.read_csv('data.csv')`\n\nWould you like me to explain any of the parameters it takes?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* ── Tutor Header ───────────────────────────── */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-20 flex-shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-slate-400 hover:text-slate-900 transition-all">
            <ArrowLeft size={20} />
          </Link>
          <div className="h-6 w-px bg-slate-200" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-blue-100">
              <Sparkles size={18} />
            </div>
            <div>
              <h1 className="text-sm font-bold text-slate-900 leading-none">Elite Coach AI</h1>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                  Live Support Agent
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
            <History size={18} />
          </button>
          <button className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
            <Trash2 size={18} />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* ── Main Chat Canvas ────────────────────────── */}
        <div className="flex-1 flex flex-col bg-white relative">
          <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] pointer-events-none" />
          
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8 relative z-10 scrollbar-thin">
            <div className="max-w-3xl mx-auto py-4">
              {/* Session Start Marker */}
              <div className="flex items-center gap-4 mb-12">
                <div className="flex-1 h-px bg-slate-100" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Session Initialized</span>
                <div className="flex-1 h-px bg-slate-100" />
              </div>

              <div className="space-y-8">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-4 ${msg.role === "assistant" ? "items-start" : "items-start flex-row-reverse"}`}>
                    {/* Avatar */}
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm border mt-1
                      ${msg.role === "assistant" 
                        ? "bg-slate-900 text-white border-slate-800" 
                        : "bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-blue-400/20"}`}
                    >
                      {msg.role === "assistant" ? <Sparkles size={16} /> : <span className="text-xs font-bold">{profile.initials}</span>}
                    </div>
                    
                    {/* Bubble */}
                    <div className={`flex flex-col ${msg.role === "assistant" ? "items-start" : "items-end"} max-w-[85%]`}>
                      <div 
                        className={`px-5 py-4 text-sm leading-relaxed border shadow-sm
                          ${msg.role === "assistant" 
                            ? "bg-white text-slate-800 rounded-2xl rounded-tl-sm border-slate-200" 
                            : "bg-blue-600 text-white rounded-2xl rounded-tr-sm border-blue-500"}`}
                      >
                        {msg.content.split('\n').map((line, i) => (
                          <p key={i} className={`${i > 0 && line.trim() ? "mt-3" : ""} ${line.startsWith('`') ? "font-mono bg-black/10 px-1.5 py-0.5 rounded text-[13px] border border-black/5" : ""}`}>
                            {line.replace(/`/g, '')}
                          </p>
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 mt-2 px-1 uppercase tracking-widest">
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-sm border border-slate-800 mt-1">
                      <Sparkles size={16} />
                    </div>
                    <div className="px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl rounded-tl-sm shadow-inner flex items-center gap-1.5 h-12">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></div>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* ── Input Dock ────────────────────────────── */}
          <div className="p-6 bg-white border-t border-slate-200 relative z-20">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="flex gap-3 items-end">
                <div className="flex-1 relative group">
                  <textarea
                    rows={1}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e);
                        }
                    }}
                    placeholder="Ask about dataframes, loops, or Lagos tech trends..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-5 pr-14 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-sm shadow-sm transition-all resize-none overflow-hidden"
                    disabled={isTyping}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className={`absolute right-3 bottom-2.5 p-2 rounded-xl transition-all
                      ${!input.trim() || isTyping 
                        ? 'text-slate-300' 
                        : 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95'}`}
                  >
                    {isTyping ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  </button>
                </div>
              </form>
              <div className="flex items-center justify-center gap-4 mt-4">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.15em]">RAG Context Enabled</span>
                <div className="h-1 w-1 rounded-full bg-slate-200" />
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.15em]">Neural Engine v4.2</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* ── Intelligence Sidebar ─────────────────────── */}
        <div className="w-80 border-l border-slate-200 bg-slate-50 hidden lg:flex flex-col shrink-0">
          <div className="p-5 border-b border-slate-200 bg-white">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-widest">Active Intelligence</h3>
          </div>
          
          <div className="flex-1 overflow-y-auto p-5 space-y-8">
            {/* Context Card */}
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Brain size={12} className="text-blue-500" /> Semantic Focus
              </p>
              <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
                <p className="text-xs font-bold text-slate-900">{course.title}</p>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                  The AI is currently prioritized for <strong>Module 3: Implementation Patterns</strong>.
                </p>
              </div>
            </div>
            
            {/* Reference Chunks */}
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Info size={12} className="text-indigo-500" /> RAG References
              </p>
              <div className="space-y-2">
                {[
                  "Pandas read_csv docs",
                  "Memory-efficient processing",
                  "Lagos data governance laws"
                ].map((chunk, i) => (
                  <div key={i} className="group bg-white border border-slate-200 p-3 rounded-xl hover:border-blue-300 transition-all cursor-help">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-700 truncate">{chunk}</span>
                      <Maximize2 size={10} className="text-slate-300 group-hover:text-blue-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-auto space-y-2">
              <button className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-sm">
                Summarize Conversation
              </button>
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-lg shadow-slate-200">
                Escalate to Human Tutor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
