import React from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

function AppContent() {
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen text-white transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-slate-100'}`}>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <footer className={`py-12 border-t text-center transition-colors duration-300 ${isDark ? 'bg-black border-white/10' : 'bg-slate-100 border-slate-300'}`}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <p className={`text-sm mb-4 ${isDark ? 'text-gray-500' : 'text-slate-600'}`}>
            © {new Date().getFullYear()} Mallikarjun Reddy. All rights reserved.
          </p>
          <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-slate-500'}`}>
            Built with React, Vite, and Tailwind CSS
          </p>
        </motion.div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
