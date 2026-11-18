import { useState, useCallback } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ChatAssistant from "./components/ChatAssistant.jsx";
import ScrollTopButton from "./components/ScrollTopButton.jsx";

export default function App() {
  // The assistant opens when the hero search box / chips are used.
  // "nonce" changes on every request so the same question can be asked twice.
  const [chat, setChat] = useState({ open: false, question: null, nonce: 0 });

  const openChat = useCallback((question = null) => {
    setChat((c) => ({ open: true, question, nonce: c.nonce + 1 }));
  }, []);
  const closeChat = useCallback(() => setChat((c) => ({ ...c, open: false })), []);

  return (
    <>
      <div className="bg-glow" aria-hidden="true" />
      <Navbar onOpenChat={() => openChat(null)} />
      <main>
        <Hero onAsk={openChat} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ChatAssistant chat={chat} onClose={closeChat} onOpen={() => openChat(null)} />
      <ScrollTopButton />
    </>
  );
}
