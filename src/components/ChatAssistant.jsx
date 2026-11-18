import { useEffect, useRef, useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import { getReply, quickQuestions } from "../utils/assistant";

const greeting = {
  from: "bot",
  text: "Hi! I'm Sashank's portfolio assistant. Ask me about his projects, skills, education, certificates or how to contact him.",
};

export default function ChatAssistant({ chat, onClose, onOpen }) {
  const [messages, setMessages] = useState([greeting]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  const ask = (question) => {
    setMessages((m) => [...m, { from: "user", text: question }]);
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", ...getReply(question) }]);
      setTyping(false);
    }, 600);
  };

  // When a question comes in from the hero search box / chips, answer it.
  useEffect(() => {
    if (chat.question) ask(chat.question);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chat.nonce]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, typing]);

  const submit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    ask(input.trim());
    setInput("");
  };

  return (
    <>
      {!chat.open && (
        <button className="chat-fab" onClick={onOpen} aria-label="Open portfolio assistant">
          <FaRobot />
        </button>
      )}

      <aside className={`chat-panel ${chat.open ? "open" : ""}`} aria-hidden={!chat.open} aria-label="Portfolio assistant">
        <div className="chat-header">
          <span><FaRobot /> Portfolio Assistant</span>
          <button onClick={onClose} aria-label="Close assistant"><FaTimes /></button>
        </div>

        <div className="chat-messages">
          {messages.map((m, i) => (
            <div key={i} className={`msg ${m.from}`}>
              <p>{m.text}</p>
              {m.items && (
                <ul>
                  {m.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              {m.links && (
                <div className="msg-links">
                  {m.links.map((l) => (
                    <a key={l.label} href={l.href}
                      target={l.href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          {typing && <div className="msg bot"><p className="dots"><i /><i /><i /></p></div>}
          <div ref={endRef} />
        </div>

        <div className="chat-chips">
          {quickQuestions.map((q) => (
            <button key={q.label} className="chip" onClick={() => ask(q.question)}>{q.label}</button>
          ))}
        </div>

        <form className="chat-input" onSubmit={submit}>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask something…"
            aria-label="Type your question" tabIndex={chat.open ? 0 : -1} />
          <button type="submit" aria-label="Send" tabIndex={chat.open ? 0 : -1}><FaPaperPlane /></button>
        </form>
      </aside>
    </>
  );
}
