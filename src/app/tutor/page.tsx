"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Send, User, Bot, Loader2, Sparkles } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function TutorChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I am your Elite Coach AI tutor. We are currently working on your course 'Data Analytics with Python'. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Mock API response delay
    setTimeout(() => {
      const botMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: "assistant", 
        content: "That's a great question. In pandas, `read_csv` is the function used to load data from a CSV file into a DataFrame. For example:\n\n`import pandas as pd`\n`df = pd.read_csv('data.csv')`\n\nWould you like me to explain any of the parameters it takes?"
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between shrink-0 leading-none">
        <div className="flex items-center gap-4">
           <Link href="/dashboard" className="text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div className="h-6 w-px bg-slate-200"></div>
          <div className="flex items-center gap-2">
            <Bot size={20} className="text-blue-600" />
            <h1 className="text-sm font-bold text-slate-900">AI Tutor Session</h1>
          </div>
        </div>
        <div className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-md border border-green-200 flex items-center gap-1.5 shadow-sm hidden sm:flex">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> Active
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-white">
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 pb-32">
            <div className="max-w-3xl mx-auto space-y-6">
              
              <div className="text-center mb-8">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Today</p>
              </div>

              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-4 ${msg.role === "assistant" ? "" : "flex-row-reverse"}`}>
                  <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 shadow-sm border
                    ${msg.role === "assistant" ? "bg-blue-600 text-white border-blue-700" : "bg-slate-200 text-slate-700 border-slate-300"}`}
                  >
                    {msg.role === "assistant" ? <Sparkles size={16} /> : <User size={16} />}
                  </div>
                  
                  <div className={`flex flex-col ${msg.role === "assistant" ? "items-start" : "items-end"} max-w-[85%]`}>
                    <span className="text-xs font-medium text-slate-500 mb-1 px-1">
                      {msg.role === "assistant" ? "Elite Coach AI" : "You"}
                    </span>
                    <div 
                      className={`px-4 py-3 text-sm leading-relaxed border
                        ${msg.role === "assistant" 
                          ? "bg-slate-50 text-slate-800 rounded-2xl rounded-tl-sm border-slate-200 shadow-sm" 
                          : "bg-slate-900 text-white rounded-2xl rounded-tr-sm border-slate-800 shadow-sm"}`}
                    >
                      {/* Simple mock markdown rendering (splits by newlines) */}
                      {msg.content.split('\n').map((line, i) => (
                        <p key={i} className={`${i > 0 && line.trim() ? "mt-2" : ""} ${line.startsWith('`') ? "font-mono bg-black/10 dark:bg-white/10 px-1 py-0.5 rounded text-xs inline-block" : ""}`}>
                          {line.replace(/`/g, '')}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-md bg-blue-600 text-white border border-blue-700 flex items-center justify-center shrink-0 shadow-sm">
                    <Sparkles size={16} />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-xs font-medium text-slate-500 mb-1 px-1">Elite Coach AI</span>
                    <div className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1.5 h-11">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-200 z-10">
            <div className="max-w-3xl mx-auto relative">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 bg-slate-50 border border-slate-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm shadow-sm transition-all"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-md px-4 flex items-center justify-center transition-colors shadow-sm"
                >
                  {isTyping ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                </button>
              </form>
              <div className="text-center mt-3">
                <span className="text-xs text-slate-400">Responses are generated by AI. They may contain inaccuracies.</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Context Sidebar (Desktop Only) */}
        <div className="w-80 border-l border-slate-200 bg-slate-50 hidden lg:flex flex-col">
          <div className="p-4 border-b border-slate-200 bg-white">
            <h3 className="font-bold text-slate-900 text-sm">Session Context</h3>
          </div>
          <div className="p-5 flex-1 overflow-y-auto space-y-6">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Current Topic</p>
              <div className="bg-white border border-slate-200 p-3 rounded-md shadow-sm">
                <p className="text-sm font-medium text-slate-900">Data Analytics with Python</p>
                <p className="text-xs text-slate-500 mt-1">Module 2: Pandas DataFrames</p>
              </div>
            </div>
            
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Knowledge Base Chunks</p>
              <div className="space-y-2">
                <div className="bg-white border text-xs border-slate-200 py-2 px-3 rounded-md text-slate-600 shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span> Loading data with read_csv
                </div>
                <div className="bg-white border text-xs border-slate-200 py-2 px-3 rounded-md text-slate-600 shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-300 inline-block"></span> Handling missing values
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <button className="w-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium py-2 px-4 rounded-md text-sm transition-colors shadow-sm">
                End & Summarize Session
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
