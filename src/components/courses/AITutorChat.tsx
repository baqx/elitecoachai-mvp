"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, ChevronRight, User, AlertTriangle, ShieldCheck, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

export type Message = {
  id: string;
  role: "user" | "ai" | "system";
  content: string;
  isEscalated?: boolean;
};

export function AITutorChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "ai",
      content: "Hello! I'm your AI Tutor. Do you need help understanding context windows or how LLM attention mechanisms work?",
    }
  ]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isStreaming) return;

    const userText = input.trim();
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userText,
    };
    
    // Check if user is asking for human/escalation
    const isEscalationRequest = userText.toLowerCase().includes("human") || 
                                userText.toLowerCase().includes("tutor") || 
                                userText.toLowerCase().includes("don't understand");

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsStreaming(true);

    const mockupResponseText = isEscalationRequest 
      ? "I understand you're still having trouble. I have escalated this question to a **Human Tutor**. They will connect with you shortly right here in this chat window."
      : "That's a great question! Here's a brief breakdown:\n\n* **Token limit:** Ensures compute stays bounded.\n* **Attention Mechanism:** Focuses on the most relevant tokens inside the active window.\n\nKeep in mind that early context rules supreme in modern generative logic! Let me know if you need examples.";
    
    // Simulate 1 second delay before responding
    setTimeout(() => {
      const aiMessageId = (Date.now() + 1).toString();
      
      // Add empty AI message first
      setMessages((prev) => [
        ...prev, 
        { id: aiMessageId, role: "ai", content: "", isEscalated: isEscalationRequest }
      ]);

      // Stream character by character
      let i = 0;
      const interval = setInterval(() => {
        if (i < mockupResponseText.length) {
          setMessages((prev) => 
            prev.map(msg => 
              msg.id === aiMessageId 
                ? { ...msg, content: mockupResponseText.slice(0, i + 1) } 
                : msg
            )
          );
          i++;
        } else {
          clearInterval(interval);
          setIsStreaming(false);

          // If escalated, push a system alert message
          if (isEscalationRequest) {
             setTimeout(() => {
                setMessages(p => [
                  ...p, 
                  { id: Date.now().toString(), role: "system", content: "Ticket #4029 generated. Waiting for an available Human Tutor..." }
                ]);
             }, 800);
          }
        }
      }, 15); // 15ms per char
    }, 1000); 
  };

  return (
    <div className="flex flex-col h-full w-full">
      {/* Scrollable Message History */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scroll-smooth bg-slate-50/50"
      >
        {messages.map((msg) => (
          <div key={msg.id} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            
            {msg.role === "system" && (
              <div className="w-full flex justify-center my-2">
                <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 shadow-sm">
                  <AlertTriangle size={14} className="text-amber-600" />
                  {msg.content}
                </div>
              </div>
            )}

            {msg.role === "ai" && (
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm mt-1">
                   <ShieldCheck size={16} className="text-white" />
                </div>
                <div className={`p-4 rounded-2xl rounded-tl-sm text-sm shadow-sm border
                  ${msg.isEscalated ? 'bg-amber-50 border-amber-200 text-amber-900' : 'bg-white border-slate-100 text-slate-700'}
                `}>
                  <div className="prose prose-sm prose-slate max-w-none prose-p:leading-relaxed prose-a:text-blue-600">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                  {msg.isEscalated && (
                    <div className="mt-3 text-xs font-bold text-amber-600 flex items-center gap-1.5 border-t border-amber-200/50 pt-2">
                      <AlertTriangle size={12} />
                      ESCALATION TRIGGERED
                    </div>
                  )}
                </div>
              </div>
            )}

            {msg.role === "user" && (
              <div className="flex gap-3 max-w-[85%] flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm mt-1 border border-slate-300">
                   <User size={16} className="text-slate-500" />
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-2xl rounded-tr-sm text-sm shadow-md">
                  <p className="leading-relaxed">{msg.content}</p>
                </div>
              </div>
            )}

          </div>
        ))}
        {isStreaming && messages[messages.length - 1]?.role === "user" && (
          <div className="flex gap-3 max-w-[85%]">
             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm mt-1">
               <ShieldCheck size={16} className="text-white" />
             </div>
             <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-sm text-sm shadow-sm flex items-center justify-center h-10 min-w-[60px]">
               <Loader2 size={16} className="animate-spin text-blue-600" />
             </div>
          </div>
        )}
      </div>

      {/* Input Field */}
      <div className="p-4 md:p-5 bg-white border-t border-slate-100 shrink-0">
         <div className="relative flex items-center">
           <input 
             type="text" 
             value={input}
             onChange={(e) => setInput(e.target.value)}
             onKeyDown={(e) => e.key === 'Enter' && handleSend()}
             placeholder="Type your question..." 
             disabled={isStreaming}
             className="w-full pl-5 pr-14 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm shadow-inner disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed transition-colors"
           />
           <button 
             onClick={handleSend}
             disabled={!input.trim() || isStreaming}
             className="absolute right-2 p-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all shadow-sm focus:scale-95 disabled:bg-slate-200 disabled:text-slate-400 disabled:hover:scale-100"
           >
             <ChevronRight size={18} strokeWidth={3} />
           </button>
         </div>
         <p className="text-center text-[10px] uppercase font-bold text-slate-400 mt-2 tracking-wider">
           AI Output may inaccurately reflect module logic.
         </p>
      </div>
    </div>
  );
}
