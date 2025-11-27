import { useMemo, useRef, useState } from "react";
import { chatbotFaq } from "../../content";
import "./ChatBot.scss";

const scoreMatch = (text, entry) => {
  const words = text.toLowerCase().split(/\s+/).filter(Boolean);
  const target = (entry.question + " " + entry.answer).toLowerCase();
  return words.reduce((score, word) => (target.includes(word) ? score + 1 : score), 0);
};

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I’m the ReliantIQ guide. Ask about the platform, agents, or industries and I’ll answer using official site content.",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input.trim() };
    const best = chatbotFaq
      .map((entry) => ({ entry, score: scoreMatch(input, entry) }))
      .sort((a, b) => b.score - a.score)[0];
    const answer =
      best && best.score > 0
        ? best.entry.answer
        : "ReliantIQ unifies agents, data, and orchestration so enterprises can automate reliably across clouds. Ask about platform components, agents, or industries for specifics.";
    const botMsg = { from: "bot", text: answer };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  const recentQuestions = useMemo(() => chatbotFaq.slice(0, 3), []);

  return (
    <div className={`chatbot ${open ? "open" : ""}`}>
      <button className="chatbot__toggle btn primary" onClick={() => setOpen((o) => !o)}>
        {open ? "Close" : "Ask ReliantIQ"}
      </button>
      {open && (
        <div className="chatbot__panel card">
          <div className="chatbot__header">
            <div>
              <p className="label">ReliantIQ Assistant</p>
              <p className="muted">Answers grounded in official site and product content.</p>
            </div>
            <span className="online" aria-label="online" />
          </div>
          <div className="chatbot__suggestions">
            {recentQuestions.map((q) => (
              <button key={q.question} onClick={() => setInput(q.question)}>
                {q.question}
              </button>
            ))}
          </div>
          <div className="chatbot__messages">
            {messages.map((m, idx) => (
              <div key={idx} className={`bubble ${m.from}`}>
                {m.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div className="chatbot__input">
            <input
              type="text"
              placeholder="Ask about platform components, SRE-MVP, or industries..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="btn primary" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
