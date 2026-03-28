import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Paperclip,
  Send,
  Smile,
} from 'lucide-react';
import { dashboardData } from '../../data/dashboardData';

const Messages = () => {
  const [conversations, setConversations] = useState(dashboardData.conversations);
  const [activeId, setActiveId] = useState(dashboardData.conversations[0]?.id);
  const [draft, setDraft] = useState('');
  const endRef = useRef(null);

  const activeConversation = useMemo(
    () => conversations.find((chat) => chat.id === activeId),
    [activeId, conversations]
  );

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeConversation?.messages.length]);

  const handleSend = () => {
    if (!draft.trim() || !activeConversation) return;
    const nextMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: draft.trim(),
      time: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }).toLowerCase(),
    };
    setConversations((prev) => prev.map((chat) => (
      chat.id === activeConversation.id
        ? { ...chat, messages: [...chat.messages, nextMessage] }
        : chat
    )));
    setDraft('');
  };

  if (!activeConversation) {
    return null;
  }

  return (
    <motion.div
      className="dashboard-page"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="page-header">
        <div>
          <h1 className="page-title text-slate-900 text-2xl font-semibold">Messages</h1>
          <p className="page-subtitle text-slate-500">Stay in sync with mentors and recruiters.</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white shadow-sm">
        <div className="grid min-h-[640px] grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="border-b border-slate-100 lg:border-b-0 lg:border-r">
            <div className="p-5">
              <h2 className="text-lg font-semibold text-slate-900">Messages</h2>
              <input
                type="text"
                placeholder="Search conversations..."
                className="mt-4 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-600 outline-none focus:border-blue-500"
              />
            </div>
            <div className="divide-y divide-slate-100">
              {conversations.map((chat) => {
                const isActive = chat.id === activeId;
                return (
                  <button
                    key={chat.id}
                    type="button"
                    onClick={() => setActiveId(chat.id)}
                    className={`w-full border-l-4 px-5 py-4 text-left transition-colors ${
                      isActive
                        ? 'border-blue-600 bg-slate-50'
                        : 'border-transparent hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{chat.name}</p>
                        <p className="text-xs text-slate-500">{chat.lastMessage}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-4 border-b border-slate-100 px-6 py-4">
              <img
                src={activeConversation.avatar}
                alt={activeConversation.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">{activeConversation.name}</p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>{activeConversation.role}</span>
                  <span className="flex items-center gap-1">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        activeConversation.status.toLowerCase() === 'online'
                          ? 'bg-emerald-400'
                          : 'bg-slate-300'
                      }`}
                    />
                    {activeConversation.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-6 overflow-y-auto p-6">
              {activeConversation.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'items-start gap-3'}`}
                >
                  {message.sender === 'mentor' ? (
                    <img
                      src={activeConversation.avatar}
                      alt={activeConversation.name}
                      className="h-7 w-7 rounded-full object-cover"
                    />
                  ) : null}
                  <div
                    className={`max-w-[70%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                      message.sender === 'user'
                        ? 'rounded-br-none bg-blue-600 text-white'
                        : 'rounded-bl-none bg-slate-100 text-slate-700'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className={`mt-2 text-xs ${message.sender === 'user' ? 'text-blue-100' : 'text-slate-400'}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="border-t border-slate-100 px-6 py-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-100"
                >
                  <Paperclip size={18} />
                </button>
                <input
                  type="text"
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-100"
                >
                  <Smile size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleSend}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  <Send size={16} />
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Messages;
