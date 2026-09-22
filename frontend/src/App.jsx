import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 antialiased font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <footer className="py-12 border-t border-white/[0.08] text-center bg-[#07080c]">
        <div className="max-w-6xl mx-auto px-4 space-y-2">
          <p className="font-mono text-xs text-zinc-300">
            © {new Date().getFullYear()} Mallikarjun Reddy · Senior GenAI Engineer | AI Systems
          </p>
          <p className="text-[11px] text-zinc-400">
            Handcrafted with React, Vite & Tailwind CSS · Bengaluru, India
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
